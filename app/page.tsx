'use client'

import { notFound, useSearchParams } from 'next/navigation'
import { allArticles } from '@/.contentlayer/generated'
import { ArticleCard } from '@/components/article-card'
import { CategoryFilter } from '@/components/category-filter'
import { MainBanner } from '@/components/main-banner'

function getArticleListFromParams(category: string | null) {
  const articleList = allArticles.filter(
    (article) => article.category.toLowerCase() === category?.toLowerCase(),
  )

  if (articleList.length === 0) {
    null
  }

  return articleList
}

export default function Home() {
  const searchParams = useSearchParams()

  const category = searchParams.get('category')
  const articleList = category
    ? getArticleListFromParams(category)
    : allArticles

  if (articleList.length === 0) {
    notFound()
  }

  return (
    <>
      <MainBanner />
      <div className="container relative max-w-screen-xl">
        <CategoryFilter selected={category} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {articleList.map((article) => (
            <ArticleCard key={article._id} {...article} />
          ))}
        </div>
      </div>
    </>
  )
}
