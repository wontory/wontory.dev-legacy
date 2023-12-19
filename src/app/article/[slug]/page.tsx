import { Metadata } from 'next'
import { format, parseISO } from 'date-fns'
import { allArticles } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

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

  const MDXComponent = useMDXComponent(article.body.code)

  return (
    <article className="container mx-auto">
      <div className="mb-8 text-center">
        <time dateTime={article.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(article.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="font-square text-3xl font-bold">{article.title}</h1>
      </div>
      <div className="prose mx-auto">
        <MDXComponent />
      </div>
    </article>
  )
}
