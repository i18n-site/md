# Instalatu Eta Erabili

## windows Lehenengo Instalatu git bash

windows Sistema, [egin klik hemen deskargatzeko eta instalatzeko `git bash`](https://git-scm.com/download/win)

Exekutatu ondorengo eragiketak `git bash`

## Instalatu

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfiguratu Itzulpen-Tokena

Bisitatu [i18n.site/token](//i18n.site/token) klik tokena kopiatzeko

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Sortu `~/.config/i18n.site.yml` itsatsi kopiatutako edukia bertan, edukia hau da:

```
token: YOUR_API_TOKEN
```

Horrez gain, ordainketa egiteko kreditu-txartel bat [i18n.site/payBill](//i18n.site/payBill) behar duzu (ez da kargatu behar, webguneak automatikoki kenduko ditu kuotak erabileraren arabera, [ikusi hasierako orrialdea prezioak ikusteko](/#price) ).

## Erabili

### Demo Proiektua

Mesedez, ikusi demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) proiektua itzulpenaren konfigurazioa ezagutzeko `i18`

Txinako erabiltzaileek klona dezakete [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Klonatu ondoren, sartu direktorioa eta `i18` itzulpena osatzeko.

### Direktorioaren Egitura

Txantiloi biltegiko direktorioaren egitura honakoa da

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` direktorioak itzulitako demo fitxategiak ditu, adibide bat besterik ez dira eta ezabatu daitezke.

### Exekutatu Itzulpena

Sartu direktorioa eta `i18` itzultzeko.

### Gehitu Fitxategiak Biltegian

Itzulpenaz gain, programak ondorengo fitxategiak ere sortuko ditu, mesedez, gehitu biltegian.

```
.i18n/hash
.i18n/cache/.gitignore
```

Horien artean, `.i18n/cache/.gitignore` -ren edukia honakoa da :

```
**/*
!**/.gitignore
```

Horrek esan nahi du ez ikusi egin `.i18n/cache/` fitxategi guztiak ( `.i18n/cache/.gitignore` ) izan ezik.

Zure bertsioak kontrolatzeko softwarea ez bada `git` mesedez, ez ikusi egin konfigurazio honen arabera.

## Konfigurazio Fitxategia

`.i18n/conf.yml` `i18` line itzulpen tresnaren konfigurazio fitxategia da

Edukia honako hau da:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Jatorrizko & Itzulpen Hizkuntza

Konfigurazio fitxategian, `fromTo` -ren menpekoak :

`en` iturburu-hizkuntza da, `zh ja ko de fr` itzulpenaren xede-hizkuntza.

Hizkuntza kodea ikusi [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Adibidez, txinera ingelesera itzuli nahi baduzu, berridatzi lerro hau `zh: en`

Onartutako hizkuntza guztietara itzuli nahi baduzu, utzi hutsik ondoren `:` adibidez

```
i18n:
  fromTo:
    en:
```

### Ez Ikusi Fitxategia

Lehenespenez, iturburu `.md` hizkuntzaren direktorioan hasten diren fitxategi `.yml` itzuliko dira.

Fitxategi batzuk baztertu eta ez itzuli nahi badituzu (adibidez, amaitu gabeko zirriborroak), `ignore` konfigurazioa erabil dezakezu.

`ignore` `.gitignore` antzeko sintaxia erabiltzen du [globset](https://docs.rs/globset/latest/globset/#syntax)

Adibidez, goiko konfigurazio-fitxategian `_* ` `_` hasten diren fitxategiak ez direla itzuliko esan nahi du.

## Itzulpen-Arauak

### Itzulpen-Editoreek Ez Dituzte Lerrorik Gehitu Edo Ezabatu Behar

Itzulpena editagarria da. Aldatu jatorrizko testua eta itzuli automatikoki berriro, itzulpenaren eskuzko aldaketak ez dira gainidatziko (jatorrizko testuaren paragrafo hau aldatu ez bada).

Baina kontuan izan itzulpenaren lerroak eta jatorrizko testuak bata eta bestea bat etorri behar direla. Hau da, ez gehitu edo ezabatu lerrorik itzulpena osatzerakoan. Bestela, nahasmena eragingo du itzulpenak editatzeko cachean.

Zerbait gaizki ateratzen bada, mesedez, kontsultatu [galderak konponbideak lortzeko.](/i18/qa#H1)

### `YAML` Itzuli

Komando-lerroko tresnak iturburu-hizkuntzako fitxategien direktorioan amaitzen `.yml` fitxategi guztiak aurkituko ditu eta itzuliko ditu.

* Kontuan izan fitxategi-izenen atzizkiak `.yml` (ez `.yaml` ) izan behar duela.

Tresnak hiztegiko balioak soilik itzultzen ditu `.yml` ez hiztegi-gakoak.

adibidez `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

bezala itzuliko da `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` -ren itzulpena eskuz ere alda daiteke (baina ez gehitu edo ezabatu gakoak edo lerroak itzulpenean).

`YAML` oinarrituta, hainbat programazio-lengoaitarako nazioarteko soluzioak erraz eraiki ditzakezu.

## Erabilera Aurreratua

### Itzulpenaren Azpidirektorioa

Sortzen `.i18n/conf.yml` bitartean (ez da demo proiektuaren txantiloitik hasi beharrik), `i18` ondo funtzionatuko du.

Komando lerroko tresnak `.i18n/conf.yml` konfigurazioa aurkituko du azpidirektorio guztietan eta itzuliko du.

[monorepo](//monorepo.tools) arkitektura erabiltzen duten proiektuek hizkuntza-fitxategiak azpidirektorioetan zati ditzakete.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Instalazio-Direktorio Pertsonalizatua

Lehenespenez, instalatuko da `/usr/local/bin`

Idazteko baimenik ez badu `/usr/local/bin` `~/.bin` -n instalatuko da.

Ezarri ingurune-aldagaiak `TO` Instalazio direktorioa defini dezakezu, adibidez :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
