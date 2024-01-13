'use client'

import { notFound, useSearchParams } from 'next/navigation'
import { allArticles } from '@/.contentlayer/generated'
import { ArticleCard } from '@/components/article-card'
import { CategoryFilter } from '@/components/category-filter'

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
      <div className="mb-8 flex h-52 items-center justify-center bg-primary text-center text-primary-foreground">
        제작중인 블로그입니다.
        <br /> 안녕하세요. 프론트엔드 개발자 wontory입니다.
      </div>
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
