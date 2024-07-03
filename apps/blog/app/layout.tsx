import type { Metadata } from 'next'
import { cn } from '@wontory/util/cn'
import { SiteHeader } from '@wontory/ui/site-header'
import { SiteFooter } from '@wontory/ui/site-footer'
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
      <body className={cn(Pretendard.variable, 'dark font-sans')}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="container max-w-screen-lg flex-1 px-6 pb-32 pt-52">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
