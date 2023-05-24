import {z} from 'zod'

export const ArtificerOptions = z.object({

})

export const BarbarianOptions = z.object({
    weaponBonus: z.number(),
    gwm: z.boolean(),
})

export const BardOptions = z.object({
    
})

export const ClericOptions = z.object({
    
})

export const DruidOptions = z.object({
    
})

export const FighterOptions = z.object({
    weaponBonus: z.number(),
    gwm: z.boolean(),
})

export const MonkOptions = z.object({
    
})

export const PaladinOptions = z.object({
    weaponBonus: z.number(),
    gwm: z.boolean(),
})

export const RangerOptions = z.object({
    ss: z.boolean(),
    weaponBonus: z.number(),
})

export const RogueOptions = z.object({
    ss: z.boolean(),
    weaponBonus: z.number(),
})

export const SorcererOptions = z.object({

})

export const WarlockOptions = z.object({

})

export const WizardOptions = z.object({

})

export default {
    artificer: ArtificerOptions,
    barbarian: BarbarianOptions,
    bard: BardOptions,
    cleric: ClericOptions,
    druid: DruidOptions,
    fighter: FighterOptions,
    monk: MonkOptions,
    paladin: PaladinOptions,
    ranger: RangerOptions,
    rogue: RogueOptions,
    sorcerer: SorcererOptions,
    warlock: WarlockOptions,
    wizard: WizardOptions,
} as const

export const ClassOptionsSchema = z.union([
    ArtificerOptions,
    BarbarianOptions,
    BardOptions,
    ClericOptions,
    DruidOptions,
    FighterOptions,
    MonkOptions,
    PaladinOptions,
    RangerOptions,
    RogueOptions,
    SorcererOptions,
    WarlockOptions,
    WizardOptions,
])