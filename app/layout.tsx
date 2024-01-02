import type { Metadata } from 'next'
import '@/styles/globals.css'

import { spoqa } from '@/styles/fonts'
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
    <html lang="ko">
      <body className={`${spoqa.variable} font-spoqa`}>
        <div className="relative flex min-h-screen flex-col bg-background">
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
