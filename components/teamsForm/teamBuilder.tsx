import React, {  FC } from 'react'
import CreatureBuilder from '../creatureBuilder/creatureBuilder'
import { clone, Creature, Team } from '../model'
import TemplateMenu from '../templateMenu/templateMenu'
import styles from './teamBuilder.module.scss'

type PropType = {
    teamName: string,
    team: Team,
    onTeamChange?: (newValue: Team) => void
}

const TeamBuilder:FC<PropType> = ({ teamName, team, onTeamChange }) => {
    function updateCreature(index: number, newValue: Creature) {
        const newTeam = team.map(clone)
        newTeam[index] = newValue
        if (onTeamChange) onTeamChange(newTeam)
    }

    function deleteCreature(index: number) {
        const newTeam = team.map(clone)
        newTeam.splice(index, 1)
        if (onTeamChange) onTeamChange(newTeam)
    }

    function createNewCreature(newCreature: Creature) {
        const newTeam = team.map(clone)
        newTeam.push(newCreature)

        if (onTeamChange) onTeamChange(newTeam)
    }

    return (
        <div className={styles.team}>
            <h2>{teamName}</h2>

            <div className={styles.creature}>
                {team.map((creature, index) => (
                    <CreatureBuilder
                        creature={creature}
                        onCreatureChange={(newValue) => updateCreature(index, newValue)} 
                        onCreatureDelete={() => deleteCreature(index)} />
                ))}
            </div>

            <TemplateMenu onTemplateSelected={(newCreature) => createNewCreature(newCreature)} />
        </div>
    )
}

export default TeamBuilder