import '@/styles/globals.css'

import { Suspense } from 'react'
import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics } from '@next/third-parties/google'

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
    <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${spoqa.variable} font-spoqa`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="relative flex min-h-screen flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">
              <Suspense>{children}</Suspense>
            </main>
            <SiteFooter />
          </div>
        </ThemeProvider>
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-LTWVKM0YWV" />
    </html>
  )
}
