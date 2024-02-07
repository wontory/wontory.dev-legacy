import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import GithubSlugger from 'github-slugger'
import readingTime from 'reading-time'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
  headings: {
    type: 'json',
    resolve: (doc) =>
      (
        Array.from(
          doc.body.raw.matchAll(/\n(?<flag>#{1,3})\s+(?<content>.+)/g),
        ) as { groups: Record<string, string> }[]
      ).map(({ groups }) => ({
        level: groups.flag.length,
        text: groups.content,
        slug: new GithubSlugger().slug(groups.content),
      })),
  },
  readingTime: {
    type: 'string',
    resolve: (doc) => Math.ceil(readingTime(doc.body.raw).minutes),
  },
}

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `articles/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    category: { type: 'string', required: true },
    image: { type: 'string', required: false },
    date: { type: 'date', required: true },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'contents',
  documentTypes: [Article],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypePrettyCode],
  },
})
