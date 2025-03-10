import { FC, useEffect, useState } from "react"
import { DiceFormula } from "../../model/model"
import styles from './diceFormulaInput.module.scss'
import { evaluateDiceFormula, validateDiceFormula } from "../../model/dice"

type PropType = {
    value: DiceFormula|undefined,
    onChange: (newValue: DiceFormula|undefined) => void,
    className?: string,
    placeholder?: string,
    disabled?: boolean,
    canCrit?: boolean,
}

const DiceFormulaInput:FC<PropType> = ({ value, onChange, className, placeholder, disabled, canCrit }) => {
    const [valueString, setValueString] = useState((value === undefined) ? '' : String(value))
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        setIsValid(validateDiceFormula(valueString))
        onChange(valueString)
    }, [valueString])
    
    return (
        <span
            className={`tooltipContainer ${styles.expression}`}>
            <input
                type="text"
                style={{ minWidth: `${valueString.length}ch` }} 
                value={valueString}
                onChange={(e) => setValueString(e.target.value)}
                disabled={disabled}
                className={`${className} ${isValid ? styles.isValid : styles.invalid}`}
                placeholder={placeholder}
            />
            { validateDiceFormula(valueString) && (String(evaluateDiceFormula(valueString, 0.5)) !== valueString) ? (
                <div className="tooltip">
                    Average: <b>{Math.trunc(100*evaluateDiceFormula(valueString, 0.5))/100}</b> {
                        canCrit && <>
                            (on crit: <b>{Math.trunc(100*evaluateDiceFormula(valueString, 0.5, { doubleDice: true }))/100}</b>)
                        </>
                    }
                </div>
            ) : null }
        </span>
    )
}

export default DiceFormulaInput