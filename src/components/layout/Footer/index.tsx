import Image from 'next/image'
import styles from './styles.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <Image
          src='/images/logo.png'
          alt='Logo Nexus'
          width={120}
          height={120}
          loading='lazy'
          className='m-4'
        />
      </div>
    </footer>
  )
}
