import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ThemeProvider } from '@/providers/theme/theme-provider'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import styles from './layout.module.css'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Nexus',
    default: 'Nexus',
  },
  description: 'Nexus',
}

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <body className={`${roboto.variable} ${styles.body}`}>
        <ThemeProvider>
          <Header />

          <main className={styles.main}>{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
