# Gosod a Defnyddio

## Mae windows Yn Gosod git bash Yn Gyntaf

windows , os gwelwch yn dda [cliciwch yma i lawrlwytho a gosod `git bash`](https://git-scm.com/download/win) yn gyntaf.

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

Yn ogystal, mae angen i chi [i18n.site/payBill](//i18n.site/payBill) cerdyn credyd ar gyfer taliad (nid oes angen ad-daliad, bydd y wefan yn didynnu ffioedd yn awtomatig yn ôl defnydd, [gweler yr hafan ar gyfer prisio](/#price) ).

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

### Ychwanegu Ffeiliau I'r Gadwrfa

Yn ogystal â chyfieithu, bydd y rhaglen hefyd yn cynhyrchu'r ffeiliau canlynol, os gwelwch yn dda eu hychwanegu at y gadwrfa.

```
.i18n/hash
.i18n/cache/.gitignore
```

Yn eu plith, mae cynnwys `.i18n/cache/.gitignore` fel a ganlyn :

```
**/*
!**/.gitignore
```

Mae hyn yn golygu bod yr holl ffeiliau yng nghyfeiriadur `.i18n/cache/` (ac eithrio `.i18n/cache/.gitignore` ) yn cael eu hanwybyddu.

Os nad yw eich meddalwedd rheoli fersiwn yn `git` , anwybyddwch ef yn ôl y ffurfweddiad hwn.

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

Gallwch chi ffurfweddu `fromTo` gwahanol ar gyfer gwahanol is-gyfeiriaduron Mae arddangosiad wedi'i ysgrifennu fel a ganlyn : /

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

Yn y tabl cyfluniad hwn, iaith ffynhonnell cyfieithu catalog `blog` yw `zh` , a `ja` yw iaith ffynhonnell cyfieithu `blog/your_file_name.md` .

### Anwybyddu Ffeil

Yn ddiofyn, bydd pob ffeil sy'n dechrau gyda `.md` ac `.yml` yn y cyfeiriadur iaith ffynhonnell yn cael ei chyfieithu.

Os ydych chi am anwybyddu rhai ffeiliau a pheidio â'u cyfieithu (fel drafftiau anorffenedig), gallwch ei ffurfweddu gyda'r maes `ignore` .

Mae `ignore` yn defnyddio'r [globset](https://docs.rs/globset/latest/globset/#syntax) gystrawen â'r `.gitignore` ffeil.

Er enghraifft, mae `_* ` yn y ffeil ffurfweddu uchod yn golygu na fydd ffeiliau sy'n dechrau gydag `_` yn cael eu cyfieithu.

## Rheolau Cyfieithu

### Ni Ddylai Golygyddion Cyfieithu Ychwanegu Na Dileu Llinellau

Mae modd golygu'r cyfieithiad. Addaswch y testun gwreiddiol a'i gyfieithu â pheiriant eto, ni fydd yr addasiadau â llaw i'r cyfieithiad yn cael eu trosysgrifo (os nad yw'r paragraff hwn o'r testun gwreiddiol wedi'i addasu).

Ond sylwer fod yn rhaid i linellau y cyfieithiad a'r testun gwreiddiol gyfateb o un i un. Hynny yw, peidiwch ag ychwanegu neu ddileu llinellau wrth lunio'r cyfieithiad. Fel arall, bydd yn achosi dryswch yn y storfa golygu cyfieithu.

Os aiff rhywbeth o'i le, cyfeiriwch at [y Cwestiynau Cyffredin am atebion.](/i18/qa#H1)

### `YAML` Gyfieithiad

Bydd yr offeryn llinell orchymyn yn dod o hyd i'r holl ffeiliau sy'n gorffen â `.yml` yn y cyfeiriadur ffeiliau iaith ffynhonnell ac yn eu cyfieithu.

* Sylwch fod yn rhaid i'r ôl-ddodiad enw ffeil fod yn `.yml` (nid `.yaml` ).

Dim ond mewn `.yml` y mae'r offeryn yn cyfieithu gwerthoedd y geiriadur, nid bysellau'r geiriadur.

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