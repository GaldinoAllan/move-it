import Head from 'next/head';

import styles from '../styles/pages/Landing.module.css'

import { signInWithGoogle } from '../firebase/firebaseConfig'

export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <h1>Landing</h1>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}