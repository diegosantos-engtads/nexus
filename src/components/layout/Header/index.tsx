import { ThemeToggle } from '@/providers/theme/theme-toggle'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerInner} container`}>
        <Link
          href='/'
          className={styles.logoLink}
          aria-label='Ir para a página inicial do Nexus'
        >
          <Image
            src='/images/logo.png'
            alt='Logo Nexus'
            width={240}
            height={89}
            loading='eager'
            className={styles.logo}
          />
        </Link>

        <ThemeToggle />
      </div>
    </header>
  )
}
