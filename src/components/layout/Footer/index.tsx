import Image from 'next/image'
import styles from './styles.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerInner} container`}>
        <Image
          src='/images/logo.png'
          alt='Logo Nexus'
          width={240}
          height={89}
          loading='eager'
          className={styles.logo}
        />
      </div>
    </footer>
  )
}
