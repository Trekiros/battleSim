import React, { FC } from 'react'
import styles from './lifebar.module.scss'

type PropType = {
    name: string,
    maxHP: number,
    hp: number,
}

const LifeBar:FC<PropType> = ({name, maxHP, hp}) => {
    return (
        <div className={styles.lifebar}>
            <div className={styles.name}>{name}</div>
            <div className={styles.bg}>
                <div className={styles.fg} style={{width: `${100*Math.max(0,hp)/maxHP}%`}}></div>
                <div className={styles.value}>{Math.max(0,Math.round(hp))}/{maxHP}</div>
            </div>
        </div>
    )
}

export default LifeBar