import { FC } from "react"
import { Combattant, EncounterResult } from "../../model/model"
import styles from './encounterResult.module.scss'
import { Action } from "../../model/model"
import { Round } from "../../model/model"
import { clone } from "../../model/utils"

type TeamPropType = {
    round: Round,
    team: Combattant[],
}

const TeamResults:FC<TeamPropType> = ({ round, team }) => {
    function getTarget(combattantAction: { action: Action, targets: string[] }) {
        if (combattantAction.action.target === 'self') return 'itself'

        const allCombattants = [...round.team1, ...round.team2].map(combattant => combattant)
        const targetNames = combattantAction.targets.map(targetId => allCombattants.find(combattant => (combattant.id === targetId)))
            .filter(nullable => !!nullable)
            .map(combattant => combattant!.creature.name)

        return targetNames.join(' and ')
    }

    return (
        <div className={styles.team}>
            { team.map(combattant => (
                <div key={combattant.id} className={`${styles.lifebar} tooltipContainer`}>
                    <div className={styles.lifebarBackground}>
                        <div 
                            className={styles.lifebarForeground} 
                            style={{ width: `${100*combattant.initialState.currentHP/combattant.creature.hp}%` }}
                        />
                        <div className={styles.lifebarLabel}>
                            {Math.round(combattant.initialState.currentHP)}/{combattant.creature.hp}
                        </div>
                    </div>
                    <div className={styles.creatureName}>
                        {combattant.creature.name}
                    </div>

                    { (combattant.actions.length === 0) ? null : (
                        <div className="tooltip">
                            <ul>
                                { (() => {
                                    const li = combattant.actions.flatMap(actionSlot => actionSlot)
                                    .filter(({ targets }) => !!targets.length)
                                    .map((action, index) => (
                                        <li key={index}>
                                            <b>{action.action.name}</b> on {getTarget(action)}
                                        </li>
                                    ))

                                    if (!li.length) return <>No action</>
                                    return li
                                })()}
                            </ul>
                        </div>
                    )}
                </div>
            )) }
        </div>
    )
}

type PropType = {
    value: EncounterResult,
}

const EncounterResult:FC<PropType> = ({ value }) => {
    const lastRound = clone(value[value.length - 1]);
    
    ([...lastRound.team1, ...lastRound.team2]).forEach(combattant => {
        combattant.initialState = combattant.finalState
        combattant.actions = []
    })

    return (
        <div className={styles.encounterResult}>
            { (!value[0].team1.length || !value[0].team2.length) ? null : 
                <>
                    {value.map((round, roundIndex) => (
                        <div key={roundIndex} className={styles.round}>
                            <h3>Round {roundIndex + 1}</h3>
        
                            <div className={styles.lifebars}>
                                <TeamResults round={round} team={round.team1} />
                                <hr />
                                <TeamResults round={round} team={round.team2} />
                            </div>
                        </div>
                    ))}
                    <div className={styles.round}>
                        <h3>Result</h3>

                        <div className={styles.lifebars}>
                            <TeamResults round={lastRound} team={lastRound.team1} />
                            <hr />
                            <TeamResults round={lastRound} team={lastRound.team2} />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default EncounterResult