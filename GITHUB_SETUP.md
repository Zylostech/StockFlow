# StockFlow GitHub Setup

## Goal

StockFlowを次の流れで育てる。

```text
Codexでアプリ完成
↓
Gitで保存
↓
GitHubにアップロード
↓
少しずつ改良
↓
スマホでずっと使える形にする
```

## Current Source

正本フォルダ:

```text
/Users/apple/Documents/Codex/StockFlow
```

## Step 1: Gitを使えるようにする

MacにApple Command Line Toolsを入れる。

インストール後に確認:

```bash
git --version
```

## Step 2: Gitで保存

```bash
cd /Users/apple/Documents/Codex/StockFlow
git init
git add .
git commit -m "Initial StockFlow app"
```

## Step 3: GitHubにアップロード

GitHubで `stockflow` というリポジトリを作る。

そのあと:

```bash
cd /Users/apple/Documents/Codex/StockFlow
git branch -M main
git remote add origin https://github.com/YOUR_NAME/stockflow.git
git push -u origin main
```

`YOUR_NAME` はGitHubのユーザー名に置き換える。

## Step 4: スマホでずっと使える形

次はVercelへ公開する。

```text
GitHub
↓
Vercel
↓
スマホで開けるURL
```

## Step 5: データを消えにくくする

今の在庫データはブラウザ保存。
本格運用ではSupabaseへ移す。

```text
アプリ画面: Vercel
コード保存: GitHub
在庫データ: Supabase
```

この3つで、Macを閉じてもスマホで使い続けられる形になる。
