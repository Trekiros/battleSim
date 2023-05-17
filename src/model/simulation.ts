import { ActionType } from "./enums"
import { Action, AtkAction, BuffAction, Combattant, Creature, CreatureState, DebuffAction, Encounter, EncounterResult, HealAction, Round, SimulationResult, Team } from "./model"
import { clone, range } from "./utils"

function getRemainingUses(creature: Creature, rest: 'short rest'|'long rest', oldValue?: Map<string, number>) {
    const result = new Map<string, number>()

    creature.actions.forEach(action => {
        if (action.freq === "at will") return

        if ((action.freq === "1/fight")) result.set(action.id, 1)

        if ((action.freq === "1/day")) result.set(action.id, (rest === "long rest") ? 1 : (oldValue?.get(action.name) || 0))
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

function getActions(combattant: Combattant, allies: Combattant[]): Action[] {
    const actionSlots = new Set()
    combattant.creature.actions.forEach(action => actionSlots.add(action.actionSlot))

    function isUsable(action: Action) {
        if (action.freq === 'at will') return true
        
        const remainingUses = combattant.finalState.remainingUses.get(action.id)
        return !!remainingUses
    }

    function matchCondition(action: Action) {
        if (action.condition === 'is under half HP') return (combattant.initialState.currentHP * 2 < combattant.creature.hp)
        if (action.condition === 'ally at 0 HP') return (!!allies.find(ally => (ally.initialState.currentHP === 0)))
        
        // Default or "is use available"
        return true
    }

    const result = Array.from(actionSlots).flatMap(actionSlot => {
        const actions = combattant.creature.actions
            .filter(action => (action.actionSlot === actionSlot))
            .filter(isUsable)
            .filter(matchCondition)
            .sort((action1, action2) => {
                if (action1.condition !== "default") return -1
                if (action2.condition !== "default") return 1
                if (action1.freq !== "at will") return -1
                if (action2.freq !== "at will") return 1

                return action1.name.localeCompare(action2.name)
            })

        if (!actions.length) return []
        return [actions[0]]
    })
    return result
}

function getNextTarget(combattant: Combattant, action: Action, allies: Combattant[], enemies: Combattant[]): Combattant|undefined {
    const getHighestDPR = (group: Combattant[]) => {
        const getDPR = (combattant: Combattant) => {
            return getActions(combattant, allies)
            .map(action => {
                if (action.type !== "atk") return 0
                return action.dpr * action.targets
            })
            .reduce((dpr1, dpr2) => (dpr1 + dpr2), 0)
        }

        return group.reduce((creature1, creature2) => {
            const creature1DPR = getDPR(creature1)
            const creature2DPR = getDPR(creature2)
            
            return (creature1DPR > creature2DPR) ? creature1 : creature2
        })
    }

    if (action.target.startsWith('ally') && (allies.length === 0)) return undefined
    if (action.target.startsWith('enemy') && (enemies.length === 0)) return undefined

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

function generateActions(allies: Combattant[], enemies: Combattant[]) {
    allies.forEach(ally => {
        if (ally.initialState.currentHP <= 0) return

        ally.actions = getActions(ally, allies)
            .map(action => ({
                action: action, 
                targets: [],
            }))

        ally.actions.filter(({ action }) => (action.freq !== 'at will'))
            .forEach(({ action }) => {
                let remainingUses = ally.initialState.remainingUses.get(action.id) || 0
                remainingUses = Math.max(0, remainingUses - 1)
                ally.finalState.remainingUses.set(action.id, remainingUses)
            })
    })
}

function handleActions(allies: Combattant[], enemies: Combattant[], actionTypes: ActionType[]) {
    allies.forEach(combattant => {
        combattant.actions.filter(({ action }) => (actionTypes.includes(action.type)))
            .forEach((turn) => {
                let targetsCount = turn.action.targets
                let targettableAllies = new Set(allies)
                let targettableEnemies = new Set(enemies.filter(enemy => (enemy.finalState.currentHP > 0)))
                while ((targetsCount > 0) && (targettableAllies.size > 0) && (targettableEnemies.size > 0)) {
                    targetsCount--
            
                    const target = getNextTarget(combattant, turn.action, Array.from(targettableAllies), Array.from(targettableEnemies))
                    if (target) {
                        targettableAllies.delete(target)
                        targettableEnemies.delete(target)
                        turn.targets.push(target.id)

                        if (turn.action.type === "buff") useBuffAction(turn.action, target)
                        if (turn.action.type === "debuff") useDebuffAction(turn.action, target)
                        if (turn.action.type === "heal") useHealAction(turn.action, target)
                        if (turn.action.type === "atk") useAtkAction(combattant, turn.action, target)
                    }
                }
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
    const toHit  = action.toHit + attacker.finalState.buffs.map(buff => (buff.toHit || 0)) .reduce((a, b) => (a+b), 0)
    const ac     = target.creature.AC + target.finalState.buffs.map(buff => (buff.ac || 0)).reduce((a, b) => (a+b), 0)
    const damage = action.dpr + attacker.finalState.buffs.map(buff => (buff.damage || 0))  .reduce((a, b) => (a+b), 0)

    const hitChance = Math.min(1, Math.max(0, (11 + toHit - (ac - 10)) / 20))
    target.finalState.currentHP = Math.min(target.finalState.currentHP, Math.max(0, target.finalState.currentHP - damage * hitChance))
}

function useHealAction(action: HealAction, target: Combattant) {
    target.finalState.currentHP = Math.max(target.finalState.currentHP, Math.min(target.creature.hp, target.finalState.currentHP + action.amount))
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
    handleActions(round.team1, round.team2, ['buff', 'debuff'])
    handleActions(round.team2, round.team1, ['buff', 'debuff'])

    handleActions(round.team1, round.team2, ['atk', 'heal'])
    handleActions(round.team2, round.team1, ['atk', 'heal'])

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