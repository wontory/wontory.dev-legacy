import type { Metadata } from 'next'
import { cn } from '@wontory/utils/cn'
import { Pretendard } from '@wontory/ui/font/pretendard'
import '@wontory/ui/globals.css'

export const metadata: Metadata = {
  title: 'blog.wontory.dev',
  description: 'blog.wontory.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={cn(Pretendard.variable, 'font-sans')}>{children}</body>
    </html>
  )
}
