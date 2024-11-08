# Mametraka Sy Mampiasa

## windows Voalohany Mametraka git bash

windows , [kitiho eto raha hisintona sy hametraka `git bash` aloha](https://git-scm.com/download/win) .

Manaova hetsika manaraka amin'ny `git bash` .

## Hametraka

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Ampifanaraho Ny Token'ny Fandikan-Teny

Tsidiho [i18n.site/token](//i18n.site/token) Click to copy token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Mamorona `~/.config/i18n.site.yml` , apetaho ao anatiny ny atiny nadika, ny atiny dia toy izao manaraka izao:

```
token: YOUR_API_TOKEN
```

Ho fanampin'izay [,](/#price) mila mamatotra carte de crédit fandoavam-bola amin'ny [i18n.site/payBill](//i18n.site/payBill)

## Ampiasao

### Tetikasa Demo

Azafady [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) jereo ny tetik'asa demo mba hianarana ny fanitsiana ny dikanteny `i18` .

Afaka manao clone ny mpampiasa any Shina [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Aorian'ny cloning, midira ny lahatahiry ary mandehana `i18` hamita ny dikanteny.

### Firafitry Ny Lahatahiry

Ny firafitry ny lahatahiry trano fanatobiana modely dia toy izao manaraka izao

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Ohatra fotsiny ireo rakitra demo voadika ao amin'ny lahatahiry `en` ary azo esorina.

### Mandehana Fandikan-Teny

Ampidiro ny lahatahiry ary mihazakazaka `i18` handika.

Ho fanampin'ny fandikan-teny, hamokatra ny lahatahiry `.i18n/data` ihany koa ny programa, azafady ampio ao amin'ny tahiry.

Aorian'ny fandikana ny rakitra vaovao dia hisy rakitra data `git add . ` hatsangana ao amin'ity lahatahiry ity.

## Fikirakirana

`.i18n/conf.yml` dia ny rakitra fanamafisam-peo amin'ny fitaovana fandikan-teny andalana `i18`

Toy izao ny votoatiny:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Fiteny Loharano &

Ao amin'ny rakitra configuration, ny subordinate of `fromTo` :

`en` no fiteny loharano, `zh ja ko de fr` no fiteny kendrena amin'ny fandikan-teny.

Kaody fiteny jereo [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Ohatra, raha te handika teny sinoa ho amin'ny teny anglisy ianao dia soraty indray ity andalana `zh: en` ity.

Raha te handika amin'ny fiteny tohanana rehetra ianao dia avelao ho banga aorian'ny `:` . ohatra

```
i18n:
  fromTo:
    en:
```

Azonao atao ny manamboatra `fromTo` samihafa ho an'ny : samihafa /

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

Ato amin'ity tabilao fandrindrana ity, ny fiteny loharanon'ny fandikan-teny `blog` dia `zh` , ary ny fiteny loharanon'ny dikanteny katalaogy `blog/your_file_name.md` dia `ja` .

### Sary/Rohy Amin'ny Fiteny Maro

Rehefa ny URL ao amin'ny sary sy rohy ao amin'ny `replace:` sy `MarkDown` (ary ny toetra `src` sy `href` ao anatin'ny `HTML` ) dia amboarina amin'ny `.i18n/conf.yml` miaraka amin'ity tovana ity, ny fehezan-teny loharano ao amin'ny URL dia hosoloina ny fehezan-teny amin'ny dikanteny ( [fiteny lisitry ny code](/i18/LANG_CODE) ).

Ohatra:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` dia rakibolana, ny fanalahidy dia ny tovan'ny URL hosoloina, ary ny sandany dia ny fitsipika fanoloana.

Ny dikan'ny fanoloana ny fitsipika `ko de uk>ru zh-TW>zh >en` etsy ambony dia ny hoe `ko de` dia mampiasa ny sarin'ny kaody fiteniny manokana, `zh-TW` sy `zh` dia mampiasa ny sarin'ny `zh` , `uk` dia mampiasa ny sarin'ny `ru` , ary ny fiteny hafa (toy ny `ja` ) dia mampiasa ny sary. amin'ny `en` amin'ny alàlan'ny default.

Ohatra, ny rakitra loharanon'ny frantsay ( `fr` ) amin'ny `MarkDown` dia toy izao manaraka izao :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Toy izao ny rakitra voadika sy novokarina amin'ny teny anglisy ( `en` ) :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Eto, `/en/` ao amin'ny fehezan-teny loharano dia nosoloina `/zh/` amin'ny fiteny kendrena.

Fanamarihana : Tsy maintsy misy `/` mialoha sy aorian'ny fehezan-teny amin'ny lahatsoratra nosoloina ao amin'ny URL.

> [!TIP]
> Raha `- /` no amboarina amin'ny `url:` , dia lalana havanana ihany no hifanaraka, fa ny URL manomboka amin'ny `//` dia tsy hifanaraka.
>
> Raha te hosoloina ny rohin'ny anaran-tsehatra sasany ary tsy te hosoloina ny sasany dia azonao atao ny mampiasa prefix samihafa toy ny `[x](//x.com/en/)` sy `[x](https://x.com/en/)` hanavahana azy.

### Tsidiho Ny Rakitra

Amin'ny alàlan'ny default, ny rakitra rehetra manomboka amin'ny `.md` sy `.yml` ao amin'ny lahatahiry fiteny loharano dia hadika.

Raha te tsy hiraharaha ny rakitra sasany ianao ary tsy handika azy ireo (toy ny drafitra tsy vita), azonao atao ny manamboatra azy amin'ny saha `ignore` .

`ignore` dia mampiasa syntax [globset](https://docs.rs/globset/latest/globset/#syntax) amin'ny rakitra `.gitignore` .

Ohatra, ny `_* ` amin'ny rakitra fanamafisana etsy ambony dia midika fa tsy hadika ny rakitra manomboka amin'ny `_` .

## Fitsipika Fandikan-Teny

### Ny Mpandika Teny Dia Tsy Tokony Hanampy Na Hamafa Andalana

Azo ovaina ny dikanteny. Ovao ny lahatsoratra tany am-boalohany ary adikao amin'ny masinina indray, ny fanovana amin'ny tanana amin'ny dikanteny dia tsy hosoloina (raha toa ka tsy novana ity andalana ity amin'ny lahatsoratra tany am-boalohany).

> [!WARN]
> Tsy maintsy misy fifampiraharahana tsirairay eo amin'ny andalana amin'ny fandikan-teny sy ny lahatsoratra tany am-boalohany. Izany hoe, aza manampy na mamafa andalana rehefa manangona ny fandikan-teny. Raha tsy izany dia hiteraka fisavoritahana eo amin'ny cache fanovana dikanteny izany.

Raha misy tsy mety dia jereo [ny FAQ mba hahitana vahaolana.](/i18/qa#H1)

### `YAML` Dikanteny

Ny fitaovana andalana baiko dia hahita ny rakitra rehetra mifarana amin'ny `.yml` ao amin'ny lahatahiry rakitra amin'ny fiteny loharano ary handika azy ireo.

* Mariho fa ny tovana anaran-drakitra dia tsy maintsy `.yml` (fa tsy `.yaml` ).

Ny sandan'ny rakibolana amin'ny `.yml` ihany no mandika ny fitaovana fa tsy ny fanalahidin'ny rakibolana.

Ohatra `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

hadika ho `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Ny fandikana ny `YAML` dia azo ovaina amin'ny tanana ihany koa (fa aza manampy na mamafa fanalahidy na andalana amin'ny dikanteny).

Miorina amin'ny dikanteny `YAML` , afaka manangana vahaolana iraisam-pirenena mora foana ho an'ny fiteny fandaharana isan-karazany ianao.

## Fampiasana Mandroso

### Subdirectory Fandikan-Teny

Raha mbola noforonina `.i18n/conf.yml` (tsy mila manomboka amin'ny maodelin'ny tetikasa demo isaky ny mandeha), dia hiasa tsara `i18` .

Ny fitaovan'ny baikon'ny baiko dia hahita rindrankajy `.i18n/conf.yml` amin'ny subdirectories rehetra ary handika azy ireo.

Ireo tetikasa mampiasa ny [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Lahatahiry Fametrahana Manokana

Hapetraka amin'ny `/usr/local/bin` amin'ny alàlan'ny default.

Raha tsy manana alalana hanoratra `/usr/local/bin` dia hapetraka amin'ny `~/.bin` .

Ny fametrahana variable environment `TO` dia afaka mamaritra ny lahatahiry fametrahana, ohatra :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```