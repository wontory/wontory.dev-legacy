import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { allArticles } from '@/.contentlayer/generated'
import { Separator } from '@/components/ui/separator'
import { Mdx } from '@/components/mdx-components'
import { ArticleHeader } from '@/components/article-header'
import { GiscusSection } from '@/components/giscus'

interface ArticleProps {
  params: {
    slug: string[]
  }
}

async function getArticleFromParams(params: ArticleProps['params']) {
  const slug = params?.slug?.join('/')
  const article = allArticles.find((article) => article.slugAsParams === slug)

  if (!article) {
    null
  }

  return article
}

export async function generateMetadata({
  params,
}: ArticleProps): Promise<Metadata> {
  const article = await getArticleFromParams(params)

  if (!article) {
    return {}
  }

  return {
    title: article.title,
    description: article.description,
  }
}

export async function generateStaticParams(): Promise<
  ArticleProps['params'][]
> {
  return allArticles.map((article) => ({
    slug: article.slugAsParams.split('/'),
  }))
}

export default async function ArticlePage({ params }: ArticleProps) {
  const article = await getArticleFromParams(params)

  if (!article) {
    notFound()
  }

  return (
    <article className="container relative max-w-screen-md">
      <ArticleHeader
        title={article.title}
        date={article.date}
        category={article.category}
      />
      <Mdx code={article.body.code} />
      <Separator className="my-16" />
      <GiscusSection />
    </article>
  )
}
