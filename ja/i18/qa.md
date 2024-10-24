# よくある質問

## 翻訳文の行を追加または削除することで、翻訳が乱れることがあります

> [!WARN]
> **翻訳文の行数は元のテキストの行数と一一対応させる**ことが重要です。
> つまり、手動で翻訳を調整する際には、**翻訳文の行を追加または削除しない**ことが肝要です。それをすると、翻訳と原文の対応関係が崩れます。

不小心で行を追加または削除し、混乱が生じた場合は、翻訳を前のバージョンに戻し、再度 `i18` 翻訳を実行して、正しい対応を再キャッシュしてください。

翻訳と原文の対応関係はトークンに紐付けています。 [i18n.site/token](//i18n.site/token) で新しいトークンを作成し、`.i18h/hash` を削除して再度翻訳すると、混乱した対応をクリアできます(ただし、これにより手動で行った翻訳の修正が全て失われます)。

## `YAML` : リンクの `HTML` が `Markdown` に変換されないようにする方法

`YAML` の値は翻訳の際に `Markdown` として処理されます。

時折、 `<a href="/">Home</a>` が `[Home](/)` に変換されるなど、`HTML` → `Markdown` の変換が期待通りに行われないことがあります。

`href` 以外の属性を `a` タグに追加することで、この変換を回避できます。例えば `<a class="A" href="/">Home</a>` などです。

## `./i18n/hash` 下のファイルの競合

競合するファイルを削除し、再度 `i18` 翻訳を実行してください。