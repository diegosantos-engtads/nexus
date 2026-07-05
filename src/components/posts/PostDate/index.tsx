import { formatRelativeDate, getFormattedDate } from '@/utils/format-datetime'
import styles from './styles.module.css'

type PostDateProps = {
  dateTime: string
}

export const PostDate = ({ dateTime }: PostDateProps) => {
  return (
    <time
      className={styles.dateTime}
      dateTime={dateTime}
      title={formatRelativeDate(dateTime)}
    >
      {getFormattedDate(dateTime)}
    </time>
  )
}
