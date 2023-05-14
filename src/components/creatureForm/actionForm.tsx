import { FC } from "react"
import { Action, AllyTarget, AtkAction, BuffAction, DebuffAction, EnemyTarget, HealAction } from "../../model/model"
import styles from './actionForm.module.scss'
import { clone } from "../../model/utils"
import { ActionType, Condition, Frequency } from "../../model/enums"
import Select from "../utils/select"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

type PropType = {
    value: Action,
    onChange: (newvalue: Action) => void,
    onDelete: () => void,
}

type Options<T> = { value: T, label: string}[]

const FreqOptions: Options<Frequency> = [
    { value: 'at will', label: 'At will' },
    { value: '1/fight', label: '1/encounter' },
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
            case "buff": { onChange({...common, type, target: "ally with the highest DPR" }); return }
            case "debuff": { onChange({...common, type, target: "enemy with highest DPR" }); return }
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
                    AC Bonus:
                    <input type='number' value={value.acBonus} onChange={e => update(v => { (v as BuffAction).acBonus = (e.target.value === '') ? undefined : Number(e.target.value) })} />
                    To Hit Bonus:
                    <input type='number' value={value.toHitBonus} onChange={e => update(v => { (v as BuffAction).toHitBonus = (e.target.value === '') ? undefined : Number(e.target.value) })} />
                    Damage Bonus (per hit):
                    <input type='number' value={value.damageBonus} onChange={e => update(v => { (v as BuffAction).damageBonus = (e.target.value === '') ? undefined : Number(e.target.value) })} />
                </>
            ) : null }
            { (value.type === "debuff") ? (
                <>
                    Target:
                    <Select value={value.target} options={EnemyTargetOptions} onChange={target => update(v => { v.target = target })} />
                    AC Debuff:
                    <input type='number' value={value.acDebuff} onChange={e => update(v => { (v as DebuffAction).acDebuff = (e.target.value === '') ? undefined : Number(e.target.value) })} />
                    To Hit Debuff:
                    <input type='number' value={value.toHitDebuff} onChange={e => update(v => { (v as DebuffAction).toHitDebuff = (e.target.value === '') ? undefined : Number(e.target.value) })} />
                    Damage Debuff (per hit):
                    <input type='number' value={value.damageDebuff} onChange={e => update(v => { (v as DebuffAction).damageDebuff = (e.target.value === '') ? undefined : Number(e.target.value) })} />
                </>
            ) : null }

            Use this action if:
            <Select value={value.condition} options={ConditionOptions} onChange={condition => update(v => { v.condition = condition })} />
        </div>
    )
}

export default ActionForm