import { allArticles } from '@/.contentlayer/generated'
import { Badge } from './ui/badge'
import { badgeVariants } from '@/styles/badgeVariants'
import { cn } from '@/libs/utils'

export function CategoryFilter() {
  const allCategories = Array.from(
    new Set(allArticles.map((article) => article.category)),
  ).sort((a, b) => a.localeCompare(b))

  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      {allCategories.map((category) => (
        <Badge
          className={cn(
            'text-md rounded-full font-medium',
            badgeVariants[category.toLowerCase()],
          )}
          key={category}
        >
          {category}
        </Badge>
      ))}
    </div>
  )
}
