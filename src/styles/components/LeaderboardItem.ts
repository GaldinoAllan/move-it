import styled from 'styled-components'

export const LeaderboardItemContainer = styled.div`
  width: 100%; 
  height: 96px;

  display: grid;
  grid-template-columns: 0.6fr 4fr 1fr 1fr;
  gap: 1rem;
  align-items: center;

  background: ${({ theme }) => theme.colors.backgroundLight};

  margin: 4px 0;
  border-radius: 5px;
`

export const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;

  border-right: 4px solid ${({ theme }) => theme.colors.background};
  height: 100%;
`

export const ProfileContainer = styled.div``

export const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.blue};
  align-self: center;
`