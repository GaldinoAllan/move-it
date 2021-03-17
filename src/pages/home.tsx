import Head from 'next/head';
import Router from 'next/router';
import { GetServerSideProps } from 'next';

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

interface IUserProps {
  uid: string;
  displayName: string;
  photoURL: string;
  level: number;
  currentExperience: number;
  totalExperience: number;
  challengesCompleted: number;
}

export default function Home(props: IUserProps) {
  return (
    <ChallengesProvider {...props}>
      <HomeContainer>

        <Head>
          <title>Home | move.it</title>
        </Head>

        <Sidebar />

        <ExperienceBar />
        <CountdownProvider>
          <section>
            <LeftSide>
              <Profile {...props} />
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { user } = ctx.req.cookies;

  if (!user) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, { Location: '/' })
      ctx.res.end()
    } else {
      Router.push('/')
    }
    return {
      props: {}
    }
  } else {
    const userFormatted = JSON.parse(user)

    return {
      props: {
        ...userFormatted
      }
    }
  };
}