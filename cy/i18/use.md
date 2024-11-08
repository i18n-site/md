# Gosod a Defnyddio

## Mae windows Yn Gosod git bash Yn Gyntaf

windows , [cliciwch yma i lawrlwytho a gosod `git bash` yn gyntaf](https://git-scm.com/download/win) .

Rhedeg gweithrediadau dilynol yn `git bash` .

## Gosod

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Ffurfweddu Tocyn Cyfieithu

Ymwelwch [i18n.site/token](//i18n.site/token) Cliciwch i gopïo tocyn

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Creu `~/.config/i18n.site.yml` , gludwch y cynnwys wedi'i gopïo iddo, mae'r cynnwys fel a ganlyn:

```
token: YOUR_API_TOKEN
```

Yn ogystal, mae angen i chi rwymo cerdyn credyd talu i mewn [i18n.site/payBill](//i18n.site/payBill) (Nid oes angen ad-daliad, bydd y wefan yn didynnu ffioedd yn awtomatig yn ôl defnydd, [gweler yr hafan ar gyfer prisio](/#price) ).

## Defnydd

### Prosiect Demo

Cyfeiriwch at y prosiect demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) ddysgu cyfluniad `i18` cyfieithiad.

Gall defnyddwyr yn Tsieina glonio [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Ar ôl clonio, rhowch y cyfeiriadur a rhedeg `i18` i gwblhau'r cyfieithiad.

### Strwythur Cyfeiriadur

Mae'r templed strwythur cyfeiriadur warws fel a ganlyn

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Mae'r ffeiliau demo wedi'u cyfieithu yn y cyfeiriadur `en` yn enghraifft yn unig a gellir eu dileu.

### Rhedeg Cyfieithu

Rhowch y cyfeiriadur a rhedeg `i18` i gyfieithu.

Yn ogystal â'r cyfieithiad, bydd y rhaglen hefyd yn cynhyrchu'r ffolder `.i18n/data` , os gwelwch yn dda ei ychwanegu at y gadwrfa.

Ar ôl cyfieithu'r ffeil newydd, bydd ffeil ddata newydd yn cael ei chynhyrchu yn y cyfeiriadur hwn Cofiwch atodi `git add . ` .

## Ffeil Ffurfweddu

`.i18n/conf.yml` yw ffeil ffurfweddu'r offeryn cyfieithu llinell orchymyn `i18`

Mae'r cynnwys fel a ganlyn:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Iaith Ffynhonnell &

Yn y ffeil ffurfweddu, mae'r isradd o `fromTo` :

`en` yw'r iaith ffynhonnell, `zh ja ko de fr` yw iaith darged y cyfieithiad.

Cod iaith gweler [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Er enghraifft, os ydych chi am gyfieithu Tsieinëeg i'r Saesneg, ailysgrifennwch y llinell hon `zh: en` .

Os ydych chi eisiau cyfieithu i'r holl ieithoedd a gefnogir, gadewch yn wag ar ôl `:` . er enghraifft

```
i18n:
  fromTo:
    en:
```

Gallwch chi ffurfweddu `fromTo` gwahanol ar gyfer / is-gyfeiriaduron Mae arddangosiad wedi'i ysgrifennu fel a ganlyn :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Yn y tabl cyfluniad hwn, iaith ffynhonnell cyfieithu catalog `blog` yw `zh` , a `ja` yw iaith ffynhonnell cyfieithu catalog `blog/your_file_name.md` .

### Delweddau/Dolenni Amlieithog

Pan fo'r URLau yn y lluniau a'r dolenni yn `replace:` a `MarkDown` (a'r priodoleddau `src` a `href` o fewnosod `HTML` ) wedi'u ffurfweddu yn `.i18n/conf.yml` gyda'r rhagddodiad hwn, bydd cod iaith ffynhonnell yr URL yn cael ei ddisodli gan god iaith y cyfieithiad ( [iaith rhestr cod](/i18/LANG_CODE) ).

Er enghraifft, mae eich ffurfweddiad fel a ganlyn:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

Geiriadur yw `replace: ` , yr allwedd yw'r rhagddodiad URL i'w ddisodli, a'r gwerth yw'r rheol amnewid.

Ystyr disodli rheol `ko de uk>ru zh-TW>zh >en` uchod yw bod `ko de` yn defnyddio llun eu cod iaith eu hunain, mae `zh-TW` a `zh` yn defnyddio llun `zh` , `uk` yn defnyddio llun `ru` , ac mae ieithoedd eraill (fel `ja` ) yn defnyddio’r llun o `en` yn ddiofyn.

Er enghraifft, mae ffeil ffynhonnell Ffrangeg ( `fr` ) o `MarkDown` fel a ganlyn :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Mae'r ffeil Saesneg ( `en` ) wedi'i chyfieithu a'i chynhyrchu fel a ganlyn :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Yma, mae'r `/en/` yn y cod iaith ffynhonnell yn cael eu disodli gan `/zh/` yn yr iaith darged.

Sylwch : Rhaid cael `/` cyn ac ar ôl cod iaith y testun newydd yn yr URL.

> [!TIP]
> Os yw `- /` wedi'i ffurfweddu yn `url:` , dim ond llwybrau cymharol fydd yn cael eu paru, ond ni fydd URLs sy'n dechrau gyda `//` yn cael eu paru.
>
> Os yw rhai dolenni o enw parth am gael eu disodli ac nad yw rhai am gael eu disodli, gallwch ddefnyddio rhagddodiaid gwahanol fel `[x](//x.com/en/)` ac `[x](https://x.com/en/)` i'w gwahaniaethu.

### Anwybyddu Ffeil

Yn ddiofyn, bydd pob ffeil sy'n dechrau gyda `.md` ac `.yml` yn y cyfeiriadur iaith ffynhonnell yn cael ei chyfieithu.

Os ydych chi am anwybyddu rhai ffeiliau a pheidio â'u cyfieithu (fel drafftiau anorffenedig), gallwch ei ffurfweddu gyda'r maes `ignore` .

Mae `ignore` yn defnyddio'r [globset](https://docs.rs/globset/latest/globset/#syntax) gystrawen â'r `.gitignore` ffeil.

Er enghraifft, mae `_* ` yn y ffeil ffurfweddu uchod yn golygu na fydd ffeiliau sy'n dechrau gydag `_` yn cael eu cyfieithu.

## Rheolau Cyfieithu

### Ni Ddylai Golygyddion Cyfieithu Ychwanegu Na Dileu Llinellau

Mae modd golygu'r cyfieithiad. Addaswch y testun gwreiddiol a'i gyfieithu â pheiriant eto, ni fydd yr addasiadau â llaw i'r cyfieithiad yn cael eu trosysgrifo (os nad yw'r paragraff hwn o'r testun gwreiddiol wedi'i addasu).

> [!WARN]
> Rhaid cael gohebiaeth un-i-un rhwng llinellau’r cyfieithiad a’r testun gwreiddiol. Hynny yw, peidiwch ag ychwanegu neu ddileu llinellau wrth lunio'r cyfieithiad. Fel arall, bydd yn achosi dryswch yn y storfa golygu cyfieithu.

Os aiff rhywbeth o'i le, cyfeiriwch at [y Cwestiynau Cyffredin am atebion.](/i18/qa#H1)

### `YAML` Gyfieithiad

Bydd yr offeryn llinell orchymyn yn dod o hyd i bob ffeil sy'n gorffen â `.yml` yn y cyfeiriadur ffeiliau iaith ffynhonnell ac yn eu cyfieithu.

* Sylwch fod yn rhaid i'r ôl-ddodiad enw ffeil fod yn `.yml` (nid `.yaml` ).

Mae'r teclyn ond yn cyfieithu gwerthoedd y geiriadur yn `.yml` , nid bysellau'r geiriadur.

Er enghraifft `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

yn cael ei gyfieithu fel `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Gall y cyfieithiad o `YAML` hefyd gael ei addasu â llaw (ond peidiwch ag ychwanegu neu ddileu allweddi neu linellau yn y cyfieithiad).

Yn seiliedig ar `YAML` cyfieithiad, gallwch yn hawdd adeiladu atebion rhyngwladol ar gyfer ieithoedd rhaglennu amrywiol.

## Defnydd Uwch

### Is-Gyfeiriadur Cyfieithu

Cyn belled â bod `.i18n/conf.yml` yn cael ei greu (nid oes angen dechrau o dempled prosiect demo bob tro), bydd `i18` yn gweithio'n iawn.

Bydd yr offeryn llinell orchymyn yn dod o hyd i `.i18n/conf.yml` ffurfwedd ym mhob is-gyfeiriadur ac yn eu cyfieithu.

Gall prosiectau sy'n defnyddio'r bensaernïaeth [monorepo](//monorepo.tools) rannu ffeiliau iaith yn is-gyfeiriaduron.

![](https://p.3ti.site/1719910016.avif)

### Cyfeiriadur Gosod Personol

Bydd yn cael ei osod i `/usr/local/bin` yn ddiofyn.

Os nad oes gan `/usr/local/bin` ganiatâd ysgrifennu bydd yn cael ei osod i `~/.bin` .

Gall gosod newidyn amgylchedd `TO` ddiffinio'r cyfeiriadur gosod, er enghraifft :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```