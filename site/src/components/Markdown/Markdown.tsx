import {remark} from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm'

export const Markdown = ({text}: {text: string}) => {
  const htmlContent = remark()
    .use(remarkHtml)
    .use(remarkGfm)
    .processSync(text)
    .toString();

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
}
