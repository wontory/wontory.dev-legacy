import { format, parseISO } from 'date-fns'
import { allArticles } from 'contentlayer/generated'

export const generateStaticParams = async () =>
  allArticles.map((article) => ({ slug: article._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const article = allArticles.find(
    (article) => article._raw.flattenedPath === params.slug,
  )
  if (!article) throw new Error(`article not found for slug: ${params.slug}`)
  return { title: article.title }
}

const articleLayout = ({ params }: { params: { slug: string } }) => {
  const article = allArticles.find(
    (article) => article._raw.flattenedPath === params.slug,
  )
  if (!article) throw new Error(`article not found for slug: ${params.slug}`)

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={article.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(article.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="text-3xl font-bold">{article.title}</h1>
      </div>
    </article>
  )
}

export default articleLayout
