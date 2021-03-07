import Head from 'next/head'
import { Sidebar } from '../components/Sidebar'

import { LeaderboardContainer } from '../styles/pages/Leaderboard'

function Leaderboard() {
  return (
    <LeaderboardContainer>
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>
      <Sidebar />
      <h1>
        Leaderboard
      </h1>
    </LeaderboardContainer>
  )
}

export default Leaderboard