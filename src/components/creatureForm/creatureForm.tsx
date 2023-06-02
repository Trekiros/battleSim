import { FC, useEffect, useState } from "react"
import { Creature, CreatureSchema } from "../../model/model"
import styles from './creatureForm.module.scss'
import { clone } from "../../model/utils"
import PlayerForm from "./playerForm"
import MonsterForm from "./monsterForm"
import CustomForm from "./customForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTrash, faWrench } from "@fortawesome/free-solid-svg-icons"
import { v4 as uuid } from 'uuid'

type PropType = {
    onSubmit: (value: Creature) => void,
    onCancel: () => void,

    initialMode?: 'player'|'monster',
    initialValue?: Creature,
    onDelete?: () => void,
}

function newCreature(mode: 'player'|'monster'): Creature {
    return {
        id: uuid(),
        mode,
        name: (mode === 'player') ? 'Player Character' : 'Monster',
        AC: 10,
        saveBonus: 2,
        count: 1,
        hp: 10,
        actions: [],
    }
}

const CreatureForm:FC<PropType> = ({ initialMode, onSubmit, onCancel, initialValue, onDelete }) => {
    const [value, setValue] = useState<Creature>(initialValue || newCreature(initialMode || 'player'))
    const [isValid, setIsValid] = useState(false)
    useEffect(() => {
        if (!CreatureSchema.safeParse(value).success) {
            setIsValid(false)
            return
        }

        if (value.mode === 'player') {
            setIsValid(!!value.class)
        } else if (value.mode === 'monster') {
            setIsValid(!!value.cr)
        } else {
            setIsValid(true)
        }
    }, [value])

    function update(callback: (clonedValue: Creature) => void, condition?: boolean) {
        if (condition === false) return
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
                    <button onClick={() => onSubmit(value)} disabled={!isValid} className="tooltipContainer">
                        <FontAwesomeIcon icon={faCheck} />
                        OK
                        
                        <div className="tooltip">
                            Save this creature for the current encounter
                        </div>
                    </button>
                    { (value.mode === 'custom') ? null : (
                        <button onClick={() => setValue({...value, mode: 'custom'})} disabled={!isValid} className="tooltipContainer">
                            <FontAwesomeIcon icon={faWrench} />
                            Customize

                            <div className="tooltip">
                                Go to the advanced editing mode
                            </div>
                        </button>
                    )}
                    { !onDelete ? null : (
                        <button onClick={onDelete} className="tooltipContainer">
                            <FontAwesomeIcon icon={faTrash} />
                            Delete
                            
                            <div className="tooltip">
                                Remove this creature from the current encounter
                            </div>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CreatureForm