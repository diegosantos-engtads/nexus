import { postRepository } from '@/repositories/post'
import { PostCoverImage } from '../PostCoverImage'
import { PostSummary } from '../PostSummary'
import styles from './styles.module.css'

export const PostsList = async () => {
  const posts = await postRepository.findAll()

  return (
    <section className={`${styles.sectionList} container`}>
      {posts.slice(1).map(post => (
        <article className={styles.articleList} key={post.id}>
          <div className={styles.divList}>
            <PostCoverImage
              linkProps={{ href: `/post/${post.slug}` }}
              imageProps={{
                src: post.coverImageUrl,
                alt: post.title,
                title: post.title,
                width: 1200,
                height: 720,
                loading: 'lazy',
              }}
              className={styles.group}
            />
            <PostSummary post={post} />
          </div>
        </article>
      ))}
    </section>
  )
}
