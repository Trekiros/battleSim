import ClassOptions from '../model/classOptions'
import { Action, Creature } from "../model/model"
import {z} from 'zod'
import { getMonster } from './monsters'

function barbarian(level: number, options: z.infer<typeof ClassOptions.barbarian>): Creature {
    const STR = scale(level, { 1: 4, 4: 5, 20: 7 })
    const CON = scale(level, { 1: 2, 8: 3, 12: 4, 16: 5, 20: 7 })
    const DEX = 2
    const PB = pb(level)
    const RAGE = scale(level, { 1: 2, 9: 3, 16: 4 })

    const result: Creature = {
        id: crypto.randomUUID(),
        name: name('Barbarian', level),
        AC: 10 + DEX + CON,
        saveBonus: PB,
        hp: hp(level, 12, CON) * 2,
        count: 1,
        mode: 'player',
        actions: [
            {
                id: crypto.randomUUID(),
                name: `Greatsword${level >= 5 ? ' x2' : ''}`,
                actionSlot: ACTION,
                type: 'atk',
                targets: 1,
                condition: 'default',
                freq: 'at will',
                target: 'enemy with least HP',
                toHit: PB + STR + options.weaponBonus + (options.gwm ? -5 : 0),
                dpr: (7 + STR + RAGE + options.weaponBonus + (options.gwm ? 10 : 0)) * (level >= 5 ? 2 : 1), 
            },
        ],
    }

    if (level >= 2) {
        result.actions.push({
            id: crypto.randomUUID(),
            name: 'Reckless Attack',
            actionSlot: BONUS_ACTION,
            type: 'buff',
            targets: 1,
            condition: 'default',
            freq: 'at will',
            target: 'self',
            buff: {
                duration: '1 round',
                ac: -4,
                toHit: 4,
            }
        })
    }

    return result
}


function bard(level: number, options: z.infer<typeof ClassOptions.bard>): Creature {
    const CON = 2
    const CHA = scale(level, {1: 4, 4: 5})
    const DEX = scale(level, {1: 2, 12: 3, 16: 4})
    const PB = pb(level)
    const DC = 8 + PB + CHA
    const BARDIC_INSPI = scale(level, {1: 6, 5: 8, 10: 10, 15: 12})

    const result: Creature = {
        id: crypto.randomUUID(),
        name: name('Bard', level),
        AC: 13 + DEX,
        saveBonus: PB,
        hp: hp(level, 8, CON),
        count: 1,
        mode: 'player',
        actions: scaleArray<Action>(level, {
            1: [
                {
                    id: crypto.randomUUID(),
                    name: 'Bane',
                    actionSlot: ACTION,
                    type: 'debuff',
                    targets: 2,
                    condition: 'default',
                    freq: 'at will',
                    target: 'enemy with highest DPR',
                    saveDC: DC,
                    buff: {
                        duration: 'entire encounter',
                        toHit: -2.5,
                        save: -2.5,
                    }
                },
                {
                    id: crypto.randomUUID(),
                    name: 'Bardic Inspiration',
                    actionSlot: BONUS_ACTION,
                    type: 'buff',
                    targets: 1,
                    condition: (level < 5) ? 'is available' : 'default',
                    freq: (level < 5) ? '1/fight' : 'at will',
                    target: 'ally with the highest DPR',
                    buff: {
                        duration: '1 round',
                        toHit: BARDIC_INSPI / 2,
                    },
                },
                {
                    id: crypto.randomUUID(),
                    name: (level <= 9) ? 'Cure Wounds' : 'Mass Cure Wounds',
                    actionSlot: ACTION,
                    type: 'heal',
                    targets: (level <= 9) ? 1 : 2,
                    freq: '1/fight',
                    condition: 'ally at 0 HP',
                    target: 'ally with the least HP',
                    amount: Math.ceil(level / 3) * 4.5 + CHA,
                }
            ]
        }),
    }

    return result
}

function cleric(level: number, options: z.infer<typeof ClassOptions.cleric>): Creature {
    const CON = 2
    const WIS = scale(level, {1: 4, 4: 5})
    const PB = pb(level)
    const DC = 8 + PB + WIS
    const toHit = PB + WIS
    
    return {
        id: crypto.randomUUID(),
        name: name('Cleric', level),
        AC: scale(level, { 1: 17, 3: 18, 5: 19, 8: 20 }),
        saveBonus: PB,
        hp: hp(level, 8, CON),
        count: 1,
        mode: 'player',
        actions: scaleArray<Action>(level, {
            1: [
                {
                    id: crypto.randomUUID(),
                    name: 'Sacred Flame',
                    actionSlot: ACTION,
                    type: 'atk',
                    targets: 1,
                    freq: 'at will',
                    condition: 'default',
                    target: 'enemy with least HP',
                    toHit: DC - 10,
                    dpr: scale(level, {1: 4.5, 5: 9, 8: 13.5, 11: 18, 17: 22.5}),
                },
                {
                    id: crypto.randomUUID(),
                    name: 'Bless',
                    actionSlot: ACTION,
                    type: 'buff',
                    targets: 2,
                    freq: '1/fight',
                    condition: 'is available',
                    target: 'ally with the highest DPR',
                    buff: {
                        duration: 'entire encounter',
                        save: 2.5,
                        toHit: 2.5,
                    }
                },
                {
                    id: crypto.randomUUID(),
                    name: scale(level, { 1: 'Cure Wounds', 11: 'Heal' }),
                    actionSlot: ACTION,
                    type: 'heal',
                    targets: 1,
                    freq: scale(level, { 1: '1/day', 5: '1/fight' }),
                    condition: 'ally at 0 HP',
                    target: 'ally with the least HP',
                    amount: scale(level, {1: Math.ceil(level / 3) * 4.5 + WIS, 11: 70 }),
                },
            ],
            3: [
                {
                    id: crypto.randomUUID(),
                    name: 'Spiritual Weapon',
                    actionSlot: BONUS_ACTION,
                    type: 'atk',
                    targets: 1,
                    freq: 'at will',
                    condition: 'default',
                    target: 'enemy with least HP',
                    toHit: toHit,
                    dpr: Math.ceil(level / 6) * 4.5 + WIS,
                },
            ],
            5: [
                {
                    id: crypto.randomUUID(),
                    name: 'Spirit Guardians',
                    actionSlot: PASSIVE,
                    type: 'atk',
                    targets: 2,
                    freq: 'at will',
                    condition: 'default',
                    target: 'enemy with least HP',
                    toHit: DC - 10,
                    dpr: (Math.ceil(level / 5) + 2) * 3.5,
                },
                {
                    id: crypto.randomUUID(),
                    name: scale(level, {1: 'Mass Healing Word', 9: 'Mass Cure Wounds', 17: 'Mass Heal' }),
                    actionSlot: ACTION,
                    type: 'heal',
                    targets: 6,
                    freq: '1/day',
                    condition: 'is under half HP',
                    target: 'ally with the least HP',
                    amount: scale(level, {1: 2.5 + WIS, 9: 13.5 + WIS, 17: 70}),
                },
            ],
        }),
    }
}

function druid(level: number, options: z.infer<typeof ClassOptions.druid>): Creature {
    const CON = 2
    const DEX = 2
    const WIS = scale(level, {1: 4, 4: 5})
    const PB = pb(level)
    const DC = 8 + PB + WIS
    const toHit = PB + WIS

    if (level === 1) {
        return {
            id: crypto.randomUUID(),
            name: name('Druid', level),
            AC: 14 + DEX,
            saveBonus: PB,
            hp: hp(level, 8, CON),
            count: 1,
            mode: 'player',
            actions: [
                {
                    id: crypto.randomUUID(),
                    name: 'Shillelagh',
                    actionSlot: ACTION,
                    type: 'atk',
                    condition: 'default',
                    freq: 'at will',
                    targets: 1,
                    target: 'enemy with least HP',
                    toHit: toHit,
                    dpr: 4.5 + WIS,
                },
                {
                    id: crypto.randomUUID(),
                    name: 'Cure Wounds',
                    actionSlot: ACTION,
                    type: 'heal',
                    targets: 1,
                    freq: '1/day',
                    condition: 'ally at 0 HP',
                    target: 'ally with the least HP',
                    amount: 4.5 + WIS,
                },
            ],
        }
    }

    const wildshape = scale<Creature>(level, {
        2: getMonster('Dire Wolf')!,
        6: getMonster('Giant Constrictor Snake')!,
        9: getMonster('Giant Scorpion')!,
        10: getMonster('Fire Elemental')!,
        17: getMonster('Planetar')!,
    })

    return {
        id: crypto.randomUUID(),
        name: name('Druid', level),
        AC: wildshape.AC,
        saveBonus: PB,
        hp: hp(level, 8, CON) + wildshape.hp,
        count: 1,
        mode: 'player',
        actions: scaleArray(level, {
            1: [
                ...wildshape.actions,
                {
                    id: crypto.randomUUID(),
                    name: `${scale(level, {1: 'Wild Shape', 17: 'Shapechange'})}: ${wildshape.name}`,
                    actionSlot: 6,
                    type: 'heal',
                    target: 'self',
                    targets: 1,
                    condition: 'is available',
                    freq: '1/fight',
                    amount: wildshape.hp,
                }
            ],
        })
    }
}

function fighter(level: number, options: z.infer<typeof ClassOptions.fighter>): Creature {
    const CON = 2
    const STR = scale(level, {1: 4, 4: 5})
    const PB = pb(level)
    const toHit = PB + STR + options.weaponBonus + (options.gwm ? -5 : 0)
    const AC = scale(level, { 1: 16, 3: 17, 6: 18 })

    const attacks = scale(level, {1: 1, 5: 2, 11: 3, 20: 4})

    const action: Action = {
        id: crypto.randomUUID(),
        name: `Greatsword${level >= 5 ? ' x' + attacks : ''}`,
        actionSlot: ACTION,
        type: 'atk',
        freq: 'at will',
        condition: 'default',
        target: 'enemy with least HP',
        targets: 1,
        toHit: toHit,
        dpr: (7 + STR + options.weaponBonus + (options.gwm ? 10 : 0)) * attacks,
    }

    return {
        id: crypto.randomUUID(),
        name: name('Fighter', level),
        AC: AC,
        saveBonus: PB,
        hp: hp(level, 10, CON),
        count: 1,
        mode: 'player',
        actions: scaleArray<Action>(level, {
            1: [
                action,
                {
                    id: crypto.randomUUID(),
                    name: 'Second Wind',
                    actionSlot: BONUS_ACTION,
                    type: 'heal',
                    target: 'self',
                    freq: '1/fight',
                    condition: 'is under half HP',
                    targets: 1,
                    amount: level + 5.5,
                }
            ],
            2: [
                {
                    id: crypto.randomUUID(),
                    name: `Action Surge: ${action.name}`,
                    actionSlot: 4,
                    freq: '1/fight',
                    condition: 'is available',
                    type: 'atk',
                    target: 'enemy with least HP',
                    targets: 1,
                    toHit: toHit,
                    dpr: action.dpr,
                }
            ],
            17: [
                {
                    id: crypto.randomUUID(),
                    name: `Action Surge: ${action.name}`,
                    actionSlot: 5,
                    freq: '1/fight',
                    condition: 'is available',
                    type: 'atk',
                    target: 'enemy with least HP',
                    targets: 1,
                    toHit: toHit,
                    dpr: action.dpr,
                }
            ]
        })
    }
}

function monk(level: number, options: z.infer<typeof ClassOptions.monk>): Creature {
    const CON = 2
    const DEX = scale(level, {1: 4, 4: 5})
    const WIS = scale(level, {1: 2, 8: 3, 12: 4, 16: 5})
    const PB = pb(level)
    const toHit = PB + DEX
    const DC = 8 + PB + WIS
    const AC = 10 + DEX + WIS

    const martialArtsDie = scale(level, {1: 4, 5: 6, 11: 8, 17: 10})

    return {
        id: crypto.randomUUID(),
        name: name('Monk', level),
        AC: AC,
        saveBonus: PB,
        hp: hp(level, 8, CON),
        count: 1,
        mode: 'player',
        actions: scaleArray<Action>(level, {
            1: [
                {
                    id: crypto.randomUUID(),
                    name: scale(level, {1: 'Quarterstaff', 5: 'Quarterstaff x2'}),
                    actionSlot: ACTION,
                    type: 'atk',
                    freq: 'at will',
                    condition: 'default',
                    targets: 1,
                    target: 'enemy with least HP',
                    toHit: toHit,
                    dpr: (5.5 + DEX) * (level < 5 ? 1 : 2),
                },
                {
                    id: crypto.randomUUID(),
                    name: scale(level, {1: 'Unarmed Strike', 5: 'Flurry of Blows'}),
                    actionSlot: BONUS_ACTION,
                    type: 'atk',
                    freq: 'at will',
                    condition: 'default',
                    targets: 1,
                    target: 'enemy with least HP',
                    toHit: toHit,
                    dpr: (martialArtsDie + DEX) * (level < 5 ? 1 : 2),
                },
            ],
            5: [
                {
                    id: crypto.randomUUID(),
                    name: 'Stunning Strike',
                    actionSlot: 4,
                    type: 'debuff',
                    condition: (level < 10) ? 'is available' : 'default',
                    freq: (level < 10) ? '1/fight' : 'at will',
                    targets: (level < 15) ? 1 : 2,
                    target: 'enemy with highest DPR',
                    saveDC: DC,
                    buff: {
                        duration: '1 round',
                        damageMultiplier: 0,
                        ac: -4,
                    },
                },
            ],
        }),
    }
}

function paladin(level: number, options: z.infer<typeof ClassOptions.paladin>): Creature {
    const CON = 2
    const STR = scale(level, {1: 4, 4: 5})
    const CHA = scale(level, {1: 2, 8: 3, 12: 5})
    const PB = pb(level)
    const AC = scale(level, {1: 17, 3: 18, 5: 19, 8: 20, 11: 21, 16: 22})
    const toHit = PB + STR + options.weaponBonus + (options.gwm ? -5 : 0)

    return {
        id: crypto.randomUUID(),
        name: name('Paladin', level),
        AC: AC,
        saveBonus: PB,
        hp: hp(level, 10, CON),
        count: 1,
        mode: 'player',
        actions: scaleArray<Action>(level, {
            1: [
                {
                    id: crypto.randomUUID(),
                    name: scale(level, {1: 'Longsword', 5: 'Longsword x2'}),
                    actionSlot: ACTION,
                    type: 'atk',
                    freq: 'at will',
                    condition: 'default',
                    targets: 1,
                    target: 'enemy with least HP',
                    toHit: toHit,
                    dpr: (
                        6.5 + STR                       // Longsword + duelist fighting style
                        + options.weaponBonus           // Weapon
                        + (options.gwm ? 10 : 0)        // GWM
                        + (level >= 10 ? 4.5 : 0)       // Improved Divine Smite
                    ) * (level < 5 ? 1 : 2),            // Multiattack
                },
                {
                    id: crypto.randomUUID(),
                    name: 'Lay on Hands',
                    actionSlot: ACTION,
                    type: 'heal',
                    freq: '1/day',
                    condition: 'ally at 0 HP',
                    targets: 1,
                    target: 'ally with the least HP',
                    amount: 5 * level,
                },
            ],
            2: [
                {
                    id: crypto.randomUUID(),
                    name: 'Divine Smite',
                    actionSlot: 4,
                    type: 'buff',
                    freq: scale(level, {1: "1/day", 5: "1/fight", 11: 'at will'}),
                    condition: scale(level, {1: "is available", 11: 'default'}),
                    targets: 1,
                    target: 'self',
                    buff: {
                        duration: 'until next attack made',
                        damage: scale(level, {1: 9, 5: 13.5, 11: 18, 17: 23.5}),
                    }
                },
            ],
            6: [
                {
                    id: crypto.randomUUID(),
                    name: 'Aura of Protection',
                    actionSlot: 5,
                    type: 'buff',
                    freq: 'at will',
                    condition: 'default',
                    targets: 2,
                    target: 'ally with the least HP',
                    buff: {
                        duration: '1 round',
                        save: CHA,
                    },
                },
            ],
        }),
    }
}

function ranger(level: number, options: z.infer<typeof ClassOptions.ranger>): Creature {
    const CON = 2
    const DEX = scale(level, {1: 4, 4: 5})
    const WIS = scale(level, {1: 2, 8: 3, 12: 5})
    const PB = pb(level)
    const AC = DEX + scale(level, {1: 12, 5: 13, 11: 14 })
    const toHit = PB + DEX + options.weaponBonus + (options.ss ? -5 : 0) + 2 // +2 from Archery fighting style

    return {
        id: crypto.randomUUID(),
        name: name('Ranger', level),
        AC: AC,
        saveBonus: PB,
        hp: hp(level, 10, CON),
        count: 1,
        mode: 'player',
        actions: scaleArray<Action>(level, {
            1: [
                {
                    id: crypto.randomUUID(),
                    name: scale(level, { 
                        1: "Hand Crossbow + Hunter's Mark", 
                        4: "Hand Crossbow + Crossbow Expert + Hunter's Mark", 
                        5: "Hand Crossbow x2 + Crossbow Expert + Hunter's Mark" 
                    }),
                    actionSlot: ACTION,
                    type: 'atk',
                    freq: 'at will',
                    condition: 'default',
                    targets: 1,
                    target: 'enemy with least HP',
                    toHit: toHit,
                    dpr: (3.5 + DEX + options.weaponBonus + (options.ss ? 10 : 0)) * scale(level, { 1: 1, 4: 2, 5: 3 }),
                },
            ],
        }),
    }
}

function rogue(level: number, options: z.infer<typeof ClassOptions.rogue>): Creature {
    const CON = 2
    const DEX = scale(level, {1: 4, 4: 5})
    const PB = pb(level)
    const AC = DEX + scale(level, {1: 12, 5: 13, 11: 14 })
    const toHit = PB + DEX + options.weaponBonus + (options.ss ? -5 : 0)
    const sneakAttack = 3.5 * Math.ceil(level/2)

    return {
        id: crypto.randomUUID(),
        name: name('Rogue', level),
        AC: AC,
        saveBonus: PB,
        hp: hp(level, 8, CON),
        count: 1,
        mode: 'player',
        actions: scaleArray<Action>(level, {
            1: [
                {
                    id: crypto.randomUUID(),
                    name: scale(level, { 
                        1: "Dagger x2 + Sneak Attack", 
                        4: "Hand Crossbow + Crossbow Expert + Sneak Attack" 
                    }),
                    actionSlot: ACTION,
                    type: 'atk',
                    freq: 'at will',
                    condition: 'default',
                    targets: 1,
                    target: 'enemy with least HP',
                    toHit: toHit,
                    dpr: (3.5 + DEX + options.weaponBonus + (options.ss ? 10 : 0)) * scale(level, { 1: 1, 4: 2 }) + sneakAttack,
                },
            ],
            5: [
                {
                    id: crypto.randomUUID(),
                    name: 'Uncanny Dodge',
                    actionSlot: 4,
                    type: 'buff',
                    target: 'self',
                    targets: 1,
                    freq: 'at will',
                    condition: 'default',
                    buff: {
                        duration: 'until next attack taken',
                        damageTakenMultiplier: 0.5,
                    },
                }
            ]
        }),
    }
}

function sorcerer(level: number, options: z.infer<typeof ClassOptions.sorcerer>): Creature {
    const CON = 2
    const DEX = 2
    const CHA = scale(level, {1: 4, 4: 5})
    const PB = pb(level)
    const AC = 13 + DEX
    const toHit = PB + CHA
    const DC = 8 + PB + CHA

    return {
        id: crypto.randomUUID(),
        name: name('Sorcerer', level),
        AC: AC,
        saveBonus: PB,
        hp: hp(level, 6, CON),
        count: 1,
        mode: 'player',
        actions: scaleArray<Action>(level, {
            1: [
                {
                    id: crypto.randomUUID(),
                    name: 'Fire Bolt',
                    actionSlot: ACTION,
                    type: 'atk',
                    freq: 'at will',
                    condition: 'default',
                    targets: 1,
                    target: 'enemy with least HP',
                    toHit: toHit,
                    dpr: scale(level, {1: 5.5, 5: 11, 11: 16.5, 17: 22}),
                }
            ],
            3: [
                {
                    id: crypto.randomUUID(),
                    name: 'Quickened Mirror Image',
                    actionSlot: BONUS_ACTION,
                    type: 'buff',
                    freq: '1/fight',
                    condition: 'is available',
                    targets: 1,
                    target: 'self',
                    buff: {
                        duration: 'entire encounter',
                        damageTakenMultiplier: 0.25,
                    },
                },
            ],
            5: [
                {
                    id: crypto.randomUUID(),
                    name: 'Quickened Fireball',
                    actionSlot: BONUS_ACTION,
                    type: 'atk',
                    freq: scale(level, {1: '1/fight', 11: 'at will'}),
                    condition: scale(level, {1: 'is available', 11: 'default'}),
                    targets: 2,
                    target: 'enemy with least HP',
                    toHit: DC - 10,
                    dpr: scale(level, {1: 28, 11: 35}),
                }
            ]
        }),
    }
}

function warlock(level: number, options: z.infer<typeof ClassOptions.warlock>): Creature {
    const CON = 2
    const DEX = 2
    const CHA = scale(level, {1: 4, 4: 5})
    const PB = pb(level)
    const AC = 13 + DEX
    const toHit = PB + CHA
    const DC = 8 + PB + CHA

    return {
        id: crypto.randomUUID(),
        name: name('Warlock', level),
        AC: AC,
        saveBonus: PB,
        hp: hp(level, 8, CON),
        count: 1,
        mode: 'player',
        actions: scaleArray<Action>(level, {
            1: [
                {
                    id: crypto.randomUUID(),
                    name: 'Eldritch Blast + Hex',
                    actionSlot: ACTION,
                    type: 'atk',
                    freq: 'at will',
                    condition: 'default',
                    targets: 1,
                    target: 'enemy with least HP',
                    toHit: toHit,
                    dpr: (5.5 + (level > 1 ? CHA : 0)) * scale(level, {1: 1, 5: 2, 11: 3, 17: 4}),
                },
            ],
            5: [
                {
                    id: crypto.randomUUID(),
                    name: 'Hypnotic Pattern',
                    actionSlot: ACTION,
                    type: 'debuff',
                    freq: '1/fight',
                    condition: 'is available',
                    targets: 2,
                    target: 'enemy with highest DPR',
                    saveDC: DC,
                    buff: {
                        duration: '1 round',
                        damageMultiplier: 0,
                    },
                },
            ],
        }),
    }
}

function wizard(level: number, options: z.infer<typeof ClassOptions.wizard>): Creature {
    const CON = 2
    const DEX = 2
    const INT = scale(level, {1: 4, 4: 5})
    const PB = pb(level)
    const AC = 13 + DEX
    const toHit = PB + INT
    const DC = 8 + PB + INT

    return {
        id: crypto.randomUUID(),
        name: name('Wizard', level),
        AC: AC,
        saveBonus: PB,
        hp: hp(level, 6, CON),
        count: 1,
        mode: 'player',
        actions: scaleArray<Action>(level, {
            1: [
                {
                    id: crypto.randomUUID(),
                    name: 'Fire Bolt',
                    actionSlot: ACTION,
                    type: 'atk',
                    freq: 'at will',
                    condition: 'default',
                    targets: 1,
                    target: 'enemy with least HP',
                    toHit: toHit,
                    dpr: scale(level, {1: 5.5, 5: 11, 11: 16.5, 17: 22}),
                },
                {
                    id: crypto.randomUUID(),
                    name: 'Shield',
                    actionSlot: REACTION,
                    type: 'buff',
                    freq: scale(level, {1: '1/day', 3: '1/fight', 8: 'at will'}),
                    condition: scale(level, {1: 'is under half HP', 8: 'default'}),
                    targets: 1,
                    target: 'self',
                    buff: {
                        duration: '1 round',
                        ac: 5,
                    },
                },
            ],
            5: [
                {
                    id: crypto.randomUUID(),
                    name: 'Fireball',
                    actionSlot: ACTION,
                    type: 'atk',
                    freq: scale(level, {1: '1/fight', 11: 'at will'}),
                    condition: scale(level, {1: 'is available', 11: 'default'}),
                    targets: 2,
                    target: 'enemy with least HP',
                    toHit: DC - 10,
                    dpr: scale(level, {1: 28, 11: 35}),
                },
                {
                    id: crypto.randomUUID(),
                    name: 'Hypnotic Pattern',
                    actionSlot: ACTION,
                    type: 'debuff',
                    freq: '1/fight',
                    condition: 'is available',
                    targets: 2,
                    target: 'enemy with highest DPR',
                    saveDC: DC,
                    buff: {
                        duration: '1 round',
                        damageMultiplier: 0,
                    },
                },
            ],
            13: [
                {
                    id: crypto.randomUUID(),
                    name: 'Draconic transformation',
                    actionSlot: BONUS_ACTION,
                    type: 'atk',
                    freq: 'at will',
                    condition: 'default',
                    targets: 2,
                    target: 'enemy with least HP',
                    toHit: DC - 10,
                    dpr: 28,
                },
            ],
            17: [
                {
                    id: crypto.randomUUID(),
                    name: 'Meteor Swarm',
                    actionSlot: ACTION,
                    type: 'atk',
                    freq: '1/day',
                    condition: 'is available',
                    targets: 3,
                    target: 'enemy with least HP',
                    toHit: DC - 10,
                    dpr: 140,
                },
            ]
        }),
    }
}

export const PlayerTemplates = {
    barbarian,
    bard,
    cleric,
    druid,
    fighter,
    monk,
    paladin,
    ranger,
    rogue,
    sorcerer,
    warlock,
    wizard,
} as const


/*  UTILS   */

const ACTION = 0
const BONUS_ACTION = 1
const REACTION = 4
const PASSIVE = 5
const RIDER_EFFECT = 6

function scale<T>(currentLevel: number, levelScale: {[minLevel: number]: T}) {
    const level = Object.keys(levelScale)
        .map(Number)
        .filter(scaleLevel => (scaleLevel <= currentLevel))
        .reduce((a, b) => Math.max(a, b))

    return levelScale[level]
}

function scaleArray<T>(currentLevel: number, minLevelScale: {[minLevel: number]: T[]}, maxLevelScale?: {[minLevel: number]: T[]}): T[] {
    return [
        ...Object.keys(minLevelScale)
            .map(Number)
            .filter(level => (level <= currentLevel))
            .flatMap(level => minLevelScale[level]),
        ...!maxLevelScale ? [] : Object.keys(maxLevelScale)
            .map(Number)
            .filter(level => (level >= currentLevel))
            .flatMap(level => minLevelScale[level]),
    ]
}

function hp(level: number, dieSize: number, con: number) {
    return (level) * (con + dieSize / 2) + (dieSize / 2) 
}

function pb(level: number) {
    return scale(level, { 1: 2, 5: 3, 9: 4, 13: 5, 17: 6 })
}

function name(className: string, level: number) {
    return `Lv${level} ${className}`
}