---

brief: |
  現在、i18(MarkDown コマンド ライン翻訳ツール)と i18n.site(多言語静的ドキュメントサイトジェネレーター)という 2 つのオープン ソースコマンド ラインツールを実装しています

---


# i18n.site · MarkDown 翻訳、サイト構築ツールがリリースされました！

半年以上の開発を経て、[https://i18n.site](//i18n.site) がリリースされました。

現在、以下の 2 つのオープン ソースコマンド ラインツールを実装しています

* `i18` : MarkDown コマンド ライン翻訳ツール
* `i18n.site` : **読者体験を重視した**多言語静的ドキュメントサイトジェネレーター

翻訳は `Markdown` の形式を完全に保ち、ファイルの変更を検出して、変更されたファイルのみを翻訳します。

翻訳は編集可能であり、元のテキストを変更することで、再度機械翻訳を行う場合でも、手動で行った修正は上書きされません(元のテキストのこの段落が変更されていない場合を除きます)。

[ここをクリックして承認し、 githubを自動的にフォローi18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) 、**ボーナス$50を受け取ります**。

## 起源

インターネット時代において、全世界が市場となっており、多言語対応とローカライズは基本スキルです。

既存の翻訳管理ツールは重過ぎ、`git` を使用してバージョン管理を行うプログラマーにとっては、コマンド ラインが好ましいです。

その結果、翻訳ツール`i18`を開発し、そのツールを基に多言語の静的サイト生成器`i18n.site`を構築しました。

![](https://p.3ti.site/1723777556.avif)

これはただの始まりであり、やるべきことはまだ多くあります。

例えば、静的ドキュメントサイトをソーシャルメディアやメール订阅と統合することで、更新をリリースした際にユーザーに迅速に連絡できるようにします。

例えば、任意のウェブページに埋め込める多言語フォーラムやチケットシステムを提供し、ユーザーがスムーズにコミュニケーションできるようにします。

## オープン ソース

フロントエンド、バックエンド、コマンド ラインの[コードはすべてオープン ソースです](https://i18n.site/i18n.site/c/src)(翻訳モデルは現時点ではオープン ソースではありません)。

使用する技術スタックは以下の通りです

フロントエンド: [svelte](https://svelte.dev)、[stylus](https://stylus-lang.com)、[pug](https://github.com/pugjs/pug)、[vite](https://github.com/vitejs/vite)

コマンド ラインおよびバックエンド: Rust

バックエンド: [axum](https://github.com/tokio-rs/axum)、[tower-http](https://github.com/tower-rs/tower-http/releases)

コマンドライン[jsエンジンboa_engine](https://docs.rs/boa_engine) 、[組み込みデータベースfjall](https://github.com/fjall-rs/fjall) 。

サーバー VPS: [contabo](https://my.contabo.com)

データベース: [kvrocks](https://kvrocks.apache.org)、[mariadb](https://mariadb.org)

メール送信: 自社構築 SMTP [chasquid](https://github.com/albertito/chasquid)

## お問い合わせ

新製品のリリースには問題が避けられません。

Google フォーラムを通じてお問い合わせください: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)