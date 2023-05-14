import { FC, useState } from "react"
import { Creature } from "../../model/model"
import styles from './creatureForm.module.scss'
import { clone } from "../../model/utils"
import PlayerForm from "./playerForm"
import MonsterForm from "./monsterForm"
import CustomForm from "./customForm"

type PropType = {
    onSubmit: (value: Creature) => void,
    onCancel: () => void,

    initialMode?: 'player'|'monster',
    initialValue?: Creature,
    onDelete?: () => void,
}

function newCreature(mode: 'player'|'monster'): Creature {
    return {
        id: crypto.randomUUID(),
        mode,
        name: (mode === 'player') ? 'Player Character' : 'Monster',
        AC: 10,
        count: 1,
        hp: 10,
        actions: [],
    }
}

const CreatureForm:FC<PropType> = ({ initialMode, onSubmit, onCancel, initialValue, onDelete }) => {
    const [value, setValue] = useState<Creature>(initialValue || newCreature(initialMode || 'player'))
    
    function update(callback: (clonedValue: Creature) => void) {
        const clonedValue = clone(value)
        callback(clonedValue)
        setValue(clonedValue)
    }

    return (
        <div className={styles.overlay} onMouseDown={onCancel}>
            <div className={styles.modal} onMouseDown={e => e.stopPropagation()}>

                <div className={styles.modes}>
                    <button
                        className={(value.mode === 'player') ? styles.active : undefined}
                        onClick={() => update(c => { c.mode = 'player' })}
                    >
                        Player Character
                    </button>
                    <button
                        className={(value.mode === 'monster') ? styles.active : undefined}
                        onClick={() => update(c => { c.mode = 'monster' })}
                    >
                        Monster
                    </button>
                    <button
                        className={(value.mode === 'custom') ? styles.active : undefined}
                        onClick={() => update(c => { c.mode = 'custom' })}
                    >
                        Custom
                    </button>
                </div>

                <div className={styles.form}>
                    { (value.mode === "player") ? (
                        <PlayerForm 
                            onChange={setValue}
                        />
                    ) : (value.mode === "monster") ? (
                        <MonsterForm
                            onChange={setValue}
                        />
                    ) : (
                        <CustomForm
                            value={value}
                            onChange={setValue}
                            onSubmit={() => onSubmit(value)}
                            onDelete={onDelete}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default CreatureForm