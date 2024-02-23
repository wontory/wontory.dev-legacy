import { CalendarIcon } from '@radix-ui/react-icons'
import { differenceInDays, format, formatDistanceToNow } from 'date-fns'
import { ko } from 'date-fns/locale'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export function PostInfo({ date }: { date: Date }) {
  const formatDate = (date: Date) =>
    differenceInDays(new Date(), date) > 2
      ? format(date, 'yyyy.MM.dd')
      : formatDistanceToNow(date, { addSuffix: true, locale: ko })

  return (
    <div className="flex items-center gap-3">
      <Avatar className="h-11 w-11">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/94912717"
          alt="@wontory"
        />
        <AvatarFallback>WT</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <span className="text-base font-medium">@wontory</span>
        <div className="flex gap-2 text-xs text-muted-foreground">
          <CalendarIcon />
          <time date-time={date}>{formatDate(date)}</time>
        </div>
      </div>
    </div>
  )
}
