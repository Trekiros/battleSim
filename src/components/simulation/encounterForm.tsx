import { FC, useState } from "react"
import { Creature, Encounter } from "../../model/model"
import styles from './encounterForm.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import CreatureForm from "./../creatureForm/creatureForm"
import { clone } from "../../model/utils"
import Checkbox from "../utils/checkbox"

type PropType = {
    mode: 'player'|'monster',
    encounter: Encounter,
    onUpdate: (newValue: Encounter) => void,
    onDelete?: () => void,
}

const EncounterForm:FC<PropType> = ({ mode, encounter, onUpdate, onDelete }) => {
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
                { (onDelete === undefined) ? null : (
                    <button className={styles.deleteEncounter} onClick={onDelete}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                )}

                <h2 className={`${styles.header} ${(mode === "player") ? styles.player : styles.monster}`}>
                    { (mode === 'player') ? 'Player Characters' : 'Encounter' }
                </h2>

                <div className={styles.formBody}>
                    <div className={styles.creatures}>
                        { encounter.monsters.map((creature, index) => (
                            <div key={creature.id} className={styles.creature}>
                                <span className={styles.name}>{creature.name}</span>
                                <span className={styles.countLabel} >Count:</span>
                                <input 
                                    type='number' 
                                    min={1} max={20} step={1} 
                                    value={creature.count} 
                                    onChange={e => updateCreature(index, {...creature, count: Math.max(0, Math.min(20, Number(e.target.value)))})}
                                />
                                <button  onClick={() => setUpdating(index)}>
                                    <FontAwesomeIcon icon={faPen} />
                                </button>
                            </div>
                        )) }
                    </div>
                    { mode === 'player' ? null : (
                        <div className={styles.encounterSettings}>
                            <Checkbox value={!!encounter.playersSurprised} onToggle={() => update(e => { e.playersSurprised = !e.playersSurprised })}>
                                Surprise round for the enemies
                            </Checkbox>
                            <Checkbox value={!!encounter.monstersSurprised} onToggle={() => update(e => { e.monstersSurprised = !e.monstersSurprised })}>
                                Surprise round for the players
                            </Checkbox>
                            { !onDelete ? null : (
                                <Checkbox value={!!encounter.shortRest} onToggle={() => update(e => { e.shortRest = !e.shortRest })}>
                                    The players get a short rest
                                </Checkbox>
                            )}
                        </div>
                    )}
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