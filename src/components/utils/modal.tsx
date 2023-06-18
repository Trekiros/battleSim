import { FC, ReactNode } from "react"
import styles from './modal.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"

type PropType = {
    className?: string,
    onCancel: () => void,
    children: ReactNode,
}

const Modal:FC<PropType> = ({ onCancel, children, className }) => {
    return (
        <div className={styles.overlay}>
            <button className={styles.closeBtn} onClick={onCancel}>
                <FontAwesomeIcon icon={faClose} />
            </button>
            
            <div className={`${styles.modal} ${className}`}>
                {children}

            </div>
        </div>
    )
}

export default Modal