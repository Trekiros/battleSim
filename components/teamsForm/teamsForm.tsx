import React, { FC } from 'react'
import { Combattant, Team } from '../model'
import LifeBars from '../simulation/lifebar'
import TeamBuilder from './teamBuilder'
import styles from './teamsForm.module.scss'

type PropType = {
    monsters: Team,
    onMonstersChanged: (monsters: Team) => void,
    
    playersTeam?: Team, 
    onPlayersChanged?: (players: Team) => void, 
    
    playersState?: Combattant[],

    onEncounterRemoved?: () => void,
}

const TeamsForm:FC<PropType> = ({ playersTeam, playersState, monsters, onPlayersChanged, onMonstersChanged, onEncounterRemoved }) => {
    return (
        <div className={styles.teams}>
            { onEncounterRemoved && (
                <div className={styles.removeContainer}>
                    <div className={styles.remove} onClick={onEncounterRemoved}>
                    +
                    </div>
                </div>
            )}

            {playersTeam ? (
                <TeamBuilder 
                    teamName="Players"
                    team={playersTeam}
                    onTeamChange={onPlayersChanged} />
            ): playersState && (
                <div className={styles.lifebars}>
                    <h2>Players</h2>
                    <LifeBars combattants={playersState} />
                </div>
            )}

            <hr />

            <TeamBuilder
                teamName="Enemies"
                team={monsters}
                onTeamChange={onMonstersChanged} />
        </div>
    )
}

export default TeamsForm