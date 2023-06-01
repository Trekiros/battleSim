import { z } from 'zod'
import { BuffDurationSchema, ChallengeRatingSchema, ClassesSchema, ConditionSchema, CreatureTypeSchema, FrequencySchema } from './enums'
import { ClassOptionsSchema } from './classOptions'
import { validateDiceFormula } from './dice'

export const DiceFormulaSchema = z.number().or(z.custom<string>((data) => {
    if (typeof data !== 'string') return false

    return validateDiceFormula(data)
}))

const EnemyTargetSchema = z.enum([
    'enemy with least HP',
    'enemy with most HP',
    'enemy with highest DPR',
    'enemy with lowest AC',
    'enemy with highest AC',
])

const AllyTargetSchema = z.enum([
    'ally with the least HP',
    'ally with the most HP',
    'ally with the highest DPR',
    'ally with the lowest AC',
    'ally with the highest AC',
    'self',
])

const ActionSchemaBase = z.object({
    id: z.string(),
    name: z.string(),
    actionSlot: z.number(), // Can only take 1 action for each action slot per turn, e.g. action slot 0 is all actions, and action slot 1 is all bonus actions
    freq: FrequencySchema,
    condition: ConditionSchema,
    targets: z.number(),
})

const BuffSchema = z.object({
    duration: BuffDurationSchema,

    ac: DiceFormulaSchema.optional(),
    toHit: DiceFormulaSchema.optional(),
    damage: DiceFormulaSchema.optional(),
    damageMultiplier: z.number().optional(),
    damageTakenMultiplier: z.number().optional(),
    dc: DiceFormulaSchema.optional(),
    save: DiceFormulaSchema.optional(),

    // Odds that the buff was applied. All of the effects are multiplied by this value. Default 1.
    magnitude: z.number().optional(),
})

const AtkActionSchema = ActionSchemaBase.merge(z.object({
    type: z.literal('atk'),
    dpr: DiceFormulaSchema,
    toHit: DiceFormulaSchema,
    target: EnemyTargetSchema,
    useSaves: z.boolean().optional(),
    halfOnSave: z.boolean().optional(),

    riderEffect: z.object({
        dc: z.number(),
        buff: BuffSchema,
    }).optional(),
}))

const HealActionSchema = ActionSchemaBase.merge(z.object({
    type: z.literal('heal'),
    amount: DiceFormulaSchema,
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

const ActionSchema = z.discriminatedUnion('type', [HealActionSchema, AtkActionSchema, BuffActionSchema, DebuffActionSchema])

export const CreatureSchema = z.object({
    id: z.string(),

    mode: z.enum(['player', 'monster', 'custom']),
    type: CreatureTypeSchema.optional(),
    cr: ChallengeRatingSchema.optional(),
    src: z.string().optional(),
    class: z.object({
        type: ClassesSchema,
        level: z.number(),
        options: ClassOptionsSchema,
    }).optional(),

    name: z.string(),
    count: z.number(),
    hp: z.number(),
    AC: z.number(),
    saveBonus: z.number(),

    actions: z.array(ActionSchema),
})

const TeamSchema = z.array(CreatureSchema)

const CreatureStateSchema = z.object({
    currentHP: z.number(),
    buffs: z.map(z.string(), BuffSchema),
    remainingUses: z.map(z.string(), z.number()),
    upcomingBuffs: z.map(z.string(), BuffSchema),
})

const CombattantSchema = z.object({
    id: z.string(),
    creature: CreatureSchema,
    initialState: CreatureStateSchema,
    finalState: CreatureStateSchema,
    
    actions: z.array(z.object({
        action: ActionSchema,
        targets: z.array(z.string()),
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
export type Action = z.infer<typeof ActionSchema>
export type Creature = z.infer<typeof CreatureSchema>
export type Team = z.infer<typeof TeamSchema>
export type CreatureState = z.infer<typeof CreatureStateSchema>
export type Combattant = z.infer<typeof CombattantSchema>
export type Round = z.infer<typeof RoundSchema>
export type EncounterStats = z.infer<typeof EncounterStatsSchema>
export type Encounter = z.infer<typeof EncounterSchema>
export type EncounterResult = z.infer<typeof EncounterResultSchema>
export type SimulationResult = z.infer<typeof SimulationResultSchema>