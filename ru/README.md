<h1 style="justify-content:space-between">3Ti.Site · Думайте без границ<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, генератор статических сайтов, может автоматически переводить Markdown на [более чем сотню различных языков](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:15px;box-shadow:0 0 3px inset #eee;padding:15px 8px 8px 15px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:htm;margin-right:8px;margin-bottom:8px;font-style:normal;color:#444;border-bottom:1px dashed #ccc;}</style><i>English</i><i> 简体中文 </i><i>español</i><i>français</i><i>Deutsch</i><i> 日本語 </i><i>italiano</i><i>한국어</i><i>русский</i><i>português</i><i>shqip</i><i>‫العربية‬</i><i>አማርኛ</i><i>অসমীয়া</i><i>azərbaycan</i><i>Eʋegbe</i><i>Aymar aru</i><i>Gaeilge</i><i>eesti</i><i>ଓଡ଼ିଆ</i><i>Oromoo</i><i>euskara</i><i>беларуская</i><i>bamanakan</i><i>български</i><i>íslenska</i><i>polski</i><i>bosanski</i><i>‫فارسی‬</i><i>भोजपुरी</i><i>Afrikaans</i><i>татар</i><i>dansk</i><i>‫ދިވެހިބަސް‬</i><i>ትግርኛ</i><i>डोगरी</i><i>संस्कृत भाषा</i><i>Filipino</i><i>suomi</i><i>Frysk</i><i>ខ្មែរ</i><i>ქართული</i><i>गोंयची कोंकणी</i><i>ગુજરાતી</i><i>avañe’ẽ</i><i>қазақ тілі</i><i>Kreyòl ayisyen</i><i>Hausa</i><i>Nederlands</i><i>кыргызча</i><i>galego</i><i>català</i><i>čeština</i><i>ಕನ್ನಡ</i><i>corsu</i><i>hrvatski</i><i>Runasimi</i><i>kurdî</i><i>‫کوردیی ناوەندی‬</i><i>Latina</i><i>latviešu</i><i>ລາວ</i><i>lietuvių</i><i>lingála</i><i>Luganda</i><i>Lëtzebuergesch</i><i>Kinyarwanda</i><i>română</i><i>Malagasy</i><i>Malti</i><i>मराठी</i><i>മലയാളം</i><i>Melayu</i><i>македонски</i><i>मैथिली</i><i>Māori</i><i>মৈতৈলোন্</i><i>монгол</i><i>বাংলা</i><i>Mizo ṭawng</i><i>မြန်မာ</i><i>𞄀𞄄𞄰𞄩𞄍𞄜𞄰</i><i>IsiXhosa</i><i>isiZulu</i><i>नेपाली</i><i>norsk</i><i>ਪੰਜਾਬੀ</i><i>‫پښتو‬</i><i>Nyanja</i><i>Akan</i><i>svenska</i><i>Gagana fa'a Sāmoa</i><i>српски</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>සිංහල</i><i>esperanto</i><i>slovenčina</i><i>slovenščina</i><i>Kiswahili</i><i>Gàidhlig</i><i>Cebuano</i><i>Soomaali</i><i>тоҷикӣ</i><i>తెలుగు</i><i>தமிழ்</i><i>ไทย</i><i>Türkçe</i><i>türkmen dili</i><i>Cymraeg</i><i>‫ئۇيغۇرچە‬</i><i>‫اردو‬</i><i>українська</i><i>o‘zbek</i><i>‫עברית‬</i><i>Ελληνικά</i><i>ʻŌlelo Hawaiʻi</i><i>‫سنڌي‬</i><i>magyar</i><i>chiShona</i><i>հայերեն</i><i>Igbo</i><i>Pagsasao Ilokano</i><i>‫ייִדיש‬</i><i>हिन्दी</i><i>Basa Sunda</i><i>Indonesia</i><i>Jawa</i><i>Èdè Yorùbá</i><i>Tiếng Việt</i><i> 正體中文 </i><i>Xitsonga</i></pre>

Некоторые люди могут спросить, поскольку все браузеры имеют функции перевода, нет ли необходимости интернационализировать веб-сайт?

Я хотел бы сказать, что **только веб-сайты, генерирующие статические переводы, могут поддерживать многоязычный полнотекстовый поиск внутри сайта и поисковую оптимизацию** .

## Введение

Научно-фантастический роман «Три тела» (китайское произношение: `3Ti` ) описывает инопланетную цивилизацию, которая общается посредством электромагнитных волн, не имеет языковых барьеров и технологически процветает.

Библия · Бытие :

> В то время люди во всем мире имели одинаковый акцент и язык.
>
> Постройте башню, которая достигнет неба, доберитесь до ворот Бога, соберите сердца людей и распространите свою репутацию.
>
> Господь сказал: Люди одной культуры и расы образуют собственный клан. Строительство башни сегодня — это лишь прелюдия, но мы сделаем все в будущем.
>
> Затем он пришел и разбросал людей по разным местам, неспособных понять друг друга.
>
> С тех пор споры продолжаются, а Вавилонской башни в мире нет.

Я надеюсь создать инструмент, который позволит людям Земли быть трехтелыми людьми, общаться, не будучи связанными языком, и снова объединить все человечество.

## Руководство

## Введение В Функцию

### Сохранять Формат Markdown

### Изменить Перевод

После изменения перевода вам необходимо повторно запустить `./i18n.sh` , чтобы обновить кеш.

### Примечания К Переводу

В комментариях перевода необходимо указывать язык после \```, например ` ```rust` .

В настоящее время поддерживает перевод комментариев для Rust, C, CPP, Java, JS, Coffee, Python и Bash.

Отредактируйте [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) , чтобы добавить поддержку перевода комментариев на большее количество языков.

### Настроить Прокси

Установка следующих переменных среды позволяет вызовам API Google Translate проходить через прокси.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Встраивание Переменных

```
test:测试变量<br 0>嵌入
```

### Очистить Кэш

```bash
rm -rf .i18n/.cache
```
