import { Class } from '../model/enums'
import { Creature } from "../model/model"

export const PlayerTemplates: {[className in Class]: {[level: number]: Creature}} = {
    barbarian: {},
    bard: {},
    cleric: {},
    druid: {},
    fighter: {},
    monk: {},
    paladin: {},
    ranger: {},
    rogue: {},
    sorcerer: {},
    warlock: {},
    wizard: {},
}

export const Monsters: Creature[] = []