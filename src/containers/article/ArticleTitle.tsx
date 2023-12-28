import { format, parseISO } from 'date-fns'

import { Badge } from '@/components/ui/badge'
import { Article } from 'contentlayer/generated'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function ArticleTitle({ article }: { article: Article }) {
  return (
    <>
      <Badge className="mb-4 text-sm">{article.category}</Badge>
      <h1 className="mb-8 text-4xl font-bold">{article.title}</h1>
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/94912717?v=4"
            alt="@wontory"
          />
          <AvatarFallback>W</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="font-medium">Wontory</h3>
          <time
            dateTime={article.date}
            className="mb-1 text-xs text-gray-600 dark:text-gray-400"
          >
            Frontend Developer · {format(parseISO(article.date), 'LLL d, yyyy')}
          </time>
        </div>
      </div>
    </>
  )
}
