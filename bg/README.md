<h1 style="justify-content:space-between">3Ti.Site · Мисли без граници<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, генератор на статичен сайт, може автоматично да превежда Markdown на [повече от сто различни езика](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:15px;box-shadow:0 0 3px inset #eee;padding:15px 8px 8px 15px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:htm;margin-right:8px;margin-bottom:8px;font-style:normal;color:#444;border-bottom:1px dashed #ccc;}</style><i>English</i><i> 简体中文 </i><i>español</i><i>français</i><i>Deutsch</i><i> 日本語 </i><i>italiano</i><i>한국어</i><i>русский</i><i>português</i><i>shqip</i><i>‫العربية‬</i><i>አማርኛ</i><i>অসমীয়া</i><i>azərbaycan</i><i>Eʋegbe</i><i>Aymar aru</i><i>Gaeilge</i><i>eesti</i><i>ଓଡ଼ିଆ</i><i>Oromoo</i><i>euskara</i><i>беларуская</i><i>bamanakan</i><i>български</i><i>íslenska</i><i>polski</i><i>bosanski</i><i>‫فارسی‬</i><i>भोजपुरी</i><i>Afrikaans</i><i>татар</i><i>dansk</i><i>‫ދިވެހިބަސް‬</i><i>ትግርኛ</i><i>डोगरी</i><i>संस्कृत भाषा</i><i>Filipino</i><i>suomi</i><i>Frysk</i><i>ខ្មែរ</i><i>ქართული</i><i>गोंयची कोंकणी</i><i>ગુજરાતી</i><i>avañe’ẽ</i><i>қазақ тілі</i><i>Kreyòl ayisyen</i><i>Hausa</i><i>Nederlands</i><i>кыргызча</i><i>galego</i><i>català</i><i>čeština</i><i>ಕನ್ನಡ</i><i>corsu</i><i>hrvatski</i><i>Runasimi</i><i>kurdî</i><i>‫کوردیی ناوەندی‬</i><i>Latina</i><i>latviešu</i><i>ລາວ</i><i>lietuvių</i><i>lingála</i><i>Luganda</i><i>Lëtzebuergesch</i><i>Kinyarwanda</i><i>română</i><i>Malagasy</i><i>Malti</i><i>मराठी</i><i>മലയാളം</i><i>Melayu</i><i>македонски</i><i>मैथिली</i><i>Māori</i><i>মৈতৈলোন্</i><i>монгол</i><i>বাংলা</i><i>Mizo ṭawng</i><i>မြန်မာ</i><i>𞄀𞄄𞄰𞄩𞄍𞄜𞄰</i><i>IsiXhosa</i><i>isiZulu</i><i>नेपाली</i><i>norsk</i><i>ਪੰਜਾਬੀ</i><i>‫پښتو‬</i><i>Nyanja</i><i>Akan</i><i>svenska</i><i>Gagana fa'a Sāmoa</i><i>српски</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>සිංහල</i><i>esperanto</i><i>slovenčina</i><i>slovenščina</i><i>Kiswahili</i><i>Gàidhlig</i><i>Cebuano</i><i>Soomaali</i><i>тоҷикӣ</i><i>తెలుగు</i><i>தமிழ்</i><i>ไทย</i><i>Türkçe</i><i>türkmen dili</i><i>Cymraeg</i><i>‫ئۇيغۇرچە‬</i><i>‫اردو‬</i><i>українська</i><i>o‘zbek</i><i>‫עברית‬</i><i>Ελληνικά</i><i>ʻŌlelo Hawaiʻi</i><i>‫سنڌي‬</i><i>magyar</i><i>chiShona</i><i>հայերեն</i><i>Igbo</i><i>Pagsasao Ilokano</i><i>‫ייִדיש‬</i><i>हिन्दी</i><i>Basa Sunda</i><i>Indonesia</i><i>Jawa</i><i>Èdè Yorùbá</i><i>Tiếng Việt</i><i> 正體中文 </i><i>Xitsonga</i></pre>

Някои хора може да попитат, тъй като всички браузъри имат функции за превод, не е необходимо да се интернационализира уебсайтът?

Бих искал да кажа, че **само уебсайтове, които генерират статични преводи, могат да поддържат многоезично търсене в пълен текст в сайта и оптимизация за търсачки** .

## Въведение

Научнофантастичният роман „Три тела“ (китайско произношение: `3Ti` ) измисля извънземна цивилизация, която комуникира чрез електромагнитни вълни, няма езикови бариери и е технологично просперираща.

Библия · Битие :

> По това време хората по целия свят имаха един и същ акцент и език.
>
> Изградете кула, която достига до небето, стигнете до портата на Бог, съберете сърцата на хората и разпространете репутацията си.
>
> Господ каза: Хората от една и съща култура и раса образуват свой собствен клан. Построяването на кула днес е само прелюдия, но ще направим всичко в бъдеще.
>
> Тогава той дойде и разпръсна хората на различни места, неспособни да се разберат.
>
> Оттогава споровете продължават и в света няма Вавилонска кула.

Надявам се да създам инструменти, така че хората на земята да могат да бъдат като хора с три тела, да общуват, без да са обвързани с език, и цялото човечество да може да се обедини отново.

И така, имаше [`3Ti.Site`](//3Ti.Site) .

## Урок

## Функция Въведение

### Запазване На Markdown Format

### Промяна На Превода

След като промените превода, трябва да стартирате отново `./i18n.sh` , за да актуализирате кеша.

### Бележки За Превода

Коментарите за превод трябва да посочват езика след „``, като например ` ```rust` .

В момента поддържа превод на коментари за rust, c, cpp, java, js, coffee, python и bash.

Редактирайте [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) , за да добавите поддръжка за превод за коментари на повече езици.

### Конфигуриране На Прокси

Задаването на следните променливи на средата позволява извикванията на API на Google Translate да преминават през проксито.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Вграждане На Променливи

```
test:测试变量<br 0>嵌入
```

### Изпразване На Кеша

```bash
rm -rf .i18n/.cache
```
