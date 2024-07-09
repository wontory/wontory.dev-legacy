import { getPost } from '~/queries/hashnode'
import { PostInfo } from '~/components/post-info'

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  return (
    <div className="flex flex-col items-center gap-12">
      <PostInfo post={post} variant="header" className="max-w-screen-md" />
      <hr className="my-6 w-full" />
      <div
        dangerouslySetInnerHTML={{
          __html: post.content.html,
        }}
        className="prose text-foreground/70 max-w-screen-md break-all text-xl font-light leading-relaxed"
      />
    </div>
  )
}
