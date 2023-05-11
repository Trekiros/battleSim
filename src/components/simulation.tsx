import { FC, useEffect, useState } from "react"
import { z } from "zod"
import { Creature, CreatureSchema, Encounter, EncounterSchema, SimulationResult } from "../model/model"
import { clone, useStoredState } from "../model/utils"
import styles from './simulation.module.scss'
import { runSimulation } from "../model/simulation"
import EncounterForm from "./encounterForm"
import EncounterResult from "./encounterResult"

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
        setSimulationResults(runSimulation(players, encounters))
    }, [players, encounters])

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

            { encounters.map((encounter, index) => (
                <div className={styles.encounter} key={index}>
                    <EncounterForm
                        players={players}
                        encounter={encounter}
                        onUpdate={(newValue) => updateEncounter(index, newValue)}
                        onDelete={(index > 0) ? () => deleteEncounter(index) : undefined}
                        onPlayersUpdated={(index > 0) ? undefined : setPlayers}
                    />
                    { (!!simulationResults[index] ? null : (
                        <EncounterResult value={simulationResults[index]} />
                    ))}
                </div>
            )) }
        </div>
    )
}

export default Simulation