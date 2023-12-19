'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { Article } from 'contentlayer/generated'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function CardThumbnail({
  src,
  isHovered,
}: {
  src: string
  isHovered: boolean
}) {
  return (
    <div className="hidden overflow-hidden sm:block">
      <AspectRatio
        ratio={16 / 9}
        className={`duration-200 ${isHovered && 'scale-110'}`}
      >
        <Image
          src={src}
          alt="thumbnail"
          className="object-cover"
          priority
          fill
        />
      </AspectRatio>
    </div>
  )
}

export function ArticleCard(article: Article) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={article.url}>
      <Card
        className="overflow-hidden duration-200 hover:shadow-xl"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <CardThumbnail
          src="https://placehold.co/600x400/png"
          isHovered={isHovered}
        />
        <CardHeader className="items-start pb-2">
          <Badge>{article.category}</Badge>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 pb-2">
          <CardTitle className="font-bold">{article.title}</CardTitle>
          {article.description}
        </CardContent>
        <CardFooter>
          <CardDescription>
            <time dateTime={article.date}>
              {format(parseISO(article.date), 'LLLL d, yyyy')}
            </time>
          </CardDescription>
        </CardFooter>
      </Card>
    </Link>
  )
}
