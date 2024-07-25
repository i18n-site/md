# .i18n/conf.yml

Faili iṣeto ni `.i18n/conf.yml` `i18n.site`

Ayafi fun `ignore:` ati `i18n:` ti [`i18`](/i18) faili iṣeto ni bi atẹle:

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

Lara wọn, ohun `ext:` `.md` ni ti `upload`

## Oke Lilọ nav

`nav:` aṣayan iṣeto ni ibamu si akojọ aṣayan lilọ kiri ni oke ti oju-iwe ile.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

`home: Home` `en/i18n.yml` , `i18n: home`

`en/i18n.yml` yoo tumọ si awọn ede pupọ, gẹgẹbi `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Lẹhin ti itumọ ti pari, o le ṣe atunṣe iye ti `yml` ninu itumọ, ṣugbọn maṣe ṣafikun tabi pa bọtini itumọ `yml`

### `use: Toc` Awoṣe Faili Ẹyọkan (Pẹlu Ilana)

Iṣeto : `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tumo si lilo `Toc` awotẹlẹ, eyi ti o n ṣe apẹrẹ `Markdown` kan.

`TOC` ni kukuru ti `Table of Contents` `Markdown`

`url:` `Markdown` `/` `/README.md`

### `use: Md` Awoṣe Faili Ẹyọkan (Ko Si Ilana)

`Md` Àdàkọ jẹ́ ọ̀kan náà pẹ̀lú `Toc` , àwọn méjèèjì ni a lò láti fi ṣe fáìlì `Markdown` ṣoṣo. Sibẹsibẹ `Md` awoṣe naa ko ṣe afihan ilana ti o wa ninu ẹgbẹ ẹgbẹ.

O le ṣe `use: Toc` ni iṣeto ni oke si `use: Md` , ṣiṣe `i18n.site` ninu `md` lẹẹkansi, ati lẹhinna ṣabẹwo URL awotẹlẹ idagbasoke lati ṣe akiyesi awọn ayipada lori oju-iwe akọkọ.

### Ikojọpọ Aiyipada Laisi Ọna Iṣeto

Ti a ko ba tunto ìpele ipa-ọna ti ọna kan ti n wọle si `nav:` faili `MarkDown` ti o baamu si ọna naa yoo jẹ ti kojọpọ nipasẹ aiyipada ati ti ṣe ni lilo awoṣe `Md` .

Fun apẹẹrẹ, ti o ba ṣabẹwo `/test` , ati pe `nav:` ti tunto laisi ọna yii, ati pe ede oju-iwe jẹ Gẹẹsi (koodu `en` ), awoṣe yoo jẹ ti kojọpọ `/en/test.md` ati ṣe ni lilo `Md` nipasẹ aiyipada.

`/en/test.md` faili yii ko ba si, oju-iwe `404` aiyipada yoo han.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Awoṣe-Faili Pupọ

Ninu faili iṣeto:

```
  - i18n: blog
    use: Doc
```

Tọkasi lilo `Doc`

`MarkDown` `Doc`

#### Iṣẹ Akanṣe (Awọn Faili Lọpọlọpọ)

ni `blog` ni ipo iṣẹ akanṣe ti `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Nigbati url Ba Ṣofo, O Jẹ Aiyipada Si Iye i18n

Ti o ko ba kọ `url` `url` si iye ti `i18n` .

Ọna kikọ ti o wa loke jẹ deede si nini `url: blog` ati faili ti o baamu jẹ `en/blog/TOC` .

#### Ọpọ Ise Agbese

Iṣeto `i18n:doc` `.i18n/conf.yml` ipo iṣẹ-ọpọlọpọ.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Nibi, `menu: NB demo1,demo2` tumọ si lilo `NB` lati ṣe akojọ aṣayan-silẹ.

`NB` `Name Breif`

`NB` jẹ atẹle nipasẹ paramita `demo1,demo2` ti o kọja si.
Akiyesi : ** Ko si awọn ** ṣaaju ati lẹhin aami `,` naa `demo1,demo2`

Fun awọn paramita ti o wa loke, faili atọka itọsọna ti o baamu jẹ:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Tabili Ti Awọn Akoonu Ìwé

Yoo ṣiṣẹ `js` ohun itanna `.i18n/hook/after.tran/TOC.js` ni ibi ipamọ demo lati ka faili atọka iwe `i18n.site` itọka `doc` ti o baamu iṣeto awoṣe `TOC` lati ṣe ipilẹṣẹ `json` ti ilana ilana.

Ti o ba `doc` awoṣe, o gbọdọ ni plug-in yii.

Ti o `.i18n` bẹrẹ iṣẹ akanṣe `i18n.site`

Awoṣe `Doc` yoo ṣe itọka akoonu ti o da lori `json` ti ipilẹṣẹ.

##### Alaye Akoonu Alaye

Awọn akoonu jẹ bi : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Lo Itọsi Lati Tọkasi Awọn Ipele

`en/blog/TOC` `README.md` `i18n.site`

Awọn ila meji ti o tẹle jẹ bi a ṣe han ninu sikirinifoto ni isalẹ.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

ni ibamu si `News` `news/README.md`
ni ibamu si `Our Product is Online !` `news/begin.md`

`TOC` Faili naa wa ni indented lati tọkasi awọn ipo akoso ti ìla ati atilẹyin olona-ipele ifibọ.

##### Ipele Obi Nikan Kọ Akọle, Kii Ṣe Akoonu.

Nigbati ọpọlọpọ awọn ipele ti indentation ba wa, ipele obi nikan kọ akọle nikan kii ṣe akoonu naa. Bí bẹ́ẹ̀ kọ́, àtẹ̀wé yóò dàrú.

##### Project README.md 

`README.md` ti ise agbese na, fun apẹẹrẹ, o le kọ akoonu ni `en/demo2/README.md` .

Ṣe akiyesi pe akoonu ti faili yii ko ṣe afihan tabili ti awọn akoonu akoonu, nitorinaa o gba ọ niyanju lati ṣe idinwo gigun ati kọ ifihan kukuru kan.

###### Kokandinlogbon Project

Bi o ṣe le rii `Deme Two` ni isalẹ akojọ aṣayan-silẹ ati orukọ iṣẹ akanṣe katalogi, `Your Project slogan` iṣẹ rẹ wa :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: ni ibamu si laini akọkọ `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Ise `:` `README.md`

Awọn olumulo lati China, Japan ati Korea, jọwọ ṣakiyesi pe o gbọdọ lo oluṣafihan iwọn- `:` dipo oluṣafihan iwọn ni kikun.

##### Bii O Ṣe Le Gbe TOC Ni Olopobobo?

`TOC`

Fun apẹẹrẹ, ti ede orisun jẹ `zh/blog/TOC` , lẹhinna `TOC`

Ti ede orisun ba jẹ atunṣe, o nilo lati ṣe ipele gbigbe `TOC` ni ede kan ninu iṣẹ akanṣe si ede miiran.

O le tọka si awọn aṣẹ wọnyi:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Jọwọ ṣe atunṣe `en/` `zh/` ni aṣẹ ti o wa loke si koodu ede rẹ.


