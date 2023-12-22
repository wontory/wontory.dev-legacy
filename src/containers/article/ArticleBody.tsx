import Link from 'next/link'
import { useMDXComponent } from 'next-contentlayer/hooks'
import type { MDXComponents } from 'mdx/types'
import { Article } from 'contentlayer/generated'

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => (
    <Link href={href as string} className="text-primary hover:text-primary/80">
      {children}
    </Link>
  ),
}

export function ArticleBody({ article }: { article: Article }) {
  const MDXComponent = useMDXComponent(article.body.code)

  return <MDXComponent components={mdxComponents} />
}
