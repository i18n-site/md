# I18N.SITE · 国境なき言語<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE、 [100 の異なる言語](https://github.com/i18n-site/node/blob/main/lang/src/index.js)への自動翻訳をサポートする静的サイト ジェネレーター。

<img src="https://i-01.eu.org/2023/09/O0Tee_m.webp" alt="" />

ブラウザに翻訳機能が組み込まれているので、Web サイトを国際化する必要はないのではないかと疑問に思う人もいるかもしれません。

**サイト全体を国際化することによってのみ、多言語のサイト内全文検索と検索エンジンの最適化をサポートできると**言いたいのです。

## チュートリアル

## 機能紹介

### マークダウン形式を維持する

### 翻訳の変更

変換を変更した後、 `./i18n.sh`を再実行してキャッシュを更新する必要があります。

### 翻訳メモ

翻訳コメントでは、 ` ```rust`のように \``` の後に言語を示す必要があります。

現在、rust、c、cpp、java、js、coffee、python、bash のコメント翻訳をサポートしています。

[tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee)を編集して、より多くの言語のコメントの翻訳サポートを追加します。

### プロキシの構成

次の環境変数を設定すると、Google Translate API 呼び出しがプロキシを経由できるようになります。

```bash
```bash
```bash
```bash
```bash
```bash
export https_proxy=http://127.0.0.1:7890
```

### 変数の埋め込み

```
test: 测试变量<br 0>嵌入
```

### キャッシュを空にしてください

```bash
```bash
```bash
```bash
```bash
```bash
rm -rf .i18n/.cache
```
