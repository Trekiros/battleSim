const crypto = require('crypto')
const fs = require('fs')

const fileNames = ['./bestiary-mm.json', './bestiary-mpmm.json']

const monstersFilter = [
    'Lich'
]

const monsters = fileNames.flatMap(fileName => {
        const buffer = fs.readFileSync(fileName)
        const json = buffer.toString()
        const obj = JSON.parse(json)
        return obj.monster
    })
    //.filter(monster => monstersFilter.includes(monster.name))
    .map(monster => {
        const id = crypto.randomUUID()
        const src = `${monster.source} p.${monster.page}`
        const name = monster.name
        const AC = (typeof monster.ac[0] === 'number') ? monster.ac[0] : monster.ac[0].ac
        const hp = monster.hp.average
        const cr = (monster.cr === undefined) ? '—' : (typeof monster.cr === 'string') ? monster.cr : monster.cr.cr
        const mode = 'custom'
        const type = (typeof monster.type === 'string') ? monster.type : monster.type.type
        const actions = []

        function matchEntry(entry, regex) {
            if (typeof entry === "string") {
                return [...(entry.matchAll(regex) || [])]
            } else {
                return entry.items.flatMap(item => 
                    item.entry ? [...(item.entry.matchAll(regex) || [])]
                    :   item.entries.flatMap(e => [...(e.matchAll(regex) || [])])
                )
            }
        }

        let multiattack = {}
        monster.action && monster.action.find(action => (action.name === 'Multiattack'))?.entries?.forEach(entry => {
            const dictionary = {
                one: 1,
                two: 2,
                three: 3,
                four: 4, 
                five: 5,
                six: 6,
            }

            monster.action.forEach(action => {
                const regexStr = `((one|two|three|four|five|six).*?)+${action.name.toLowerCase()}(s?)`
                const regex = new RegExp(regexStr, 'g')
                const results = matchEntry(entry, regexStr).flatMap(arr => arr).filter(result => !!dictionary[result])
                const atkCount = dictionary[results[results.length - 1]]

                if (atkCount) {
                    multiattack[action.name] = atkCount
                }
            })
        })

        const legendaryActions = {}
        if (monster.legendary) {
            monster.legendary.forEach(({ name }) => {
                const correspondingAction = monster.action
                    .find(action => name.includes(action.name))

                if (!correspondingAction) return

                const actionCostRegex = /\(Costs (\d) Actions\)/g
                const actionCostMatch = [...name.matchAll(actionCostRegex)]
                const actionCost = actionCostMatch[0]?.[1] || 1
                
                if (actionCost === 1) legendaryActions[correspondingAction.name] = 3
                else legendaryActions[correspondingAction.name] = 1
            })
        }

        let multiattackActions = {}
        monster.action && monster.action.forEach(action => {
            if (action.name === "Multiattack") {
                // TODO
            } else {
                const dmgRegex = /{@damage (\d+)d(\d+)( \+ (\d+))?}/g
                const dcRegex = /{@dc (\d+)}/g
                const hitRegex = /{@hit (\d+)}/g
                const srFreqRegex = /({@recharge \d+(-\d+)?})|(\(Recharges after a Short or Long Rest\))/g
                const lrFreqRegex = /(\((\d+)\/Day\))/g
                const areaRegex = /(cone)|(line)|(circle)|(sphere)|(cylinder)|(square)|(each creature within \d+ feet of)/g
                
                const dmgMatches = action.entries.flatMap(entry => matchEntry(entry, dmgRegex))
                let actionDamage = 0
                dmgMatches.forEach(match => {
                    actionDamage += Number(match[1]) * (1 + Number(match[2])) / 2 + (match[4] ? Number(match[4]) : 0)
                })

                const dcMatches = action.entries.flatMap(entry => matchEntry(entry, dcRegex))
                let maxDC = 0
                dcMatches.forEach(match => {
                    maxDC = Math.max(maxDC, Number(match[1]))
                })

                const toHitMatches = action.entries.flatMap(entry => matchEntry(entry, hitRegex))
                let maxToHit = 0
                toHitMatches.forEach(match => {
                    maxToHit = Math.max(maxToHit, Number(match[1]))
                })

                const toHit = Math.max(maxToHit, maxDC - 10)

                if (multiattack[action.name]) {
                    multiattackActions[action.name] = { toHit, actionDamage }
                    return
                }

                const srFreqMatches = matchEntry(action.name, srFreqRegex)
                let freq = 'at will'
                let condition = 'default'
                srFreqMatches.forEach(match => {
                    freq = '1/fight'
                    condition = 'is available'
                })
                const lrFreqMatches = matchEntry(action.name, lrFreqRegex)
                lrFreqMatches.forEach(match => {
                    const uses = Number(match[2])
                    if (uses === 1) { freq = '1/day'; condition = 'is available' }
                    else if (uses === 2) { freq = '1/fight'; condition = 'is available' }
                    // Else remain "at will"
                })

                const areaMatches = action.entries.flatMap(entry => matchEntry(entry, areaRegex))
                let targets = 1
                areaMatches.forEach(match => { targets = 2 })

                if (actionDamage > 0) {
                    const newAction = {
                        id: crypto.randomUUID(),
                        name: action.name.replace(lrFreqRegex, '').replace(srFreqRegex, '').trim(),
                        type: 'atk',
                        actionSlot: 0,
                        freq,
                        condition,
                        dpr: actionDamage,
                        toHit,
                        target: 'enemy with most HP',
                        targets,
                    }

                    actions.push(newAction)

                    if (legendaryActions[newAction.name]) {
                        let actionName = action.name
                        if (legendaryActions[newAction.name] > 1) actionName += ` x${legendaryActions[newAction.name]}`

                        const LA = {
                            ...newAction,
                            id: crypto.randomUUID(),
                            name: actionName,
                            dpr: newAction.dpr * legendaryActions[newAction.name],
                            actionSlot: 2, 
                        }

                        actions.push(LA)
                    }
                }
            }
        })

        if (Object.keys(multiattack).length) {
            const damage = Object.entries(multiattack)
                .map(([attackName, attackCount]) => multiattackActions[attackName].actionDamage * attackCount)
                .reduce((a, b) => (a + b), 0)
            const toHit = Object.entries(multiattack)
                .map(([attackName]) => (multiattackActions[attackName].toHit || 0))
                .reduce((a, b) => Math.max(a, b), 0)

            const multiattackAction = {
                id: crypto.randomUUID(),
                name: Object.entries(multiattack)
                    .map(([attackName, attackCount]) => (attackCount == 1) ? attackName : `${attackName} x ${attackCount}`)
                    .join(' & '),
                type: 'atk',
                actionSlot: 0,
                freq: 'at will',
                condition: 'default',
                dpr: damage,
                toHit: toHit,
                target: 'enemy with most HP',
                targets: 1,
            }

            actions.push(multiattackAction)
        }
        
        return { id, mode, name, type, src, cr, hp, AC, actions, count: 1, }
    })

/*

const fileStart = `import { Creature } from "../model/model"

export const Monsters: Creature[] = `
fs.writeFileSync('./monsters.ts', fileStart + JSON.stringify(monsters, null, 2))

*/