import Link from 'next/link'
import styles from './styles.module.css'

type PostHeadingProps = {
  url: string
  as?: 'h1' | 'h2'
  classNane?: string
  children: React.ReactNode
}

export const PostHeading = ({
  url,
  as: TagH = 'h2',
  classNane,
  children,
}: PostHeadingProps) => {
  return (
    <TagH>
      <Link href={url} className={`${classNane} ${styles.titleHeading}`}>
        {children}
      </Link>
    </TagH>
  )
}
