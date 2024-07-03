import { format } from 'date-fns'
import Image from 'next/image'

import type { Post } from '~/types/post'

function PostHeader({ post }: { post: Post }) {
  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="text-5xl font-semibold">{post.title}</h1>
      <p className="text-muted-foreground line-clamp-2">{post.subtitle}</p>
      <div className="mt-4 grid grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <span className="text-muted-foreground/70 text-sm">Written by</span>
          <div className="flex gap-4">
            <Image
              src={post.author.profilePicture}
              alt={post.author.name}
              width={24}
              height={24}
              className="shrink-0 rounded-full object-cover"
            />
            <span>{post.author.name}</span>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-muted-foreground/70 text-sm">Published on</span>
          <div>{format(post.publishedAt, 'MMMM d, yyyy')}</div>
        </div>
      </div>
    </div>
  )
}

export { PostHeader }
