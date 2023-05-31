import { ActionType } from "./enums"
import { Action, AtkAction, Buff, BuffAction, Combattant, Creature, CreatureState, DebuffAction, DiceExpression, Encounter, EncounterResult, EncounterStats, HealAction, Round, SimulationResult, Team } from "./model"
import { clone, evaluateDiceExpression, range } from "./utils"
import { v4 as uuid } from 'uuid'

function evalOptionalDiceExpression(expr: DiceExpression|undefined, canCrit?: boolean): number|undefined {
    if (expr === undefined) return undefined
    return evaluateDiceExpression(expr, canCrit)
}

function getRemainingUses(creature: Creature, rest: 'none'|'short rest'|'long rest', oldValue?: Map<string, number>) {
    const result = new Map<string, number>()

    creature.actions.forEach(action => {
        if (action.freq === "at will") return

        if ((action.freq === "1/fight")) result.set(action.id, ((rest === "long rest") || (rest === "short rest")) ? 1 : (oldValue?.get(action.name) || 0))

        if ((action.freq === "1/day")) result.set(action.id, (rest === "long rest") ? 1 : (oldValue?.get(action.name) || 0))
    })

    return result
}

// Used to generate monsters, never players
export function creatureToCombattant(creature: Creature) {
    const creatureState: CreatureState = {
        buffs: new Map(),
        currentHP: creature.hp,
        remainingUses: getRemainingUses(creature, 'long rest'),
        upcomingBuffs: new Map(),
    }

    creature.actions.forEach(action => {
        if (action.freq !== "at will") creatureState.remainingUses.set(action.name, 1)
    })

    const result: Combattant = {
        id: uuid(),
        creature: clone(creature),
        initialState: creatureState,
        finalState: clone(creatureState),
        actions: [],
    }

    return result
}

function iterateCombattant(combattant: Combattant) {
    const newInitialState: CreatureState = clone(combattant.finalState)
    newInitialState.buffs = new Map()
    combattant.finalState.buffs.forEach((buff, name) => {
        if (buff.duration === 'entire encounter') newInitialState.buffs.set(name, clone(buff))
    })
    combattant.finalState.upcomingBuffs.forEach((buff, name) => {
        newInitialState.buffs.set(name, clone(buff))
    })

    const result: Combattant = {
        id: combattant.id,
        creature: combattant.creature,
        initialState: newInitialState,
        finalState: clone(newInitialState),
        actions: [],
    }

    return result
}

function getActions(combattant: Combattant, allies: Combattant[], handleHeals: boolean, stats: Map<string, EncounterStats>): Action[] {
    const actionSlots = new Set()
    combattant.creature.actions.forEach(action => actionSlots.add(action.actionSlot))

    function isUsable(action: Action) {
        if (action.freq === 'at will') return true
        
        const remainingUses = combattant.finalState.remainingUses.get(action.id)
        return !!remainingUses
    }

    function matchCondition(action: Action) {
        if (action.condition === 'is under half HP') return (combattant.finalState.currentHP * 2 < combattant.creature.hp)
        if (action.condition === 'ally at 0 HP') return (!!allies.find(ally => (ally.finalState.currentHP === 0)))
        
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

    // Handle heals now, so the next creature doesn't have to waste actions healing the same target
    if (handleHeals) result.forEach(action => {
            if (action.type !== 'heal') return

            const combattantAction: Combattant['actions'][0] = {
                action,
                targets: [],
            }
            combattant.actions.push(combattantAction)

            let targetCount = action.targets
            const targettableAllies = new Set(allies)
            while ((targettableAllies.size > 0) && (targetCount > 0)) {
                targetCount--
                const target = getNextTarget(combattant, action, Array.from(targettableAllies), [], stats)

                if (!target) break;

                targettableAllies.delete(target)
                combattantAction.targets.push(target.id)
                useHealAction(combattant, action, target, stats)
            }
        })

    return result
}

function getNextTarget(combattant: Combattant, action: Action, allies: Combattant[], enemies: Combattant[], stats: Map<string, EncounterStats>): Combattant|undefined {
    const getHighestDPR = (group: Combattant[]) => {
        const getDPR = (combattant: Combattant) => {
            const dmgBonus = getBuffs(combattant, b => b.damage, 'add')
            const dmgMult = getBuffs(combattant, b => b.damageMultiplier, 'mult')
            
            return getActions(combattant, allies, false, stats)
            .map(action => {
                if (action.type !== "atk") return 0
                return (evaluateDiceExpression(action.dpr) + dmgBonus) * action.targets * dmgMult
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

function generateActions(allies: Combattant[], enemies: Combattant[], stats: Map<string, EncounterStats>) {
    allies.forEach(ally => {
        if (ally.initialState.currentHP <= 0) return

        ally.actions.push(...getActions(ally, allies, true, stats)
            .map(action => ({
                action: action, 
                targets: [],
            })))

        // Save uses for limited-use actions
        ally.actions.filter(({ action }) => (action.freq !== 'at will'))
            .forEach(({ action }) => {
                let remainingUses = ally.initialState.remainingUses.get(action.id) || 0
                remainingUses = Math.max(0, remainingUses - 1)
                ally.finalState.remainingUses.set(action.id, remainingUses)
            })
    })
}

function handleActions(allies: Combattant[], enemies: Combattant[], actionTypes: ActionType[], stats: Map<string, EncounterStats>) {
    allies.forEach(combattant => {
        combattant.actions.filter(({ action }) => (actionTypes.includes(action.type)))
            .forEach((turn) => {
                let targetsCount = turn.action.targets
                let targettableAllies = new Set(allies)
                let targettableEnemies = new Set(enemies.filter(enemy => (enemy.finalState.currentHP > 0)))
                while ((targetsCount > 0) && (targettableAllies.size > 0) && (targettableEnemies.size > 0)) {
                    targetsCount--
                    
                    const target = getNextTarget(combattant, turn.action, Array.from(targettableAllies), Array.from(targettableEnemies), stats)
                    if (target) {
                        targettableAllies.delete(target)
                        targettableEnemies.delete(target)
                        turn.targets.push(target.id)

                        if (turn.action.type === "buff") useBuffAction(combattant, turn.action, target, stats)
                        if (turn.action.type === "debuff") useDebuffAction(combattant, turn.action, target, stats)
                        //if (turn.action.type === "heal") useHealAction(turn.action, target) // Already handled before, in generateActions
                        if (turn.action.type === "atk") useAtkAction(combattant, turn.action, target, stats)
                    }
                }
            })
    })
}

function mergeBuff(target: Combattant, buffName: string, newBuff: Buff, comparisonMode: 'min'|'max') {
    const existingBuff = target.finalState.buffs.get(buffName)

    if (!existingBuff) {
        target.finalState.buffs.set(buffName, newBuff)
        return
    }

    function comparator(a: DiceExpression|undefined, b: DiceExpression|undefined) {
        if (a === undefined) return b
        if (b === undefined) return a

        const evalA = evaluateDiceExpression(a)
        const evalB = evaluateDiceExpression(b)

        const min = (evalA < evalB) ? a : b
        const max = (evalA < evalB) ? b : a

        return (comparisonMode === 'min') ? min : max
    }

    function numberComparator(a: number|undefined, b: number|undefined) {
        if (a === undefined) return b
        if (b === undefined) return a

        return (comparisonMode === 'min') ? Math.min(a,b) : Math.max(a,b)
    }

    const result: Buff = {
        duration: newBuff.duration,
        
        ac: comparator(newBuff.ac, existingBuff.ac),
        damage: comparator(newBuff.damage, existingBuff.damage),
        toHit: comparator(newBuff.toHit, existingBuff.toHit),
        damageMultiplier: numberComparator(newBuff.damageMultiplier, existingBuff.damageMultiplier),
        damageTakenMultiplier: numberComparator(newBuff.damageTakenMultiplier, existingBuff.damageTakenMultiplier),
        dc: comparator(newBuff.dc, existingBuff.dc),
        save: comparator(newBuff.save, existingBuff.save),

        magnitude: numberComparator(newBuff.magnitude, existingBuff.magnitude)
    }

    target.finalState.buffs.set(buffName, result)
}

function getStats(statsMap: Map<string, EncounterStats>, combattant: Combattant) {
    const id = combattant.id // Using this since the team can have multiples of a creature
    if (!statsMap.has(id)) {
        statsMap.set(id, {
            buffsReceived: 0,
            charactersBuffed: 0,
            charactersDebuffed: 0,
            damageDealt: 0,
            damageTaken: 0,
            debuffsReceived: 0,
            healGiven: 0,
            healReceived: 0,
            timesUnconscious: 0,
        })
    }
    return statsMap.get(id)!
}

function useBuffAction(buffer: Combattant, action: BuffAction, target: Combattant, stats: Map<string, EncounterStats>) {
    mergeBuff(target, action.name, action.buff, 'max')
    
    if (buffer.id !== target.id) {
        getStats(stats, buffer).charactersBuffed++
        getStats(stats, target).buffsReceived++
    }
}

function getBuffs(combattant: Combattant, getter: (buff: Buff) => DiceExpression|undefined, reducer: 'add'|'mult', canCrit?: boolean): number {
    return Array.from(combattant.finalState.buffs)
        .map(([_, buff]) => {
            const expr = getter(buff)
            
            if (expr === undefined) return (reducer === 'add') ? 0 : 1

            const value = evaluateDiceExpression(expr, canCrit)

            const magnitude = (buff.magnitude === undefined) ? 1 : buff.magnitude

            const valueWithMagnitude = (reducer === 'add') ? (value * magnitude) : (1 + (value - 1) * magnitude)

            return valueWithMagnitude
        })
        .reduce(
            (a,b) => (reducer === 'add') ? (a+b) : (a*b), 
            (reducer === 'add') ? 0 : 1
        )
}

function calculateChanceToFail(attacker: Combattant, target: Combattant, baseDC: DiceExpression) {
    const saveBonus = target.creature.saveBonus + getBuffs(target, b => b.save, 'add')
    const saveDC = evaluateDiceExpression(baseDC) + getBuffs(attacker, b => b.dc, 'add')
    const chanceToFail = 1 - Math.min(1, Math.max(0, (11 + saveBonus - (saveDC - 10)) / 20))

    return chanceToFail
}

function calculateHitChance(attacker: Combattant, target: Combattant, baseToHit: DiceExpression) {
    const toHit = evaluateDiceExpression(baseToHit) + getBuffs(attacker, b => b.toHit, 'add')
    const ac = target.creature.AC + getBuffs(target, b => b.ac, 'add')
    const hitChance = Math.min(1, Math.max(0, (11 + toHit - (ac - 10)) / 20))

    return hitChance
}


function useDebuffAction(attacker: Combattant, action: DebuffAction, target: Combattant, stats: Map<string, EncounterStats>) {
    const chanceToFail = calculateChanceToFail(attacker, target, action.saveDC)

    const buffClone: Buff = clone(action.buff)
    if (buffClone.magnitude === undefined) buffClone.magnitude = 1
    buffClone.magnitude *= chanceToFail

    mergeBuff(target, action.name, buffClone, 'min')
    
    if (attacker.id !== target.id) {
        getStats(stats, attacker).charactersDebuffed++
        getStats(stats, target).debuffsReceived++
    }
}

function useAtkAction(attacker: Combattant, action: AtkAction, target: Combattant, stats: Map<string, EncounterStats>) {
    const hitChance = action.useSaves ?
        calculateChanceToFail(attacker, target, action.toHit)
        : calculateHitChance(attacker, target, action.toHit)

    const damage = (
            evaluateDiceExpression(action.dpr, !action.useSaves)
            + getBuffs(attacker, b => b.damage, 'add', !action.useSaves)
        )
        * getBuffs(attacker, b => b.damageMultiplier, 'mult')
        * getBuffs(target, b => b.damageTakenMultiplier, 'mult')

    const actualDamage = damage * hitChance
    target.finalState.currentHP = Math.min(target.finalState.currentHP, Math.max(0, target.finalState.currentHP - actualDamage))

    Array.from(attacker.finalState.buffs).forEach(([name, buff]) => { if (buff.duration === 'until next attack made') attacker.finalState.buffs.delete(name) })
    Array.from(target.finalState.buffs).forEach(([name, buff]) => { if (buff.duration === 'until next attack taken') target.finalState.buffs.delete(name) })

    getStats(stats, attacker).damageDealt += actualDamage
    getStats(stats, target).damageTaken += actualDamage

    if (action.riderEffect) {
        const buffMagnitude = hitChance * calculateChanceToFail(attacker, target, action.riderEffect.dc)

        const buffClone = clone(action.riderEffect.buff)
        if (buffClone.magnitude === undefined) buffClone.magnitude = 1
        buffClone.magnitude *= buffMagnitude
        
        mergeBuff(target, action.name, buffClone, 'min')

        if (attacker.id !== target.id) {
            getStats(stats, attacker).charactersDebuffed++
            getStats(stats, target).debuffsReceived++
        }
    }
}

function useHealAction(healer: Combattant, action: HealAction, target: Combattant, stats: Map<string, EncounterStats>) {
    const amount = evaluateDiceExpression(action.amount)

    if ((target.finalState.currentHP === 0) && (amount > 0)) getStats(stats, target).timesUnconscious++
    getStats(stats, healer).healGiven += amount
    getStats(stats, target).healReceived += amount

    target.finalState.currentHP = Math.max(target.finalState.currentHP, Math.min(target.creature.hp, target.finalState.currentHP + amount)) 
}

// The attackers & defenders must be clones here, they will both be mutated
function runRound(team1: Combattant[], team1Surprised: boolean|undefined, team2: Combattant[], team2Surprised: boolean|undefined, stats: Map<string, EncounterStats>): Round {
    const round: Round = {
        team1: team1.map(iterateCombattant),
        team2: team2.map(iterateCombattant),
    }

    if (!team1Surprised) generateActions(round.team1, round.team2, stats)
    if (!team2Surprised) generateActions(round.team2, round.team1, stats)

    // Heals are resolved as soon as the actions are declared, to avoid situations where multiple creatures needlessly waste actions healing the same target
    // Then buffs/debuffs are resolved 
    handleActions(round.team1, round.team2, ['buff', 'debuff'], stats)
    handleActions(round.team2, round.team1, ['buff', 'debuff'], stats)

    // And finally, attacks
    handleActions(round.team1, round.team2, ['atk'], stats)
    handleActions(round.team2, round.team1, ['atk'], stats)

    return round
}

function runEncounter(players: {creature: Creature, state: CreatureState}[], encounter: Encounter): EncounterResult {
    let team1: Combattant[] = players.map(({ creature, state }) => ({
        id: uuid(),
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
    const stats = new Map<string, EncounterStats>()

    const hasLivingCombattant = (team: Combattant[]) => !!team.find(combattant => (combattant.finalState.currentHP > 0))

    do {
        const round = runRound(team1, playersSurprised, team2, monstersSurprised, stats)
        rounds.push(round)
        playersSurprised = false
        monstersSurprised = false
        team1 = round.team1
        team2 = round.team2
    } while (hasLivingCombattant(team1) && hasLivingCombattant(team2) && (rounds.length < 20))

    return { rounds, stats }
}

export function runSimulation(players: Creature[], encounters: Encounter[]) {
    const results: SimulationResult = []

    let playersWithState = players.flatMap(player => range(player.count)
        .map<{ creature:Creature, state: CreatureState }>((i) => ({
            creature: {
                ...player, 
                name: (player.count > 1) ? `${player.name} ${i+1}` : player.name 
            },
            state: { 
                buffs: new Map<string, Buff>(),
                upcomingBuffs: new Map<string, Buff>(),
                currentHP: player.hp, 
                remainingUses: getRemainingUses(player, 'long rest'),
            },
        }))
    )

    encounters.forEach((encounter, index) => {
        const encounterResult = runEncounter(playersWithState, encounter)
        results.push(encounterResult)

        const lastRound = encounterResult.rounds[encounterResult.rounds.length - 1]
        const nextEncounter = encounters[index + 1]
        playersWithState = lastRound.team1.map(({ creature, finalState }) => {
            const state: CreatureState = {
                currentHP: nextEncounter?.shortRest ? creature.hp : finalState.currentHP,
                buffs: new Map(),
                upcomingBuffs: new Map(),
                remainingUses: getRemainingUses(creature, nextEncounter?.shortRest ? 'short rest' : 'none', finalState.remainingUses),
            }
            
            return { creature, state }
        })
    })

    return results
}