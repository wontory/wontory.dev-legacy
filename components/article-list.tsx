import { notFound } from 'next/navigation'
import { compareDesc } from 'date-fns'
import { motion } from 'framer-motion'

import { allArticles } from '@/.contentlayer/generated'
import { ArticleCard } from '@/components/article-card'

import type { Article } from '@/.contentlayer/generated'

function getArticleListFromParams(params: string) {
  const articleList = allArticles.filter(
    (article) => article.category.toLowerCase() === params?.toLowerCase(),
  )

  return articleList
}

export function ArticleList({ category }: { category: Article['category'] }) {
  const articleList = (
    category ? getArticleListFromParams(category) : allArticles
  ).sort((a, b) => compareDesc(a.date, b.date))

  if (category && articleList.length === 0) {
    notFound()
  }

  return (
    <motion.div
      key={category}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
    >
      {articleList.map((article) => (
        <ArticleCard key={article._id} {...article} />
      ))}
    </motion.div>
  )
}
