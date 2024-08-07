# プロジェクトのバージョン

デモ プロジェクトを例として挙げます。

`en/demo2/v`はプロジェクトの現在のバージョン番号で、サイドバーのアウトラインのプロジェクト名の右側に表示されます。

<img src="https://p.3ti.site/1721290486.avif" width="320px">

ここでは`en/` `.i18n/conf.yml`翻訳ソース言語に対応する言語コードを示します。

ソース言語が英語でない場合は、 `v`ファイルをソース言語のプロジェクト ディレクトリに配置する必要があります。 

ドキュメントの過去のバージョンを参照する機能は開発中です。

バージョン番号が多すぎるために検索エンジンによってインデックス付けされたページが乱雑になるのを避けるために、メジャー アップデート ( `v1` 、 `v2`など) をリリースする場合にのみドキュメントのバージョン番号を変更することをお勧めします。

## 空`v`ファイルを使用して、異なるプロジェクトのファイル インデックスを分割します。

デモ プロジェクトでは、 `en/demo2/v`に加えて、 `en/blog`ディレクトリと`en/demo1`ディレクトリの内容が空であることもわかります`v` files.

空の`v`はサイドバーのアウトラインに表示されませんが、 `v`ファイルが存在する限り、ディレクトリおよびサブディレクトリ内のファイルに対して独立したインデックスが生成されます。

異なるプロジェクトのインデックスを分割することで、サイト全体のすべてのファイルのインデックスを一度に読み込むことによって引き起こされるアクセスの低下を回避できます。

たとえば、デモ プロジェクトでは`blog`対応するインデックス ファイルは[https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)です:

