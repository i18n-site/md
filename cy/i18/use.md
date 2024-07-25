# Gosod a Defnyddio

## Mae windows Yn Gosod git bash Yn Gyntaf

windows , [cliciwch yma i lawrlwytho a gosod yn gyntaf `git bash`](https://git-scm.com/download/win)

Rhedeg gweithrediadau dilynol yn `git bash`

## Gosod

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Ffurfweddu Tocyn Cyfieithu

Ymwelwch [i18n.site/token](//i18n.site/token) Cliciwch i gopïo tocyn

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Creu `~/.config/i18n.site.yml` gludwch y cynnwys wedi'i gopïo iddo, mae'r cynnwys fel a ganlyn:

```
token: YOUR_API_TOKEN
```

Yn ogystal, mae angen i chi [i18n.site/payBill](//i18n.site/payBill) cerdyn credyd ar gyfer taliad (nid oes angen ad-daliad, bydd y wefan yn didynnu ffioedd yn awtomatig yn ôl defnydd, [gweler yr hafan ar gyfer prisio](/#price) ).

## Defnydd

### Prosiect Demo

Cyfeiriwch at y prosiect demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) ddysgu cyfluniad cyfieithu `i18`

Gall defnyddwyr yn Tsieina glonio [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Ar ôl clonio, rhowch y cyfeiriadur a rhedeg `i18`

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

Mae'r cyfeiriadur `en`

### Rhedeg Cyfieithu

Rhowch y cyfeiriadur a rhedeg `i18`

### Ychwanegu Ffeiliau I'r Gadwrfa

Yn ogystal â chyfieithu, bydd y rhaglen hefyd yn cynhyrchu'r ffeiliau canlynol, os gwelwch yn dda eu hychwanegu at y gadwrfa.

```
.i18n/hash
.i18n/cache/.gitignore
```

Yn eu plith : mae cynnwys `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

`.i18n/cache/.gitignore` hyn yn golygu anwybyddu pob ffeil yn y cyfeiriadur `.i18n/cache/`

Os nad yw eich meddalwedd rheoli fersiwn yn `git` anwybyddwch ef yn ôl y ffurfweddiad hwn.

## Ffeil Ffurfweddu

`.i18n/conf.yml` Dyma ffeil ffurfweddu'r offeryn cyfieithu llinell `i18`

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

Yn y ffeil ffurfweddu, mae is-weithwyr `fromTo`

`en` yw'r iaith ffynhonnell, `zh ja ko de fr` yw'r iaith darged ar gyfer cyfieithu.

Cod iaith gweler [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Er enghraifft, os ydych chi am gyfieithu Tsieinëeg i'r Saesneg, ailysgrifennu'r llinell hon `zh: en`

Os ydych chi eisiau cyfieithu i'r holl ieithoedd a gefnogir, gadewch yn wag ar ôl `:` er enghraifft

```
i18n:
  fromTo:
    en:
```

### Anwybyddu Ffeil

Yn ddiofyn, bydd pob ffeil sy'n dechrau gyda `.md` a `.yml` yn y cyfeiriadur iaith ffynhonnell yn cael ei chyfieithu.

Os ydych chi am anwybyddu rhai ffeiliau a pheidio â'u cyfieithu (fel drafftiau anorffenedig), gallwch ddefnyddio'r ffurfweddiad maes `ignore`

`ignore` defnyddio cystrawen tebyg i `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Er enghraifft, yn y ffeil ffurfweddu uchod `_* ` yn golygu na fydd ffeiliau sy'n dechrau gyda `_` yn cael eu cyfieithu.

## Rheolau Cyfieithu

### Ni Ddylai Golygyddion Cyfieithu Ychwanegu Na Dileu Llinellau

Mae modd golygu'r cyfieithiad. Addaswch y testun gwreiddiol a'i gyfieithu â pheiriant eto, ni fydd yr addasiadau â llaw i'r cyfieithiad yn cael eu trosysgrifo (os nad yw'r paragraff hwn o'r testun gwreiddiol wedi'i addasu).

Ond sylwer fod yn rhaid i linellau y cyfieithiad a'r testun gwreiddiol gyfateb o un i un. Hynny yw, peidiwch ag ychwanegu neu ddileu llinellau wrth lunio'r cyfieithiad. Fel arall, bydd yn achosi dryswch yn y storfa golygu cyfieithu.

Os aiff rhywbeth o'i le, cyfeiriwch at [y Cwestiynau Cyffredin am atebion.](/i18/qa#H1)

### `Yaml`

Bydd yr offeryn llinell orchymyn yn dod o hyd i bob ffeil sy'n gorffen gyda `.yml` yn y cyfeiriadur ffeiliau iaith ffynhonnell ac yn eu cyfieithu.

* Sylwch fod yn rhaid i'r ôl-ddodiad enw ffeil fod yn `.yml` ( nid `.yaml` ).

Mae'r teclyn ond yn cyfieithu gwerthoedd y geiriadur yn `.yml` , nid bysellau'r geiriadur.

er enghraifft `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

yn cael ei gyfieithu fel `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Gellir addasu'r cyfieithiad o `YAML` â llaw hefyd (ond peidiwch ag ychwanegu neu ddileu allweddi neu linellau yn y cyfieithiad).

Yn seiliedig ar `YAML` Cyfieithu, gallwch yn hawdd adeiladu atebion rhyngwladol ar gyfer ieithoedd rhaglennu amrywiol.

## Defnydd Uwch

### Is-Gyfeiriadur Cyfieithu

Cyn belled â'ch bod chi'n creu `.i18n/conf.yml` (nid oes angen dechrau o'r templed prosiect demo bob tro), bydd `i18` yn gweithio'n iawn.

Bydd yr offeryn llinell orchymyn yn dod o hyd i'r ffurfweddiad `.i18n/conf.yml` ym mhob is-gyfeiriadur a'i gyfieithu.

Gall prosiectau sy'n defnyddio'r bensaernïaeth [monorepo](//monorepo.tools) rannu ffeiliau iaith yn is-gyfeiriaduron.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Cyfeiriadur Gosod Personol

Bydd yn cael ei osod i `/usr/local/bin`

`/usr/local/bin` nad oes caniatâd ysgrifennu bydd yn cael ei osod i `~/.bin` .

Gosod newidynnau amgylchedd `TO` Gallwch ddiffinio'r cyfeiriadur gosod, er enghraifft :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
