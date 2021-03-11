import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Cookies from 'js-cookie';

import { FiMoon, FiSun } from "react-icons/fi";

import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

import {
  LandingContainer,
  LeftSide,
  RightSide,
  TitleContainer,
  LoginWithGoogleButton
} from '../styles/pages/Landing'


export default function App() {
  const { theme, ToggleTheme } = useTheme();
  const { signIn } = useAuth()
  const route = useRouter();

  const hasUser = !!Cookies.get('user')

  useEffect(() => {
    hasUser && route.push('/home')
  }, [])

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

            <LoginWithGoogleButton onClick={signIn}>
              <img src="google.png" alt="google logo" />
              <span>Sign in with Dextra</span>
            </LoginWithGoogleButton>
          </div>
        </RightSide>
      </section>
    </LandingContainer>
  )
}
