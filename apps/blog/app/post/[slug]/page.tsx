import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import * as runtime from 'react/jsx-runtime'

import { components } from '~/components/mdx-components'
import { PostInfo } from '~/components/post-info'
import { posts as allPosts } from '#site/content'

async function getPostFromParams(params: { slug: string }) {
  const slug = params.slug

  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) null

  return post
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.image.src }],
    },
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  const MDXContent = new Function(post.body)({ ...runtime }).default

  return (
    <div className="flex flex-col items-center gap-12">
      <PostInfo post={post} variant="header" className="max-w-screen-md" />
      <hr className="my-6 w-full" />
      <div className="max-w-screen-md break-all text-foreground/70 text-xl leading-relaxed">
        <MDXContent components={components} />
      </div>
    </div>
  )
}
