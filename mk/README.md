<h1 style="justify-content:space-between">3Ti.Site · Мисли без граници<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, статичен генератор на сајтови, може автоматски да го преведе Markdown на [повеќе од сто различни јазици](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:15px;box-shadow:0 0 3px inset #eee;padding:15px 8px 8px 15px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:htm;margin-right:8px;margin-bottom:8px;font-style:normal;color:#444;border-bottom:1px dashed #ccc;}</style><i>English</i><i> 简体中文 </i><i>español</i><i>français</i><i>Deutsch</i><i> 日本語 </i><i>italiano</i><i>한국어</i><i>русский</i><i>português</i><i>shqip</i><i>‫العربية‬</i><i>አማርኛ</i><i>অসমীয়া</i><i>azərbaycan</i><i>Eʋegbe</i><i>Aymar aru</i><i>Gaeilge</i><i>eesti</i><i>ଓଡ଼ିଆ</i><i>Oromoo</i><i>euskara</i><i>беларуская</i><i>bamanakan</i><i>български</i><i>íslenska</i><i>polski</i><i>bosanski</i><i>‫فارسی‬</i><i>भोजपुरी</i><i>Afrikaans</i><i>татар</i><i>dansk</i><i>‫ދިވެހިބަސް‬</i><i>ትግርኛ</i><i>डोगरी</i><i>संस्कृत भाषा</i><i>Filipino</i><i>suomi</i><i>Frysk</i><i>ខ្មែរ</i><i>ქართული</i><i>गोंयची कोंकणी</i><i>ગુજરાતી</i><i>avañe’ẽ</i><i>қазақ тілі</i><i>Kreyòl ayisyen</i><i>Hausa</i><i>Nederlands</i><i>кыргызча</i><i>galego</i><i>català</i><i>čeština</i><i>ಕನ್ನಡ</i><i>corsu</i><i>hrvatski</i><i>Runasimi</i><i>kurdî</i><i>‫کوردیی ناوەندی‬</i><i>Latina</i><i>latviešu</i><i>ລາວ</i><i>lietuvių</i><i>lingála</i><i>Luganda</i><i>Lëtzebuergesch</i><i>Kinyarwanda</i><i>română</i><i>Malagasy</i><i>Malti</i><i>मराठी</i><i>മലയാളം</i><i>Melayu</i><i>македонски</i><i>मैथिली</i><i>Māori</i><i>মৈতৈলোন্</i><i>монгол</i><i>বাংলা</i><i>Mizo ṭawng</i><i>မြန်မာ</i><i>𞄀𞄄𞄰𞄩𞄍𞄜𞄰</i><i>IsiXhosa</i><i>isiZulu</i><i>नेपाली</i><i>norsk</i><i>ਪੰਜਾਬੀ</i><i>‫پښتو‬</i><i>Nyanja</i><i>Akan</i><i>svenska</i><i>Gagana fa'a Sāmoa</i><i>српски</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>සිංහල</i><i>esperanto</i><i>slovenčina</i><i>slovenščina</i><i>Kiswahili</i><i>Gàidhlig</i><i>Cebuano</i><i>Soomaali</i><i>тоҷикӣ</i><i>తెలుగు</i><i>தமிழ்</i><i>ไทย</i><i>Türkçe</i><i>türkmen dili</i><i>Cymraeg</i><i>‫ئۇيغۇرچە‬</i><i>‫اردو‬</i><i>українська</i><i>o‘zbek</i><i>‫עברית‬</i><i>Ελληνικά</i><i>ʻŌlelo Hawaiʻi</i><i>‫سنڌي‬</i><i>magyar</i><i>chiShona</i><i>հայերեն</i><i>Igbo</i><i>Pagsasao Ilokano</i><i>‫ייִדיש‬</i><i>हिन्दी</i><i>Basa Sunda</i><i>Indonesia</i><i>Jawa</i><i>Èdè Yorùbá</i><i>Tiếng Việt</i><i> 正體中文 </i><i>Xitsonga</i></pre>

Некои луѓе можеби ќе прашаат, бидејќи сите прелистувачи имаат функции за превод, дали е непотребно да се интернационализира веб-локацијата?

Би сакал да кажам дека **само веб-локациите што генерираат статични преводи можат да поддржат повеќејазично пребарување на целосен текст на локацијата и оптимизација на пребарувачите** .

## Вовед

Научно-фантастичниот роман „Три тела“ (кинески изговор: `3Ti` ) фикционализира вонземска цивилизација која комуницира преку електромагнетни бранови, нема јазични бариери и е технолошки просперитетна.

Библија · Битие :

> Во тоа време, луѓето ширум светот имаа ист акцент и јазик.
>
> Изградете кула што допира до небото, стигнете до портата Божја, соберете ги срцата на луѓето и раширете ја вашата репутација.
>
> Господ рече: Луѓето од иста култура и раса формираат свој клан. Да се ​​изгради кула денес е само увертира, но се ќе направиме во иднина.
>
> Потоа дојде и ги расеа луѓето на разни места, не можејќи да се разберат.
>
> Оттогаш, споровите продолжуваат, а во светот нема вавилонска кула.

Се надевам дека ќе создадам алатки за луѓето на земјата да можат да бидат како луѓе со три тела, да комуницираат без да бидат врзани со јазикот и целото човештво да може повторно да се обедини.

Значи, имаше [`3Ti.Site`](//3Ti.Site) .

## Упатство

## Вовед Во Функција

### Задржете Го Форматот За Обележување

### Измени Го Преводот

Откако ќе го измените преводот, треба повторно да извршите `./i18n.sh` за да го ажурирате кешот.

### Белешки За Превод

Коментарите на преводот треба да го наведат јазикот по \```, како што е ` ```rust` .

Во моментов поддржува превод на коментари за rust, c, cpp, java, js, кафе, python и bash.

Уредете [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) за да додадете поддршка за превод за коментари на повеќе јазици.

### Конфигурирај Прокси

Поставувањето на следните променливи на животната средина им овозможува на повиците на Google Translate API да минуваат преку прокси.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Вградување На Променлива

```
test:测试变量<br 0>嵌入
```

### Испразнете Го Кешот

```bash
rm -rf .i18n/.cache
```
