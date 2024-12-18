# .i18n/conf.yml

`i18n.site`の設定ファイルは`.i18n/conf.yml`で、内容は次のとおりです:

```yaml
i18n:
  fromTo:
    en:
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Blog
addon:
  - i18n.addon/toc
```

このうち、 `upload` ～ `ext:`設定項目は、公開時に`.md`だけアップロードされることを意味します。

## トップナビゲーション ナビゲーション

`nav:`構成オプション。ホームページの上部にあるナビゲーション メニューに対応します。

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

このうち、 `i18n: home` `home: Home` in `en/i18n.yml`に対応します ( `en`はプロジェクト翻訳のソース言語)。

`en/i18n.yml`コンテンツはナビゲーション メニューに表示されるテキストで、設定内の`fromTo`に従って翻訳されます (たとえば、 `zh/i18n.yml`に翻訳されます)。

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

翻訳が完了したら、translation `yml`の値を変更できますが、translation `yml`のキーを追加または削除しないでください。

### 0アウトライン付きの`use: Toc`ドキュメントテンプレート

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` 、 `Toc`テンプレートを使用してレンダリングすることを意味し、単一の`Markdown`テンプレートをレンダリングします。

`TOC`は`Table of Contents`の略です。このテンプレートがレンダリングされると、この`Markdown`ファイルのアウトラインがサイドバーに表示されます。

`url:` `Markdown`のファイル パスを表します ( `/`ルート ディレクトリ`/README.md`に対応します。このファイル名には大文字の接頭辞と小文字の接尾辞が必要です)。

### 0アウトラインのない`use: Md`ドキュメントテンプレート

`Md`テンプレートと`Toc`テンプレートは同じであり、両方とも 1 つの`Markdown`ファイルをレンダリングするために使用されます。ただし、 `Md`テンプレートではサイドバーにアウトラインが表示されません。

上記の構成の`use: Toc` `use: Md`に変更し、 `md`ディレクトリで`i18n.site`再度実行し、開発プレビュー URL にアクセスしてホームページ上の変更を確認できます。

### `use: Blog`ブログ テンプレート

ブログ テンプレートには、記事のリスト (タイトルと要約) が公開時間順に表示されます。

[→ 具体的な構成についてはここをクリックしてください](/i18n.site/conf/blog)

### `use: Doc`ファイルドキュメントテンプレート

構成ファイル内:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

テンプレートのレンダリングに`Doc`使用することを示します。

`Doc`テンプレートは、複数の`MarkDown`統合して、単一または複数のプロジェクトのドキュメント アウトラインを生成することをサポートします。

#### 複数のプロジェクトと複数のファイル

`.i18n/conf.yml` in `i18n:doc`の構成は、マルチプロジェクト マルチファイル レンダリング モードです。

ここで、 `menu: NB demo1,demo2`は、 `NB`テンプレートを使用してドロップダウン メニューをレンダリングすることを意味します。

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB`は`Name Breif`の省略形で、ドロップダウン メニューにプロジェクトの名前とスローガンを表示できることを意味します。

`NB`後にパラメータ`demo1,demo2`が渡されます。

注: ** `demo1,demo2`のカンマ`,`の前後にスペース**入れてはなりません。

上記のパラメータに対応するディレクトリ インデックス ファイルは次のとおりです。

* `en/demo1/TOC`
* `en/demo2/TOC`

#### 単一プロジェクト複数ファイル

プロジェクトが 1 つしかない場合は、次のように構成できます。

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> 複数のファイルを含む単一プロジェクトでは、ルート パス`/`として`url`の構成はサポートされません。
> __conf.yml → nav:__ルートパスが設定されていない場合、Web サイトのホームページにアクセスすると、 `nav:`設定の最初の URL に自動的に書き換えられます。
> この設計は、ディレクトリを通じてプロジェクト ドキュメント、ブログ、その他のコンテンツをより適切に区別することを目的としています。
> ホーム ページとして 1 つのファイルと 1 ページを使用することをお勧めします。

> [!TIP]
> `url`が書き込まれない場合、デフォルトの`url`は`i18n`の値になります。このルールは他のテンプレートにも有効です。

#### 目次索引

設定でテンプレート`use: Doc`が有効になっている場合は、プラグイン`i18n.addon/toc`を`.i18n/conf.yml`で有効にしてください。設定は次のとおりです:

```yml
addon:
  - i18n.addon/toc
```

`i18n.site`このプラグインを自動的にインストールして実行し、 `TOC`ディレクトリインデックスファイルを読み取り、 `json`ディレクトリアウトラインを生成します。

複数のファイルを持つ単一プロジェクトの場合、ルート ディレクトリ`TOC`は、ソース言語ディレクトリの`url:`に対応するディレクトリになります。たとえば、ソース言語が中国語の場合、 `url: flashduty`に対応するファイルは`zh/flashduty/TOC`です。

複数のプロジェクト、複数のファイルの場合は、 `url:`を設定する必要はありません。 `TOC`のルートディレクトリは、 `i18n`の値に対応するディレクトリです。

##### 詳しい内容説明

`en/blog/TOC`内容は以下の通りです:

```
README.md

news/README.md
  news/begin.md
```

##### インデントを使用してレベルを示します

上の`en/blog/TOC`の 1 行目の`README.md` 、下の図の`i18n.site`に対応しており、これがプロジェクト名です。

次の 2 行は、以下のスクリーンショットに示されているとおりです。

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News`に対応し、
`news/begin.md` `Our Product is Online !`に対応します

`TOC`ファイルはアウトラインの階層関係を示すためにインデントされ、複数レベルのインデントをサポートし、 `# `で始まる行コメントをサポートします。

##### 親レベルではタイトルのみが書き込まれ、内容は書き込まれません。

複数のレベルのインデントがある場合、親レベルではタイトルのみが書き込まれ、コンテンツは書き込まれません。そうしないと、タイポグラフィが崩れてしまいます。

##### プロジェクトの README.md

項目`README.md`には`en/demo2/README.md`などの内容を記述できます。

このファイルの内容には目次の概要が示されていないため、長さを制限して短い紹介文を書くことをお勧めします。

###### プロジェクトスローガン

`Deme Two`ドロップダウン メニューとカタログ アウトライン プロジェクト名の下にプロジェクトのタグラインが表示されている`Your Project slogan`がわかります:

![](https://p.3ti.site/1721276842.avif)

これは`en/demo2/README.md`の最初の行に対応します:

```
# Demo Two : Your Project slogan
```

プロジェクト`README.md`の第 1 レベルのタイトルの最初のコロン`:`以降の内容がプロジェクトのスローガンとみなされます。

中国、日本、韓国のユーザーは、全角コロンではなく半角コロン`:`使用する必要があることに注意してください。

##### 目次を一括で移動するにはどうすればよいですか?

ソース言語のディレクトリに配置する必要があるファイルは`TOC` 。

たとえば、ソース言語が中国語の場合、上記の`TOC`は`zh/blog/TOC`になります。

ソース言語を変更した場合は、プロジェクト内の`TOC`の言語のファイルを別の言語に一括移動する必要があります。

次のコマンドを参照できます。

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

上記のコマンドの`en/`と`zh/`言語コードに変更してください。

### 設定パスなしのデフォルトのロード

アクセスされる特定のパスについて、パス プレフィックスが`nav:`に設定されていない場合、そのパスに対応する`MarkDown`ファイルがデフォルトでロードされ、 `Md`テンプレートを使用してレンダリングされます。

たとえば、 `/test`がアクセスされ、このパスのプレフィックスなしで`nav:`が構成され、現在の閲覧言語が英語 (コード`en` ) の場合、デフォルトで`/en/test.md`ロードされ、テンプレート`Md`使用してレンダリングされます。

`/en/test.md`このファイルが存在しない場合は、デフォルトの`404`ページが表示されます。

<img src="//p.3ti.site/1721184299.avif" style="width:360px">