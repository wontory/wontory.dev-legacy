import { Code } from 'bright'
import type { MDXComponents } from 'mdx/types'

export const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="mt-12 scroll-m-20 font-semibold text-4xl text-foreground tracking-tight lg:text-5xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-10 scroll-m-20 border-b pb-2 font-semibold text-3xl text-foreground tracking-tight first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 scroll-m-20 font-semibold text-2xl text-foreground tracking-tight"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="mt-6 scroll-m-20 font-semibold text-foreground text-xl tracking-tight"
      {...props}
    />
  ),
  p: (props) => <p className="[&:not(:first-child)]:mt-6" {...props} />,
  strong: (props) => (
    <strong className="font-medium text-foreground" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />
  ),
  table: (props) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full" {...props} />
    </div>
  ),
  tr: (props) => <tr className="m-0 border-t p-0 even:bg-muted" {...props} />,
  th: (props) => (
    <th
      className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  ul: (props) => <ul className="my-6 ml-6 list-disc" {...props} />,
  ol: (props) => <ol className="my-6 ml-6 list-decimal" {...props} />,
  li: (props) => <li className="mt-2 [&>ol]:my-0 [&>ul]:my-0" {...props} />,
  a: (props) => (
    <a
      className="text-primary transition-colors duration-500 hover:text-foreground"
      {...props}
    />
  ),
  pre: (props) => (
    <Code
      theme={{
        dark: 'min-dark',
        light: 'min-light',
        lightSelector: 'html.light',
      }}
      className="rounded"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="relative rounded bg-primary/20 px-[0.3rem] py-[0.2rem] font-sans font-semibold text-primary text-sm"
      {...props}
    />
  ),
  small: (props) => (
    <small className="font-medium text-sm leading-none" {...props} />
  ),
  img: ({ src, alt }) => (
    <img
      className="mx-auto my-12 rounded border shadow-md md:shadow-xl"
      src={src}
      alt={alt}
      draggable={false}
    />
  ),
}
