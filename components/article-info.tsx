import { formatRelative, differenceInDays, subDays, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'
import { CalendarIcon, StopwatchIcon } from '@radix-ui/react-icons'

import type { Article } from '@/.contentlayer/generated'

type ArticleInfoProps = Pick<Article, 'date' | 'readingTime'>

export function ArticleInfo({ date, readingTime }: ArticleInfoProps) {
  const formatDate = (today: Date, date: Date) =>
    formatRelative(date, today, { locale: ko })

  return (
    <div className="flex gap-2 text-xs text-muted-foreground">
      <CalendarIcon />
      <time dateTime={date}>{formatDate(new Date(), parseISO(date))}</time>
      &nbsp;
      <StopwatchIcon />
      <span>{readingTime}분</span>
    </div>
  )
}
