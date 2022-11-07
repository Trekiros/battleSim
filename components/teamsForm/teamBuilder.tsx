import React, {  FC, useState } from 'react'
import CreatureBuilder from '../creatureBuilder/creatureBuilder'
import { clone, Creature, Team } from '../model'
import TemplateMenu from '../templateMenu/templateMenu'
import styles from './teamBuilder.module.scss'

type PropType = {
    team: Team,
    onTeamChange?: (newValue: Team) => void,
    defaultMenuTab?: 'PC'|'NPC'|'ADV',
}

const TeamBuilder:FC<PropType> = ({ team, onTeamChange, defaultMenuTab }) => {
    const [menuShown, setMenuShown] = useState(-1)

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

    return (
        <div className={styles.creature}>
            {team.map((creature, index) => (
            <React.Fragment>
                <CreatureBuilder
                    creature={creature}
                    onCreatureChange={(newValue) => updateCreature(index, newValue)} 
                    onCreatureDelete={() => deleteCreature(index)}
                    onCreatureEdit={() => setMenuShown(index)} />
                
                <TemplateMenu 
                    visible={menuShown === index}
                    defaultTab={defaultMenuTab}
                    onCancel={() => setMenuShown(-1)}
                    onTemplateSelected={(newValue) => {
                        newValue.count = creature.count
                        newValue.name = creature.name
                        updateCreature(index, newValue)
                        setMenuShown(-1)
                    }} 
                />
            </React.Fragment>
            ))}
        </div>
    )
}

export default TeamBuilder