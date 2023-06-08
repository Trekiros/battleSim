import { ActionTemplates, getFinalAction } from "../data/actions"
import { evaluateDiceFormula } from "./dice"
import { ActionSlots, ActionType, CreatureCondition, CreatureConditionList } from "./enums"
import { Action, AtkAction, Buff, BuffAction, Combattant, Creature, CreatureState, DebuffAction, DiceFormula, Encounter, EncounterResult, EncounterStats, FinalAction, HealAction, Round, SimulationResult } from "./model"
import { clone, range } from "./utils"
import { v4 as uuid } from 'uuid'

// Used to update a creature's resources between encounters
function getRemainingUses(creature: Creature, rest: 'none'|'short rest'|'long rest', oldValue?: Map<string, number>) {
    const result = new Map<string, number>()

    creature.actions.forEach(action => {
        if (action.freq === "at will") return

        else if ((action.freq === "1/fight")) result.set(action.id, ((rest === "long rest") || (rest === "short rest")) ? 1 : (oldValue?.get(action.id) || 0))

        else if ((action.freq === "1/day")) result.set(action.id, (rest === "long rest") ? 1 : (oldValue?.get(action.id) || 0))

        else if (action.freq.reset === 'recharge') result.set(action.id, 1)

        else if (action.freq.reset === 'lr') result.set(action.id, (rest === 'long rest') ? action.freq.uses : (oldValue?.get(action.id) || 0))

        else if (action.freq.reset === 'sr') result.set(action.id, ((rest === "long rest") || (rest === "short rest")) ? action.freq.uses : (oldValue?.get(action.id) || 0))
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
        usedActions: new Set(),
    }

    const result: Combattant = {
        id: uuid(),
        creature: clone(creature),
        initialState: creatureState,
        finalState: clone(creatureState),
        actions: [],
    }

    return result
}

// Creates a copy of the combattant that can be used on the next round
function iterateCombattant(combattant: Combattant) {
    const newInitialState: CreatureState = clone(combattant.finalState)
    newInitialState.buffs = new Map()
    newInitialState.upcomingBuffs = new Map()
    
    // Handle buffs
    combattant.finalState.buffs.forEach((buff, name) => {
        if (buff.duration === 'entire encounter') newInitialState.buffs.set(name, clone(buff))
    })
    combattant.finalState.upcomingBuffs.forEach((buff, name) => {
        newInitialState.buffs.set(name, clone(buff))
    })

    // Handle recharge abilities
    combattant.creature.actions.forEach(action => {
        if (typeof action.freq === 'string') return
        if (action.freq.reset !== 'recharge') return

        const increment = 1 / action.freq.cooldownRounds

        let remainingUses = newInitialState.remainingUses.get(action.id) || 0
        remainingUses = Math.min(1, remainingUses + increment)
        newInitialState.remainingUses.set(action.id, remainingUses)
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

// Checks for remaining uses
function isUsable(combattant: Combattant, action: FinalAction) {
    // Can only trigger 'on kill' effects once per turn
    if (action.actionSlot === ActionSlots["When reducing an enemy to 0 HP"]) {
        if (combattant.actions.find(actionTaken => actionTaken.action.id === action.id)) return false
    }

    if (action.freq === 'at will') return true
    
    const remainingUsesMap = combattant.finalState.remainingUses

    const remainingUses = remainingUsesMap.get(action.id)

    return (remainingUses !== undefined) && (remainingUses >= 1)
}

// Checks action.condition
function matchCondition(combattant: Combattant, action: Action, allies: Combattant[]) {
    if (action.condition === 'not used yet') return !combattant.initialState.usedActions.has(action.id)
    if (action.condition === 'has no THP') return ((combattant.initialState.tempHP === undefined) || (combattant.initialState.tempHP === 0))
    if (action.condition === 'is under half HP') return (combattant.finalState.currentHP * 2 < combattant.creature.hp)
    if (action.condition === 'ally at 0 HP') return (!!allies.find(ally => (ally.finalState.currentHP === 0)))
    if (action.condition === 'ally under half HP') return !!allies.find(ally => ((ally.initialState.currentHP > 0) && (ally.finalState.currentHP <= ally.creature.hp / 2)))

    // Default or "is use available"
    return true
}

// Determines which actions a creature will use. Does not actually perform the actions.
// The exception is heals, to avoid situations where multiple healers all heal the same creature despite having the "ally at 0 hp" condition
function getActions(combattant: Combattant, allies: Combattant[], handleHeals: boolean, stats: Map<string, EncounterStats>): FinalAction[] {
    const actionSlots = new Set()
    combattant.creature.actions
        .map(getFinalAction)
        .filter(action => (action.actionSlot >= 0))
        .forEach(action => actionSlots.add(action.actionSlot))

    const result = Array.from(actionSlots).flatMap(actionSlot => {
        const actions = combattant.creature.actions
            .map(getFinalAction)
            .filter(action => (action.actionSlot === actionSlot))
            .filter(action => isUsable(combattant, action))
            .filter(action => matchCondition(combattant, action, allies))
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
                targets: new Map(),
            }
            combattant.actions.push(combattantAction)

            let targetCount = action.targets
            const targettableAllies = new Set(allies.filter(combattant => {
                // Monsters cannot be healed if they're at 0 hit points
                if (combattant.creature.cr === undefined) return true
                return (combattant.initialState.currentHP !== 0)
            }))

            // THP cannot revive a creature
            if (action.tempHP) {
                targettableAllies.forEach(ally => {
                    if (ally.initialState.currentHP === 0) targettableAllies.delete(ally)
                })
            }

            while ((targettableAllies.size > 0) && (targetCount > 0)) {
                targetCount--
                const target = getNextTarget(combattant, action, Array.from(targettableAllies), [], stats)

                if (!target) break;

                targettableAllies.delete(target)
                combattantAction.targets.set(target.id, 1)
                useHealAction(combattant, action, target, stats)
            }
        })

    return result
}

// Actions can target multiple creatures. This finds the next valid target for that action.
function getNextTarget(combattant: Combattant, action: FinalAction, allies: Combattant[], enemies: Combattant[], stats: Map<string, EncounterStats>): Combattant|undefined {
    const getHighestDPR = (group: Combattant[]) => {
        const getDPR = (combattant: Combattant) => {
            const dmgBonus = getBuffs(combattant, b => b.damage, 'add')
            const dmgMult = getBuffs(combattant, b => b.damageMultiplier, 'mult')
            
            return getActions(combattant, allies, false, stats)
            .map(action => {
                if (action.type !== "atk") return 0
                return (evaluateDiceFormula(action.dpr) + dmgBonus) * action.targets * dmgMult
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
    if (action.target === "enemy with most HP") return enemies.reduce((a1, a2) => (a1.finalState.currentHP + (a1.finalState.tempHP || 0) > a2.finalState.currentHP + (a2.finalState.tempHP || 0)) ? a1 : a2)
    if (action.target === "enemy with least HP") return enemies.reduce((a1, a2) => (a1.finalState.currentHP + (a1.finalState.tempHP || 0) < a2.finalState.currentHP + (a2.finalState.tempHP || 0)) ? a1 : a2)
    /* if (action.target === "enemy with highest DPR") */ return getHighestDPR(enemies)
}

// Calculates which actions each creature is going to take, and saves them in combattant.actions
// Also updates the remaining uses for each action.
function generateActions(allies: Combattant[], enemies: Combattant[], stats: Map<string, EncounterStats>) {
    allies.forEach(ally => {
        if (ally.initialState.currentHP <= 0) return

        ally.actions.push(...getActions(ally, allies, true, stats)
            .map(action => ({
                action: action, 
                targets: new Map(),
            })))

        // Save uses for limited-use actions
        ally.actions.filter(({ action }) => (action.freq !== 'at will'))
            .forEach(({ action }) => {
                let remainingUses = ally.initialState.remainingUses.get(action.id) || 0
                remainingUses = Math.max(0, remainingUses - 1)
                ally.finalState.remainingUses.set(action.id, remainingUses)

                ally.finalState.usedActions.add(action.id)
            })
    })
}

// The callback will be called for each valid target, sequentially
function getTargets(combattant: Combattant, action: FinalAction, allies: Combattant[], enemies: Combattant[], stats: Map<string, EncounterStats>, callback: (target: Combattant) => void) {
    const isAttack = (action.type === 'atk') && !action.useSaves
                
    let lastTarget: Combattant|undefined = undefined
    let targetsCount = action.targets
    let targettableAllies = new Set(allies)
    let targettableEnemies = new Set(enemies.filter(enemy => (enemy.finalState.currentHP > 0)))
    while ((targetsCount > 0) && (targettableAllies.size > 0) && (targettableEnemies.size > 0)) {
        targetsCount--
        
        // If it's an attack, continue attacking the same target until it's dead
        const target: Combattant|undefined = (isAttack && lastTarget) || 
            getNextTarget(combattant, action, Array.from(targettableAllies), Array.from(targettableEnemies), stats)
        
        if (target) {
            lastTarget = target

            callback(target)
            
            let removeTarget = true
            if ((action.type === 'atk') && !action.useSaves) {
                removeTarget = (target.finalState.currentHP === 0)
            }
            if (removeTarget) {
                targettableAllies.delete(target)
                targettableEnemies.delete(target)
                lastTarget = undefined
            }
        }
    }
}

// Executes the actions saved in combattant.actions by the generateActions() function
// Executes only the selected action type, so the different action types can be executed in the right order
function handleActions(allies: Combattant[], enemies: Combattant[], actionTypes: ActionType[], stats: Map<string, EncounterStats>) {
    allies.forEach(combattant => {
        combattant.actions
            .filter(({ action }) => (action.actionSlot >= 0))
            .filter(({ action }) => (actionTypes.includes(action.type)))
            .forEach((turn) => {
                getTargets(combattant, turn.action, allies, enemies, stats, (target) => {
                    turn.targets.set(target.id, 1 + (turn.targets.get(target.id) || 0))

                    if (turn.action.type === "buff") useBuffAction(combattant, turn.action, target, stats)
                    if (turn.action.type === "debuff") useDebuffAction(combattant, turn.action, target, stats)
                    //if (turn.action.type === "heal") useHealAction(turn.action, target) // Already handled before, in generateActions
                    if (turn.action.type === "atk") useAtkAction(combattant, turn.action, target, allies, enemies, stats)
                })
            })
    })
}

// This is called when an action with a negative/special action slot is triggered
function triggerAction(combattant: Combattant, actionSlot: keyof typeof ActionSlots, allies: Combattant[], enemies: Combattant[], stats: Map<string, EncounterStats>) {
    combattant.creature.actions
        .map(getFinalAction)
        .forEach(action => {
            if (action.actionSlot !== ActionSlots[actionSlot]) return
            if (!isUsable(combattant, action)) return
            if (!matchCondition(combattant, action, allies)) return

            const targets: Map<string, number> = new Map()
            combattant.actions.push({ action: action, targets: targets })

            getTargets(combattant, action, allies, enemies, stats, (target) => {
                targets.set(target.id, 1 + (targets.get(target.id) || 0))

                const ignoreIncapacitated = true
                switch (action.type) {
                    case "buff": return useBuffAction(combattant, action, target, stats, ignoreIncapacitated)
                    case "debuff": return useDebuffAction(combattant, action, target, stats, ignoreIncapacitated)
                    case "heal": return useHealAction(combattant, action, target, stats, ignoreIncapacitated)
                    case "atk": return useAtkAction(combattant, action, target, allies, enemies, stats, ignoreIncapacitated)
                }
            })
            
            // Save uses for limited-use actions
            if (action.freq != 'at will') {
                let remainingUses = combattant.finalState.remainingUses.get(action.id) || 0
                remainingUses = Math.max(0, remainingUses - 1)
                combattant.finalState.remainingUses.set(action.id, remainingUses)

                combattant.finalState.usedActions.add(action.id)
            }
        })
}

function applyBuff(target: Combattant, buffName: string, newBuff: Buff, comparisonMode: 'min' | 'max') {
    const existingBuff = target.finalState.buffs.get(buffName)

    if (!existingBuff) {
        target.finalState.buffs.set(buffName, newBuff)
        return
    }
    const result = mergeBuff(existingBuff, newBuff, comparisonMode)
    target.finalState.buffs.set(buffName, result)
}

// In 5e, only the stronger buff is applies
// This figures out which buff is the strongest, and applies that one.
function mergeBuff(buff1: Buff, buff2: Buff, comparisonMode: 'min'|'max'): Buff {
    function comparator(a: DiceFormula|undefined, b: DiceFormula|undefined) {
        if (a === undefined) return b
        if (b === undefined) return a

        const evalA = evaluateDiceFormula(a)
        const evalB = evaluateDiceFormula(b)

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
        duration: buff1.duration,
        
        ac: comparator(buff1.ac, buff2.ac),
        damage: comparator(buff1.damage, buff2.damage),
        toHit: comparator(buff1.toHit, buff2.toHit),
        damageMultiplier: numberComparator(buff1.damageMultiplier, buff2.damageMultiplier),
        damageTakenMultiplier: numberComparator(buff1.damageTakenMultiplier, buff2.damageTakenMultiplier),
        dc: comparator(buff1.dc, buff2.dc),
        save: comparator(buff1.save, buff2.save),
        condition: buff1.condition || buff2.condition,

        magnitude: atLeastOneChance([
            buff1.magnitude !== undefined ? buff1.magnitude : 1,
            buff2.magnitude !== undefined ? buff2.magnitude : 1,
        ]),
    }
    return result
}

function getStats(statsMap: Map<string, EncounterStats>, combattant: Combattant) {
    const id = combattant.id // Using the combattant's id, instead of the creature's id, since the team can have multiples of a creature
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

function useBuffAction(buffer: Combattant, action: BuffAction, target: Combattant, stats: Map<string, EncounterStats>, ignoreIncapacitated?: boolean) {
    const attackerConditions = getConditions(buffer)
    const chanceToBeIncapacitated = ignoreIncapacitated ? 0 : atLeastOneConditionChance(attackerConditions, ['Incapacitated', 'Paralyzed', 'Petrified', 'Stunned', 'Unconscious'])
    applyBuff(target, action.id, { ...action.buff, magnitude: 1 - chanceToBeIncapacitated, displayName: action.name }, 'max')
    
    if (buffer.id !== target.id) {
        getStats(stats, buffer).charactersBuffed++
        getStats(stats, target).buffsReceived++
    }
}

// Sums up all of the buffs on a given combattant, taking into account the buff's magnitude
// e.g. getBuffs(combattant, b => b.ac, 'add') will return the total of all of the buffs which alter a creature's AC
function getBuffs(combattant: Combattant, getter: (buff: Buff) => DiceFormula|undefined, reducer: 'add'|'mult', canCrit?: boolean): number {
    return Array.from(combattant.finalState.buffs)
        .map(([_, buff]) => {
            const expr = getter(buff)
            
            if (expr === undefined) return (reducer === 'add') ? 0 : 1

            const value = evaluateDiceFormula(expr, canCrit)

            const magnitude = (buff.magnitude === undefined) ? 1 : buff.magnitude

            const valueWithMagnitude = (reducer === 'add') ? 
                  (value * magnitude) 
                : (1 + (value - 1) * magnitude) // For multiplier-type buffs, what is multiplied is the distance from a multiplier of 1

            return valueWithMagnitude
        })
        .reduce(
            (a,b) => (reducer === 'add') ? (a+b) : (a*b), 
            (reducer === 'add') ? 0 : 1
        )
}

// Returns the list of conditions affecting the creature, and the chance of those conditions being present
function getConditions(combattant: Combattant) {
    const result = new Map<CreatureCondition, number>()

    CreatureConditionList.forEach(condition => result.set(condition, 0))

    combattant.finalState.buffs.forEach((buff) => {
        if (!buff.condition) return

        const existingBuffChance = result.get(buff.condition) || 0
        const magnitude = buff.magnitude === undefined ? 1 : buff.magnitude
        const newBuffChance = existingBuffChance + (1 - existingBuffChance) * magnitude
        result.set(buff.condition, newBuffChance)
    })

    return result
}

// Returns the chance that at least one of the events happens, given the probabilities of these events
function atLeastOneChance(probabilities: number[]) {
    let noneHappening = 1
    probabilities.forEach(probability => {
        noneHappening *= 1 - probability
    })
    return 1 - noneHappening
}

function atLeastOneConditionChance(conditionsMap: Map<CreatureCondition, number>, conditions: CreatureCondition[]) {
    return atLeastOneChance(conditions.map(condition => conditionsMap.get(condition)!))
}

// Chance to fail against a saving throw
function calculateChanceToFail(attacker: Combattant, target: Combattant, baseDC: DiceFormula) {
    const targetConditions = getConditions(target)
    
    const chanceForAdvantage = atLeastOneConditionChance(targetConditions, ['Saves with Advantage'])
    const chanceForDisadvantage = atLeastOneConditionChance(targetConditions, ['Save with Disadvantage', 'Attacks and saves with Disadvantage'])

    const saveBonus = target.creature.saveBonus + getBuffs(target, b => b.save, 'add')
        + 4.5 * chanceForAdvantage
        - 4.5 * chanceForDisadvantage
    const saveDC = evaluateDiceFormula(baseDC) + getBuffs(attacker, b => b.dc, 'add')
    const chanceToFail = 1 - Math.min(1, Math.max(0, (11 + saveBonus - (saveDC - 10)) / 20))

    return chanceToFail
}

// Chance to hit with an attack
function calculateHitChance(attacker: Combattant, target: Combattant, baseToHit: DiceFormula) {
    const attackerConditions = getConditions(attacker)
    const targetConditions = getConditions(target)

    const chanceForAdvantage = atLeastOneChance([
        atLeastOneConditionChance(targetConditions, ['Blinded', 'Paralyzed', 'Restrained', 'Stunned', 'Unconscious', 'Petrified', 'Is attacked with Advantage', 'Attacks and is attacked with Advantage']),
        atLeastOneConditionChance(attackerConditions, ['Invisible', 'Attacks with Advantage', 'Attacks and is attacked with Advantage'])
    ])

    const chanceForDisadvantage = atLeastOneChance([
        atLeastOneConditionChance(targetConditions, ['Invisible', 'Is attacked with Disadvantage']),
        atLeastOneConditionChance(attackerConditions, ['Blinded', 'Frightened', 'Poisoned', 'Restrained', 'Attacks with Disadvantage', 'Attacks and saves with Disadvantage'])
    ])

    const toHit = evaluateDiceFormula(baseToHit) + getBuffs(attacker, b => b.toHit, 'add') + 4.5 * chanceForAdvantage - 4.5 * chanceForDisadvantage
    const ac = target.creature.AC + getBuffs(target, b => b.ac, 'add')
    const hitChance = Math.min(1, Math.max(0, (11 + toHit - (ac - 10)) / 20))

    return hitChance
}


function useDebuffAction(attacker: Combattant, action: DebuffAction, target: Combattant, stats: Map<string, EncounterStats>, ignoreIncapacitated?: boolean) {
    const attackerConditions = getConditions(attacker)
    const chanceToBeIncapacitated = ignoreIncapacitated ? 0 : atLeastOneConditionChance(attackerConditions, ['Incapacitated', 'Paralyzed', 'Petrified', 'Stunned', 'Unconscious'])
    
    const chanceToFail = (1 - chanceToBeIncapacitated) * calculateChanceToFail(attacker, target, action.saveDC)

    const buffClone: Buff = clone(action.buff)
    if (buffClone.magnitude === undefined) buffClone.magnitude = 1
    buffClone.magnitude *= chanceToFail

    applyBuff(target, action.id, buffClone, 'min')
    
    if (attacker.id !== target.id) {
        getStats(stats, attacker).charactersDebuffed++
        getStats(stats, target).debuffsReceived++
    }
}

function useAtkAction(attacker: Combattant, action: AtkAction, target: Combattant, allies: Combattant[], enemies: Combattant[], stats: Map<string, EncounterStats>, ignoreIncapacitated?: boolean) {
    const attackerConditions = getConditions(attacker)
    const chanceToBeIncapacitated = ignoreIncapacitated ? 0 : atLeastOneConditionChance(attackerConditions, ['Incapacitated', 'Paralyzed', 'Petrified', 'Stunned', 'Unconscious'])
    
    const hitChance = (1 - chanceToBeIncapacitated) * (action.useSaves ?
        calculateChanceToFail(attacker, target, action.toHit)
        : calculateHitChance(attacker, target, action.toHit))
        
    const targetConditions = getConditions(target)
    const damage = (
            evaluateDiceFormula(action.dpr, !action.useSaves)
            + getBuffs(attacker, b => b.damage, 'add', /* can crit: */ !action.useSaves)
        )
        * getBuffs(attacker, b => b.damageMultiplier, 'mult')
        * getBuffs(target, b => b.damageTakenMultiplier, 'mult')
        * (1 + targetConditions.get('Paralyzed')!)

    let actualDamage = damage * hitChance
    if (action.useSaves && action.halfOnSave) {
        actualDamage = damage * hitChance + (damage/2) * (1 - hitChance)
    }

    // Apply damage to temporary hit points first
    let remainingDamage = actualDamage
    if (target.finalState.tempHP) {
        target.finalState.tempHP = Math.min(target.finalState.tempHP, Math.max(0, target.finalState.tempHP - remainingDamage))
        remainingDamage = Math.max(0, remainingDamage - target.finalState.tempHP)
    }

    // Apply damage to hit points
    target.finalState.currentHP = Math.min(target.finalState.currentHP, Math.max(0, target.finalState.currentHP - remainingDamage))

    Array.from(attacker.finalState.buffs).forEach(([name, buff]) => { if (buff.duration === 'until next attack made') attacker.finalState.buffs.delete(name) })
    Array.from(target.finalState.buffs).forEach(([name, buff]) => { if (buff.duration === 'until next attack taken') target.finalState.buffs.delete(name) })

    getStats(stats, attacker).damageDealt += actualDamage
    getStats(stats, target).damageTaken += actualDamage

    if (action.riderEffect) {
        const buffMagnitude = hitChance * calculateChanceToFail(attacker, target, action.riderEffect.dc)

        let buffClone = clone(action.riderEffect.buff)
        if (buffClone.magnitude === undefined) buffClone.magnitude = 1
        buffClone.magnitude *= buffMagnitude
        
        const existingBuff = target.finalState.upcomingBuffs.get(action.id)
        if (existingBuff) {
            buffClone = mergeBuff(existingBuff, buffClone, 'min')
        }

        target.finalState.upcomingBuffs.set(action.id, buffClone)

        if (attacker.id !== target.id) {
            getStats(stats, attacker).charactersDebuffed++
            getStats(stats, target).debuffsReceived++
        }
    }
    
    if (target.finalState.currentHP === 0) {
        triggerAction(attacker, 'When reducing an enemy to 0 HP', allies, enemies, stats)
        triggerAction(target, 'When Reduced to 0 HP', enemies, allies, stats)
    }
}

function useHealAction(healer: Combattant, action: HealAction, target: Combattant, stats: Map<string, EncounterStats>, ignoreIncapacitated?: boolean) {
    const attackerConditions = getConditions(healer)
    const chanceToBeIncapacitated = ignoreIncapacitated ? 0 : atLeastOneConditionChance(attackerConditions, ['Incapacitated', 'Paralyzed', 'Petrified', 'Stunned', 'Unconscious'])
    
    const amount = (1 - chanceToBeIncapacitated) * evaluateDiceFormula(action.amount)

    if (action.tempHP) {
        target.finalState.tempHP = Math.max(0, target.finalState.tempHP || 0, amount)
    } else {
        if ((target.finalState.currentHP === 0) && (amount > 0)) getStats(stats, target).timesUnconscious++
        target.finalState.currentHP = Math.max(target.finalState.currentHP, Math.min(target.creature.hp, target.finalState.currentHP + amount)) 
    }

    getStats(stats, healer).healGiven += amount
    getStats(stats, target).healReceived += amount
}

// The attackers & defenders must be clones here, they will both be mutated
function runRound(team1: Combattant[], team2: Combattant[], stats: Map<string, EncounterStats>, firstRound?: { team1Surprised: boolean, team2Surprised: boolean }): Round {
    const round: Round = {
        team1: team1.map(iterateCombattant),
        team2: team2.map(iterateCombattant),
    }

    if (firstRound) {
        round.team1.forEach(combattant => triggerAction(combattant, 'Before the Encounter Starts', round.team1, round.team2, stats))
        round.team2.forEach(combattant => triggerAction(combattant, 'Before the Encounter Starts', round.team2, round.team1, stats))    
    }

    if (!firstRound?.team1Surprised) generateActions(round.team1, round.team2, stats)
    if (!firstRound?.team2Surprised) generateActions(round.team2, round.team1, stats)


    // Heals are resolved as soon as the actions are declared, to avoid situations where multiple creatures needlessly waste actions healing the same target
    // Then buffs/debuffs are resolved, so they can affect the attacks performed on that same round
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
    
    let firstRound: { team1Surprised: boolean, team2Surprised: boolean }|undefined = {
        team1Surprised: !!encounter.playersSurprised,
        team2Surprised: !!encounter.monstersSurprised,
    }
    const rounds: Round[] = []
    const stats = new Map<string, EncounterStats>()

    const hasLivingCombattant = (team: Combattant[]) => !!team.find(combattant => (combattant.finalState.currentHP > 0))

    do {
        const round = runRound(team1, team2, stats, firstRound)
        rounds.push(round)

        firstRound = undefined
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
                usedActions: new Set(),
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
                usedActions: new Set(),
            }
            
            return { creature, state }
        })
    })

    return results
}