<h1 style="justify-content:space-between">3Ti.Site · 思無疆 <img src="//i-01.eu.org/3Ti/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

3Ti.Site，Markdown 翻譯 + 多語言靜態站點生成器。

快速構建支持 [上百種語言](https://github.com/i18n-site/node/blob/main/lang/src/index.js) 的國際化文檔、博客 ······

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:7px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i> 简体中文 </i><i>español</i><i>français</i><i>Deutsch</i><i> 日本語 </i><i>italiano</i><i>한국어</i><i>русский</i><i>português</i><i>shqip</i><i>‫العربية‬</i><i>አማርኛ</i><i>অসমীয়া</i><i>azərbaycan</i><i>Eʋegbe</i><i>Aymar aru</i><i>Gaeilge</i><i>eesti</i><i>ଓଡ଼ିଆ</i><i>Oromoo</i><i>euskara</i><i>беларуская</i><i>bamanakan</i><i>български</i><i>íslenska</i><i>polski</i><i>bosanski</i><i>‫فارسی‬</i><i>भोजपुरी</i><i>Afrikaans</i><i>татар</i><i>dansk</i><i>‫ދިވެހިބަސް‬</i><i>ትግርኛ</i><i>डोगरी</i><i>संस्कृत भाषा</i><i>Filipino</i><i>suomi</i><i>Frysk</i><i>ខ្មែរ</i><i>ქართული</i><i>गोंयची कोंकणी</i><i>ગુજરાતી</i><i>avañe’ẽ</i><i>қазақ тілі</i><i>Kreyòl ayisyen</i><i>Hausa</i><i>Nederlands</i><i>кыргызча</i><i>galego</i><i>català</i><i>čeština</i><i>ಕನ್ನಡ</i><i>corsu</i><i>hrvatski</i><i>Runasimi</i><i>kurdî</i><i>‫کوردیی ناوەندی‬</i><i>Latina</i><i>latviešu</i><i>ລາວ</i><i>lietuvių</i><i>lingála</i><i>Luganda</i><i>Lëtzebuergesch</i><i>Kinyarwanda</i><i>română</i><i>Malagasy</i><i>Malti</i><i>मराठी</i><i>മലയാളം</i><i>Melayu</i><i>македонски</i><i>मैथिली</i><i>Māori</i><i>মৈতৈলোন্</i><i>монгол</i><i>বাংলা</i><i>Mizo ṭawng</i><i>မြန်မာ</i><i>𞄀𞄄𞄰𞄩𞄍𞄜𞄰</i><i>IsiXhosa</i><i>isiZulu</i><i>नेपाली</i><i>norsk</i><i>ਪੰਜਾਬੀ</i><i>‫پښتو‬</i><i>Nyanja</i><i>Akan</i><i>svenska</i><i>Gagana fa'a Sāmoa</i><i>српски</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>සිංහල</i><i>esperanto</i><i>slovenčina</i><i>slovenščina</i><i>Kiswahili</i><i>Gàidhlig</i><i>Cebuano</i><i>Soomaali</i><i>тоҷикӣ</i><i>తెలుగు</i><i>தமிழ்</i><i>ไทย</i><i>Türkçe</i><i>türkmen dili</i><i>Cymraeg</i><i>‫ئۇيغۇرچە‬</i><i>‫اردو‬</i><i>українська</i><i>o‘zbek</i><i>‫עברית‬</i><i>Ελληνικά</i><i>ʻŌlelo Hawaiʻi</i><i>‫سنڌي‬</i><i>magyar</i><i>chiShona</i><i>հայերեն</i><i>Igbo</i><i>Pagsasao Ilokano</i><i>‫ייִדיש‬</i><i>हिन्दी</i><i>Basa Sunda</i><i>Indonesia</i><i>Jawa</i><i>Èdè Yorùbá</i><i>Tiếng Việt</i><i> 正體中文 </i><i>Xitsonga</i></pre>

也許有人會問，瀏覽器都帶翻譯功能了，做網站國際化是不是多此一舉？

我想說，**只有生成了靜態翻譯的網站，才能支持多語種的站內全文搜索和搜索引擎優化** 。

## 引子

科幻小說《三體》（ 中文發音：`3Tǐ` ）虛構異星文明，用電磁波交流，思維透明，科技昌盛。

聖經 · 創世紀 :

> 那時，天下人的口音、言語都是一樣。
>
> 築通天高塔，達上帝之門，聚人心，揚威名。
>
> 主曰 : 人同文同種，自成一族，今築塔僅為序章，日後將無所不為。
>
> 遂降臨，使眾人分散各地，言語不通。
>
> 此後，紛爭不斷，世間再無通天塔。

我希望創造工具，使地球之民如三體之人，交流不被語言所束，全人類再次聯合起來。

於是，便有了 [`3Ti.Site`](//3Ti.Site) 。

## Markdown 翻譯

Markdown 翻譯可獨立使用，亦可配合多語言靜態站點生成器來快速建站。

完美保留 Markdown 格式，粗體、列表、標題、引用、鏈接、插圖等等。

如 Markdown 裡有示例代碼，示例代碼將不翻譯。

## 多語言站點生成器

## 使用教程

## 功能簡介

### 保留 Markdown 格式

### 修改譯文

修改譯文後需要重新運行 `./i18n.sh` 更新緩存。

### 翻譯註釋

翻譯註釋，需要在 \``` 之後表明語言， 比如 ` ```rust` 。

目前支持 rust,c,cpp,java,js,coffee,python,bash 的註釋翻譯。

編輯 [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) 可添加更多語言註釋的翻譯支持。

### 配置代理

設置如下的環境變量，可以讓谷歌翻譯的 API 調用走代理。

```bash
export https_proxy=http://127.0.0.1:7890
```

### 變量嵌入

```
test:测试变量<br 0>嵌入
```

### 清空緩存

```bash
rm -rf .i18n/.cache
```
