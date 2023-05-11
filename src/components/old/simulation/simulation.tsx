import React, { FC } from 'react'
import { Round } from '../../model'
import styles from './simulation.module.scss'
import LifeBars from './lifebar'

type PropType = {
    rounds: Round[]
}

const Simulation:FC<PropType> = ({rounds}) => {
    return (
        <div className={styles.simulation}>
            {(!rounds.length || !rounds[0].players.length || !rounds[0].monsters.length) ?
                <h1>Not enough participants to run a simulation.</h1>
            : 
                rounds.map((round, roundIndex) => (
                    <div className={styles.round}>
                        <h2>{ (roundIndex === rounds.length - 1) ? ('Result') : (`Round ${roundIndex + 1}`) }</h2>
                        <div className={styles.lifebars}>
                            <LifeBars combattants={round.players} />
                            <LifeBars combattants={round.monsters} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Simulation