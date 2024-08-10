import Image from 'next/image'

import { PostInfo } from '~/components/post-info'
import type { Post } from '#site/content'

function PostCard({ post }: { post: Post }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-md border border-border/80 bg-background transition-colors duration-200 hover:border-border hover:bg-foreground/5">
      <div className="relative aspect-video">
        <Image
          src={post.image}
          blurDataURL={post.image.blurDataURL}
          alt={post.title}
          draggable={false}
          priority={true}
          className="object-cover"
          fill
        />
      </div>
      <PostInfo post={post} className="p-8" />
    </div>
  )
}

export { PostCard }
