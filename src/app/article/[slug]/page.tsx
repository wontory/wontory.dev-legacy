import { Metadata } from 'next'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { allArticles } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import type { MDXComponents } from 'mdx/types'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Giscus } from '@/containers/article/Giscus'
import { TableOfContents } from '@/containers/article/TableOfContents'
import '@/styles/prism.css'

type Props = {
  params: { slug: string }
}

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => (
    <Link href={href as string} className="text-primary hover:text-primary/80">
      {children}
    </Link>
  ),
}

function findArticleBySlug(slug: string) {
  const article = allArticles.find(
    (article) => article._raw.flattenedPath === `article/${slug}`,
  )
  if (!article) throw new Error(`article not found for slug: ${slug}`)

  return article
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = findArticleBySlug(params.slug)

  return {
    title: article?.title,
  }
}

export default function Page({ params }: Props) {
  const article = findArticleBySlug(params.slug)

  const MDXComponent = useMDXComponent(article.body.code)

  return (
    <article className="container max-w-max">
      <Badge className="mb-4 text-sm">{article.category}</Badge>
      <h1 className="mb-4 text-4xl font-bold">{article.title}</h1>
      <time
        dateTime={article.date}
        className="mb-1 text-xs text-gray-600 dark:text-gray-400"
      >
        {format(parseISO(article.date), 'LLLL d, yyyy')}
      </time>
      <Separator className="my-10" />
      <div className="flex gap-16">
        <div className="prose min-w-0 max-w-full dark:prose-invert lg:max-w-screen-md">
          <MDXComponent components={mdxComponents} />
          <Giscus />
        </div>
        <div className="hidden lg:block">
          <TableOfContents article={article} slug={params.slug} />
        </div>
      </div>
    </article>
  )
}
