import { ProfileContainer } from '../styles/components/Profile'

interface IProfileProps {
  displayName: string
  level: number
  photoURL: string
}

export function Profile({ displayName, level, photoURL }: IProfileProps) {
  return (
    <ProfileContainer>
      <img src={photoURL} alt={displayName} />
      <div>
        <strong>{displayName}</strong>
        <p>
          <img src="icons/level.svg" alt="green arrow up" />
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  )
}