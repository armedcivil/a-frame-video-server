# a-frame-video-server

## 環境

|名称|バージョン|備考|
|---|---|---|
|node|v8.7.0|実行環境|
|yarn|1.2.1|パッケージマネージャー|
|yargs|9.0.1|node fuse に引数を渡す|
|fuse-box|2.3.3|モジュールバンドラー|
|typescript|2.5.3|Compiler|

## 構築

### yarn のインストール
homebrew で yarn をインストール

```$ brew install yarn```

### モジュールをインストール

```
$ cd a-frame-video-server
$ yarn install # yarn.lock を使用してインストール
```

## ビルド

```
$ npm run build
```

## tsconfig
fuse-box のデフォルトの tsconfig を使用
カスタムで使用する場合は、tsconfig.json を用意し

Fuse.init の設定にそのパスを加える

```
Fuse.init({
  "tsConfig":"tsconfig.json" // プロジェクトフォルダに tsconfig.json を置く場合
})
```
