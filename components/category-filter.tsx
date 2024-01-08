import { allArticles } from '@/.contentlayer/generated'
import { Badge } from './ui/badge'
import { badgeVariants } from '@/styles/badgeVariants'
import { cn } from '@/libs/utils'

export function CategoryFilter() {
  const allCategories = Array.from(
    allArticles.reduce((acc, { category }) => {
      acc.set(category, (acc.get(category) || 0) + 1)
      return acc
    }, new Map()),
    ([category, count]) => ({ category, count }),
  ).sort((a, b) => (a.category > b.category ? 1 : -1))

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {allCategories.map(({ category, count }) => (
        <Badge
          className={cn(
            'text-md rounded-full font-medium',
            badgeVariants[category.toLowerCase()],
          )}
          key={category}
        >
          {category} {count}
        </Badge>
      ))}
    </div>
  )
}
