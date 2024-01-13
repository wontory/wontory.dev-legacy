import type { Metadata } from 'next'
import '@/styles/globals.css'

import { spoqa } from '@/styles/fonts'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'wontory.dev',
  description: 'Engineering blog by wontory',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${spoqa.variable} font-spoqa`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="relative flex min-h-screen flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
