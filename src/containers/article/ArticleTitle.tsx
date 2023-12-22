import { format, parseISO } from 'date-fns'

import { Badge } from '@/components/ui/badge'
import { Article } from 'contentlayer/generated'

export function ArticleTitle({ article }: { article: Article }) {
  return (
    <>
      <Badge className="mb-4 text-sm">{article.category}</Badge>
      <h1 className="mb-4 text-4xl font-bold">{article.title}</h1>
      <time
        dateTime={article.date}
        className="mb-1 text-xs text-gray-600 dark:text-gray-400"
      >
        {format(parseISO(article.date), 'LLLL d, yyyy')}
      </time>
    </>
  )
}
