import { AnyRoll, DiceRoller, FullRoll, GroupedRoll, InlineExpression, MathExpression, MathOperation, NumberType, RollExpression, RollExpressionType, RollOrExpression, RootType } from "dice-roller-parser"
import { range } from "./utils"

/** Options applied to the root evaluation, and used if the appropriate condition is met */
export interface EvaluationOptions {
    doubleDice: boolean;
}

const roller = new DiceRoller()
export function validateDiceFormula(expr: number|string) {
    if (typeof expr === 'number' || !isNaN(+expr)) return true

    try {
        const roll = roller.roll(expr.trim())
        return true
    } catch (e) {
        return false
    }
}

export function evaluateDiceFormula(expr: number|string, options: EvaluationOptions = { doubleDice: false }): number {
    if (typeof expr === 'number') return expr
    if (!isNaN(+expr)) return Number(expr)

    if (!validateDiceFormula(expr)) throw 'invalid dice expression'

    const roll = roller.parse(expr.trim())

    return evaluateUnknown(roll, options);
}

function evaluateUnknown(roll: RootType|AnyRoll|RollExpression|RollOrExpression, options: EvaluationOptions): number {
    switch (roll.type) {
        case "number":          return evaluateNumber(roll as NumberType, options)
        case "die":             return evaluateDie(roll as FullRoll, options)
        case "group":           return evaluateGroup(roll as GroupedRoll, options)
        case "expression":      return evaluateMathExpr(roll as MathExpression, options)
        case "diceExpression":  return evaluateDiceExpression(roll as RollExpressionType, options)
        case "inline":          return evaluateInline(roll as InlineExpression, options)

        // TODO: handle other types of rolls, if there's demand for it
        default: return 0
    }
}

function evaluateNumber(roll: NumberType, options: EvaluationOptions): number {
    return roll.value
}

function evaluateDie(roll: FullRoll, options: EvaluationOptions) {
    const countMultiplier = options.doubleDice ? 2 : 1
    const count = countMultiplier * (
        (roll.count.type === 'number') ? evaluateNumber(roll.count, options) : evaluateMathExpr(roll.count, options)
    )

    const die = (roll.die.type === "number") ? evaluateNumber(roll.die, options)
        : (roll.die.type === 'expression') ? evaluateMathExpr(roll.die, options)
        : 0

    let result = count * (die + 1) / 2
    
    // TODO: handle multiple mods simultaneously instead of replacing the result
    for (let mod of roll.mods || []) {
        if (mod.type === 'explode') {
            result *= die / (die - 1)
        } else if (mod.type === 'keep') {
            const keep = evaluateUnknown(mod.expr, options)

            result = keepHighestLowest(count, die, keep, (mod.highlow === "l") ? 'min' : 'max')
        } else if (mod.type === 'drop') {
            const drop = evaluateUnknown(mod.expr, options)

            result = keepHighestLowest(count, die, count - drop, (mod.highlow === "l") ? 'max' : 'min')
        }
    }

    return result
}

function keepHighestLowest(diceCount: number, diceSize: number, keepCount: number, which: 'min'|'max') {
    if (diceSize === 0) return 0

    const sort = (a: number, b: number) => (which === 'min') ? (a-b) : (b-a)

    const results = new Map<number, number>()
    const possibleRolls = BigInt(diceSize) ** BigInt(diceCount)
    
    // If the possible rolls would be too computationally intensive, we cap it, and approximate the result instead.
    const maxRolls = 100_000
    if (possibleRolls * BigInt(diceCount) > BigInt(maxRolls)) {
        const iterations = maxRolls / diceCount
        for (let i = 0; i< iterations; i++) {
            const result = range(diceCount)
                .map(() => Math.floor(diceSize * Math.random()) + 1)
                .sort(sort)
                .slice(0, keepCount)
                .reduce((a,b) => (a+b), 0)

            results.set(result, 1 + (results.get(result) || 0))
        }
    }

    // Otherwise, we compute every result to find the exact average
    else {
        for (let i = 0 ; i < possibleRolls; i++) {
            let remaining = i
            const result = range(diceCount)
                .map(k => {
                    const pow = Math.pow(diceSize, diceCount - k - 1)

                    const roll = Math.floor(remaining / pow) + 1
                    remaining = remaining % pow
                    return roll
                })
                .sort(sort)
                .slice(0, keepCount)
                .reduce((a,b) => (a+b), 0)
            
            results.set(result, 1 + (results.get(result) || 0))
        }
    }

    // Calculate average result
    let sum = 0
    let rolls = 0
    for (let [result, count] of results) {
        sum += result * count
        rolls += count
    }

    const average = sum / rolls
    return average
}

function evaluateGroup(group: GroupedRoll, options: EvaluationOptions): number {
    return group.rolls.map(roll => evaluateUnknown(roll, options))
        .reduce((a,b) => (a+b))
}

function evaluateDiceExpression(expr: RollExpressionType, options: EvaluationOptions): number {
    const head = evaluateUnknown(expr.head, options)

    const tails = expr.ops
        .map(op => {
            const tail = evaluateUnknown(op.tail, options)

            return (op.op === '+') ? tail : -tail
        })
        .reduce((a,b) => a+b)
    
    return head + tails
}

function evaluateInline(expr: InlineExpression, options: EvaluationOptions): number {
    const unknown = expr.expr as RootType
    return evaluateUnknown(unknown, options)
}

function evaluateMathExpr(expr: MathExpression, options: EvaluationOptions): number {
    const head = evaluateUnknown(expr.head, options)

    let last = head
    let sum = 0
    for (let {tail, op} of expr.ops) {
        const tailValue = evaluateUnknown(tail, options)

        if (op === "+") {
            sum += last
            last = tailValue
        } else if (op === "-") {
            sum += last
            last = -tailValue
        } else if (op === "*") {
            last *= tailValue
        } else if (op === "/") {
            last /= tailValue
        }
    }
    sum += last

    return sum
}