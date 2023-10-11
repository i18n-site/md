<h1 style="justify-content:space-between">3Ti.Site · Thinking Without Borders<img src="//i-01.eu.org/3Ti/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

3Ti.Site, Markdown translation + multi-language static site generator.

Quickly build international documents and blogs that support [hundreds of languages](https://github.com/i18n-site/node/blob/main/lang/src/index.js) ...

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:7px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i> 简体中文 </i><i>español</i><i>français</i><i>Deutsch</i><i> 日本語 </i><i>italiano</i><i>한국어</i><i>русский</i><i>português</i><i>shqip</i><i>‫العربية‬</i><i>አማርኛ</i><i>অসমীয়া</i><i>azərbaycan</i><i>Eʋegbe</i><i>Aymar aru</i><i>Gaeilge</i><i>eesti</i><i>ଓଡ଼ିଆ</i><i>Oromoo</i><i>euskara</i><i>беларуская</i><i>bamanakan</i><i>български</i><i>íslenska</i><i>polski</i><i>bosanski</i><i>‫فارسی‬</i><i>भोजपुरी</i><i>Afrikaans</i><i>татар</i><i>dansk</i><i>‫ދިވެހިބަސް‬</i><i>ትግርኛ</i><i>डोगरी</i><i>संस्कृत भाषा</i><i>Filipino</i><i>suomi</i><i>Frysk</i><i>ខ្មែរ</i><i>ქართული</i><i>गोंयची कोंकणी</i><i>ગુજરાતી</i><i>avañe’ẽ</i><i>қазақ тілі</i><i>Kreyòl ayisyen</i><i>Hausa</i><i>Nederlands</i><i>кыргызча</i><i>galego</i><i>català</i><i>čeština</i><i>ಕನ್ನಡ</i><i>corsu</i><i>hrvatski</i><i>Runasimi</i><i>kurdî</i><i>‫کوردیی ناوەندی‬</i><i>Latina</i><i>latviešu</i><i>ລາວ</i><i>lietuvių</i><i>lingála</i><i>Luganda</i><i>Lëtzebuergesch</i><i>Kinyarwanda</i><i>română</i><i>Malagasy</i><i>Malti</i><i>मराठी</i><i>മലയാളം</i><i>Melayu</i><i>македонски</i><i>मैथिली</i><i>Māori</i><i>মৈতৈলোন্</i><i>монгол</i><i>বাংলা</i><i>Mizo ṭawng</i><i>မြန်မာ</i><i>𞄀𞄄𞄰𞄩𞄍𞄜𞄰</i><i>IsiXhosa</i><i>isiZulu</i><i>नेपाली</i><i>norsk</i><i>ਪੰਜਾਬੀ</i><i>‫پښتو‬</i><i>Nyanja</i><i>Akan</i><i>svenska</i><i>Gagana fa'a Sāmoa</i><i>српски</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>සිංහල</i><i>esperanto</i><i>slovenčina</i><i>slovenščina</i><i>Kiswahili</i><i>Gàidhlig</i><i>Cebuano</i><i>Soomaali</i><i>тоҷикӣ</i><i>తెలుగు</i><i>தமிழ்</i><i>ไทย</i><i>Türkçe</i><i>türkmen dili</i><i>Cymraeg</i><i>‫ئۇيغۇرچە‬</i><i>‫اردو‬</i><i>українська</i><i>o‘zbek</i><i>‫עברית‬</i><i>Ελληνικά</i><i>ʻŌlelo Hawaiʻi</i><i>‫سنڌي‬</i><i>magyar</i><i>chiShona</i><i>հայերեն</i><i>Igbo</i><i>Pagsasao Ilokano</i><i>‫ייִדיש‬</i><i>हिन्दी</i><i>Basa Sunda</i><i>Indonesia</i><i>Jawa</i><i>Èdè Yorùbá</i><i>Tiếng Việt</i><i> 正體中文 </i><i>Xitsonga</i></pre>

Some people may ask, since all browsers have translation functions, is it unnecessary to internationalize the website?

I would like to say that **only websites that generate static translations can support multilingual in-site full-text search and search engine optimization** .

## Introduction

The science fiction novel &quot;Three Body&quot; (Chinese pronunciation: `3Tǐ` ) fictionalizes an alien civilization that uses electromagnetic waves to communicate, with transparent thinking and prosperous technology.

Bible · Genesis :

> In that era, the voices and words of all under the heavens were as one.
>
> They built a tower reaching sky-high, touching the gates of God, uniting hearts, and boasting their glory.
>
> The Lord proclaimed: When people share language and lineage, they become a singular tribe. The tower is but the beginning; in days to come, there's nothing they won't achieve.
>
> Thus, He descended, causing the people to scatter far and wide, their languages now unintelligible to each other.
>
> From then on, strife was unending, and the world saw no more towers that touched the sky.

I hope to create tools so that the people of the earth can be like three-body people, communicate without being bound by language, and all mankind can be united again.

So, there was [`3Ti.Site`](//3Ti.Site) .

## Markdown Translation

Markdown translation can be used independently or with a multi-language static site generator to quickly build a website.

Perfectly preserve Markdown formatting, bold, lists, titles, quotes, links, illustrations and more.

If there is sample code in Markdown, the sample code will not be translated.

## Multilingual Site Builder

## Tutorial

## Function Introduction

### Keep Markdown Format

### Modify Translation

After modifying the translation, you need to re-run `./i18n.sh` to update the cache.

### Translation Notes

Translation comments need to indicate the language after \```, such as ` ```rust` .

Currently supports comment translation for rust, c, cpp, java, js, coffee, python, and bash.

Edit [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) to add translation support for comments in more languages.

### Configure Proxy

Setting the following environment variables allows Google Translate API calls to go through the proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variable Embedding

```
test:测试变量<br 0>嵌入
```

### Empty The Cache

```bash
rm -rf .i18n/.cache
```
