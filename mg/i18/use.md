# Mametraka Sy Mampiasa

## windows Mametraka Voalohany git bash

windows , azafady [tsindrio eto raha hisintona sy hametraka aloha `git bash`](https://git-scm.com/download/win)

Manaova hetsika manaraka ao `git bash`

## Hametraka

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Ampifanaraho Ny Token'ny Fandikan-Teny

Tsidiho [i18n.site/token](//i18n.site/token) Click to copy token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Mamorona `~/.config/i18n.site.yml` apetaho ao anatiny ny atiny nadika, ny atiny dia toy izao:

```
token: YOUR_API_TOKEN
```

Ho fanampin'izany, mila [i18n.site/payBill](//i18n.site/payBill) carte de crédit ianao mba handoavana (tsy misy famerenam-bola ilaina, ny tranokala dia hanaisotra ho azy ny sarany araka ny fampiasana azy, [jereo ny pejy fandraisana ny vidiny](/#price) ).

## Ampiasao

### Tetikasa Demo

Azafady, jereo ny tetik'asa demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) hianarana ny fandrindrana ny fandikana `i18`

Afaka manao clone ny mpampiasa any Shina [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Aorian'ny fanaovana klono dia midira ny lahatahiry ary mihazakazaka `i18`

### Rafitra Lahatahiry

Ny firafitry ny lahatahiry trano fanatobiana modely dia toy izao manaraka izao

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Ny lahatahiry `en`

### Mandehana Fandikan-Teny

Ampidiro ny lahatahiry ary mihazakazaka `i18`

### Ampio Ny Rakitra Amin'ny Tahiry

Ho fanampin'ny fandikana, hamokatra ireto rakitra manaraka ireto ihany koa ny programa, azafady ampio ao amin'ny tahiry.

```
.i18n/hash
.i18n/cache/.gitignore
```

Anisan'izany : votoatin'ny `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Midika izany fa tsy miraharaha ny rakitra rehetra ao `.i18n/cache/` lahatahiry (afa-tsy `.i18n/cache/.gitignore` ).

Raha toa ka tsy ny rindrambaiko fanaraha-maso ny dikan-nao `git`

## Fikirakirana

`.i18n/conf.yml` `i18`

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

Ao amin'ny fichier configuration, ny mpiasan'ny `fromTo`

`en` no fiteny loharano, `zh ja ko de fr` no fiteny kendrena amin'ny fandikan-teny.

Kaody fiteny jereo [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Ohatra, raha te handika teny sinoa amin'ny teny anglisy ianao dia soraty indray ity andalana ity `zh: en`

Raha te handika amin'ny fiteny tohanana rehetra ianao dia avelao ho banga aorian'ny `:` ohatra

```
i18n:
  fromTo:
    en:
```

### Tsidiho Ny Rakitra

Amin'ny alàlan'ny default, ny rakitra rehetra manomboka amin'ny `.md` sy `.yml` ao amin'ny lahatahiry fiteny loharano dia hadika.

Raha te tsy hiraharaha ny rakitra sasany ianao ary tsy handika azy ireo (toy ny drafitra tsy vita), azonao atao ny mampiasa ny `ignore`

`ignore` syntax mitovy amin'ny `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Ohatra, ao amin'ny rakitra fanamafisana etsy ambony `_* ` midika fa tsy hadika ny rakitra manomboka amin'ny `_` .

## Fitsipika Fandikan-Teny

### Ny Mpandika Teny Dia Tsy Tokony Hanampy Na Hamafa Andalana

Azo ovaina ny dikanteny. Ovay ny lahatsoratra tany am-boalohany ary adikao amin'ny milina indray izany, ny fanovana amin'ny tanana amin'ny dikanteny dia tsy hosoloina (raha toa ka tsy novana ity andalana ity amin'ny lahatsoratra tany am-boalohany).

Mariho anefa fa ny andalana amin'ny fandikan-teny sy ny lahatsoratra tany am-boalohany dia tsy maintsy mifanitsy amin'ny iray. Izany hoe, aza manampy na mamafa andalana rehefa manangona ny fandikan-teny. Raha tsy izany dia hiteraka fisavoritahana eo amin'ny cache fanovana fandikan-teny izany.

Raha misy tsy mety dia jereo [ny FAQ mba hahitana vahaolana.](/i18/qa#H1)

### `Yaml`

Ny fitaovana andalana baiko dia hahita ny rakitra rehetra mifarana amin'ny `.yml` ao amin'ny lahatahiry rakitra amin'ny fiteny loharano ary handika azy ireo.

* Mariho fa ny tovana anaran-drakitra dia tsy maintsy `.yml` (fa tsy `.yaml` ).

Ny fitaovana ihany no mandika ny soatoavin'ny rakibolana amin'ny `.yml` fa tsy ny fanalahidin'ny rakibolana.

ohatra `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

hadika hoe `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Azo ovaina amin'ny tanana ihany koa ny fandikana ny `YAML`

Miorina amin'ny `YAML` Translation, afaka manangana vahaolana iraisam-pirenena ho an'ny fiteny fandaharana isan-karazany ianao.

## Fampiasana Mandroso

### Subdirectory Fandikan-Teny

Raha mbola mamorona `.i18n/conf.yml` (tsy mila manomboka amin'ny maodelin'ny tetikasa demo isaky ny mandeha), `i18` dia hiasa tsara.

Ny fitaovana andalana baiko dia hahita ny `.i18n/conf.yml`

Ireo tetikasa mampiasa ny [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Lahatahiry Fametrahana Manokana

Hapetraka amin'ny `/usr/local/bin`

`/usr/local/bin` tsy manana alalana hanoratra dia hapetraka amin'ny `~/.bin` .

Mametraha fari-piainana manodidina `TO` Azonao atao ny mamaritra ny lahatahiry fametrahana, ohatra :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
