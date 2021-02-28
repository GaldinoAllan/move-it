import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/galdinoallan.png" alt="Allan Galdino" />
      <div>
        <strong>Allan Galdino</strong>
        <p>
          <img src="icons/level.svg" alt="green arrow up" />
          Level 1
        </p>
      </div>
    </div>
  )
}