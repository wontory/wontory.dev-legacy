import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { cn } from '@/libs/utils'

import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  h1: ({ children, id }) => (
    <h1
      className="mt-12 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      id={id}
    >
      {children}
    </h1>
  ),
  h2: ({ children, id }) => (
    <h2
      className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      id={id}
    >
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3
      className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      id={id}
    >
      {children}
    </h3>
  ),
  h4: ({ children, id }) => (
    <h4
      className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight"
      id={id}
    >
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  ),
  table: ({ children }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">{children}</table>
    </div>
  ),
  tr: ({ children }) => (
    <tr className="m-0 border-t p-0 even:bg-muted">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
      {children}
    </td>
  ),
  ol: ({ children }) => (
    <ul className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ul>
  ),
  ul: ({ children }) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        'mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4',
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className,
      )}
      {...props}
    />
  ),
  img: (props) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      width={0}
      height={0}
      sizes="100vw"
      className="h-auto w-full rounded-lg"
      {...(props as ImageProps)}
    />
  ),
  a: ({ children, href }) => (
    <Link
      href={href as string}
      className="font-medium text-primary underline underline-offset-4"
    >
      {children}
    </Link>
  ),
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
