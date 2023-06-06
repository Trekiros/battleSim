import { v4 as uuid } from 'uuid'
import { Action, Combattant } from "../model/model";

type TemplateCallback = (combattant: Combattant, target: Combattant) => void

export const ActionTemplates: {[name: string]: Partial<Action>|TemplateCallback} = {
    Fireball: {
        id: uuid(),
        actionSlot: 0,
        name: 'Fireball',
        type: 'atk',
        targets: 2,
        useSaves: true,
        dpr: '8d6',
        halfOnSave: true,
    },
    'Hypnotic Pattern': {
        
    }
}