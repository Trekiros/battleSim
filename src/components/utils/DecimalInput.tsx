import { FC, useContext, useEffect, useState } from "react"

type PropType = {
    value: number|undefined,
    onChange: (newValue: number|undefined) => void,
    min?: number,
    max?: number,
    step?: number,
    className?: string,
    placeholder?: string,
    disabled?: string,
}

const DecimalInput:FC<PropType> = ({ value, onChange, min, max, step, className, placeholder, disabled }) => {
    const [valueString, setValueString] = useState(String(value))

    const valueNum = +valueString // Can be NaN
    const isNumeric = !isNaN(valueNum)

    useEffect(() => {
        if (isNumeric) onChange(valueNum)
    }, [valueString])
    
    return (
        <input
            type="number"
            value={valueString}
            onChange={(e) => setValueString(e.target.value)}
            min={min}
            max={max}
            step={step}
            className={`${className} ${Number.parseInt}`}
            placeholder={placeholder}
        />
    )
}

export default DecimalInput