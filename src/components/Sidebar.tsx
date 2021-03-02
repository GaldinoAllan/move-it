import Link from 'next/link'
import { FiAward, FiHome, FiLogOut } from 'react-icons/fi';

import styles from '../styles/components/Sidebar.module.css'

export function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.logoContainer}>
        <Link href='/'>
          <img src="moveit-logo.svg" alt="logo move it" />
        </Link>
      </div>
      <div className={styles.navContainer}>
        <Link href='/home'>
          <a>
            <FiHome size={32} />
          </a>
        </Link>
        <Link href='/leaderboard'>
          <a>
            <FiAward size={32} />
          </a>
        </Link>
      </div>
      <div className={styles.logoutContainer}>
        <Link href='/'>
          <FiLogOut size={32} />
        </Link>
      </div>
    </div >
  )
}