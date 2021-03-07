import { useChallengesProvider } from '../contexts/ChallengesContext'

import { CompletedChallengesContainer } from '../styles/components/CompletedChallenges'

export function CompletedChallenges() {
  const { challengesCompleted } = useChallengesProvider()

  return (
    <CompletedChallengesContainer>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </CompletedChallengesContainer>
  )
}