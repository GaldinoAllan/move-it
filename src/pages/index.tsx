import Head from 'next/head';

import styles from '../styles/pages/Landing.module.css'

export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <h1>Landing</h1>
    </div>
  )
}