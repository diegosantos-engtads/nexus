import clsx from 'clsx'
import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'
import styles from './styles.module.css'

type SafeMarkdownProps = {
  markdown?: string
}

export const SafeMarkdown = ({ markdown }: SafeMarkdownProps) => {
  return (
    <section
      className={clsx(
        styles.sectionMarkdown,
        'container prose prose-code:whitespace-pre-wrap prose-img:mx-auto',
      )}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </section>
  )
}
