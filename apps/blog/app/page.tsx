import Image from 'next/image'
import { format } from 'date-fns'

import { getAllPosts } from '~/queries/hashnode'

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-5xl font-semibold">Blog</h1>
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
              <p className="text-muted-foreground line-clamp-2">{post.brief}</p>
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
                  <div>{format(post.publishedAt, 'PPP')}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
