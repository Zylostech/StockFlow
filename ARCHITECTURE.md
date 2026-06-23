# StockFlow Architecture

## Current Goal

AI機能を実装する前に、画面遷移とデータ構造を完成させる。

## App Structure

```text
StockFlow/
  app/
    index.html      # 画面の骨格
    styles.css      # iPhone専用UI
    app.js          # 状態管理、描画、画面遷移
    manifest.json   # PWA設定
  server.mjs        # ローカル確認用サーバー
  README.md
  ROADMAP.md
  PERSISTENCE_PLAN.md
  ARCHITECTURE.md
```

## Screens

### Home

- 安心度スコア
- 次に無くなる商品
- 買い物リスト件数

### Inventory

- カテゴリー別表示
- 検索
- 商品画像

### Shopping

- しきい値を下回った商品の自動追加
- 完了チェック

### Settings

- 家族共有の入口
- 通知設定
- 買い物リスト自動追加設定

## Data Model

```js
{
  id: "toilet-paper",
  name: "トイレットペーパー",
  category: "紙用品",
  imageUrl: "...",
  quantity: 2,
  minQuantity: 3,
  daysLeft: 5,
  nextOutDate: "6月28日",
  shopping: {
    autoAdded: true,
    completed: false
  },
  history: []
}
```

## Future Extension Points

`app.js` に `futureAdapters` を置いています。

- `barcodeScanner`
- `imageRecognition`
- `familySync`
- `notificationScheduler`

今は未接続です。
今後、本物のAPIやSupabaseを入れる時にここへ接続します。
