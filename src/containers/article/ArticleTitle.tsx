import { format, parseISO } from 'date-fns'

import { Badge } from '@/components/ui/badge'

export function ArticleTitle({
  category,
  date,
  title,
}: {
  category: string
  date: string
  title: string
}) {
  return (
    <>
      <Badge className="mb-4 text-sm">{category}</Badge>
      <h1 className="mb-4 text-4xl font-bold">{title}</h1>
      <time
        dateTime={date}
        className="mb-1 text-xs text-gray-600 dark:text-gray-400"
      >
        {format(parseISO(date), 'LLLL d, yyyy')}
      </time>
    </>
  )
}
