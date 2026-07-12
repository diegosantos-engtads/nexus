import { SpinLoader } from '@/components/layout/SpinLoader'
import { SinglePost } from '@/components/posts/SinglePost'
import { findPostBySlugCached } from '@/lib/post/queries'
import type { Metadata } from 'next'
import { Suspense } from 'react'

type PostPageProps = {
  params: Promise<{ slug: string }>
}

export const generateMetadata = async ({
  params,
}: PostPageProps): Promise<Metadata> => {
  const { slug } = await params
  const post = await findPostBySlugCached(slug)

  if (!post) {
    return {
      title: 'Post não encontrado',
      description: 'O post solicitado não foi encontrado.',
    }
  }

  return {
    title: post.title,
    description: post.excerpt ?? post.content.slice(0, 160),
  }
}

const PostPage = async ({ params }: PostPageProps) => {
  const { slug } = await params

  return (
    <Suspense fallback={<SpinLoader />}>
      <SinglePost slug={slug} />
    </Suspense>
  )
}

export default PostPage
