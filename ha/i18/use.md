# Shigar Da Amfani

## windows Fara Shigar git bash

windows , don Allah [danna nan don saukewa kuma shigar da `git bash` farko](https://git-scm.com/download/win) .

Gudanar da ayyuka masu zuwa a cikin `git bash` .

## Shigar

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Sanya Alamar Fassara

Ziyarci [i18n.site/token](//i18n.site/token) Danna don kwafi alamar

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Ƙirƙiri `~/.config/i18n.site.yml` , manna abin da aka kwafi a ciki, abun ciki shine kamar haka:

```
token: YOUR_API_TOKEN
```

Bugu da [i18n.site/payBill](//i18n.site/payBill) , kuna buƙatar ɗaure katin kuɗi don biyan kuɗi (ba a buƙatar caji, gidan yanar gizon zai cire kudade ta atomatik bisa ga amfani, [duba shafin gida don farashi](/#price) ).

## Amfani

### Demo Aikin

Da fatan za a koma zuwa aikin [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) don koyon tsarin fassarar `i18` .

Masu amfani a China na iya clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Bayan cloning, shigar da directory kuma gudanar da `i18` don kammala fassarar.

### Tsarin Shugabanci

Tsarin kundin adireshi na samfuri kamar haka

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Fayilolin demo da aka fassara a cikin kundin adireshin `en` misali ne kawai kuma ana iya share su.

### Gudun Fassarar

Shigar da littafin kuma gudanar da `i18` don fassarawa.

Baya ga fassarar, shirin zai kuma samar da babban fayil ɗin `.i18n/data` , da fatan za a ƙara shi zuwa ma'ajiyar.

Bayan fassarar sabon fayil ɗin `git add .` za a samar da sabon fayil ɗin bayanai a cikin wannan kundin adireshi.

## Fayil Na Tsari

`.i18n/conf.yml` shine fayil ɗin daidaitawa na kayan aikin fassarar layin umarni `i18`

Abinda ke ciki shine kamar haka:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### & Fassara

A cikin fayil ɗin daidaitawa, mai ƙarƙashin `fromTo` :

`en` shine yaren tushe, `zh ja ko de fr` shine harshen da ake nufi da fassarar.

Lambar [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE) .

Misali, idan kuna son fassara Sinanci zuwa Turanci, sake rubuta wannan layin `zh: en` .

Idan kuna son fassara zuwa duk harsunan da aka goyan baya, da fatan za a bar komai bayan `:` . misali

```
i18n:
  fromTo:
    en:
```

Kuna iya saita `fromTo` daban-daban : manyan fayiloli daban- / .

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

A cikin wannan teburin daidaitawa, tushen harshen fassarar katalogi `blog` shine `zh` , kuma tushen harshen fassarar katalogi `blog/your_file_name.md` shine `ja` .

### Yi Watsi Da Fayil

Ta hanyar tsohuwa, duk fayilolin da suka fara da `.md` da `.yml` a cikin kundin adireshin tushen tushen harshe za a fassara su.

Idan kuna son yin watsi da wasu fayiloli kuma ba ku fassara su ba (kamar daftarin da ba a gama ba), kuna iya amfani da daidaitawar filin `ignore` .

`ignore` yana amfani da tsari [globset](https://docs.rs/globset/latest/globset/#syntax) kamar fayil `.gitignore` .

Misali, `_* ` a cikin fayil ɗin sanyi na sama yana nufin cewa fayilolin da suka fara da `_` ba za a fassara su ba.

## Dokokin Fassara

### Editocin Fassarar Bai Kamata Su Ƙara Ko Share Layi Ba

Ana iya gyara fassarar. Gyara ainihin rubutun kuma na'ura-fassara shi kuma, ba za a sake rubuta gyare-gyaren jagora ga fassarar ba (idan wannan sakin layi na ainihin rubutun bai canza ba).

Amma da fatan za a lura cewa layin fassarar da na asali dole ne su dace da ɗaya zuwa ɗaya. Wato, kar a ƙara ko share layi yayin haɗa fassarar. In ba haka ba, zai haifar da rudani a cikin ma'ajin gyara fassarar fassarar.

Idan wani abu ba daidai ba, da fatan za a koma zuwa [FAQ don samun mafita.](/i18/qa#H1)

### `YAML` Fassarar

Kayan aikin layin umarni zai nemo duk fayilolin da ke ƙarewa tare da `.yml` a cikin tushen fayil ɗin fayil ɗin yare kuma a fassara su.

* Lura cewa suffix ɗin sunan fayil dole ne ya zama `.yml` (ba `.yaml` ba).

Kayan aikin yana fassara ƙimar ƙamus ne kawai a cikin `.yml` , ba maɓallan ƙamus ba.

Misali `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

za a fassara shi azaman `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Hakanan ana iya canza fassarar `YAML` da hannu (amma kar a ƙara ko share maɓalli ko layi a cikin fassarar).

Dangane da fassarar `YAML` , zaku iya gina hanyoyin warware matsalolin duniya cikin sauƙi don harsunan shirye-shirye daban-daban.

## Babban Amfani

### Fassara Subdirectory

Muddin an ƙirƙiri `.i18n/conf.yml` (babu buƙatar farawa daga samfurin aikin demo kowane lokaci), `i18` zai yi aiki lafiya.

Kayan aikin layin umarni zai nemo saitin `.i18n/conf.yml` a cikin duk kundin adireshi kuma ya fassara su.

Ayyukan da ke amfani da [monorepo](//monorepo.tools) -ginen na iya raba fayilolin harshe zuwa kundin adireshi.

![](https://p.3ti.site/1719910016.avif)

### Littafin Shigarwa Na Al'ada

Za a shigar da shi zuwa `/usr/local/bin` ta tsohuwa.

Idan `/usr/local/bin` ba shi da izinin rubutawa za a shigar da shi zuwa `~/.bin` .

Saita canjin yanayi `TO` na iya ayyana jagorar shigarwa, misali :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```