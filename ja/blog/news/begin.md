---

brief: |
  現在、i18 (MarkDown コマンド ライン変換ツール) と i18n.site (多言語静的ドキュメント サイト ジェネレーター) という 2 つのオープン ソース コマンド ライン ツールが実装されています。

---


# i18n.site · MarkDown 翻訳および Web サイト構築ツールがオンラインになりました。

半年以上の開発期間を経て、 [https://i18n.site](//i18n.site)がオンライン化されました。

現在、次の 2 つのオープン ソース コマンド ライン ツールが実装されています。

* `i18` : MarkDownコマンドライン変換ツール
* `i18n.site` :**読書体験に最適化された**多言語静的ドキュメント サイト ジェネレーター

変換では`Markdown`の形式を完全に維持できます。ファイルの変更を識別し、変更が含まれるファイルのみを翻訳できます。

翻訳は編集可能です。元のテキストを変更して再度機械翻訳しても、翻訳に対する手動の変更は上書きされません (元のテキストのこの段落が変更されていない場合)。

[➤ ここをクリックして認証しi18n.site github Library を自動的にフォローして](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo)、**ボーナス$50を受け取ります**。

## 起源

インターネット時代では全世界が市場となり、多言語対応とローカリゼーションは基礎的なスキルとなります。

既存の翻訳管理ツールは重すぎます。バージョン`git`管理に依存しているプログラマーは、依然としてコマンド ラインを好みます。

そこで、翻訳ツール`i18`を開発し、その翻訳ツールをベースにした多言語静的サイトジェネレーター`i18n.site`構築しました。

![](https://p.3ti.site/1723777556.avif)

これはほんの始まりにすぎず、やるべきことはまだたくさんあります。

たとえば、静的ドキュメント サイトをソーシャル メディアや電子メールの購読と結び付けることで、更新がリリースされたときにユーザーに間に合うように連絡できます。

たとえば、多言語フォーラムや作業指示システムを任意の Web ページに埋め込むことができるため、ユーザーは障壁なくコミュニケーションを行うことができます。

## オープンソース

フロントエンド、バックエンド、コマンド ライン[コードはすべてオープン ソースです](https://i18n.site/i18n.site/c/src)(変換モデルはまだオープン ソースではありません)。

使用されるテクノロジースタックは次のとおりです。

フロント[svelte](https://svelte.dev) 、 [stylus](https://stylus-lang.com) 、 [pug](https://github.com/pugjs/pug) 、 [vite](https://github.com/vitejs/vite)

コマンドラインとバックエンドはRustに基づいて開発されています。

後部[axum](https://github.com/tokio-rs/axum) 、 [tower-http](https://github.com/tower-rs/tower-http/releases) 。

コマンドライン[jsエンジンboa_engine](https://docs.rs/boa_engine) 、[組み込みデータベースfjall](https://github.com/fjall-rs/fjall) 。

[contabo](https://my.contabo.com) VPS

データベース[kvrocks](https://kvrocks.apache.org) 、 [mariadb](https://mariadb.org) 。

self-built SMTPにメール[chasquid](https://github.com/albertito/chasquid)送信します。

## お問い合わせ

新製品が発売されるとき、問題は避けられません。

Google フォーラムからお気軽にお問い合わせください: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)