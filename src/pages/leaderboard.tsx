import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Router from 'next/router'
import { useEffect, useState } from 'react'

import { Sidebar } from '../components/Sidebar'
import { getUsers } from '../firebase/firebaseConfig'

import { LeaderboardContainer } from '../styles/pages/Leaderboard'

interface IUsers {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  createdAt: Date;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Leaderboard({ userFormatted }) {
  const [users, setUsers] = useState<IUsers[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users as IUsers[])
    })
    setLoading(false)
  }, [])

  return (
    <LeaderboardContainer>
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>
      <Sidebar />
      <h1>
        Leaderboard
      </h1>
      {
        loading
          ? <h1>Loading...</h1>
          : (
            <>
              {
                users.map(user => (
                  <h1>{user.displayName}</h1>
                ))
              }
            </>
          )
      }
    </LeaderboardContainer>
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
  }

  const userFormatted = JSON.parse(user)

  return {
    props: {
      ...userFormatted
    }
  }
}