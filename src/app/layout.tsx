import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'

import { cn } from '@/libs/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Progress } from '@/components/progress'

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto',
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
          'min-h-screen bg-background font-noto antialiased',
          notoSans.variable,
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
            <Progress />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
