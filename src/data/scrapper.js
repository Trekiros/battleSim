const fs = require('fs')

const buffer = fs.readFileSync('./bestiary-mm.json')
const json = buffer.toString()
const obj = JSON.parse(json)

const monstersFilter = [
    'Death Knight'
]

const monsters = obj.monster
    .filter(monster => monstersFilter.includes(monster.name))
    .map(monster => {
        const src = `${monster.source} p.${monster.page}`
        const name = monster.name
        const ac = monster.ac[0].ac
        const hp = monster.hp.average
        const cr = Number(monster.cr)
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
                actionDamage *= multiattack[action.name] || 1

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

                const srFreqMatches = matchEntry(action.name, srFreqRegex)
                let freq = 'at will'
                srFreqMatches.forEach(match => {
                    freq = '1/fight'
                })
                const lrFreqMatches = matchEntry(action.name, lrFreqRegex)
                lrFreqMatches.forEach(match => {
                    const uses = Number(match[2])
                    if (uses === 1) freq = '1/day'
                    else if (uses === 2) freq = '1/fight'
                    // Else remain "at will"
                })

                const areaMatches = action.entries.flatMap(entry => matchEntry(entry, areaRegex))
                let targets = 1
                areaMatches.forEach(match => {
                    targets = 2
                })

                if (actionDamage > 0) {
                    actions.push({
                        name: action.name,
                        actionSlot: 0,
                        freq,
                        dpr: actionDamage,
                        toHit,
                        target: 'enemy with most HP',
                        targets,
                    })
                }
            }
        })

        return { name, src, cr, hp, ac, actions }
    })

console.log(JSON.stringify(monsters, null, 2))