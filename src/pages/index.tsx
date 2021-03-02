import { GetServerSideProps } from 'next'

import { useAuth } from '../contexts/AuthContext';

import Home from './home'
import { Landing } from './Landing';



interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function App({
  level,
  currentExperience,
  challengesCompleted
}: HomeProps) {
  const { currentUser } = useAuth()

  return (
    <>
      {
        !currentUser
          ? <Landing />
          : <Home
            level={level}
            currentExperience={currentExperience}
            challengesCompleted={challengesCompleted}
          />
      }
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
