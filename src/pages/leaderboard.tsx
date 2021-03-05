import Head from 'next/head'
import styles from '../styles/pages/Leaderboard.module.css'

function Leaderboard() {
  return (
    <div className={styles.leaderboardContainer}>
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>
      <h1>
        Leaderboard
      </h1>
    </div>
  )
}

export default Leaderboard