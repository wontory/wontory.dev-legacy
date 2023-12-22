import { Metadata } from 'next'
import { allArticles } from 'contentlayer/generated'

import { Separator } from '@/components/ui/separator'
import { ArticleTitle } from '@/containers/article/ArticleTitle'
import { ArticleBody } from '@/containers/article/ArticleBody'
import { Giscus } from '@/containers/article/Giscus'
import { TableOfContents } from '@/containers/article/TableOfContents'
import '@/styles/prism.css'

type Props = {
  params: { slug: string }
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

  return (
    <article className="container max-w-max">
      <ArticleTitle
        date={article.date}
        title={article.title}
        category={article.category}
      />
      <Separator className="my-10" />
      <div className="flex gap-16">
        <div className="prose min-w-0 max-w-full dark:prose-invert lg:max-w-screen-md">
          <ArticleBody body={article.body} />
          <Giscus />
        </div>
        <div className="hidden lg:block">
          <TableOfContents headings={article.headings} slug={params.slug} />
        </div>
      </div>
    </article>
  )
}
