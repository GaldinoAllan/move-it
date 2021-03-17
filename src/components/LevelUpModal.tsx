import { motion } from "framer-motion"

import { useChallengesProvider } from '../contexts/ChallengesContext'

import { Overlay, Container } from '../styles/components/LevelUpModal'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useChallengesProvider()

  return (
    <Overlay onClick={closeLevelUpModal}>
      <motion.div animate={{ scale: [0.8, 1.1, 1] }} transition={{ duration: 0.9 }} >
        <Container>
          <header>{level}</header>
          <strong>Parabéns</strong>
          <p>Você alcançou um novo level.</p>

          <button type="button" onClick={closeLevelUpModal}>
            <img src="/icons/close.svg" alt="Fechar modal" />
          </button>
        </Container>
      </motion.div>
    </Overlay>
  )
}
