import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/libs/utils'
import { Article } from '@/.contentlayer/generated'
import { BadgeProps, badgeVariants } from '@/styles/badgeVariants'

export function ArticleCard(article: Article) {
  return (
    <Link
      href={article.slug}
      className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
    >
      <div className="flex w-full items-center gap-2">
        <div className="text-xs text-muted-foreground">
          {format(parseISO(article.date), 'LLL d, yyyy')}
        </div>
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
