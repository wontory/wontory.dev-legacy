import { useStore } from '@nanostores/react'
import { Moon, Sun } from 'lucide-react'

import { themeAtom } from '@/stores/theme'
import { Button } from '@/components/ui/button'

export function ModeToggle({ className, ...props }: { className?: string }) {
  const theme = useStore(themeAtom)

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => themeAtom.set(theme === 'dark' ? 'light' : 'dark')}
      className={className}
      {...props}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
