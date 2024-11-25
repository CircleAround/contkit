import { Markdown } from '@/components/Markdown'
import * as styles from './styles.module.css'

const MarkdownContent = ({ body = '' } : { body: string }) => {
  return (
    <div className={styles.article}>
      <Markdown text={body} />
    </div>
  );
};

export default MarkdownContent