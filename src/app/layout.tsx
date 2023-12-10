import { Metadata } from 'next'

import ThemeProvider from '@/components/ui/theme-provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

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
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="container">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
