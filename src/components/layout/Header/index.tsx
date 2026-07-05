import Image from 'next/image'
import styles from './styles.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerInner} container`}>
        <Image
          src='/images/logo.png'
          alt='Logo Nexus'
          width={120}
          height={80}
          priority
          loading='eager'
          className='m-auto my-3'
        />
      </div>
    </header>
  )
}
