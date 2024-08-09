import { Link } from '@wontory/lib/next-view-transitions'

import { PostCard } from '~/components/post-card'
import { posts as allPosts } from '#site/content'
import { compareDesc } from 'date-fns'

export default async function Blog() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-5xl font-semibold">Blog</h1>
      <div className="grid w-full gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/post/${post.slugAsParams}`}>
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  )
}
