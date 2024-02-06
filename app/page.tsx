'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

import { cn } from '@/libs/utils'
import { poppins } from '@/styles/fonts'
import { Marquee } from '@/components/ui/marquee'
import { CategoryFilter } from '@/components/category-filter'
import { ArticleList } from '@/components/article-list'

export default function Home() {
  const searchParams = useSearchParams()

  const category = searchParams.get('category') as string

  return (
    <>
      <section className="mb-8 bg-primary py-3 text-primary-foreground">
        <div
          className={cn(
            poppins.variable,
            'container flex max-w-screen-xl flex-col p-0 font-poppins text-6xl font-black uppercase [mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)] md:text-7xl lg:text-8xl xl:[mask-image:_linear-gradient(to_right,transparent_0,_black_200px,_black_calc(100%-200px),transparent_100%)]',
          )}
        >
          <Marquee baseVelocity={-1}>
            coffee frontend wontory music game&nbsp;
          </Marquee>
          <Marquee baseVelocity={0.7}>
            react nextjs javascript typescript tailwindcss aws&nbsp;
          </Marquee>
        </div>
      </section>
      <div className="container relative max-w-screen-xl">
        <CategoryFilter selected={category} />
        <Suspense>
          <ArticleList category={category} />
        </Suspense>
      </div>
    </>
  )
}
