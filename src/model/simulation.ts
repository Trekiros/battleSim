import { Action, AtkAction, BuffAction, Combattant, Creature, CreatureState, DebuffAction, Encounter, EncounterResult, HealAction, Round, SimulationResult, Team } from "./model"
import { clone, range } from "./utils"

function getRemainingUses(creature: Creature, rest: 'short rest'|'long rest', oldValue?: Map<string, number>) {
    const result = new Map<string, number>()

    creature.actions.forEach(action => {
        if (action.freq === "at will") return

        if ((action.freq === "1/fight")) result.set(action.name, 1)

        if ((action.freq === "1/day")) result.set(action.name, (rest === "long rest") ? 1 : (oldValue?.get(action.name) || 0))
    })

    return result
}

export function creatureToCombattant(creature: Creature) {
    const creatureState: CreatureState = {
        buffs: [],
        currentHP: creature.hp,
        remainingUses: getRemainingUses(creature, 'short rest'),
    }

    creature.actions.forEach(action => {
        if (action.freq !== "at will") creatureState.remainingUses.set(action.name, 1)
    })

    const result: Combattant = {
        id: crypto.randomUUID(),
        creature: clone(creature),
        initialState: creatureState,
        finalState: clone(creatureState),
        actions: [],
    }

    return result
}

function iterateCombattant(combattant: Combattant) {
    const newInitialState: CreatureState = clone(combattant.finalState)
    newInitialState.buffs = []

    const result: Combattant = {
        id: combattant.id,
        creature: combattant.creature,
        initialState: newInitialState,
        finalState: clone(newInitialState),
        actions: [],
    }

    return result
}

function getActions(combattant: Combattant): Action[] {
    const actionSlots = new Set()
    combattant.creature.actions.forEach(action => actionSlots.add(action.actionSlot))

    const result = Array.from(actionSlots).flatMap(actionSlot => {
        const actions = combattant.creature.actions.filter(action => (action.actionSlot === actionSlot))
            .sort((action1, action2) => {
                if (action1.condition !== "default") return 1
                if (action2.condition !== "default") return -1
                if (action1.freq !== "at will") return 1
                if (action2.freq !== "at will") return -1

                return action1.name.localeCompare(action2.name)
            })

        if (!actions.length) return []
        return [actions[0]]
    })
    return result
}

function getTargets(combattant: Combattant, action: Action, allies: Combattant[], enemies: Combattant[]): Combattant[] {
    const getHighestDPR = (group: Combattant[]) => {
        const getDPR = (combattant: Combattant) => {
            return getActions(combattant)
            .map(action => {
                if (action.type !== "atk") return 0
                return action.dpr * action.targets
            })
            .reduce((dpr1, dpr2) => (dpr1 + dpr2))
        }

        return group.reduce((creature1, creature2) => {
            const creature1DPR = getDPR(creature1)
            const creature2DPR = getDPR(creature2)
            
            return (creature1DPR > creature2DPR) ? creature1 : creature2
        })
    }

    const getTarget = (combattant: Combattant, action: Action, allies: Combattant[], enemies: Combattant[]) => {
        if (action.target === 'self') return combattant
        if (action.target === "ally with the highest AC") return allies.reduce((a1, a2) => (a1.creature.AC > a2.creature.AC) ? a1 : a2)
        if (action.target === "ally with the lowest AC") return allies.reduce((a1, a2) => (a1.creature.AC < a2.creature.AC) ? a1 : a2)
        if (action.target === "ally with the most HP") return allies.reduce((a1, a2) => (a1.finalState.currentHP > a2.finalState.currentHP) ? a1 : a2)
        if (action.target === "ally with the least HP") return allies.reduce((a1, a2) => (a1.finalState.currentHP < a2.finalState.currentHP) ? a1 : a2)
        if (action.target === "ally with the highest DPR") return getHighestDPR(allies)
        if (action.target === "enemy with highest AC") return enemies.reduce((a1, a2) => (a1.creature.AC > a2.creature.AC) ? a1 : a2)
        if (action.target === "enemy with lowest AC") return enemies.reduce((a1, a2) => (a1.creature.AC < a2.creature.AC) ? a1 : a2)
        if (action.target === "enemy with most HP") return enemies.reduce((a1, a2) => (a1.finalState.currentHP > a2.finalState.currentHP) ? a1 : a2)
        if (action.target === "enemy with least HP") return enemies.reduce((a1, a2) => (a1.finalState.currentHP < a2.finalState.currentHP) ? a1 : a2)
        /* if (action.target === "enemy with highest DPR") */ return getHighestDPR(enemies)
    }

    let targetsCount = action.targets
    let targets: Combattant[] = []
    let targettableAllies = new Set(allies)
    let targettableEnemies = new Set(enemies)
    while ((targetsCount > 0) && (targettableAllies.size > 0) && (targettableEnemies.size > 0)) {
        targetsCount--

        const target = getTarget(combattant, action, Array.from(targettableAllies), Array.from(targettableEnemies))
        targettableAllies.delete(target)
        targettableEnemies.delete(target)
        targets.push(target)
    }
    return targets
}

function generateActions(allies: Combattant[], enemies: Combattant[]) {
    allies.forEach(ally => {
        if (ally.initialState.currentHP <= 0) return

        ally.actions = getActions(ally)
            .map(action => ({
                action: action, 
                targets: getTargets(ally, action, allies, enemies).map(target => target.id),
            }))
    })
}

function findByIds(targets: Combattant[], ids: string[]) {
    return ids.map(id => targets.find(target => (target.id === id))!)
}

function handleBuffsDebuffs(allies: Combattant[], enemies: Combattant[]) {
    allies.forEach(ally => {
        ally.actions.forEach(({ action, targets }) => {
            if (action.type === "buff") findByIds(allies, targets).forEach(target => useBuffAction(action, target))
            if (action.type === "debuff") findByIds(enemies, targets).forEach(target => useDebuffAction(action, target))
        })
    })
}

function handleAttacksHeals(allies: Combattant[], enemies: Combattant[]) {
    allies.forEach(ally => {
        ally.actions.forEach(({ action, targets }) => {
            if (action.type === "heal") findByIds(allies, targets).forEach(target => useHealAction(action, target))
            if (action.type === "atk") findByIds(enemies, targets).forEach(target => useAtkAction(ally, action, target))
        })
    })
}

function useBuffAction(action: BuffAction, target: Combattant) {
    target.finalState.buffs.push({
        ac: action.acBonus,
        damage: action.damageBonus,
        toHit: action.toHitBonus,
    })
}

function useDebuffAction(action: DebuffAction, target: Combattant) {
    target.finalState.buffs.push({
        ac: action.acDebuff,
        damage: action.damageDebuff,
        toHit: action.toHitDebuff,
    })
}

function useAtkAction(attacker: Combattant, action: AtkAction, target: Combattant) {
    const toHit  = action.toHit + attacker.finalState.buffs.map(buff => (buff.toHit || 0))  .reduce((a, b) => (a+b))
    const ac     = target.creature.AC + target.finalState.buffs.map(buff => (buff.ac || 0)).reduce((a, b) => (a+b))
    const damage = action.dpr + attacker.finalState.buffs.map(buff => (buff.damage || 0)) .reduce((a, b) => (a+b))

    const hitChance = Math.min(1, Math.max(0, (11 + toHit - (ac - 10)) / 20))
    target.finalState.currentHP = Math.max(0, target.finalState.currentHP - damage * hitChance)
}

function useHealAction(action: HealAction, target: Combattant) {
    target.finalState.currentHP = Math.min(target.creature.hp, target.finalState.currentHP + action.amount)
}

// The attackers & defenders must be clones here, they will both be mutated
function runRound(team1: Combattant[], team1Surprised: boolean, team2: Combattant[], team2Surprised: boolean): Round {
    const round: Round = {
        team1: team1.map(iterateCombattant),
        team2: team2.map(iterateCombattant),
    }

    if (!team1Surprised) generateActions(round.team1, round.team2)
    if (!team2Surprised) generateActions(round.team2, round.team1)

    //Buffs/Debuffs are resolved first
    handleBuffsDebuffs(round.team1, round.team2)
    handleBuffsDebuffs(round.team2, round.team1)

    handleAttacksHeals(round.team1, round.team2)
    handleAttacksHeals(round.team2, round.team1)

    return round
}

function runEncounter(players: {creature: Creature, state: CreatureState}[], encounter: Encounter): EncounterResult {
    let team1: Combattant[] = players.map(({ creature, state }) => ({
        id: crypto.randomUUID(),
        creature: clone(creature),
        actions: [],
        initialState: clone(state),
        finalState: clone(state),
    }))
    let team2: Combattant[] = encounter.monsters.flatMap(monster => range(monster.count).map((i) => {
        const combattant = creatureToCombattant(monster)
        combattant.creature.name = (monster.count > 1) ? `${monster.name} ${i+1}` : monster.name
        return combattant
    }))
    
    let playersSurprised = encounter.playersSurprised
    let monstersSurprised = encounter.monstersSurprised
    const rounds: Round[] = []

    const hasLivingCombattant = (team: Combattant[]) => !!team.find(combattant => (combattant.finalState.currentHP > 0))

    do {
        const round = runRound(team1, playersSurprised, team2, monstersSurprised)
        rounds.push(round)
        playersSurprised = false
        monstersSurprised = false
        team1 = round.team1
        team2 = round.team2
    } while (hasLivingCombattant(team1) && hasLivingCombattant(team2) && (rounds.length < 20))

    return rounds
}

export function runSimulation(players: Creature[], encounters: Encounter[]) {
    const results: SimulationResult = []

    let playersWithState = players.flatMap(player => range(player.count).map((i) => ({
        creature: {...player, name: (player.count > 1) ? `${player.name} ${i+1}` : player.name } as Creature,
        state: { buffs: [], currentHP: player.hp, remainingUses: getRemainingUses(player, 'long rest') } as CreatureState,
    })))

    encounters.forEach(encounter => {
        const encounterResult = runEncounter(playersWithState, encounter)
        results.push(encounterResult)

        const lastRound = encounterResult[encounterResult.length - 1]
        playersWithState = lastRound.team1.map(({ creature, finalState }) => {
            const state: CreatureState = {
                currentHP: finalState.currentHP,
                buffs: [],
                remainingUses: getRemainingUses(creature, 'short rest', finalState.remainingUses)
            }
            
            return { creature, state }
        })
    })

    return results
}