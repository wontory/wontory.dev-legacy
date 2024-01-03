import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/libs/utils'
import { Article } from '@/.contentlayer/generated'

const badgeVariants: { [category: string]: string } = {
  javascript:
    'border-transparent bg-[#F7DF1E] text-black hover:bg-[#F7DF1E]/80',
  typescript:
    'border-transparent bg-[#3178C6] text-white hover:bg-[#3178C6]/80',
  react: 'border-transparent bg-[#61DAFB] text-black hover:bg-[#61DAFB]/80',
  'next.js': 'border-transparent bg-[#000000] text-white hover:bg-[#000000]/80',
  aws: 'border-transparent bg-[#232F3E] text-white hover:bg-[#232F3E]/80',
}

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
            'ml-auto rounded-full font-medium',
            badgeVariants[article.category.toLowerCase()],
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
