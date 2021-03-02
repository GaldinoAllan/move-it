import { useContext } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)
  const { currentUser } = useAuth()

  return (
    <div className={styles.profileContainer}>
      <img src={currentUser.photoURL} alt={currentUser.displayName} />
      <div>
        <strong>{currentUser.displayName}</strong>
        <p>
          <img src="icons/level.svg" alt="green arrow up" />
          Level {level}
        </p>
      </div>
    </div>
  )
}