# 製品の特徴

`i18`は、MarkdownおよびYAMLを翻訳するコマンドラインツールです。

## Markdownの形式を完全に保持できます

Markdownの表をその形式を損なうことなく翻訳し、数学公式やリンク内の単語は翻訳しません。

混合HTML Markdownの翻訳をサポートします。`MarkDown`に埋め込まれたHTMLの`<pre>`および`<code>`タグの内容は翻訳されません

## 数学公式を認識して翻訳をスキップできます

数学公式は認識され、翻訳はスキップされます。

数学公式の書き方については、[「Githubの数学式の書き方」](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions)を参照してください。

## コードスニペット内のコメントを翻訳する機能があります

インラインコードとコードスニペットは翻訳されませんが、コード内のコメントは翻訳できます。

翻訳コメントでは、 ` ``` `後に言語を示す必要があります ( : ` ```rust `など)。

現在、`java`、`toml`、`yaml`、`c`、`json5`、`js`、`bash`、`cpp`、`coffee`、`python`、`php`、`go`、`rust`などの言語の注釈を翻訳しています[他の言語も含まれます](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14)。

必要なプログラミング言語がない場合は、[お問い合わせ](https://groups.google.com/g/i18n-site)ください。

## コマンドライン操作に友好です

多数の[強力なツール](https://www.capterra.com/translation-management-software)が翻訳ドキュメントの管理に使用できます。

`git`、`vim`、`vscode`に精通したプログラマーにとって、これらのツールを用いたドキュメント編集やバージョン管理は学習コストを増加させます。

`KISS`(`Keep It Simple, Stupid`)の信奉者にとっては、企業レベルのソリューションは重くて非効率で使いにくいものとされています。

翻訳はコマンドを入力してワンクリックで完了するべきで、複雑な環境依存は不要です。

必要でない限り、エンティティを追加しないでください。

## 修正無し、翻訳無し

[translate-shell](https://github.com/soimort/translate-shell)などのコマンドライン翻訳ツールがいくつかあります。

しかし、ファイルの変更を認識する機能はなく、変更されたファイルを低成本で効率的に翻訳するだけです。

## 翻訳は編集可能で、機械翻訳による既存の修正は上書きされません

翻訳は編集可能です。

元のテキストを変更し、再度機械翻訳を行うと、翻訳に対する手動の修正は上書きされません(元のテキストのこの段落が変更されていない場合を除きます)。

## 最高品質の機械翻訳です

私たちは、従来の機械翻訳モデルと大規模言語モデルの技術的利点を組み合わせた新世代の翻訳技術を開発し、正確でスムーズな翻訳を実現しました。

ブラインドテストの結果、私たちの翻訳品質は同様のサービスと比較して大幅に優れています。

同じ品質を達成するために必要な手動編集の量は、Google 翻訳と`ChatGPT`でそれぞれ`2.67`倍と`3.15`倍になります。

## <a rel=id href="#price" id="price"></a> 非常に競争力のある価格設定です

|                                                                                   | ドル/100万ワード |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [マイクロソフト](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [アマゾン](https://aws.amazon.com/translate/pricing)                                | 15            |
| [グーグル](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[ここをクリックして承認し、 githubを自動的にフォローi18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) 、**ボーナス$50を受け取ります**。

注:課金対象文字数は、ソースファイルの[unicode](https://en.wikipedia.org/wiki/Unicode)文字数に翻訳の言語数を乗じます

## `YAML`の翻訳をサポートしています

このツールは、`YAML`の辞書の値のみを翻訳し、辞書のキーは翻訳しません。

`YAML`の翻訳に基づいて、さまざまなプログラミング言語の国際化ソリューションを簡単に構築できます。

## `HOGO`のヘッダー構成の翻訳をサポートしています

[HOGO](https://github.com/gohugoio/hugo)タイプの静的ブログのヘッダー設定をサポートし、`title`、`summary`、`brief`、および`description`フィールドのみを翻訳します。

## 変数名は翻訳しません

`Markdown`をメールテンプレートとして使用し、`YAML`を言語ファイル設定として使用する場合、変数パラメータが存在します(例:リチャージ`${amount}`が受信されました)。

`${varname}`のような変数名は、英語の翻訳と見なされません。

## 中国語、日本語、韓国語の翻訳に最適化されています

### 英語に翻訳する際、タイトルは自動的に最初の文字を大文字にします

中国語、日本語、韓国語には大小文字の区別がなく、英語のタイトルは通常最初の文字が大文字です。

`i18`は`MarkDown`のタイトルを認識し、大文字と小文字を区別する言語に翻訳する際に、自動的に最初の文字を大文字に変換します。

たとえば、 `为阅读体验而优化` `Optimized for Reading Experience`に変換されます。

### 中国語、日本語、韓国語の英文用語は翻訳しません

中国語、日本語、韓国語の文書には多くの英文用語が含まれていることがあります。

中国語、日本語、韓国語の機械翻訳は非英文言語に翻訳され、例えば以下の中国語の文のように、用語が一括して翻訳されることがあります

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

GoogleやDeepLを使用すると、両方とも元のままであるべき英語の用語が誤って翻訳されます(日本語やフランス語を例にします)。

### Google翻訳

日本語に翻訳し`ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`た:

![](//p.3ti.site/1720199391.avif)

フランス語に翻訳し`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`た:

`Falcon`は`faucon`に、`Llama`は`lama`に翻訳されます。これらは固有名詞であり、翻訳すべきではありません。

![](//p.3ti.site/1720199451.avif)

### DeepL翻訳

日本語に翻訳し`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`た:

![](//p.3ti.site/1720199550.avif)

DeepLが上記をフランス語に翻訳すると(固有名を変更し、不自然な`... `を追加しています):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.サイトの翻訳

`i18`の翻訳は、中国語、日本語、韓国語の文書内の英語の用語を認識し、用語をそのまま残します。

フランス語の翻訳結果は次のようになります

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

フランス語の翻訳結果は次の通りです

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

例えば、「C罗」は「Cristiano Ronaldo」と翻訳されます。

例: `C罗` `Cristiano Ronaldo`として変換されます。

## `i18n.site`を活用して、多言語のWebサイトを構築できます

`i18`は、多言語 Web サイト構築コマンド ライン ツール[`i18n.site`](/i18n.site)に統合されています。

詳細については、[`i18n.site`](/i18n.site)のドキュメントを参照してください。

## コードオープンソース

クライアントは完全にオープンソースであり、サーバー側のコードも % オープンソースです90[ソース コードを表示するには、ここをクリックしてください](/i18n.site/src)。

ご興味がございましたら、こちらをクリックしてプロフィールをご記入の上、メーリングリストにご参加ください。

ご興味がございましたら、 [→こちらをクリックしてプロフィールをご記入の上](https://ggl.link/i18n)、[メーリングリスト](https://groups.google.com/u/2/g/i18n-site)にご参加ください。

## 連絡を取り合う

<button onclick="mailsub()">このメールをクリックして製品アップデートを購読し</button>、<button onclick="webpush()">ブラウザ プッシュを有効にしてください</button>。製品がアップデートされると通知されます。

私たちのソーシャルアカウント/ [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social)をフォローすることも歓迎します[X.COM: @i18nSite](https://x.com/i18nSite)