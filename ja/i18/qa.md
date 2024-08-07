# よくある問題

## 翻訳文の行を追加または削除すると、翻訳に混乱が生じます。

**翻訳の行数は元のテキストの行数に対応している必要があること**に注意してください。

つまり、翻訳を手動で調整する場合は、**翻訳の行を追加または削除しないで**ください。そうしないと、翻訳と元のテキストの間のマッピング関係が乱れます。

誤って行を追加または削除して混乱を引き起こした場合は、翻訳を変更前のバージョンに復元し、翻訳を`i18`実行して、正しいマッピングを再キャッシュしてください。

翻訳と元のテキストの間のマッピングは、トークンにバインドされています。 [i18n.site/token](//i18n.site/token)で新しいトークンを作成し、 `.i18h/hash`再度翻訳して、混乱を招くマッピングをクリアします (ただし、これにより、翻訳に対する手動調整がすべて失われます)。

## `YAML`リンクの`HTML` `Markdown`に変換されないようにする:

`YAML`の値は翻訳の際に`MarkDown`として扱われます。

`<a href="/">Home</a>`に変換されるなど`[Home](/)` `HTML` → `MarkDown`の変換が望ましくない場合があります。

この変換を回避するには、 `href`以外の属性 ( `<a class="A" href="/">Home</a>`など) を`a`タグに追加します。

## `./i18n/hash`次のファイルが競合しています

競合するファイルを削除して、翻訳を再実行してください`i18`
