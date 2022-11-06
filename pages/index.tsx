import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Team } from '../components/model'
import Simulation from '../components/simulation/simulation'
import TeamsForm from '../components/teamsForm/teamsForm'

export default function Home() {
  const [players, setPlayersModel] = useState([] as Team)
  const [monsters, setMonstersModel] = useState([] as Team)

  function setPlayers(newValue: Team) {
    setPlayersModel(newValue)
    sessionStorage.setItem('players', JSON.stringify(newValue))
  }
  
  function setMonsters(newValue: Team) {
    setMonstersModel(newValue)
    sessionStorage.setItem('monsters', JSON.stringify(newValue))
  }

  // On page load, recover session details, or provide default
  useEffect(() => {
    const initialPlayers = sessionStorage.getItem('players')
    const initialMonsters = sessionStorage.getItem('monsters')

    setPlayers(
      initialPlayers ? JSON.parse(initialPlayers) 
      : [ { name: 'PC', count: 5, hp: 20, dpr: 10, toHit: 6, AC: 15, target: 'enemy with highest DPR' } ]
    )

    setMonsters(
      initialMonsters ? JSON.parse(initialMonsters) 
      : [
        { name: 'Boss', count: 1, hp: 80, dpr: 15, toHit: 8, AC: 16, target: 'enemy with most HP' },
        { name: 'Minion', count: 6, hp: 10, dpr: 5, toHit: 4, AC: 13, target: 'enemy with most HP' },
      ]
    )
  }, [])

  function onTeamsChanged(newPlayers: Team, newMonsters: Team) {
    setPlayers(newPlayers)
    setMonsters(newMonsters)
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
            players={players}
            monsters={monsters}
            onTeamsChanged={onTeamsChanged} />

          <Simulation players={players} monsters={monsters} />
        </div>
      </main>
    </React.Fragment>
  )
}
