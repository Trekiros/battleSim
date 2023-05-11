import { z } from 'zod'

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
    name: z.string(),
    actionSlot: z.number(), // Can only take 1 action for each action slot per turn, e.g. action slot 0 is all actions, and action slot 1 is all bonus actions
    freq: z.enum(['at will', '1/fight', '1/day']),
    condition: z.enum(['default', 'ally at 0 HP', 'is available', 'is under half HP']),
    targets: z.number(),
})

const AtkActionSchema = ActionSchemaBase.merge(z.object({
    type: z.literal('atk'),
    dpr: z.number(),
    toHit: z.number(),
    target: EnemyTargetSchema,
}))

const HealActionSchema = ActionSchemaBase.merge(z.object({
    type: z.literal('heal'),
    amount: z.number(),
    target: AllyTargetSchema,
}))

const BuffActionSchema = ActionSchemaBase.merge(z.object({
    type: z.literal('buff'),
    acBonus: z.number().optional(),
    toHitBonus: z.number().optional(),
    damageBonus: z.number().optional(),
    target: AllyTargetSchema,
}))

const DebuffActionSchema = ActionSchemaBase.merge(z.object({
    type: z.literal('debuff'),
    acDebuff: z.number().optional(),
    toHitDebuff: z.number().optional(),
    damageDebuff: z.number().optional(),
    target: EnemyTargetSchema,
}))

const ActionSchema = z.discriminatedUnion('type', [HealActionSchema, AtkActionSchema, BuffActionSchema, DebuffActionSchema])

export const CreatureSchema = z.object({
    mode: z.enum(['player', 'monster', 'custom']),
    name: z.string(),
    count: z.number(),
    hp: z.number(),
    AC: z.number(),

    actions: z.array(ActionSchema),
})

const TeamSchema = z.array(CreatureSchema)

const BuffSchema = z.object({
    ac: z.number().optional(),
    toHit: z.number().optional(),
    damage: z.number().optional(),
})

const CreatureStateSchema = z.object({
    currentHP: z.number(),
    buffs: z.array(BuffSchema),
    remainingUses: z.map(z.string(), z.number()),
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
    playersSurprised: z.boolean(),
    monstersSurprised: z.boolean(),
})

const EncounterResultSchema = z.array(RoundSchema)
const SimulationResultSchema = z.array(EncounterResultSchema)

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
export type Encounter = z.infer<typeof EncounterSchema>
export type EncounterResult = z.infer<typeof EncounterResultSchema>
export type SimulationResult = z.infer<typeof SimulationResultSchema>