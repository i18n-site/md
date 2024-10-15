# 製品の特徴

`i18`は、MarkdownおよびYamlを翻訳するコマンドラインツールです。

## Markdownの形式を完全に保つことができます

Markdownのテーブルを形式を損なうことなく翻訳し、数式やリンク内の単語は翻訳しません。

混合HTML Markdownの翻訳をサポートします。 HTML `MarkDown`に埋め込まれたタグ`<pre>`と`<code>`の内容は翻訳されません

## 数式を認識して翻訳をスキップすることができます

数式は認識され、翻訳はスキップされます。

数式の書き方については、[「Githubの数学式の書き方」](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions)を参照してください。

## コードスニペット内のコメントを翻訳する機能があります

インラインコードおよびコードスニペットは翻訳されませんが、コード内のコメントは翻訳されます。

翻訳するコメントでは、` ``` `の後に言語を明示する必要があります。例:` ```rust `。

`java`、`toml`、`yaml`、`json5`、`js`、`bash`[およびその他の言語](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14)、`cpp`の注釈を`coffee`、`python`、`php`、`go`、`rust`、`c`に翻訳します。

必要なプログラミング言語がない場合は、[お問い合わせ](https://groups.google.com/g/i18n-site)ください。

## コマンドライン操作に友好です

多くの[強力なツール](https://www.capterra.com/translation-management-software)が翻訳ドキュメントの管理に使用できます。

`git`、`vim`、`vscode`に精通したプログラマーにとって、これらのツールを用いてドキュメントを編集し、バージョン管理を行うと、学習コストが増加します。

`KISS` ( `Keep It Simple, Stupid` ) 原理主義者の間では、エンタープライズ レベルのソリューションは扱いにくく、非効率で、使いにくいものと同義です。

翻訳はコマンドを入力してワンクリックで完了するべきで、複雑な環境依存は避けるべきです。

必要でない限り、エンティティを追加しないでください。

## 修正無し、翻訳無し

[translate-shell](https://github.com/soimort/translate-shell)などのコマンドライン翻訳ツールがいくつかあります。

しかし、これらはファイルの変更を認識せず、変更されたファイルを効率よく翻訳するためのコスト削減に限定されています。

## 翻訳は編集可能であり、機械翻訳によって既存の修正が上書きされることはありません

翻訳は編集可能です。

元のテキストを変更し、再度機械翻訳を行うと、翻訳に対する手動の修正は上書きされません(元のテキストのこの段落が変更されていない場合)。

## 最高品質の機械翻訳です

私たちは、従来の機械翻訳モデルと大規模な言語モデルの技術的利点を統合し、正確でスムーズでエレガントな翻訳を提供する新世代の翻訳技術を開発しました。

ブラインドテストの結果、私たちの翻訳品質は同様のサービスと比較して大幅に優れています。

同じ品質を達成するために必要な手動編集の量は、Google 翻訳と`ChatGPT`でそれぞれ`2.67`倍と`3.15`倍になります。

## <a rel=id href="#price" id="price"></a> 非常に競争力のある価格設定です

|                                                                                   | 米ドル/100万ワード |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [マイクロソフト](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [アマゾン](https://aws.amazon.com/translate/pricing)                                | 15            |
| [グーグル](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[ここをクリックして承認し、 githubを自動的にフォローi18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) 、**ボーナス$50を受け取ります**。

注:課金対象文字数は、ソースファイルの[unicode](https://en.wikipedia.org/wiki/Unicode)文字数に翻訳の言語数を乗じます

## `YAML`の翻訳をサポートします

このツールは、`YAML`の辞書の値のみを翻訳し、辞書のキーは翻訳しません。

`YAML`の翻訳を基に、さまざまなプログラミング言語に対応する国際化ソリューションを簡単に構築できます。

## `HUGO`のヘッダー設定の翻訳をサポートします

[HUGO](https://github.com/gohugoio/hugo)タイプの静的ブログのヘッダー設定をサポートし、`title`、`summary`、`brief`、`description`フィールドのみを翻訳します。

## 変数名は翻訳しません

`Markdown`はメールテンプレートとして、`YAML`は言語ファイル設定として使用され、変数パラメータが存在します(例:入金`${amount}`が確認されました)。

`${varname}`のような変数名は、英語として翻訳されません。

## 中国語、日本語、韓国語の翻訳に最適化されています

### 英語に翻訳する際、タイトルは自動的に最初の文字を大文字にします

中国語、日本語、韓国語には大小文字の区別がなく、英語のタイトルは通常最初の文字が大文字です。

`i18`は`Markdown`のタイトルを認識可能で、大文字と小文字を区別する言語に翻訳する際、自動的に先頭文字を大文字に変換します。

たとえば、 `为阅读体验而优化` `Optimized for Reading Experience`に変換されます。

### 中国語、日本語、韓国語の英文用語は翻訳しません

中国語、日本語、韓国語の文書には多くの英文用語が含まれていることがあります。

中国語、日本語、韓国語の機械翻訳は非英文言語として翻訳され、例えば以下の中国語の文のように、用語が一括して翻訳されることがよくあります

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

GoogleやDeepLを使用すると、両方とも元のままであるべき英語の用語が誤って翻訳されます(日本語やフランス語を例にします)。

### Google翻訳

日本語に翻訳し`ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`た:

![](//p.3ti.site/1720199391.avif)

フランス語に翻訳し`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`た:

`Falcon`は`faucon`、`Llama`は`lama`と翻訳されますが、これらは固有名詞であるため、翻訳は避けられます。

![](//p.3ti.site/1720199451.avif)

### DeepL翻訳

日本語に翻訳し`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`た:

![](//p.3ti.site/1720199550.avif)

DeepL上記をフランス語に翻訳します (固有名を書き換え、奇数の`... `を追加します):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.siteの翻訳

`i18`の翻訳は、中国語、日本語、韓国語の文書内の英語の用語を認識し、用語をそのまま残します。

フランス語の翻訳結果は次のようになります

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

フランス語の翻訳は次の通りです

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

例えば、「C罗」は「Cristiano Ronaldo」と翻訳されます。

例: `C罗` `Cristiano Ronaldo`として変換されます。

## `i18n.site`を用いて複数の言語を組み合わせてWebサイトを構築できます

`i18`は、多言語 Web サイト構築コマンド ライン ツール[`i18n.site`](/i18n.site)に統合されています。

詳細については、 [`i18n.site`](/i18n.site)のドキュメントを参照してください。

## コードオープンソース

クライアントは完全にオープンソースであり、サーバー側のコードも90%がオープンソースです。[ソースコードを表示するには、ここをクリックしてください](/i18n.site/src)。

オープンソースコードの開発や翻訳文の校正に参加していただけるボランティアを募集しています。

ご興味がございましたら、[→こちらをクリックしてプロフィールをご記入の上](https://ggl.link/i18n)、[メーリングリスト](https://groups.google.com/u/2/g/i18n-site)にご参加ください。

## 連絡を取り合う

<button onclick="mailsub()">このメールをクリックして製品アップデートを購読し</button>、<button onclick="webpush()">ブラウザ プッシュを有効にしてください</button>。製品がアップデートされると通知されます。

私たちのソーシャルアカウント[X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social)をフォローすることも歓迎します。