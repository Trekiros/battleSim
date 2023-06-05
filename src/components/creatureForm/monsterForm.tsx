import { FC, } from "react"
import { Creature, CreatureSchema } from "../../model/model"
import styles from './monsterForm.module.scss'
import { ChallengeRating, ChallengeRatingList, CreatureType, CreatureTypeList, numericCR } from "../../model/enums"
import { capitalize, clone, sharedStateGenerator, useCalculatedState } from "../../model/utils"
import { Monsters } from "../../data/monsters"
import Range from "../utils/range"
import SortTable from "../utils/sortTable"

type PropType = {
    value: Creature,
    onChange: (newvalue: Creature) => void,
}

const defaultTypeFilter: {[type in CreatureType]: boolean} = Object.fromEntries(CreatureTypeList.map(t => [t, true])) as any

const MonsterForm:FC<PropType> = ({ onChange, value }) => {
    const useSharedState = sharedStateGenerator('monsterForm')
    const [creatureType, setCreatureType] = useSharedState(defaultTypeFilter)
    const [minCR, setMinCR] = useSharedState<ChallengeRating>(ChallengeRatingList[0])
    const [maxCR, setMaxCR] = useSharedState<ChallengeRating>(ChallengeRatingList[ChallengeRatingList.length - 1])
    const [name, setName] = useSharedState<string>('')

    const searchResults = useCalculatedState(() => Monsters.filter(monster => {
        if (!monster.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) return false
        if (!monster.cr) return false
        if (numericCR(monster.cr) > numericCR(maxCR)) return false
        if (numericCR(monster.cr) < numericCR(minCR)) return false
        if (!monster.type) return false
        if (!creatureType[monster.type]) return false

        return true
    }), [creatureType, minCR, maxCR, name])
    
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

            <SortTable
                value={value}
                list={searchResults}
                comparators={{
                    Name: (a: Creature, b: Creature) => a.name.localeCompare(b.name),
                    CR: (a: Creature, b: Creature) => (numericCR(a.cr!) - numericCR(b.cr!)),
                }}
                onChange={selectMonster}>
                    { monster => (
                        <div className={styles.monster}>
                            <span className={styles.name}>{monster.name}</span>
                            <span className={styles.stats}>{monster.type}, {monster.src}</span>
                            <span className={styles.stats}>CR {monster.cr}</span>
                        </div>
                    )}
            </SortTable>
        </div>
    )
}

export default MonsterForm