import Image from 'next/image'
import { format } from 'date-fns'

import type { Post } from '~/types/post'

function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-background hover:bg-foreground/5 hover:border-border border-border/80 flex flex-col overflow-hidden rounded-md border transition-colors duration-200">
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
        <p className="text-muted-foreground line-clamp-2">{post.subtitle}</p>
        <div className="mt-4 grid grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <span className="text-muted-foreground/70 text-sm">Written by</span>
            <div>wontory</div>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-muted-foreground/70 text-sm">
              Published on
            </span>
            <div>{format(post.publishedAt, 'MMMM d, yyyy')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { PostCard }
