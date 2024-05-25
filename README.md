# 名学祭 2023 サイトリポジトリ

### 公開 URL はこちら 👉 https://meigakusai2023.web.app

（更新によって新サイトになっている恐れがあります）

## dev 環境構築

### 初回のみ

pnpm のインストール・依存関係のインストール

```zsh
npm i -g pnpm
```

```zsh
pnpm i
```

env ファイルの作成

```zsh
cp .env.local.template .env.local
```

### 開発環境の立ち上げ

next.js の dev サーバーを立ち上げる

```zsh
pnpm dev
```

## デプロイ
`main`へのマージでCD
