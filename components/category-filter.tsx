'use client'

import { useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { allArticles } from '@/.contentlayer/generated'
import { BadgeProps, badgeVariants } from '@/styles/badgeVariants'
import { cn } from '@/libs/utils'

export function CategoryFilter() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  const allCategories = Array.from(
    new Set(allArticles.map((article) => article.category)),
  ).sort((a, b) => a.localeCompare(b))

  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      {allCategories.map((category) => (
        <Link
          href={pathname + '?' + createQueryString('category', category)}
          key={category}
          className={cn(
            badgeVariants({
              variant: category.toLowerCase() as BadgeProps['variant'],
            }),
            'text-md rounded-full font-medium',
          )}
        >
          {category}
        </Link>
      ))}
    </div>
  )
}
