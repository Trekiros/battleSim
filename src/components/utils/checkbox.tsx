import { FC } from "react"
import styles from './checkbox.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

type PropType = {
    value: boolean,
    onToggle: () => void,
    children?: React.ReactNode,
}

const Checkbox:FC<PropType> = ({ value, onToggle, children }) => {
    return (
        <button 
            className={`${styles.checkbox} ${value ? styles.checked : ''}`}
            onClick={onToggle}>
                <FontAwesomeIcon icon={faCheck} />
                {children}
        </button>
    )
}

export default Checkbox