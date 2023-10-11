<h1 style="justify-content:space-between">3Ti.Site · 思无疆 <img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site，静态站点生成器，能将 Markdown 自动翻译为 [一百多种不同的语言](https://github.com/i18n-site/node/blob/main/lang/src/index.js) 。

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:15px;box-shadow:0 0 3px inset #eee;padding:15px 8px 8px 15px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:htm;margin-right:8px;margin-bottom:8px;font-style:normal;color:#444;border-bottom:1px dashed #ccc;}</style><i>English</i><i> 简体中文 </i><i>español</i><i>français</i><i>Deutsch</i><i> 日本語 </i><i>italiano</i><i>한국어</i><i>русский</i><i>português</i><i>shqip</i><i>‫العربية‬</i><i>አማርኛ</i><i>অসমীয়া</i><i>azərbaycan</i><i>Eʋegbe</i><i>Aymar aru</i><i>Gaeilge</i><i>eesti</i><i>ଓଡ଼ିଆ</i><i>Oromoo</i><i>euskara</i><i>беларуская</i><i>bamanakan</i><i>български</i><i>íslenska</i><i>polski</i><i>bosanski</i><i>‫فارسی‬</i><i>भोजपुरी</i><i>Afrikaans</i><i>татар</i><i>dansk</i><i>‫ދިވެހިބަސް‬</i><i>ትግርኛ</i><i>डोगरी</i><i>संस्कृत भाषा</i><i>Filipino</i><i>suomi</i><i>Frysk</i><i>ខ្មែរ</i><i>ქართული</i><i>गोंयची कोंकणी</i><i>ગુજરાતી</i><i>avañe’ẽ</i><i>қазақ тілі</i><i>Kreyòl ayisyen</i><i>Hausa</i><i>Nederlands</i><i>кыргызча</i><i>galego</i><i>català</i><i>čeština</i><i>ಕನ್ನಡ</i><i>corsu</i><i>hrvatski</i><i>Runasimi</i><i>kurdî</i><i>‫کوردیی ناوەندی‬</i><i>Latina</i><i>latviešu</i><i>ລາວ</i><i>lietuvių</i><i>lingála</i><i>Luganda</i><i>Lëtzebuergesch</i><i>Kinyarwanda</i><i>română</i><i>Malagasy</i><i>Malti</i><i>मराठी</i><i>മലയാളം</i><i>Melayu</i><i>македонски</i><i>मैथिली</i><i>Māori</i><i>মৈতৈলোন্</i><i>монгол</i><i>বাংলা</i><i>Mizo ṭawng</i><i>မြန်မာ</i><i>𞄀𞄄𞄰𞄩𞄍𞄜𞄰</i><i>IsiXhosa</i><i>isiZulu</i><i>नेपाली</i><i>norsk</i><i>ਪੰਜਾਬੀ</i><i>‫پښتو‬</i><i>Nyanja</i><i>Akan</i><i>svenska</i><i>Gagana fa'a Sāmoa</i><i>српски</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>සිංහල</i><i>esperanto</i><i>slovenčina</i><i>slovenščina</i><i>Kiswahili</i><i>Gàidhlig</i><i>Cebuano</i><i>Soomaali</i><i>тоҷикӣ</i><i>తెలుగు</i><i>தமிழ்</i><i>ไทย</i><i>Türkçe</i><i>türkmen dili</i><i>Cymraeg</i><i>‫ئۇيغۇرچە‬</i><i>‫اردو‬</i><i>українська</i><i>o‘zbek</i><i>‫עברית‬</i><i>Ελληνικά</i><i>ʻŌlelo Hawaiʻi</i><i>‫سنڌي‬</i><i>magyar</i><i>chiShona</i><i>հայերեն</i><i>Igbo</i><i>Pagsasao Ilokano</i><i>‫ייִדיש‬</i><i>हिन्दी</i><i>Basa Sunda</i><i>Indonesia</i><i>Jawa</i><i>Èdè Yorùbá</i><i>Tiếng Việt</i><i> 正體中文 </i><i>Xitsonga</i></pre>

也许有人会问，浏览器都带翻译功能了，做网站国际化是不是多此一举？

我想说，**只有生成了静态翻译的网站，才能支持多语种的站内全文搜索和搜索引擎优化** 。

## 引子

科幻小说《三体》（ 中文发音：`3Ti` ）虚构异星文明，用电磁波交流，思维透明，科技昌盛。

圣经 · 创世纪 :

> 那时，天下人的口音、言语都是一样。
>
> 筑通天高塔，达上帝之门，聚人心，扬威名。
>
> 主曰 : 人同文同种，自成一族，今筑塔仅为序章，日后将无所不为。
>
> 遂降临，使众人分散各地，言语不通。
>
> 此后，纷争不断，世间再无通天塔。

我希望创造工具，使地球之民如三体之人，交流不被语言所束，全人类再次联合起来。

于是，便有了 [`3Ti.Site`](//3Ti.Site)。

## 使用教程

## 功能简介

### 保留 Markdown 格式

### 修改译文

修改译文后需要重新运行 `./i18n.sh` 更新缓存。

### 翻译注释

翻译注释，需要在 \``` 之后表明语言， 比如 ` ```rust ` 。

目前支持 rust,c,cpp,java,js,coffee,python,bash 的注释翻译。

编辑 [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) 可添加更多语言注释的翻译支持。

### 配置代理

设置如下的环境变量，可以让谷歌翻译的 API 调用走代理。

```bash
export https_proxy=http://127.0.0.1:7890
```

### 变量嵌入

```
test:测试变量<br 0>嵌入
```

### 清空缓存

```bash
rm -rf .i18n/.cache
```
