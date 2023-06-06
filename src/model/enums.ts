import { z } from 'zod'

export const EnemyTargetList = [
    'enemy with least HP',
    'enemy with most HP',
    'enemy with highest DPR',
    'enemy with lowest AC',
    'enemy with highest AC',
] as const
export const EnemyTargetSchema = z.enum(EnemyTargetList)
export type EnemyTarget = z.infer<typeof EnemyTargetSchema>

export const AllyTargetList = [
    'ally with the least HP',
    'ally with the most HP',
    'ally with the highest DPR',
    'ally with the lowest AC',
    'ally with the highest AC',
    'self',
] as const
export const AllyTargetSchema = z.enum(AllyTargetList)
export type AllyTarget = z.infer<typeof AllyTargetSchema>

export const ActionConditionList = [
    'default', 
    'ally at 0 HP', 
    'ally under half HP',
    'is available', 
    'is under half HP', 
    'has no THP', 
    'not used yet'
] as const
export const ActionConditionSchema = z.enum(ActionConditionList)
export type ActionCondition = z.infer<typeof ActionConditionSchema>

export const CreatureConditionList = [
    'Blinded',
    //'Charmed',
    //'Deafened',
    'Frightened',
    // 'Grapple',
    'Incapacitated',
    'Invisible',
    'Paralyzed',
    'Petrified',
    'Poisoned',
    'Restrained',
    'Stunned',
    'Unconscious',
    'Exhausted',

    'Attacks with Advantage',
    'Attacks with Disadvantage',
    'Is attacked with Advantage',
    'Is attacked with Disadvantage',
    'Attacks and is attacked with Advantage',
    'Attacks and saves with Disadvantage',
    'Saves with Advantage',
    'Save with Disadvantage',
] as const
export const CreatureConditionSchema = z.enum(CreatureConditionList)
export type CreatureCondition = z.infer<typeof CreatureConditionSchema>

export const ActionTypeList = ['atk', 'heal', 'buff', 'debuff'] as const
export const ActionTypeSchema = z.enum(ActionTypeList)
export type ActionType = z.infer<typeof ActionTypeSchema>

export const BuffDurationList = ['until next attack made', 'until next attack taken', '1 round', 'entire encounter'] as const
export const BuffDurationSchema = z.enum(BuffDurationList)
export type BuffDuration = z.infer<typeof BuffDurationSchema>

export const ClassesList = [ 'artificer', 'barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard' ] as const
export const ClassesSchema = z.enum(ClassesList)
export type Class = z.infer<typeof ClassesSchema>

export const CreatureTypeList = [ 'aberration', 'beast', 'celestial', 'construct', 'dragon', 'elemental', 'fey', 'fiend', 'giant', 'humanoid', 'monstrosity', 'ooze', 'plant', 'undead' ] as const
export const CreatureTypeSchema = z.enum(CreatureTypeList)
export type CreatureType = z.infer<typeof CreatureTypeSchema>

export const ChallengeRatingList = ['0', '1/8', '1/4', '1/2', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'] as const
export const ChallengeRatingSchema = z.enum(ChallengeRatingList)
export type ChallengeRating = z.infer<typeof ChallengeRatingSchema>
export function numericCR(cr: ChallengeRating) {
    switch (cr) {
        case '1/8': return 1/8;
        case '1/4': return 1/4;
        case '1/2': return 1/2;
        default: return Number(cr);
    }
}