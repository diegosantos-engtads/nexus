import Link from 'next/link'
import styles from './styles.module.css'

type PostHeadingProps = {
  url: string
  as?: 'h1' | 'h2'
  children: React.ReactNode
}

export const PostHeading = ({
  url,
  as: TagH = 'h2',

  children,
}: PostHeadingProps) => {
  return (
    <TagH>
      <Link href={url} className={`${styles.titleHeading}`}>
        {children}
      </Link>
    </TagH>
  )
}
