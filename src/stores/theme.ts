import { persistentAtom } from '@nanostores/persistent'
import { onMount } from 'nanostores'

const themeAtom = persistentAtom<'light' | 'dark'>('theme', undefined)

const subscribe = () => {
  themeAtom.subscribe((theme) => {
    const isDark = theme
      ? theme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches

    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  })
}

if (typeof window !== 'undefined') onMount(themeAtom, subscribe)

export { themeAtom }
