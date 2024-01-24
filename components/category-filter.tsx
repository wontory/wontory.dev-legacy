'use client'

import { useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { cn } from '@/libs/utils'
import { BadgeProps, badgeVariants } from '@/styles/badgeVariants'
import { allArticles } from '@/.contentlayer/generated'

export function CategoryFilter({ selected }: { selected: string | null }) {
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
      <Link
        href={pathname}
        className={cn(
          badgeVariants({
            variant: 'default',
          }),
          selected ?? 'outline outline-2 outline-offset-2 outline-primary',
          'rounded-full text-base font-medium',
        )}
      >
        전체
      </Link>
      {allCategories.map((category) => (
        <Link
          href={pathname + '?' + createQueryString('category', category)}
          key={category}
          className={cn(
            badgeVariants({
              variant: category.toLowerCase() as BadgeProps['variant'],
            }),
            selected === category &&
              'outline outline-2 outline-offset-2 outline-primary',
            'rounded-full text-base font-medium',
          )}
        >
          {category}
        </Link>
      ))}
    </div>
  )
}
