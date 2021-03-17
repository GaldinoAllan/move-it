import { useEffect, useState } from 'react'

import { getUsers } from '../firebase/firebaseConfig'

import {
  LeaderboardTableContainer,
  TableHeader,
} from '../styles/components/LeaderboardTable'
import { LeaderboardItem } from './LeaderboardItem'

interface IUsers {
  displayName: string;
  photoURL: string;
  level: number;
  totalExperience: number;
  challengesCompleted: number;
}

export function LeaderboardTable() {
  const [users, setUsers] = useState<IUsers[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUsers().then((users) => {
      const sortedUsers = users.sort((a, b) => (
        (a.totalExperience < b.totalExperience) ? 1 : -1
      ))

      setUsers(sortedUsers as IUsers[])
    })
    setLoading(false)
  }, [])

  return (
    <LeaderboardTableContainer>
      {/* <input type="text" placeholder="Search" /> */}
      <TableHeader>
        <span>POSITION</span>
        <span>USER</span>
        <span>CHALLENGES</span>
        <span>EXPERIENCE</span>
      </TableHeader>
      {
        loading
          ? <h1>Loading...</h1>
          : (
            <>
              {
                users.map((user, idx) => (
                  <LeaderboardItem
                    key={idx}
                    user={user}
                    position={idx + 1}
                  />
                ))
              }
            </>
          )
      }
    </LeaderboardTableContainer>
  )
}