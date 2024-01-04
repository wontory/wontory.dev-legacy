import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex items-center justify-center md:h-24">
        <p className="text-sm text-muted-foreground">
          © 2024{' '}
          <Link
            href="https://github.com/wontory"
            className="font-medium underline underline-offset-4 transition-colors hover:text-primary"
          >
            wontory
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  )
}
