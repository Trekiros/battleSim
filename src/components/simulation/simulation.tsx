import { FC, useEffect, useState } from "react"
import { z } from "zod"
import { Creature, CreatureSchema, Encounter, EncounterSchema, SimulationResult } from "../../model/model"
import { clone, useStoredState } from "../../model/utils"
import styles from './simulation.module.scss'
import { runSimulation } from "../../model/simulation"
import EncounterForm from "./encounterForm"
import EncounterResult from "./encounterResult"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolder, faPlus, faSave, faTrash } from "@fortawesome/free-solid-svg-icons"
import { semiPersistentContext } from "../../model/simulationContext"
import AdventuringDayForm from "./adventuringDayForm"

type PropType = {
    // TODO
}

const emptyEncounter: Encounter = {
    monsters: [],
    monstersSurprised: false,
    playersSurprised: false,
}

const Simulation:FC<PropType> = ({}) => {
    const [players, setPlayers] = useStoredState<Creature[]>('players', [], z.array(CreatureSchema).parse)
    const [encounters, setEncounters] = useStoredState<Encounter[]>('encounters', [emptyEncounter], z.array(EncounterSchema).parse)
    const [luck, setLuck] = useStoredState<number>('luck', 0.5, z.number().min(0).max(1).parse)
    const [simulationResults, setSimulationResults] = useState<SimulationResult>([])
    const [state, setState] = useState(new Map<string, any>())
    
    function isEmpty() {
        const hasPlayers = !!players.length
        const hasMonsters = !!encounters.find(encounter => !!encounter.monsters.length)
        return !hasPlayers && !hasMonsters
    }

    const [saving, setSaving] = useState(false)
    const [loading, setLoading] = useState(false)
    const [canSave, setCanSave] = useState(false)
    useEffect(() => {
        setCanSave(
               !isEmpty()
            && (typeof window !== "undefined")
            && !!localStorage
            && !!localStorage.getItem('useLocalStorage')
        )
    }, [players, encounters])

    useEffect(() => {
        const results = runSimulation(players, encounters, luck)
        setSimulationResults(results)
    }, [players, encounters, luck])

    function createEncounter() {
        setEncounters([...encounters, {
            monsters: [],
            monstersSurprised: false,
            playersSurprised: false,
        }])
    }

    function updateEncounter(index: number, newValue: Encounter) {
        const encountersClone = clone(encounters)
        encountersClone[index] = newValue
        setEncounters(encountersClone)
    }

    function deleteEncounter(index: number) {
        if (encounters.length <= 1) return // Must have at least one encounter
        const encountersClone = clone(encounters)
        encountersClone.splice(index, 1)
        setEncounters(encountersClone)
    }

    function swapEncounters(index1: number, index2: number) {
        const encountersClone = clone(encounters)
        const tmp = encountersClone[index1]
        encountersClone[index1] = encountersClone[index2]
        encountersClone[index2] = tmp
        setEncounters(encountersClone)
    }

    return (
        <div className={styles.simulation}>
            <semiPersistentContext.Provider value={{state, setState}}>
                <h1 className={styles.header}>BattleSim</h1>

                <EncounterForm
                    mode='player'
                    encounter={{ monsters: players }}
                    onUpdate={(newValue) => setPlayers(newValue.monsters)}
                    luck={luck}
                    setLuck={setLuck}>
                        <>
                            { !isEmpty() ? (
                                <button onClick={() => { setPlayers([]); setEncounters([emptyEncounter]) }}>
                                    <FontAwesomeIcon icon={faTrash} />
                                    Clear Adventuring Day
                                </button>
                            ) : null }
                            { canSave ? (
                                <button onClick={() => setSaving(true)}>
                                    <FontAwesomeIcon icon={faSave} />
                                    Save Adventuring Day
                                </button>
                            ) : null}
                            <button onClick={() => setLoading(true)}>
                                <FontAwesomeIcon icon={faFolder} />
                                Load Adventuring Day
                            </button>
                            { !saving ? null : (
                                <AdventuringDayForm
                                    players={players}
                                    encounters={encounters}
                                    onCancel={() => setSaving(false)} />
                            ) }
                            { !loading ? null : (
                                <AdventuringDayForm
                                    players={players}
                                    encounters={encounters}
                                    onCancel={() => setLoading(false)} 
                                    onLoad={(p, e) => {
                                        setPlayers(p)
                                        setEncounters(e)
                                        setLoading(false)
                                    }} />
                            ) }
                        </>
                </EncounterForm>

                { encounters.map((encounter, index) => (
                    <div className={styles.encounter} key={index}>
                        <EncounterForm
                            mode='monster'
                            encounter={encounter}
                            onUpdate={(newValue) => updateEncounter(index, newValue)}
                            onDelete={(index > 0) ? () => deleteEncounter(index) : undefined}
                            onMoveUp={(!!encounters.length && !!index) ? () => swapEncounters(index, index-1) : undefined}
                            onMoveDown={(!!encounters.length && (index < encounters.length - 1)) ? () => swapEncounters(index, index+1) : undefined}
                            luck={luck}
                            setLuck={setLuck}
                        />
                        { (!simulationResults[index] ? null : (
                            <EncounterResult value={simulationResults[index]} />
                        ))}
                    </div>
                )) }

                <button 
                    onClick={createEncounter}
                    className={styles.addEncounterBtn}>
                        <FontAwesomeIcon icon={faPlus} />
                        Add Encounter
                </button>
            </semiPersistentContext.Provider>
        </div>
    )
}

export default Simulation