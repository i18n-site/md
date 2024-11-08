# Hedapena Eta Sarean

`i18n.site` [orrialde bakarreko aplikazio-](https://developer.mozilla.org/docs/Glossary/SPA) arkitektura hartzen du, eta webgunearen sarrerako orria eta webgunearen edukia modu independentean zabaltzen dira.

Goiko itzulpena exekutatu ondoren, `htm` eta `v` direktorioak `md/out/dev` direktorioaren azpian sortuko dira.

Hemen, `dev` esan nahi du `.i18n/htm/dev.yml` konfigurazio fitxategian oinarrituta eraiki dela.

`dev` direktorioa :

`htm` direktorioa webgunearen sarrera orria da.

`v` direktorioak webguneko edukia dauka bertsio-zenbakiekin.

Tokiko aurrebistak ez dio axola bertsio-zenbakiari eta fitxategi guztiak `out/dev/v/0.1.0` direktoriora kopiatuko ditu.

Argitaratze ofizialerako, aldatutako fitxategiak bertsio-zenbaki berriaren direktoriora kopiatuko dira.

## Zehaztu Konfigurazio-Fitxategia `-c` Rekin

Konfigurazio-fitxategi ezberdinek dagozkien direktorioak sortuko dituzte `out` direktorioan.

Adibidez, `.i18n/htm/main.yml` `out/main` direktorioa sortuko du.

`dev.yml` eta `main.yml` dira lehenetsitako konfigurazioak.

`dev` `development` laburdura da, garapen-ingurunea adierazten duena, aurrebista lokalerako erabiltzen dena, eta konfigurazio fitxategi lehenetsia ere bada.
`ol` `online` laburdura da, lineako ingurunea adierazten duena, kaleratze ofizialerako erabiltzen den konfigurazio fitxategi lehenetsia ere askatzeko `-n` `npm` bitarteko komando-lerroko parametroak erabiltzean.

Beste konfigurazio-fitxategi batzuk ere sor ditzakezu komando-lerroko `--htm_conf` erabili nahi duzun konfigurazio-fitxategiaren izena zehazteko:

adibidez:
```
i18n.site --htm_conf dist --save
```

Hemen `--save` eguneratzearen bertsioaren zenbakia adierazten du.

## <a rel=id href="#npm" id="npm"></a> Argitaratu edukia npmjs.com webgunean

Edukia argitaratzea da gomendatutako irtenbide lehenetsia ( [npmjs.com](//npmjs.com) [Frontend High Availability](/i18n.site/feature#ha) ).

### Hasi npm & Post

Instalatu `nodejs` , hasi saioa `npm login` rekin.

Editatu `md/.i18n/htm/main.yml` eta aldatu [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` zure `npm` paketearen izen [npmjs.com](//npmjs.com) .

Ondoren, aldatu `md/.i18n/htm/main.package.json`

Exekutatu `i18n.site --npm` edo `i18n.site -n` `md` direktorioan itzultzeko eta argitaratzeko.

Etengabeko integrazio-ingurune bat erabiltzen baduzu argitaratzeko, ez dago `nodejs` instalatu beharrik. Saio-hasitako eta argitaratzeko baimenak `~/.npmrc` kopiatu besterik ez dago ingurunera.

`v:` `main.yml` en paketearen izena aldatzen baduzu, **ziurtatu lehenik `.i18n/v/main` ezabatzen duzula** eta gero argitaratu.

#### Npm-K Argitaratutako Proxy Zerbitzaria

Txina kontinentaleko erabiltzaileek sareko arazoak aurkitzen badituzte eta ezin badute `npm` pakete argitaratu, `https_proxy` ingurune-aldagaia ezar dezakete proxy zerbitzaria konfiguratzeko.

Zure proxy zerbitzariaren ataka `7890` dela suposatuz, idatzi dezakezu:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Norberak Ostatutako Edukia

Edukia auto-ostalari nahi baduzu, editatu lehenik `md/.i18n/htm/main.yml` eta aldatu `v: //unpkg.com/i18n.site` zure URL aurrizkiarekin, adibidez `v: //i18n-v.xxx.com` .

Sartu `md` direktorioa eta exekutatu

```
i18n.site --htm_conf ol --save
```

edo laburdura

```
i18n.site -c ol -s
```

Ondoren, konfiguratu `md/out/main/v` direktorioko edukia `v:` ezarritako URL aurrizkiaren bidearekin.

Azkenik, **konfiguratu `/.v` `1s` amaitzen den bidearen cache-denbora** , bestela kaleratu berri den edukira ezin izango da berehala sartu.

Beste bide batzuen cache-denbora urtebete edo gehiago ezar daiteke alferrikako eskaerak murrizteko.

## Ostatu Edukia S3-N

Edukia norberak ostatatzeko, zure zerbitzaria erabiltzeaz gain, ohiko beste aukera bat `S3` + erabiltzea da `CDN`

[rclone](https://rclone.org) Erabili dezakezu `S3` zerbitzarian saioa hasteko, ondoren script-a jo eta alda dezakezu, eta bertsio inkrementalak `S3` bakarrik kopiatu.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Gogoratu `CDN` konfiguratzen duzula `/.v` z amaitzen den bidearen cache-denbora `1s` izan dadin, bestela kaleratu berri den edukia ezin izango da berehala sartu.

## Webgunea Argitaratu

Webgunea edozein lekutan zabaldu daiteke [github page](https://pages.github.com) eta [cloudflare page](https://pages.cloudflare.com) aukera onak dira.

Webguneak [orrialde bakarreko aplikazio-](https://developer.mozilla.org/docs/Glossary/SPA) arkitektura erabiltzen duenez, gogoratu `. ` `index.html` ez duten URL bideak berridatzi behar dituzula.

Webgunearen sarrera orria behin bakarrik zabaldu behar da, eta ez dago webgunearen sarrera orria berriro zabaldu beharrik ondorengo edukien eguneratzeetarako.

### Inplementatu github Orrian

Lehenengo [egin klik github erakunde bat sortzeko](https://github.com/account/organizations/new?plan=free) . Honako erakundearen izena `i18n-demo` da.

Ondoren, sortu `i18n-demo.github.io` biltegia erakunde honen azpian (mesedez ordezkatu `i18n-demo` sortu duzun erakundearen izenarekin):

![](https://p.3ti.site/1721098657.avif)

Aurreko artikuluan edukia argitaratzean, `out/main/htm` sortu da Mesedez, sartu direktorioa eta exekutatu :

```
ln -s index.html 404.html
```


`github page` ez duelako URL bideen berridazketa onartzen, `404.html` erabiltzen da horren ordez.

Ondoren, exekutatu komando hau `htm` direktorioan (gogoratu `i18n-demo/i18n-demo.github.io.git` zure biltegi-helbidearekin ordezkatzea) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Kodea bultzatu ondoren, itxaron `github page` -ren hedapena behar bezala exekutatu arte (behean erakusten den moduan) bertara sartu aurretik.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Demo orria ikusteko, ikusi:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Inplementatu cloudflare Orrian

`github page` rekin alderatuta [cloudflare page](//pages.cloudflare.com) bideen berridazketa eskaintzen du eta errespetatzen da Txina kontinentalarekin eta erabilerrazagoa da.

`cloudflare page` -ren hedapena goiko `github page` en hedapenean oinarritzen da normalean.

Sortu proiektu bat eta lotu goiko `i18n-demo.github.io` biltegia.

Prozesua beheko irudian ageri da:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Mesedez, egin klik `Add Account` `i18n-demo` erakundeari sarbidea emateko.

Beste erakunde baten biltegia lotu baduzu, baliteke `Add Account` bitan sakatu behar izatea bi aldiz baimena emateko erakunde berria erakutsi aurretik.

![](https://p.3ti.site/1721118306.avif)

Ondoren, hautatu biltegia `i18n-demo.github.io` , egin klik `Begin setup` eta erabili balio lehenetsiak hurrengo urratsetarako.

![](https://p.3ti.site/1721118490.avif)

Lehen aldiz lotu ondoren, minutu batzuk itxaron behar dituzu bertara sartzeko.

Inplementatu ondoren, domeinu-izen pertsonalizatu bat lotu dezakezu.

![](https://p.3ti.site/1721119459.avif)

Domeinu-izen pertsonalizatua lotu ondoren, joan domeinu-izenera orrialde bakarreko aplikazioaren bide-berridazketa konfiguratzeko, behean erakusten den moduan:

![](https://p.3ti.site/1721119320.avif)

Goiko irudiko `i18n.site` honako hauek dira.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Horrez gain, mesedez, konfiguratu cache-arauak, behean erakusten den moduan, eta ezarri cachearen iraupena hilabete batekoa.

![](https://p.3ti.site/1721125111.avif)

Mesedez, aldatu goiko irudiko bigarren urratsean bat datorren domeinu-izena lotu duzun domeinu-izenarekin.

### Webgunearen Hedapena Optimizatzea Txina Kontinentalean

Txina kontinentaleko sare-ingurunean irisgarritasun-errendimendu hobea lortu nahi baduzu, [erregistratu lehenik domeinu-izen bat](//beian.aliyun.com) .

Ondoren, erabili + kontinentaleko hodeiko saltzaileen objektuen biltegiratzea `CDN` Inplementatu eduki hau `out/main/htm` .

Edge computing erabil dezakezu bidea orri bakarreko aplikazioetara egokitzeko bidea berridazteko. Adibidez, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) honela konfigura daiteke:

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
  // Erantzunen goiburuak irteera arazketarako ezar daitezke, hala nola out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

`MX` erregistroa eta `CNAME` erregistroa ezin direnez elkarrekin egon, aldi berean domeinu-izenen mezu elektronikoak jaso nahi badituzu, script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) arekin lankidetzan aritu behar duzu `CNAME` mailan `A` erregistroan.

Gainera, Txina kontinentaleko hodei saltzaileen atzerriko trafiko-kostuak nahiko garestiak direnez, kostuak optimizatu nahi badituzu, [DNS Cloud-en doako bereizmen geografikoa](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) eta [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) domeinu-izen pertsonalizatua erabil ditzakezu (behean erakusten den moduan). trafikoa desbideratzea──Trafikoaren bideratzea Txina kontinentalean Baidu Cloud `CDN` , nazioarteko trafikoa cloudflare doa.

![](https://p.3ti.site/1721119788.avif)

Inplementazioa optimizatzeko irtenbide hauek konplexuagoak dira eta etorkizunean kapitulu bereizietan sartuko dira.

### Domeinu-Izenen Birbideratze Orokorra

Webgune nagusi gisa webgune bat sortzeko `i18n.site` erabiltzen baduzu, normalean domeinu orokorreko birbideraketa konfiguratu behar duzu, hau da, `*.xxx.com` ( `www.xxx.com` barne) `xxx.com` sarbidea birbideratu behar duzu.

Baldintza hau Alibaba Cloud `CDN` `EdgeScript` -ren laguntzarekin lor daiteke ( [ingelesezko dokumentua](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Txinako dokumentua](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Gehitu domeinu-izena [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) en eta apuntatu domeinu-izena `*.xxx.com` `CNAME` Alibaba Cloud `CDN` en.

![](https://p.3ti.site/1721122000.avif)

Adibidez, goiko irudiko `*.i18n.site` domeinu-izenen birbideratze-konfigurazioa honako hau da:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Inplementatu Nginx-Ekin

Mesedez, gehitu hurrengoaren antzeko konfigurazioa nginx -ren `server` paragrafoan Mesedez, aldatu `/root/i18n/md/out/main/htm` zure proiektuaren `out/main/htm` bidera:

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## `github action` Etengabeko Integrazioan Oinarrituta

Hona jo dezakezu zure `github action` konfiguratzeko:

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

Konfigurazioan ikus daitekeenez, lan-fluxu hau `main` adarra eta `dist` adarra bultzatzean abiarazten da.

Lan-fluxuak adar-izenari dagokion konfigurazio-fitxategia erabiliko du dokumentua argitaratzeko. Hemen, `.i18n/htm/main.yml` eta `.i18n/htm/dist.yml` erabiliko dira argitalpen-konfigurazio gisa.

Dokumentuak kaleratzeko prozesurako praktika onak hauek gomendatzen ditugu:

Aldaketak `main` adarrera bultzatzen direnean, dokumentua aurrebista geltokira eraiki eta zabaltzeko abiarazten da (aurrebista geltokia eskuragarri dago [github page](//pages.github.com) ).

Aurrebista gunean dokumentua zuzena dela baieztatu ondoren, kodea batu eta `dist` adarrera eramango da, eta eraikuntza eta hedapen ofiziala sarean jarriko dira.

Jakina, aurreko prozesua ezartzeak konfigurazio gehiago idaztea eskatzen du.

[github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) proiektua jo dezakezu lan-fluxua egiteko.

Konfigurazioan `secrets.I18N_SITE_TOKEN` eta `secrets.NPM_TOKEN` aldagai sekretuak konfiguratzea eskatzen dizute kodearen oinarrian.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` `npm` argitalpen-tokena da Bisitatu [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## Direktorioaren Egitura

### `public`

Webguneko fitxategi estatikoak, hala nola `favicon.ico` , `robots.txt` , etab.

Hemen ikono-fitxategiak rekin sor daitezke [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

`.i18n` direktorioaren azpian `i18n.site` konfigurazio-fitxategiak, itzulpen-cachea eta abar daude. Ikus hurrengo kapitulua ["Konfigurazioa"](/i18n.site/conf) xehetasunetarako.

### `en`

Jatorri-hizkuntzaren direktorioa, `fromTo` `en` `.i18n/conf.yml` konfigurazio fitxategiari dagokiona

```yaml
i18n:
  fromTo:
    en: zh
```

Mesedez, ikusi itzulpenaren konfigurazioa [i18](/i18/use)