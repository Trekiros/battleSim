import { FC, useState } from "react"
import { Creature } from "../model"


type PropType = {
    onSubmit: (newValue: Creature) => void,
}

const TemplateMenu:FC<PropType> = ({ onSubmit }) => {
    // Damage
    const [atkDmgFormula, setAtkDmg] = useState('1d6+2')
    const [oncePerTurnFormula, setOncePerTurn] = useState('1d6')
    const [oncePerCombatFormula, setOncePerCombat] = useState('3d6')
    const [critDamageBonusFormula, setCritDamageBonus] = useState('1d6')
    const [aoeFormula, setAOE] = useState('2d6')

    // Attacks
    const [attacks, setAttacks] = useState(1)
    const [toHit, setToHit] = useState(5)
    const [atkType, setAtkType] = useState('normal' as 'normal'|'advantage'|'disadvantage')

    // Defenses
    const [hp, setHP] = useState(20)
    const [ac, setAC] = useState(15)

    type DiceToken = {type: 'dice', diceCount: number, diceSize: number, sign: 1|-1}
    type FlatToken = {type: 'flat', flatValue: number, sign: 1|-1}
    type Token = DiceToken | FlatToken
    function getTokens(diceFormula: string): Token[] | null {
        const rolls = diceFormula.split('+').flatMap((str) => {
            return str.split('-')
                .map((str2, index) => ({
                    roll: str2.trim(),
                    operator: (index === 0) ? '+' : '-'
                }))
        })
        
        let result: Token[] = []
        for (let i = 0 ; i < rolls.length ; i++) {
            const {roll, operator} = rolls[i]
            const sign = (operator === '+') ? 1 : -1
            const diceTokens = roll.split('d').map(Number) // Will return NaN if not numeric, which is checked by Number.isInteger later

            if ((diceTokens.length === 2) && Number.isInteger(diceTokens[0]) && Number.isInteger(diceTokens[1])) {
                const [diceCount, diceSize] = diceTokens
                result.push({diceCount, diceSize, sign, type: 'dice'})
            } else if (Number.isInteger(Number(roll))) {
                result.push({flatValue: Number(roll), sign, type: 'flat'})
            } else {
                // Could not parse!
                return null
            }
        }
        
        return result
    }

    function diceToAverage(diceFormula: string): number | null {
        const tokens = getTokens(diceFormula)
        
        if (tokens === null) return null

        return tokens.map((token) => {
            if (token.type === 'dice') {
                return token.diceCount * (0.5 + token.diceSize / 2) * token.sign
            } else {
                return token.flatValue * token.sign
            }
        }).reduce((a, b) => (a+b))
    }

    function extractCrits(diceFormula: string): number | null {
        const tokens = getTokens(diceFormula)

        if (tokens === null) return null

        return tokens.map(token => {
            if (token.type === "dice") return token.diceCount * (0.5 + token.diceSize / 2) * token.sign
            return 0
        }).reduce((a, b) => (a+b))
    }

    function calculateDPR(): number|null {
        const atkDmg = diceToAverage(atkDmgFormula)
        if (atkDmg === null) return null

        const oncePerTurn = diceToAverage(oncePerTurnFormula)
        if (oncePerTurn === null) return null

        const oncePerCombat = diceToAverage(oncePerCombatFormula)
        if (oncePerCombat === null) return null

        const critDamageBonus = diceToAverage(critDamageBonusFormula)
        if (critDamageBonus === null) return null

        const aoe = diceToAverage(aoeFormula)
        if (aoe === null) return null

        const regularCrit = extractCrits(atkDmgFormula)! + extractCrits(oncePerTurnFormula)! + extractCrits(oncePerCombatFormula)!

        // Round to the nearest .1, anything beyond that is overkill and will clog up the UI
        return Math.round((attacks * atkDmg + oncePerTurn + oncePerCombat/3 + (regularCrit + critDamageBonus)/20 + aoe*2) * 10) / 10
    }

    return (
        <div>
            TEST
        </div>
    )
}

export default TemplateMenu
