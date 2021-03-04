import Link from 'next/link'
import { FiAward, FiHome, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../contexts/AuthContext';

import { auth } from '../firebase/firebaseConfig';

import styles from '../styles/components/Sidebar.module.css'

export function Sidebar() {
  const { currentUser } = useAuth()

  const display = currentUser ? '' : 'none'

  return (
    <div className={styles.sidebarContainer} style={{ display: display }}>
      <div className={styles.logoContainer}>
        <Link href='/'>
          <a>
            <img src="moveit-logo.svg" alt="logo move it" />
          </a>
        </Link>
      </div>
      <div className={styles.navContainer}>
        <Link href='/'>
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
      <div className={styles.logoutContainer} onClick={() => auth.signOut()}>
        <FiLogOut size={32} />
      </div>
    </div >
  )
}