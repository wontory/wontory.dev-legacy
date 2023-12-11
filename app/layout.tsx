import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const wanted = localFont({
  src: '../public/fonts/WantedSansVariable.woff2',
  display: 'swap',
  variable: '--font-wanted',
})

export const metadata: Metadata = {
  title: {
    template: '%s | WONTECH',
    default: 'WONTECH',
  },
  description: '프론트엔드 개발자 Wontory의 기술 블로그',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body
        className={cn(
          'font-wanted min-h-screen bg-background antialiased',
          wanted.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1 py-6 lg:py-8">{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
