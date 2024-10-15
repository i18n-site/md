# Fa'apipi'i Ma Fa'aoga

## windows Muamua Faʻapipiʻi git bash

windows System, fa'amolemole [kiliki iinei e download ma fa'apipi'i `git bash` muamua](https://git-scm.com/download/win) .

Fa'atino gaioiga mulimuli ane ile `git bash` .

## Fa'apipi'i

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Fa'atonu Fa'aliliuga Fa'ailoga

Asiasi [i18n.site/token](//i18n.site/token) Kiliki e kopi fa'ailoga

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Fausia `~/.config/i18n.site.yml` , faʻapipiʻi le kopi kopi i totonu, o mea o loʻo i lalo:

```
token: YOUR_API_TOKEN
```

E le [i18n.site/payBill](//i18n.site/payBill) , e tatau ona e fusifusia se kata fai aitalafu mo le totogiina (e leai se totogi e manaʻomia, o le a otometi lava ona toesea e le upega tafaʻilagi totogifuapauina e tusa ai ma le faʻaaogaina, [vaʻai le itulau autu mo le tau](/#price) ).

## Fa'aoga

### Poloketi Fa'aali

Fa'amolemole va'ai ile poloketi `i18` [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

E mafai e tagata faʻaoga i Saina ona faʻapipiʻi [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

A maeʻa le faʻapipiʻiina, ulufale i le lisi ma tamoe `i18` e faʻamaeʻa ai le faaliliuga.

### Fa'atonuga

O le fa'asologa o fa'atonuga faleteuoloa e fa'apea

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

O faila fa'aliliuga fa'aliga i le `en` directory ua na'o se fa'ata'ita'iga ma e mafai ona tape.

### Fa'agasolo Fa'aliliuga

Ulufale i le lisi ma fa'agasolo `i18` e fa'aliliu.

I le faʻaopoopoga i le faʻaliliuga, o le polokalama o le a faʻatupuina foi le `.i18n/data` faila, faʻamolemole faʻaopoopo i le fale teu oloa.

A uma ona fa'aliliuina le faila fou, o le a fa'atupuina `git add . ` faila fa'amaumauga fou i totonu o lenei fa'atonuga.

## Faiga Faila

`.i18n/conf.yml` o le faila fetuutuunai o le meafaigaluega faaliliu laina `i18` poloaiga

O le anotusi e faapea:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Gagana Fa'aliliuga &

I le faila faila, o le pito i lalo o le `fromTo` :

`en` ole gagana fa'apogai, `zh ja ko de fr` ole gagana fa'asino ole fa'aliliuga.

Fa'ailoga gagana va'ai [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Mo se faʻataʻitaʻiga, afai e te manaʻo e faʻaliliu le Saina i le Igilisi, toe tusi le laina lenei `zh: en` .

Afai e te mana'o e fa'aliliu i gagana uma e lagolagoina, fa'amolemole tu'u avanoa pe a uma `:` . faataitaiga

```
i18n:
  fromTo:
    en:
```

E mafai ona e fetuutuuna'i `fromTo` eseese : subdirectories eseese /

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

I lenei laulau fa'aopoopo, o le gagana fa'apogai o le fa'aliliuga `blog` o le `zh` , ma le gagana fa'apogai o le fa'aliliuga `blog/your_file_name.md` o le `ja` .

### Le Amanaia Faila

Ona o le faaletonu, o faila uma e amata i `.md` ma `.yml` i le lisi o gagana fa'apogai o le a fa'aliliuina.

Afai e te manaʻo e le amanaʻia nisi faila ae le faʻaliliuina (pei o faʻataʻitaʻiga e leʻi maeʻa), e mafai ona e faʻaogaina le `ignore` field configuration.

`ignore` fa'aoga `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Mo se faʻataʻitaʻiga, `_* ` i le faila faʻatulagaina o loʻo i luga o lona uiga o faila e amata i le `_` o le a le faʻaliliuina.

## Tulafono Faaliliu

### E Le Tatau I Faatonu Faaliliu Ona Faaopoopo Pe Tape Laina

O le faaliliuga e mafai ona faasa'oina. Suia le ulua'i tusitusiga ma toe fa'aliliu i le masini, o le a le toe fa'aliliuina le fa'aliliuga a le tusi lesona (pe afai e le'i suia lenei parakalafa o le ulua'i tusitusiga).

Ae faamolemole ia matau o laina o le faaliliuga ma le uluai tusitusiga e tatau ona tutusa le tasi i le tasi. O lona uiga, aua le fa'aopoopo pe tape laina pe a tu'ufa'atasia le fa'aliliuga. A leai, o le a mafua ai le fenumiai i le fa'aliliuga fa'atonutonu cache.

Afai ei ai se mea ua faaletonu, faamolemole tagai ile [FAQ mo fofo.](/i18/qa#H1)

### `YAML` Fa'aliliuga

O le meafaigaluega laina laina o le a su'e faila uma e fa'ai'u i le `.yml` i le fa'atonuga o faila gagana ma fa'aliliu.

* Manatua o le suffix igoa faila e tatau ona `.yml` (e le `.yaml` ).

O le meafaigaluega e na'o le fa'aliliuina o le lomifefiloi fa'atatau i `.yml` , ae le o le lomifefiloi ki.

Mo se faʻataʻitaʻiga `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

o le a faaliliuina i le `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

O le faaliliuga o `YAML` e mafai foi ona suia ma le lima (ae aua le faaopoopo pe tape ki po o laina i le faaliliuga).

Faʻavae i luga o `YAML` faʻaliliuga, e faigofie ona e fausia ni fofo faʻavaomalo mo gagana eseese polokalame.

## Fa'aoga Maualuga

### Fa'aliliuga Subdirectory

O le umi lava e faia ai `.i18n/conf.yml` (leai se mana'omia e amata mai le fa'ata'ita'iga fa'ata'ita'iga i taimi uma), `i18` o le a lelei.

Ole meafaigaluega ole laina ole a maua `.i18n/conf.yml` fa'atonuga ile subdirectories uma ma fa'aliliu.

O poloketi e fa'aogaina le [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Fa'atonuga Fa'apipi'i

O le a faʻapipiʻi i le `/usr/local/bin` e ala i le faaletonu.

Afai e leai se faatagaga tusitusi `/usr/local/bin` o le a faʻapipiʻi i `~/.bin` .

Fa'atulagaina le fesuiaiga o le siosiomaga `TO` e mafai ona faʻamalamalamaina le faʻatonuga faʻapipiʻi, mo se faʻataʻitaʻiga :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```