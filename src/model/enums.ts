import { z } from 'zod'
import { range } from './utils'

export const ClassesList = [ 'barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard' ] as const
const ClassesSchema = z.enum(ClassesList)
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