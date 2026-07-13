'use client'

import clsx from 'clsx'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useSyncExternalStore } from 'react'
import styles from './styles.module.css'

const subscribe = () => () => {}
const getSnapshot = () => true
const getServerSnapshot = () => false

const useMounted = () => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

const themeOptions = [
  {
    value: 'system',
    label: 'Sistema',
    icon: Monitor,
  },
  {
    value: 'light',
    label: 'Claro',
    icon: Sun,
  },
  {
    value: 'dark',
    label: 'Escuro',
    icon: Moon,
  },
] as const

export const ThemeToggle = () => {
  const mounted = useMounted()
  const { theme, setTheme } = useTheme()

  return (
    <div
      className={styles.themeToggle}
      role='group'
      aria-label='Selecionar tema'
    >
      {themeOptions.map(({ value, label, icon: Icon }) => {
        const isActive = mounted && theme === value

        return (
          <button
            key={value}
            type='button'
            title={`Tema ${label}`}
            aria-label={`Selecionar tema ${label}`}
            aria-pressed={isActive}
            className={clsx(styles.themeButton, isActive && styles.active)}
            onClick={() => setTheme(value)}
          >
            <Icon className={styles.icon} aria-hidden='true' />
          </button>
        )
      })}
    </div>
  )
}
