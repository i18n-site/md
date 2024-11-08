# Kenya Le Go Diriša

## windows Pele Kenya git bash

windows , hle [tobetsa mona ho thowuni le ho kenya `git bash` pele](https://git-scm.com/download/win) .

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

Go tlaleletša, o swanetše go tlama karata ya mokitlana ya tefo ka [i18n.site/payBill](//i18n.site/payBill) (Ga go nyakege tefo gape, weposaete e tla goga ditefelo ka go iketla go ya ka tšhomišo, [bona letlakala la gae bakeng sa theko](/#price) ).

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

Difaele tša demo tše di fetoletšwego ka gare ga tšhupetšo `en` ke mohlala fela gomme di ka phumolwa.

### Matha Phetolelo

Kenya tšhupetšo gomme o kitimiše `i18` go fetolela.

Go tlaleletša go phetolelo, lenaneo le tla tšweletša gape le foltara ya `.i18n/data` , hle e tlaleletša polokelong.

Ka morago ga go fetolela faele ye mpsha, faele ye mpsha ya datha e tla tšweletšwa ka go tšhupetšo ye Gopola go tlaleletša `git add . ` .

## Faele Ya Peakanyo

`.i18n/conf.yml` ke faele ya peakanyo ya sedirišwa sa phetolelo ya mola wa taelo wa `i18`

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

O ka beakanya `fromTo` ye e fapanego ya difaele tše nnyane tše di / Pontšho e ngwalwa ka tsela ye e latelago :

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

Tafoleng ye ya peakanyo, polelo ya mothopo ya phetolelo ya lelokelelo `blog` ke `zh` , gomme polelo ya mothopo ya phetolelo ya lelokelelo `blog/your_file_name.md` ke `ja` .

### Diswantšho/Dikgokagano Tša Maleme a Mantši

Ge di-URL ka diswantšhong le dikgokagano go `replace:` le `MarkDown` (le dika tša `src` le `href` tša `HTML` ye e tsentšwego ) di beakantšwe ka go `.i18n/conf.yml` ka hlogo ye, khoutu ya polelo ya mothopo ka go URL e tla tšeelwa legato ke khoutu ya polelo ya phetolelo ( [polelo lenane la khoutu](/i18/LANG_CODE) ).

Ka mohlala, peakanyo ya gago e ka tsela ye e latelago:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` ke pukuntšu, senotlelo ke hlogo ya URL yeo e swanetšego go tšeelwa legato, gomme boleng ke molao wa go tšeelwa legato.

Bokao bja go tšea legato la molao `ko de uk>ru zh-TW>zh >en` ka godimo ke gore `ko de` o šomiša seswantšho sa khoutu ya polelo ya bona, `zh-TW` le `zh` ba šomiša seswantšho sa `zh` , `uk` ba šomiša seswantšho sa `ru` , gomme maleme a mangwe (go swana le `ja` ) a šomiša seswantšho ya `en` ka default.

Ka mohlala, faele ya mohlodi ya Sefora ( `fr` ) ya `MarkDown` e ka tsela ye e latelago :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Faele ya Seisemane ( `en` ) yeo e fetoletšwego le yeo e tšweleditšwego e ka tsela ye e latelago :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Mo, `/en/` ka khoutu ya polelo ya mohlodi di tšeelwa legato ke `/zh/` ka polelong yeo e nepišitšwego.

Ela hloko : Go swanetše go ba le `/` pele le ka morago ga khoutu ya polelo ya sengwalwa seo se tšeetšwego legato ka go URL.

> [!TIP]
> Ge e le gore `- /` e beakantšwe ka go `url:` , ke ditsela tša go lekana fela tšeo di tlago bapetšwa, eupša di-URL tšeo di thomago ka `//` di ka se swanelwe.
>
> Ge e le gore dikgokagano tše dingwe tša leina la domain di nyaka go tšeelwa legato gomme tše dingwe ga di nyake go tšeelwa legato, o ka šomiša dihlongwapele tše di fapanego tša go swana le `[x](//x.com/en/)` le `[x](https://x.com/en/)` go di fapantšha.

### Hlokomologa Faele

Ka go ikemela, difaele ka moka tšeo di thomago ka `.md` le `.yml` ka go tšhupetšo ya polelo ya mothopo di tla fetolelwa.

Ge o nyaka go hlokomologa difaele tše itšego gomme o se di fetole (go swana le dithalwa tše di sa fetšwago), o ka e beakanya ka tšhemo ya `ignore` .

`ignore` e šomiša polelo ya go [globset](https://docs.rs/globset/latest/globset/#syntax) le ya faele `.gitignore` .

Mohlala, `_* ` ka faeleng ya peakanyo ye e lego ka mo godimo e ra gore difaele tšeo di thomago ka `_` di ka se fetolelwe.

## Melawana Ya Phetolelo

### Barulaganyi Ba Phetolelo Ga Se Ba Swanela Go Oketša Goba Go Phumola Methalo

Phetolelo e a rulaganywa. Fetoša sengwalwa sa mathomo gomme o se fetolele ka motšhene gape, diphetošo tša seatla tša phetolelo di ka se ngwalwe godimo (ge e le gore temana ye ya sengwalwa sa mathomo ga se ya fetošwa).

> [!WARN]
> Go swanetše go ba le go sepelelana ga motho ka o tee ka o tee magareng ga methalo ya phetolelo le mongwalo wa mathomo. Ke gore, o se ke wa oketša goba wa phumola methalo ge o kgoboketša phetolelo. Go sego bjalo, e tla hlola kgakanego ka gare ga cache ya go rulaganya phetolelo.

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

Diprotšeke tšeo di šomišago mohlwaela [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Tlwaelo Tlhomamiso Directory

E tla hlomamisa go `/usr/local/bin` ka default.

Ge `/usr/local/bin` e se na tumelelo ya go ngwala e tla tsenywa go `~/.bin` .

Setting tikologo phetogo `TO` ka hlaloša tšhupetšo ya go hloma, mohlala :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```