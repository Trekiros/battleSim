import { FC, useState, } from "react"
import { Creature } from "../model/model"
import styles from './monsterForm.module.scss'
import { ChallengeRating, ChallengeRatingList, CreatureType, CreatureTypeList, numericCR } from "../model/enums"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faChevronDown, faChevronUp, faCross, faMultiply } from "@fortawesome/free-solid-svg-icons"
import { capitalize, clone, useCalculatedState } from "../model/utils"
import { Range } from "react-range"
import { Monsters } from "../data/data"

type PropType = {
    value: Creature,
    onChange: (newvalue: Creature) => void,
}

const defaultTypeFilter: {[type in CreatureType]: boolean} = Object.fromEntries(CreatureTypeList.map(t => [t, true])) as any

const Comparators = {
    nameAsc: (a: Creature, b: Creature) => a.name.localeCompare(b.name),
    nameDesc: (a: Creature, b: Creature) => -a.name.localeCompare(b.name),
    crAsc: (a: Creature, b: Creature) => (numericCR(a.cr!) - numericCR(b.cr!)),
    crDesc: (a: Creature, b: Creature) => (numericCR(b.cr!) - numericCR(a.cr!)),
} as const

const MonsterForm:FC<PropType> = ({ value, onChange }) => {
    const [creatureType, setCreatureType] = useState<{[type in CreatureType]: boolean}>(defaultTypeFilter)
    const [minCR, setMinCR] = useState<ChallengeRating>(ChallengeRatingList[0])
    const [maxCR, setMaxCR] = useState<ChallengeRating>(ChallengeRatingList[ChallengeRatingList.length - 1])
    const [name, setName] = useState<string>('')
    const [sortBy, setSortBy] = useState<keyof typeof Comparators>('nameAsc')

    const searchResults = useCalculatedState(() => Monsters.filter(monster => {
        if (!monster.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) return false
        if (!monster.cr) return false
        if (numericCR(monster.cr) > numericCR(maxCR)) return false
        if (numericCR(monster.cr) < numericCR(minCR)) return false
        if (!monster.type) return false
        if (!creatureType[monster.type]) return false

        return true
    }).sort(Comparators[sortBy]), [creatureType, minCR, maxCR, name, sortBy])
    
    function toggleCreatureType(type: CreatureType) {
        const newValue = clone(creatureType)
        newValue[type] = !newValue[type]
        setCreatureType(newValue)
    }

    return (
        <div className={styles.monsterForm}>
            <section>
                <h3>Name</h3>
                <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Bandit...' />
            </section>

            <section>
                <h3>Creature Type</h3>
                <div className={styles.creatureTypes}>
                    <button 
                        onClick={() => setCreatureType(defaultTypeFilter)} 
                        className={!Object.entries(creatureType).find(([_, b]) => !b) ? styles.active : undefined}>
                            All
                    </button>
                    <button 
                        onClick={() => setCreatureType(Object.fromEntries(Object.keys(creatureType).map(t => [t, false])) as any)} 
                        className={!Object.entries(creatureType).find(([_, b]) => b) ? styles.active : undefined}>
                            None
                    </button>
                    { CreatureTypeList.map(type => (
                        <button
                            key={type}
                            onClick={() => toggleCreatureType(type)}
                            className={creatureType[type] ? styles.active : undefined}>
                                {capitalize(type)}
                        </button>
                    )) }
                </div>
            </section>
            
            <section className={styles.challengeRating}>
                <h3>Challenge Rating</h3>

                <div className={styles.range}>
                    <div className={styles.value}>{minCR}</div>
                    <Range
                        values={[ChallengeRatingList.indexOf(minCR), ChallengeRatingList.indexOf(maxCR)]}
                        max={ChallengeRatingList.length - 1}
                        step={1}
                        onChange={(values) => { setMinCR(ChallengeRatingList[values[0]]); setMaxCR(ChallengeRatingList[values[1]]) }}
                        renderThumb={({ props }) => (
                            <div {...props} className={styles.thumb} />
                        )}
                        renderTrack={({ props, children }) => (
                            <div {...props} className={styles.track}>
                                {children}
                            </div>
                        )}
                        renderMark={({ props }) => (
                            <div {...props} className={styles.mark} />
                        )}
                    />
                    <div className={styles.value}>{maxCR}</div>
                </div>
            </section>

            <div className={styles.searchResults}>
                <div className={styles.header}>
                    <div onClick={() => setSortBy((sortBy === 'nameAsc') ? 'nameDesc' : 'nameAsc' )}>
                        Name
                        { (sortBy !== 'nameAsc') ? null : <FontAwesomeIcon icon={faChevronUp} /> }
                        { (sortBy !== 'nameDesc') ? null : <FontAwesomeIcon icon={faChevronDown} /> }
                    </div>                    
                    <div onClick={() => setSortBy((sortBy === 'crAsc') ? 'crDesc' : 'crAsc' )}>
                        CR
                        { (sortBy !== 'crAsc') ? null : <FontAwesomeIcon icon={faChevronUp} /> }
                        { (sortBy !== 'crDesc') ? null : <FontAwesomeIcon icon={faChevronDown} /> }
                    </div>
                </div>
                <div className={styles.result}>
                    { searchResults.length === 0 ? (
                        <div className={styles.placeholder}>
                            No results
                        </div>
                    ) : (
                        searchResults.map(monster => (
                            <button
                                onClick={() => onChange(monster)}
                                className={styles.monster}>
                                    <span className={styles.name}>{monster.name}</span>
                                    <span className={styles.stats}>CR {monster.cr} {monster.type}</span>
                            </button>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default MonsterForm