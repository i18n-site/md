<h1 style="justify-content:space-between">3Ti.Site · 国境なく考える<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

多言語静的サイト ジェネレーターである 3Ti.Site は、Markdown を[100 以上の異なる言語](https://github.com/i18n-site/node/blob/main/lang/src/index.js)に自動的に翻訳できます。

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

ブラウザに翻訳機能が組み込まれているので、Web サイトを国際化する必要はないのではないかと疑問に思う人もいるかもしれません。

**サイト全体を国際化することによってのみ、多言語のサイト内全文検索と検索エンジンの最適化をサポートできると**言いたいのです。

## 順序

『聖書・創世記』:

> 古代人は言語を区別していませんでした。彼らは誇りを持って生まれ、頂上が天まで届く高い塔を建てたいと思っていました。
> <blockquote><p>神は人間の傲慢さに不満を抱き、すべての生き物を互いに理解できないまま各地に散らしました。</p></blockquote>
> <blockquote><p>それ以来、人間同士の意思疎通は難しく、争いは絶えず、世界にはバベルの塔は存在しませんでした。</p></blockquote>

SF 小説「三体」（中国語発音: `3Ti` ）は、電磁波を通じて通信し、言語の壁がなく、技術的に繁栄している異星文明を架空の小説にしています。

このツールの助けを借りて、地球の人々が三体の人間のようになり、コミュニケーションが言語によって制限されなくなり、すべての人類が再び団結することを願っています。

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
export https_proxy=http://127.0.0.1:7890
```

### 変数の埋め込み

```
test: 测试变量<br 0>嵌入
```

### キャッシュを空にしてください

```bash
rm -rf .i18n/.cache
```
