import '../styles/global.css'

import { Sidebar } from '../components/Sidebar';

import styles from '../styles/pages/App.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.content}>
      <Sidebar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
