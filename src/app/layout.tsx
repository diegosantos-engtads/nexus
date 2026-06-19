import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
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
    <html lang="pt-BR" className={roboto.variable}>
      <body className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full">
        <header>Header</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  )
}
export default RootLayout
