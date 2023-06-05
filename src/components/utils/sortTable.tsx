import { ReactNode, useState } from "react"
import styles from './sortTable.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"

type PropType<T> = {
    value: T|undefined,
    list: T[],
    onChange: (newValue: T) => void,
    comparators: {[name: string]: (a: T, b: T) => number},
    children: (elem: T) => ReactNode,
}

const SortTable = <T,>({ value, list, onChange, comparators, children }: PropType<T>): JSX.Element => {
    const [criteria, setCriteria] = useState(Object.keys(comparators).at(0)!)
    const [direction, setDirection] = useState<'asc'|'desc'>('asc')

    function toggleCompare(newCriteria: string) {
        if (criteria === newCriteria) {
            setDirection(direction === 'asc' ? 'desc' : 'asc')
        } else {
            setCriteria(newCriteria)
            setDirection('asc')
        }
    }

    const sortedList = list.sort((a,b) => {
        const comparator = comparators[criteria]
        const comparisonResult = comparator(a, b)
        return direction === 'asc' ? comparisonResult : -comparisonResult
    })

    return (
        <div className={styles.searchResults}>
            <div className={styles.header}>
                { Array.from(Object.entries(comparators)).map(([name]) => (
                    <div key={name} onClick={() => toggleCompare(name)}>
                        {name}
                        { criteria === name ? (
                            <FontAwesomeIcon icon={direction === 'asc' ? faChevronUp : faChevronDown} />
                        ) : null }
                    </div>
                )) }
            </div>
            <div className={styles.result}>
                { sortedList.length === 0 ? (
                    <div className={styles.placeholder}>
                        No results
                    </div>
                ) : (
                    sortedList.map((elem, index) => (
                        <button
                            key={index}
                            onClick={() => onChange(elem)}
                            className={`${styles.elem} ${value === elem ? styles.active : ''}`}>
                                { children(elem) }
                        </button>
                    ))
                )}
            </div>
        </div>
    )
}

export default SortTable