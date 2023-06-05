import { FC, useState } from "react"
import { Creature, CreatureSchema, Encounter, EncounterSchema } from "../../model/model"
import styles from './adventuringDayForm.module.scss'
import { sharedStateGenerator, useCalculatedState } from "../../model/utils"
import {z} from 'zod'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faFolder, faSave, faTrash, faUpload } from "@fortawesome/free-solid-svg-icons"
import { PlayerTemplates } from "../../data/data"
import { getMonster } from "../../data/monsters"
import SortTable from "../utils/sortTable"
import Modal from "../utils/modal"

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

const SaveFileSchema = z.object({
    updated: z.number(),
    name: z.string(),
    players: z.array(CreatureSchema),
    encounters: z.array(EncounterSchema),
})
type SaveFile = z.infer<typeof SaveFileSchema>

const SaveCollectionSchema = z.array(SaveFileSchema)
type SaveCollection = z.infer<typeof SaveCollectionSchema>

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

function loadSaves(): SaveCollection {
    if (typeof localStorage === undefined) return []

    const json = localStorage.getItem('saveFiles')
    if (!json) return [ExampleAdventuringDay]
    
    const obj = JSON.parse(json)
    const parsed = SaveCollectionSchema.safeParse(obj)

    if (parsed.success) {
        return parsed.data
    }
    return []
}

function currentSaveName(): string {
    if (typeof localStorage === undefined) return ''

    return localStorage.getItem('saveName') || ''
}

const AdventuringDayForm:FC<PropType> = ({ players, encounters, onCancel, onLoad }) => {
    const useSharedContext = sharedStateGenerator('adventuringDayForm')
    const [name, setName] = useSharedContext(currentSaveName())
    const [deleted, setDeleted] = useState(0)
    const [error, setError] = useState<string|null>(null)
    
    const isValid = useCalculatedState(() => !!name, [name])
    const searchResults = useCalculatedState(loadSaves, [name, deleted])

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

    async function onDownload() {
        const newSaveFile: SaveFile = {
            updated: Date.now(),
            name,
            players,
            encounters,
        }

        const file = new Blob([JSON.stringify(newSaveFile)], {type: 'json'})
        const a = document.createElement("a")
        const url = URL.createObjectURL(file)
        a.href = url
        a.download = `${newSaveFile.name}.json`
        document.body.appendChild(a)
        a.click()
        setTimeout(() => {
            document.body.removeChild(a)
            window.URL.revokeObjectURL(url)  
        }, 0)
    }

    async function onUpload(files: FileList | null) {
        if (!onLoad) return
        if (!files || !files.length) { setError('No files uploaded'); return }

        const file = files[0]
        if (!file) { setError('No file uploaded'); return }

        const json = await file.text()
        if (!json) return

        let obj
        try { obj = JSON.parse(json) } 
        catch (e) { setError('File is not valid JSON');  return }
        
        const parsed = SaveFileSchema.safeParse(obj)
        if (!parsed.success) { setError('Invalid schema'); return }

        const newSave: SaveFile = parsed.data

        const saveFiles = loadSaves()
        
        const existingIndex = saveFiles.findIndex(save => (save.name === newSave.name))
        if (existingIndex !== -1) saveFiles[existingIndex] = newSave
        else saveFiles.push(newSave)

        carefulSave('saveFiles', JSON.stringify(saveFiles))
        carefulSave('saveName', newSave.name)
        onLoad(newSave.players, newSave.encounters)
    }

    function getSaveByName(saveName: string) {
        return searchResults.find(save => (save.name === saveName))!
    }

    return (
        <Modal onCancel={onCancel} className={styles.adventuringDay}>
            { onLoad ? null : (
                <section>
                    <h3>Save File Name:</h3>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </section>
            )}

            <SortTable
                value={name}
                list={searchResults.map(save => save.name)}
                comparators={{
                    Name: (a, b) => a.localeCompare(b),
                    'Last Update': (a, b) => getSaveByName(a).updated - getSaveByName(b).updated,
                }}
                onChange={setName}>
                    { saveName => {
                        const save = getSaveByName(saveName)
                        return (
                            <div className={styles.save}>
                                <span className={styles.fileName}>{save.name}</span>
                                <span className={styles.fileDate}>{new Date(save.updated).toLocaleDateString()}</span>
                                <button onClick={() => deleteSave(save.name)}><FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                        )
                    }}
            </SortTable>

            <div className={styles.buttons}>
                { onLoad ? (
                    <>
                        <button
                            disabled={!isValid}
                            onClick={load}>
                            <FontAwesomeIcon icon={faFolder} />
                            Load {name ? `"${name}"` : ''}
                        </button>
                        
                        <label htmlFor="file" className="tooltipContainer">
                            <FontAwesomeIcon icon={faUpload} />
                            Upload save file

                            <div className="tooltip">
                                Loads an adventuring day from a file you upload.
                            </div>
                        </label>
                        <input 
                            type="file" 
                            id="file" 
                            accept="application/json" 
                            style={{display: "none"}} 
                            onChange={(e) => onUpload(e.target.files)} />
                    </>
                ) : (
                    <>
                        <button
                            disabled={!isValid}
                            onClick={save}>
                            <FontAwesomeIcon icon={faSave} />
                            Save {name ? `"${name}"` : ''}
                        </button>
                        <button className="tooltipContainer" onClick={onDownload}>
                            <FontAwesomeIcon icon={faDownload} />
                            Download save file

                            <div className="tooltip">
                                Save the current encounter as a file so you can load it later
                            </div>
                        </button>
                    </>
                )}
            </div>

            { (error !== null) ? (
                <div className={styles.error}>
                    {error}
                </div>
            ) : null}
        </Modal>
    )
}

export default AdventuringDayForm