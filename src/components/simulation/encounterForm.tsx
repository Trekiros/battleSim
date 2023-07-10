import { FC, ReactNode, useState } from "react"
import { Creature, Encounter } from "../../model/model"
import styles from './encounterForm.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp, faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import CreatureForm from "./../creatureForm/creatureForm"
import { clone } from "../../model/utils"
import Checkbox from "../utils/checkbox"

type PropType = {
    mode: 'player'|'monster',
    encounter: Encounter,
    onUpdate: (newValue: Encounter) => void,
    onDelete?: () => void,
    children?: ReactNode,
    onMoveUp?: () => void,
    onMoveDown?: () => void,
}

const EncounterForm:FC<PropType> = ({ mode, encounter, onUpdate, onDelete, children, onMoveUp, onMoveDown }) => {
    const [updating, setUpdating] = useState<number | null>(null)
    const [creating, setCreating] = useState(false)

    function createCreature(creature: Creature) {
        const encounterClone = clone(encounter)
        encounterClone.monsters.push(creature)
        onUpdate(encounterClone)
        setCreating(false)
    }

    function updateCreature(index: number, newValue: Creature) {
        const encounterClone = clone(encounter)
        encounterClone.monsters[index] = newValue
        onUpdate(encounterClone)
        setUpdating(null)
    }

    function deleteCreature(index: number) {
        const encounterClone = clone(encounter)
        encounterClone.monsters.splice(index, 1)
        onUpdate(encounterClone)
        setUpdating(null)
    }

    function update(callback: (encounterClone: Encounter) => void) {
        const encounterClone = clone(encounter)
        callback(encounterClone)
        onUpdate(encounterClone)
    }

    return (
        <>
            <div className={styles.encounterForm}>
                <div className={styles.encounterActions}>
                    { !!onDelete && (
                        <button onClick={onDelete}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    )}
                    { (onMoveUp || onMoveDown) && (
                        <button onClick={onMoveUp} disabled={!onMoveUp}>
                            <FontAwesomeIcon icon={faChevronUp} />
                        </button>
                    )}
                    { (onMoveUp || onMoveDown) && (
                        <button onClick={onMoveDown} disabled={!onMoveDown}>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    )}
                </div>

                <h2 className={`${styles.header} ${(mode === "player") ? styles.player : styles.monster}`}>
                    { (mode === 'player') ? 'Player Characters' : 'Encounter' }
                </h2>

                <div className={styles.formBody}>
                    <div className={styles.creatures}>
                        { encounter.monsters.map((creature, index) => (
                            <div key={creature.id} className={styles.creature}>
                                <span className={styles.name}>{creature.name}</span>
                                <span className={styles.inlineInput}>
                                    <span className={styles.countLabel} >Count:</span>
                                    <input 
                                        type='number' 
                                        min={1} max={20} step={1} 
                                        value={creature.count} 
                                        onChange={e => updateCreature(index, {...creature, count: Math.max(0, Math.min(20, Math.round(Number(e.target.value))))})}
                                    />
                                </span>
                                { !children && <span className={styles.inlineInput}>
                                    <span className={styles.countLabel}>Arrives on round:</span>
                                    <input 
                                        type='number'
                                        min={1} max={19} step={1}
                                        value={creature.arrival || 1}
                                        onChange={e => updateCreature(index, {...creature, arrival: Math.max(0, Math.min(20, Math.round(Number(e.target.value))))})} />
                                </span> }
                                <button  onClick={() => setUpdating(index)}>
                                    <FontAwesomeIcon icon={faPen} />
                                    <label>Edit</label>
                                </button>
                            </div>
                        )) }
                    </div>
                    <div className={styles.encounterSettings}>
                        { children || (encounter.monsters.length ? (
                            <>
                                <Checkbox value={!!encounter.playersSurprised} onToggle={() => update(e => { e.playersSurprised = !e.playersSurprised })}>
                                    The players are surprised
                                </Checkbox>
                                <Checkbox value={!!encounter.monstersSurprised} onToggle={() => update(e => { e.monstersSurprised = !e.monstersSurprised })}>
                                    The enemies are surprised
                                </Checkbox>
                                { !onDelete ? null : (
                                    <Checkbox value={!!encounter.shortRest} onToggle={() => update(e => { e.shortRest = !e.shortRest })}>
                                        The players get a short rest
                                    </Checkbox>
                                )}
                            </>
                        ) : null)}
                    </div>
                </div>

                <button className={styles.addCreatureBtn} onClick={() => setCreating(true)}>
                    <FontAwesomeIcon icon={faPlus} />
                    Add { (mode === 'player') ? 'Player Character' : 'Enemy' }
                </button>
            </div>

            { (updating === null) ? null : (
                <CreatureForm
                    initialMode={mode}
                    initialValue={encounter.monsters[updating]} 
                    onCancel={() => setUpdating(null)}
                    onSubmit={(newValue) => updateCreature(updating, newValue)}
                    onDelete={() => deleteCreature(updating)}
                />
            )}

            { !creating ? null : (
                <CreatureForm
                    initialMode={mode}
                    onCancel={() => setCreating(false)}
                    onSubmit={createCreature}
                />
            )}
        </>
    )
}

export default EncounterForm