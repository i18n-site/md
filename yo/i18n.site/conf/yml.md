# .i18n/conf.yml

Faili iṣeto ni fun `i18n.site` jẹ `.i18n/conf.yml` ati pe akoonu jẹ atẹle :

```yaml
i18n:
  fromTo:
    en:
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
    use: Blog
addon:
  - i18n.addon/toc
```

Lara wọn, `upload` si ohun atunto `ext:` tumọ si pe `.md` nikan ni yoo gbejade nigbati o ba tẹjade.

## Oke Lilọ nav

Awọn aṣayan atunto `nav:` , bamu si akojọ aṣayan lilọ kiri ni oke oju-iwe akọọkan.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Lara wọn, `i18n: home` ni ibamu si `home: Home` ni `en/i18n.yml` (nibiti `en` jẹ ede orisun ti itumọ iṣẹ).

`en/i18n.yml` akoonu jẹ ọrọ ti o han ninu akojọ aṣayan lilọ kiri, eyiti yoo tumọ ni ibamu si `fromTo` ni iṣeto ni, fun apẹẹrẹ, tumọ si `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Lẹhin ti itumọ ti pari, o le ṣe atunṣe iye itumọ `yml` , ṣugbọn maṣe ṣafikun tabi pa bọtini itumọ `yml` rẹ.

### `use: Toc` Awoṣe Iwe-Ẹyọkan Pẹlu Itọka

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tumọ si ṣiṣe ni lilo awoṣe `Toc` , eyiti o n ṣe awoṣe `Markdown` kan.

`TOC` ni abbreviation ti `Table of Contents` Nigbati awoṣe yi ti wa ni jigbe, awọn ìla ti yi `Markdown` faili yoo wa ni han ninu awọn legbe.

`url:` duro fun ọna faili ti `Markdown` ( `/` ni ibamu si iwe-itọsọna root `/README.md` , orukọ faili yii nilo asọtẹlẹ nla ati suffix kekere kan).

### `use: Md` Awoṣe Iwe-Ẹyọkan Laisi Ilana

Awoṣe `Md` ati awoṣe `Toc` jẹ kanna ati pe awọn mejeeji lo lati ṣe faili `Markdown` kan ṣoṣo. Ṣugbọn awoṣe `Md` ko ṣe afihan ilana ni ẹgbẹ ẹgbẹ.

O le ṣe atunṣe `use: Toc` ni iṣeto ti o wa loke si `use: Md` , ṣiṣe `i18n.site` ni itọsọna `md` lẹẹkansi, lẹhinna ṣabẹwo si URL awotẹlẹ idagbasoke lati ṣe akiyesi awọn ayipada lori oju-iwe akọkọ.

### `use: Blog` Awọn Awoṣe Bulọọgi

Awoṣe bulọọgi n ṣe afihan atokọ ti awọn nkan (awọn akọle ati awọn afoyemọ) ni aṣẹ akoko titẹjade.

[→ Tẹ ibi lati kọ ẹkọ nipa iṣeto ni pato](/i18n.site/conf/blog)

### `use: Doc` Awọn Awoṣe Iwe Aṣẹ Faili

Ninu faili iṣeto:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Tọkasi lilo `Doc` fun ṣiṣe awoṣe.

Awoṣe `Doc` ṣe atilẹyin iṣakojọpọ ọpọ `MarkDown` lati ṣe agbekalẹ awọn ilana iwe fun ẹyọkan tabi awọn iṣẹ akanṣe pupọ.

#### Awọn Iṣẹ Akanṣe Pupọ Ati Awọn Faili Lọpọlọpọ

Iṣeto ni ti `.i18n/conf.yml` ni `i18n:doc` jẹ olona-ise agbese olona-faili mode Rendering.

Nibi, `menu: NB demo1,demo2` , tumọ si lilo awoṣe `NB` lati ṣe akojọ aṣayan-silẹ.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , eyi ti o jẹ abbreviation ti `Name Breif` , tumo si wipe awọn jabọ-silẹ akojọ le han awọn orukọ ati awọn kokandinlogbon ti ise agbese.

`NB` ni atẹle nipasẹ paramita `demo1,demo2` ti o kọja si.

Akiyesi : ** Ko yẹ ki o wa awọn aaye ** ṣaaju ati lẹhin aami idẹsẹ `,` ni `demo1,demo2` .

Faili atọka itọsọna ti o baamu fun awọn paramita loke ni:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Nikan Ise Agbese Ọpọ Awọn Faili

Ti o ba ni iṣẹ akanṣe kan nikan, o le tunto rẹ gẹgẹbi atẹle.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Ise agbese ẹyọkan pẹlu awọn faili lọpọlọpọ ko ṣe atilẹyin atunto `url` bi ọna gbongbo `/`
> nav:__ __conf.yml `nav:`
> Apẹrẹ yii ni lati ṣe iyatọ awọn iwe iṣẹ akanṣe dara julọ, awọn bulọọgi ati akoonu miiran nipasẹ awọn ilana.
> O gba ọ niyanju lati lo faili kan ati oju-iwe kan gẹgẹbi oju-iwe ile.

> [!TIP]
> Ti `url` ko ba kọ, `url` aiyipada si iye `i18n` Ofin yii tun gba ipa fun awọn awoṣe miiran.

#### TOC Tabili Ti Awọn Akoonu Ìwé

Ti awoṣe `use: Doc` ba ṣiṣẹ ni iṣeto, jọwọ mu plug-in `i18n.addon/toc` ṣiṣẹ ni `.i18n/conf.yml` Iṣeto ni bi atẹle :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` yoo fi sori ẹrọ laifọwọyi ati ṣiṣẹ plug-in yii, ka `TOC` faili atọka itọsọna, ati ṣe ina `json` ilana ilana ilana.

Ti o ba jẹ iṣẹ akanṣe kan pẹlu awọn faili lọpọlọpọ, iwe-itọsọna root `TOC` jẹ ilana ti o baamu si `url:` ninu itọsọna ede orisun Fun apẹẹrẹ, ti ede orisun jẹ Kannada: faili ti o baamu si `url: flashduty` jẹ `zh/flashduty/TOC` .

Ti o ba jẹ awọn iṣẹ akanṣe pupọ ati awọn faili lọpọlọpọ, ko si iwulo lati tunto `url:` Ilana root ti `TOC` jẹ itọsọna ti o baamu si iye ti `i18n` .

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

Awọn faili `TOC` ti wa ni indented lati tọkasi ibatan akosoagbasomode ti ìla, ṣe atilẹyin isọdi ipele pupọ, ati awọn asọye laini ti o bẹrẹ pẹlu `# ` .

##### Ipele Obi Nikan Kọ Akọle, Kii Ṣe Akoonu.

Nigbati ọpọlọpọ awọn ipele ti indentation ba wa, ipele obi nikan kọ akọle nikan kii ṣe akoonu naa. Bí bẹ́ẹ̀ kọ́, àtẹ̀wé yóò dàrú.

##### Project README.md

A le kọ akoonu si nkan `README.md` , bii `en/demo2/README.md` .

Ṣe akiyesi pe akoonu ti faili yii ko ṣe afihan tabili ti awọn akoonu akoonu, nitorinaa o gba ọ niyanju lati ṣe idinwo gigun ati kọ ifihan kukuru kan.

###### Kokandinlogbon Project

O le rii pe `Deme Two` ni tagline iṣẹ akanṣe ni isalẹ akojọ aṣayan-silẹ ati orukọ iṣẹ akanṣe katalogi `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Eyi ni ibamu si ila akọkọ ti `en/demo2/README.md` :

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

### Ikojọpọ Aiyipada Laisi Ọna Iṣeto

Fun ọna kan ti o wọle si, ti a ko ba tunto ìpele ipa-ọna ni `nav:` , faili `MarkDown` ti o baamu si ọna naa yoo jẹ ti kojọpọ nipasẹ aiyipada ati ṣe ni lilo awoṣe `Md` naa.

Fun apẹẹrẹ, ti o ba wọle si `/test` ati pe `nav:` tunto laisi ami-ipele ti ọna yii, ati pe ede lilọ kiri lọwọlọwọ jẹ Gẹẹsi (koodu `en` ), `/en/test.md` yoo kojọpọ nipasẹ aiyipada ati ti a ṣe pẹlu lilo awoṣe `Md` .

Ti `/en/test.md` ko ba si faili yii, oju-iwe `404` aiyipada yoo han.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">