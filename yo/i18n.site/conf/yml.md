# .i18n/conf.yml

Profaili fun `i18n.site` jẹ `.i18n/conf.yml` .

Ayafi fun awọn eto ti [`i18`](/i18) , `ignore:` ati `i18n:` , faili iṣeto ni bi atẹle:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
```

Lara wọn, `upload` si ohun atunto `ext:` tumọ si pe `.md` nikan ni yoo gbejade nigbati o ba tẹjade.

## Oke Lilọ nav

Awọn aṣayan atunto `nav:` , bamu si akojọ aṣayan lilọ kiri ni oke ti oju-iwe ile.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Lara wọn, `i18n: home` ni ibamu si `home: Home` ni `en/i18n.yml` .

`en/i18n.yml` yoo tumọ si awọn ede pupọ, gẹgẹbi `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Lẹhin ti itumọ ti pari, o le ṣe atunṣe iye itumọ `yml` , ṣugbọn maṣe ṣafikun tabi pa bọtini itumọ `yml` rẹ.

### `use: Toc` , Awoṣe Faili Ẹyọkan (Pẹlu Ìla)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tumọ si ṣiṣe ni lilo awoṣe `Toc` , eyiti o n ṣe awoṣe `Markdown` kan.

`TOC` ni abbreviation ti `Table of Contents` Nigbati awoṣe yi ti wa ni jigbe, awọn ìla ti yi `Markdown` faili yoo wa ni han ninu awọn legbe.

`url:` duro fun ọna faili ti `Markdown` ( `/` ni ibamu si iwe-itọsọna root `/README.md` , orukọ faili yii nilo asọtẹlẹ nla ati suffix kekere kan).

### `use: Md` , Awoṣe Faili Ẹyọkan (Ko Si Ila-Ila)

Awoṣe `Md` ati awoṣe `Toc` jẹ kanna ati pe awọn mejeeji lo lati ṣe faili `Markdown` kan ṣoṣo. Ṣugbọn awoṣe `Md` ko ṣe afihan ilana ni ẹgbẹ ẹgbẹ.

O le ṣe atunṣe `use: Toc` ni iṣeto ti o wa loke si `use: Md` , ṣiṣe `i18n.site` ni itọsọna `md` lẹẹkansi, lẹhinna ṣabẹwo si URL awotẹlẹ idagbasoke lati ṣe akiyesi awọn ayipada lori oju-iwe akọkọ.

### Ikojọpọ Aiyipada Laisi Ọna Iṣeto

Ti o ba wọle si ọna kan ati pe a ko tunto asọtẹlẹ ọna rẹ ni `nav:` , faili `MarkDown` ti o baamu si ọna naa yoo jẹ ti kojọpọ nipasẹ aiyipada ati jigbe ni lilo awoṣe `Md` .

Fun apẹẹrẹ, ti o ba wọle si `/test` , ati pe `nav:` tunto laisi ọna yii, ati pe ede oju-iwe jẹ Gẹẹsi (koodu `en` ), `/en/test.md` yoo jẹ ti kojọpọ nipasẹ aiyipada ati ṣe pẹlu lilo awoṣe `Md` .

Ti `/en/test.md` ko ba si faili yii, oju-iwe `404` aiyipada yoo han.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Olona-Faili Awoṣe

Ninu faili iṣeto:

```
  - i18n: blog
    use: Doc
```

Tọkasi lilo `Doc` fun ṣiṣe awoṣe.

Awoṣe `Doc` ṣe atilẹyin iṣakojọpọ ọpọ `MarkDown` lati ṣe agbekalẹ awọn ilana iwe fun ẹyọkan tabi awọn iṣẹ akanṣe pupọ.

#### Iṣẹ Akanṣe (Awọn Faili Lọpọlọpọ)

`blog` loke ni awọn nikan-ohun mode ti `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Nigbati url Ba Ṣofo, O Jẹ Aiyipada Si Iye i18n

Ti `url` ko ba kọ, `url` aiyipada si iye `i18n` Ofin yii tun gba ipa fun awọn awoṣe miiran.

Ọna kikọ ti o wa loke jẹ deede si `url: blog` , ati pe faili ti o baamu jẹ `en/blog/TOC` .

#### Ọpọ Ise Agbese

Iṣeto ni `i18n:doc` ninu `.i18n/conf.yml` jẹ ipo iṣẹ-ọpọlọpọ.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Nibi, `menu: NB demo1,demo2` , tumọ si lilo awoṣe `NB` lati ṣe akojọ aṣayan-silẹ.

`NB` , eyi ti o jẹ abbreviation ti `Name Breif` , tumo si wipe awọn jabọ-silẹ akojọ le han awọn orukọ ati awọn kokandinlogbon ti ise agbese.

`NB` ni atẹle nipasẹ paramita `demo1,demo2` ti o kọja si.
Akiyesi : ** Ko yẹ ki o wa awọn aaye ** ṣaaju ati lẹhin idẹsẹ `,` ni `demo1,demo2` .

Faili atọka itọsọna ti o baamu fun awọn paramita loke ni:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Tabili Ti Awọn Akoonu Ìwé

`i18n.site` yoo ṣiṣẹ `js` plug-in `.i18n/hook/after.tran/TOC.js` ni ile itaja demo lati ka faili atọka itọsọna `doc` ti o baamu si iṣeto awoṣe `TOC` lati ṣe agbekalẹ ilana ilana `json` .

Ti o ba lo awoṣe `doc` , o gbọdọ ni plug-in yii.

Ti o ba bẹrẹ iṣẹ akanṣe `i18n.site` lati folda ṣofo, ranti lati daakọ iṣẹ akanṣe demo `.i18n` si itọsọna rẹ.

Awoṣe `Doc` naa yoo ṣe itọka tabili akoonu ti o da lori ipilẹṣẹ `json` .

##### Alaye Akoonu Alaye

`en/blog/TOC` Awọn akoonu jẹ bi atẹle :

```
README.md

news/README.md
  news/begin.md
```

##### Lo Itọsi Lati Tọkasi Awọn Ipele

`README.md` ni ila akọkọ ti `en/blog/TOC` loke ni ibamu si `i18n.site` ni aworan ni isalẹ, eyiti o jẹ orukọ iṣẹ akanṣe.

Awọn ila meji ti o tẹle jẹ bi a ṣe han ninu sikirinifoto ni isalẹ.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` ni ibamu si `News` ,
`news/begin.md` ni ibamu si `Our Product is Online !`

Awọn faili `TOC` ti wa ni indented lati tọkasi ibatan akosoagbasomode ti ilana ati atilẹyin isọdi ipele-pupọ.

##### Ipele Obi Nikan Kọ Akọle, Kii Ṣe Akoonu.

Nigbati ọpọlọpọ awọn ipele ti indentation ba wa, ipele obi nikan kọ akọle nikan kii ṣe akoonu naa. Bí bẹ́ẹ̀ kọ́, àtẹ̀wé yóò dàrú.

##### Project README.md

A le kọ akoonu si nkan `README.md` , bii `en/demo2/README.md` .

Ṣe akiyesi pe akoonu ti faili yii ko ṣe afihan tabili ti awọn akoonu akoonu, nitorinaa o gba ọ niyanju lati ṣe idinwo gigun ati kọ ifihan kukuru kan.

###### Kokandinlogbon Project

O le rii pe `Deme Two` ni tagline iṣẹ akanṣe ni isalẹ akojọ aṣayan-silẹ ati orukọ iṣẹ akanṣe katalogi `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Eyi ni ibamu si ila akọkọ `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Awọn akoonu lẹhin ti akọkọ oluṣafihan `:` ti akọkọ-ipele akọle ti ise agbese `README.md` yoo wa ni bi awọn ise agbese kokandinlogbon.

Awọn olumulo lati China, Japan ati Korea, jọwọ ṣe akiyesi pe o yẹ ki o lo oluṣafihan iwọn idaji `:` dipo oluṣafihan iwọn ni kikun.

##### Bii O Ṣe Le Gbe TOC Ni Olopobobo?

Awọn faili `TOC` nilo lati gbe sinu itọsọna ti ede orisun.

Fun apẹẹrẹ, ti ede orisun ba jẹ Kannada, lẹhinna `TOC` loke jẹ `zh/blog/TOC` .

Ti ede orisun ba jẹ atunṣe, o nilo lati gbe awọn faili `TOC` ti ede kan ninu iṣẹ naa lọ si ede miiran.

O le tọka si awọn aṣẹ wọnyi:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Jọwọ ṣe atunṣe `en/` ati `zh/` ninu aṣẹ ti o wa loke si koodu ede rẹ.