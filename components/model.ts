export type Team = Creature[]

export type Creature = {
    name: string,
    hp: number,
    count: number,
    dpr: number,
    toHit: number,
    AC: number,
    target: Target,
}

export type Target = 'enemy with least HP'
    | 'enemy with most HP'
    | 'enemy with highest DPR'
    | 'enemy with lowest AC'
    | 'enemy with highest AC'

export type Combattant = Omit<Creature, 'count'> & {maxHP:number}

export type Round = {
    players: Combattant[],
    monsters: Combattant[],
}

export type Encounter = {
    players: Combattant[],
    monsters: Team,
    playersSurprised: boolean,
    monstersSurprised: boolean,
    simulationResults: Round[],
}

export function clone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj))
}

export function teamToCombattants(team: Team): Combattant[] {
    return team.flatMap(creature => {
        return Array.from({length: creature.count}, (_, index) => ({
            name: (creature.count === 1) ? creature.name : `${creature.name} ${index + 1}`,
            maxHP: creature.hp,
            hp: creature.hp,
            dpr: creature.dpr,
            toHit: creature.toHit,
            AC: creature.AC,
            target: creature.target,
        }))
    })
}

export function runSimulation(encounter: Encounter) {
    let players = encounter.players
    let monsters = teamToCombattants(encounter.monsters)

    let playersSurprised = encounter.playersSurprised
    let monstersSurprised = encounter.monstersSurprised
    const result: Round[] = []
    do {
        // This function returns an updated clone of the defenderTeam with its hit points decreased by the attackers
        const attack = (attackerTeam: Combattant[], defenderTeam: Combattant[]) => {
            const result = clone(defenderTeam)
            
            attackerTeam.forEach(attacker => {
                if (attacker.hp > 0) {
                    // A creature's DPR can be spread between different targets, to represent multiattacks & AOE effects
                    let remainingDPR = attacker.dpr

                    while (remainingDPR > 0) {
                        const targettable = result.filter(defender => (defender.hp > 0))
                        if (targettable.length) {
                            const target = (attacker.target === 'enemy with least HP') ? targettable.reduce((prev, cur) => ((prev.hp < cur.hp) ? prev : cur))
                                : (attacker.target === 'enemy with most HP') ? targettable.reduce((prev, cur) => ((prev.hp > cur.hp) ? prev : cur))
                                : (attacker.target === 'enemy with highest DPR') ? targettable.reduce((prev, cur) => ((prev.dpr > cur.dpr) ? prev : cur))
                                : (attacker.target === 'enemy with highest AC') ? targettable.reduce((prev, cur) => ((prev.AC > cur.AC) ? prev : cur))
                                : (attacker.target === 'enemy with lowest AC') ? targettable.reduce((prev, cur) => ((prev.AC < cur.AC) ? prev : cur))
                                : null
        
                            if (target) {
                                const hitChance = Math.min(1, Math.max(0, (11 + attacker.toHit - (target.AC - 10)) / 20))
                                console.log(hitChance)
                                const tmp = remainingDPR
                                remainingDPR -= target.hp
                                target.hp -= tmp * hitChance
                            } else break
                        } else break
                    }
                }
            })

            return result
        }
        
        let newMonsters = clone(monsters)
        if (playersSurprised) {
            playersSurprised = false
        } else {
            newMonsters = attack(players, monsters)
        }

        let newPlayers = clone(players)
        if (monstersSurprised) {
            monstersSurprised = false
        } else {
            newPlayers = attack(monsters, players)
        }

        result.push({players, monsters})

        players = newPlayers
        monsters = newMonsters

        // The combat lasts until one side is defeated, or there have been too many rounds (avoiding infinite loops)
    } while (players.find(player => (player.hp > 0)) && monsters.find(monster => (monster.hp > 0)) && (result.length < 20))
    
    // Adding the end state is useful for the user to know the outcome of the combat
    result.push({players, monsters});

    return result
}