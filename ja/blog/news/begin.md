# i18n.site · MarkDown 翻訳および Web サイト構築ツール、リリースいたしました！

半年近くの開発の末、[https://i18n.site](//i18n.site) がリリースされました。

以下の二つのオープンソースのコマンドラインツールを実装しています

* `i18` : MarkDown コマンドライン翻訳ツール
* `i18n.site` : **読者体験を最優先にした** 多言語静的ドキュメントサイトジェネレーター

翻訳は `Markdown` の形式を完全に保持します。ファイルの変更を検知し、変更されたファイルのみを翻訳します。

翻訳は編集可能です。元のテキストを変更して再度機械翻訳しても、翻訳に対する手動の変更は上書きされません(元のテキストのこの段落が変更されていない場合)。

[ここをクリックして承認しi18n.site githubを自動的にフォローし](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo)、**ボーナス$50を受け取ります**。

## 起源

インターネット時代において、全世界が市場であり、多言語対応とローカライズは基本動作です。

現在の翻訳管理ツールは重過ぎます。`git` を使用したバージョン管理を行うプログラマーは、コマンドラインを好む傾向にあります。

そこで、翻訳ツール `i18` を開発し、その基盤を用いて多言語の静的サイトジェネレーター `i18n.site` を構築しました。

![](https://p.3ti.site/1723777556.avif)

これはただの始まりであり、まだやるべきことが多くあります。

例えば、静的ドキュメントサイトをソーシャルメディアやメール订阅と統合することで、更新をリリースした際にユーザーに迅速に連絡できます。

例えば、任意のウェブページに埋め込むことができる多言語フォーラムやチケットシステムを提供し、ユーザーがスムーズにコミュニケーションを行えるようにします。

## オープンソース

フロントエンド、バックエンド、コマンドラインの[コードはすべてオープンソースです](https://i18n.site/i18n.site/c/src)(翻訳モデルは現時点ではオープンソースではありません)。

使用技術スタックは以下の通りです

フロントエンド: [svelte](https://svelte.dev)、[stylus](https://stylus-lang.com)、[pug](https://github.com/pugjs/pug)、[vite](https://github.com/vitejs/vite)

コマンドラインおよびバックエンド: Rustを基盤として開発

バックエンド: [axum](https://github.com/tokio-rs/axum)、[tower-http](https://github.com/tower-rs/tower-http/releases)

コマンドライン: [嵌入式JSエンジン boa_engine](https://docs.rs/boa_engine)、[嵌入式データベース fjall](https://github.com/fjall-rs/fjall)

サーバーVPS: [contabo](https://my.contabo.com)

データベース: [kvrocks](https://kvrocks.apache.org)、[mariadb](https://mariadb.org)

メール送信: 自社構築SMTP [chasquid](https://github.com/albertito/chasquid)

## お問い合わせ

新しい製品をリリースする際には、問題が発生することは避けられません。

Google フォーラムよりご連絡いただけます: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)