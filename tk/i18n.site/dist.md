# Gurnama We Onlaýn

`i18n.site` [bir sahypalyk programma](https://developer.mozilla.org/docs/Glossary/SPA) arhitekturasyny kabul edýär we web sahypasynyň giriş sahypasy we web sahypasynyň mazmuny özbaşdak ýerleşdirilýär.

Aboveokardaky terjime işledilenden soň, `md/out/dev` katalogyň aşagynda `htm` we `v` kataloglar dörediler.

Bu ýerde `dev` , `.i18n/htm/dev.yml` konfigurasiýa faýly esasynda gurlandygyny aňladýar.

`dev` katalog :

`htm` katalog web sahypasynyň giriş sahypasydyr.

`v` katalogda wersiýa belgileri bolan web sahypasynyň mazmuny bar.

Preerli deslapky syn wersiýa belgisi bilen gyzyklanmaýar we ähli faýllary `out/dev/v/0.1.0` bukjasyna göçürer.

Resmi taýdan goýberilmegi üçin üýtgedilen faýllar täze wersiýa belgisi katalogyna göçüriler.

## `-c` Bilen Konfigurasiýa Faýly Görkeziň

Dürli konfigurasiýa faýllary `out` katalogda degişli kataloglary döreder.

Mysal üçin, `.i18n/htm/main.yml` `out/main` katalogy döreder.

`dev.yml` we `main.yml` deslapky konfigurasiýalardyr.

`dev` ýerli ösüş üçin ulanylýan, şeýle hem deslapky konfigurasiýa faýly bolan ösüş gurşawyny görkezýän `development` gysgaltmasydyr.
`ol` , resmi taýdan goýbermek üçin ulanylýan onlaýn gurşawy `-n` `online` -iň gysgaldylyşydyr `npm`

Şeýle hem, beýleki konfigurasiýa faýllaryny döredip bilersiňiz, ulanmak üçin konfigurasiýa faýlyň adyny görkezmek üçin buýruk setirinde `--htm_conf` ulanyň.

meselem:
```
i18n.site --htm_conf dist --save
```

Bu ýerde `--save` täzeleniş wersiýasynyň belgisini görkezýär.

## <a rel=id href="#npm" id="npm"></a> Mazmuny npmjs.com sahypasyna çap ediň

Mazmuny neşir etmek maslahat berilýän deslapky çözgütdir ( [“Front-end High Availability](/i18n.site/feature#ha) ”) [npmjs.com](//npmjs.com)

### Giriş & Postaz npm

`nodejs` guruň, `npm login` bilen giriň.

`md/.i18n/htm/main.yml` [npmjs.com](//npmjs.com) we [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` bahany öz `npm` paketiňiziň ady hökmünde üýtgediň.

Soňra `md/.i18n/htm/main.package.json` üýtgediň

Terjime etmek we neşir etmek üçin `md` katalogda `i18n.site --npm` ýa-da `i18n.site -n` işlediň.

Neşir etmek üçin üznüksiz integrasiýa gurşawyny ulanýan bolsaňyz, `nodejs` gurnamagyň zerurlygy ýok. Diňe sessiýa açyň we `~/.npmrc` rugsady çap ediň.

Bukjanyň adyny `v:` den `main.yml` üýtgeden bolsaňyz, **ilki `.i18n/v/main` pozuň** we çap ediň.

#### Proksi Serwer npm Tarapyndan Neşir Edildi

Hytaýyň materiginde ulanyjylar tor problemalary bilen ýüzbe-ýüz bolup, `npm` paket çap edip bilmeseler, proksi serwerini düzmek üçin daşky gurşaw üýtgeýjisini `https_proxy` edip bilerler.

Proksi serwer portuňyzyň `7890` bolandygyny göz öňünde tutup, ýazyp bilersiňiz:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Özbaşdak Ýerleşdirilen Mazmun

Mazmuny özbaşdak ýerleşdirmek isleseňiz, ilki `md/.i18n/htm/main.yml` redaktirläň we `v: //unpkg.com/i18n.site` URL ýaly prefiksine `v: //i18n-v.xxx.com` ýaly üýtgediň.

`md` bukjany giriziň we işlediň

```
i18n.site --htm_conf ol --save
```

ýa-da gysgaltma

```
i18n.site -c ol -s
```

Soň bolsa, `md/out/main/v` bukjadaky mazmuny `v:` -de goýlan URL prefiks ýoluna düzüň.

Netijede, **`/.v` dan `1s` e çenli gutarýan ýoluň keş keşini düzüň** , ýogsam täze çykan mazmuna derrew girip bolmaz.

Gereksiz islegleri azaltmak üçin beýleki ýollar üçin keş keşini bir ýyl ýa-da has köp wagt belläp bolýar.

## S3-Iň Mazmuny

Öz-özüňi alyp barmak üçin, öz serweriňizi ulanmakdan başga-da, umumy `CDN` wariant `S3` +

`S3` serwere girmek üçin [rclone](https://rclone.org) bilersiňiz, soňra aşakdaky skriptlere serediň we üýtgedip bilersiňiz we her goýberiliş üçin diňe artýan üýtgeşmeleri `S3` -e göçürip bilersiňiz.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

`CDN` bilen sazlamagy ýatdan çykarmaň, `/.v` de gutarýan ýoluň keş keşi `1s` bolar, ýogsam täze çykan mazmuna derrew girip bolmaz.

## Web Sahypasyny Çap Et

Web sahypasy islendik ýerde ýerleşdirilip bilner [github page](https://pages.github.com) we [cloudflare page](https://pages.cloudflare.com) gowy saýlawlar!

Web sahypasy [bir sahypalyk programma](https://developer.mozilla.org/docs/Glossary/SPA) arhitekturasyny ulanýandygy sebäpli, `. ` dan `index.html` çenli bolmadyk URL ýollaryny täzeden ýazmagy ýatdan çykarmaň.

Web sahypasyna giriş sahypasy diňe bir gezek ýerleşdirilmeli we indiki mazmun täzelenmeleri üçin web sahypasynyň giriş sahypasyny täzeden ulanmagyň zerurlygy ýok.

### github Sahypasynda Ýerleşdiriň

Ilki `i18n-demo` [bir gurama döretmek üçin şu ýere basyň github](https://github.com/account/organizations/new?plan=free)

Soňra bu guramanyň aşagynda `i18n-demo.github.io` ammar dörediň ( `i18n-demo` döreden gurama adyňyz bilen çalşyň):

![](https://p.3ti.site/1721098657.avif)

Öňki makalada mazmuny çap edilende `out/main/htm` döredildi, bu bukjany giriziň we işlediň :

```
ln -s index.html 404.html
```


`github page` URL ýoluny täzeden ýazmagy goldamaýandygy sebäpli, ýerine `404.html` ulanylýar.

Soňra `htm` bukjada aşakdaky buýrugy işlediň ( `i18n-demo/i18n-demo.github.io.git` öz ammar adresiňiz bilen çalyşmagy ýatdan çykarmaň) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Kody basanyňyzdan soň, `github page` girmegiň üstünlikli işlemegine garaşyň (aşakda görkezilişi ýaly).

<img src="//p.3ti.site/1721116586.avif" width="350px">

Görkeziş sahypasy üçin serediň:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Bulutlar Sahypasynda Ýerleşdiriň

`github page` bilen deňeşdirilende [cloudflare page](//pages.cloudflare.com) ýoly täzeden ýazmagy üpjün edýär we materik Hytaý üçin has dostlukly we ulanmak has amatly.

`cloudflare page` -yň ýerleşdirilmegi, adatça ýokardaky `github page` iň ýerleşdirilmegine esaslanýar.

Taslama dörediň we ýokardaky `i18n-demo.github.io` ammary baglaň.

Amal aşakdaky suratda görkezilýär:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

`i18n-demo` gurama girmek üçin `Add Account` basyň.

Başga bir guramanyň ammaryny baglan bolsaňyz, täze gurama görkezilmezden ozal iki gezek ygtyýar bermek üçin `Add Account` gezek iki gezek basmaly bolmagyňyz mümkin.

![](https://p.3ti.site/1721118306.avif)

Ondan soň `i18n-demo.github.io` ammary saýlaň, soňra `Begin setup` e basyň we indiki ädimler üçin deslapky bahalary ulanyň.

![](https://p.3ti.site/1721118490.avif)

Ilkinji gezek baglanyşandan soň, oňa girmezden birnäçe minut garaşmaly.

Göçürilenden soň, ýörite domen adyny baglap bilersiňiz.

![](https://p.3ti.site/1721119459.avif)

Domainörite domen adyny baglanyşdyranyňyzdan soň, aşakda görkezilişi ýaly bir sahypalyk programmanyň ýol täzeden ýazylmagyny düzmek üçin domen adyna gidiň:

![](https://p.3ti.site/1721119320.avif)

Aboveokardaky suratdaky düzgünler aşakdakylardyr: Aşakdaky birinji setirdäki `i18n.site` baglanyşdyrýan domen adyňyz bilen çalşyň.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Mundan başga-da, aşakda görkezilişi ýaly keş keşini düzüň we keşiň dowamlylygyny bir aý belläň.

![](https://p.3ti.site/1721125111.avif)

Aboveokardaky suratdaky ikinji ädimdäki domen adyny gabat gelýän domen adyna üýtgediň.

### Hytaýyň Materiginde Web Sahypasynyň Ýerleşdirilmegini Optimizirlemek

Hytaýyň materikleriniň tor gurşawynda has oňat elýeterlilik gazanmak isleseňiz, ilki bilen [domen adyny bellige alyň](//beian.aliyun.com) .

Soň bolsa, + materiginde bulut satyjylarynyň obýekt saklanyşyny ulanyň `CDN` Aşakdaky mazmuny ýerleşdiriň `out/main/htm` .

Bir sahypalyk programmalara uýgunlaşmagyň ýoluny täzeden ýazmak üçin gyrasy hasaplamany ulanyp bilersiňiz, Mysal üçin, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) şeýle düzülip bilner:

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // Out.XXX = 'MSG' ýaly çykyşy düzetmek üçin jogap sözbaşysyny düzüp bilersiňiz;
})
```

![](https://p.3ti.site/1721121273.avif)

`MX` ýazgy we `CNAME` ýazgy bilelikde bolup bilmeýär, şol bir wagtyň özünde domen adynyň e-poçtalaryny almak isleseňiz, `CNAME` `A` çykmak üçin skript bilen hyzmatdaşlyk etmeli [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Mundan başga-da, Hytaýyň materigindäki bulut satyjylarynyň daşary ýurt tölegleri birneme gymmat bolany üçin, çykdajylary optimizirlemek isleseňiz, [Huawei Cloud-yň mugt geografiki DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) we [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) adaty domen adyny (aşakda görkezilişi ýaly) ulanyp bilersiňiz! ulag gatnawy - Hytaýyň materiginde ulag marşruty Baidu Cloud `CDN` , halkara traffigi cloudflare gidýär.

![](https://p.3ti.site/1721119788.avif)

Bu ýerleşdiriş optimizasiýa çözgütleri has çylşyrymly we geljekde aýratyn bölümlerde hödürlener.

### Umumy Domen Adynyň Gönükdirilmegi

Esasy web sahypa hökmünde web sahypasyny döretmek üçin `i18n.site` ulanýan bolsaňyz, adatça pan-domen gönükdirmesini sazlamaly, ýagny girişi `*.xxx.com` e (şol sanda `www.xxx.com` den `xxx.com` ) gönükdirmeli.

Bu talap Alibaba Cloud `CDN` `EdgeScript` ( [Iňlis resminamasy](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Hytaý resminamasy](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) kömegi bilen gazanylyp bilner.

[CDN Cloud](https://cdn.console.aliyun.com/domain/list) -da domen adyny goşuň we domen adyny Alibaba Cloud `CDN` -de `*.xxx.com` `CNAME` görkeziň.

![](https://p.3ti.site/1721122000.avif)

Mysal üçin, ýokardaky suratdaky pan-domen `*.i18n.site` gönükdirme konfigurasiýasy aşakdaky ýaly:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### nginx Bilen Ýerleşdiriň

Aşakdakylara meňzeş konfigurasiýa goşuň! `server` abzasda nginx `/root/i18n/md/out/main/htm` öz `out/main/htm` ýoluna üýtgediň:

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## `github action` Üznüksiz Integrasiýa Esaslanýar

`github action` yňyzy düzmek üçin aşakdakylara ýüz tutup bilersiňiz:

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Sazlamadan görnüşi ýaly, bu iş prosesi `main` şaha we `dist` şaha iteklenende ýüze çykýar.

Iş prosesi resminamany neşir etmek üçin şahamçanyň adyna laýyk gelýän konfigurasiýa faýlyny ulanar, bu ýerde degişlilikde `.i18n/htm/main.yml` we `.i18n/htm/dist.yml` neşirýat konfigurasiýasy hökmünde ulanylar.

Resminamany çykarmak üçin aşakdaky iň oňat tejribeleri maslahat berýäris:

Üýtgeşmeler `main` njy şaha iterilende, resminama deslapky stansiýa (deslapky syn stansiýasy bar [github page](//pages.github.com) ) Gurulmagyna we ýerleşdirilmegine sebäp bolýar.

Deslapky syn sahypasynda resminamanyň dogrudygyny tassyklandan soň, kod birleşdiriler we `dist` bölüme geçiriler we resmi gurluşyk we ýaýbaňlandyrma onlaýn işe başlar.

Elbetde, ýokardaky prosesi durmuşa geçirmek üçin has köp konfigurasiýa ýazmagy talap edýär.

Hakyky taslama ýüz tutup bilersiňiz [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

Konfigurasiýada `secrets.I18N_SITE_TOKEN` we `secrets.NPM_TOKEN` kod bazasynda gizlin üýtgeýänleri düzmegiňizi talap edýär.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` konfigurasiýadaky `npm` [npmjs.com](//npmjs.com) neşir ediş nyşanydyr.

![](//p.3ti.site/1730969906.avif)


## Katalog Gurluşy

### `public`

Web sahypasynyň statiki faýllary, meselem `favicon.ico` , `robots.txt` we ş.m.

Bu ýerdäki nyşan faýllary döredilip bilner [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

`.i18n` bukjanyň aşagynda konfigurasiýa faýllary, terjime keşi `i18n.site` ş.m. bar. Jikme-jiklikler üçin indiki bölüme ["Sazlama"](/i18n.site/conf) serediň.

### `en`

`.i18n/conf.yml` konfigurasiýa faýlyndaky `fromTo` -den `en` e gabat gelýän çeşme dil katalogy

```yaml
i18n:
  fromTo:
    en: zh
```

Terjimäniň konfigurasiýasyna serediň [i18](/i18/use)