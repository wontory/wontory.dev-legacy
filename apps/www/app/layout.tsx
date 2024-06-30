import type { Metadata } from 'next'
import { cn } from '@wontory/utils/cn'
import { SUIT } from '@wontory/ui/font/suit'
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
      <body className={cn(SUIT.variable, 'font-sans')}>{children}</body>
    </html>
  )
}
