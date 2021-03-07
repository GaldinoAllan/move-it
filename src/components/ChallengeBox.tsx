import React from 'react'
import { useChallengesProvider } from '../contexts/ChallengesContext';
import { useCountdown } from '../contexts/CountdownContext';

import {
  ChallengeBoxContainer,
  ChallengeActive,
  ChallengeNotActive,
  FailedButton,
  SucceededButton
} from '../styles/components/ChallengeBox'

export function ChallengeBox() {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge
  } = useChallengesProvider();

  const { resetCountdown } = useCountdown();

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountdown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <ChallengeBoxContainer>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <FailedButton
              type="button"
              onClick={handleChallengeFailed}
            >
              Falhei
            </FailedButton>
            <SucceededButton
              type="button"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </SucceededButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>

          <p>
            <img src="icons/level-up.svg" alt="" />
            Avance de level completando desafios.
          </p>
        </ChallengeNotActive>
      )}
    </ChallengeBoxContainer>
  )
}
