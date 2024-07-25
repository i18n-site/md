# Fa'apipi'i Ma Fa'aoga

## Faʻapipiʻi Muamua E windows git bash

windows System, fa'amolemole [kiliki iinei e download ma fa'apipi'i muamua `git bash`](https://git-scm.com/download/win)

Fa'atino gaioiga mulimuli ane i totonu `git bash`

## Fa'apipi'i

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Fa'atonu Fa'aliliuga Fa'ailoga

Asiasi [i18n.site/token](//i18n.site/token) Kiliki e kopi fa'ailoga

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Fausia `~/.config/i18n.site.yml` faʻapipiʻi le kopi kopi i totonu, o mea o loʻo i lalo:

```
token: YOUR_API_TOKEN
```

E le gata i lea, e tatau [i18n.site/payBill](//i18n.site/payBill) e fusifusia se kata fai aitalafu mo le totogiina (e leai se totogi e manaʻomia, o le upega tafaʻilagi o le a otometi lava ona toesea totogifuapauina e tusa ai ma le faʻaaogaina, [vaʻai i le itulau autu mo le tau](/#price) ).

## Fa'aoga

### Poloketi Fa'aali

Fa'amolemole fa'asino ile poloketi [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) e a'oa'o ai le fa'aliliuga `i18`

E mafai e tagata faʻaoga i Saina ona faʻapipiʻi [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

A mae'a fa'a-cloning, ulufale i le fa'atonu ma tamo'e `i18`

### Fa'atonuga Fa'atonu

O le fa'asologa o fa'atonuga faleteuoloa e fa'apea

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

O le `en`

### Fa'agasolo Fa'aliliuga

Ulufale i le lisi ma tamo'e `i18`

### Faaopoopo Faila I Le Fale Teu Oloa

I le faaopoopo atu i le faaliliuga, o le polokalama o le a gaosia foi faila nei, faamolemole faaopoopo i latou i le fale teu oloa.

```
.i18n/hash
.i18n/cache/.gitignore
```

I totonu oi latou, o le anotusi : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

O lona uiga e le amana'ia faila uma i totonu o le `.i18n/cache/` (sei vagana ai `.i18n/cache/.gitignore` ).

Afai e le o iai lau polokalama fa'atonutonuina `git` fa'amolemole le amana'ia e tusa ai ma lenei fa'atulagaga.

## Faiga Faila

`.i18n/conf.yml` O le faila fetuutuuna'i o le mea faigaluega fa'aliliu laina `i18`

O le anotusi e faapea:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Gagana Fa'apogai &

I totonu o le faila faʻapipiʻi, o loʻo i lalo o le `fromTo`

`en` o le gagana fa'apogai, `zh ja ko de fr` o le gagana fa'aliliuga.

Fa'ailoga gagana va'ai [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Mo se faʻataʻitaʻiga, afai e te manaʻo e faʻaliliu le Saina i le Igilisi, toe tusi le laina lea `zh: en`

Afai e te mana'o e fa'aliliu i gagana uma e lagolagoina, fa'amolemole tu'u avanoa pe a uma `:` faataitaiga

```
i18n:
  fromTo:
    en:
```

### Le Amanaia Faila

E le mafai, o faila uma e amata i le `.md` ma `.yml` i le fa'atonuga o le gagana fa'apogai o le a fa'aliliuina.

Afai e te manaʻo e le amanaʻia nisi o faila ae le faʻaliliuina (pei o ata e leʻi maeʻa), e mafai ona e faʻaogaina le `ignore`

`ignore` Fa'aaoga se fa'asologa e tutusa ma `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Mo se faʻataʻitaʻiga, i le faila faʻatulagaina `_` loʻo i luga `_* `

## Tulafono Faaliliu

### E Le Tatau I Faatonu Faaliliu Ona Faaopoopo Pe Tape Laina

O le faaliliuga e mafai ona faasa'oina. Suia le ulua'i tusitusiga ma toe fa'aliliu i le masini, o le a le toe fa'aliliuina le fa'aliliuga a le tusi lesona (pe afai e le'i suia lenei parakalafa o le ulua'i tusitusiga).

Ae faamolemole ia matau o laina o le faaliliuga ma le uluai tusitusiga e tatau ona tutusa le tasi i le tasi. O lona uiga, aua le fa'aopoopo pe tape laina pe a tu'ufa'atasia le fa'aliliuga. A leai, o le a mafua ai le fenumiai i le fa'aliliuga fa'atonutonu cache.

Afai ei ai se mea ua faaletonu, faamolemole tagai [ile FAQ mo fofo.](/i18/qa#H1)

### `YAML` Faaliliu

O le mea faigaluega laina fa'atonu o le a maua uma faila e fa'ai'u i le `.yml`

* Manatua o le suffix igoa faila e tatau ona `.yml` (e le `.yaml` ).

E na'o le fa'aliliuga o lo'o fa'aliliu le lomifefiloi i totonu `.yml`

faataitaiga `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

o le a faaliliu e `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

O le faaliliuga o le `YAML` e mafai foi ona suia ma le lima (ae aua le faaopoopo pe tapeina ki po o laina i le faaliliuga).

Fa'avae i luga `YAML` Fa'aliliuga, e faigofie ona e fausia ni fofo fa'ava-o-malo mo gagana polokalame eseese.

## Fa'aoga Maualuga

### Fa'aliliuga Subdirectory

Afai lava e te fatuina `.i18n/conf.yml` (e le mana'omia le amata mai le fa'ata'ita'iga fa'ata'ita'iga i taimi uma), `i18` o le a lelei.

Ole mea faigaluega laina ole a su'e le `.i18n/conf.yml`

O poloketi e fa'aogaina le [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Fa'atonuga Fa'apipi'i

Ole a fa'apipi'i ile `/usr/local/bin`

`/usr/local/bin` e leai se fa'atagaga tusitusi o le a fa'apipi'i ile `~/.bin` .

Seti suiga : le siosiomaga `TO`

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
