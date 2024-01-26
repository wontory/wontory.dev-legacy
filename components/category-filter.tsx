import Link from 'next/link'

import { cn } from '@/libs/utils'
import { BadgeProps, badgeVariants } from '@/styles/badgeVariants'
import { allArticles } from '@/.contentlayer/generated'

import type { Article } from '@/.contentlayer/generated'

export function CategoryFilter({
  selected,
}: {
  selected: Article['category']
}) {
  const allCategories = Array.from(
    new Set(allArticles.map((article) => article.category)),
  ).sort((a, b) => a.localeCompare(b))

  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      <Link
        href="/"
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
          href={`/?category=${category}`}
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
