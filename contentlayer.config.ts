import { defineDocumentType, makeSource } from 'contentlayer/source-files'

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
    tags: { type: 'list', of: { type: 'string' }, required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (article) => `/${article._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Article],
})
