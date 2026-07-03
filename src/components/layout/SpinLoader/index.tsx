import styles from './styles.module.css'

export const SpinLoader = () => {
  return (
    <span className={styles.loader}>
      <span className={styles.loading}></span>
    </span>
  )
}
