import { Article } from '@/components/article'

const DUMMY_DATA = [
  {
    id: 1,
    date: 'Jan 3, 2024',
    category: 'AWS',
    title: '01월 03일 AWSKRUG 프론트엔드 소모임',
    description: 'Cognito와 next-auth를 통합한 커스텀 로그인 페이지 만들기',
  },
  {
    id: 2,
    date: 'Jan 4, 2024',
    category: 'React',
    title: '어떻게 더 좋은 리액트 컴포넌트를 만들까요?',
    description: '확장 가능성 그리고 재사용성',
  },
  {
    id: 3,
    date: 'Jan 5, 2024',
    category: 'JavaScript',
    title: '덕 타이핑(duck typing)에 대해 아시나요?',
    description:
      '"If it walks like a duck and it quacks like a duck, then it must be a duck."',
  },
  {
    id: 4,
    date: 'Jan 6, 2024',
    category: 'TypeScript',
    title: 'TypeScript 타입 시스템 뜯어보기: 타입 호환성',
    description:
      '토스 Node.js 챕터에서는 높은 코드 가독성과 품질을 위해 TypeScript의 타입 시스템을 적극적으로 활용하고 있고 이에 대한 이해도를 높이기 위해 스터디를 꾸준히 진행하고 있습니다.',
  },
  {
    id: 5,
    date: 'Jan 7, 2024',
    category: 'Next.js',
    title: 'Next.js Docs 한글화 작업의 컨트리뷰터를 모집합니다!',
    description:
      'Docs 번역 작업의 목표는 1. 한국인들을 위한 Next.js Docs 제공 2. 번역 작업을 하며 Next.js Docs 다시 정독해보기 입니다.',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-4 p-4">
      <div className="grid w-full max-w-screen-xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {DUMMY_DATA.map((article) => (
          <Article
            key={article.id}
            date={article.date}
            category={article.category}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </main>
  )
}
