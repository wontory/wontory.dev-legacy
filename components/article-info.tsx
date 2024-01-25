import { formatRelative, differenceInDays, subDays, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'
import { CalendarIcon, StopwatchIcon } from '@radix-ui/react-icons'

export function ArticleInfo({
  date,
  readingTime,
}: {
  date: string
  readingTime: string
}) {
  const formatDate = (today: Date, date: Date) =>
    formatRelative(subDays(today, differenceInDays(today, date)), today, {
      locale: ko,
    })

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
