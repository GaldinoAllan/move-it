import Link from 'next/link'
import { useRouter } from 'next/router';

import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

import { FiSun, FiMoon, FiHome, FiAward, FiLogOut } from "react-icons/fi";

import { Container } from '../styles/components/Sidebar'

export function Sidebar() {
  const { route } = useRouter();

  const { ToggleTheme, theme } = useTheme();
  const { signOut } = useAuth()

  function handleClick() {
    ToggleTheme()
  }

  return (
    <Container>
      <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.2415 0H32.6816L23.9964 42H13.5563L22.2415 0Z" />
        <path d="M37.56 0H48L41.2331 32.9078H30.7905L37.56 0Z" />
        <path d="M6.76946 0H17.2095L10.4425 32.9078H0L6.76946 0Z" />
      </svg>
      <nav>
        <Link href='/home'>
          <a className={route.includes('home') ? 'active' : undefined}>
            <FiHome size={32} />
          </a>
        </Link>
        <Link href='/leaderboard'>
          <a className={route.includes('leaderboard') ? 'active' : undefined}>
            <FiAward size={32} />
          </a>
        </Link>
        <button type="button" onClick={handleClick}>
          {theme.title === 'light' ? <FiMoon size={30} /> : <FiSun size={30} />}
        </button>
      </nav>
      <div className='logoutContainer' onClick={signOut}>
        <FiLogOut size={32} />
      </div>
    </Container>
  )
}