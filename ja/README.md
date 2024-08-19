<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ 国際的なソリューション<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

コマンド ライン Markdown 、 Yaml 翻訳ツール、[百数十の言語](/i18/LANG_CODE)をサポートし、国際的なドキュメント サイトの構築を助けます…

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## 序言

ネットワークは物理的な距離を消し去ったが、言語の差異はまだ人々の団結を妨げている。

ブラウザには翻訳機能が組み込まれているが、検索エンジンはまだ言語を跨ぐクエリを実行できない。

ソーシャルメディアやメールでは、多くの人が母国語の情報源に注目する傾向にある。

情報の爆発とグローバル市場の中で、注目を集めるために、**多言語対応は基本です**。

個人開源プロジェクトであっても、より広範なオーディエンスに影響を与えたい場合、最初から国際化の技術を選択するべきです。

## <a rel=id href="#project" id="project"></a> プロジェクトの紹介

このサイトでは現在、以下の2つのオープン ソース コマンド ライン ツールを提供しています

* [i18 : MarkDown コマンド ライン翻訳ツール](/i18/feature)
* [i18n.site : 多言語静的ウェブサイトジェネレーター](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18 : MarkDown コマンド ライン翻訳ツール

`Markdown`と`YAML`を複数の言語に翻訳するコマンド ライン ツール ([ソース コード](https://github.com/i18n-site/rust/tree/main/i18))。

`Markdown`の形式を完全に保ち、ファイルの変更を検出して、変更されたファイルのみを翻訳します。

翻訳は編集可能であり、

元のテキストを変更し、再度機械翻訳を行うと、翻訳に対する手動の修正は上書きされません(元のテキストのこの段落が変更されていない場合)。

私たちは「 `UNIX` " Everything is a file "の理念に賛同しており、複雑で面倒なエンタープライズレベルのソリューションを導入することなく、何百もの言語への翻訳を管理できます。

最も馴染みのあるツールを利用して`Markdown`の翻訳を編集できます(ただし、段落の追加や削除はできません)。また、慣れ親しんだ方法でバージョン管理を行うことができます。

言語ファイルをコードベースとしてオープンソースで作成し、`Pull Request`のプロセスを通じて、世界中のユーザーが翻訳の継続的な最適化に参加できます。シームレスに [GitHub](//github.com) 等のオープンソース コミュニティと連携。

[→ 使用方法については、プロジェクトのドキュメントを参照してください](/i18)。

## 最高品質の機械翻訳

私たちは、従来の機械翻訳モデルと大規模言語モデルの技術的利点を融合した新世代の翻訳技術を開発し、正確でスムーズでエレガントな翻訳を実現しました。

盲検では、当社の翻訳品質は同様のサービスと比較して大幅に優れていることが判明しました。

同じ品質を達成するために必要な手動編集の量は、Google 翻訳と`ChatGPT`でそれぞれ`2.67`倍と`3.15`倍になります。

#### <a rel=id href="#price" id="price"></a> 非常に競争力のある価格設定

|                                                                                   | 米ドル / 百万字 |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [マイクロソフト](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [アマゾン](https://aws.amazon.com/translate/pricing)                                | 15            |
| [グーグル](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[ここをクリックして承認しi18n.site githubを自動的にフォローし](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo)、**ボーナス$50を受け取ります**。

注: 課金文字数 = ソースファイルの[Unicode文字数](https://en.wikipedia.org/wiki/Unicode) × 翻訳言語数

### i18n.site : 多言語静的ウェブサイトジェネレーター

多言語の静的ウェブサイトを生成するコマンド ライン ツール ([ソース コード](https://github.com/i18n-site/rust/tree/main/i18n-site))。

純粋な静的サイトで、読者体験に最適化され、[i18](#i18)を使用してプロジェクトのドキュメント サイトを構築するのに最適です。

基盤となるフロントエンド フレームワークは完全なプラグイン アーキテクチャを採用し、必要に応じて二次開発が容易です。

このウェブサイトは同フレームワークに基づいて開発され、ユーザー、支払い等功能を含んでいます ([ソースコード](/i18n.site/src))。詳細なチュートリアルは後日提供予定です。

[→ 使用方法については、プロジェクトのドキュメントを参照してください](/i18n.site)。

## ご連絡先

<button onclick="mailsub()">このメールをクリックして製品の更新を購読してください</button> そして <button onclick="webpush()">ブラウザのプッシュ通知を有効にしてください</button>。製品の更新がある際に通知を受け取ります。

私たちのソーシャルメディアアカウント [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) もフォローをお願いします。

問題が発生した場合は、[→ユーザーフォーラムに投稿してください](https://groups.google.com/u/1/g/i18n)。

## 私たちについて

> 「来て、天の高き塔を築き、人類の名を栄耀せしめよ」と言った彼ら。
>
> 主はそれを見て、「人類は一様に言語と種を持ち、これが成されると、何事も成すことができるだろう」と。
>
> そして、人類はお互いの言葉を理解することができなくなり、各地に散り散りとなった。

<p style="text-align:right">──聖書・創世記</p>

私たちは言語の壁を越えないインターネットを築きたいと考えています。
私たちは全人類が共通の夢に向かって一つにまとまることを望んでいます。

Markdownの翻訳とドキュメント サイトは始まりに過ぎません。
ソーシャルメディアへのコンテンツの同期をサポートします
バイリンガルのコメント機能やチャットルームをサポートします
報酬を支払う多言語チケット システムを提供します
国際的なフロントエンド コンポーネントのマーケットプレイスを構築します
私たちが想做することはまだまだあります。

広大な人海の中で、志を同じくする人々と出会うことを楽しみにしています。
オープンソースコードの開発や翻訳文の校正に参加していただけるボランティアを募集しています。
ご興味がございましたら、[→ こちらをクリックしてプロフィールをご記入の上](https://ggl.link/i18n)、[メーリングリスト](https://groups.google.com/u/2/g/i18n-site)にご参加ください。

私たちはオープンソースを信じ、共有することを愛しています
無国境な未来を一緒に創造しましょう。