# コードベース

## フロントエンド

* [GitHub](https://github.com/i18n-site/site) / [AtomGit](https://atomgit.com/i18n/proto)
* ドキュメント [GitHub](https://github.com/i18n-site/md) / [AtomGit](https://atomgit.com/i18n/md)
* 独立コンポーネント [GitHub](https://github.com/i18n-site/18x) / [AtomGit](https://atomgit.com/i18n/18x)
* svelteコンポーネント [GitHub](https://github.com/i18n-site/plugin) / [AtomGit](https://atomgit.com/i18n/plugin)
* インターフェース [GitHub](https://github.com/i18n-site/proto) / [AtomGit](https://atomgit.com/i18n/proto)
* 汎用ベースライブラリ [GitHub](https://github.com/i18n-site/lib) / [AtomGit](https://atomgit.com/i18n/lib)
* ブラウザベースライブラリ [GitHub](https://github.com/i18n-site/ie) / [AtomGit](https://atomgit.com/i18n/ie)
* パッケージ化不要で直接参照可能なフロントエンドライブラリ [GitHub](https://github.com/i18n-site/x) / [AtomGit](https://atomgit.com/i18n/x)
  Markdownの初期化スクリプトで直接参照可能であり、同時にパッケージ化されたウェブサイトでも使用できるため、コードの重複を避けることができます。

## バックエンド

ドキュメントサイトの構築にはフロントエンドのみで suffice であり、バックエンドは不要です。

このバックエンドは、i18n.siteサイト自体のバックエンドであり、ユーザー、支払い、メッセージングシステムなどが含まれています。

* サービス [GitHub](https://github.com/i18n-api/srv) / [AtomGit](https://atomgit.com/i18n-api/srv)
* プラグイン [GitHub](https://github.com/i18n-api/pub) / [AtomGit](https://atomgit.com/i18n-api/pub)
* ベースライブラリ [GitHub](https://github.com/i18n-site/rust) / [AtomGit](https://atomgit.com/i18n/rust)

## 開発

* ローカルコンテナ [GitHub](https://github.com/i18n-api/srv.docker) / [AtomGit](https://atomgit.com/i18n-api/srv.docker)

## 運用および保守

* オンラインデプロイメントスクリプト [GitHub](https://github.com/i18n-ops/ops) / [AtomGit](https://atomgit.com/i18n-ops/ops)
* Ubuntuシステム設定 [GitHub](https://github.com/i18n-ops/ubuntu) / [AtomGit](https://atomgit.com/i18n-ops/ubuntu)
* 定時タスク [GitHub](https://github.com/i18n-cron/cron) / [AtomGit](https://atomgit.com/i18n/cron)

## 技術スタック

### フロントエンド

* [svelte](//svelte.dev)
* [coffeescript](//coffeescript.org)
* [pug](https://github.com/pugjs/pug)
* [stylus](https://stylus.com)

### バックエンド

* [rust](//rust.org)
  * [axum](//github.com/tokio-rs/axum)
  * [boa](//github.com/boa-dev/boa)
  * [swc](//swc.rs)
* [node](//nodejs.org)
* [bun](//bun.dev)

## 開発参加

オープンソースコードの開発や翻訳文の校正に参加していただけるボランティアを募集しています。

ご興味がございましたら、[→ こちらをクリックしてプロフィールをご記入の上](https://ggl.link/i18n)、[メーリングリスト](https://groups.google.com/u/2/g/i18n-site)にご参加ください。