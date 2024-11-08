# インストールして使用する

## Windows ではまず git bash をインストールします

windowsシステム。[まずここをクリックして`git bash`ダウンロードしてインストールして](https://git-scm.com/download/win)ください。

後続の操作は`git bash`で実行します。

## インストール

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### 翻訳トークンを構成する

クリックしてトークンをコピーして[i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml`作成し、コピーした内容を貼り付けます。内容は次のとおりです。

```
token: YOUR_API_TOKEN
```

さらに、支払い用のクレジット カードを[i18n.site/payBill](//i18n.site/payBill)でバインドする必要があります (リチャージは必要ありません。Web サイトは使用量に応じて料金を自動的に差し引きます。[価格についてはホームページを参照してください](/#price))。

## 使用

### デモプロジェクト

`i18`翻訳の構成については、デモ プロジェクトを参照してください[github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

中国のユーザーはクローンを作成できます[atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

クローン作成後、ディレクトリに入り、 `i18`実行して変換を完了します。

### ディレクトリ構造

テンプレートウェアハウスのディレクトリ構造は次のとおりです。

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en`ディレクトリ内の翻訳済みデモ ファイルは単なる例なので、削除しても問題ありません。

### 翻訳を実行する

ディレクトリに入り、 `i18`実行して翻訳します。

翻訳に加えて、プログラムは`.i18n/data`フォルダーも生成します。それをリポジトリに追加してください。

新しいファイルを変換した後、このディレクトリに新しいデータ ファイルが生成されるので、必ず`git add . `を追加してください。

## 設定ファイル

`.i18n/conf.yml` `i18`コマンドライン変換ツールの設定ファイルです

内容は以下の通りです。

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### ソース&翻訳言語

設定ファイルでは、 `fromTo`の下位は次のようになります。

`en`はソース言語、 `zh ja ko de fr`翻訳のターゲット言語です。

言語コードを参照してください[i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

たとえば、中国語を英語に翻訳したい場合は、この行`zh: en`を書き換えます。

サポートされているすべての言語に翻訳したい場合は、 `:`後ろを空白のままにしてください。例えば

```
i18n:
  fromTo:
    en:
```

異なるサブディレクトリに対して異なる`fromTo`を設定できます/デモは次のように記述されます:

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

この構成テーブルでは、カタログ`blog`の翻訳のソース言語は`zh` 、カタログ`blog/your_file_name.md`の翻訳のソース言語は`ja`です。

### 多言語画像/リンク

画像内の URL と`replace:`および`MarkDown`のリンク (および埋め込み`HTML`の`src`および`href`属性) がこのプレフィックスを使用して`.i18n/conf.yml`に設定されている場合、URL 内のソース言語コードは翻訳の言語コード ( [languageコードリスト](/i18/LANG_CODE)）。

たとえば、構成は次のようになります。

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: `は辞書、キーは置換される URL プレフィックス、値は置換ルールです。

上記のルール`ko de uk>ru zh-TW>zh >en`を置き換える意味は、 `ko de`独自の言語コードのピクチャを使用し、 `zh-TW`と`zh` `zh`のピクチャを使用し、 `uk` `ru`のピクチャを使用し、他の言語 ( `ja`など) はピクチャを使用します。デフォルトでは`en`です。

たとえば、 `MarkDown`のフランス語 ( `fr` ) ソース ファイルは次のようになります:

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

翻訳され生成された英語 ( `en` ) ファイルは次のとおりです:

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

ここでは、ソース言語コードの`/en/`ターゲット言語の`/zh/`に置き換えられます。

注: URL 内の置換テキストの言語コードの前後には`/`が必要です。

> [!TIP]
> `url:`に`- /`が設定されている場合、相対パスのみが照合され、 `//`で始まる URL は照合されません。
>
> ドメイン名の一部のリンクを置換する必要があり、一部のリンクを置換したくない場合は、 `[x](//x.com/en/)`や`[x](https://x.com/en/)`などの異なるプレフィックスを使用してそれらを区別できます。

### ファイルを無視する

デフォルトでは、ソース言語ディレクトリ内の`.md`と`.yml`で始まるすべてのファイルが翻訳されます。

特定のファイル（未完成の下書きなど）を無視して翻訳しない場合は、 `ignore`フィールドを使用して設定できます。

`ignore` `.gitignore`ファイルと[globset](https://docs.rs/globset/latest/globset/#syntax)構文を使用します。

たとえば、上記の設定ファイルの`_* ` 、 `_`で始まるファイルは翻訳されないことを意味します。

## 翻訳ルール

### 翻訳編集者は行を追加または削除してはなりません

翻訳は編集可能です。元のテキストを変更して再度機械翻訳すると、翻訳に対する手動の変更は上書きされません (元のテキストのこの段落が変更されていない場合)。

> [!WARN]
> 翻訳の行と原文は 1 対 1 で対応している必要があります。つまり、翻訳をコンパイルするときに行を追加または削除しないでください。そうしないと、翻訳編集キャッシュで混乱が発生します。

何か問題が発生した場合は、 [FAQ で解決策を参照してください。](/i18/qa#H1)

### `YAML`翻訳

コマンド ライン ツールは、ソース言語ファイル ディレクトリ内で`.yml`で終わるすべてのファイルを検索し、翻訳します。

* ファイル名の接尾辞は ( `.yaml`ではなく) `.yml`でなければならないことに注意してください。

このツールは、辞書キーではなく、 `.yml`の辞書値のみを変換します。

たとえば`i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml`として変換されます

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML`の変換は手動で変更することもできます (ただし、変換内のキーや行を追加または削除しないでください)。

`YAML`翻訳に基づいて、さまざまなプログラミング言語に対応する国際的なソリューションを簡単に構築できます。

## 高度な使用法

### 翻訳サブディレクトリ

`.i18n/conf.yml`が作成されている限り (毎回デモ プロジェクト テンプレートから開始する必要はありません)、 `i18`問題なく動作します。

コマンド ライン ツールは、すべてのサブディレクトリで`.i18n/conf.yml`構成を検索し、それらを変換します。

[monorepo](//monorepo.tools)アーキテクチャを使用するプロジェクトでは、言語ファイルをサブディレクトリに分割できます。

![](https://p.3ti.site/1719910016.avif)

### カスタムインストールディレクトリ

デフォルトでは`/usr/local/bin`にインストールされます。

`/usr/local/bin`書き込み権限がない場合は、 `~/.bin`にインストールされます。

環境変数`TO`を設定すると、インストール ディレクトリを定義できます (例: :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```