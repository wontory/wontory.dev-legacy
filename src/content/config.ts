import { defineCollection, z } from 'astro:content'

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    category: z.string().optional(),
    draft: z.boolean().optional(),
  }),
})

export const collections = {
  post: postCollection,
}
