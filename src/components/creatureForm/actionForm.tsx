import { FC, useContext, useEffect, useState } from "react"
import { Action, AllyTarget, AtkAction, Buff, BuffAction, DebuffAction, EnemyTarget, HealAction } from "../../model/model"
import styles from './actionForm.module.scss'
import { clone } from "../../model/utils"
import { ActionType, BuffDuration, Condition, Frequency } from "../../model/enums"
import Select from "../utils/select"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { validateContext } from "../../context/simulationContext"

type PropType = {
    value: Action,
    onChange: (newvalue: Action) => void,
    onDelete: () => void,
}

type Options<T> = { value: T, label: string}[]

const FreqOptions: Options<Frequency> = [
    { value: 'at will', label: 'At will' },
    { value: '1/fight', label: '1/short rest' },
    { value: '1/day', label: '1/day' },
]

const ConditionOptions: Options<Condition> = [
    { value:'default', label: 'Default' },
    { value:'ally at 0 HP', label: 'There is an ally at 0 HP' },
    { value:'is available', label: 'A use of this action is available' },
    { value:'is under half HP', label: 'This creature is under half its maximum HP' },
]

const TypeOptions: Options<ActionType> = [
    { value: 'atk', label: 'Attack' },
    { value: 'heal', label: 'Heal' },
    { value: 'buff', label: 'Buff' },
    { value: 'debuff', label: 'Debuff' },
]

const ActionOptions: Options<number> = [
    { value: 0, label: 'Action' },
    { value: 1, label: 'Bonus Action' },
    { value: 2, label: 'Legendary Action' },
    { value: 3, label: 'Lair Action' },
    { value: 4, label: 'Other 1' },
    { value: 5, label: 'Other 2' },
    { value: 6, label: 'Other 3' },
]

const TargetCountOptions: Options<number> = [
    { value: 1, label: 'Single target' },
    { value: 2, label: 'Multi target' },
    { value: 3, label: '3 targets' },
    { value: 4, label: '4 targets' },
    { value: 5, label: '5 targets' },
    { value: 6, label: '6 targets' },
    { value: 100, label: 'Target everything' },
]

const EnemyTargetOptions: Options<EnemyTarget> = [
    { value: 'enemy with least HP', label: 'Enemy with least HP' },
    { value: 'enemy with most HP', label: 'Enemy with most HP' },
    { value: 'enemy with highest DPR', label: 'Enemy with highest DPR' },
    { value: 'enemy with lowest AC', label: 'Enemy with lowest AC' },
    { value: 'enemy with highest AC', label: 'Enemy with highest AC' },
]

const AllyTargetOptions: Options<AllyTarget> = [
    { value: 'self', label: 'Self' },
    { value: 'ally with the least HP', label: 'Ally with the least HP' },
    { value: 'ally with the most HP', label: 'Ally with the most HP' },
    { value: 'ally with the highest DPR', label: 'Ally with the highest DPR' },
    { value: 'ally with the lowest AC', label: 'Ally with the lowest AC' },
    { value: 'ally with the highest AC', label: 'Ally with the highest AC' },
]

const BuffDurationOptions: Options<BuffDuration> = [
    { value: '1 round', label: "1 Round" },
    { value: 'entire encounter', label: 'Entire Encounter' },
    { value: 'until next attack taken', label: 'Until the next attack taken' },
    { value: 'until next attack made', label: 'Until the next attack made' }
]

const BuffStatOptions: Options<keyof Omit<Buff, 'duration'>> = [
    { value: 'ac', label: 'Armor Class' },
    { value: 'save', label: 'Bonus to Saves' },
    { value: 'toHit', label: 'Bonus to hit' },
    { value: 'dc', label: 'Save DC Bonus' },
    { value: 'damage', label: 'Extra Damage' },
    { value: 'damageMultiplier', label: 'Damage Multiplier' },
    { value: 'damageTakenMultiplier', label: 'Damage Taken Multiplier' },
]

const BuffForm:FC<{value: Buff, onUpdate: (newValue: Buff) => void}> = ({ value, onUpdate }) => {
    const [modifiers, setModifiers] = useState<(keyof Omit<Buff, 'duration'>)[]>(Object.keys(value).filter(key => (key !== 'duration')) as any)
    const {validate} = useContext(validateContext)

    useEffect(() => {
        validate(Object.keys(value).length > 1)
    }, [value])

    function setModifier(index: number, newValue: keyof Omit<Buff, 'duration'> | null) {
        const oldModifier = modifiers[index]
        if (oldModifier === newValue) return

        const buffClone = clone(value)
        delete buffClone[oldModifier]
        onUpdate(buffClone)

        const modifiersClone = clone(modifiers)
        if (newValue === null) modifiersClone.splice(index, 1)
        else modifiersClone[index] = newValue
        setModifiers(modifiersClone)
    }

    function updateValue(modifier: keyof Omit<Buff, 'duration'>, newValue: number) {
        const buffClone = clone(value)
        buffClone[modifier] = newValue
        onUpdate(buffClone)
    }

    function addModifier() {
        const newModifier = BuffStatOptions.find(({value}) => !modifiers.includes(value))
        if (!newModifier) return;
        setModifiers([...modifiers, newModifier.value])
    }

    return (
        <>
            Effects: 
            {modifiers.map((modifier, index) => (
                <div key={modifier} className={styles.modifier}>
                    <Select 
                        value={modifier} 
                        onChange={newValue => setModifier(index, newValue)} 
                        options={BuffStatOptions.filter(option => (modifier === option.value) || !modifiers.includes(option.value))}
                    />
                    <input 
                        type='number' 
                        value={value[modifier]} 
                        onChange={e => updateValue(modifier, Number(e.target.value))}
                    />
                    <button onClick={() => setModifier(index, null)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            ))}

            <button 
                className="tooltipContainer" 
                disabled={modifiers.length === BuffStatOptions.length}
                onClick={addModifier}>
                    <FontAwesomeIcon icon={faPlus} />
                    <div className="tooltip">Add effect to the buff/debuff</div>
            </button>
        </>
    )
}

const ActionForm:FC<PropType> = ({ value, onChange, onDelete }) => {

    function update(callback: (valueClone: Action) => void) {
        const valueClone = clone(value)
        callback(valueClone)
        onChange(valueClone)
    }

    function updateType(type: ActionType) {
        if (type === value.type) return

        const common = {
            id: value.id,
            name: value.name,
            actionSlot: value.actionSlot,
            condition: value.condition,
            freq: value.freq,
            targets: value.targets,
        }

        switch (type) {
            case "atk": { onChange({...common, type, target: "enemy with most HP", dpr: 0, toHit: 0 }); return }
            case "heal": { onChange({...common, type, amount: 0, target: "ally with the least HP" }); return }
            case "buff": { onChange({...common, type, target: "ally with the highest DPR", buff: { duration: '1 round' } }); return }
            case "debuff": { onChange({...common, type, target: "enemy with highest DPR", saveDC: 10, buff: { duration: '1 round' } }); return }
        }
    }

    return (
        <div className={styles.actionForm}>
            <button onClick={onDelete}>
                <FontAwesomeIcon icon={faTrash} />
            </button>

            <input 
                type='text' 
                value={value.name} 
                onChange={(e) => update(v => { v.name = e.target.value.length < 100 ? e.target.value : v.name })} 
                placeholder="Action name..." 
                style={{ minWidth: `${value.name.length}ch` }}
            />
            <Select value={value.actionSlot} options={ActionOptions} onChange={actionSlot => update(v => { v.actionSlot = actionSlot })} />
            <Select value={value.type} options={TypeOptions} onChange={updateType} />
            <Select value={value.freq} options={FreqOptions} onChange={freq => update(v => { v.freq = freq })} />
            <Select value={value.targets} options={TargetCountOptions} onChange={targets => update(v => { v.targets = targets })} />
            Use this action if:
            <Select value={value.condition} options={ConditionOptions} onChange={condition => update(v => { v.condition = condition })} />

            { (value.type === "atk") ? (
                <>
                    To Hit:
                    <input type='number' value={value.toHit} onChange={e => update(v => { (v as AtkAction).toHit = Number(e.target.value) })} />
                    Damage: 
                    <input type='number' value={value.dpr} onChange={e => update(v => { (v as AtkAction).dpr = Number(e.target.value) })} />
                    Target:
                    <Select value={value.target} options={EnemyTargetOptions} onChange={target => update(v => { v.target = target })} />
                </>
            ) : null }
            { (value.type === "heal") ? (
                <>
                    Heal amount:
                    <input type='number' value={value.amount} onChange={e => update(v => { (v as HealAction).amount = Number(e.target.value) })} />
                    Target:
                    <Select value={value.target} options={AllyTargetOptions} onChange={target => update(v => { v.target = target })} />
                </>
            ) : null }
            { (value.type === "buff") ? (
                <>
                    Target:
                    <Select value={value.target} options={AllyTargetOptions} onChange={target => update(v => { v.target = target })} />
                    Duration:
                    <Select value={value.buff.duration} options={BuffDurationOptions} onChange={duration => update(v => { (v as BuffAction).buff.duration = duration })} />
                    <BuffForm value={value.buff} onUpdate={newValue => update(v => { (v as BuffAction).buff = newValue })} />
                </>
            ) : null }
            { (value.type === "debuff") ? (
                <>
                    Target:
                    <Select value={value.target} options={EnemyTargetOptions} onChange={target => update(v => { v.target = target })} />
                    Duration:
                    <Select value={value.buff.duration} options={BuffDurationOptions} onChange={duration => update(v => { (v as DebuffAction).buff.duration = duration })} />
                    Save DC:
                    <input type='number' value={value.saveDC} onChange={e => update(v => { (v as DebuffAction).saveDC = Number(e.target.value) })} />
                    <BuffForm value={value.buff} onUpdate={newValue => update(v => { (v as DebuffAction).buff = newValue })} />
                </>
            ) : null }
        </div>
    )
}

export default ActionForm