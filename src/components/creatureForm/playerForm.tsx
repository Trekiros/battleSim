import { FC, useContext, useEffect, useState } from "react"
import { Creature } from "../../model/model"
import styles from './playerForm.module.scss'
import { Class, ClassesList } from "../../model/enums"
import { capitalize, clone, range, useValidation } from "../../model/utils"
import { PlayerTemplates } from "../../data/data"
import ClassOptions from "../../model/classOptions"
import { z } from "zod"
import Checkbox from "../utils/checkbox"
import Range from "../utils/range"

type PropType = {
    value?: Creature,
    onChange: (newvalue: Creature) => void,
}

type ClassForm = { type: 'artificer', options: z.infer<typeof ClassOptions.artificer> }
    | { type: 'barbarian', options: z.infer<typeof ClassOptions.barbarian> }
    | { type: 'bard', options: z.infer<typeof ClassOptions.bard> }
    | { type: 'cleric', options: z.infer<typeof ClassOptions.cleric> }
    | { type: 'druid', options: z.infer<typeof ClassOptions.druid> }
    | { type: 'fighter', options: z.infer<typeof ClassOptions.fighter> }
    | { type: 'monk', options: z.infer<typeof ClassOptions.monk> }
    | { type: 'paladin', options: z.infer<typeof ClassOptions.paladin> }
    | { type: 'ranger', options: z.infer<typeof ClassOptions.ranger> }
    | { type: 'rogue', options: z.infer<typeof ClassOptions.rogue> }
    | { type: 'sorcerer', options: z.infer<typeof ClassOptions.sorcerer> }
    | { type: 'warlock', options: z.infer<typeof ClassOptions.warlock> }
    | { type: 'wizard', options: z.infer<typeof ClassOptions.wizard> }

const DefaultOptions: {[key in Class]: z.infer<typeof ClassOptions[key]>} = {
    artificer: {},
    barbarian: { gwm: false, weaponBonus: 0 },
    bard: {},
    cleric: {},
    druid: {},
    fighter: { gwm: false, weaponBonus: 0 },
    monk: {},
    paladin: { gwm: false, weaponBonus: 0 },
    ranger: { ss: false, weaponBonus: 0 },
    rogue: { ss: false, weaponBonus: 0 },
    sorcerer: {},
    warlock: {},
    wizard: {},
}

const DefaultClass = { type: 'barbarian', options: DefaultOptions.barbarian }
const DefaultLevel = 1

const PlayerForm:FC<PropType> = ({ value, onChange }) => {
    const [chosenClass, setChosenClass] = useState<ClassForm|null>((value && value.class) ? { type: value.class.type, options: value.class.options } as any : DefaultClass)
    const [level, setLevel] = useState<number | null>((value && value.class) ? value.class.level : DefaultLevel)
    
    useValidation(() => (!!level && !!chosenClass), [level, chosenClass])
    
    useEffect(() => {
        if (!level || !chosenClass) return

        const template = PlayerTemplates[chosenClass.type]
        const creature = template(level, chosenClass.options as any)
        creature.class = {
            type: chosenClass.type,
            level: level,
            options: chosenClass.options,
        }
        creature.count = value?.count || 1
        onChange(creature)
    }, [chosenClass, level])

    function setClass(type: Class) {
        const chosenClass = { type, options: DefaultOptions[type] }
        setChosenClass(chosenClass as any)
    }

    function setClassOptions<T extends Class>(callback: (classOptions: z.infer<typeof ClassOptions[T]>) => void) {
        if (!chosenClass) return
        
        const chosenClassClone = clone(chosenClass)
        callback(chosenClassClone.options)
        setChosenClass(chosenClassClone)
    }

    return (
        <div className={styles.playerForm}>
            <h3>Class</h3>
            <section className={styles.classes}>
                { ClassesList.map(className => (
                    <button 
                        className={`${styles.class} ${(chosenClass?.type === className) ? styles.active : ''}`}
                        onClick={() => { setClass(className) }}
                    >
                        <img src={`/classes/${className}.jpeg`} />
                        {capitalize(className)}
                    </button>
                )) }
            </section>
            
            <h3>Level</h3>
            <section className={styles.levels}>
                { range(20).map(i => i+1).map(lvl => (
                    <button
                        key={lvl}
                        className={`${styles.level} ${(level === lvl) ? styles.active : ''}`}
                        onClick={() => setLevel(lvl)}
                    >
                        {lvl}
                    </button>
                )) }
            </section>

            { !chosenClass ? null : (
                (chosenClass.type === 'barbarian') ? (
                    <>
                        <h3>Barbarian-specific Options</h3>
                        <section className={styles.classOptions}>
                            <Checkbox 
                                value={chosenClass.options.gwm} 
                                onToggle={() => setClassOptions<'barbarian'>(options => { options.gwm = !options.gwm })}>
                                Use Great Weapon Master
                            </Checkbox>
                            <div className={styles.option}>
                                Weapon:
                                <Range
                                    min={0}
                                    max={3}
                                    value={chosenClass.options.weaponBonus}
                                    onChange={(newValue) => setClassOptions<'barbarian'>(options => { options.weaponBonus = newValue })}
                                    label={`+${chosenClass.options.weaponBonus}`}
                                />
                            </div>
                        </section>
                    </>
                ) : (chosenClass.type === 'bard') ? (
                    <></>
                ) : (chosenClass.type === 'cleric') ? (
                    <></>
                ) : (chosenClass.type === 'druid') ? (
                    <></>
                ) : (chosenClass.type === 'fighter') ? (
                    <>
                        <h3>Fighter-specific Options</h3>
                        <section className={styles.classOptions}>
                            <Checkbox 
                                value={chosenClass.options.gwm} 
                                onToggle={() => setClassOptions<'fighter'>(options => { options.gwm = !options.gwm })}>
                                Use Great Weapon Master
                            </Checkbox>
                            <div className={styles.option}>
                                Weapon:
                                <Range
                                    min={0}
                                    max={3}
                                    value={chosenClass.options.weaponBonus}
                                    onChange={(newValue) => setClassOptions<'fighter'>(options => { options.weaponBonus = newValue })}
                                    label={`+${chosenClass.options.weaponBonus}`}
                                />
                            </div>
                        </section>
                    </>
                ) : (chosenClass.type === 'monk') ? (
                    <></>
                ) : (chosenClass.type === 'paladin') ? (
                    <>
                        <h3>Paladin-specific Options</h3>
                        <section className={styles.classOptions}>
                            <Checkbox 
                                value={chosenClass.options.gwm} 
                                onToggle={() => setClassOptions<'paladin'>(options => { options.gwm = !options.gwm })}>
                                Use Great Weapon Master
                            </Checkbox>
                            <div className={styles.option}>
                                Weapon:
                                <Range
                                    min={0}
                                    max={3}
                                    value={chosenClass.options.weaponBonus}
                                    onChange={(newValue) => setClassOptions<'paladin'>(options => { options.weaponBonus = newValue })}
                                    label={`+${chosenClass.options.weaponBonus}`}
                                />
                            </div>
                        </section>
                    </>
                ) : (chosenClass.type === 'ranger') ? (
                    <>
                        <h3>Ranger-specific Options</h3>
                        <section className={styles.classOptions}>
                            <Checkbox 
                                value={chosenClass.options.ss} 
                                onToggle={() => setClassOptions<'ranger'>(options => { options.ss = !options.ss })}>
                                Use Sharpshooter
                            </Checkbox>
                            <div className={styles.option}>
                                Weapon:
                                <Range
                                    min={0}
                                    max={3}
                                    value={chosenClass.options.weaponBonus}
                                    onChange={(newValue) => setClassOptions<'ranger'>(options => { options.weaponBonus = newValue })}
                                    label={`+${chosenClass.options.weaponBonus}`}
                                />
                            </div>
                        </section>
                    </>
                ) : (chosenClass.type === 'rogue') ? (
                    <>
                        <h3>Rogue-specific Options</h3>
                        <section className={styles.classOptions}>
                            <Checkbox 
                                value={chosenClass.options.ss} 
                                onToggle={() => setClassOptions<'ranger'>(options => { options.ss = !options.ss })}>
                                Use Sharpshooter
                            </Checkbox>
                            <div className={styles.option}>
                                Weapon:
                                <Range
                                    min={0}
                                    max={3}
                                    value={chosenClass.options.weaponBonus}
                                    onChange={(newValue) => setClassOptions<'ranger'>(options => { options.weaponBonus = newValue })}
                                    label={`+${chosenClass.options.weaponBonus}`}
                                />
                            </div>
                        </section>
                    </>
                ) : (chosenClass.type === 'sorcerer') ? (
                    <></>
                ) : (chosenClass.type === 'warlock') ? (
                    <></>
                ) : (chosenClass.type === 'wizard') ? (
                    <></>
                ) : null
            ) }
        </div>
    )
}

export default PlayerForm