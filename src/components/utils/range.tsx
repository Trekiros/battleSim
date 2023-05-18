import { FC } from "react"
import { Range as ReactRange } from "react-range"
import styles from './range.module.scss'


type PropType = {
    min: number,
    max: number,
    step?: number,
    label?: string,
    upperLabel?: string,
} & (
    {
        value: number,
        values?: never,
        onChange: (newValue: number) => void,
    } | {
        value?: never,
        values: number[],
        onChange: (newValue: number[]) => void,    
    }
)

const Range:FC<PropType> = ({ min, max, step, value, values, onChange, label, upperLabel }) => {
    return (
        <div className={styles.range}>
            { label ? <label>{label}</label> : null }
            <ReactRange
                values={values || [value]}
                min={min}
                max={max}
                step={step || 1}
                onChange={(newValues) => values ? onChange(newValues) : onChange(newValues[0])}
                renderThumb={({ props }) => (
                    <div {...props} className={styles.thumb} />
                )}
                renderTrack={({ props, children }) => (
                    <div {...props} className={styles.track}>
                        {children}
                    </div>
                )}
                renderMark={({ props }) => (
                    <div {...props} className={styles.mark} />
                )}
            />
            { upperLabel ? <label>{upperLabel}</label> : null }
        </div>
    )
}

export default Range