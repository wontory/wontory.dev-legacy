import Link from 'next/link'
import { differenceInDays, formatRelative, parseISO, subDays } from 'date-fns'
import { ko } from 'date-fns/locale'
import { CalendarIcon, StopwatchIcon } from '@radix-ui/react-icons'

import { cn } from '@/libs/utils'
import { BadgeProps, badgeVariants } from '@/styles/badgeVariants'
import { Article } from '@/.contentlayer/generated'
import { Badge } from '@/components/ui/badge'

export function ArticleCard(article: Article) {
  const formatDate = (today: Date, date: Date) =>
    formatRelative(subDays(today, differenceInDays(today, date)), today, {
      locale: ko,
    })

  return (
    <Link
      href={article.slug}
      className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
    >
      <div className="flex w-full items-center gap-2">
        <div className="flex gap-2 text-xs text-muted-foreground">
          <CalendarIcon />
          <time dateTime={article.date}>
            {formatDate(new Date(), parseISO(article.date))}
          </time>
          &nbsp;
          <StopwatchIcon />
          <span>{article.readingTime}분</span>
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
