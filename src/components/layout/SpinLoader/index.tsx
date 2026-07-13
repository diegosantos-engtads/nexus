import styles from './styles.module.css'

export const SpinLoader = () => {
  return (
    <span
      className={styles.loader}
      role='status'
      aria-label='Carregando conteúdo'
    >
      <span className={styles.loading} aria-hidden='true' />
    </span>
  )
}
