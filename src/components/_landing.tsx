import Head from 'next/head';

import { signInWithGoogle } from '../firebase/firebaseConfig'
import { FiMoon, FiSun } from "react-icons/fi";

import {
  LandingContainer,
  LeftSide,
  RightSide,
  TitleContainer,
  LoginWithGoogleButton
} from '../styles/pages/Landing'

import { useTheme } from '../contexts/ThemeContext';

export default function Landing() {
  const { theme, ToggleTheme } = useTheme();

  function handleToggleTheme() {
    ToggleTheme()
  }

  return (
    <LandingContainer>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <section>
        <LeftSide>
          <button type="button" onClick={handleToggleTheme}>
            {theme.title === 'light' ? <FiMoon size={30} /> : <FiSun size={30} />}
          </button>
        </LeftSide>
        <RightSide>
          <img src='white-logo-full.svg' alt="Logo" />

          <div>
            <strong>Bem-vindo</strong>
            <TitleContainer>
              <img src="dextra-logo.png" alt="Logo Dextra" />
              <span>Faça login com a sua conta da Dextra</span>
            </TitleContainer>

            <LoginWithGoogleButton onClick={signInWithGoogle}>
              <img src="google.png" alt="google logo" />
              <span>Sign in with Google</span>
            </LoginWithGoogleButton>
          </div>
        </RightSide>
      </section>
    </LandingContainer>
  )
}