import Head from 'next/head';

import { signInWithGoogle } from '../firebase/firebaseConfig'

import styles from '../styles/pages/Landing.module.css'

export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <div className={styles.landingLeftContainer}>
        <img src="big-logo.png" alt="Move it logo" />
      </div>
      <div className={styles.landingRightContainer}>
        <img src="logo-full-white.png" alt="" />
        <div className={styles.rightContent}>
          <h1>Bem-vindo</h1>
          <p>Faça login com a sua conta da Dextra</p>
          <button
            className={styles.singInWithGoogleButton}
            onClick={signInWithGoogle}
          >
            <img src="google.png" alt="google logo" />
            <p>Sign In With Google</p>
          </button>
        </div>
      </div>
    </div>
  )
}