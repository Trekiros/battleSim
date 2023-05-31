import { FC, useEffect, useState } from "react"
import { DiceExpression } from "../../model/model"
import styles from './diceExpressionInput.module.scss'
import { evaluateDiceExpression, validateDiceExpression } from "../../model/utils"

type PropType = {
    value: DiceExpression|undefined,
    onChange: (newValue: DiceExpression|undefined) => void,
    className?: string,
    placeholder?: string,
    disabled?: boolean,
}

const DiceExpressionInput:FC<PropType> = ({ value, onChange, className, placeholder, disabled }) => {
    const [valueString, setValueString] = useState((value === undefined) ? '' : String(value))
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        setIsValid(validateDiceExpression(valueString))
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
            { validateDiceExpression(valueString) && (String(evaluateDiceExpression(valueString)) !== valueString) ? (
                <div className="tooltip">
                    Average: <b>{evaluateDiceExpression(valueString)}</b>
                </div>
            ) : null }
        </span>
    )
}

export default DiceExpressionInput