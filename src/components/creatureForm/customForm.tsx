import { FC } from "react"
import { Action, Creature } from "../../model/model"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faSave } from "@fortawesome/free-solid-svg-icons"
import styles from './customForm.module.scss'
import { clone, useValidation } from "../../model/utils"
import ActionForm from "./actionForm"
import DecimalInput from "../utils/DecimalInput"

type PropType = {
    value: Creature,
    onChange: (newvalue: Creature) => void,
}

const CustomForm:FC<PropType> = ({ value, onChange }) => {
    useValidation(() => (
               !!value.name
            && !!value.AC
            && !!value.hp
            && !!value.actions.length
            && !value.actions.find(action => (!action.name))
    ), [value])

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
                <DecimalInput min={0} value={value.hp} onChange={hp => update(v => { v.hp = hp || 0 })} />
            </section>
            <section>
                <h3>Armor Class</h3>
                <DecimalInput min={0} value={value.AC} onChange={ac => update(v => { v.AC = ac || 0 })} />
            </section>
            <section className="tooltipContainer">
                <h3>Average Save</h3>
                <DecimalInput min={0} value={value.saveBonus} onChange={save => update(v => { v.saveBonus = save || 0 })} />
                <div className="tooltip">Average of all saves' bonuses</div>
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
        </div>
    )
}

export default CustomForm