import { FC, useState } from "react"
import { Creature } from "../model/model"
import styles from './creatureForm.module.scss'
import { clone } from "../model/utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons"
import PlayerForm from "./playerForm"
import MonsterForm from "./monsterForm"
import CustomForm from "./customForm"

type PropType = {
    onSubmit: (value: Creature) => void,
    onCancel: () => void
} & ({
    initialMode: 'player'|'monster',
    initialValue: undefined,
    onDelete: undefined,
} | {
    initialMode: undefined,
    initialValue: Creature,
    onDelete: () => void,
})

function newCreature(mode: 'player'|'monster'): Creature {
    return {
        mode,
        name: (mode === 'player') ? 'Player Character' : 'Monster',
        AC: 10,
        count: 1,
        hp: 10,
        actions: [],
    }
}

const CreatureForm:FC<PropType> = ({ initialMode, onSubmit, onCancel, initialValue, onDelete }) => {
    const [value, setValue] = useState<Creature>(initialValue || newCreature(initialMode))
    
    function update(callback: (clonedValue: Creature) => void) {
        const clonedValue = clone(value)
        callback(clonedValue)
        setValue(clonedValue)
    }

    return (
        <div className={styles.overlay} onMouseDown={onCancel}>
            <div className={styles.modal} onMouseDown={e => e.stopPropagation()}>

                <div className={styles.modes}>
                    <button onClick={() => update(c => { c.mode = 'player' })}>Player Character</button>
                    <button onClick={() => update(c => { c.mode = 'monster' })}>Monster</button>
                    <button onClick={() => update(c => { c.mode = 'custom' })}>Custom</button>
                </div>

                <div className={styles.form}>
                    { (value.mode === "player") ? (
                        <PlayerForm 
                            value={value}
                            onChange={setValue}
                        />
                    ) : (value.mode === "monster") ? (
                        <MonsterForm
                            value={value}
                            onChange={setValue}
                        />
                    ) : (
                        <CustomForm
                            value={value}
                            onChange={setValue}
                        />
                    )}
                </div>

                <div className={styles.buttons}>
                    <button onClick={() => onSubmit(value)}>
                        <FontAwesomeIcon icon={faCheck} />
                        OK
                    </button>
                    { !onDelete ? null : (
                        <button onClick={onDelete}>
                            <FontAwesomeIcon icon={faTrash} />
                            Delete
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CreatureForm