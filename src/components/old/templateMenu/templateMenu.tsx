import React, { FC, useEffect, useState } from 'react'
import { challengeRating, levels } from '../../data'
import { Creature } from '../../model'
import styles from './templateMenu.module.scss'

type PropType = {
    onTemplateSelected: (newValue: Creature) => void,
    defaultTab?: 'PC'|'NPC'|'ADV',
    
    visible: boolean,
    onCancel: () => void,
}

const TemplateMenu:FC<PropType> = ({ onTemplateSelected, visible, onCancel, defaultTab }) => {
    const [activeTab, setActiveTab] = useState('PC' as 'PC'|'NPC'|'ADV')

    useEffect(() => { if(defaultTab) setActiveTab(defaultTab) }, [])

    return (
        <React.Fragment>
            <div 
                className={`${styles.overlay} ${visible ? styles.visible : ''}`}
                onClick={onCancel}
            />

            <div className={styles.container}>
                <div className={`${styles.menu} ${visible ? styles.visible : ''}`}>
                    <div className={styles.tabs}>
                        {[
                            { tab: 'PC', text: 'Player Character' },
                            { tab: 'NPC', text: 'Monster' },
                            { tab: 'ADV', text: 'Advanced Search' },
                        ].map(({tab, text}, index) => (
                            <button 
                                key={index}
                                className={(activeTab === tab ? styles.selected : '')} 
                                onClick={() => setActiveTab(tab as any)}>
                                    {text}
                            </button>
                        ))}
                    </div>
                    <div className={styles.content}>
                        {(activeTab === 'PC') && (
                            <React.Fragment>
                                <table>
                                    <thead>
                                        <th>Level</th>
                                        <th>HP</th>
                                        <th>DPR</th>
                                        <th>to hit</th>
                                        <th>AC</th>
                                        <th></th>
                                    </thead>
                                    <tbody>
                                        {
                                            levels.map(({level, hp, dpr, toHit, AC}, index) => (
                                                <tr key={index}>
                                                    <td>{level}</td>
                                                    <td>{hp}</td>
                                                    <td>{dpr}</td>
                                                    <td>{toHit}</td>
                                                    <td>{AC}</td>
                                                    <td>
                                                        <button onClick={() => {
                                                            onTemplateSelected({
                                                                count: 1,
                                                                dpr,
                                                                hp,
                                                                toHit,
                                                                AC,
                                                                name: `Lv${level} PC`,
                                                                target: 'enemy with highest DPR',
                                                            })
                                                        }}>
                                                            Select
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                <span className={styles.explanation}>
                                    *: Based on the <a href="#" target="_blank">following spreadsheet</a>.
                                </span>
                            </React.Fragment>
                        )}
                        {(activeTab === 'NPC') && (
                            <React.Fragment>
                                <table>
                                    <thead>
                                        <th>CR</th>
                                        <th>HP</th>
                                        <th>DPR</th>
                                        <th>to hit</th>
                                        <th>AC</th>
                                        <th></th>
                                    </thead>
                                    <tbody>
                                        {
                                            challengeRating.map(({cr, hp, dpr, toHit, AC}, index) => (
                                                <tr key={index}>
                                                    <td>{cr}</td>
                                                    <td>{hp}</td>
                                                    <td>{dpr}</td>
                                                    <td>{toHit}</td>
                                                    <td>{AC}</td>
                                                    <td>
                                                        <button onClick={() => {
                                                            onTemplateSelected({
                                                                count: 1,
                                                                dpr,
                                                                hp,
                                                                toHit,
                                                                AC,
                                                                name: `CR ${cr} NPC`,
                                                                target: 'enemy with most HP',
                                                            })
                                                        }}>
                                                            Select
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                <span className={styles.explanation}>
                                    *: Based on <a href="http://blogofholding.com/?p=7338" target="_blank">the Blog of Holding</a>.
                                </span>
                            </React.Fragment>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TemplateMenu