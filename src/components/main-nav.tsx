'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/libs/utils'

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <span className="inline-block">
          <strong>won</strong>tech
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/article"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/article')
              ? 'text-foreground'
              : 'text-foreground/60',
          )}
        >
          블로그
        </Link>
        <Link
          href="/project"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/project')
              ? 'text-foreground'
              : 'text-foreground/60',
          )}
        >
          프로젝트
        </Link>
      </nav>
    </div>
  )
}
