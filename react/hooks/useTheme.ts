import { useState, useEffect } from 'react'

type Theme = 'dark' | 'light'

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('snt-theme') as Theme | null
    const preferred: Theme = window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'
    const initial = saved ?? preferred
    setThemeState(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setThemeState(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('snt-theme', next)
  }

  const setTheme = (t: Theme) => {
    setThemeState(t)
    document.documentElement.setAttribute('data-theme', t)
    localStorage.setItem('snt-theme', t)
  }

  return { theme, toggle, setTheme }
}

/*
  Uso:
  const { theme, toggle } = useTheme()

  <button onClick={toggle}>
    {theme === 'dark' ? 'Light mode' : 'Dark mode'}
  </button>
*/
