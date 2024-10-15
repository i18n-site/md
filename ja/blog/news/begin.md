---

brief: |
  現在、i18(MarkDown コマンド ライン翻訳ツール)と i18n.site(多言語静的ドキュメントサイトジェネレーター)という 2 つのオープン ソースコマンド ラインツールが実装されています

---


# i18n.site · MarkDown 翻訳、ウェブサイト構築ツールがリリースされました！

半年以上の開発を経て、[https://i18n.site](//i18n.site) がリリースされました。

現在、以下の 2 つのオープン ソースコマンド ラインツールが実装されています

* `i18` : MarkDownのコマンドライン翻訳ツール
* `i18n.site` : **読者体験を最適化された**多言語の静的ドキュメントサイトジェネレーター

翻訳は `Markdown` の形式を完全に保ちます。ファイルの変更を検出し、変更が加わったファイルのみを翻訳します。

翻訳は編集可能であり、元のテキストを変更することもできます。再度機械翻訳を行う場合、既存の翻訳に対する手動の修正は上書きされません(元のテキストのこの段落が変更されていない場合を除きます)。

[ここをクリックして承認し、 githubを自動的にフォローi18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) 、**ボーナス$50を受け取ります**。

## 起源

インターネット時代において、全世界が市場となっており、多言語対応とローカライズは基本動作です。

既存の翻訳管理ツールは重過ぎるため、`git` を使用してバージョン管理を行うプログラマーはコマンド ラインを好む傾向にあります。

その結果、翻訳ツール`i18`を開発し、そのツールを基に多言語の静的サイト生成器`i18n.site`を構築しました。

![](https://p.3ti.site/1723777556.avif)

これはただの始まりであり、まだやるべきことがたくさんあります。

例えば、静的ドキュメントサイトをソーシャルメディアやメール订阅と統合することで、更新が公開された際にユーザーに迅速に通知できます。

また、任意のウェブページに埋め込むことができる多言語フォーラムやチケットシステムを提供し、ユーザーがスムーズにコミュニケーションを取れるようにします。

## オープン ソース

フロントエンド、バックエンド、コマンド ラインの[コードはすべてオープン ソースです](https://i18n.site/i18n.site/c/src)(翻訳モデルは現時点ではオープン ソースではありません)。

使用している技術スタックは以下の通りです

フロントエンド: [Svelte](https://svelte.dev)、[Stylus](https://stylus-lang.com)、[Pug](https://github.com/pugjs/pug)、[Vite](https://github.com/vitejs/vite)

コマンド ラインおよびバックエンド: Rust

バックエンド: [Axum](https://github.com/tokio-rs/axum)、[Tower-HTTP](https://github.com/tower-rs/tower-http/releases)

コマンド ライン: [嵌入式 JS エンジン Boa Engine](https://docs.rs/boa_engine)、[嵌入式データベース Fjall](https://github.com/fjall-rs/fjall)

サーバー VPS: [Contabo](https://my.contabo.com)

データベース: [Kvrocks](https://kvrocks.apache.org)、[MariaDB](https://mariadb.org)

メール送信: 自社構築 SMTP [Chasquid](https://github.com/albertito/chasquid)

## お問い合わせ

新製品のリリースには問題がつきものですが。

Google フォーラムを通じてお問い合わせください: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)