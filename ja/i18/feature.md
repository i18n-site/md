# 製品の特徴

`i18`はMarkdownおよびYAMLを翻訳するコマンドラインツールです。

## Markdownの形式を完全に保持します

Markdownテーブルの翻訳をサポートし、形式を損なわないようにします。数式やリンク内の単語は翻訳されません。

混合HTML Markdownの翻訳をサポートします。`MarkDown`に埋め込まれたHTMLの`<pre>`および`<code>`タグの内容は翻訳されません

## 数式を認識して翻訳をスキップします

数式は認識され、翻訳はスキップされます。

数式の書き方については、[「Githubの数学式の書き方」](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions)を参照してください。

## コードスニペット内のコメントを翻訳する機能があります

インラインコードとコードスニペットは翻訳されませんが、コード内のコメントは翻訳されます。

翻訳コメントでは、 ` ``` `後に言語を示す必要があります ( : ` ```rust `など)。

現在、`toml`、`yaml`、`json5`、`go`、`rust`、`c`、`cpp`、`java`、`js`、`coffee`、`python`、`bash`、`php`などの[言語](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14)の注釈を翻訳するサポートが提供されています。

必要なプログラミング言語がない場合は、[お問い合わせ](https://groups.google.com/g/i18n-site)ください。

## コマンドラインフレンドリーです

多数の[強力なツール](https://www.capterra.com/translation-management-software)が翻訳ドキュメントの管理に使用できます。

`git`、`vim`、`vscode`に精通しているプログラマーにとって、これらのツールを使用してドキュメントを編集し、バージョンを管理するのは学習コストが増加します。

`KISS` ( `Keep It Simple, Stupid` ) 原理主義者の間では、エンタープライズ レベルのソリューションは扱いにくく、非効率で、使いにくいものと同義です。

翻訳はコマンドを入力してワンクリックで完了するべきで、複雑な環境依存は不要です。

必要でない限り、エンティティを追加しないでください。

## 修正なし、翻訳なし

[translate-shell](https://github.com/soimort/translate-shell)などのコマンドライン翻訳ツールもいくつかあります。

しかし、ファイルの変更を認識する機能はなく、変更されたファイルをコスト削減と効率向上のために翻訳するだけです。

## 翻訳は編集可能で、機械翻訳によって既存の修正が上書きされることはありません

翻訳は編集可能であり、

元のテキストを変更し、再度機械翻訳を行うと、翻訳に対する手動の修正は上書きされません(元のテキストのこの段落が変更されていない場合)。

## 最高品質の機械翻訳

私たちは、従来の機械翻訳モデルと大規模言語モデルの技術的利点を融合した新世代の翻訳技術を開発し、正確でスムーズでエレガントな翻訳を実現しました。

盲検では、当社の翻訳品質は同様のサービスと比較して大幅に優れていることが判明しました。

同じ品質を達成するために必要な手動編集の量は、Google 翻訳と`ChatGPT`でそれぞれ`2.67`倍と`3.15`倍になります。

## <a rel=id href="#price" id="price"></a> 非常に競争力のある価格設定

|                                                                                   | 米ドル / 百万字 |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [マイクロソフト](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [アマゾン](https://aws.amazon.com/translate/pricing)                                | 15            |
| [グーグル](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[ここをクリックして承認しi18n.site githubを自動的にフォローし](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo)、**ボーナス$50を受け取ります**。

注: 課金文字数 = ソースファイルの[Unicode文字数](https://en.wikipedia.org/wiki/Unicode) × 翻訳言語数

## サポート翻訳`YAML`

このツールは、辞書のキーではなく、`YAML`の辞書の値のみを翻訳します。

`YAML`の翻訳に基づいて、さまざまなプログラミング言語の国際化ソリューションを簡単に構築できます。

## `HOGO`のヘッダー構成の翻訳をサポートしています

[HOGO](https://github.com/gohugoio/hugo)タイプの静的ブログのヘッダー構成をサポートしており、その中で`title`、`summary`、および`description`フィールドのみを翻訳します。

## 変数名は翻訳しません

`Markdown`はメールテンプレートとして使用され、`YAML`は言語ファイルの設定として使用され、変数パラメータが含まれています(例:リチャージ`${amount}`が受信されました)。

`${varname}`などの変数名は翻訳対象ではありません。

## 中国語、日本語、韓国語の翻訳に最適化されています

### 英語に翻訳する際、タイトルは自動的に最初の文字を大文字にします

中国語、日本語、韓国語には大小文字の概念がなく、英語のタイトルは最初の文字を大文字にするのが慣例です。

`i18`は`MarkDown`のタイトルを認識し、大文字と小文字を区別する言語に翻訳する際には、自動的に最初の文字を大文字に変換します。

たとえば、 `为阅读体验而优化` `Optimized for Reading Experience`に変換されます。

### 中国語、日本語、韓国語の英文用語は翻訳しません

中国語、日本語、韓国語のドキュメントには多くの英文用語が含まれていることがあります。

中国語、日本語、韓国語の機械翻訳は非英文の言語に翻訳され、よく次のような中国語の文が用語と一緒に翻訳されます

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

GoogleやDeepLを使用すると、両者とも原文のままであるべき英文用語が誤って翻訳されます(日本語とフランス語の例を参照)。

### Google翻訳

日本語に翻訳し`ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`た:

![](//p.3ti.site/1720199391.avif)

フランス語に翻訳し`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`た:

`Falcon`は`faucon`に、`Llama`は`lama`に翻訳されます。これらは固有名詞であり、翻訳すべきではありません。

![](//p.3ti.site/1720199451.avif)

### DeepL翻訳

日本語に翻訳し`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`た:

![](//p.3ti.site/1720199550.avif)

DeepLが上記をフランス語に翻訳すると(固有名を変更し、不自然な`... `を追加しています)、以下のようになります:

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18nサイトの翻訳

`i18`の翻訳は、中国語、日本語、韓国語のドキュメント内の英文用語を認識し、用語をそのままにします。

例えば、上記の日本語翻訳結果は次のようになります

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

フランス語の翻訳結果は次のようになります

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

英文の単語が中国語、日本語、韓国語のテキストとスペースで区切られている場合、または英文の長さが1以上の場合に限り、その単語は用語とみなされます。

例: `C罗` `Cristiano Ronaldo`として変換されます。

## `i18n.site`を活用して多言語ウェブサイトを構築できます

`i18`は、多言語 Web サイト構築コマンド ライン ツール[`i18n.site`](/i18n.site)に統合されています。

詳細については、[`i18n.site`](/i18n.site)のドキュメントを参照してください。

## コードは完全にオープンソースです

クライアントは完全にオープンソースであり、サーバー側のコードも90%オープンソースです。ソースコードを表示するには、ここをクリックしてください[ソースコードを表示するには、ここをクリックしてください](/i18n.site/src)。

オープンソースコードの開発や翻訳文の校正に参加していただけるボランティアを募集しています。

ご興味がございましたら、[→ こちらをクリックしてプロフィールをご記入の上](https://ggl.link/i18n)、[メーリングリスト](https://groups.google.com/u/2/g/i18n-site)にご参加ください。

## ご連絡先

<button onclick="mailsub()">このメールをクリックして製品の更新を購読してください</button> そして <button onclick="webpush()">ブラウザのプッシュ通知を有効にしてください</button>。製品の更新がある際に通知を受け取ります。

私たちのソーシャルメディアアカウント [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) もフォローをお願いします。