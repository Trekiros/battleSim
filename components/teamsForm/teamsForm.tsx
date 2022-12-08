import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import React, { FC, useState } from 'react'
import { clone, Combattant, Creature, Team } from '../model'
import LifeBars from '../simulation/lifebar'
import TemplateMenu from '../templateMenu/templateMenu'
import TeamBuilder from './teamBuilder'
import styles from './teamsForm.module.scss'

type PropType = {
    monsters: Team,
    onMonstersChanged: (monsters: Team) => void,
    
    playersTeam?: Team, 
    onPlayersChanged?: (players: Team) => void,

    playersSurprised: boolean,
    togglePlayersSurprised: () => void,

    monstersSurprised: boolean,
    toggleMonstersSurprised: () => void,
    
    playersState?: Combattant[],

    onEncounterRemoved?: () => void,
}

const TeamsForm:FC<PropType> = ({
    playersTeam,
    playersState,
    monsters,
    onPlayersChanged,
    onMonstersChanged,
    onEncounterRemoved,
    playersSurprised,
    togglePlayersSurprised,
    monstersSurprised,
    toggleMonstersSurprised,
}) => {
    const [showPlayerMenu, setShowPlayerMenu] = useState(false)
    const [showMonsterMenu, setShowMonsterMenu] = useState(false)

    function createNewPlayer(newPlayer: Creature) {
        if (playersTeam && onPlayersChanged) {
            const newTeam = playersTeam.map(clone)
            newTeam.push(newPlayer)
            onPlayersChanged(newTeam)
        }
    }

    function createNewMonster(newMonster: Creature) {
        const newTeam = monsters.map(clone)
        newTeam.push(newMonster)
        onMonstersChanged(newTeam)
    }

    return (
        <div className={styles.teams}>
            { onEncounterRemoved && (
                <FontAwesomeIcon className={styles.remove} icon={faXmark} onClick={onEncounterRemoved} />
            )}


            <div className={styles.team}>
                <h2>
                    Players
                    <span className={styles.surprise}>
                        Surprised:
                        <input 
                            type='checkbox'
                            checked={playersSurprised}
                            onClick={togglePlayersSurprised}
                        />
                    </span>
                </h2>

                {playersTeam ? (
                    <React.Fragment>
                        <TeamBuilder 
                            team={playersTeam}
                            onTeamChange={onPlayersChanged} />
                        
                        <button onClick={() => setShowPlayerMenu(true)}>Add creature</button>
                        
                        <TemplateMenu 
                            visible={showPlayerMenu}
                            onCancel={() => setShowPlayerMenu(false)}
                            onTemplateSelected={(newPlayer) => {
                                createNewPlayer(newPlayer)
                                setShowPlayerMenu(false)
                            }}
                        />
                    </React.Fragment>
                ): playersState && (
                    <div className={styles.lifebars}>
                        <LifeBars combattants={playersState} />
                    </div>
                )}
            </div>

            <hr />


            <div className={styles.team}>
                <h2>
                    Enemies
                    
                    <span className={styles.surprise}>
                        Surprised:
                        <input 
                            type='checkbox'
                            checked={monstersSurprised}
                            onClick={toggleMonstersSurprised}
                        />
                    </span>
                </h2>

                <TeamBuilder
                    team={monsters}
                    onTeamChange={onMonstersChanged}
                    defaultMenuTab='NPC' />
                    
                <button onClick={() => setShowMonsterMenu(true)}>Add creature</button>
                <TemplateMenu
                    visible={showMonsterMenu}
                    onCancel={() => setShowMonsterMenu(false)}
                    defaultTab='NPC'
                    onTemplateSelected={(newMonster) => {
                        createNewMonster(newMonster)
                        setShowMonsterMenu(false)
                    }} 
                />
            </div>
        </div>
    )
}

export default TeamsForm