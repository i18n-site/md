# 製品の特徴

`i18` Markdown & Yamlを翻訳するためのコマンド ライン ツールです。

## Markdown の形式を完全に維持できる

形式を損なうことなく Markdown テーブルの翻訳をサポートします。数式やリンク内の単語は翻訳されません。

混合HTML内のMarkdownの翻訳をサポートし`<pre>` `MarkDown` `<code>`内のコンテンツは翻訳HTMLれません

## 数式を認識して翻訳をスキップできる

数式は認識され、翻訳はスキップされます。

数式の書き方については、 [「 Github数式の書き方について」](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions)を参照してください。

## コードスニペット内のコメントを翻訳する機能

インライン コードとコード スニペットは翻訳されませんが、コード内のコメントは翻訳できます。

翻訳コメントでは: ` ``` ` ` ```rust `の後に言語を示す必要があります。

現在`php` `toml` 、 `yaml` 、 `json5` 、 `go` 、 `rust` 、 `c` 、 `cpp` `java` `js` 、 `coffee` 、 `python` 、 `bash`[などの言語](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14)のコメントの翻訳がサポートされています。

必要なプログラミング言語が入手できない場合は、[お問い合わせ](https://groups.google.com/g/i18n-site)ください。

## コマンドラインフレンドリー

翻訳ドキュメントの管理に使用できる[強力なツール](https://www.capterra.com/translation-management-software)が多数あります。

`git` 、 `vim` 、 `vscode`に慣れているプログラマにとって、これらのツールを使用してドキュメントを編集し、バージョンを管理すると、学習コストが確実に増加します。

`KISS` ( `Keep It Simple, Stupid` ) この原則を信じる人の間では、エンタープライズ レベルのソリューションは扱いにくく、非効率で、使いにくいものと同義です。

翻訳はコマンドを入力してワンクリックで完了する必要があり、複雑な環境依存性があってはなりません。

必要な場合を除き、エンティティを追加しないでください。

## 修正も翻訳もなし

[translate-shell](https://github.com/soimort/translate-shell)などのコマンド ライン変換ツールもいくつかあります。

ただし、ファイルの変更の識別はサポートされておらず、コストを削減し効率を高めるために変更されたファイルを変換するだけです。

## 翻訳は編集できますが、機械翻訳によって既存の変更が上書きされることはありません。

翻訳は編集可能です。

元のテキストを変更して再度機械翻訳すると、翻訳に対する手動の変更は上書きされません (元のテキストのこの段落が変更されていない場合)。

## Xindayaの高品質な翻訳

当社は、従来の機械翻訳モデルと大規模な言語モデルの技術的利点を組み合わせた新世代の翻訳テクノロジーを開発し、翻訳を正確、スムーズ、エレガントに実現しました。

ブラインドテストの結果、当社の翻訳品質は同様のサービスと比較して大幅に優れていることがわかりました。

同じ品質を達成するには、Google 翻訳と`ChatGPT`で必要な手動編集の量はそれぞれ`2.67`倍と`3.15`倍になります。

## <a rel=id href="#price" id="price"></a> 非常に競争力のある価格設定

|                                                                                   | 米ドル/100万ワード |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [マイクロソフト](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [アマゾン](https://aws.amazon.com/translate/pricing)                                | 15            |
| [グーグル](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

注: 課金対象文字数 = ソース ファイルの[unicode](https://en.wikipedia.org/wiki/Unicode) × 翻訳の言語数

## 翻訳をサポート`YAML`

このツールは、 `YAML`の辞書値のみを変換し、辞書キーは変換しません。

`YAML` Translation に基づいて、さまざまなプログラミング言語用の国際的なソリューションを簡単に構築できます。

## ヘッダー設定`HOGO`サポート

[HOGO](https://github.com/gohugoio/hugo)タイプの静的ブログのヘッダー構成をサポートし、 `title` 、 `summary` 、および`description`フィールドのみが翻訳されます。

## 変数名を翻訳しないでください

`Markdown`電子メール テンプレートとして使用され、 `YAML`言語ファイル設定として使用され、変数パラメーターが存在します (例: recharge `${amount}`を受信しました)。

`${varname}`このような変数名は英語翻訳とみなされません。

## 中国、日本、韓国向けの翻訳の最適化

### 英語に翻訳すると、タイトルの最初の文字が自動的に大文字になります。

中国、日本、韓国には大文字、小文字の区別はありませんが、英語のタイトルは通常、最初の文字が大文字になります。

`i18`は`MarkDown`内のタイトルを認識し、大文字と小文字を区別する言語に翻訳するときに最初の文字を自動的に大文字に変換します。

たとえば`为阅读体验而优化` `Optimized for Reading Experience`として変換されます。

### 中国語、日本語、韓国語、中国語の英語用語は翻訳されません

中国、日本、韓国の文書には多くの英語用語が含まれていることがよくあります。

中国語、日本語、韓国語の機械翻訳は非英語言語となっており、次のような中国語の文のように用語がまとめて翻訳されることがよくあります。

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Google または DeepL を使用すると、両方ともオリジナルのままであるべき英語の用語が誤って翻訳されます (日本語とフランス語を例にします)。

### グーグル翻訳

`ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`に翻訳しました:

<img alt="" src="//p.3ti.site/1720199391.avif">

`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`に翻訳しました:

`Falcon`は`faucon`として翻訳され、 `Llama` `lama`として翻訳されます。固有名詞として翻訳する必要はありません。

<img alt="" src="//p.3ti.site/1720199451.avif">

### DeepL翻訳

`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`に翻訳しました:

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL上記をフランス語に翻訳します (固有名詞を書き換えて、奇数の`... `を追加します):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.サイトの翻訳

`i18`の翻訳は、中国語、日本語、韓国語の文書内の英語の用語を認識し、用語をそのまま残します。

たとえば、上記の日本語翻訳結果は次のようになります。

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

フランス語の翻訳は次のとおりです。

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

英語の単語と中国語、日本語、韓国語のテキストの間にスペースがある場合、または英語の長さが 1 より大きい場合にのみ、その単語は用語とみなされます。

たとえば、 `C罗` `Cristiano Ronaldo`として変換されます。

## 多言語サイト構築も組み合わせ可能`i18n.site`

`i18`多言語 Web サイト構築コマンド ライン ツール[`i18n.site`](/i18n.site)に統合されています。

詳細については、 [`i18n.site`](/i18n.site)のドキュメントを参照してください。

## コードオープンソース

クライアントは完全にオープンソースであり、サーバー側のコードも % オープンソースです90[ソース コードを表示するには、ここをクリックしてください](/i18n.site/src)。

オープンソースコードの開発や翻訳文の校正に参加していただけるボランティアを募集しています。

ご興味がございましたら、 [→こちらをクリックしてプロフィールをご記入の上](https://ggl.link/i18n)、[メーリングリスト](https://groups.google.com/u/2/g/i18n-site)にご参加ください。

## 連絡を取り合う

<button onclick="mailsub()">このメールをクリックして製品の更新を購読し</button>、<button onclick="webpush()">ブラウザのプッシュを有効にしてください</button>。製品の更新が行われたときに通知されます。

私たちのソーシャルアカウント/ [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social)をフォローすることも歓迎します[X.COM: @i18nSite](https://x.com/i18nSite)
