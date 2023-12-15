import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '프로젝트',
}

export default function Home() {
  return (
    <div className="container">
      <h1 className="mb-8 text-2xl font-medium">프로젝트</h1>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"></div>
    </div>
  )
}
