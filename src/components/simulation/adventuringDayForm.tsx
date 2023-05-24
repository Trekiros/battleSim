import { FC, useState } from "react"
import { Creature, CreatureSchema, Encounter, EncounterSchema } from "../../model/model"
import styles from './adventuringDayForm.module.scss'
import { sharedStateGenerator, useCalculatedState } from "../../model/utils"
import {z} from 'zod'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp, faFolder, faSave, faTrash } from "@fortawesome/free-solid-svg-icons"
import { PlayerTemplates } from "../../data/data"
import { getMonster } from "../../data/monsters"

type PropType = {
    players: Creature[],
    encounters: Encounter[],
    onCancel: () => void,
    onLoad?: (players: Creature[], encounters: Encounter[]) => void,
}

function carefulSave(key: string, value: string) {
    if (!localStorage.getItem('useLocalStorage')) return
    localStorage.setItem(key, value)
}

const SaveFileSchema = z.array(z.object({
    updated: z.number(),
    name: z.string(),
    players: z.array(CreatureSchema),
    encounters: z.array(EncounterSchema),
}))

const ExampleAdventuringDay: SaveFile = {
    updated: Date.now(),
    name: 'Example',
    players: [
        PlayerTemplates.barbarian(3, {gwm: false, weaponBonus: 0}),
        PlayerTemplates.cleric(3, {}),
        PlayerTemplates.rogue(3, {ss: false, weaponBonus: 0}),
        PlayerTemplates.wizard(3, {}),
    ],
    encounters: [
        {
            monsters: [
                getMonster('Bandit Captain')!,
                {...getMonster('Bandit')!, count: 5},
            ],
        },
    ]
}

function loadSaves(): z.infer<typeof SaveFileSchema> {
    if (typeof localStorage === undefined) return []

    const json = localStorage.getItem('saveFiles')
    if (!json) return [ExampleAdventuringDay]
    
    const obj = JSON.parse(json)
    const parsed = SaveFileSchema.safeParse(obj)

    if (parsed.success) {
        return parsed.data
    }
    return []
}

function currentSaveName(): string {
    if (typeof localStorage === undefined) return ''

    return localStorage.getItem('saveName') || ''
}

type SaveFile = (z.infer<typeof SaveFileSchema>)[0]
const Comparators = {
    nameAsc: (a: SaveFile, b: SaveFile) => a.name.localeCompare(b.name),
    nameDesc: (a: SaveFile, b: SaveFile) => -a.name.localeCompare(b.name),
    dateAsc: (a: SaveFile, b: SaveFile) => a.updated - b.updated,
    dateDesc: (a: SaveFile, b: SaveFile) => b.updated - a.updated,
} as const

const AdventuringDayForm:FC<PropType> = ({ players, encounters, onCancel, onLoad }) => {
    const useSharedContext = sharedStateGenerator('adventuringDayForm')
    const [name, setName] = useSharedContext(currentSaveName())
    const [sortBy, setSortBy] = useSharedContext<keyof typeof Comparators>('dateDesc')
    const [deleted, setDeleted] = useState(0)
    
    const isValid = useCalculatedState(() => !!name, [name])
    const searchResults = useCalculatedState(() => {
        const saveFiles = loadSaves()
        return saveFiles.sort((a, b) => Comparators[sortBy](a,b))
    }, [name, sortBy, deleted])

    function save() {
        if (!isValid) return

        const newSaveFile: SaveFile = {
            updated: Date.now(),
            name,
            players,
            encounters,
        }

        const saveFiles = loadSaves()
        
        const existingIndex = saveFiles.findIndex(save => (save.name === newSaveFile.name))
        if (existingIndex !== -1) saveFiles[existingIndex] = newSaveFile
        else saveFiles.push(newSaveFile)

        carefulSave('saveFiles', JSON.stringify(saveFiles))
        carefulSave('saveName', name)
        onCancel()
    }

    function load() {
        if (!onLoad) return
        if (!isValid) return

        const saveFile = loadSaves().find(save => (save.name === name))

        if (!saveFile) return

        onLoad(saveFile.players, saveFile.encounters)
        carefulSave('saveName', name)
    }

    function deleteSave(saveName: string) {
        setDeleted(deleted + 1)
        const saveFiles = loadSaves()
        const index = saveFiles.findIndex(save => (save.name === saveName))

        if (index === -1) return

        saveFiles.splice(index, 1)
        carefulSave('saveFiles', JSON.stringify(saveFiles))
        
        setName('')
        localStorage.removeItem('saveName')
    }

    return (
        <div className={styles.overlay} onMouseDown={onCancel}>
            <div className={styles.modal} onMouseDown={e => e.stopPropagation()}>
                { onLoad ? null : (
                    <section>
                        <h3>Save File Name:</h3>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </section>
                )}

                <div className={styles.searchResults}>
                    <div className={styles.header}>
                        <div onClick={() => setSortBy((sortBy === 'nameAsc') ? 'nameDesc' : 'nameAsc' )}>
                            Name
                            { (sortBy !== 'nameAsc') ? null : <FontAwesomeIcon icon={faChevronUp} /> }
                            { (sortBy !== 'nameDesc') ? null : <FontAwesomeIcon icon={faChevronDown} /> }
                        </div>                    
                        <div onClick={() => setSortBy((sortBy === 'dateAsc') ? 'dateDesc' : 'dateAsc' )}>
                            Last Update
                            { (sortBy !== 'dateAsc') ? null : <FontAwesomeIcon icon={faChevronUp} /> }
                            { (sortBy !== 'dateDesc') ? null : <FontAwesomeIcon icon={faChevronDown} /> }
                        </div>
                    </div>
                    <div className={styles.result}>
                        { searchResults.length === 0 ? (
                            <div className={styles.placeholder}>
                                No save files
                            </div>
                        ) : (
                            searchResults.map(save => (
                                <div 
                                    key={save.name} 
                                    className={`${styles.save} ${name === save.name ? styles.active : ''}`} 
                                    onClick={() => setName(save.name)}>
                                        <span className={styles.fileName}>
                                            {save.name}
                                        </span>
                                        <span className={styles.fileDate}>
                                            {new Date(save.updated).toLocaleDateString()}
                                        </span>
                                        <button onClick={() => deleteSave(save.name)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className={styles.buttons}>
                    { onLoad ? (
                        <button
                            disabled={!isValid}
                            onClick={load}>
                            <FontAwesomeIcon icon={faFolder} />
                            Load {name ? `"${name}"` : ''}
                        </button>
                    ) : (
                        <button
                            disabled={!isValid}
                            onClick={save}>
                            <FontAwesomeIcon icon={faSave} />
                            Save {name ? `"${name}"` : ''}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AdventuringDayForm