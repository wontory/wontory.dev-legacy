import Link from 'next/link'
import { cn } from '@/libs/utils'
import { Separator } from '@/components/ui/separator'

// need to refactor: any type, tailwind classes
export function TableOfContents({
  article,
  slug,
}: {
  article: any
  slug: string
}) {
  return (
    <div className="rounded-md border p-4">
      <h3 className="mb-4 text-sm font-medium leading-none">
        Table of Contents
      </h3>
      <Separator className="my-2" />
      {article.headings.map(
        (heading: { slug: string; level: number; text: string }) => (
          <div key={`#${heading.slug}`} className="w-64 truncate">
            <Link
              className={cn('text-sm', `pl-${(heading.level - 1) * 4}`)}
              href={`${slug}#${heading.slug}`}
            >
              {heading.text}
            </Link>
          </div>
        ),
      )}
    </div>
  )
}
