# Kenya Le Go Diriša

## windows Pele Kenya git bash

windows Tshepedišo, hle [tobetsa mo go taonelouta le go tsenya pele `git bash`](https://git-scm.com/download/win)

Matha ditiro tše di latelago ka `git bash`

## Hloma

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Beakanya Leswao La Phetolelo

Etela [i18n.site/token](//i18n.site/token) Klika go kopiša leswao

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Bopa `~/.config/i18n.site.yml` kgomaretša diteng tše di kopišitšwego go yona, diteng di ka tsela ye e latelago:

```
token: YOUR_API_TOKEN
```

Ho phaella moo, o lokela [i18n.site/payBill](//i18n.site/payBill) tlama karete ya mokitlane bakeng sa tefo (ha ho recharge e hlokahalang, websaeteng tla ka tsela e iketsang goga ditefello ho ea ka tshebediso ya, [bona leqepheng la lapeng bakeng sa theko](/#price) ).

## Šomiša

### Projeke Ya Demo

Hle lebelela projeke `i18` demo go ithuta peakanyo ya phetolelo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Badiriši ba China ba ka clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Ka morago ga go dira clone, tsenya ka gare ga tšhupetšo gomme o `i18` go phetha phetolelo.

### Sebopego Sa Tlhahlo

Sebopego sa tšhupetšo ya polokelo ya thempleite ke ka tsela ye e latelago

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Tšhupetšo ya `en` e na le difaele tša demo tše di fetoletšwego, tšeo e lego mohlala fela gomme di ka phumolwa.

### Matha Phetolelo

Kena ka gare ga tšhupetšo gomme o `i18` go fetolela.

### Oketša Difaele Polokelong

Go tlaleletša go phetolelo, lenaneo le tla tšweletša gape difaele tše di latelago, hle di tlaleletša polokelong.

```
.i18n/hash
.i18n/cache/.gitignore
```

Gare ga : , diteng tša `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Se `.i18n/cache/.gitignore` ra gore hlokomologa difaele ka moka ka go `.i18n/cache/`

Ge e ba softwere ya gago ya taolo ya phetolelo ga se `git`

## Faele Ya Peakanyo

`.i18n/conf.yml` Ke faele ya peakanyo ya sedirišwa sa phetolelo ya `i18`

Diteng ke tše di latelago:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Polelo Ya Mothopo &

Ka faele ya peakanyo, ba ka tlase ga `fromTo`

`en` ke polelo ya mothopo, `zh ja ko de fr` ke polelo yeo e nepišitšwego ya phetolelo.

Khoutu ya polelo bona [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Ka mohlala, ge o nyaka go fetolela Setšhaena go Seisemane, ngwala mola wo gape `zh: en`

Ge o nyaka go fetolela go maleme ka moka ao a thekgwago, hle tlogela lefeela ka morago ga `:` Mohlala

```
i18n:
  fromTo:
    en:
```

### Hlokomologa Faele

Ka go ikemela, difaele ka moka tšeo di thomago ka `.md` le `.yml` ka gare ga tšhupetšo ya polelo ya mothopo di tla fetolelwa.

Ge o nyaka go hlokomologa difaele tše itšego gomme o se di fetole (go swana le dingwalwa tše di sa fetšwago), o ka šomiša peakanyo ya tšhemo ya `ignore`

`ignore` E šomiša polelo ya go swana le `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Mohlala, ka faele ya peakanyo ye e lego ka `_` godimo `_* `

## Melawana Ya Phetolelo

### Barulaganyi Ba Phetolelo Ga Se Ba Swanela Go Oketša Goba Go Phumola Methalo

Phetolelo e a rulaganywa. Fetoša sengwalwa sa mathomo gomme o se fetolele ka motšhene gape, diphetošo tša seatla tša phetolelo di ka se ngwalwe godimo (ge e le gore temana ye ya sengwalwa sa mathomo ga se ya fetošwa).

Eupša hle ela hloko gore methalo ya phetolelo le mongwalo wa mathomo di swanetše go sepelelana le e tee le e tee. Ke gore, o se ke wa oketša goba wa phumola methalo ge o kgoboketša phetolelo. Go sego bjalo, e tla hlola kgakanego ka gare ga cache ya go rulaganya phetolelo.

Ge selo se sengwe se sa sepele gabotse, hle lebelela [FAQ bakeng sa ditharollo.](/i18/qa#H1)

### `YAML` Fetolela

Sedirišwa sa mola wa taelo se tla hwetša difaele ka moka tšeo di felelago ka `.yml` ka gare ga tšhupetšo ya faele ya polelo ya mothopo gomme sa di fetolela.

* Hlokomela gore moselana wa leina la faele e swanetše go ba `.yml` (e sego `.yaml` ).

Sedirišwa se fetolela fela dikelo tša pukuntšu ka go `.yml` , e sego dinotlelo tša pukuntšu.

Mohlala `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

e tla fetolelwa bjalo ka `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Phetolelo ya `YAML` e ka fetolwa gape ka seatla (eupša o se ke wa oketša goba wa phumola dinotlelo goba mela phetolelong).

Go ya ka `YAML` Phetolelo, o ka aga gabonolo ditharollo tša boditšhabatšhaba tša maleme a go fapafapana a mananeo.

## Tšhomišo Ya Maemo a Godimo

### Tlhahlo Ya Ka Fasana Ya Phetolelo

Ge feela o hlama `.i18n/conf.yml` (ga go nyakege gore o thome go tšwa go thempleite ya projeke ya demo nako le nako), `i18` e tla šoma gabotse.

Sedirišwa sa mola wa taelo se tla hwetša peakanyo ya `.i18n/conf.yml`

Diprotšeke tšeo di šomišago mohlwaela wa [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Tlwaelo Tlhomamiso Directory

E tla hlomamisa go `/usr/local/bin`

Ge e le `~/.bin` `/usr/local/bin`

Beakanya diphetogo tša `TO` O ka hlaloša tšhupetšo ya go hloma, mohlala :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
