const crypto = require('crypto')
const fs = require('fs')

const fileNames = ['./bestiary-mm.json', './bestiary-mpmm.json']

const monstersFilter = [
    'Death Knight',
    'Aboleth',
]

fileNames.flatMap(fileName => {
        const buffer = fs.readFileSync(fileName)
        const json = buffer.toString()
        const obj = JSON.parse(json)
        return obj.monster
    })
    //.filter(monster => monstersFilter.includes(monster.name))
    .forEach(monster => {
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

        monster.action && monster.action.forEach(action => {
            if (action.name === "Multiattack") {
                // TODO
            } else {
                const dmgRegex = /{@damage (\d+)d(\d+)(\+(\d+))?}/g
                const dmgMatches = action.entries.flatMap(entry => matchEntry(entry, dmgRegex))
                let actionDamage = 0
                dmgMatches.forEach(match => {
                    actionDamage += Number(match[1]) * (1 + Number(match[2])) / 2 + (match[4] ? Number(match[4]) : 0)
                })
                
                const hitRegex = /{@hit (\d+)}/g
                const toHitMatches = action.entries.flatMap(entry => matchEntry(entry, hitRegex))
                let maxToHit = 0
                toHitMatches.forEach(match => {
                    maxToHit = Math.max(maxToHit, Number(match[1]))
                })
                
                const dcRegex = /{@dc (\d+)}/g
                const dcMatches = action.entries.flatMap(entry => matchEntry(entry, dcRegex))
                let maxDC = 0
                dcMatches.forEach(match => {
                    maxDC = Math.max(maxDC, Number(match[1]))
                })

                const rechargeRegex = /({@recharge})|({@recharge \d+(-\d+)?})/g
                const isRecharge = !![...(action.name.matchAll(rechargeRegex) || [])].length

                const srFreqRegex = /({@recharge})|({@recharge \d+(-\d+)?})|(\(Recharges after a Short or Long Rest\))/g
                const lrFreqRegex = /(\((\d+)\/Day\))/g
                const actionName = action.name.replace(lrFreqRegex, '').replace(srFreqRegex, '').trim()

                const half = action.entries.flatMap(entry => matchEntry(entry, /half/g))

                if ((actionDamage > 0) && isRecharge) {
                    console.log(`{ monster: "${monster.name}", action: "${action.name}" },`)
                }
            }
        })
    })
