# Instalatu &

## Konfigurazio-Tokena

`i18` itzulpen-tresna txertatuta dago `i18n.site` [egin klik hemen `i18` dokumentura sartzeko tokena konfiguratzeko](/i18/use) .

## Instalatu

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Proiektua

Has gaitezen demo proiektu batekin eta ikasi nola erabiltzen `i18n.site`

Lehenik demo biltegia klonatu eta komandoa honela exekutatzen dugu:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Txina kontinentaleko erabiltzaileek honako hauek egin ditzakete:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` -oinarriaren klonaren direktorio-izenak `md` izan behar du `docker` -rekin tokiko aurrebista errazteko.

### Itzuli

Lehenik eta behin, sartu `md` direktorioa eta exekutatu `i18n.site` , eta horrek `en` `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Exekutatu ondoren, itzulpen eta `git add . ` fitxategiak sortuko dira `md`

### Tokiko Aurrebista

`MAC` `docker` [orbstack](https://orbstack.dev) `docker`

Ondoren, sartu `docker` direktorioa eta exekutatu `./up.sh` , eta gero bisitatu [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Argitaratu Edukia

`i18n.site` [Orri bakarreko aplikazio-](https://developer.mozilla.org/docs/Glossary/SPA) arkitektura hartzen du, eta webgunearen sarrerako orria eta webgunearen edukia modu independentean zabaltzen dira.

Goiko itzulpena exekutatu ondoren, `htm` eta `v` direktorioak sortuko dira `md/out/dev`

Hemen, `.i18n/htm/dev.yml` fitxategian oinarrituta eraiki dela adierazten `dev` .

`dev` Edukien azpian :

`htm` azpian webgunearen sarrera orria dago.

`v` Direktorioak webgunearen edukia dauka bertsio-zenbakiarekin.

Aurrebista lokalak fitxategi guztiak karpetan kopiatuko ditu bertsio-zenbakia edozein dela `out/dev/v/0.1.0` .

Argitaratze ofizialerako, aldatutako fitxategiak bertsio-zenbaki berriaren direktoriora kopiatuko dira.

#### Erabili -c Konfigurazio Fitxategia Zehazteko

Konfigurazio fitxategi ezberdinek dagozkien direktorioak sortuko dituzte `out`

Adibidez `.i18n/htm/ol.yml` `out/ol` direktorioa sortuko du.

`dev.yml` eta `ol.yml` konfigurazio lehenetsiak dira.

`dev` `development` laburdura da, garapen-ingurunea adierazten duena, aurrebista lokalerako erabiltzen da eta konfigurazio fitxategi lehenetsia ere bada.
`online` laburdura `ol` , lineako ingurunea adierazten duena, kaleratze ofizialerako erabiltzen da, eta konfigurazio fitxategi lehenetsia ere bada `npm` `-n` komando lerroko parametroa erabiliz).

Beste konfigurazio fitxategiak ere sor ditzakezu komando `--htm_conf` lerroan konfigurazio-fitxategiaren izena zehazteko:

adibidez:
```
i18n.site --htm_conf yourConfig --save
```

Hemen `--save` -k eguneratzearen bertsio-zenbakia adierazten du.

#### <a rel=id href="#npm" id="npm"></a> Argitaratu edukia npmjs.com webgunean

[npmjs.com](//npmjs.com) argitaratzea da gomendatutako irtenbide lehenetsia (ikus [Frontend High Availability](/i18n.site/feature#ha) ).

##### npm login & Askatu

Instalatu `nodejs` erabili `npm login` saioa hasteko.

Editatu `md/.i18n/htm/ol.yml` aldatu `i18n.site` -n `v: //unpkg.com/i18n.site` zurea `npm` paketearen izena.

Erabili okupatu gabeko paketearen izena aukera ona da webgunearen domeinuaren izena [npmjs.com](//npmjs.com)

`npm` oinarritutako `i18n.site` , **ziurtatu `//unpkg.com/` erabili** `/.v` `v:` aurrizkia.

Exekutatu `i18n.site --npm` edo `i18n.site -n` `md` itzultzeko eta argitaratzeko.

Etengabeko integrazio- `~/.npmrc` bat erabiltzen baduzu argitaratzeko, ez da instalatu beharrik `nodejs`

`ol.yml` `v:` paketearen izena aldatzen baduzu, mesedez **, ziurtatu `.i18n/v/ol` ezabatzen duzula** eta gero argitaratu.

##### Npm-K Argitaratutako Proxy Zerbitzaria

Txina kontinentaleko erabiltzaileek sareko arazoak aurkitzen badituzte eta ezin badute paketea `npm` , `https_proxy` ingurune-aldagaia ezar dezakete proxy zerbitzaria konfiguratzeko.

Zure proxy zerbitzariaren ataka `7890` idatzi dezakezu:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Norberak Ostatutako Edukia

Edukia auto-ostatatu nahi baduzu, lehenik eta behin, `md/.i18n/htm/ol.yml` eta `v: //unpkg.com/i18n.site` zure URL aurrizkiarekin, adibidez, `v: //i18n-v.xxx.com` .

Sartu `md` direktorioa eta exekutatu

```
i18n.site --htm_conf ol --save
```

edo laburdura

```
i18n.site -c ol -s
```

Ondoren, konfiguratu `md/out/ol/v` direktorioko edukia `v:` -n ezarritako URL-aurrizkiaren bidearekin.

Azkenik, **konfiguratu `1s` -rekin amaitzen `/.v` bidearen cache-denbora** , bestela kaleratu berri den edukia ezin izango da berehala atzitu.

Beste bide batzuen cache-denbora urtebete edo gehiago ezar daiteke alferrikako eskaerak murrizteko.

##### Ostatu Edukia S3-N

Edukia bere burua ostatatzeko, zure `CDN` erabiltzeaz gain, beste aukera arrunt bat erabiltzea + `S3`

Sartu [rclone](https://rclone.org) zerbitzaria erabil dezakezu `S3` ondoren beheko script-a ikusi eta aldatu, eta kopiatu gehikuntza-aldaketak `S3` argitaratzen dituzun bakoitzean.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Gogoratu `CDN` beraz, `/.v` -z amaitzen den bidearen cache-denbora `1s` izan dadin, bestela ezingo duzu berehala argitaratu berri den edukira sartu.

### Webgunea Argitaratu

Webgunea edozein lekutan zabaldu daiteke [github page](https://pages.github.com) eta [cloudflare page](https://pages.cloudflare.com) aukera onak dira.

Webguneak [orrialde bakarreko aplikazio baten](https://developer.mozilla.org/docs/Glossary/SPA) arkitektura hartzen duelako, gogoratu `index.html` ez duen URL bidea berridatzi behar `. ` .

Webgunearen sarrera orria behin bakarrik zabaldu behar da, eta ez dago webgunearen sarrera orria berriro zabaldu beharrik ondorengo edukien eguneratzeetarako.

#### Inplementatu github Orrian

Lehenik eta behin `i18n-demo` [egin klik github erakunde bat sortzeko](https://github.com/account/organizations/new?plan=free) .

Ondoren, sortu biltegi bat erakunde honen azpian `i18n-demo.github.io` mesedez, ordezkatu `i18n-demo` sortu duzun erakundearen izenarekin):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Aurreko artikuluan edukia argitaratzean, sortu da Mesedez `out/ol/htm` sartu direktorio honetan eta exekutatu :

```
ln -s index.html 404.html
```


URL bideen berridazketa onartzen ez `github page` , `404.html` erabiltzen da horren ordez.

Ondoren, exekutatu komando hau `htm` direktorioa (gogoratu `i18n-demo/i18n-demo.github.io.git` ordez zure biltegiko helbidearekin :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Kodea bultzatu ondoren, itxaron `github page` -ren inplementazioa behar bezala exekutatu arte (behean agertzen den moduan), eta gero sar zaitezke.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Demo orria ikusteko, ikusi:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Inplementatu cloudflare Orrian

[cloudflare page](//pages.cloudflare.com) `github page` alderatuta, bideen berridazketa eskaintzen du eta errespetatzen da Txina kontinentalarekin eta erabilerrazagoa da.

`cloudflare page` Inplementazioa goiko `github page` hedapenean oinarritzen da normalean.

Sortu proiektu bat eta lotu `i18n-demo.github.io` biltegia.

Prozesua beheko irudian ageri da:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Mesedez `Add Account` egin klik `i18n-demo` sarbidea emateko.

Beste erakunde bateko biltegia lotu baduzu, baliteke bi aldiz sakatu behar `Add Account` hura baimentzeko, erakunde berria erakutsi aurretik.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Ondoren `i18n-demo.github.io` Biltegia, egin klik `Begin setup` eta erabili balio lehenetsiak hurrengo urratsetarako.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Lehen aldiz lotu ondoren, minutu batzuk itxaron behar dituzu bertara sartzeko.

Inplementatu ondoren, domeinu-izen pertsonalizatu bat lotu dezakezu.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Domeinu-izen pertsonalizatua lotu ondoren, joan domeinu-izenera orrialde bakarreko aplikazioaren bide-berridazketa konfiguratzeko, behean erakusten den moduan:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Goiko irudian dauden arauak honako hauek dira `i18n.site`

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

Horrez gain, mesedez, konfiguratu cache-arauak, behean erakusten den moduan, eta ezarri cachearen iraupena hilabete batean.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Mesedez, aldatu goiko irudiko bigarren urratsean bat datorren domeinu-izena lotu duzun domeinu-izenarekin.

#### Webgunearen Hedapena Optimizatzea Txina Kontinentalean

Txina kontinentaleko sare-ingurunean irisgarritasun-errendimendu hobea lortu nahi baduzu, [erregistratu lehenik domeinu-izen bat](//beian.aliyun.com) .

Ondoren, erabili `out/ol/htm` saltzaileen biltegiratzea `CDN` kontinentalean +

Edge computing erabil dezakezu bidea orri bakarreko aplikazioetara egokitzeko, hala nola [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Honela konfigura daiteke:

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
}
r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})
})
```
<img alt="" src="https://p.3ti.site/1721121273.avif">

`MX` eta `CNAME` erregistroak ezin direlako elkarrekin egon, domeinu-izenen mezu elektronikoak aldi berean jaso nahi badituzu, `CNAME` -en `A` erregistroa) berdindu behar duzu script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) arekin elkarlanean.

Gainera, Txina kontinentaleko hodei saltzaileen atzerriko trafiko-kostuak nahiko garestiak direnez, kostuak optimizatu nahi badituzu, [Huawei Cloud DNS en doako bereizmen geografikoa](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) eta [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) domeinu-izen pertsonalizatua erabil ditzakezu (behean erakusten den moduan). trafikoa desbideratzea──Trafikoa Txina kontinentalean Baidu Cloud `CDN` nazioarteko trafikoa cloudflare doa.

<img alt="" src="https://p.3ti.site/1721119788.avif">

Inplementazioa optimizatzeko irtenbide hauek konplexuagoak dira eta etorkizunean kapitulu bereizietan sartuko dira.

#### Domeinu-Izenen Birbideratze Orokorra

Webgune bat sortzeko zure webgune nagusi gisa erabiltzen `i18n.site` , normalean domeinuen birbideraketa konfiguratu behar duzu, hau da, `*.xxx.com` ( `www.xxx.com` barne) sarbidea `xxx.com` .

Baldintza hau Alibaba Cloud `CDN` en `EdgeScript` -ren laguntzarekin lor daiteke ( [ingelesezko dokumentua](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Txinako dokumentua](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Gehitu domeinu-izen bat [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) eta apuntatu `*.xxx.com` -izena Alibaba Cloud `CDN` -ren `CNAME` -ra.

<img alt="" src="https://p.3ti.site/1721122000.avif">

Adibidez, goiko irudiko domeinu-izenen birbideratze-konfigurazioa `*.i18n.site` da:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Inplementatu Nginx-Ekin

Mesedez , gehitu `server` antzeko konfigurazioa nginx non `/root/i18n/md/out/ol/htm` mesedez aldatu zure proiektuaren `out/ol/htm` bidera :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Direktorioaren Egitura

#### Publiko

Webguneko fitxategi estatikoak, hala nola `favicon.ico` `robots.txt` , etab.

Hemen ikono-fitxategiak rekin sor daitezke [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` azpian `i18n.site` ren konfigurazio-fitxategiak, itzulpen-cachea, etab. Ikus hurrengo kapitulua ["Konfigurazioa"](/i18n.site/conf) xehetasunetarako.

#### Eu

Jatorri-hizkuntzaren direktorioa, konfigurazio fitxategiko `fromTo` `en` `.i18n/conf.yml` dagokiona

```yaml
i18n:
  fromTo:
    en: zh
```

Mesedez, ikusi itzulpenaren konfigurazioa [i18](/i18/use)

