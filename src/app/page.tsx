import { SpinLoader } from '@/components/layout/SpinLoader'
import { PostFeature } from '@/components/posts/PostFeature'
import { PostsList } from '@/components/posts/PostsList'
import { Suspense } from 'react'

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeature />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </>
  )
}
