<h1 style="justify-content:space-between">3Ti.Site · 国境なき思考<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

静的サイト ジェネレーターである 3Ti.Site は、Markdown を[100 以上の異なる言語](https://github.com/i18n-site/node/blob/main/lang/src/index.js)に自動的に翻訳できます。

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:15px;box-shadow:0 0 3px inset #eee;padding:15px 8px 8px 15px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:htm;margin-right:8px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i> 简体中文 </i><i>español</i><i>français</i><i>Deutsch</i><i> 日本語 </i><i>italiano</i><i>한국어</i><i>русский</i><i>português</i><i>shqip</i><i>‫العربية‬</i><i>አማርኛ</i><i>অসমীয়া</i><i>azərbaycan</i><i>Eʋegbe</i><i>Aymar aru</i><i>Gaeilge</i><i>eesti</i><i>ଓଡ଼ିଆ</i><i>Oromoo</i><i>euskara</i><i>беларуская</i><i>bamanakan</i><i>български</i><i>íslenska</i><i>polski</i><i>bosanski</i><i>‫فارسی‬</i><i>भोजपुरी</i><i>Afrikaans</i><i>татар</i><i>dansk</i><i>‫ދިވެހިބަސް‬</i><i>ትግርኛ</i><i>डोगरी</i><i>संस्कृत भाषा</i><i>Filipino</i><i>suomi</i><i>Frysk</i><i>ខ្មែរ</i><i>ქართული</i><i>गोंयची कोंकणी</i><i>ગુજરાતી</i><i>avañe’ẽ</i><i>қазақ тілі</i><i>Kreyòl ayisyen</i><i>Hausa</i><i>Nederlands</i><i>кыргызча</i><i>galego</i><i>català</i><i>čeština</i><i>ಕನ್ನಡ</i><i>corsu</i><i>hrvatski</i><i>Runasimi</i><i>kurdî</i><i>‫کوردیی ناوەندی‬</i><i>Latina</i><i>latviešu</i><i>ລາວ</i><i>lietuvių</i><i>lingála</i><i>Luganda</i><i>Lëtzebuergesch</i><i>Kinyarwanda</i><i>română</i><i>Malagasy</i><i>Malti</i><i>मराठी</i><i>മലയാളം</i><i>Melayu</i><i>македонски</i><i>मैथिली</i><i>Māori</i><i>মৈতৈলোন্</i><i>монгол</i><i>বাংলা</i><i>Mizo ṭawng</i><i>မြန်မာ</i><i>𞄀𞄄𞄰𞄩𞄍𞄜𞄰</i><i>IsiXhosa</i><i>isiZulu</i><i>नेपाली</i><i>norsk</i><i>ਪੰਜਾਬੀ</i><i>‫پښتو‬</i><i>Nyanja</i><i>Akan</i><i>svenska</i><i>Gagana fa'a Sāmoa</i><i>српски</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>සිංහල</i><i>esperanto</i><i>slovenčina</i><i>slovenščina</i><i>Kiswahili</i><i>Gàidhlig</i><i>Cebuano</i><i>Soomaali</i><i>тоҷикӣ</i><i>తెలుగు</i><i>தமிழ்</i><i>ไทย</i><i>Türkçe</i><i>türkmen dili</i><i>Cymraeg</i><i>‫ئۇيغۇرچە‬</i><i>‫اردو‬</i><i>українська</i><i>o‘zbek</i><i>‫עברית‬</i><i>Ελληνικά</i><i>ʻŌlelo Hawaiʻi</i><i>‫سنڌي‬</i><i>magyar</i><i>chiShona</i><i>հայերեն</i><i>Igbo</i><i>Pagsasao Ilokano</i><i>‫ייִדיש‬</i><i>हिन्दी</i><i>Basa Sunda</i><i>Indonesia</i><i>Jawa</i><i>Èdè Yorùbá</i><i>Tiếng Việt</i><i> 正體中文 </i><i>Xitsonga</i></pre>

どのブラウザにも翻訳機能があるのに、Web サイトの国際化は必要ないのではないかと疑問に思う人もいるかもしれません。

**多言語のサイト内全文検索と検索エンジンの最適化をサポートできるのは、静的な翻訳を生成する Web サイトだけであると**言いたいのです。

## 導入

SF 小説「三体」（中国語発音: `3Tǐ` ）は、透明な思考と繁栄したテクノロジーを備え、電磁波を使用して通信する異星人の文明を架空の小説にしています。

聖書・創世記 :

> 当時、世界中の人々が同じアクセントと言語を持っていました。
>
> 天に届く塔を建て、神の門に到達し、人々の心を集め、名声を広めましょう。
>
> 主はこう言われました、「同じ文化、同じ人種の人々は、それぞれの氏族を形成する。今日塔を建てるのは序曲に過ぎないが、将来はすべてを行うだろう。」
>
> それから彼は来て、人々を互いに理解できないまま、さまざまな場所に散らしました。
>
> 以来紛争が続き、世界にはバベルの塔は存在しない。

地球上の人々が三体人のようになり、言葉に縛られずにコミュニケーションをとり、人類が再びひとつになれるようなツールを作りたいと思っています。

そこで、 [`3Ti.Site`](//3Ti.Site)ありました。

## チュートリアル

## 機能紹介

### マークダウン形式を維持する

### 翻訳を変更する

変換を変更した後、 `./i18n.sh`を再実行してキャッシュを更新する必要があります。

### 翻訳メモ

翻訳コメントでは、 ` ```rust`のように \``` の後に言語を示す必要があります。

現在、rust、c、cpp、java、js、coffee、python、bash のコメント翻訳をサポートしています。

[tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee)を編集して、より多くの言語のコメントの翻訳サポートを追加します。

### プロキシの構成

次の環境変数を設定すると、Google Translate API 呼び出しがプロキシを経由できるようになります。

```bash
export https_proxy=http://127.0.0.1:7890
```

### 変数の埋め込み

```
test:测试变量<br 0>嵌入
```

### キャッシュを空にしてください

```bash
rm -rf .i18n/.cache
```
