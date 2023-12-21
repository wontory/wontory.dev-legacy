import { Metadata } from 'next'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { allArticles } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import type { MDXComponents } from 'mdx/types'
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
    <article className="container mx-auto">
      <div className="mb-24 text-center">
        <time dateTime={article.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(article.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="text-3xl font-bold">{article.title}</h1>
      </div>
      <div className="flex xl:justify-around">
        <div className="prose mx-auto w-full max-w-screen-md dark:prose-invert xl:mx-0">
          <MDXComponent components={mdxComponents} />
        </div>
        <div className="hidden xl:block">
          <TableOfContents article={article} slug={params.slug} />
        </div>
      </div>
    </article>
  )
}
