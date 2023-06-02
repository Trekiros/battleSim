import { AnyRoll, DiceRoller, FullRoll, GroupedRoll, InlineExpression, MathExpression, MathOperation, NumberType, RollExpression, RollExpressionType, RollOrExpression, RootType } from "dice-roller-parser"
import { range } from "./utils"

const roller = new DiceRoller()
export function validateDiceFormula(expr: number|string) {
    if (typeof expr === 'number' || !isNaN(+expr)) return true

    try {
        const roll = roller.roll(expr)
        return true
    } catch (e) {
        return false
    }
}

// TODO: handle canCrit
export function evaluateDiceFormula(expr: number|string, canCrit?: boolean): number {
    if (typeof expr === 'number') return expr
    if (!isNaN(+expr)) return Number(expr)

    if (!validateDiceFormula(expr)) throw 'invalid dice expression'

    const roll = roller.parse(expr)

    return evaluateUnknown(roll)
}

function evaluateUnknown(roll: RootType|AnyRoll|RollExpression|RollOrExpression): number {
    switch (roll.type) {
        case "number":          return evaluateNumber(roll as NumberType)
        case "die":             return evaluateDie(roll as FullRoll)
        case "group":           return evaluateGroup(roll as GroupedRoll)
        case "expression":      return evaluateMathExpr(roll as MathExpression)
        case "diceExpression":  return evaluateDiceExpression(roll as RollExpressionType)
        case "inline":          return evaluateInline(roll as InlineExpression)

        // TODO: handle other types of rolls, if there's demand for it
        default: return 0
    }
}

function evaluateNumber(roll: NumberType): number {
    return roll.value
}

function evaluateDie(roll: FullRoll) {
    const count = (roll.count.type === 'number') ? evaluateNumber(roll.count)
        : evaluateMathExpr(roll.count)

    const die = (roll.die.type === "number") ? evaluateNumber(roll.die)
        : (roll.die.type === 'expression') ? evaluateMathExpr(roll.die)
        : 0

    let result = count * (die + 1) / 2
    
    // TODO: handle multiple mods simultaneously instead of replacing the result
    for (let mod of roll.mods || []) {
        if (mod.type === 'explode') {
            result *= die / (die - 1)
        } else if (mod.type === 'keep') {
            const keep = evaluateUnknown(mod.expr)

            result = keepHighestLowest(count, die, keep, (mod.highlow === "l") ? 'min' : 'max')
        } else if (mod.type === 'drop') {
            const drop = evaluateUnknown(mod.expr)

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

function evaluateGroup(group: GroupedRoll): number {
    return group.rolls.map(roll => evaluateUnknown(roll))
        .reduce((a,b) => (a+b))
}

function evaluateDiceExpression(expr: RollExpressionType): number {
    const head = evaluateUnknown(expr.head)

    const tails = expr.ops
        .map(op => {
            const tail = evaluateUnknown(op.tail)

            return (op.op === '+') ? tail : -tail
        })
        .reduce((a,b) => a+b)
    
    return head + tails
}

function evaluateInline(expr: InlineExpression): number {
    const unknown = expr.expr as RootType
    return evaluateUnknown(unknown)
}

function evaluateMathExpr(expr: MathExpression): number {
    const head = evaluateUnknown(expr.head)

    let last = head
    let sum = 0
    for (let {tail, op} of expr.ops) {
        const tailValue = evaluateUnknown(tail)

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