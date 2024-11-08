# Installa U Uża

## windows L-Ewwel Tinstalla git bash

windows , jekk jogħġbok [ikklikkja hawn biex tniżżel u tinstalla `git bash` l-ewwel](https://git-scm.com/download/win) .

Mexxi operazzjonijiet sussegwenti `git bash` .

## Installa

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Ikkonfigura T-Token Tat-Traduzzjoni

Żur [i18n.site/token](//i18n.site/token) Ikklikkja biex tikkopja token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Oħloq `~/.config/i18n.site.yml` , waħħal il-kontenut ikkupjat fih, il-kontenut huwa kif ġej:

```
token: YOUR_API_TOKEN
```

Barra minn hekk [,](/#price) għandek bżonn torbot karta ta 'kreditu ta' ħlas f' [i18n.site/payBill](//i18n.site/payBill)

## Użu

### Proġett Demo

Jekk jogħġbok irreferi għall-proġett [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) biex titgħallem il-konfigurazzjoni ta ' `i18` traduzzjoni.

Utenti fiċ-Ċina jistgħu jikklonu [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Wara l-klonazzjoni, daħħal id-direttorju u mexxi `i18` biex tlesti t-traduzzjoni.

### Struttura Tad-Direttorju

L-istruttura tad-direttorju tal-maħżen tal-mudell hija kif ġej

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Il-fajls demo tradotti fid-direttorju `en` huma biss eżempju u jistgħu jitħassru.

### Mexxi Traduzzjoni

Daħħal id-direttorju u mexxi `i18` biex tittraduċi.

Minbarra t-traduzzjoni, il-programm se jiġġenera wkoll il-folder `.i18n/data` , jekk jogħġbok żidha mar-repożitorju.

Wara li tittraduċi l-fajl il-ġdid, se jiġi ġġenerat fajl tad-dejta ġdid f'dan id-direttorju Ftakar li tehmeż `git add . ` .

## Fajl Ta' Konfigurazzjoni

`.i18n/conf.yml` huwa l-fajl tal-konfigurazzjoni tal-għodda tat-traduzzjoni tal-linja tal-kmand `i18`

Il-kontenut huwa kif ġej:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Lingwa Tas-Sors &

Fil-fajl tal-konfigurazzjoni, is-subordinat ta' `fromTo` :

`en` hija l-lingwa tas-sors, `zh ja ko de fr` hija l-lingwa fil-mira tat-traduzzjoni.

Kodiċi tal-lingwa ara [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Pereżempju, jekk trid tittraduċi ċ-Ċiniż għall-Ingliż, erġa' ikteb din il-linja `zh: en` .

Jekk trid tittraduċi għal-lingwi kollha appoġġjati, jekk jogħġbok ħalli vojt wara `:` . per eżempju

```
i18n:
  fromTo:
    en:
```

Tista' tikkonfigura `fromTo` differenti għal sottodirettorji differenti / Dimostrazzjoni hija miktuba kif ġej :

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

F'din it-tabella tal-konfigurazzjoni, il-lingwa tas-sors tat-traduzzjoni tal-katalgu `blog` hija `zh` , u l-lingwa tas-sors tat-traduzzjoni tal-katalgu `blog/your_file_name.md` hija `ja` .

### Immaġini/Links Multilingwi

Meta l-URLs fl-istampi u l-links `replace:` u `MarkDown` (u l-attributi `src` u `href` ta 'inkorporat `HTML` ) huma kkonfigurati `.i18n/conf.yml` b'dan il-prefiss, il-kodiċi tal-lingwa sors fil-URL se jiġi sostitwit bil-kodiċi tal-lingwa tat-traduzzjoni ( [lingwa lista tal-kodiċi](/i18/LANG_CODE) ).

Pereżempju, il-konfigurazzjoni tiegħek hija kif ġej:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` huwa dizzjunarju, iċ-ċavetta hija l-prefiss tal-URL li għandu jiġi sostitwit, u l-valur huwa r-regola ta 'sostituzzjoni.

It-tifsira tas-sostituzzjoni tar-regola `ko de uk>ru zh-TW>zh >en` hawn fuq hija li `ko de` juża l-istampa tal-kodiċi tal-lingwa tagħhom stess, `zh-TW` u `zh` jużaw l-istampa ta ' `zh` , `uk` juża l-istampa ta' `ru` , u lingwi oħra (bħal `ja` ) jużaw l-istampa ta' `en` b'mod awtomatiku.

Pereżempju, il-fajl tas-sors Franċiż ( `fr` ) ta ' `MarkDown` huwa kif ġej :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Il-fajl tradott u ġġenerat bl-Ingliż ( `en` ) huwa kif ġej :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Hawnhekk, `/en/` fil-kodiċi tal-lingwa tas-sors huma sostitwiti `/zh/` fil-lingwa fil-mira.

Nota : Għandu jkun hemm `/` qabel u wara l-kodiċi tal-lingwa tat-test sostitwit fl-URL.

> [!TIP]
> Jekk `- /` huwa kkonfigurat `url:` , mogħdijiet relattivi biss jitqabblu, iżda URLs li jibdew `//` mhux se jiġu mqabbla.
>
> Jekk xi links ta' isem ta' dominju jridu jiġu sostitwiti u xi wħud ma jridux jiġu sostitwiti, tista' tuża prefissi differenti bħal `[x](//x.com/en/)` u `[x](https://x.com/en/)` biex tiddistingwihom.

### Injora L-Fajl

B'mod awtomatiku, il-fajls kollha li jibdew `.md` u `.yml` fid-direttorju tal-lingwa tas-sors se jiġu tradotti.

Jekk trid tinjora ċerti fajls u ma tittraduċihomx (bħal abbozzi mhux mitmuma), tista 'tikkonfiguraha bil-qasam `ignore` .

`ignore` juża l [globset](https://docs.rs/globset/latest/globset/#syntax) istess sintassi bħall-fajl `.gitignore` .

Pereżempju, `_* ` fil-fajl tal-konfigurazzjoni t'hawn fuq ifisser li l-fajls li jibdew `_` mhux se jiġu tradotti.

## Regoli Tat-Traduzzjoni

### L-Edituri Tat-Traduzzjoni M'għandhomx Iżidu Jew Iħassru Linji

It-traduzzjoni hija editjabbli. Ibdel it-test oriġinali u erġa' tittraduċih bil-magna, il-modifiki manwali għat-traduzzjoni ma jinkitbux fuqu (jekk dan il-paragrafu tat-test oriġinali ma jkunx ġie modifikat).

> [!WARN]
> Għandu jkun hemm korrispondenza waħda għal waħda bejn il-linji tat-traduzzjoni u t-test oriġinali. Jiġifieri, ma żżidx jew tħassarx linji meta tikkompila t-traduzzjoni. Inkella, tikkawża konfużjoni fil-cache tal-editjar tat-traduzzjoni.

Jekk xi ħaġa tmur ħażin, jekk jogħġbok irreferi għall [-FAQ għal soluzzjonijiet.](/i18/qa#H1)

### `YAML` Traduzzjoni

L-għodda tal-linja tal-kmand issib il-fajls kollha li jispiċċaw `.yml` fid-direttorju tal-fajl tal-lingwa tas-sors u tittraduċihom.

* Innota li s-suffiss tal-isem tal-fajl għandu jkun `.yml` (mhux `.yaml` ).

L-għodda tittraduċi biss il-valuri tad-dizzjunarju `.yml` , mhux iċ-ċwievet tad-dizzjunarju.

Per eżempju `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

se jiġi tradott bħala `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

It-traduzzjoni ta ' `YAML` tista' wkoll tiġi modifikata manwalment (iżda ma żżidx jew tħassarx ċwievet jew linji fit-traduzzjoni).

Ibbażat fuq `YAML` traduzzjoni, tista 'faċilment tibni soluzzjonijiet internazzjonali għal diversi lingwi ta' programmar.

## Użu Avvanzat

### Subdirettorju Tat-Traduzzjoni

Sakemm tinħoloq `.i18n/conf.yml` (l-ebda ħtieġa li tibda mill-mudell tal-proġett demo kull darba), `i18` se jaħdem tajjeb.

L-għodda tal-linja tal-kmand issib `.i18n/conf.yml` konfigurazzjonijiet fis-subdirettorji kollha u tittraduċihom.

Proġetti li jużaw l-arkitettura [monorepo](//monorepo.tools) jistgħu jaqsmu fajls tal-lingwa f'subdirettorji.

![](https://p.3ti.site/1719910016.avif)

### Direttorju Tal-Installazzjoni Tad-Dwana

Se jiġi installat għal `/usr/local/bin` awtomatikament.

Jekk `/usr/local/bin` m'għandux permess ta' kitba se jiġi installat fuq `~/.bin` .

L-issettjar tal-varjabbli ambjentali `TO` jista' jiddefinixxi d-direttorju tal-installazzjoni, pereżempju :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```