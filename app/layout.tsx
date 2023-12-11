import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

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
      <body className={`${wanted.variable} font-wanted antialiased`}>
        {children}
      </body>
    </html>
  )
}
