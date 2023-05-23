import { FC, useContext, useEffect, useState, } from "react"
import { Creature, CreatureSchema } from "../../model/model"
import styles from './monsterForm.module.scss'
import { ChallengeRating, ChallengeRatingList, CreatureType, CreatureTypeList, numericCR } from "../../model/enums"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { capitalize, clone, sharedStateGenerator, useCalculatedState, useValidation } from "../../model/utils"
import { Monsters } from "../../data/monsters"
import Range from "../utils/range"

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

const MonsterForm:FC<PropType> = ({ onChange, value }) => {
    const useSharedState = sharedStateGenerator('monsterForm')
    const [creatureType, setCreatureType] = useSharedState(defaultTypeFilter)
    const [minCR, setMinCR] = useSharedState<ChallengeRating>(ChallengeRatingList[0])
    const [maxCR, setMaxCR] = useSharedState<ChallengeRating>(ChallengeRatingList[ChallengeRatingList.length - 1])
    const [name, setName] = useSharedState<string>('')
    const [sortBy, setSortBy] = useSharedState<keyof typeof Comparators>('nameAsc')

    useValidation(() => !!value.cr, [value])

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

    function selectMonster(monster: Creature) {
        const templates = JSON.parse(localStorage.getItem('monsterTemplates') || "{}")
        const monsterTemplate = CreatureSchema.safeParse(templates[monster.id])

        const creature = monsterTemplate.success ? monsterTemplate.data : monster
        creature.count = value?.count || 1
        onChange(creature)
    }

    return (
        <div className={styles.monsterForm}>
            <section>
                <h3>Name</h3>
                <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Bandit...'  autoFocus={true} />
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
                <Range
                    values={[ChallengeRatingList.indexOf(minCR), ChallengeRatingList.indexOf(maxCR)]}
                    min={0}
                    max={ChallengeRatingList.length - 1}
                    onChange={async (values: number[]) => { await setMaxCR(ChallengeRatingList[values[1]]); await setMinCR(ChallengeRatingList[values[0]]) }}
                    label={minCR}
                    upperLabel={maxCR}
                />
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
                                key={monster.id}
                                onClick={() => selectMonster(monster)}
                                className={`${styles.monster} ${value?.id === monster.id ? styles.active : ''}`}>
                                    <span className={styles.name}>{monster.name}</span>
                                    <span className={styles.stats}>{monster.type}, {monster.src}</span>
                                    <span className={styles.stats}>CR {monster.cr}</span>
                            </button>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default MonsterForm