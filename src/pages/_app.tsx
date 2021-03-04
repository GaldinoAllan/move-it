import { Sidebar } from '../components/Sidebar';

import { AuthProvider } from '../contexts/AuthContext';

import styles from '../styles/pages/App.module.css'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className={styles.content}>
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  )
}

export default MyApp
