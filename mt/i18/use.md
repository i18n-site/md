# Installa U Uża

## Twieqi L-Ewwel Jinstallaw git bash

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

[i18n.site/payBill](//i18n.site/payBill) , għandek bżonn torbot karta ta 'kreditu għall-ħlas (l-ebda recharge mhija meħtieġa, il-websajt awtomatikament tnaqqas il-miżati skont l-użu, [ara l-homepage għall-ipprezzar](/#price) ).

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

`fromTo` differenti jistgħu jiġu kkonfigurati għal sottodirettorji differenti / Dimostrazzjoni hija miktuba kif ġej :

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

F'din it-tabella tal-konfigurazzjoni, il-lingwa tas-sors għat-traduzzjoni tad-direttorju `blog` hija `zh` , u l-lingwa tas-sors għat-traduzzjoni tad-direttorju `blog/your_file_name.md` hija `ja` .

### Injora L-Fajl

B'mod awtomatiku, il-fajls kollha li jibdew `.md` u `.yml` fid-direttorju tal-lingwa tas-sors se jiġu tradotti.

Jekk trid tinjora ċerti fajls u ma tittraduċihomx (bħal abbozzi mhux mitmuma), tista 'tuża l-konfigurazzjoni tal-qasam `ignore` .

`ignore` juża l [globset](https://docs.rs/globset/latest/globset/#syntax) istess sintassi bħall-fajl `.gitignore` .

Pereżempju, `_* ` fil-fajl tal-konfigurazzjoni t'hawn fuq ifisser li l-fajls li jibdew `_` mhux se jiġu tradotti.

## Regoli Tat-Traduzzjoni

### L-Edituri Tat-Traduzzjoni M'għandhomx Iżidu Jew Iħassru Linji

It-traduzzjoni hija editjabbli. Ibdel it-test oriġinali u erġa' tittraduċih bil-magna, il-modifiki manwali għat-traduzzjoni ma jinkitbux fuqu (jekk dan il-paragrafu tat-test oriġinali ma jkunx ġie modifikat).

> [!WARN]
> Il-linji tat-traduzzjoni u t-test oriġinali għandhom jikkorrispondu wieħed għal wieħed. Jiġifieri, iżżidx jew tħassarx linji meta tikkumpila t-traduzzjoni. Inkella, tikkawża konfużjoni fil-cache tal-editjar tat-traduzzjoni.

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