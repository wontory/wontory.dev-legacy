import Image from 'next/image'

import { PostInfo } from '~/components/post-info'
import type { Post } from '~/types/post'

function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-background hover:bg-foreground/5 hover:border-border border-border/80 flex flex-col overflow-hidden rounded-md border transition-colors duration-200">
      <div className="relative aspect-video">
        <Image
          src={post.coverImage.url}
          alt={post.title}
          draggable={false}
          priority={true}
          className="object-cover"
          fill
        />
      </div>
      <PostInfo post={post} mode="card" className="p-8" />
    </div>
  )
}

export { PostCard }
