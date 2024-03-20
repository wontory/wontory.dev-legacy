import { persistentAtom } from '@nanostores/persistent'
import { onMount } from 'nanostores'

const THEME_MAP = {
  light: 'light',
  dark: 'dark',
  system: undefined,
}

type ThemeKey = keyof typeof THEME_MAP
type ThemeValue = (typeof THEME_MAP)[ThemeKey]

const themeAtom = persistentAtom<ThemeValue>('theme', THEME_MAP.system)

const subscribe = () => {
  themeAtom.subscribe((theme) => {
    const isDark = theme
      ? theme === THEME_MAP.dark
      : window.matchMedia('(prefers-color-scheme: dark)').matches

    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  })
}

if (typeof window !== 'undefined') {
  onMount(themeAtom, subscribe)
}

export { THEME_MAP, themeAtom }
