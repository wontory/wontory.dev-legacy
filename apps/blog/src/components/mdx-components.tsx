import { Code } from 'bright'
import type { MDXComponents } from 'mdx/types'

export const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="mt-12 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-foreground/70 break-all text-xl font-light leading-relaxed [&:not(:first-child)]:mt-6"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />
  ),
  table: (props) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full" {...props} />
    </div>
  ),
  tr: (props) => <tr className="even:bg-muted m-0 border-t p-0" {...props} />,
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
  ul: (props) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
  ol: (props) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />
  ),
  a: (props) => (
    <a
      className="text-primary hover:text-foreground transition-colors duration-500"
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
      className="bg-primary/20 text-primary relative rounded px-[0.3rem] py-[0.2rem] font-sans text-sm font-semibold"
      {...props}
    />
  ),
  small: (props) => (
    <small className="text-sm font-medium leading-none" {...props} />
  ),
  img: ({ src, alt }) => (
    <img
      className="mx-auto my-6 rounded border shadow-md md:shadow-xl"
      src={src}
      alt={alt}
      draggable={false}
    />
  ),
}
