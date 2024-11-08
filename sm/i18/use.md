# Fa'apipi'i Ma Fa'aoga

## Faʻapipiʻi Muamua E windows git bash

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

E le gata i lea, e te manaʻomia le faʻapipiʻiina o se aitalafu aitalafu totogi i totonu [i18n.site/payBill](//i18n.site/payBill) E leai se totogi e manaʻomia, o le upega tafaʻilagi o le a otometi ona toesea totogifuapauina e tusa ai ma le faʻaaogaina, [vaʻai i le itulau autu mo le tau](/#price) ).

## Fa'aoga

### Poloketi Fa'aali

Fa'amolemole va'ai ile poloketi `i18` [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

E mafai e tagata faʻaoga i Saina ona faʻapipiʻi [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

A maeʻa le faʻapipiʻiina, ulufale i le lisi ma tamoe `i18` e faʻamaeʻa ai le faaliliuga.

### Fa'atonuga

O le fa'asologa o fa'atonuga o faleteuoloa e fa'apea

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

### Gagana Fa'apogai &

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

### Ata/Sootaga E Tele Gagana

A faʻapipiʻi URL i ata ma fesoʻotaʻiga i `replace:` ma `MarkDown` (ma le `src` ma `href` uiga o le faʻapipiʻiina `HTML` ) ua faʻapipiʻiina i `.i18n/conf.yml` faʻatasi ai ma lenei prefix, o le a suia le code language source i le URL i le gagana code o le faaliliuga ( [gagana. lisi tulafono](/i18/LANG_CODE) ).

Mo se faʻataʻitaʻiga, o lau faʻatulagaga e faʻapea:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` o se lomifefiloi, o le ki o le URL prefix e sui, ma o le tau o le sui tulafono.

O le uiga o le suia o le tulafono `ko de uk>ru zh-TW>zh >en` o loʻo i luga o `ko de` e faʻaaoga le ata o la latou lava gagana code, `zh-TW` ma `zh` faʻaaoga le ata o `zh` , `uk` faʻaaoga le ata o `ru` , ma isi gagana (e pei o `ja` ) faʻaoga le ata o `en` i le faaletonu.

Mo se faʻataʻitaʻiga, o le Falani ( `fr` ) faila faila o le `MarkDown` e faʻapea :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

O le fa'aliliuga ma fa'atupuina le fa'aPeretania ( `en` ) faila e fa'apea :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Iinei, `/en/` i le gagana fa'apogai ua suia i `/zh/` i le gagana fa'atatau.

Fa'aaliga : E tatau ona i ai `/` a'o le'i mae'a ma le fa'ailoga o le gagana o lo'o suia i le URL.

> [!TIP]
> Afai o `- /` e fa'atulaga i `url:` , na'o ala fa'atatau e fetaui, ae o URL e amata i `//` e le fetaui.
>
> Afai e mana'o nisi so'otaga ole igoa ole igoa e sui ae o nisi e le mana'o e sui, e mafai ona e fa'aogaina fa'ailoga eseese e pei ole `[x](//x.com/en/)` ma `[x](https://x.com/en/)` e iloa ai.

### Le Amanaia Faila

Ona o le faaletonu, o faila uma e amata i `.md` ma `.yml` i le lisi o gagana fa'apogai o le a fa'aliliuina.

Afai e te manaʻo e le amanaʻia nisi faila ae le faʻaliliuina (pei o ata e leʻi maeʻa), e mafai ona e faʻatulagaina i le `ignore` fanua.

`ignore` fa'aoga `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Mo se faʻataʻitaʻiga, `_* ` i le faila faʻatulagaina o loʻo i luga o lona uiga o faila e amata i le `_` o le a le faʻaliliuina.

## Tulafono Faaliliu

### E Le Tatau I Faatonu Faaliliu Ona Faaopoopo Pe Tape Laina

O le faaliliuga e mafai ona faasa'oina. Suia le ulua'i tusitusiga ma toe fa'aliliu i masini, o le a le toe fa'aliliuina le fa'aliliuga tusi lesona (pe a le suia lenei parakalafa o le ulua'i tusitusiga).

> [!WARN]
> E tatau ona i ai se fetusiaiga tasi i le tasi i le va o laina o le faaliliuga ma le uluai tusitusiga. O lona uiga, aua le fa'aopoopo pe tape laina pe a tu'ufa'atasia le fa'aliliuga. A leai, o le a mafua ai le fenumiai i le fa'aliliuga fa'atonutonu cache.

Afai ei ai se mea ua faaletonu, faamolemole tagai ile [FAQ mo fofo.](/i18/qa#H1)

### `YAML` Fa'aliliuga

Ole meafaigaluega ole laina ole tulafono ole a su'e uma faila e fa'ai'u ile `.yml` ile fa'atonuga o faila gagana ma fa'aliliu.

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

O le meafaigaluega laina laina o le a maua `.i18n/conf.yml` configurations i subdirectories uma ma faaliliu i latou.

O poloketi e fa'aogaina le [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Fa'atonuga Fa'apipi'i

O le a faʻapipiʻi i le `/usr/local/bin` e ala i le faaletonu.

Afai e leai se faatagaga tusitusi `/usr/local/bin` o le a faʻapipiʻi i `~/.bin` .

Faʻatulagaina le fesuiaiga o le siosiomaga `TO` e mafai ona faʻamalamalamaina le lisi faʻapipiʻi, mo se faʻataʻitaʻiga :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```