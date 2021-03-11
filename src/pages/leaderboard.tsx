import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Router from 'next/router'

import { Sidebar } from '../components/Sidebar'

import { LeaderboardContainer } from '../styles/pages/Leaderboard'

export default function Leaderboard(props) {
  return (
    <LeaderboardContainer>
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>
      <Sidebar />
      <h1>
        Leaderboard
      </h1>
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
  } else {
    const userFormatted = JSON.parse(user)

    return {
      props: {
        ...userFormatted
      }
    }
  };
}