import React, { FC } from 'react'
import { Combattant } from '../../model'
import styles from './lifebar.module.scss'

type PropType = {
    combattants: Combattant[],
}

const LifeBars:FC<PropType> = ({combattants}) => {
    return (
        <div className={styles.lifebars}>            
            {combattants.map(({name, hp, maxHP}) => (
                <div className={styles.lifebar}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.bg}>
                        <div className={styles.fg} style={{width: `${100*Math.max(0,hp)/maxHP}%`}}></div>
                        <div className={styles.value}>{Math.max(0,Math.round(hp))}/{maxHP}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default LifeBars