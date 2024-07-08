import { Link } from '@wontory/lib/next-view-transitions'

import { getAllPosts } from '~/queries/hashnode'
import { PostCard } from '~/components/post-card'

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-5xl font-semibold">Blog</h1>
      <div className="grid w-full gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.id} href={`/post/${post.slug}`}>
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  )
}
