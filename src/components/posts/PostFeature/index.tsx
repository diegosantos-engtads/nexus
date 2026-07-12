import { findAllPublicPostsCached } from '@/lib/post/queries'
import { PostCoverImage } from '../PostCoverImage'
import { PostSummary } from '../PostSummary'
import styles from './styles.module.css'

export const PostFeature = async () => {
  const posts = await findAllPublicPostsCached()

  const post = posts.find(post => post.coverImageUrl)

  if (!post) {
    throw new Error('PostFeature não encontrado')
  }

  return (
    <div className={`${styles.heroContainer}`}>
      <section className={`${styles.hero} container`}>
        <PostCoverImage
          linkProps={{ href: `/post/${post.slug}` }}
          imageProps={{
            src: post.coverImageUrl,
            alt: post.title,
            title: post.title,
            width: 1200,
            height: 720,
            loading: 'eager',
          }}
          className={styles.group}
        />
        <PostSummary post={post} tagH='h1' />
      </section>
    </div>
  )
}
