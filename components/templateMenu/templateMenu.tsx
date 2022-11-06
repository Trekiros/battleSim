import React, { FC, useState } from 'react'
import { Creature } from '../model'
import styles from './templateMenu.module.scss'

type PropType = {
    onTemplateSelected?: (newValue: Creature) => void,
}

const levels = [
    {level: 1, hp: 10, dpr: 9, toHit: 5, AC: 16},
    {level: 2, hp: 17, dpr: 12, toHit: 5, AC: 16},
    {level: 3, hp: 23, dpr: 12, toHit: 5, AC: 17},
    {level: 4, hp: 30, dpr: 13, toHit: 6, AC: 17},
    {level: 5, hp: 37, dpr: 26, toHit: 8, AC: 18},
    {level: 6, hp: 44, dpr: 26, toHit: 8, AC: 18},
    {level: 7, hp: 51, dpr: 26, toHit: 8, AC: 18},
    {level: 8, hp: 58, dpr: 28, toHit: 9, AC: 18},
    {level: 9, hp: 65, dpr: 28, toHit: 10, AC: 18},
    {level: 10, hp: 72, dpr: 28, toHit: 10, AC: 18},
    {level: 11, hp: 79, dpr: 42, toHit: 11, AC: 18},
    {level: 12, hp: 86, dpr: 42, toHit: 11, AC: 18},
    {level: 13, hp: 93, dpr: 42, toHit: 12, AC: 18},
    {level: 14, hp: 100, dpr: 42, toHit: 12, AC: 18},
    {level: 15, hp: 107, dpr: 42, toHit: 12, AC: 18},
    {level: 16, hp: 114, dpr: 42, toHit: 12, AC: 18},
    {level: 17, hp: 121, dpr: 56, toHit: 14, AC: 18},
    {level: 18, hp: 128, dpr: 56, toHit: 14, AC: 18},
    {level: 19, hp: 135, dpr: 56, toHit: 14, AC: 18},
    {level: 20, hp: 145, dpr: 56, toHit: 14, AC: 18},
]

const challengeRating = [
    {cr: '0', hp: 3, dpr: 1, toHit: 2, AC: 12},
    {cr: '1/8', hp: 9, dpr: 3, toHit: 3, AC: 12},
    {cr: '1/4', hp: 15, dpr: 5, toHit: 3, AC: 13},
    {cr: '1/2', hp: 24, dpr: 8, toHit: 4, AC: 13},
    {cr: '1', hp: 30, dpr: 10, toHit: 4, AC: 13},
    {cr: '2', hp: 45, dpr: 15, toHit: 5, AC: 14},
    {cr: '3', hp: 60, dpr: 20, toHit: 5, AC: 14},
    {cr: '4', hp: 75, dpr: 25, toHit: 6, AC: 15},
    {cr: '5', hp: 90, dpr: 30, toHit: 6, AC: 15},
    {cr: '6', hp: 105, dpr: 35, toHit: 7, AC: 16},
    {cr: '7', hp: 120, dpr: 40, toHit: 7, AC: 16},
    {cr: '8', hp: 120, dpr: 40, toHit: 8, AC: 17},
    {cr: '9', hp: 135, dpr: 45, toHit: 8, AC: 17},
    {cr: '10', hp: 150, dpr: 50, toHit: 9, AC: 18},
    {cr: '11', hp: 165, dpr: 55, toHit: 9, AC: 18},
    {cr: '12', hp: 180, dpr: 60, toHit: 10, AC: 19},
    {cr: '13', hp: 195, dpr: 65, toHit: 10, AC: 19},
    {cr: '14', hp: 210, dpr: 70, toHit: 11, AC: 20},
    {cr: '15', hp: 225, dpr: 75, toHit: 11, AC: 20},
    {cr: '16', hp: 240, dpr: 80, toHit: 12, AC: 21},
    {cr: '17', hp: 255, dpr: 85, toHit: 12, AC: 21},
    {cr: '18', hp: 270, dpr: 90, toHit: 13, AC: 22},
    {cr: '19', hp: 285, dpr: 95, toHit: 13, AC: 22},
    {cr: '20', hp: 300, dpr: 100, toHit: 14, AC: 23},
    {cr: '21', hp: 315, dpr: 105, toHit: 14, AC: 23},
    {cr: '22', hp: 330, dpr: 110, toHit: 15, AC: 24},
    {cr: '23', hp: 345, dpr: 115, toHit: 15, AC: 24},
    {cr: '24', hp: 360, dpr: 120, toHit: 16, AC: 25},
    {cr: '25', hp: 375, dpr: 125, toHit: 16, AC: 25},
    {cr: '26', hp: 390, dpr: 130, toHit: 17, AC: 26},
    {cr: '27', hp: 405, dpr: 135, toHit: 17, AC: 26},
    {cr: '28', hp: 420, dpr: 140, toHit: 18, AC: 27},
    {cr: '29', hp: 435, dpr: 145, toHit: 18, AC: 27},
    {cr: '30', hp: 450, dpr: 150, toHit: 19, AC: 28},
]

const TemplateMenu:FC<PropType> = ({ onTemplateSelected }) => {
    const [showMenu, setShowMenu] = useState(false)
    const [activeTab, setActiveTab] = useState('PC' as 'PC'|'NPC'|'ADV')

    return (
        <React.Fragment>
            <button onClick={() => setShowMenu(!showMenu)}>
                Add Creature
            </button>
            
            <div 
                className={`${styles.overlay} ${showMenu ? styles.visible : ''}`}
                onClick={() => setShowMenu(false)}
            />

            <div className={styles.container}>
                <div className={`${styles.menu} ${showMenu ? styles.visible : ''}`}>
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
                                                            if (onTemplateSelected) {
                                                                onTemplateSelected({
                                                                    count: 1,
                                                                    dpr,
                                                                    hp,
                                                                    toHit,
                                                                    AC,
                                                                    name: `Lv${level} PC`,
                                                                    target: 'enemy with highest DPR',
                                                                })
                                                            }
                                                            setShowMenu(false)
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
                                    *: HP is based on the average HP of every class with 14 CON.
                                    The DPR column is based on Treantmonk's suggested baseline (Warlock with agonizing blast & hex).
                                    The "to hit" column assumes a primary ability score of +3 at level 1, which grows to +4 at 4th level and +5 at 8th level, plus a magic bonus of +1 at 5th level, +2 at 11th level, and +3 at 17th level.
                                    The AC column is based on a character with a shield, +2 to DEX, a hide at level 1, chain shirt at level 3, and breastplate from level 5 on.
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
                                                            if (onTemplateSelected) {
                                                                onTemplateSelected({
                                                                    count: 1,
                                                                    dpr,
                                                                    hp,
                                                                    toHit,
                                                                    AC,
                                                                    name: `CR ${cr} NPC`,
                                                                    target: 'enemy with most HP',
                                                                })
                                                            }
                                                            setShowMenu(false)
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