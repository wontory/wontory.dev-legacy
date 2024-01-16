import type { Article } from '@/.contentlayer/generated'

export function TableOfContents({
  headings,
}: {
  headings: Article['headings']
}) {
  return (
    <div className="sticky top-32 hidden xl:block">
      <div className="absolute left-full ml-10 w-60 text-foreground/40 2xl:ml-20">
        {headings.map(
          (heading: { slug: string; level: number; text: string }) => (
            <div
              key={`#${heading.slug}`}
              className="transition hover:text-foreground/70"
            >
              <a data-level={heading.level} href={`#${heading.slug}`}>
                {heading.text}
              </a>
            </div>
          ),
        )}
      </div>
    </div>
  )
}
