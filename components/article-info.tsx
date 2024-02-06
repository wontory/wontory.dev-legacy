import {
  differenceInDays,
  format,
  formatDistanceToNow,
  formatRelative,
  parseISO,
} from 'date-fns'
import { ko } from 'date-fns/locale'
import { CalendarIcon, StopwatchIcon } from '@radix-ui/react-icons'

import type { Article } from '@/.contentlayer/generated'

type ArticleInfoProps = Pick<Article, 'date' | 'readingTime'>

export function ArticleInfo({ date, readingTime }: ArticleInfoProps) {
  const formatDate = (date: Date) =>
    differenceInDays(new Date(), date) > 2
      ? format(date, 'yyyy.MM.dd')
      : formatDistanceToNow(date, { addSuffix: true, locale: ko })

  return (
    <div className="flex gap-2 text-xs text-muted-foreground">
      <CalendarIcon />
      <time dateTime={date}>{formatDate(parseISO(date))}</time>
      &nbsp;
      <StopwatchIcon />
      <span>{readingTime}분</span>
    </div>
  )
}
