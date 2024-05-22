import { FC, useState } from "react"
import { Action, AllyTarget, AtkAction, Buff, BuffAction, DebuffAction, DiceFormula, EnemyTarget, FinalAction, Frequency, HealAction, TemplateAction } from "../../model/model"
import styles from './actionForm.module.scss'
import { clone } from "../../model/utils"
import { ActionType, BuffDuration, ActionCondition, CreatureConditionList, CreatureCondition, ActionSlots } from "../../model/enums"
import Select from "../utils/select"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import DecimalInput from "../utils/DecimalInput"
import DiceFormulaInput from "../utils/diceFormulaInput"
import { ActionTemplates, getFinalAction } from "../../data/actions"

type PropType = {
    value: Action,
    onChange: (newvalue: Action) => void,
    onDelete: () => void,
    onMoveUp?: () => void,
    onMoveDown?: () => void,
}

type Options<T> = { value: T, label: string}[]

const srFreq: Frequency = { reset: "sr", uses: 1 }
const lrFreq: Frequency = { reset: "lr", uses: 1 }
const rechargeFreq: Frequency = { reset: "recharge", cooldownRounds: 2 }
const FreqOptions: Options<Frequency> = [
    { value: 'at will', label: 'At will' },
    { value: '1/fight', label: '1/short rest' },
    { value:  srFreq, label: 'X/short rest' },
    { value: '1/day', label: '1/day' },
    { value:  lrFreq, label: 'X/long rest' },
    { value:  rechargeFreq, label: 'Every X rounds' },
]

const ConditionOptions: Options<ActionCondition> = [
    { value:'default', label: 'Default' },
    { value:'ally at 0 HP', label: 'There is an ally at 0 HP' },
    { value:'ally under half HP', label: 'An ally has less than half their maximum HP' },
    { value:'is available', label: 'A use of this action is available' },
    { value:'is under half HP', label: 'This creature is under half its maximum HP' },
    { value:'has no THP', label: 'This creature has no temporary HP' },
    { value:'not used yet', label: 'This action has not been used yet this encounter' },
    { value:'enemy count one', label: 'There is only one enemy' },
    { value:'enemy count multiple', label: 'There are at least two enemies' },
]

const TypeOptions: Options<ActionType> = [
    { value: 'template', label: 'Common Spell' },
    { value: 'atk', label: 'Attack' },
    { value: 'heal', label: 'Heal' },
    { value: 'buff', label: 'Buff' },
    { value: 'debuff', label: 'Debuff' },
]

const ActionOptions: Options<number> = Object.entries(ActionSlots).map(([label, value]) => ({label, value}))

const TargetCountOptions: Options<number> = [
    { value: 1, label: 'Single target' },
    { value: 2, label: 'Multi target' },
    { value: 3, label: '3 targets' },
    { value: 4, label: '4 targets' },
    { value: 5, label: '5 targets' },
    { value: 6, label: '6 targets' },
    { value: 100, label: 'Target everything' },
]

const HitCountOptions: Options<number> = [
    { value: 1, label: '1 hit' },
    { value: 2, label: '2 hits' },
    { value: 3, label: '3 hits' },
    { value: 4, label: '4 hits' },
    { value: 5, label: '5 hits' },
    { value: 6, label: '6 hits' },
    { value: 7, label: '7 hits' },
    { value: 8, label: '8 hits' },
    { value: 9, label: '9 hits' },
    { value: 10, label: '10 hits' },
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
    { value: 'condition', label: 'Condition' },
    { value: 'ac', label: 'Armor Class' },
    { value: 'save', label: 'Bonus to Saves' },
    { value: 'toHit', label: 'Bonus to hit' },
    { value: 'dc', label: 'Save DC Bonus' },
    { value: 'damage', label: 'Extra Damage' },
    { value: 'damageReduction', label: 'Damage Reduction' },
    { value: 'damageMultiplier', label: 'Damage Multiplier' },
    { value: 'damageTakenMultiplier', label: 'Damage Taken Multiplier' },
]

const AtkOptions: Options<boolean> = [
    { value: true, label: 'Save DC:' },
    { value: false, label: 'To Hit:' },
]

const BuffForm:FC<{value: Buff, onUpdate: (newValue: Buff) => void}> = ({ value, onUpdate }) => {
    const [modifiers, setModifiers] = useState<(keyof Omit<Buff, 'duration'>)[]>(Object.keys(value).filter(key => (key !== 'duration')) as any)


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

    function updateValue(modifier: keyof Omit<Buff, 'duration'|'condition'|'displayName'>, newValue: number) {
        const buffClone = clone(value)
        buffClone[modifier] = newValue
        onUpdate(buffClone)
    }

    function updateDiceFormula(modifier: string, newValue: DiceFormula) {
        const buffClone = clone(value);
        (buffClone as any)[modifier] = newValue
        onUpdate(buffClone)
    }

    function updateCondition(newValue: CreatureCondition|undefined) {
        const buffClone = clone(value)
        buffClone.condition = newValue
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
                    { ((modifier === 'damageMultiplier') || (modifier === 'damageTakenMultiplier')) ? (
                        <DecimalInput
                            value={value[modifier]}
                            onChange={v => updateValue(modifier, v || 0)}
                        />
                    ) : (modifier === 'condition') ? (
                        <Select
                            value={value.condition}
                            options={CreatureConditionList.map(condition => ({ value: condition, label: condition }))}
                            onChange={(newCondition) => updateCondition(newCondition)}
                        />
                    ) : (
                        <DiceFormulaInput 
                            value={value[modifier]} 
                            onChange={v => updateDiceFormula(modifier, v || 0)}
                        />
                    )}
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

const ActionForm:FC<PropType> = ({ value, onChange, onDelete, onMoveUp, onMoveDown }) => {
    function update(callback: (valueClone: Action) => void) {
        const valueClone = clone(value)
        callback(value)
        onChange(value)
    }

    function updateFinalAction(callback: (valueClone: FinalAction) => void) {
        if (value.type === 'template') return

        const valueClone = clone(value)
        callback(valueClone)
        onChange(valueClone)
    }

    function updateTemplateAction(callback: (valueClone: TemplateAction) => void) {
        if (value.type !== 'template') return

        const valueClone = clone(value)
        callback(valueClone)
        onChange(valueClone)
    }

    function updateFrequency(freq: Frequency) {
        const v = clone(value)
        
        v.freq = (freq === v.freq) ? v.freq
            : (typeof freq === 'string') ? freq
            : (typeof v.freq === 'string') ? clone(freq)
            : (v.freq.reset !== freq.reset) ? clone(freq)
            : v.freq

        onChange(v)
        console.log(v)
    }

    function updateRiderEffect(callback: (riderEffect: { dc: number, buff: Buff }) => void) {
        update((actionClone) => {
            const atkAction = (actionClone as AtkAction)
            atkAction.riderEffect ||= { dc: 0, buff: { duration: '1 round' } }
            callback(atkAction.riderEffect)
        })
    }

    function updateType(type: ActionType) {
        if (type === value.type) return

        const finalAction = getFinalAction(value)

        const common = {
            id: value.id,
            name: finalAction.name,
            actionSlot: finalAction.actionSlot,
            condition: finalAction.condition,
            freq: finalAction.freq,
            targets: finalAction.targets,
        }

        const templateAction: TemplateAction = {
            id: value.id,
            type: 'template',
            condition: finalAction.condition,
            freq: finalAction.freq,
            templateOptions: { templateName: 'Fireball', saveDC: 10, toHit: 10, target: 'enemy with least HP' },
        }

        switch (type) {
            case "template": return onChange(templateAction)
            case "atk": return onChange({...common, type, target: "enemy with most HP", dpr: 0, toHit: 0 })
            case "heal": return onChange({...common, type, amount: 0, target: "ally with the least HP" })
            case "buff": return onChange({...common, type, target: "ally with the highest DPR", buff: { duration: '1 round' } })
            case "debuff": return onChange({...common, type, target: "enemy with highest DPR", saveDC: 10, buff: { duration: '1 round' } })
        }
    }

    function onTemplateChange(templateName: keyof typeof ActionTemplates) {
        if (value.type !== 'template') return

        const template = ActionTemplates[templateName]
        const enemyTarget: EnemyTarget = 'enemy with least HP'
        const allyTarget: AllyTarget = 'ally with the least HP'
        const defaultTarget: EnemyTarget|AllyTarget = ((template.type === 'atk') || (template.type === 'debuff')) ? enemyTarget : allyTarget

        onChange({
            ...value,
            templateOptions: {
                templateName,
                toHit: value.templateOptions.toHit || 0,
                saveDC: value.templateOptions.saveDC || 0,
                target: value.templateOptions.target || defaultTarget,
            },
        })
    }

    return (
        <div className={styles.actionForm}>
            <div className={styles.arrowBtns}>
                <button
                    onClick={onMoveUp}
                    disabled={!onMoveUp}>
                        <FontAwesomeIcon icon={faChevronUp} />
                </button>
                <button
                    onClick={onMoveDown}
                    disabled={!onMoveDown}>
                        <FontAwesomeIcon icon={faChevronDown} />
                </button>
            </div>

            <button onClick={onDelete}>
                <FontAwesomeIcon icon={faTrash} />
            </button>

            { value.type !== 'template' ? (
                <>
                    <input 
                        type='text' 
                        value={value.name} 
                        onChange={(e) => updateFinalAction(v => { v.name = e.target.value.length < 100 ? e.target.value : v.name })} 
                        placeholder="Action name..." 
                        style={{ minWidth: `${value.name.length}ch` }}
                    />
                    <Select value={value.actionSlot} options={ActionOptions} onChange={actionSlot => updateFinalAction(v => { v.actionSlot = actionSlot })} />
                </>
            ) : null }

            <Select value={value.type} options={TypeOptions} onChange={updateType} />

            { value.type === 'template' ? (
                <Select
                    value={value.templateOptions.templateName}
                    options={Object.keys(ActionTemplates).map(key => ({ value: key as keyof typeof ActionTemplates, label: key }))}
                    onChange={onTemplateChange}/>
            ) : null }

            <Select 
                value={
                    typeof value.freq === 'string' ? value.freq
                  : value.freq.reset === 'sr' ? srFreq
                  : value.freq.reset === 'lr' ? lrFreq
                  : value.freq.reset === 'recharge' ? rechargeFreq
                  : 'at will'
                }
                options={FreqOptions}
                onChange={freq => updateFrequency(freq)} />

            { typeof value.freq !== 'string' ? (
                value.freq.reset === 'recharge' ? (
                    <>
                        Cooldown in rounds:
                        <input 
                            type='number'
                            min={2}
                            step={1}
                            className={value.freq.cooldownRounds < 2 ? styles.invalid : ''}
                            value={value.freq.cooldownRounds}
                            onChange={e => update(v => { (v.freq as any).cooldownRounds = Number(e.target.value || 0) })}/>
                    </>
                ) : (
                    <>
                        Uses:
                        <input 
                            type='number'
                            min={1}
                            step={1}
                            className={value.freq.uses < 1 ? styles.invalid : ''}
                            value={value.freq.uses}
                            onChange={e => update(v => { (v.freq as any).uses = Number(e.target.value || 0) })}/>
                    </>
                )
            ) : null }
            
            { ((value.type === 'atk') && (!value.useSaves)) ? (
                <Select value={value.targets} options={HitCountOptions} onChange={targets => updateFinalAction(v => v.targets = targets)} />
            ) : (value.type !== 'template') ? (
                <Select value={value.targets} options={TargetCountOptions} onChange={targets => updateFinalAction(v => { v.targets = targets })} />
            ) : null }
            Use this action if:
            <Select value={value.condition} options={ConditionOptions} onChange={condition => update(v => { v.condition = condition })} />

            { (value.type === "atk") ? (
                <>
                    <Select 
                        value={!!value.useSaves} 
                        options={AtkOptions} 
                        onChange={useSaves => update(v => {
                            const atk = (v as AtkAction);
                            if (atk.useSaves !== useSaves) atk.targets = 1
                            atk.useSaves = useSaves 
                        })} />
                    <DiceFormulaInput value={value.toHit} onChange={toHit => update(v => { (v as AtkAction).toHit = toHit || 0 })} />
                    Damage: 
                    <DiceFormulaInput value={value.dpr} onChange={dpr => update(v => { (v as AtkAction).dpr = dpr || 0 })} canCrit={!value.useSaves} />
                    
                    { !!value.useSaves ? (
                        <>
                            Save for half?
                            <Select 
                                value={!!value.halfOnSave}
                                options={[ { value: true, label: 'Yes' }, { value: false, label: 'No' } ]}
                                onChange={halfOnSave => update(v => { (v as AtkAction).halfOnSave = halfOnSave })} />
                        </>
                    ) : null }
                    
                    Target:
                    <Select value={value.target} options={EnemyTargetOptions} onChange={target => updateFinalAction(v => { v.target = target })} />
                    On Hit Effect:
                    <Select 
                        value={value.riderEffect !== undefined} 
                        options={[{ value: true, label: 'Yes'},{ value: false, label: 'No'}]}
                        onChange={b => { 
                            if(b) update(v => { (v as AtkAction).riderEffect ||= {dc: 0, buff: {duration: "1 round"}} }) 
                            else update(v => { delete (v as AtkAction).riderEffect })
                        }}/>

                    { (!!value.riderEffect) ? (
                        <>
                            Save DC:
                            <DecimalInput value={value.riderEffect.dc} onChange={dc => updateRiderEffect(e => { e.dc = dc || 0 })} />
                            Duration:
                            <Select value={value.riderEffect.buff.duration} options={BuffDurationOptions} onChange={duration => updateRiderEffect(e => { e.buff.duration = duration })} />
                            <BuffForm value={value.riderEffect.buff} onUpdate={newValue => updateRiderEffect(e => { e.buff = newValue })} />
                        </>
                    ) : null }
                </>
            ) : null }
            { (value.type === "heal") ? (
                <>
                    <Select
                        value={!!value.tempHP}
                        options={[ {value: true, label: 'Temp HP:'}, {value: false, label: 'Heal Amount:'} ]}
                        onChange={tempHP => update(v => { (v as HealAction).tempHP = tempHP })}/>
                    <DiceFormulaInput value={value.amount} onChange={heal => update(v => { (v as HealAction).amount = heal || 0 })} />
                    Target:
                    <Select value={value.target} options={AllyTargetOptions} onChange={target => updateFinalAction(v => { v.target = target })} />
                </>
            ) : null }
            { (value.type === "buff") ? (
                <>
                    Target:
                    <Select value={value.target} options={AllyTargetOptions} onChange={target => updateFinalAction(v => { v.target = target })} />
                    Duration:
                    <Select value={value.buff.duration} options={BuffDurationOptions} onChange={duration => update(v => { (v as BuffAction).buff.duration = duration })} />
                    <BuffForm value={value.buff} onUpdate={newValue => update(v => { (v as BuffAction).buff = newValue })} />
                </>
            ) : null }
            { (value.type === "debuff") ? (
                <>
                    Target:
                    <Select value={value.target} options={EnemyTargetOptions} onChange={target => updateFinalAction(v => { v.target = target })} />
                    Duration:
                    <Select value={value.buff.duration} options={BuffDurationOptions} onChange={duration => update(v => { (v as DebuffAction).buff.duration = duration })} />
                    Save DC:
                    <input type='number' value={value.saveDC} onChange={e => update(v => { (v as DebuffAction).saveDC = Number(e.target.value) })} />
                    <BuffForm value={value.buff} onUpdate={newValue => update(v => { (v as DebuffAction).buff = newValue })} />
                </>
            ) : null }
            { (value.type === "template") ? (() => {
                const template = ActionTemplates[value.templateOptions.templateName]

                const targetForm = template.target ? null : (
                    <>
                        Target:
                        <Select 
                            value={value.templateOptions.target} 
                            options={((template.type === 'atk') || (template.type === 'debuff')) ? EnemyTargetOptions : AllyTargetOptions}
                            onChange={target => updateTemplateAction(v => { v.templateOptions.target = target })}/>
                    </>
                )

                if (template.type === 'atk') return (
                    <>
                        { template.useSaves ? 'Save DC:' : 'To hit:' }
                        <DiceFormulaInput value={value.templateOptions.toHit} onChange={toHit => updateTemplateAction(v => { v.templateOptions.toHit = toHit || 0 })} />
                        { template.riderEffect ? (
                            <>
                                Save DC for the additional effects:
                                <input type='number' value={value.templateOptions.saveDC} onChange={e => updateTemplateAction(v => { v.templateOptions.saveDC = Number(e.target.value) })} />
                            </>
                        ) : null}
                        {targetForm}
                    </>
                )
                if (template.type === 'debuff') return (
                    <>
                        Save DC:
                        <input 
                            type='number' 
                            value={value.templateOptions.saveDC} 
                            onChange={e => updateTemplateAction(v => { v.templateOptions.saveDC = Number(e.target.value) })} />
                        {targetForm}
                    </>
                )

                return targetForm
            })() : null }
        </div>
    )
}

export default ActionForm