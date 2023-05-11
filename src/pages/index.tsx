import Head from 'next/head'
import React from 'react'
import RGPD from '../components/rgpd'
import Logo from '../components/logo'
import Simulation from '../components/simulation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Battle Sim</title>
        <meta name="description" content="Build balanced encounters!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Simulation />
        <RGPD />
        <Logo />
      </main>
    </>
  )
}

/*export default function Home() {
  const [players, setPlayersModel] = useState([] as Team)
  const [encounters, setEncountersModel] = useState([] as Encounter[])
  const [useCookies, setUseCookies] = useState(undefined as boolean | undefined)
  
  // Whenever the simulation parameters change, re-run the simulation then save the results
  function onTeamsChanged(players: Team, encounters: Encounter[]) {
    if (encounters.length) {
      encounters[0].players = teamToCombattants(players)

      for (let i = 0 ; i < encounters.length ; i++) {
        const encounter = encounters[i]
        const result = runSimulation(encounter)
        encounter.simulationResults = result
        
        const nextEncounter = (i + 1 < encounters.length) ? encounters[i+1] : null
        if (nextEncounter) {
          const playersState = result.length ? result[result.length - 1].players : encounter.players
          nextEncounter.players = playersState
        }
      }
    }

    setPlayersModel(players)
    setEncountersModel(encounters)

    if (useCookies) {
      localStorage.setItem('players', JSON.stringify(players))
      localStorage.setItem('encounters', JSON.stringify(encounters.map(({monsters}) => ({monsters}))))
    }
  }

  // On page load, recover session details, or provide default example
  useEffect(() => {
    const savedPlayers = localStorage.getItem('players')
    const savedEncounters = localStorage.getItem('encounters')

    if (savedPlayers || savedEncounters) {
      setUseCookies(true)
    }

    const players: Team = savedPlayers ? JSON.parse(savedPlayers)
      : [ { name: 'PC', count: 5, hp: 30, dpr: 10, toHit: 6, AC: 15, target: 'enemy with highest DPR' } ]
      
    let encounters: Encounter[] = savedEncounters ? JSON.parse(savedEncounters) : []
    if (!encounters.length) {
      encounters = [
        {
          players: [], 
          simulationResults: [], 
          monsters: [
            { name: 'Boss', count: 1, hp: 80, dpr: 15, toHit: 8, AC: 16, target: 'enemy with most HP' },
            { name: 'Minion', count: 6, hp: 10, dpr: 5, toHit: 4, AC: 13, target: 'enemy with most HP' },
          ],
          playersSurprised: false,
          monstersSurprised: false,
        }
      ]
    }

    onTeamsChanged(players, encounters)
  }, [])

  function onMonstersChanged(encounterIndex: number, newMonsters: Team) {
    const encountersClone = clone(encounters)
    encountersClone[encounterIndex].monsters = newMonsters
    onTeamsChanged(players, encountersClone)
  }

  function onEncounterAdded() {
    const encountersClone = clone(encounters)
    encountersClone.push({
      monsters: [], 
      players: [], 
      simulationResults: [], 
      playersSurprised: false, 
      monstersSurprised: false
    })
    onTeamsChanged(players, encountersClone)
  }

  function onEncounterRemoved(encounterIndex: number) {
    const encountersClone = clone(encounters)
    encountersClone.splice(encounterIndex, 1)
    onTeamsChanged(players, encountersClone)
  }

  function onSurprisedChanged(encounterIndex: number, args: {playersSurprised?: boolean, monstersSurprised?: boolean}) {
	const encountersClone = clone(encounters)
	if (args.playersSurprised !== undefined) encountersClone[encounterIndex].playersSurprised = args.playersSurprised
	if (args.monstersSurprised !== undefined) encountersClone[encounterIndex].monstersSurprised = args.monstersSurprised
	onTeamsChanged(players, encountersClone)
  }

  return (
    <React.Fragment>
      <Head>
        <title>Battle Sim</title>
        <meta name="description" content="Build balanced encounters!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="content">
          <h1>Encounter Simulator</h1>
          
          <TeamsForm
			playersTeam={players}
			monsters={encounters.length ? encounters[0].monsters : []}
			onMonstersChanged={(newMonsters) => onMonstersChanged(0, newMonsters)} 
			onPlayersChanged={(newPlayers) => onTeamsChanged(newPlayers, encounters)}
			playersSurprised={encounters.length ? encounters[0].playersSurprised : false}
			togglePlayersSurprised={() => onSurprisedChanged(0, {playersSurprised: !encounters[0].playersSurprised})}
			monstersSurprised={encounters.length ? encounters[0].monstersSurprised : false}
			toggleMonstersSurprised={() => onSurprisedChanged(0, {monstersSurprised: !encounters[0].monstersSurprised})}
		  />

          {encounters.map((encounter, index) => (
            <React.Fragment>
              { (index !== 0) && (
                <TeamsForm 
                  onEncounterRemoved={() => onEncounterRemoved(index)}
                  playersState={encounter.players}
                  monsters={encounter.monsters}
                  onMonstersChanged={(newMonsters) => onMonstersChanged(index, newMonsters)} 
				  playersSurprised={encounters[index].playersSurprised}
				  togglePlayersSurprised={() => onSurprisedChanged(index, {playersSurprised: !encounters[index].playersSurprised})}
				  monstersSurprised={encounters[index].monstersSurprised}
				  toggleMonstersSurprised={() => onSurprisedChanged(index, {monstersSurprised: !encounters[index].monstersSurprised})}
				/>
              )}
    
              <Simulation rounds={encounter.simulationResults} />
            </React.Fragment>
          ))}


          <button className={styles.encounter} onClick={onEncounterAdded}>
            <div className={styles.text}>Add&nbsp;Encounter</div>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </main>

      <div className={`${styles.rgpd} ${(useCookies === undefined) ? styles.visible : ''}`}>
        Do you want to use cookies to save your encounters for the next time you use this website?
        <div className={styles.buttons}>
          <button onClick={() => setUseCookies(true)}>Yes</button>
          <button onClick={() => setUseCookies(false)}>No</button>
        </div>
      </div>
    </React.Fragment>
  )
}
*/