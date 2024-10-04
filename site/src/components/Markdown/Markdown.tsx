import {remark} from 'remark';
import remarkHtml from 'remark-html';

export const Markdown = ({text}: {text: string}) => {
  const htmlContent = remark()
    .use(remarkHtml)
    .processSync(text)
    .toString();

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
}

