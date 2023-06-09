import { FC } from "react"
import { Combattant, EncounterResult, EncounterStats, FinalAction, Buff } from "../../model/model"
import styles from './encounterResult.module.scss'
import { Round } from "../../model/model"
import { clone } from "../../model/utils"

type TeamPropType = {
    round: Round,
    team: Combattant[],
    stats?: Map<string, EncounterStats>,
}

const TeamResults:FC<TeamPropType> = ({ round, team, stats }) => {
    function getTarget(combattantAction: { action: FinalAction, targets: Map<string, number> }) {
        if (combattantAction.action.target === 'self') return 'itself'

        const allCombattants = [...round.team1, ...round.team2].map(combattant => combattant)
        const targetNames = Array.from(combattantAction.targets.entries()).map(([targetId, count]) => {
            const targetCombattant = allCombattants.find(combattant => (combattant.id === targetId))
            if (!targetCombattant) {
                return null
            }

            const creatureName = targetCombattant.creature.name

            if (count === 1) return creatureName

            return creatureName + ' x' + count
        })
            .filter(nullable => !!nullable)

        return targetNames.join(' and ')
    }

    function getBuffEffect(buff: Buff) {
        const buffEffects: string[] = []

        if (buff.ac != undefined) buffEffects.push(' ' +String(buff.ac) + ' AC')
        if (buff.condition != undefined) buffEffects.push(' ' + buff.condition)
        if (buff.damageMultiplier != undefined) buffEffects.push(' x' + buff.damageMultiplier + ' damage')
        if (buff.damageTakenMultiplier != undefined) buffEffects.push( ' x' + buff.damageTakenMultiplier + ' damage taken')
        if (buff.toHit != undefined) buffEffects.push(' ' +String(buff.toHit) + ' to hit')
        if (buff.save != undefined) buffEffects.push(' ' +String(buff.save) + ' to save')
        if (buff.damage != undefined) buffEffects.push(' '+String(buff.damage) + ' extra damage')

        return buffEffects.join(', ')
    }

    return (
        <div className={styles.team}>
            { team.map(combattant => (
                <div key={combattant.id} className={`${styles.lifebar} tooltipContainer`}>
                    <div className={styles.lifebarBackground}>
                        <div 
                            className={styles.lifebarForeground} 
                            style={{ 
                                width: `${100*combattant.initialState.currentHP/(combattant.creature.hp + (combattant.initialState.tempHP || 0))}%` 
                            }}
                            />
                        { combattant.initialState.tempHP ? (
                            <div 
                            className={styles.lifebarTHP}
                            style={{
                                    width: `${100*combattant.initialState.tempHP/(combattant.creature.hp + combattant.initialState.tempHP)}%`,
                                }}
                            />
                        ) : null }
                        <div className={styles.lifebarLabel}>
                            {Math.round(combattant.initialState.currentHP)}/{combattant.creature.hp}
                            { combattant.initialState.tempHP ? `+${Math.round(combattant.initialState.tempHP)}` : null }
                        </div>
                    </div>
                    <div className={styles.creatureName}>
                        {combattant.creature.name}
                    </div>

                    { (!stats && (combattant.actions.length === 0)) ? null : (
                        <div className="tooltip">
                            <ul>
                                { stats ? (() => {
                                    const creatureStats = stats.get(combattant.id)
                                    if (!creatureStats) return <>No Stats</>

                                    return (
                                        <>
                                            {creatureStats.damageDealt ? <li><b>Damage Dealt:</b> {Math.round(creatureStats.damageDealt)} dmg</li> : null}
                                            {creatureStats.damageTaken ? <li><b>Damage Taken:</b> {Math.round(creatureStats.damageTaken)} dmg</li> : null}
                                            {creatureStats.healGiven ? <li><b>Healed allies for:</b> {Math.round(creatureStats.healGiven)} hp</li> : null}
                                            {creatureStats.healReceived ? <li><b>Was healed for:</b> {Math.round(creatureStats.healReceived)} hp</li> : null}
                                            {creatureStats.timesUnconscious ? <li><b>Went unconscious:</b> {Math.round(creatureStats.timesUnconscious)} times</li> : null}
                                            {creatureStats.charactersBuffed ? <li><b>Buffed:</b> {Math.round(creatureStats.charactersBuffed)} allies</li> : null}
                                            {creatureStats.buffsReceived ? <li><b>Was buffed:</b> {Math.round(creatureStats.buffsReceived)} times</li> : null}
                                            {creatureStats.charactersDebuffed ? <li><b>Debuffed:</b> {Math.round(creatureStats.charactersDebuffed)} enemies</li> : null}
                                            {creatureStats.debuffsReceived ? <li><b>Was debuffed:</b> {Math.round(creatureStats.debuffsReceived)} times</li> : null}
                                        </>
                                    )
                                })() : (() => {
                                    const li = combattant.actions
                                    .filter(({ targets }) => !!targets.size)
                                    .map((action, index) => (
                                        <li key={index}>
                                            <b>{action.action.name}</b> on {getTarget(action)}
                                        </li>
                                    ))

                                    //todo effects that disappear in the same round are not shown, which can be misleading
                                    const bi = Array.from(combattant.finalState.buffs)
                                        .map((buff, name) => (
                                            <li key={name}>
                                                <b>{buff[1].displayName}</b>{getBuffEffect(buff[1])}
                                            </li>
                                    ))

                                    return (
                                        <>
                                            {li.length ? li : null}
                                            {bi.length ? <>
                                                <br /><u>Active Buffs</u><br />
                                                {bi}
                                            </> : null}
                                        </>
                                    )
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
    const lastRound = clone(value.rounds[value.rounds.length - 1]);
    
    ([...lastRound.team1, ...lastRound.team2]).forEach(combattant => {
        combattant.initialState = combattant.finalState
        combattant.actions = []
    })

    return (
        <div className={styles.encounterResult}>
            { (!value.rounds[0].team1.length || !value.rounds[0].team2.length) ? null : 
                <>
                    {value.rounds.map((round, roundIndex) => (
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
                            <TeamResults round={lastRound} team={lastRound.team1} stats={value.stats} />
                            <hr />
                            <TeamResults round={lastRound} team={lastRound.team2} stats={value.stats} />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default EncounterResult