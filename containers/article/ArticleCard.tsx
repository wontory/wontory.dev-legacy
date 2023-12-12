import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { Article } from 'contentlayer/generated'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function ArticleCard(article: Article) {
  return (
    <Link href={article.url}>
      <Card>
        <CardHeader>
          <div>
            <Badge>{article.category}</Badge>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <CardTitle>{article.title}</CardTitle>
          <CardDescription>
            <time dateTime={article.date}>
              {format(parseISO(article.date), 'LLLL d, yyyy')}
            </time>
          </CardDescription>
        </CardContent>
        <CardFooter>{article.description}</CardFooter>
      </Card>
    </Link>
  )
}
