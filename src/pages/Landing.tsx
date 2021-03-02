import Head from 'next/head';

import landingStyles from '../styles/pages/Landing.module.css'

import { signInWithGoogle } from '../firebase/firebaseConfig'

export function Landing() {
  return (
    <div className={landingStyles.landingContainer}>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <h1>Landing</h1>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}