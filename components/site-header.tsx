'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

import { ModeToggle } from '@/components/mode-toggle'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/libs/utils'

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div
        className={cn(
          'container flex h-14 items-center transition-all',
          pathname.startsWith('/articles') && pathname !== '/articles'
            ? 'max-w-screen-md'
            : 'max-w-screen-xl',
        )}
      >
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">블로그</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm"></nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Link
            href="https://github.com/wontory"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                }),
                'w-9 px-0',
              )}
            >
              <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
