import { v4 as uuid } from 'uuid'
import { Action, FinalAction } from "../model/model"
import { ActionSlots, AllyTarget, EnemyTarget } from '../model/enums';

export const ActionTemplates = {
    'Bane': createTemplate({
        actionSlot: ActionSlots.Action,
        type: 'debuff',
        targets: 3,
        buff: {
            duration: 'entire encounter',
            toHit: '-1d4',
            save: '-1d4',
        },

        saveDC: 0, // Replaced later
    }),
    'Bless': createTemplate({
        actionSlot: ActionSlots.Action,
        type: 'buff',
        targets: 3,
        buff: {
            duration: 'entire encounter',
            toHit: '1d4',
            save: '1d4',
        },
    }),
    'Fireball': createTemplate({
        actionSlot: ActionSlots.Action,
        type: 'atk',
        targets: 2,
        useSaves: true,
        dpr: '8d6',
        halfOnSave: true,

        toHit: 0,
    }),
    'Heal': createTemplate({
        actionSlot: ActionSlots.Action,
        type: 'heal',
        targets: 1,
        amount: 70,
    }),
    'Hypnotic Pattern': createTemplate({
        actionSlot: ActionSlots.Action,
        type: 'debuff',
        targets: 2,
        
        saveDC: 0,
        buff: {
            duration: '1 round',
            condition: 'Incapacitated',
        },
    }),
    'Meteor Swarm': createTemplate({
        actionSlot: ActionSlots.Action,
        type: 'atk',
        targets: 4,
        useSaves: true,
        dpr: '20d6 + 20d6',
        halfOnSave: true,

        toHit: 0,
    }),
    'Shield': createTemplate({
        actionSlot: ActionSlots.Reaction,
        type: 'buff',
        targets: 1,
        target: 'self',
        buff: {
            duration: '1 round',
            ac: 5,
        },
    }),
}

type RealOmit<T, K extends keyof T> = { [P in keyof T as P extends K ? never : P]: T[P] };
type ActionTemplate = RealOmit<FinalAction, 'condition'|'target'|'freq'|'name'|'id'> & { target?: AllyTarget|EnemyTarget }

// For type safety
function createTemplate(action: ActionTemplate): ActionTemplate {
    return action
}

// Fetches the template if it's a TemplateAction
export function getFinalAction(action: Action): FinalAction {
    if (action.type !== 'template') return action

    const { freq, condition } = action
    const { toHit, saveDC, target, templateName } = action.templateOptions

    const template: ActionTemplate = ActionTemplates[templateName]

    const result = {
        ...template,
        id: action.id,
        name: templateName,
        freq,
        condition,
        target: template.target || target as any,
        templateName,
    }

    if (result.type === 'atk') {
        if (toHit !== undefined) result.toHit = toHit
        
        if (result.riderEffect && (saveDC !== undefined)) result.riderEffect.dc = saveDC
    }

    if (result.type === 'debuff') {
        if (saveDC !== undefined) result.saveDC = saveDC
    }

    return result
}