import { allArticles } from '@/.contentlayer/generated'
import { Article } from '@/components/article'

export default function Home() {
  return (
    <>
      <div className="mb-8 flex h-52 items-center justify-center bg-primary text-center text-primary-foreground">
        제작중인 블로그입니다.
        <br /> 안녕하세요. 프론트엔드 개발자 wontory입니다.
      </div>
      <div className="container relative max-w-screen-xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {allArticles.map((article) => (
            <Article key={article._id} {...article} />
          ))}
        </div>
      </div>
    </>
  )
}
