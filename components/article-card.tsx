import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/libs/utils'
import { BadgeProps, badgeVariants } from '@/styles/badgeVariants'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { ArticleInfo } from '@/components/article-info'

import type { Article } from '@/.contentlayer/generated'

export function ArticleCard(article: Article) {
  return (
    <Link href={article.slug}>
      <div className="overflow-hidden rounded-lg border transition-all hover:bg-accent">
        {article.thumbnail && (
          <AspectRatio ratio={16 / 9}>
            <Image
              src={article.thumbnail}
              alt={article.title}
              className="object-cover"
              fill
            />
          </AspectRatio>
        )}
        <div className="flex flex-col items-start gap-2 p-3 text-left text-sm">
          <div className="flex w-full items-center gap-2">
            <ArticleInfo
              date={article.date}
              readingTime={article.readingTime}
            />
            <Badge
              className={cn(
                badgeVariants({
                  variant:
                    article.category.toLowerCase() as BadgeProps['variant'],
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
          {article.description && (
            <div className="line-clamp-2 text-sm text-muted-foreground">
              {article.description.substring(0, 300)}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
