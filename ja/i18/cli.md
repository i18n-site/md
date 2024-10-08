# コマンドラインパラメータの詳細な説明

## `-p` ファイルのクリーンアップ

`-p` または `--purge` を指定すると、各翻訳ディレクトリに存在するがソース言語ディレクトリに存在しないファイルが削除されます。

ドキュメント作成の際、Markdown ファイル名が頻繁に調整されるため、翻訳ディレクトリ内に不要な古いファイルが多数残るすることがあります。

このパラメータを使用すると、他の言語ディレクトリ内で削除すべきファイルをクリーンアップすることができます。

## `-d` 翻訳ディレクトリを指定します

翻訳ディレクトリのデフォルトは、現在のファイルがあるディレクトリです。

`-d` または `--workdir` を使用して、以下のように翻訳ディレクトリを指定できます

```
i18 -d ~/i18n/md
```

## `-h` ヘルプを表示します

`-h` または `--help` を指定すると、コマンドラインのヘルプが表示されます。