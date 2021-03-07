import React from 'react'
import { motion } from "framer-motion"

import { useChallengesProvider } from '../contexts/ChallengesContext'

import { ExperienceBarContainer } from '../styles/components/ExperienceBar'

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useChallengesProvider();

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <ExperienceBarContainer>
      <span>0 xp</span>
      <div>
        <motion.div
          animate={{ width: `${percentToNextLevel}%` }}
        />

        <motion.span animate={{ left: `${percentToNextLevel}%` }} >{currentExperience} xp</motion.span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </ExperienceBarContainer>
  )
}
