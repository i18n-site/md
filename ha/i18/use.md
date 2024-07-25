# Shigar Da Amfani

## windows Fara Shigar git bash

windows , don Allah [danna nan don saukewa kuma shigar da `git bash`](https://git-scm.com/download/win) .

Gudanar da ayyuka na gaba a cikin `git bash`

## Shigar

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Sanya Alamar Fassara

Ziyarci [i18n.site/token](//i18n.site/token) Danna don kwafi alamar

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Ƙirƙiri `~/.config/i18n.site.yml` manna abin da aka kwafi a ciki, abun ciki shine kamar haka:

```
token: YOUR_API_TOKEN
```

Bugu da ƙari, kuna buƙatar [i18n.site/payBill](//i18n.site/payBill) katin kuɗi don biyan kuɗi (ba a buƙatar caji, gidan yanar gizon zai cire kudade ta atomatik bisa ga amfani, [duba shafin gida don farashi](/#price) ).

## Amfani

### Demo Aikin

Da fatan `i18` a koma zuwa aikin demo don koyon tsarin fassarar [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Masu amfani a China na iya clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Bayan cloning, shigar da directory kuma `i18` don kammala fassarar.

### Tsarin Jagora

Tsarin kundin adireshi na samfuri kamar haka

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Littafin `en`

### Gudun Fassarar

Shigar da littafin kuma gudanar da fassara `i18`

### Ƙara Fayiloli Zuwa Ma'ajiyar

Baya ga fassarar, shirin zai kuma samar da fayiloli masu zuwa, da fatan za a ƙara su cikin ma'ajiyar.

```
.i18n/hash
.i18n/cache/.gitignore
```

Daga cikin su : abun ciki na `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Wannan yana nufin yin watsi da duk fayiloli a cikin `.i18n/cache/` adireshin (banda `.i18n/cache/.gitignore` ).

Idan software mai sarrafa sigar ku ba `git` da fatan za a yi watsi da ita bisa ga wannan tsarin.

## Fayil Na Tsari

Fayil ɗin daidaitawa `.i18n/conf.yml` na kayan aikin fassarar layin `i18`

Abinda ke ciki shine kamar haka:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Harshen &

A cikin fayil ɗin daidaitawa, waɗanda ke ƙarƙashin `fromTo`

`en` shine yaren tushe, `zh ja ko de fr` shine harshen da ake nufi da fassarar.

Lambar yare [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Misali, idan kuna son fassara Sinanci zuwa Turanci, sake rubuta wannan layin `zh: en`

Idan kuna son fassara zuwa duk harsunan da aka goyan baya, da fatan za a bar komai bayan `:` misali

```
i18n:
  fromTo:
    en:
```

### Yi Watsi Da Fayil

Ta hanyar tsoho, za a fassara duk fayilolin `.yml` suka fara da `.md`

Idan kuna son yin watsi da wasu fayiloli kuma ba ku fassara su ba (kamar daftarin da ba a gama ba), kuna iya amfani da tsarin filin `ignore`

`ignore` amfani da tsarin aiki mai kama [globset](https://docs.rs/globset/latest/globset/#syntax) `.gitignore`

Misali, a cikin fayil ɗin sanyi na sama `_* ` nufin cewa fayilolin da suka fara da `_` ba za a fassara su ba.

## Dokokin Fassara

### Editocin Fassarar Bai Kamata Su Ƙara Ko Share Layi Ba

Ana iya gyara fassarar. Gyara ainihin rubutun kuma na'ura-fassara shi kuma, ba za a sake rubuta gyare-gyaren jagora ga fassarar ba (idan wannan sakin layi na ainihin rubutun bai canza ba).

Amma da fatan za a lura cewa layin fassarar da na asali dole ne su dace da ɗaya zuwa ɗaya. Wato, kar a ƙara ko share layi yayin haɗa fassarar. In ba haka ba, zai haifar da rudani a cikin ma'ajin gyara fassarar fassarar.

Idan wani abu ba daidai ba, da fatan za a koma zuwa [FAQ don samun mafita.](/i18/qa#H1)

### `Yaml`

Kayan aikin layin umarni zai nemo duk fayilolin da ke ƙarewa tare da `.yml` a cikin kundin adireshin fayil ɗin yare kuma ya fassara su.

* Lura cewa suffix din fayil dole `.yaml` ya zama `.yml`

Kayan aikin yana fassara ƙimar ƙamus a cikin `.yml` , ba maɓallan ƙamus ba.

misali `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

za a fassara kamar `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Hakanan za'a iya canza fassarar `YAML` da hannu (amma kar a ƙara ko share maɓalli ko layi a cikin fassarar).

Dangane da `YAML` , zaku iya gina hanyoyin magance harsunan shirye-shirye daban-daban cikin sauƙi.

## Babban Amfani

### Fassara Subdirectory

Muddin kun `.i18n/conf.yml` (babu buƙatar farawa daga samfurin aikin demo kowane lokaci), `i18` zai yi aiki lafiya.

Kayan aikin layin umarni zai nemo saitin `.i18n/conf.yml`

Ayyukan da ke amfani da gine [monorepo](//monorepo.tools) ginen na iya raba fayilolin harshe zuwa kundin adireshi.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Littafin Shigarwa Na Al'ada

Za a shigar da shi zuwa `/usr/local/bin`

`/usr/local/bin` bashi da izinin rubutu za'a shigar dashi zuwa `~/.bin` .

Saita masu canjin yanayi `TO` iya ayyana jagorar shigarwa, misali :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
