import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getPost } from '~/queries/hashnode'
import { PostInfo } from '~/components/post-info'

const fetchPost = async (slug: string) => {
  const post = await getPost(slug)
  if (!post) notFound()
  return post
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await fetchPost(params.slug)

  return {
    title: post.seo.title,
    description: post.seo.description,
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      images: [post.ogMetaData.image ?? post.coverImage],
    },
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug)

  return (
    <div className="flex flex-col items-center gap-12">
      <PostInfo post={post} variant="header" className="max-w-screen-md" />
      <hr className="my-6 w-full" />
      <div className="prose text-foreground/70 max-w-screen-md break-all text-xl font-light leading-relaxed">
        {post.content.markdown}
      </div>
    </div>
  )
}
