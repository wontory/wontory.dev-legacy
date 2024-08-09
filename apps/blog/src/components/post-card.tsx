import Image from 'next/image'

import type { Post } from '#site/content'
import { PostInfo } from '~/components/post-info'

function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-background hover:bg-foreground/5 hover:border-border border-border/80 flex flex-col overflow-hidden rounded-md border transition-colors duration-200">
      <div className="relative aspect-video">
        <Image
          src={post.image}
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
