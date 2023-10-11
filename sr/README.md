<h1 style="justify-content:space-between">3Ти.Сите · Тхинк Бордерлесс<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ти.Сите, генератор статичког сајта, може аутоматски да преведе Маркдовн на [више од стотину различитих језика](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 8px 8px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:8px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i> 简体中文 </i><i>español</i><i>français</i><i>Deutsch</i><i> 日本語 </i><i>italiano</i><i>한국어</i><i>русский</i><i>português</i><i>shqip</i><i>‫العربية‬</i><i>አማርኛ</i><i>অসমীয়া</i><i>azərbaycan</i><i>Eʋegbe</i><i>Aymar aru</i><i>Gaeilge</i><i>eesti</i><i>ଓଡ଼ିଆ</i><i>Oromoo</i><i>euskara</i><i>беларуская</i><i>bamanakan</i><i>български</i><i>íslenska</i><i>polski</i><i>bosanski</i><i>‫فارسی‬</i><i>भोजपुरी</i><i>Afrikaans</i><i>татар</i><i>dansk</i><i>‫ދިވެހިބަސް‬</i><i>ትግርኛ</i><i>डोगरी</i><i>संस्कृत भाषा</i><i>Filipino</i><i>suomi</i><i>Frysk</i><i>ខ្មែរ</i><i>ქართული</i><i>गोंयची कोंकणी</i><i>ગુજરાતી</i><i>avañe’ẽ</i><i>қазақ тілі</i><i>Kreyòl ayisyen</i><i>Hausa</i><i>Nederlands</i><i>кыргызча</i><i>galego</i><i>català</i><i>čeština</i><i>ಕನ್ನಡ</i><i>corsu</i><i>hrvatski</i><i>Runasimi</i><i>kurdî</i><i>‫کوردیی ناوەندی‬</i><i>Latina</i><i>latviešu</i><i>ລາວ</i><i>lietuvių</i><i>lingála</i><i>Luganda</i><i>Lëtzebuergesch</i><i>Kinyarwanda</i><i>română</i><i>Malagasy</i><i>Malti</i><i>मराठी</i><i>മലയാളം</i><i>Melayu</i><i>македонски</i><i>मैथिली</i><i>Māori</i><i>মৈতৈলোন্</i><i>монгол</i><i>বাংলা</i><i>Mizo ṭawng</i><i>မြန်မာ</i><i>𞄀𞄄𞄰𞄩𞄍𞄜𞄰</i><i>IsiXhosa</i><i>isiZulu</i><i>नेपाली</i><i>norsk</i><i>ਪੰਜਾਬੀ</i><i>‫پښتو‬</i><i>Nyanja</i><i>Akan</i><i>svenska</i><i>Gagana fa'a Sāmoa</i><i>српски</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>සිංහල</i><i>esperanto</i><i>slovenčina</i><i>slovenščina</i><i>Kiswahili</i><i>Gàidhlig</i><i>Cebuano</i><i>Soomaali</i><i>тоҷикӣ</i><i>తెలుగు</i><i>தமிழ்</i><i>ไทย</i><i>Türkçe</i><i>türkmen dili</i><i>Cymraeg</i><i>‫ئۇيغۇرچە‬</i><i>‫اردو‬</i><i>українська</i><i>o‘zbek</i><i>‫עברית‬</i><i>Ελληνικά</i><i>ʻŌlelo Hawaiʻi</i><i>‫سنڌي‬</i><i>magyar</i><i>chiShona</i><i>հայերեն</i><i>Igbo</i><i>Pagsasao Ilokano</i><i>‫ייִדיש‬</i><i>हिन्दी</i><i>Basa Sunda</i><i>Indonesia</i><i>Jawa</i><i>Èdè Yorùbá</i><i>Tiếng Việt</i><i> 正體中文 </i><i>Xitsonga</i></pre>

Неки људи ће се можда питати, пошто сви претраживачи имају функције превођења, да ли је непотребно интернационализовати веб локацију?

Желео бих да кажем да **само веб локације које генеришу статичне преводе могу да подрже вишејезичну претрагу целог текста на сајту и оптимизацију претраживача** .

## Увод

Научнофантастични роман „Три тела” (кинески изговор: `3Tǐ` ) фикционализује ванземаљску цивилизацију која користи електромагнетне таласе за комуникацију, са транспарентним размишљањем и напредном технологијом.

Библија · Постање :

> У то доба, гласови и речи свих под небом били су као једно.
>
> Саградили су кулу до неба, додирујући врата Божија, сједињујући срца и хвалећи се својом славом.
>
> Господ је објавио: Када људи деле језик и лозу, они постају јединствено племе. Кула је само почетак; у данима који долазе, нема ништа што неће постићи.
>
> Тако је Он сишао, узрокујући да се људи распрше надалеко и нашироко, а њихови језици сада једни другима нису били разумљиви.
>
> Од тада, свађа је била бескрајна, и свет више није видео куле које би додиривале небо.

Надам се да ћу створити алате тако да људи на земљи могу да буду као људи са три тела, да комуницирају без да буду везани језиком, и да се читаво човечанство поново уједини.

Дакле, постојао је [`3Ti.Site`](//3Ti.Site) .

## Приручник

## Функција Увод

### Задржите Маркдовн Формат

### Измени Превод

Након измене превода, потребно је да поново покренете `./i18n.sh` да бисте ажурирали кеш меморију.

### Напомене О Преводу

Коментари превода морају да назначе језик после \```, као што је ` ```rust` .

Тренутно подржава превод коментара за руст, ц, цпп, јава, јс, кафу, питхон и басх.

Уредите [тран_мд/срц/цоммент.цоффее](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) да бисте додали подршку за превод за коментаре на више језика.

### Конфигуришите Прокси

Подешавање следећих променљивих окружења омогућава позивима АПИ-ја Гоогле преводиоца да пролазе кроз прокси.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Вариабле Ембеддинг

```
test:测试变量<br 0>嵌入
```

### Испразните Кеш

```bash
rm -rf .i18n/.cache
```
