import { FC, useState } from "react"
import { Creature, Encounter } from "../model/model"
import styles from './encounterForm.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import CreatureForm from "./creatureForm"
import { clone } from "../model/utils"

type PropType = {
    players: Creature[],
    encounter: Encounter,
    onUpdate: (newValue: Encounter) => void,
    onDelete?: () => void,
    onPlayersUpdated?: (newValue: Creature[]) => void,
}

const EncounterForm:FC<PropType> = ({ players, encounter, onUpdate, onDelete, onPlayersUpdated }) => {
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

    return (
        <>
            <div className={styles.encounterForm}>
                { (onDelete === undefined) ? null : (
                    <button className={styles.deleteEncounter} onClick={onDelete}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                )}

                <h1 className={styles.header}>Encounter</h1>

                <div className={styles.monsters}>
                    { encounter.monsters.map((monster, index) => (
                        <button key={monster.name} className={styles.monster} onClick={() => setUpdating(index)}>
                            {monster.name}
                        </button>
                    )) }
                </div>

                <button className={styles.addCreatureBtn} onClick={() => setCreating(true)}>
                    <FontAwesomeIcon icon={faPlus} />
                    Add Enemy
                </button>
            </div>

            { !creating ? null : (
                <CreatureForm
                    initialMode="monster" 
                    onCancel={() => setCreating(false)}
                    onSubmit={createCreature}
                />
            )}
        </>
    )
}

export default EncounterForm