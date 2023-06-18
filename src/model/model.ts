import { z } from 'zod'
import { AllyTargetSchema, BuffDurationSchema, ChallengeRatingSchema, ClassesSchema, ActionConditionSchema, CreatureTypeSchema, EnemyTargetSchema, CreatureConditionSchema, EnemyTargetList, AllyTargetList } from './enums'
import { ClassOptionsSchema } from './classOptions'
import { validateDiceFormula } from './dice'
import { ActionTemplates } from '../data/actions'

export const DiceFormulaSchema = z.number().or(z.custom<string>((data) => {
    if (typeof data !== 'string') return false

    return validateDiceFormula(data)
}))

export const FrequencyList = ['at will', '1/fight', '1/day'] as const
export const FrequencySchema = z.enum(FrequencyList).or(z.discriminatedUnion('reset', [
    z.object({
        reset: z.literal('recharge'),
        cooldownRounds: z.number().min(2),
    }),
    z.object({
        reset: z.enum(['sr', 'lr']),
        uses: z.number().min(1)
    })
]))
export type Frequency = z.infer<typeof FrequencySchema>;

const BuffSchema = z.object({
    displayName: z.string().optional(),
    duration: BuffDurationSchema,

    ac: DiceFormulaSchema.optional(),
    toHit: DiceFormulaSchema.optional(),
    damage: DiceFormulaSchema.optional(),
    damageMultiplier: z.number().optional(),
    damageTakenMultiplier: z.number().optional(),
    dc: DiceFormulaSchema.optional(),
    save: DiceFormulaSchema.optional(),
    condition: CreatureConditionSchema.optional(),

    // Odds that the buff was applied. All of the effects are multiplied by this value. Default 1.
    magnitude: z.number().optional(),
})

// Not to be used directly. See ActionSchema
const ActionSchemaBase = z.object({
    id: z.string(),
    name: z.string(),
    actionSlot: z.number(), // Can only take 1 action for each action slot per turn, e.g. action slot 0 is all actions, and action slot 1 is all bonus actions
    freq: FrequencySchema,
    condition: ActionConditionSchema,
    targets: z.number(),
})

const AtkActionSchema = ActionSchemaBase.merge(z.object({
    type: z.literal('atk'),
    dpr: DiceFormulaSchema,
    toHit: DiceFormulaSchema,
    target: EnemyTargetSchema,
    useSaves: z.boolean().optional(), // If false or undefined, action.targets becomes the number of hits, and the action can now target the same creature multiple times
    halfOnSave: z.boolean().optional(), // Only useful if useSaves == true

    // TODO: add other types of rider effects, like extra damage if the target fails a save, for example
    riderEffect: z.object({
        dc: z.number(), // TODO: make it so if the dc is undefined, the rider effect applies without a save
        buff: BuffSchema,
    }).optional(),
}))

const HealActionSchema = ActionSchemaBase.merge(z.object({
    type: z.literal('heal'),
    amount: DiceFormulaSchema,
    tempHP: z.boolean().optional(),
    target: AllyTargetSchema,
}))

const BuffActionSchema = ActionSchemaBase.merge(z.object({
    type: z.literal('buff'),
    target: AllyTargetSchema,

    buff: BuffSchema,
}))

const DebuffActionSchema = ActionSchemaBase.merge(z.object({
    type: z.literal('debuff'),
    target: EnemyTargetSchema,
    saveDC: z.number(),

    buff: BuffSchema,
}))

type ActionTemplateName = keyof typeof ActionTemplates

const TemplateActionSchema = z.object({
    type: z.literal('template'),
    id: z.string(),
    freq: FrequencySchema,
    condition: ActionConditionSchema,
    
    templateOptions: z.object({
        target: AllyTargetSchema.or(EnemyTargetSchema).optional(),
        templateName: z.custom<ActionTemplateName>(data => (typeof data === 'string')),
        toHit: DiceFormulaSchema.optional(),
        saveDC: z.number().optional(),
    }).refine(data => {
        const template = ActionTemplates[data.templateName]
        if (!template) return false

        // Attacks and debuffs need extra info
        if (template.type === 'atk') {
            if (data.toHit === undefined) return false
            if (template.riderEffect && (data.saveDC === undefined)) return false
        }
    
        if ((template.type === 'debuff') && (data.saveDC === undefined)) return false

        // Check that this has right kind of target
        if (!template.target) {
            if ((template.type === 'atk') || (template.type === 'debuff')) {
                if (!EnemyTargetList.includes(data.target as any)) return false
            }
            else if ((template.type === 'buff') || (template.type === 'heal')) {
                if (!AllyTargetList.includes(data.target as any)) return false
            }
        }

        return true
    }),
})

// Like a regular Action, but without the possibility of it being a TemplateAction
export const FinalActionSchema = z.discriminatedUnion('type', [
    HealActionSchema, 
    AtkActionSchema, 
    BuffActionSchema, 
    DebuffActionSchema, 
])

const ActionSchema = z.discriminatedUnion('type', [
    HealActionSchema, 
    AtkActionSchema, 
    BuffActionSchema, 
    DebuffActionSchema, 
    TemplateActionSchema,
])

// Creature is the definition of the creature. It's what the user inputs.
// Combattant (see below) is the representation of a creature during the simulation. 
// A new combattant is created for each instance of the creature, and for each round of combat.
export const CreatureSchema = z.object({
    id: z.string(),

    mode: z.enum(['player', 'monster', 'custom']), // This determines which UI is opened when the user clicks on "modify creature"
    
    // Properties for monsters. Not used by the simulator, but by the monster search UI.
    type: CreatureTypeSchema.optional(),
    cr: ChallengeRatingSchema.optional(),
    src: z.string().optional(),
    
    // Properties for player characters. Not used by the simulator, but used by the PC template UI.
    class: z.object({
        type: ClassesSchema,
        level: z.number(),
        options: ClassOptionsSchema,
    }).optional(),

    // Properties of the creature, which are used by the simulator
    name: z.string(),
    count: z.number(),
    hp: z.number(),
    AC: z.number(),
    saveBonus: z.number(), // Average save bonus. Using this to simplify the input, even if it makes the result slightly less accurate.
    actions: z.array(ActionSchema),
})

const TeamSchema = z.array(CreatureSchema)

const CreatureStateSchema = z.object({
    currentHP: z.number(),
    tempHP: z.number().optional(),
    buffs: z.map(z.string(), BuffSchema),
    remainingUses: z.map(z.string(), z.number()),
    upcomingBuffs: z.map(z.string(), BuffSchema),
    usedActions: z.set(z.string()),
})

const CombattantSchema = z.object({
    id: z.string(),
    creature: CreatureSchema,
    initialState: CreatureStateSchema,
    finalState: CreatureStateSchema,
    
    // Actions taken by the creature on that round. Initially empty, will be filled by the simulator
    actions: z.array(z.object({
        action: FinalActionSchema,
        targets: z.map(z.string(), z.number()),
    })),
})

const RoundSchema = z.object({
    team1: z.array(CombattantSchema),
    team2: z.array(CombattantSchema),
})

export const EncounterSchema = z.object({
    monsters: TeamSchema,
    playersSurprised: z.boolean().optional(),
    monstersSurprised: z.boolean().optional(),
    shortRest: z.boolean().optional(),
})

const EncounterStatsSchema = z.object({
    damageDealt: z.number(),
    damageTaken: z.number(),
    
    healGiven: z.number(),
    healReceived: z.number(),

    charactersBuffed: z.number(),
    buffsReceived: z.number(),
    
    charactersDebuffed: z.number(),
    debuffsReceived: z.number(),

    timesUnconscious: z.number(),
})

const EncounterResultSchema = z.object({
    stats: z.map(z.string(), EncounterStatsSchema),
    rounds: z.array(RoundSchema),
})
const SimulationResultSchema = z.array(EncounterResultSchema)

export type DiceFormula = z.infer<typeof DiceFormulaSchema>
export type Buff = z.infer<typeof BuffSchema>
export type EnemyTarget = z.infer<typeof EnemyTargetSchema>
export type AllyTarget = z.infer<typeof AllyTargetSchema>
export type AtkAction = z.infer<typeof AtkActionSchema>
export type HealAction = z.infer<typeof HealActionSchema>
export type BuffAction = z.infer<typeof BuffActionSchema>
export type DebuffAction = z.infer<typeof DebuffActionSchema>
export type TemplateAction = z.infer<typeof TemplateActionSchema>
export type Action = z.infer<typeof ActionSchema>
export type FinalAction = z.infer<typeof FinalActionSchema>
export type Creature = z.infer<typeof CreatureSchema>
export type Team = z.infer<typeof TeamSchema>
export type CreatureState = z.infer<typeof CreatureStateSchema>
export type Combattant = z.infer<typeof CombattantSchema>
export type Round = z.infer<typeof RoundSchema>
export type EncounterStats = z.infer<typeof EncounterStatsSchema>
export type Encounter = z.infer<typeof EncounterSchema>
export type EncounterResult = z.infer<typeof EncounterResultSchema>
export type SimulationResult = z.infer<typeof SimulationResultSchema>