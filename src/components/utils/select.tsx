import { useState } from 'react'
import ReactSelect, { ClassNamesConfig } from 'react-select'
import styles from './select.module.scss'

type PropType<T> = {
    value: T,
    options: { value: T, label: string }[],
    onChange: (newValue: T) => void,
}

const SelectStyles: ClassNamesConfig = {
    control: () => styles.control,
    input: () => styles.input,
    singleValue: () => styles.singleValue,
    menu: () => styles.menu,
    option: ({ isSelected, isFocused }) => isSelected ? styles.isSelected : isFocused ? styles.isFocused : '',
    dropdownIndicator: () => styles.indicator,
}

function getEntry<T>(options: {value: T, label: string}[], value: T) {
    const entry = options.find(option => (option.value === value))
    return entry
}

const Select = <T,>({ value, options, onChange }: PropType<T>): JSX.Element => {
    const [search, setSearch] = useState('')

    return (
        <ReactSelect
            className={styles.select}
            classNames={SelectStyles}
            options={options}
            value={getEntry(options, value)}
            onChange={(e: any) => !e ? null : onChange(e.value)}
            inputValue={search}
            onInputChange={setSearch}
        />
    )
}

export default Select