import React, { FC, useEffect, useState } from 'react'
import LifeBar from './lifebar'
import { Round, runSimulation, Team } from '../model'
import styles from './simulation.module.scss'

type PropType = {
    players: Team,
    monsters: Team,
}

const Simulation:FC<PropType> = ({players, monsters}) => {
    const [rounds, setRounds] = useState<Round[]>([])

    // Whenever the players or monsters get updated, update the simulation
    useEffect(() => {
        setRounds(runSimulation(players, monsters))
    }, [players, monsters])

    return (
        <div className={styles.simulation}>
            {(!rounds.length || !rounds[0].players.length || !rounds[0].monsters.length) ?
                <h1>Not enough participants to run a simulation.</h1>
            : 
                rounds.map((round, roundIndex) => (
                    <div className={styles.round}>
                        <h2>{ (roundIndex === rounds.length - 1) ? ('Result') : (`Round ${roundIndex + 1}`) }</h2>
                        <div className={styles.lifebars}>
                            <div className={styles.team}>
                                {round.players.map(player => (
                                    <LifeBar name={player.name} hp={player.hp} maxHP={player.maxHP} />
                                ))}
                            </div>

                            <div className={styles.team}>
                                {round.monsters.map(monster => (
                                    <LifeBar name={monster.name} hp={monster.hp} maxHP={monster.maxHP} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Simulation