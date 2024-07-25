# Isa Uye Shandisa

## windows Inotanga Kuisa git bash

windows [`git bash`](https://git-scm.com/download/win)

Itai maoperation anotevera mu `git bash`

## Install

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Ronga Chiratidzo Cheshanduro

Shanyira [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Gadzira `~/.config/i18n.site.yml` isa izvo zvakakopwa mukati maro, zvirimo ndezvizvi:

```
token: YOUR_API_TOKEN
```

Mukuwedzera, iwe unofanirwa [i18n.site/payBill](//i18n.site/payBill) kadhi rechikwereti kuti ubhadhare (hapana recharge inodiwa, webhusaiti inozobvisa mari zvichienderana nekushandiswa, [ona peji rekutanga remitengo](/#price) ).

## Use

### Demo Chirongwa

Ndokumbira utarise kudemo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) kuti udzidze kumisikidzwa kweshanduro `i18`

Vashandisi muChina vanogona kutevedzera [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Mushure mekuita cloning, isa dhairekitori uye `i18` kuti upedze kududzira.

### Directory Structure

Iyo template warehouse dhairekitori chimiro ndeiyi inotevera

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Iyo `en`

### Ita Shanduro

Pinda dhairekitori womhanya kushandura `i18`

### Wedzera Mafaira Kune Repository

Pamusoro pekushandura, chirongwa chinozogadzirawo mafaera anotevera, ndapota wedzera kune repository.

```
.i18n/hash
.i18n/cache/.gitignore
```

: pavo, zvirimo ndezvizvi `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Izvi zvinoreva kufuratira mafaera ese ari `.i18n/cache/` (kunze kwe `.i18n/cache/.gitignore` ).

Kana yako vhezheni yekudzora software isiri `git` ndapota iregeredza zvinoenderana nekugadziriswa uku.

## Configuration File

`.i18n/conf.yml` Ndiyo faira yekumisikidza ye `i18` line rekushandura chishandiso

Zviripo ndezvizvi:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Mutauro Wemabviro &

Mune faira yekumisikidza, ivo vari pasi pe `fromTo`

`en` ndiwo mutauro wemabviro, `zh ja ko de fr` ndiwo mutauro waunonongedza kushandurira.

Kodhi yemutauro ona [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Semuyenzaniso, kana uchida kuturikira chiChinese kuchirungu, nyora zvakare mutsara uyu `zh: en`

Kana uchida kushandura mitauro yose inotsigirwa, ndapota siya pasina chinhu kana wapedza `:` semuyenzaniso

```
i18n:
  fromTo:
    en:
```

### Ignore File

Nekumisikidza, mafaera `.yml` kutanga ne `.md`

Kana iwe uchida kufuratira mamwe mafaera uye kusaashandura (senge isina kupera kunyorwa), unogona kushandisa iyo `ignore`

`ignore` Inoshandisa syntax yakafanana ne `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Semuenzaniso, mune iri pamusoro faira yekumisikidza `_* ` kuti mafaera anotanga ne `_` haashandurwe.

## Mitemo Yekushandura

### Vapepeti Veshanduro Havafanire Kuwedzera Kana Kudzima Mitsetse

Shanduro yacho inogadzirika. Shandura mavara ekutanga woashandura zvakare nemuchina, magadzirirwo eshandurudzo haasi kuzonyorwa pamusoro (kana ndima iyi yemavara ekutanga isina kugadziridzwa).

Asi ndapota cherechedza kuti mitsetse yeshanduro yacho nemashoko ekutanga anofanira kuenderana mumwe nemumwe. Kureva kuti, usawedzera kana kudzima mitsetse paunenge uchigadzira shanduro. Zvikasadaro, zvinokonzeresa nyonganiso mushanduro editing cache.

Kana chimwe chinhu chisina kumira zvakanaka, ndapota tarisa kune [FAQ kune mhinduro.](/i18/qa#H1)

### Shandura `YAML`

Chishandiso chemutsetse wekuraira chinowana mafaera ese anopera ne `.yml`

* Ziva kuti faira rezita remberi rinofanira kuva `.yml` (kwete `.yaml` ).

Chishandiso chinongo shandura kukosha kweduramazwi `.yml` , kwete makiyi eduramazwi.

semuyenzaniso `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

ichashandurwa se `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Dudziro ye `YAML`

Zvichienderana ne `YAML`

## Kushandiswa Kwepamusoro

### Dunhu Reshanduro

Chero bedzi iwe uchigadzira `.i18n/conf.yml` (hapana chikonzero chekutanga kubva demo template nguva dzese), `i18` ichashanda zvakanaka.

Iyo yekuraira mutsara chishandiso ichawana iyo `.i18n/conf.yml`

Mapurojekiti anoshandisa iyo [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Tsika Yekuisa Dhairekitori

Ichaiswa ku `/usr/local/bin`

Kana `/usr/local/bin` isina mvumo yekunyora inoiswa ku `~/.bin` .

Seta nharaunda : `TO`

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
