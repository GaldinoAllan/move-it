import Link from 'next/link'
import { FiAward, FiHome } from 'react-icons/fi';

import styles from '../styles/components/Sidebar.module.css'

export function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.logoContainer}>
        <img src="moveit-logo.svg" alt="logo move it" />
      </div>
      <div className={styles.navContainer}>
        <Link href='/'>
          <FiHome size={32} />
        </Link>
        <Link href='/leaderboard'>
          <FiAward size={32} />
        </Link>
      </div>
    </div >
  )
}