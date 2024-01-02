'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from '@/components/mode-toggle'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div
        className={cn(
          'container flex h-14 items-center duration-200',
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
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Link
            href="https://github.com/wontory"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  variant: 'outline',
                }),
                'w-9 px-0',
              )}
            >
              G<span className="sr-only">GitHub</span>
            </div>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
