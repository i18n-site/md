# Mametraka Sy Mampiasa

## windows Voalohany Mametraka git bash

windows , azafady [tsindrio eto raha te-hisintona sy hametraka `git bash`](https://git-scm.com/download/win) aloha.

Manaova hetsika manaraka amin'ny `git bash` .

## Hametraka

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Ampifanaraho Amin'ny Dikan-Teny Famantarana

Tsidiho [i18n.site/token](//i18n.site/token) Click to copy token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Mamorona `~/.config/i18n.site.yml` , apetaho ao anatiny ny atiny nadika, ny atiny dia toy izao manaraka izao:

```
token: YOUR_API_TOKEN
```

Ho fanampin'izany, mila [i18n.site/payBill](//i18n.site/payBill) carte de crédit ianao mba handoavana (tsy misy famerenam-bola ilaina, ny tranokala dia hanaisotra ho azy ny sarany araka ny fampiasana azy, [jereo ny pejy fandraisana ny vidiny](/#price) ).

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

### Ampio Ny Rakitra Amin'ny Tahiry

Ho fanampin'ny fandikana, hamokatra ireto rakitra manaraka ireto ihany koa ny programa, azafady ampio ao amin'ny tahiry.

```
.i18n/hash
.i18n/cache/.gitignore
```

Anisan'izany ny votoatin'ny `.i18n/cache/.gitignore` dia toy izao manaraka izao :

```
**/*
!**/.gitignore
```

Midika izany fa tsy raharahaina ny rakitra rehetra ao amin'ny lahatahiry `.i18n/cache/` (afa-tsy `.i18n/cache/.gitignore` ).

Raha tsy `git` ny logiciel fanaraha-maso ny dikan-nao dia aza tsinontsinoavina araka ity tefy ity.

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

Azonao atao ny manamboatra `fromTo` samihafa ho an'ny fisie : /

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

Ato amin'ity tabilao fandrindrana ity, ny fiteny loharanon'ny fandikan-teny `blog` dia `zh` , ary ny fiteny loharanon'ny dikanteny `blog/your_file_name.md` dia `ja` .

### Tsidiho Ny Rakitra

Amin'ny alàlan'ny default, ny rakitra rehetra manomboka amin'ny `.md` sy `.yml` ao amin'ny lahatahiry fiteny loharano dia hadika.

Raha te tsy hiraharaha ny rakitra sasany ianao ary tsy handika azy ireo (toy ny drafitra tsy vita), azonao atao ny manamboatra azy amin'ny saha `ignore` .

`ignore` dia mampiasa syntax [globset](https://docs.rs/globset/latest/globset/#syntax) amin'ny rakitra `.gitignore` .

Ohatra, `_* ` amin'ny rakitra fanamafisana etsy ambony dia midika fa tsy hadika ny rakitra manomboka amin'ny `_` .

## Fitsipika Fandikan-Teny

### Ny Mpandika Teny Dia Tsy Tokony Hanampy Na Hamafa Andalana

Azo ovaina ny dikanteny. Ovay ny lahatsoratra tany am-boalohany ary adikao amin'ny milina indray izany, ny fanovana amin'ny tanana amin'ny dikanteny dia tsy hosoloina (raha toa ka tsy novana ity andalana ity amin'ny lahatsoratra tany am-boalohany).

Mariho anefa fa ny andalana amin'ny fandikan-teny sy ny lahatsoratra tany am-boalohany dia tsy maintsy mifanitsy amin'ny iray. Izany hoe, aza manampy na mamafa andalana rehefa manangona ny fandikan-teny. Raha tsy izany dia hiteraka fisavoritahana eo amin'ny cache fanovana fandikan-teny izany.

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