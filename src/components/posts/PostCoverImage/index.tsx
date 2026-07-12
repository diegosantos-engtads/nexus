import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>
  linkProps?: React.ComponentProps<typeof Link>
  className?: string
}

export const PostCoverImage = async ({
  imageProps,
  linkProps,
  className,
}: PostCoverImageProps) => {
  return linkProps ? (
    <Link
      {...linkProps}
      className={`${styles.linkInner} ${linkProps.className}`}
    >
      <Image
        {...imageProps}
        alt={imageProps.alt}
        className={`${styles.coverImage} ${imageProps.className} ${className}`}
      />
    </Link>
  ) : (
    <Image
      {...imageProps}
      alt={imageProps.alt}
      className={`${styles.coverImage} ${imageProps.className} ${className}`}
    />
  )
}
