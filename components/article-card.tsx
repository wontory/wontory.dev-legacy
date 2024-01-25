import Link from 'next/link'

import { cn } from '@/libs/utils'
import { BadgeProps, badgeVariants } from '@/styles/badgeVariants'
import { Article } from '@/.contentlayer/generated'
import { Badge } from '@/components/ui/badge'
import { ArticleInfo } from '@/components/article-info'

export function ArticleCard(article: Article) {
  return (
    <Link
      href={article.slug}
      className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
    >
      <div className="flex w-full items-center gap-2">
        <ArticleInfo date={article.date} readingTime={article.readingTime} />
        <Badge
          className={cn(
            badgeVariants({
              variant: article.category.toLowerCase() as BadgeProps['variant'],
            }),
            'ml-auto rounded-full font-medium',
          )}
        >
          {article.category}
        </Badge>
      </div>
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center">
          <div className="text-lg font-medium">{article.title}</div>
        </div>
      </div>
      <div className="line-clamp-2 text-sm text-muted-foreground">
        {(article.description || article.body.raw).substring(0, 300)}
      </div>
    </Link>
  )
}
