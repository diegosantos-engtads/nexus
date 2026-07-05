import { PostDate } from '../PostDate'
import { PostHeading } from '../PostHeading'
import styles from './styles.module.css'

type PostSummaryProps = {
  post: {
    id: string
    title: string
    slug: string
    excerpt: string
    createdAt: string
    author: string
  }
  tagH?: 'h1' | 'h2'
  className?: string
}

export const PostSummary = ({
  post,
  tagH = 'h2',
  className,
}: PostSummaryProps) => {
  return (
    <div className={`${styles.heroContent} ${className}`}>
      <small>
        {post.author} | <PostDate dateTime={post.createdAt} />
      </small>
      <PostHeading as={tagH} url={`/post/${post.slug}`}>
        {post.title}
      </PostHeading>
      <p>{post.excerpt}</p>
    </div>
  )
}
