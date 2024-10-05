export const dictionary = {
  Hello: 'こんにちは',
  Edit: '編集',
  Delete: '削除',
  'Loading...': '読み込み中...',
  'Blog list': 'ブログ一覧',
  'Create new blog': 'ブログの新規作成',
  'There are @ errors': (count: number) => `${count}個のエラーがあります`,
  'There are @ errors on @ page': (count: number, pageName: string) =>
    `${pageName}ページに${count}個のエラーがあります`,
}
