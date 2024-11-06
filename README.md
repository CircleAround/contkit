# for /site

## development

1. service_account_key.json をチームメンバーから取得してプロジェクトルートに配置（Firebase扱える人は自分で用意しても良い）
2. /site/.env のファイルを作成
   - GOOGLE_APPLICATION_CREDENTIALS=[service_account_key.jsonのパス]
3. コマンド実行
   - npm i
   - npm run develop
4. http://localhost:8000 へアクセス