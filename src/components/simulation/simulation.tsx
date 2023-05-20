import { FC, useEffect, useState } from "react"
import { z } from "zod"
import { Creature, CreatureSchema, Encounter, EncounterSchema, SimulationResult } from "../../model/model"
import { clone, useStoredState } from "../../model/utils"
import styles from './simulation.module.scss'
import { runSimulation } from "../../model/simulation"
import EncounterForm from "./encounterForm"
import EncounterResult from "./encounterResult"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

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
    const [simulationResults, setSimulationResults] = useState<SimulationResult>([])

    useEffect(() => {
        const results = runSimulation(players, encounters)
        setSimulationResults(results)
    }, [players, encounters])

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

    return (
        <div className={styles.simulation}>
            <h1 className={styles.header}>BattleSim</h1>

            <EncounterForm
                mode='player'
                creatures={players}
                onCreaturesUpdate={(newValue) => setPlayers(newValue)}
            />

            { encounters.map((encounter, index) => (
                <div className={styles.encounter} key={index}>
                    <EncounterForm
                        mode='monster'
                        creatures={encounter.monsters}
                        onCreaturesUpdate={(monsters) => updateEncounter(index, {...encounter, monsters})}
                        onDelete={(index > 0) ? () => deleteEncounter(index) : undefined}

                        playersSurprised={encounter.playersSurprised}
                        togglePlayersSurprised={() => updateEncounter(index, {...encounter, playersSurprised: !encounter.playersSurprised})}

                        monstersSurprised={encounter.monstersSurprised}
                        toggleMonstersSurprised={() => updateEncounter(index, {...encounter, monstersSurprised: !encounter.monstersSurprised})}
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
        </div>
    )
}

export default Simulation