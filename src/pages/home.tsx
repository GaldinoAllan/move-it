import Head from 'next/head';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';
import { Sidebar } from '../components/Sidebar';

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import {
  HomeContainer,
  LeftSide,
  RightSide,
} from '../styles/pages/Home'

export default function Home() {
  return (
    <ChallengesProvider>
      <HomeContainer>

        <Head>
          <title>Home | move.it</title>
        </Head>

        <Sidebar />

        <ExperienceBar />
        <CountdownProvider>
          <section>
            <LeftSide>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </LeftSide>
            <RightSide>
              <ChallengeBox />
            </RightSide>
          </section>
        </CountdownProvider>
      </HomeContainer>
    </ChallengesProvider>
  )
}