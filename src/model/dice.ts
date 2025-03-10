import { AnyRoll, DiceRoller, FullRoll, GroupedRoll, InlineExpression, MathExpression, MathOperation, NumberType, RollExpression, RollExpressionType, RollOrExpression, RootType } from "dice-roller-parser"
import { range } from "./utils"

/** Options applied to the root evaluation, and used if the appropriate condition is met */
export interface EvaluationOptions {
    doubleDice: boolean;    // If enabled, all dice will be doubled, but flat modifiers won't (useful for handling crits)
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

export function evaluateDiceFormula(expr: number|string, luck: number, options: EvaluationOptions = { doubleDice: false }): number {
    if (typeof expr === 'number') return expr
    if (!isNaN(+expr)) return Number(expr)

    if (!validateDiceFormula(expr)) throw 'invalid dice expression'

    const roll = roller.parse(expr.trim())

    return evaluateUnknown(roll, luck, options);
}

function evaluateUnknown(roll: RootType|AnyRoll|RollExpression|RollOrExpression, luck: number, options: EvaluationOptions): number {
    switch (roll.type) {
        case "number":          return evaluateNumber(roll as NumberType, options)
        case "die":             return evaluateDie(roll as FullRoll, luck, options)
        case "group":           return evaluateGroup(roll as GroupedRoll, luck, options)
        case "expression":      return evaluateMathExpr(roll as MathExpression, luck, options)
        case "diceExpression":  return evaluateDiceExpression(roll as RollExpressionType, luck, options)
        case "inline":          return evaluateInline(roll as InlineExpression, luck, options)

        // TODO: handle other types of rolls, if there's demand for it
        default: return 0
    }
}

function evaluateNumber(roll: NumberType, options: EvaluationOptions): number {
    return roll.value
}

function evaluateDie(roll: FullRoll, luck: number, options: EvaluationOptions) {
    const countMultiplier = options.doubleDice ? 2 : 1
    const count = countMultiplier * (
        (roll.count.type === 'number') ? evaluateNumber(roll.count, options) : evaluateMathExpr(roll.count, luck, options)
    )

    const die = (roll.die.type === "number") ? evaluateNumber(roll.die, options)
        : (roll.die.type === 'expression') ? evaluateMathExpr(roll.die, luck, options)
        : 0

    let result = count * (die + 1) * luck
    
    // TODO: handle multiple mods simultaneously instead of replacing the result
    for (let mod of roll.mods || []) {
        if (mod.type === 'explode') {
            result *= die / (die - 1)
        } else if (mod.type === 'keep') {
            const keep = evaluateUnknown(mod.expr, luck, options)

            result = keepHighestLowest(count, die, keep, (mod.highlow === "l") ? 'min' : 'max', luck, options)
        } else if (mod.type === 'drop') {
            const drop = evaluateUnknown(mod.expr, luck, options)

            result = keepHighestLowest(count, die, count - drop, (mod.highlow === "l") ? 'max' : 'min', luck, options)
        }
    }

    return result
}

// Returns an array with the probabilities each face would need to have, for the luck factor to be respected
// For example, if you roll a d4 and have a luck factor of 0.6, that means you want the average result to be the 60th percentile for a d4:
// Target average: 1 + (4-1) * 0.6 = 2.8
// So this function will return the following array: [0.16, 0.22, 0.28, 0.34], which means the weighted die should have 16% chance to roll a 1, 22% chance to roll a 2, etc.
// This is useful to evaluate advanced dice expressions like 1d8! (exploding dice) or 4d6dl1 (drop lowest/highest) while taking the luck factor into account.
function weightedDie(diceSize: number, luck: number) {
    // Implementation details:
    // A simple model was chosen where each face n has a chance to show up equal to A+nB, where A and B are constants that depend on the dice size (N) and the luck factor (L).
    // The values of A and B were calculated using two equations:
    // 1) The weighted average (sum from 1 to N of n(A+nB)) should be equal to the target average (1 + (N-1)*L)
    // 2) The sum of all faces' probabilities (sum from 1 to N of A+nB) should be equal to 1
    // Then, wolfram alpha was used to simplify the values of A and B.

    // The results can be negative for extreme values of L, but everything works fine for values close to 0.5, 
    // which is okay because extreme luck/extreme unluck scenarios aren't useful for users to simulate

    const A = (4 - 6 * luck) / diceSize
    const B = (6 * (2 * luck - 1)) / (diceSize * (diceSize + 1))
    
    return range(diceSize).map(i => {
        const n = i+1
        return Math.min(1, Math.max(0, A + B*n))
    })
}

function keepHighestLowest(diceCount: number, diceSize: number, keepCount: number, which: 'min'|'max', luck: number, options: EvaluationOptions) {
    if (diceSize === 0) return 0

    const sort = (a: number, b: number) => (which === 'min') ? (a-b) : (b-a)
    const weights = weightedDie(diceSize, luck)

    const results = new Map<number, number>()
    const possibleRolls = BigInt(diceSize) ** BigInt(diceCount)
    
    // If the possible rolls would be too computationally intensive, we cap it, and approximate the result instead using random rolls.
    const maxRolls = 100_000
    if (possibleRolls * BigInt(diceCount) > BigInt(maxRolls)) {
        const iterations = maxRolls / diceCount
        for (let i = 0; i< iterations; i++) {
            const result = range(diceCount)
                .map(() => {
                    let seed = Math.random()
                    for (let i = 0 ; i < diceSize ; i++) {
                        const result = i+1
                        const weight = weights[i]

                        if (seed < weight) return result
                        else seed -= weight
                    }
                    return diceSize // Default, should never occur
                })
                .sort(sort)
                .slice(0, keepCount)
                .reduce((a,b) => (a+b), 0)

            results.set(result, 1 + (results.get(result) || 0))
        }
    }

    // Otherwise, we compute every result to find the exact average
    else {
        const rolls = range(diceCount).map(() => 1)
        function increment() {
            // A base N counter which overflows. This ensures we go through every single possible composite roll
            for (let i = diceCount - 1 ; i >= 0 ; i--) {
                rolls[i]++
                if (rolls[i] > diceSize) rolls[i] = 1
                else return;
            }
        }

        // Loop until every roll is the max value and record every single result
        while (rolls.find(roll => roll < diceSize)) {
            const result = rolls.slice()
                .sort(sort)
                .slice(0, keepCount)
                .reduce((a,b) => (a+b), 0)

            const odds = rolls.map(roll => weights[roll - 1])
                .reduce((a,b) => (a*b), 1)

            results.set(result, (results.get(result) || 0) + odds)

            increment()
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

function evaluateGroup(group: GroupedRoll, luck: number, options: EvaluationOptions): number {
    return group.rolls.map(roll => evaluateUnknown(roll, luck, options))
        .reduce((a,b) => (a+b))
}

function evaluateDiceExpression(expr: RollExpressionType, luck: number, options: EvaluationOptions): number {
    const head = evaluateUnknown(expr.head, luck, options)

    const tails = expr.ops
        .map(op => {
            const tail = evaluateUnknown(op.tail, luck, options)

            return (op.op === '+') ? tail : -tail
        })
        .reduce((a,b) => a+b)
    
    return head + tails
}

function evaluateInline(expr: InlineExpression, luck: number, options: EvaluationOptions): number {
    const unknown = expr.expr as RootType
    return evaluateUnknown(unknown, luck, options)
}

function evaluateMathExpr(expr: MathExpression, luck: number, options: EvaluationOptions): number {
    const head = evaluateUnknown(expr.head, luck, options)

    let last = head
    let sum = 0
    for (let {tail, op} of expr.ops) {
        const tailValue = evaluateUnknown(tail, luck, options)

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