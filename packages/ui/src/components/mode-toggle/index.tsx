'use client'

import { MoonIcon, SunIcon } from 'lucide-react'

import { useTheme } from '@wontory/lib/next-themes'

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const handleModeToggle = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      type="button"
      className="hidden rounded-xs bg-neutral-700 px-3 py-2 font-medium text-background text-sm shadow-button transition-colors duration-200 hover:bg-neutral-900 md:flex md:items-center md:justify-center dark:bg-neutral-200 dark:hover:bg-white"
      onClick={handleModeToggle}
    >
      <SunIcon className="dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle Mode</span>
    </button>
  )
}
