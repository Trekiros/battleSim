import { FC } from "react"
import { Action, Creature } from "../../model/model"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faPlus, faSave, faTrash } from "@fortawesome/free-solid-svg-icons"
import styles from './customForm.module.scss'
import { clone, inDevEnvironment } from "../../model/utils"
import ActionForm from "./actionForm"

type PropType = {
    value: Creature,
    onChange: (newvalue: Creature) => void,
    onSubmit: () => void,
    onDelete?: () => void
}

const CustomForm:FC<PropType> = ({ value, onChange, onSubmit, onDelete }) => {
    function update(callback: (valueClone: Creature) => void) {
        const valueClone = clone(value)
        callback(valueClone)
        onChange(valueClone)
    }

    function createAction() {
        update(v => { v.actions.push({
            id: crypto.randomUUID(),
            actionSlot: 0,
            name: '',
            freq: 'at will',
            condition: 'default',
            targets: 1,
            type: 'atk',
            dpr: 0,
            toHit: 0,
            target: 'enemy with least HP',
        }) })
    }

    function updateAction(index: number, newValue: Action) {
        update(v => { v.actions[index] = newValue })
    }

    function deleteAction(index: number) {
        update(v => { v.actions.splice(index, 1) })
    }

    function validate() {
        return !!value.name
            && !!value.AC
            && !!value.hp
            && !!value.actions.length
            && !value.actions.find(action => (!action.name))
    }

    function submit() {
        if (!validate()) return
        onSubmit()
    }

    const canSaveTemplate = !!localStorage && !!localStorage.getItem('useLocalStorage') && !!value.type

    function saveTemplate() {
        if (!canSaveTemplate) return

        const templates = JSON.parse(localStorage.getItem('monsterTemplates') || "{}")
        templates[value.id] = value
        localStorage.setItem('monsterTemplates', JSON.stringify(templates))
    }

    return (
        <div className={styles.customForm}>
            <section>
                <h3>Name</h3>
                <div className={styles.nameContainer}>
                    <input type='text' value={value.name} onChange={e => update(v => { v.name = e.target.value })} />
                    { canSaveTemplate ? (
                        <button onClick={saveTemplate} className="tooltipContainer">
                            <FontAwesomeIcon icon={faSave} />
                            <span className={styles.btnText}>Save</span>

                            <div className="tooltip">
                                This will save the {value.name} to your bestiary, so when you select it, it will use the current stats instead of the default ones.
                            </div>
                        </button>
                    ) : null }
                </div>
            </section>
            <section>
                <h3>Hit Points</h3>
                <input type='number' min={0} value={value.hp} onChange={e => update(v => { v.hp = Number(e.target.value) })} />
            </section>
            <section>
                <h3>Armor Class</h3>
                <input type='number' min={0} value={value.AC} onChange={e => update(v => { v.AC = Number(e.target.value) })} />
            </section>
            
            <h3 className={styles.actionsHeader}>
                <span className={styles.label}>Actions</span>
                <button
                    onClick={createAction}
                    className={styles.createActionBtn}>
                        <FontAwesomeIcon icon={faPlus} />
                </button>
            </h3>
            <div className={styles.actions}>
                { value.actions.map((action, index) => (
                    <ActionForm
                        key={action.id}
                        value={action}
                        onChange={(a) => updateAction(index, a)}
                        onDelete={() => deleteAction(index)}
                    />
                ))}
            </div>



            <div className={styles.buttons}>
                <button onClick={submit} disabled={!validate()} className="tooltipContainer">
                    <FontAwesomeIcon icon={faCheck} />
                    OK
                    
                    <div className="tooltip">
                        Save this creature for the current encounter
                    </div>
                </button>
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
    )
}

export default CustomForm