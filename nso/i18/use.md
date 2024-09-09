# Kenya Le Go Diriša

## windows Pele Kenya git bash

windows Tshepedišo, hle [tobetsa mo go taonelouta le go tsenya `git bash`](https://git-scm.com/download/win) pele.

Matha ditiro tše di latelago ka go `git bash` .

## Hloma

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Beakanya Leswao La Phetolelo

Etela [i18n.site/token](//i18n.site/token) Klika go kopiša leswao

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Theha `~/.config/i18n.site.yml` , kgomaretša diteng tše di kopišitšwego go yona, diteng di ka tsela ye e latelago:

```
token: YOUR_API_TOKEN
```

Ho phaella moo, o lokela [i18n.site/payBill](//i18n.site/payBill) tlama karete ya mokitlane bakeng sa tefello (ha ho recharge e hlokahalang, websaeteng tla ka tsela e iketsang goga ditefello ho ea ka tshebediso ya, [bona leqepheng la lapeng bakeng sa theko](/#price) ).

## Šomiša

### Projeke Ya Demo

Hle lebelela porojeke ya [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) go ithuta peakanyo ya phetolelo ya `i18` .

Badiriši ba China ba ka clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Ka morago ga go dira clone, tsenya ka gare ga tšhupetšo gomme o kitimiše `i18` go phetha phetolelo.

### Sebopego Sa Tšhupamabaka

Sebopego sa tšhupetšo ya polokelo ya thempleite ke ka tsela ye e latelago

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Difaele tša demo tše di fetoletšwego ka gare ga tšhupetšo ya `en` ke mohlala fela gomme di ka phumolwa.

### Matha Phetolelo

Kenya tšhupetšo gomme o kitimiše `i18` go fetolela.

Go tlaleletša go phetolelo, lenaneo le tla tšweletša gape le foltara ya `.i18n/data` , hle e tlaleletša polokelong.

Ka morago ga go fetolela faele ye mpsha, faele ye mpsha ya datha e tla tšweletšwa ka go tšhupetšo ye Gopola go tlaleletša `git add .` .

## Faele Ya Peakanyo

`.i18n/conf.yml` ke faele ya peakanyo ya sedirišwa sa phetolelo ya mola wa taelo `i18`

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

Ka faele ya phetolo, ka tlase ga `fromTo` :

`en` ke polelo ya mothopo, `zh ja ko de fr` ke polelo ya nepišo ya phetolelo.

Khoutu ya polelo bona [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Ka mohlala, ge o nyaka go fetolela Setšhaena go Seisemane, ngwala mola wo gape `zh: en` .

Ge o nyaka go fetolela go maleme ka moka ao a thekgwago, hle tlogela se se na selo ka morago ga `:` . Mohlala

```
i18n:
  fromTo:
    en:
```

O ka beakanya `fromTo` ye e fapanego / difaele tše nnyane tše di fapanego Pontšho e ngwalwa ka tsela ye e latelago :

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

Tafoleng ye ya peakanyo, polelo ya mothopo ya phetolelo ya lelokelelo `blog` ke `zh` , gomme polelo ya mothopo ya phetolelo ya `blog/your_file_name.md` ke `ja` .

### Hlokomologa Faele

Ka go ikemela, difaele ka moka tšeo di thomago ka `.md` le `.yml` ka go tšhupetšo ya polelo ya mothopo di tla fetolelwa.

Ge o nyaka go hlokomologa difaele tše itšego gomme o se di fetole (go swana le dithalwa tše di sa fetšwago), o ka e beakanya ka tšhemo ya `ignore` .

`ignore` e šomiša [globset](https://docs.rs/globset/latest/globset/#syntax) ya go swana le ya faele `.gitignore` .

Mohlala, `_* ` ka faeleng ya peakanyo ye e lego ka mo godimo e ra gore difaele tšeo di thomago ka `_` di ka se fetolelwe.

## Melawana Ya Phetolelo

### Barulaganyi Ba Phetolelo Ga Se Ba Swanela Go Oketša Goba Go Phumola Methalo

Phetolelo e a rulaganywa. Fetoša sengwalwa sa mathomo gomme o se fetolele ka motšhene gape, diphetošo tša seatla tša phetolelo di ka se ngwalwe godimo (ge e le gore temana ye ya sengwalwa sa mathomo ga se ya fetošwa).

Eupša hle ela hloko gore methalo ya phetolelo le mongwalo wa mathomo di swanetše go sepelelana le e tee le e tee. Ke gore, o se ke wa oketša goba wa phumola methalo ge o kgoboketša phetolelo. Go sego bjalo, e tla hlola kgakanego ka gare ga cache ya go rulaganya phetolelo.

Ge selo se sengwe se sa sepele gabotse, hle lebelela [FAQ bakeng sa ditharollo.](/i18/qa#H1)

### `YAML` Diphetolelo

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

Phetolelo ya `YAML` e ka fetošwa gape ka seatla (eupša o se ke wa oketša goba wa phumola dinotlelo goba mela phetolelong).

Go ya ka phetolelo `YAML` , o ka aga gabonolo ditharollo tša boditšhabatšhaba tša maleme a go fapafapana a mananeo.

## Tšhomišo Ya Maemo a Godimo

### Tlhahlo Ya Ka Fasana Ya Phetolelo

Ge feela `.i18n/conf.yml` e hlotšwe (ga go nyakege gore o thome go tšwa go thempleite ya projeke ya demo nako le nako), `i18` e tla šoma gabotse.

Sedirišwa sa mola wa taelo se tla hwetša dipeakanyo `.i18n/conf.yml` ka go dipuku ka moka tša ka fasana gomme sa di fetolela.

Diprotšeke tšeo di šomišago mohlwaela wa [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Tlwaelo Tlhomamiso Directory

E tla hlomamisa go `/usr/local/bin` ka default.

Ge `/usr/local/bin` e se na tumelelo ya go ngwala e tla tsenywa go `~/.bin` .

Setting tikologo phetogo `TO` ka hlaloša tšhupetšo ya go hloma, mohlala :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```