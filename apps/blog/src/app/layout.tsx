import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@wontory/tailwindcss-config/globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
