import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
}

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `article/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    thumbnail: { type: 'string', required: false },
    date: { type: 'date', required: true },
    category: { type: 'string', required: true },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Article],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypePrismPlus],
  },
})
