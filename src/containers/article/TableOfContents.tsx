'use client'

import Link from 'next/link'
import { cn } from '@/libs/utils'
import { Separator } from '@/components/ui/separator'
import { useTocScroll } from '@/libs/useTocScroll'

// need to refactor: any type, tailwind classes
export function TableOfContents({
  article,
  slug,
}: {
  article: any
  slug: string
}) {
  const { activeToc, headingTops } = useTocScroll(article?.headings)

  return (
    <div className="sticky top-24 rounded-md border p-4">
      <h3 className="mb-4 text-sm font-extrabold leading-none">On this page</h3>
      <Separator className="my-2" />
      {headingTops?.map((heading) => (
        <div key={`#${heading.slug}`} className="w-64 truncate">
          <Link
            className={cn(
              'text-sm hover:font-bold hover:text-primary',
              heading.level - 2 && 'ml-4',
              activeToc === heading.slug && 'font-bold text-primary',
            )}
            href={`${slug}#${heading.slug}`}
          >
            {heading.text}
          </Link>
        </div>
      ))}
    </div>
  )
}
