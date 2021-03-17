import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Router from 'next/router'
import { LeaderboardTable } from '../components/LeaderboardTable'

import { Sidebar } from '../components/Sidebar'

import { LeaderboardContainer } from '../styles/pages/Leaderboard'

export default function Leaderboard({ userFormatted }) {
  return (
    <LeaderboardContainer>
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>
      <Sidebar />
      <h1>
        Leaderboard
      </h1>
      <LeaderboardTable />
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