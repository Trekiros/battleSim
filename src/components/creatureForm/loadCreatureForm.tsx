import { FC, useState } from "react";
import { Creature, CreatureSchema } from "../../model/model";
import styles from './loadCreatureForm.module.scss'
import Modal from "../utils/modal";
import { z } from 'zod'
import { clone, useCalculatedState } from "../../model/utils";
import SortTable from "../utils/sortTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faTrash } from "@fortawesome/free-solid-svg-icons";

type PropType = {
    onCancel: () => void,
    onLoad: (newCreature: Creature) => void,
}

function loadSaves(): Creature[] {
    if (typeof localStorage === undefined) return []

    const json = localStorage.getItem('savedCreatures')
    if (!json) return []
    
    const obj = JSON.parse(json)
    const parsed = z.array(CreatureSchema).safeParse(obj)

    if (parsed.success) {
        return parsed.data
    }
    return []
}

export function saveCreature(creature: Creature) {
    if (typeof localStorage === undefined) return
    if (!localStorage.getItem('useLocalStorage')) return

    const saves = loadSaves()

    const existingIndex = saves.findIndex(save => (save.id === creature.id) && (save.name === creature.name))

    if (existingIndex != -1) {
        saves[existingIndex] = creature
    } else {
        saves.push(creature)
    }

    localStorage.setItem('savedCreatures', JSON.stringify(saves))
}

const LoadCreatureForm:FC<PropType> = ({ onCancel, onLoad }) => {
    const [selected, setSelected] = useState<Creature|undefined>(undefined)
    const [saves, setSaves] = useState(loadSaves())

    function deleteSave(creature: Creature) {
        const index = saves.findIndex((save) => (save.id === creature.id) && (save.name === creature.name))
        if (index === -1) return

        const savesClone = clone(saves)
        savesClone.splice(index, 1)
        setSaves(savesClone)
        setTimeout(() => setSelected(undefined), 0)

        if (typeof localStorage === undefined) return
        if (!localStorage.getItem('useLocalStorage')) return
        localStorage.setItem('savedCreatures', JSON.stringify(savesClone))
    }

    return (
        <Modal onCancel={onCancel} className={styles.loadCreature}>
            <SortTable
                value={selected}
                list={saves}
                onChange={setSelected}
                comparators={{
                    Name: (a, b) => a.name.localeCompare(b.name),
                }}>
                    { creature => (
                        <div className={styles.creature}>
                            <span className={styles.creatureName}>{creature.name}</span>
                            <button onClick={() => deleteSave(creature)}><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    )}
            </SortTable>

            <button 
                disabled={selected === undefined}
                onClick={() => selected && onLoad(selected)}>
                    <FontAwesomeIcon icon={faFolder} />
                    Load {selected !== undefined ? selected.name : null}
            </button>
        </Modal>
    )
}

export default LoadCreatureForm