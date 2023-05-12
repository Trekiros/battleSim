import { FC, useEffect, useState } from "react"
import { Creature } from "../model/model"
import styles from './playerForm.module.scss'
import { Class, ClassesList } from "../model/enums"
import { capitalize, range } from "../model/utils"
import { PlayerTemplates } from "../data/data"

type PropType = {
    value: Creature,
    onChange: (newvalue: Creature) => void,
}

const PlayerForm:FC<PropType> = ({ value, onChange }) => {
    const [chosenClass, setClass] = useState<Class|null>(null)
    const [level, setLevel] = useState<number | null>(null)

    useEffect(() => {
        if (!chosenClass || !level) return

        const template = PlayerTemplates[chosenClass][level]
        if (template) onChange(template)
    }, [chosenClass, level])

    return (
        <div className={styles.playerForm}>
            <h3>Class</h3>
            <div className={styles.classes}>
                { ClassesList.map(className => (
                    <button 
                        className={`${styles.class} ${(chosenClass === className) ? styles.active : ''}`}
                        onClick={() => { setLevel(null); setClass(className) }}
                    >
                        <img src={`/classes/${className}.jpeg`} />
                        {capitalize(className)}
                    </button>
                )) }
            </div>
            
            <h3>Level</h3>
            <div className={styles.levels}>
                { range(20).map(i => i+1).map(lvl => (
                    <button
                        key={lvl}
                        className={`${styles.level} ${(level === lvl) ? styles.active : ''}`}
                        onClick={() => setLevel(lvl)}
                        disabled={chosenClass === null}
                    >
                        {lvl}
                    </button>
                )) }
            </div>
        </div>
    )
}

export default PlayerForm