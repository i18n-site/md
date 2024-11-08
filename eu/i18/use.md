# Instalatu Eta Erabili

## windows Lehenengo Instalatu git bash

windows Sistema, [egin klik hemen `git bash` deskargatzeko eta instalatzeko](https://git-scm.com/download/win) .

Exekutatu ondorengo eragiketak `git bash` -n.

## Instalatu

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfiguratu Itzulpen-Tokena

[i18n.site/token](//i18n.site/token) egin klik tokena kopiatzeko

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Sortu `~/.config/i18n.site.yml` , itsatsi kopiatutako edukia bertan, edukia hau da:

```
token: YOUR_API_TOKEN
```

Horrez [i18n.site/payBill](//i18n.site/payBill) , ordainketa-kreditu-txartel bat lotu behar duzu (Ez da kargatu behar, webguneak automatikoki kenduko ditu kuotak erabileraren arabera, [ikusi prezioak ikusteko](/#price) ).

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

Itzulpenaz gain, programak `.i18n/data` karpeta ere sortuko du, mesedez, gehitu biltegian.

Fitxategi berria itzuli ondoren, datu-fitxategi berri bat sortuko da direktorio honetan. Gogoratu `git add . ` eranstea.

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

`fromTo` desberdinak konfigura ditzakezu / honela idatzita :

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

Konfigurazio-taula honetan, katalogoaren `blog` itzulpenaren iturburu-hizkuntza `zh` da, eta katalogoaren `blog/your_file_name.md` itzulpenaren iturburu-hizkuntza `ja` da.

### Irudi/Esteka Eleaniztunak

Irudietako URLak eta `replace:` eta `MarkDown` ataleko estekak (eta kapsulatutako `HTML` `src` eta `href` atributuak) aurrizki honekin `.i18n/conf.yml` -n konfiguratuta daudenean, URLko iturburu-hizkuntza-kodea itzulpenaren hizkuntza-kodearekin ordezkatuko da ( [hizkuntza kode zerrenda](/i18/LANG_CODE) ).

Adibidez, zure konfigurazioa hau da:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` hiztegia da, gakoa ordezkatu beharreko URL-aurrizkia da eta balioa ordezkapen-araua.

Goiko `ko de uk>ru zh-TW>zh >en` araua ordezkatzearen esanahia `ko de` bere hizkuntza-kodearen irudia erabiltzen du, `zh-TW` eta `zh` `zh` ren irudia erabiltzen du, `uk` `ru` -ren irudia erabiltzen du eta beste hizkuntza batzuek (adibidez, `ja` ) irudia erabiltzen dute. `en` lehenespenez.

Adibidez, frantseseko ( `fr` ) iturburu-fitxategia `MarkDown` hau da :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Itzulitako eta sortutako ingelesezko ( `en` ) fitxategia hau da :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Hemen, sorburu-hizkuntza-kodeko `/en/` xede-hizkuntzako `/zh/` ekin ordezkatzen dira.

Oharra : URLan ordezkatutako testuaren hizkuntza kodearen aurretik eta ondoren `/` egon behar da.

> [!TIP]
> `- /` `url:` -n konfiguratuta badago, bide erlatiboak soilik bat egingo dute, baina `//` tik hasten diren URLak ez dira bat egingo.
>
> Domeinu-izen baten esteka batzuk ordeztu nahi badira eta beste batzuk ez badute ordezkatu nahi, aurrizki desberdinak erabil ditzakezu, esate baterako, `[x](//x.com/en/)` eta `[x](https://x.com/en/)` bereizteko.

### Ez Ikusi Fitxategia

Lehenespenez, iturburu-hizkuntzaren direktorioan `.md` eta `.yml` hasten diren fitxategi guztiak itzuliko dira.

Fitxategi jakin batzuk alde batera utzi eta ez itzuli nahi badituzu (adibidez, amaitu gabeko zirriborroak), `ignore` eremuarekin konfigura dezakezu.

`ignore` `.gitignore` fitxategiaren sintaxi [globset](https://docs.rs/globset/latest/globset/#syntax) erabiltzen du.

Adibidez, goiko konfigurazio-fitxategiko `_* ` esan nahi du `_` hasten diren fitxategiak ez direla itzuliko.

## Itzulpen-Arauak

### Itzulpen-Editoreek Ez Dituzte Lerrorik Gehitu Edo Ezabatu Behar

Itzulpena editagarria da. Aldatu jatorrizko testua eta itzuli automatikoki berriro, itzulpenaren eskuzko aldaketak ez dira gainidatziko (jatorrizko testuaren paragrafo hau aldatu ez bada).

> [!WARN]
> Itzulpenaren eta jatorrizko testuaren arteko bat-bateko korrespondentzia egon behar da. Hau da, ez gehitu edo ezabatu lerrorik itzulpena osatzerakoan. Bestela, nahasmena eragingo du itzulpenak editatzeko cachean.

Zerbait gaizki gertatzen bada, kontsultatu [galderak konponbideak lortzeko.](/i18/qa#H1)

### `YAML` Itzulpen

Komando-lerroko tresnak `.yml` rekin amaitzen diren fitxategi guztiak aurkituko ditu iturburu-hizkuntzako fitxategien direktorioan eta itzuliko ditu.

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

Lehenespenez `/usr/local/bin` -ra instalatuko da.

`/usr/local/bin` idazteko baimenik ez badu, `~/.bin` en instalatuko da.

`TO` ingurune-aldagaia ezartzeak instalazio-direktorioa defini dezake, adibidez :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```