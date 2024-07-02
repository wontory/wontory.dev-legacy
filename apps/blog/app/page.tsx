import Image from 'next/image'

import { query } from '~/queries/hashnode'
import type { Post } from '~/types/post'

export default async function Blog() {
  const {
    data: { publication },
  } = await query({
    query: `
      query($host: String!) {
        publication(host: $host) {
          posts(first:10) {
            edges {
              node {
                title
                brief
                slug
                id
                coverImage {
                  url
                }
                publishedAt
              }
            }
          }
        }
      }
    `,
    variables: {
      host: 'wontory.hashnode.dev',
    },
  })

  const posts: Post[] = publication.posts.edges.map(
    ({ node }: { node: Post }) => node,
  )

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="mt-16 w-full">
        <h1 className="text-5xl font-semibold">Blog</h1>
      </div>
      <div className="grid w-full gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-background hover:bg-foreground/5 hover:border-border border-border/80 flex flex-col overflow-hidden rounded-md border transition-colors duration-200"
          >
            <div className="relative aspect-video">
              <Image
                src={post.coverImage.url}
                alt="test"
                draggable="false"
                className="object-cover"
                fill
              />
            </div>
            <div className="flex flex-col gap-4 p-8">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-muted-foreground">{post.brief}</p>
              <div className="mt-4 grid grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <span className="text-muted-foreground/70 text-sm">
                    Written by
                  </span>
                  <div>wontory</div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-muted-foreground/70 text-sm">
                    Published on
                  </span>
                  <div>{post.publishedAt}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
