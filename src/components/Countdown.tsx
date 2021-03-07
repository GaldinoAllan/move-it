import { useCountdown } from '../contexts/CountdownContext';

import {
  CountdownContainer,
  CountdownButton,
  StopCountdownButton,
  FinishedCountdownButton
} from '../styles/components/Countdown'


export function Countdown() {
  const {
    hasFinished,
    isActive,
    minutes,
    startCountdown,
    resetCountdown,
    seconds,
  } = useCountdown();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');



  return (
    <div>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      {hasFinished ? (
        <FinishedCountdownButton disabled>
          Ciclo encerrado
        </FinishedCountdownButton>
      ) : (
        <>
          {!isActive ? (
            <CountdownButton type="button" onClick={startCountdown}>
              Iniciar um ciclo
            </CountdownButton>
          ) : (
            <StopCountdownButton type="button" onClick={resetCountdown}>
              Abandonar o ciclo
            </StopCountdownButton>
          )}
        </>
      )}
    </div>
  )
}
