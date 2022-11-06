import React, { FC } from 'react'
import { Team } from '../model'
import TeamBuilder from './teamBuilder'
import styles from './teamsForm.module.scss'

type PropType = {
    players: Team,
    monsters: Team,
    onTeamsChanged?: (players: Team, monsters: Team) => void,
}

const TeamsForm:FC<PropType> = ({ players, monsters, onTeamsChanged }) => {
    return (
        <div className={styles.teams}>
          <TeamBuilder 
            teamName="Players"
            team={players}
            onTeamChange={(newPlayers) => {
                if (onTeamsChanged) onTeamsChanged(newPlayers, monsters)
            }} />

          <hr />

          <TeamBuilder
            teamName="Enemies"
            team={monsters}
            onTeamChange={(newMonsters) => {
                if (onTeamsChanged) onTeamsChanged(players, newMonsters)
            }} />
        </div>
    )
}

export default TeamsForm