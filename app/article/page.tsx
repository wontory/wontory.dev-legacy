import { compareDesc } from 'date-fns'
import { allArticles } from 'contentlayer/generated'
import { ArticleCard } from '@/containers/article/ArticleCard'

export default function Home() {
  const articles = allArticles.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div className="container">
      <h1 className="mb-8 text-2xl font-medium">블로그</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {articles.map((article, idx) => (
          <ArticleCard key={idx} {...article} />
        ))}
      </div>
    </div>
  )
}
