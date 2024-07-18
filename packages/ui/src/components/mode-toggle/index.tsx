'use client'

import { useTheme } from '@wontory/lib/next-themes'

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const handleModeToggle = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      type="button"
      className="shadow-button text-background rounded-xs hidden bg-neutral-700 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-neutral-900 md:block dark:bg-neutral-200 dark:hover:bg-white"
      onClick={handleModeToggle}
    >
      {resolvedTheme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
