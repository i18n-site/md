<h1 style="justify-content:space-between">3Ti.Site · Myšlení bez hranic<img src="//i-01.eu.org/3Ti/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

3Ti.Site, generátor statických stránek, dokáže automaticky přeložit Markdown do [více než stovky různých jazyků](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:7px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i> 简体中文 </i><i>español</i><i>français</i><i>Deutsch</i><i> 日本語 </i><i>italiano</i><i>한국어</i><i>русский</i><i>português</i><i>shqip</i><i>‫العربية‬</i><i>አማርኛ</i><i>অসমীয়া</i><i>azərbaycan</i><i>Eʋegbe</i><i>Aymar aru</i><i>Gaeilge</i><i>eesti</i><i>ଓଡ଼ିଆ</i><i>Oromoo</i><i>euskara</i><i>беларуская</i><i>bamanakan</i><i>български</i><i>íslenska</i><i>polski</i><i>bosanski</i><i>‫فارسی‬</i><i>भोजपुरी</i><i>Afrikaans</i><i>татар</i><i>dansk</i><i>‫ދިވެހިބަސް‬</i><i>ትግርኛ</i><i>डोगरी</i><i>संस्कृत भाषा</i><i>Filipino</i><i>suomi</i><i>Frysk</i><i>ខ្មែរ</i><i>ქართული</i><i>गोंयची कोंकणी</i><i>ગુજરાતી</i><i>avañe’ẽ</i><i>қазақ тілі</i><i>Kreyòl ayisyen</i><i>Hausa</i><i>Nederlands</i><i>кыргызча</i><i>galego</i><i>català</i><i>čeština</i><i>ಕನ್ನಡ</i><i>corsu</i><i>hrvatski</i><i>Runasimi</i><i>kurdî</i><i>‫کوردیی ناوەندی‬</i><i>Latina</i><i>latviešu</i><i>ລາວ</i><i>lietuvių</i><i>lingála</i><i>Luganda</i><i>Lëtzebuergesch</i><i>Kinyarwanda</i><i>română</i><i>Malagasy</i><i>Malti</i><i>मराठी</i><i>മലയാളം</i><i>Melayu</i><i>македонски</i><i>मैथिली</i><i>Māori</i><i>মৈতৈলোন্</i><i>монгол</i><i>বাংলা</i><i>Mizo ṭawng</i><i>မြန်မာ</i><i>𞄀𞄄𞄰𞄩𞄍𞄜𞄰</i><i>IsiXhosa</i><i>isiZulu</i><i>नेपाली</i><i>norsk</i><i>ਪੰਜਾਬੀ</i><i>‫پښتو‬</i><i>Nyanja</i><i>Akan</i><i>svenska</i><i>Gagana fa'a Sāmoa</i><i>српски</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>සිංහල</i><i>esperanto</i><i>slovenčina</i><i>slovenščina</i><i>Kiswahili</i><i>Gàidhlig</i><i>Cebuano</i><i>Soomaali</i><i>тоҷикӣ</i><i>తెలుగు</i><i>தமிழ்</i><i>ไทย</i><i>Türkçe</i><i>türkmen dili</i><i>Cymraeg</i><i>‫ئۇيغۇرچە‬</i><i>‫اردو‬</i><i>українська</i><i>o‘zbek</i><i>‫עברית‬</i><i>Ελληνικά</i><i>ʻŌlelo Hawaiʻi</i><i>‫سنڌي‬</i><i>magyar</i><i>chiShona</i><i>հայերեն</i><i>Igbo</i><i>Pagsasao Ilokano</i><i>‫ייִדיש‬</i><i>हिन्दी</i><i>Basa Sunda</i><i>Indonesia</i><i>Jawa</i><i>Èdè Yorùbá</i><i>Tiếng Việt</i><i> 正體中文 </i><i>Xitsonga</i></pre>

Někteří lidé se mohou ptát, protože všechny prohlížeče mají funkce překladu, je zbytečné internacionalizovat web?

Chtěl bych říci, že **pouze webové stránky, které generují statické překlady, mohou podporovat vícejazyčné fulltextové vyhledávání na webu a optimalizaci pro vyhledávače** .

## Úvod

Sci-fi román „Tři těla“ (čínská výslovnost: `3Tǐ` ) beletrizuje mimozemskou civilizaci, která ke komunikaci používá elektromagnetické vlny, s transparentním myšlením a prosperující technologií.

Bible · Genesis :

> V té době byly hlasy a slova všech pod nebesy jako jeden.
>
> Postavili věž, která sahala do nebes, dotýkala se Božích bran, spojovala srdce a chlubila se svou slávou.
>
> Pán prohlásil: Když lidé sdílejí jazyk a linii, stávají se jedinečným kmenem. Věž je jen začátek; v příštích dnech není nic, čeho by nedosáhli.
>
> Tak sestoupil a způsobil, že se lidé rozprchli široko daleko a jejich jazyky si nyní navzájem nesrozumitelné.
>
> Od té doby byly spory nekonečné a svět už neviděl žádné věže, které by se dotýkaly nebe.

Doufám, že vytvořím nástroje, aby lidé na Zemi mohli být jako lidé tří těl, komunikovat, aniž by byli svázáni jazykem, a celé lidstvo mohlo být znovu sjednoceno.

Takže tam byl [`3Ti.Site`](//3Ti.Site) .

## Tutorial

## Úvod Do Funkce

### Zachovat Formát Markdown

### Upravit Překlad

Po úpravě překladu musíte znovu spustit `./i18n.sh` a aktualizovat mezipaměť.

### Poznámky K Překladu

Komentáře k překladu musí uvádět jazyk za \```, například ` ```rust` .

V současné době podporuje překlad komentářů pro rust, c, cpp, java, js, coffee, python a bash.

Upravte [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) a přidejte podporu překladu pro komentáře ve více jazycích.

### Nakonfigurujte Proxy

Nastavení následujících proměnných prostředí umožňuje volání rozhraní Google Translate API procházet přes proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variabilní Vkládání

```
test:测试变量<br 0>嵌入
```

### Vymazání Vyrovnávací Paměti

```bash
rm -rf .i18n/.cache
```
