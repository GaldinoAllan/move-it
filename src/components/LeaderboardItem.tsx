import { Profile } from './Profile'

import {
  LeaderboardItemContainer,
  Position,
  ProfileContainer,
  BlueText,
} from '../styles/components/LeaderboardItem'

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

interface ILeaderboardItemProps {
  user: IUsers
  position: number;
}

export const LeaderboardItem = ({ user, position }: ILeaderboardItemProps) => {
  return (
    <LeaderboardItemContainer>
      <Position>{position}</Position>
      <ProfileContainer>
        <Profile
          photoURL={user.photoURL}
          displayName={user.displayName}
          level={user.level}
        />
      </ProfileContainer>
      <p>
        <BlueText>{user.challengesCompleted}</BlueText> completed
      </p>
      <p>
        <BlueText>{user.currentExperience}</BlueText> xp
      </p>
    </LeaderboardItemContainer>
  )
}