import { FC, useState } from "react"
import { Creature, Encounter } from "../../model/model"
import styles from './encounterForm.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import CreatureForm from "./../creatureForm/creatureForm"
import { clone } from "../../model/utils"

type PropType = {
    mode: 'player'|'monster',
    creatures: Creature[],
    onCreaturesUpdate: (newValue: Creature[]) => void,
    
    onDelete?: () => void,

    playersSurprised?: boolean,
    togglePlayersSurprised?: () => void,
    monstersSurprised?: boolean,
    toggleMonstersSurprised?: () => void,
}

const EncounterForm:FC<PropType> = ({ mode, creatures, onCreaturesUpdate, onDelete }) => {
    const [updating, setUpdating] = useState<number | null>(null)
    const [creating, setCreating] = useState(false)

    function createCreature(creature: Creature) {
        const creaturesClone = clone(creatures)
        creaturesClone.push(creature)
        onCreaturesUpdate(creaturesClone)
        setCreating(false)
    }

    function updateCreature(index: number, newValue: Creature) {
        const creaturesClone = clone(creatures)
        creaturesClone[index] = newValue
        onCreaturesUpdate(creaturesClone)
        setUpdating(null)
    }

    function deleteCreature(index: number) {
        const creaturesClone = clone(creatures)
        creaturesClone.splice(index, 1)
        onCreaturesUpdate(creaturesClone)
        setUpdating(null)
    }

    return (
        <>
            <div className={styles.encounterForm}>
                { (onDelete === undefined) ? null : (
                    <button className={styles.deleteEncounter} onClick={onDelete}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                )}

                <h1 className={`${styles.header} ${(mode === "player") ? styles.player : styles.monster}`}>
                    { (mode === 'player') ? 'Player Characters' : 'Encounter' }
                </h1>

                <div className={styles.creatures}>
                    { creatures.map((creature, index) => (
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

                <button className={styles.addCreatureBtn} onClick={() => setCreating(true)}>
                    <FontAwesomeIcon icon={faPlus} />
                    Add { (mode === 'player') ? 'Player Character' : 'Enemy' }
                </button>
            </div>

            { (updating === null) ? null : (
                <CreatureForm
                    initialMode={mode}
                    initialValue={creatures[updating]} 
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