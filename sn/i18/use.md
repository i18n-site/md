# Isa Uye Shandisa

## windows Inotanga Kuisa git bash

windows Sistimu, ndapota [tinya pano kurodha uye kuisa `git bash` kutanga](https://git-scm.com/download/win) .

Ita mabasa anotevera `git bash` .

## Install

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Ronga Chiratidzo Cheshanduro

Shanyira [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Gadzira `~/.config/i18n.site.yml` , isa izvo zvakakopwa mukati maro, zvirimo ndezvizvi:

```
token: YOUR_API_TOKEN
```

Mukuwedzera [,](/#price) iwe unofanirwa kusunga kadhi rechikwereti rekubhadhara mu [i18n.site/payBill](//i18n.site/payBill)

## Use

### Demo Chirongwa

Ndokumbira utarise kune demo purojekiti [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) udzidze kumisikidzwa `i18` dudziro.

Vashandisi muChina vanogona kutevedzera [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Mushure mekugadzira, isa dhairekitori uye womhanya `i18` kuti upedze kududzira.

### Dhairekitori Chimiro

Iyo template warehouse dhairekitori chimiro ndeiyi inotevera

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Iwo akashandurwa demo mafaira `en` dhairekitori ingori muenzaniso uye anogona kudzimwa.

### Ita Shanduro

Pinda dhairekitori womhanya `i18` kuti ushandure.

Pamusoro peshanduro, chirongwa chinozogadzirawo `.i18n/data` folda, ndapota wedzera kune repository.

Mushure mekushandura faira idzva, faira idzva re data richagadzirwa mune ino dhairekitori Rangarira kuisa `git add . ` .

## Configuration File

`.i18n/conf.yml` ndiyo faira yekumisikidza `i18` command line rekushandura chishandiso

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

Mune iyo faira yekumisikidza, iyo iri pasi `fromTo` :

`en` ndiwo mutauro wemabviro, `zh ja ko de fr` ndiwo mutauro waunoshandurirwa.

Kodhi yemutauro ona [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Semuyenzaniso, kana uchida kuturikira chiChinese kuChirungu, nyora zvakare mutsetse uyu `zh: en` .

Kana uchida kushandura mitauro yose inotsigirwa, tapota siya pasina kana `:` . semuyenzaniso

```
i18n:
  fromTo:
    en:
```

Unogona kumisikidza akasiyana `fromTo` kune akasiyana madhairekitori / kuratidzira akanyorwa sezvinotevera :

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

Mutauro yezvigadziriso iyi, mutauro wekutanga wekatalogi `blog` shanduro `zh` , uye mutauro unobva pakatarogu `blog/your_file_name.md` shanduro `ja` .

### Mitauro Yakawanda Mifananidzo/Zvisungo

Kana maURL ari mumifananidzo nemalink ari `replace:` uye `MarkDown` (uye `src` uye `href` hunhu hweakamisikidzwa `HTML` ) akagadziridzwa muna `.i18n/conf.yml` neichi chivakashure, kodhi yemutauro wemabviro muURL inotsiviwa nekodhi yemutauro weshanduro ( [mutauro. code list](/i18/LANG_CODE) ).

Semuenzaniso, configuration yako yakaita seinotevera:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` iduramazwi, kiyi ndiyo prefix yeURL ichatsiviwa, uye kukosha ndiyo mutemo wekutsiva.

Zvinoreva kutsiva mutemo `ko de uk>ru zh-TW>zh >en` pamusoro apa ndezvokuti `ko de` anoshandisa mufananidzo wekodhi yemutauro wavo, `zh-TW` `zh` anoshandisa mufananidzo `zh` , `uk` anoshandisa mufananidzo `ru` , uye mimwe mitauro (yakadai `ja` ) inoshandisa mufananidzo. `en` nekusarudzika.

Semuyenzaniso, iyo French ( `fr` ) source file `MarkDown` ndeiyi inotevera :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Iro rakaturikirwa uye rakagadzirwa Chirungu ( `en` ) faira rakaita seizvi :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Pano, `/en/` ari mumutauro wemabviro kodhi anotsiviwa ne `/zh/` mumutauro waunonongedza.

`/` :

> [!TIP]
> Kana `- /` ikagadziridzwa mu `url:` , nzira dzehukama chete dzichafananidzwa, asi ma URL anotanga na `//` haazofananid.
>
> Kana mamwe malink ezita rezita achida kutsiviwa uye mamwe asingade kutsiviwa, unogona kushandisa prefixes akasiyana senge `[x](//x.com/en/)` uye `[x](https://x.com/en/)` kusiyanisa.

### Ignore File

Nekutadza, mafaera ese anotanga na `.md` uye `.yml` mudhairekitori remutauro wemabviro anozoshandurwa.

Kana iwe uchida kufuratira mamwe mafaera uye kusaashandura (senge asina kupera dhizaini), unogona kuigadzirisa `ignore` munda.

`ignore` inoshandisa `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Semuenzaniso, `_* ` mune iri pamusoro faira yekumisikidza zvinoreva kuti mafaera anotanga `_` haazoshandurirwe.

## Mitemo Yekushandura

### Vapepeti Veshanduro Havafanire Kuwedzera Kana Kudzima Mitsetse

Shanduro yacho inogadzirika. Shandura mavara ekutanga woashandura zvakare nemuchina, magadzirirwo eshandurudzo haasi kuzonyorwa pamusoro (kana ndima iyi yemavara ekutanga isina kugadziridzwa).

> [!WARN]
> Panofanira kuva nekunyorerana mumwe-kune-mumwe pakati pemitsara yeshanduro nemagwaro epakutanga. Kureva kuti, usawedzera kana kudzima mitsetse paunenge uchigadzira shanduro. Zvikasadaro, zvinokonzeresa nyonganiso mushanduro editing cache.

Kana chimwe chinhu chisina kumira zvakanaka, ndapota tarisa kune [FAQ kune mhinduro.](/i18/qa#H1)

### `YAML` Shanduro

Chishandiso chemutsetse wekuraira chinowana mafaera ese anopera `.yml` mumutauro wemafaira dhairekitori uye woashandura.

* Ziva kuti iro zita refaira rezita rinofanira kunge riri `.yml` (kwete `.yaml` ).

Chishandiso chinongo shandura kukosha kweduramazwi muna `.yml` , kwete makiyi eduramazwi.

Somuenzaniso `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

ichashandurwa `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Dudziro `YAML` inogonawo kugadziridzwa nemaoko (asi usawedzera kana kudzima makiyi kana mitsetse mushanduro).

Zvichienderana neshanduro `YAML` , unogona kuvaka zviri nyore zvigadziriso zvepasirese zvemitauro yakasiyana-siyana yekuronga.

## Kushandiswa Kwepamusoro

### Dunhu Reshanduro

Chero bedzi `.i18n/conf.yml` yakasikwa (hapana chikonzero chekutanga kubva demo project template nguva dzose), `i18` inoshanda zvakanaka.

Iyo yekuraira mutsara chishandiso ichawana `.i18n/conf.yml` zvigadziriso mune ese madhairekitori uye anoashandura.

Mapurojekiti anoshandisa iyo [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Tsika Yekuisa Dhairekitori

Ichaiswa `/usr/local/bin` nekusarudzika.

Kana `/usr/local/bin` isina mvumo yekunyora ichaiswa `~/.bin` .

Kuseta nharaunda inoshanduka `TO` inogona kutsanangura iyo yekuisa dhairekitori, semuenzaniso :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```