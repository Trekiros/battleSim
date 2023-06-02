import Head from 'next/head'
import React from 'react'
import RGPD from '../components/utils/rgpd'
import Logo from '../components/utils/logo'
import Simulation from '../components/simulation/simulation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Battle Sim</title>
        <meta name="description" content="Build balanced encounters!" />
        <link rel="icon" href="/ico.ico" />
      </Head>

      <main>
        <Simulation />
        <RGPD />
        <Logo />
      </main>
    </>
  )
}
