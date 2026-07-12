import { findPostBySlugCached } from '@/lib/post/queries'
import { notFound } from 'next/navigation'
import { PostCoverImage } from '../PostCoverImage'
import { PostSummary } from '../PostSummary'
import styles from './styles.module.css'

type SinglePostProps = {
  slug: string
}

export const SinglePost = async ({ slug }: SinglePostProps) => {
  const post = await findPostBySlugCached(slug)

  if (!post) notFound()

  return (
    <article>
      <div className={styles.articleSinglePost}>
        <section className={`${styles.sectionSinglePost} container`}>
          <PostCoverImage
            imageProps={{
              width: 1200,
              height: 720,
              src: post.coverImageUrl,
              alt: post.title,
              loading: 'eager',
            }}
            className={`${styles.singleCoverImage}`}
          />
          <PostSummary
            post={{
              id: post.id,
              title: post.title,
              slug: post.slug,
              excerpt: post.excerpt,
              createdAt: post.createdAt,
              author: post.author,
            }}
            className={`${styles.singleSummary}`}
            tagH='h1'
          />
        </section>
      </div>
      <section className='container'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          tenetur fugit expedita nostrum vitae asperiores eius quibusdam
          provident libero consectetur accusamus odio ad dolorem id quisquam
          excepturi, minus maiores unde?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          tenetur fugit expedita nostrum vitae asperiores eius quibusdam
          provident libero consectetur accusamus odio ad dolorem id quisquam
          excepturi, minus maiores unde?
        </p>
      </section>
    </article>
  )
}
