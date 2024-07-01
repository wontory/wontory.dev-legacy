import type { Metadata } from 'next'
import { cn } from '@wontory/utils/cn'
import { SiteHeader } from '@wontory/ui/site-header'
import { SiteFooter } from '@wontory/ui/site-footer'
import { Pretendard } from '@wontory/ui/font/pretendard'
import '@wontory/ui/globals.css'

export const metadata: Metadata = {
  title: 'www.wontory.dev',
  description: 'www.wontory.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={cn(Pretendard.variable, 'dark font-sans')}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
