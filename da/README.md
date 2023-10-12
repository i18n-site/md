<h1 style="justify-content:space-between">3Ti.Site ⋅ At tænke uden grænser<img src="//i-01.eu.org/3Ti/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

3Ti.Site, Markdown-oversættelse + flersproget statisk sitegenerator.

Byg hurtigt internationale dokumenter og blogs, der understøtter [hundredvis af sprog](https://github.com/i18n-site/node/blob/main/lang/src/index.js) ...

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:7px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i> 简体中文 </i><i>español</i><i>français</i><i>Deutsch</i><i> 日本語 </i><i>italiano</i><i>한국어</i><i>русский</i><i>português</i><i>shqip</i><i>‫العربية‬</i><i>አማርኛ</i><i>অসমীয়া</i><i>azərbaycan</i><i>Eʋegbe</i><i>Aymar aru</i><i>Gaeilge</i><i>eesti</i><i>ଓଡ଼ିଆ</i><i>Oromoo</i><i>euskara</i><i>беларуская</i><i>bamanakan</i><i>български</i><i>íslenska</i><i>polski</i><i>bosanski</i><i>‫فارسی‬</i><i>भोजपुरी</i><i>Afrikaans</i><i>татар</i><i>dansk</i><i>‫ދިވެހިބަސް‬</i><i>ትግርኛ</i><i>डोगरी</i><i>संस्कृत भाषा</i><i>Filipino</i><i>suomi</i><i>Frysk</i><i>ខ្មែរ</i><i>ქართული</i><i>गोंयची कोंकणी</i><i>ગુજરાતી</i><i>avañe’ẽ</i><i>қазақ тілі</i><i>Kreyòl ayisyen</i><i>Hausa</i><i>Nederlands</i><i>кыргызча</i><i>galego</i><i>català</i><i>čeština</i><i>ಕನ್ನಡ</i><i>corsu</i><i>hrvatski</i><i>Runasimi</i><i>kurdî</i><i>‫کوردیی ناوەندی‬</i><i>Latina</i><i>latviešu</i><i>ລາວ</i><i>lietuvių</i><i>lingála</i><i>Luganda</i><i>Lëtzebuergesch</i><i>Kinyarwanda</i><i>română</i><i>Malagasy</i><i>Malti</i><i>मराठी</i><i>മലയാളം</i><i>Melayu</i><i>македонски</i><i>मैथिली</i><i>Māori</i><i>মৈতৈলোন্</i><i>монгол</i><i>বাংলা</i><i>Mizo ṭawng</i><i>မြန်မာ</i><i>𞄀𞄄𞄰𞄩𞄍𞄜𞄰</i><i>IsiXhosa</i><i>isiZulu</i><i>नेपाली</i><i>norsk</i><i>ਪੰਜਾਬੀ</i><i>‫پښتو‬</i><i>Nyanja</i><i>Akan</i><i>svenska</i><i>Gagana fa'a Sāmoa</i><i>српски</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>සිංහල</i><i>esperanto</i><i>slovenčina</i><i>slovenščina</i><i>Kiswahili</i><i>Gàidhlig</i><i>Cebuano</i><i>Soomaali</i><i>тоҷикӣ</i><i>తెలుగు</i><i>தமிழ்</i><i>ไทย</i><i>Türkçe</i><i>türkmen dili</i><i>Cymraeg</i><i>‫ئۇيغۇرچە‬</i><i>‫اردو‬</i><i>українська</i><i>o‘zbek</i><i>‫עברית‬</i><i>Ελληνικά</i><i>ʻŌlelo Hawaiʻi</i><i>‫سنڌي‬</i><i>magyar</i><i>chiShona</i><i>հայերեն</i><i>Igbo</i><i>Pagsasao Ilokano</i><i>‫ייִדיש‬</i><i>हिन्दी</i><i>Basa Sunda</i><i>Indonesia</i><i>Jawa</i><i>Èdè Yorùbá</i><i>Tiếng Việt</i><i> 正體中文 </i><i>Xitsonga</i></pre>

Nogle mennesker vil måske spørge, eftersom alle browsere har oversættelsesfunktioner, er det unødvendigt at internationalisere webstedet?

Jeg vil gerne sige, at **kun websteder, der genererer statiske oversættelser, kan understøtte flersproget fuldtekstsøgning på stedet og søgemaskineoptimering** .

## Introduktion

Science fiction-romanen &quot;Three Body&quot; (kinesisk udtale: `3Tǐ` ) fiktionaliserer en fremmed civilisation, der bruger elektromagnetiske bølger til at kommunikere med gennemsigtig tænkning og velstående teknologi.

Bibelen · Første Mosebog :

> I den æra var stemmerne og ordene fra alle under himlen som én.
>
> De byggede et tårn, der nåede himmelhøjt, rørte ved Guds porte, forenede hjerter og pralede af deres herlighed.
>
> Herren proklamerede: Når mennesker deler sprog og slægt, bliver de en enestående stamme. Tårnet er kun begyndelsen; i de kommende dage er der intet, de ikke vil opnå.
>
> Således steg han ned og fik folket til at sprede sig vidt og bredt, deres sprog nu uforståelige for hinanden.
>
> Fra da af var striden uendelig, og verden så ikke flere tårne, der rørte himlen.

Jeg håber at skabe værktøjer, så jordens mennesker kan være som tre-kropsmennesker, kommunikere uden at være bundet af sproget, og hele menneskeheden kan blive forenet igen.

Så der var [`3Ti.Site`](//3Ti.Site) .

## Markdown-Oversættelse

Markdown-oversættelse kan bruges uafhængigt eller med en flersproget statisk webstedsgenerator til hurtigt at bygge et websted.

Bevar perfekt Markdown-formatering, fed skrift, lister, titler, citater, links, illustrationer og mere.

Hvis der er prøvekode i Markdown, vil prøvekoden ikke blive oversat.

## Flersproget Webstedsbygger

## Tutorial

## Funktion Introduktion

### Behold Markdown-Format

### Rediger Oversættelse

Efter at have ændret oversættelsen, skal du køre `./i18n.sh` igen for at opdatere cachen.

### Oversættelsesnoter

Oversættelseskommentarer skal angive sproget efter \```, såsom ` ```rust` .

Understøtter i øjeblikket kommentaroversættelse til rust, c, cpp, java, js, kaffe, python og bash.

Rediger [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) for at tilføje oversættelsesstøtte til kommentarer på flere sprog.

### Konfigurer Proxy

Indstilling af følgende miljøvariabler gør det muligt for Google Translate API-kald at gå gennem proxyen.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variabel Indlejring

```
test:测试变量<br 0>嵌入
```

### Tøm Cachen

```bash
rm -rf .i18n/.cache
```
