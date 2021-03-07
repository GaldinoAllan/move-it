import { useContext } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { ChallengesContext } from '../contexts/ChallengesContext'

import { ProfileContainer } from '../styles/components/Profile'

export function Profile() {
  const { level } = useContext(ChallengesContext)
  const { currentUser } = useAuth()

  return (
    <ProfileContainer>
      <img src={currentUser.photoURL} alt={currentUser.displayName} />
      <div>
        <strong>{currentUser.displayName}</strong>
        <p>
          <img src="icons/level.svg" alt="green arrow up" />
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  )
}