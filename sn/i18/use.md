# Isa Uye Shandisa

## windows Inotanga Kuisa git bash

windows [`git bash`](https://git-scm.com/download/win)

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

Mukuwedzera, iwe unofanirwa [i18n.site/payBill](//i18n.site/payBill) kadhi rechikwereti kuti ubhadhare (hapana recharge inodiwa, webhusaiti inozobvisa mari zvichienderana nekushandiswa, [ona peji rekutanga remitengo](/#price) ).

## Use

### Demo Chirongwa

Ndokumbira utarise kune demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) kuti udzidze kumisikidzwa `i18` dudziro.

Vashandisi muChina vanogona kutevedzera [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Mushure mekuita cloning, isa dhairekitori womhanya `i18` kuti upedze kududzira.

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

Mushure mekushandura faira idzva, faira idzva re data richagadzirwa mune ino dhairekitori Rangarira kuisa `git add .` .

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

`en` ndiwo mutauro wemabviro, `zh ja ko de fr` ndiwo mutauro waunonongedza pashanduro yacho.

Kodhi yemutauro ona [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Semuyenzaniso, kana uchida kuturikira chiChinese kuChirungu, nyora zvakare mutsetse uyu `zh: en` .

Kana uchida kushandura mitauro yose inotsigirwa, tapota siya pasina kana `:` . semuyenzaniso

```
i18n:
  fromTo:
    en:
```

Unogona kumisikidza akasiyana `fromTo` kune akasiyana madhairekitori A kuratidzira akanyorwa : /

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

Mutauro yezvigadziriso iyi, mutauro wekutanga wekatalogi `blog` shanduro `zh` , uye mutauro unobva `blog/your_file_name.md` shanduro `ja` .

### Ignore File

Nekutadza, mafaera ese anotanga na `.md` uye `.yml` mudhairekitori remutauro wemabviro anozoshandurwa.

Kana iwe uchida kufuratira mamwe mafaera uye kusaashandura (senge asina kupera dhizaini), unogona kuigadzirisa `ignore` munda.

`ignore` inoshandisa `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Semuenzaniso, `_* ` mune iri pamusoro faira yekumisikidza zvinoreva kuti mafaera anotanga `_` haazoshandurirwe.

## Mitemo Yekushandura

### Vapepeti Veshanduro Havafanire Kuwedzera Kana Kudzima Mitsetse

Shanduro yacho inogadzirika. Shandura zvinyorwa zvekutanga wozvishandura zvakare, magadzirirwo eshandurudzo haasi kuzonyorwa pamusoro (kana ndima iyi yemavara ekutanga isina kugadziridzwa).

Asi ndapota cherechedza kuti mitsetse yeshanduro yacho nemashoko ekutanga anofanira kuenderana mumwe nemumwe. Kureva kuti, usawedzera kana kudzima mitsetse paunenge uchigadzira shanduro. Zvikasadaro, zvinokonzeresa nyonganiso mushanduro editing cache.

Kana chimwe chinhu chisina kumira zvakanaka, ndapota tarisa kune [FAQ kune mhinduro.](/i18/qa#H1)

### `YAML` Shanduro

Chishandiso chemutsetse wekuraira chinowana mafaera ese anopera `.yml` mumutauro wemafaira dhairekitori uye woashandura.

* Ziva kuti iyo filename suffix inofanirwa kunge iri `.yml` (kwete `.yaml` ).

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

Chero bedzi `.i18n/conf.yml` yakasikwa (hapana chikonzero chekutanga kubva kudemo project template nguva dzose), `i18` ichashanda zvakanaka.

Iyo yekuraira mutsara chishandiso ichawana `.i18n/conf.yml` zvigadziriso mune ese madhairekitori uye anoashandura.

Mapurojekiti anoshandisa iyo [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Tsika Yekuisa Dhairekitori

Ichaiswa `/usr/local/bin` nekusarudzika.

Kana `/usr/local/bin` isina mvumo yekunyora inoiswa `~/.bin` .

Kuseta nharaunda inoshanduka `TO` inogona kutsanangura iyo yekuisa dhairekitori, semuenzaniso :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```