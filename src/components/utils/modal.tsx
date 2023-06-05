import { FC, ReactNode } from "react"
import styles from './modal.module.scss'

type PropType = {
    className?: string,
    onCancel: () => void,
    children: ReactNode,
}

const Modal:FC<PropType> = ({ onCancel, children, className }) => {
    return (
        <div className={styles.overlay} onMouseDown={onCancel}>
            <div className={`${styles.modal} ${className}`} onMouseDown={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal