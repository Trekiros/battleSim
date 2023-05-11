import { FC, useState } from "react"
import { Creature, Encounter } from "../model/model"
import styles from './encounterForm.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"

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

    return (
        <div className={styles.encounterForm}>
            { (onDelete === undefined) ? null : (
                <button className={styles.deleteEncounter} onClick={onDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            ) }

            <h1 className={styles.header}>Encounter</h1>

            <div className={styles.monsters}>
                { encounter.monsters.map((monster, index) => (
                    <button key={monster.name} className={styles.monster} onClick={() => setUpdating(index)}>
                        {monster.name}
                    </button>
                )) }
            </div>

            <button onClick={() => setCreating(true)}>
                <FontAwesomeIcon icon={faPlus} />
                Add Enemy
            </button>
        </div>
    )
}

export default EncounterForm