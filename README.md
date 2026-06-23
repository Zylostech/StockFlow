# StockFlow

家庭から在庫切れをなくすAIアシスタントです。

このフォルダをStockFlowの正本にします。

## 今すぐ開く

```bash
cd /Users/apple/Documents/Codex/StockFlow/app
python3 -m http.server 3000 --bind 0.0.0.0
```

Codex同梱Nodeで起動する場合:

```bash
cd /Users/apple/Documents/Codex/StockFlow
/Users/apple/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node server.mjs
```

Macで見る場合:

```text
http://localhost:3000
```

iPhoneで見る場合:

```text
http://192.168.3.20:3000
```

MacとiPhoneは同じWi-Fiに接続してください。

## 消えにくくする方針

「一生消えない」を完全に保証できるサービスはありません。
ただし、次の3つをそろえるとかなり強くできます。

1. GitHubにコードを保存する
2. Vercelに公開する
3. Supabaseにデータを保存する

このMacだけに置くと、Macの故障やフォルダ削除で消えます。
GitHubに置くと、コードは復元できます。
Vercelに出すと、スマホからいつでも開けます。
Supabaseに保存すると、在庫データも端末をまたいで残ります。

## 現在できること

- iPhone専用の白基調UI
- 今日の安心度スコア
- 次に無くなる商品
- 買い物リスト件数
- カテゴリー別の在庫一覧
- 商品検索
- 商品画像表示
- 買い物リストの自動追加
- 買い物完了チェック
- 家族共有の入口
- 通知設定の入口
- ブラウザ内保存

## 次にアップデートする順番

1. GitHub保存
2. Vercel公開
3. Supabase接続
4. 夫婦共有リアルタイム同期
5. Googleログイン
6. 本物のバーコード読み取り
7. 本物の写真AI認識
8. 通知
9. 賞味期限管理
10. Amazon / 楽天 / Siri連携

## 現在のフォルダ構成

```text
StockFlow/
  app/
    index.html
    styles.css
    app.js
    manifest.json
  server.mjs
  README.md
  ROADMAP.md
  PERSISTENCE_PLAN.md
  ARCHITECTURE.md
```

## 大事な注意

今の版はブラウザの中に保存します。
Safariのデータを消すと在庫データも消えます。

本当に家族で使う版にするには、Supabase接続が必要です。

## デザイン方針

- Apple Reminders / Health / Things 3 を参考にしたiPhoneファースト
- 白基調
- 余白を広く
- 大きな黒ボタンを使わない
- 操作は「撮る」「読む」「使った」に集約
- 家族が説明なしで触れる画面構成
