# Instalatu Eta Erabili

## windows Lehenengo Instalatu git bash

windows Sistema, mesedez [egin klik hemen `git bash` deskargatzeko eta instalatzeko](https://git-scm.com/download/win) .

Exekutatu ondorengo eragiketak `git bash` n.

## Instalatu

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfiguratu Itzulpen-Tokena

Bisitatu [i18n.site/token](//i18n.site/token) klik tokena kopiatzeko

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Sortu `~/.config/i18n.site.yml` , itsatsi kopiatutako edukia bertan, edukia hau da:

```
token: YOUR_API_TOKEN
```

Horrez gain, kreditu-txartel bat [i18n.site/payBill](//i18n.site/payBill) behar duzu ordainketa egiteko (ez da kargatu behar, webguneak automatikoki kenduko ditu kuotak erabileraren arabera, [ikusi hasierako orrialdea prezioak ikusteko](/#price) ).

## Erabili

### Demo Proiektua

Mesedez [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) ikusi demo-proiektua `i18` itzulpenaren konfigurazioa ezagutzeko.

Txinako erabiltzaileek klona dezakete [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Klonatu ondoren, sartu direktorioa eta exekutatu `i18` itzulpena osatzeko.

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

`en` direktorioko demo fitxategi itzuliak adibide bat besterik ez dira eta ezaba daitezke.

### Exekutatu Itzulpena

Sartu direktorioa eta exekutatu `i18` itzultzeko.

### Gehitu Fitxategiak Biltegian

Itzulpenaz gain, programak ondorengo fitxategiak ere sortuko ditu, mesedez, gehitu biltegian.

```
.i18n/hash
.i18n/cache/.gitignore
```

Horien artean, `.i18n/cache/.gitignore` ren edukia honako hau da :

```
**/*
!**/.gitignore
```

Horrek esan nahi du `.i18n/cache/` direktorioko fitxategi guztiak ( `.i18n/cache/.gitignore` izan ezik) ez direla aintzat hartzen.

Zure bertsioak kontrolatzeko softwarea `git` ez bada, mesedez, ez ikusi egin konfigurazio honen arabera.

## Konfigurazio Fitxategia

`.i18n/conf.yml` `i18` komando lerroko itzulpen tresnaren konfigurazio fitxategia da

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

Konfigurazio fitxategian, `fromTo` menpekoa:

`en` jatorri-hizkuntza da, `zh ja ko de fr` itzulpenaren xede-hizkuntza.

Hizkuntza kodea ikusi [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Adibidez, txinera ingelesera itzuli nahi baduzu, berridatzi lerro hau `zh: en` .

Onartutako hizkuntza guztietara itzuli nahi baduzu, utzi hutsik `:` ondoren. adibidez

```
i18n:
  fromTo:
    en:
```

`fromTo` desberdinak konfigura ditzakezu Fitxategiak : idatzita /

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

Konfigurazio-taula honetan, katalogoaren `blog` itzulpenaren iturburu-hizkuntza `zh` da, eta `blog/your_file_name.md` itzulpenaren iturburu-hizkuntza `ja` da.

### Ez Ikusi Fitxategia

Lehenespenez, iturburu-hizkuntzaren direktorioan `.md` eta `.yml` hasten diren fitxategi guztiak itzuliko dira.

Fitxategi jakin batzuk alde batera utzi eta ez itzuli nahi badituzu (adibidez, amaitu gabeko zirriborroak), `ignore` eremuarekin konfigura dezakezu.

`ignore` `.gitignore` fitxategiaren [globset](https://docs.rs/globset/latest/globset/#syntax) bera erabiltzen du.

Adibidez, goiko konfigurazio-fitxategiko `_* ` esan nahi du `_` hasten diren fitxategiak ez direla itzuliko.

## Itzulpen-Arauak

### Itzulpen-Editoreek Ez Dituzte Lerrorik Gehitu Edo Ezabatu Behar

Itzulpena editagarria da. Aldatu jatorrizko testua eta itzuli automatikoki berriro, itzulpenaren eskuzko aldaketak ez dira gainidatziko (jatorrizko testuaren paragrafo hau aldatu ez bada).

Baina kontuan izan itzulpenaren lerroak eta jatorrizko testuak bat-batean bat egin behar duela. Hau da, ez gehitu edo ezabatu lerrorik itzulpena osatzerakoan. Bestela, nahasmena eragingo du itzulpenak editatzeko cachean.

Zerbait gaizki ateratzen bada, mesedez, kontsultatu [galderak konponbideak lortzeko.](/i18/qa#H1)

### `YAML` Itzulpen

Komando-lerroko tresnak `.yml` amaitzen diren fitxategi guztiak aurkituko ditu sorburu-hizkuntzako fitxategien direktorioan eta itzuliko ditu.

* Kontuan izan fitxategi-izenen atzizkiak `.yml` izan behar duela (ez `.yaml` ).

Tresnak hiztegiko balioak `.yml` n soilik itzultzen ditu, ez hiztegi-gakoak.

Adibidez `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` bezala itzuliko da

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` -ren itzulpena eskuz ere alda daiteke (baina ez gehitu edo ezabatu gakoak edo lerroak itzulpenean).

`YAML` itzulpenean oinarrituta, hainbat programazio-lengoaitarako nazioarteko irtenbideak erraz eraiki ditzakezu.

## Erabilera Aurreratua

### Itzulpenaren Azpidirektorioa

`.i18n/conf.yml` sortzen den bitartean (ez da demo proiektuaren txantiloitik hasi beharrik behin), `i18` ondo funtzionatuko du.

Komando lerroko tresnak `.i18n/conf.yml` konfigurazio aurkituko ditu azpidirektorio guztietan eta itzuliko ditu.

[monorepo](//monorepo.tools) arkitektura erabiltzen duten proiektuek hizkuntza-fitxategiak azpidirektorioetan zati ditzakete.

![](https://p.3ti.site/1719910016.avif)

### Instalazio-Direktorio Pertsonalizatua

Lehenespenez `/usr/local/bin` ra instalatuko da.

`/usr/local/bin` idazteko baimenik ez badu, `~/.bin` en instalatuko da.

`TO` ingurune-aldagaia ezartzeak instalazio-direktorioa defini dezake, adibidez :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```