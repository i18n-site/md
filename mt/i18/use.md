# Installa U Uża

## windows L-Ewwel Tinstalla git bash

windows , jekk jogħġbok [ikklikkja hawn biex tniżżel u tinstalla l-ewwel `git bash`](https://git-scm.com/download/win)

Mexxi operazzjonijiet sussegwenti fi `git bash`

## Installa

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Ikkonfigura T-Token Tat-Traduzzjoni

Żur [i18n.site/token](//i18n.site/token) Ikklikkja biex tikkopja token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Oħloq `~/.config/i18n.site.yml` waħħal il-kontenut ikkupjat fih, il-kontenut huwa kif ġej:

```
token: YOUR_API_TOKEN
```

Barra minn hekk, għandek bżonn [i18n.site/payBill](//i18n.site/payBill) karta ta 'kreditu għall-ħlas (l-ebda recharge ma hija meħtieġa, il-websajt awtomatikament tnaqqas il-miżati skont l-użu, [ara l-homepage għall-ipprezzar](/#price) ).

## Użu

### Proġett Demo

[github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) jogħġbok irreferi għall-proġett demo biex titgħallem il-konfigurazzjoni tat-traduzzjoni `i18`

Utenti fiċ-Ċina jistgħu jikklonu [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Wara l-klonazzjoni, daħħal id-direttorju u `i18` biex tlesti t-traduzzjoni.

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

Id-direttorju `en` fih il-fajls demo tradotti, li huma biss eżempju u jistgħu jitħassru.

### Mexxi Traduzzjoni

Daħħal id-direttorju u `i18` biex tittraduċi.

### Żid Fajls Mar-Repożitorju

Minbarra t-traduzzjoni, il-programm se jiġġenera wkoll il-fajls li ġejjin, jekk jogħġbok żidhom mar-repożitorju.

```
.i18n/hash
.i18n/cache/.gitignore
```

Fosthom, il-kontenut ta : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Dan ifisser injora l-fajls kollha fid `.i18n/cache/` direttorju (ħlief `.i18n/cache/.gitignore` ).

Jekk is-softwer tal-kontroll tal-verżjoni tiegħek mhuwiex `git` jekk jogħġbok injorah skont din il-konfigurazzjoni.

## Fajl Ta' Konfigurazzjoni

`.i18n/conf.yml` Huwa l-fajl tal-konfigurazzjoni tal-għodda tat-traduzzjoni tal-linja `i18`

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

Fil-fajl tal-konfigurazzjoni, is-subordinati ta `fromTo` :

`en` hija l-lingwa tas-sors, `zh ja ko de fr` hija l-lingwa fil-mira tat-traduzzjoni.

Kodiċi tal-lingwa ara [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Pereżempju, jekk trid tittraduċi ċ-Ċiniż għall-Ingliż, erġa' ikteb din il-linja `zh: en`

Jekk trid tittraduċi għal-lingwi kollha appoġġjati, jekk jogħġbok ħalli vojt wara `:` pereżempju

```
i18n:
  fromTo:
    en:
```

### Injora L-Fajl

B'mod awtomatiku, il-fajls kollha li jibdew b' `.md` u `.yml` fid-direttorju tal-lingwa tas-sors se jiġu tradotti.

Jekk trid tinjora ċerti fajls u ma tittraduċihomx (bħal abbozzi mhux mitmuma), tista' tuża l-konfigurazzjoni tal-qasam `ignore`

`ignore` Juża sintassi simili għal `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Pereżempju, fil-fajl tal-konfigurazzjoni t'hawn fuq `_* ` li l-fajls li jibdew b `_` mhux se jiġu tradotti.

## Regoli Tat-Traduzzjoni

### L-Edituri Tat-Traduzzjoni M'għandhomx Iżidu Jew Iħassru Linji

It-traduzzjoni hija editjabbli. Ibdel it-test oriġinali u erġa' tittraduċih bil-magna, il-modifiki manwali għat-traduzzjoni ma jinkitbux fuqu (jekk dan il-paragrafu tat-test oriġinali ma jkunx ġie modifikat).

Iżda jekk jogħġbok innota li l-linji tat-traduzzjoni u t-test oriġinali għandhom jikkorrispondu wieħed għal wieħed. Jiġifieri, iżżidx jew tħassarx linji meta tikkumpila t-traduzzjoni. Inkella, tikkawża konfużjoni fil-cache tal-editjar tat-traduzzjoni.

Jekk xi ħaġa tmur ħażin, jekk jogħġbok irreferi għall [-FAQ għal soluzzjonijiet.](/i18/qa#H1)

### `Yaml`

L-għodda tal-linja tal-kmand issib il-fajls kollha li jispiċċaw bi `.yml` fid-direttorju tal-fajl tal-lingwa tas-sors u tittraduċihom.

* Innota li s-suffiss tal-isem tal-fajl għandu jkun `.yml` (mhux `.yaml` ).

L-għodda tittraduċi biss il-valuri tad-dizzjunarju fi `.yml` mhux iċ-ċwievet tad-dizzjunarju.

pereżempju `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

se jiġi tradott bħala `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

It-traduzzjoni ta' `YAML` tista' wkoll tiġi modifikata manwalment (iżda ma żżidx jew tħassarx ċwievet jew linji fit-traduzzjoni).

Ibbażat fuq it `YAML` Traduzzjoni, tista' faċilment tibni soluzzjonijiet internazzjonali għal diversi lingwi ta' programmar.

## Użu Avvanzat

### Subdirettorju Tat-Traduzzjoni

Sakemm toħloq `.i18n/conf.yml` (m'hemmx għalfejn tibda minn mudell ta' proġett demo kull darba), `i18` se taħdem tajjeb.

L-għodda tal-linja tal-kmand issib il `.i18n/conf.yml` konfigurazzjoni fis-subdirettorji kollha u tittraduċiha.

Proġetti li jużaw l-arkitettura [monorepo](//monorepo.tools) jistgħu jaqsmu fajls tal-lingwa f'subdirettorji.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Direttorju Tal-Installazzjoni Tad-Dwana

Se jiġi installat għal `/usr/local/bin`

`/usr/local/bin` ma jkollhiex permess tal-kitba tkun installata fuq `~/.bin` .

Issettja l-varjabbli tal-ambjent `TO` Tista' tiddefinixxi d-direttorju tal-installazzjoni, pereżempju :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
