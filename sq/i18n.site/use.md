# Instaloni &

## Instaloni

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Shenja E Konfigurimit

`i18n.site` ka një mjet përkthimi të integruar `i18` Ju lutemi [, klikoni këtu për t'iu referuar dokumentit `i18` për të konfiguruar kodin e hyrjes](/i18/use) .

## Projekt Demo

Le të fillojmë me një projekt demo për të mësuar se si të përdorim `i18n.site` .

Ne fillimisht klonojmë depo demo dhe ekzekutojmë komandën si më poshtë:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Përdoruesit në Kinën kontinentale mund të:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Emri i drejtorisë së klonit bazë të kodit `demo.i18n.site` duhet të jetë `md` për të lehtësuar pamjen paraprake lokale me `docker` .

### Përkthejnë

Fillimisht, futni direktorinë `md` dhe ekzekutoni `i18n.site` , i cili do të përkthejë `en` në `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Pas ekzekutimit `git add . ` skedarët `md` përkthimit dhe cache-it do të krijohen.

### Pamje Paraprake Lokale

Instaloni dhe filloni `docker` ( `MAC` përdorues rekomandon përdorimin e [orbstack](https://orbstack.dev) si kohëzgjatjeje për `docker` ).

Më pas, futni direktorinë `docker` dhe ekzekutoni `./up.sh` , dhe më pas [https://127.0.0.1](https://127.0.0.1) për të parë në nivel lokal.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Postoni Përmbajtje

`i18n.site` miraton një arkitekturë [aplikacioni me një faqe](https://developer.mozilla.org/docs/Glossary/SPA) dhe faqja hyrëse e faqes në internet dhe përmbajtja e sajtit vendosen në mënyrë të pavarur.

Pas ekzekutimit të përkthimit të mësipërm, drejtoritë `htm` dhe `v` do të gjenerohen nën drejtorinë `md/out/dev` .

Këtu, `dev` do të thotë se është ndërtuar bazuar në skedarin e konfigurimit `.i18n/htm/dev.yml` .

Drejtoria `dev` :

Drejtoria `htm` është faqja hyrëse e faqes në internet.

Drejtoria `v` përmban përmbajtje të faqes së internetit me numrat e versioneve.

Vështrimi paraprak lokal nuk kujdeset për numrin e versionit dhe do të kopjojë të gjithë skedarët në drejtorinë `out/dev/v/0.1.0` .

Për lëshimin zyrtar, skedarët e ndryshuar do të kopjohen në drejtorinë e re të numrave të versionit.

#### Specifikoni Skedarin E Konfigurimit Me `-c`

Skedarët e ndryshëm të konfigurimit do të krijojnë drejtoritë përkatëse në drejtorinë `out` .

Për shembull, `.i18n/htm/ol.yml` do të krijojë drejtorinë `out/ol` .

`dev.yml` dhe `ol.yml` janë konfigurimet e paracaktuara.

`dev` është shkurtimi i `development` , që tregon mjedisin e zhvillimit, i përdorur për pamjen paraprake lokale, dhe është gjithashtu skedari i parazgjedhur i konfigurimit.
`ol` është shkurtimi i `online` , që tregon mjedisin online, i cili përdoret për lëshimin zyrtar. Është gjithashtu skedari i konfigurimit të paracaktuar kur përdoren parametrat e linjës së komandës `-n` deri në `npm` për lëshimin.

Ju gjithashtu mund të krijoni skedarë të tjerë të konfigurimit Përdorni `--htm_conf` në vijën e komandës për të specifikuar emrin e skedarit të konfigurimit që do të përdorni:

për shembull:
```
i18n.site --htm_conf yourConfig --save
```

Këtu `--save` përfaqëson numrin e versionit të lëshimit të përditësimit.

#### <a rel=id href="#npm" id="npm"></a> Publikoni përmbajtjen në npmjs.com

Publikimi i [përmbajtjes](/i18n.site/feature#ha) në [npmjs.com](//npmjs.com)

##### npm login &

Instaloni `nodejs` , hyni me `npm login` .

Ndryshoni `md/.i18n/htm/ol.yml` dhe ndryshoni vlerën e [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) `YOUR_NPM_PACKAGE` [npmjs.com](//npmjs.com) emrin tuaj të paketës `npm` .

Pastaj modifikoni `md/.i18n/htm/ol.package.json`

Ekzekutoni `i18n.site --npm` ose `i18n.site -n` në drejtorinë `md` për ta përkthyer dhe publikuar.

Nëse përdorni një mjedis integrimi të vazhdueshëm për të publikuar, nuk ka nevojë të instaloni `nodejs` , thjesht kopjoni lejen e hyrjes dhe publikimit `~/.npmrc` në mjedis.

Nëse modifikoni emrin e paketës `v:` në `ol.yml` , ju lutemi **sigurohuni që së pari të fshini `.i18n/v/ol`** dhe më pas ta publikoni.

##### Proxy Server I Publikuar Nga npm

Nëse përdoruesit në Kinën kontinentale hasin probleme në rrjet dhe nuk janë në gjendje të publikojnë `npm` paketa, ata mund të vendosin variablin e mjedisit `https_proxy` për të konfiguruar serverin proxy.

Duke supozuar se porti i serverit tuaj proxy është `7890` , mund të shkruani:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Përmbajtje E Vetë-Strehuar

Nëse dëshironi të strehoni vetë përmbajtjen, së pari modifikoni `md/.i18n/htm/ol.yml` dhe ndryshoni `v: //unpkg.com/i18n.site` në prefiksin tuaj të URL-së, si p.sh. `v: //i18n-v.xxx.com` .

Futni direktorinë `md` dhe ekzekutoni

```
i18n.site --htm_conf ol --save
```

ose shkurtim

```
i18n.site -c ol -s
```

Më pas, konfiguroni përmbajtjen në drejtorinë `md/out/ol/v` në shtegun e prefiksit të URL-së të vendosur në `v:` .

Së fundi, **konfiguroni kohën e cache të shtegut që përfundon me `/.v` deri në `1s`** , përndryshe përmbajtja e sapo lëshuar nuk mund të aksesohet menjëherë.

Koha e cache-it për shtigjet e tjera mund të vendoset në një vit ose më shumë për të reduktuar kërkesat e panevojshme.

##### Prisni Përmbajtjen Në s3

Për të vetë-strehuar përmbajtjen, përveç përdorimit të serverit tuaj, një opsion tjetër i `CDN` është përdorimi `S3` +

Ju mund të përdorni [rclone](https://rclone.org) për t'u identifikuar në serverin `S3` , më pas referojuni dhe modifikoni skriptin e mëposhtëm dhe kopjoni vetëm ndryshimet shtesë në `S3` për çdo lëshim.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Mos harroni të konfiguroni `CDN` në mënyrë që koha e cache-it të shtegut që përfundon me `/.v` të jetë `1s` , përndryshe përmbajtja e sapo lëshuar nuk mund të aksesohet menjëherë.

### Publikoni Faqen E Internetit

Faqja e internetit mund të vendoset kudo, [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) janë zgjedhje të mira.

Për shkak se faqja e internetit përdor një arkitekturë [aplikacioni me një faqe](https://developer.mozilla.org/docs/Glossary/SPA) , mos harroni të rishkruani shtigjet e URL-së që nuk përmbajnë `. ` deri në `index.html` .

Faqja e hyrjes në uebfaqe duhet të vendoset vetëm një herë dhe nuk ka nevojë të rishpërndahet faqja e hyrjes në uebsajt për përditësimet e mëvonshme të përmbajtjes.

#### Vendoseni Në Faqen github

Së pari [klikoni github për të krijuar një organizatë](https://github.com/account/organizations/new?plan=free) Emri i mëposhtëm i organizatës është `i18n-demo` si shembull.

Më pas krijoni magazinë `i18n-demo.github.io` nën këtë organizatë (ju lutemi zëvendësoni `i18n-demo` me emrin e organizatës që keni krijuar):

![](https://p.3ti.site/1721098657.avif)

Kur publikoni përmbajtjen në artikullin e : , `out/ol/htm` është krijuar.

```
ln -s index.html 404.html
```


Për shkak se `github page` nuk mbështet rishkrimin e shtegut të URL-së, në vend të kësaj përdoret `404.html` .

Pastaj ekzekutoni komandën e mëposhtme në drejtorinë `htm` (mos harroni të zëvendësoni `i18n-demo/i18n-demo.github.io.git` me adresën tuaj të magazinës) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Pasi të keni shtypur kodin, prisni që vendosja e `github page` të funksionojë me sukses (siç tregohet më poshtë) përpara se të mund ta përdorni.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Për faqen demo, shikoni:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Vendoseni Në Faqen cloudflare

[cloudflare page](//pages.cloudflare.com) me `github page` , ai siguron rishkrimin e rrugës dhe është më miqësor me Kinën kontinentale dhe rekomandohet të përdoret.

Vendosja e `cloudflare page` zakonisht bazohet në vendosjen e `github page` më sipër.

Krijo një projekt dhe lidh magazinë `i18n-demo.github.io` më sipër.

Procesi tregohet në figurën më poshtë:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Ju lutemi klikoni `Add Account` për t'i dhënë akses organizatës `i18n-demo` .

Nëse keni lidhur magazinën e një organizate tjetër, mund t'ju duhet të klikoni `Add Account` dy herë për të autorizuar dy herë përpara se të shfaqet organizata e re.

![](https://p.3ti.site/1721118306.avif)

Më pas, zgjidhni magazinë `i18n-demo.github.io` , më pas klikoni `Begin setup` dhe përdorni vlerat e paracaktuara për hapat pasues.

![](https://p.3ti.site/1721118490.avif)

Pas lidhjes për herë të parë, duhet të prisni disa minuta përpara se të mund ta përdorni.

Pas vendosjes, mund të lidhni një emër domaini me porosi.

![](https://p.3ti.site/1721119459.avif)

Pasi të lidhni emrin e personalizuar të domenit, ju lutemi shkoni te emri i domenit për të konfiguruar rishkrimin e rrugës së aplikacionit me një faqe, siç tregohet më poshtë:

![](https://p.3ti.site/1721119320.avif)

Rregullat në foton e mësipërme janë `i18n.site` më poshtë.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Për më tepër, ju lutemi konfiguroni rregullat e cache-it, siç tregohet më poshtë, dhe vendosni kohëzgjatjen e cache në një muaj.

![](https://p.3ti.site/1721125111.avif)

Ju lutemi ndryshoni emrin e domenit që përputhet në hapin e dytë në figurën e mësipërme në emrin e domenit që keni lidhur.

#### Optimizimi I Vendosjes Së Faqes Në Internet Në Kinën Kontinentale

Nëse dëshironi të merrni një performancë më të mirë të aksesueshmërisë në mjedisin e rrjetit të Kinës kontinentale, ju lutemi [regjistroni fillimisht një emër domaini](//beian.aliyun.com) .

Më pas, përdorni `out/ol/htm` e objekteve të shitësve të cloud në Kinën kontinentale + Vendosni përmbajtjen e mëposhtme `CDN` .

Për shembull, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) mund të konfigurohet si kjo:

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
![](https://p.3ti.site/1721121273.avif)

Për shkak se rekordi `MX` dhe rekordi `CNAME` nuk mund të bashkëjetojnë, nëse dëshironi të merrni email me emra domeni në të njëjtën kohë, duhet të bashkëpunoni me [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) në nivelin `CNAME` në rekordin `A` .

Për më tepër, për shkak se tarifat e trafikut jashtë shtetit të shitësve të reve kompjuterike në territorin e Kinës janë relativisht të shtrenjta, nëse doni të optimizoni kostot, mund të përdorni [rezolucionin gjeografik falas të Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) dhe emrin e personalizuar të domenit [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (siç tregohet më poshtë). devijimi i trafikut──Trafiku në territorin e Kinës Baidu Cloud `CDN` , trafiku ndërkombëtar shkon cloudflare .

![](https://p.3ti.site/1721119788.avif)

Këto zgjidhje të optimizimit të vendosjes janë më komplekse dhe do të prezantohen në kapituj të veçantë në të ardhmen.

#### Ridrejtimi Gjenerik I Emrit Të Domenit

Nëse përdorni `i18n.site` për të gjeneruar një faqe interneti si uebsajtin tuaj kryesor, zakonisht duhet të konfiguroni ridrejtimin e pan-domainit, domethënë të ridrejtoni aksesin nga `*.xxx.com` (duke përfshirë `www.xxx.com` ) në `xxx.com` .

Kjo kërkesë mund të arrihet me ndihmën e Alibaba Cloud `CDN` `EdgeScript` ( [dokument anglisht](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [dokument kinez](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Shtoni emrin e domenit në [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) dhe vendosni emrin e domenit nga `*.xxx.com` `CNAME` në Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Për shembull, konfigurimi i ridrejtimit të emrit të pan-domainit prej `*.i18n.site` në foton e mësipërme është si më poshtë:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Vendoseni Me nginx

Ju lutemi shtoni një konfigurim të ngjashëm me atë të mëposhtëm në paragrafin `server` të nginx Ju lutemi ndryshoni `/root/i18n/md/out/ol/htm` në rrugën e projektit tuaj `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Struktura E Drejtorisë

#### `public`

Skedarët statikë të faqes së internetit, si `favicon.ico` , `robots.txt` , etj.

Skedarët e ikonave këtu mund të krijohen me [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Nën drejtorinë `.i18n` janë skedarët e konfigurimit, cache e përkthimit, etj. të `i18n.site` Shihni kapitullin tjetër ["Konfigurimi"](/i18n.site/conf) për detaje.

#### `en`

Drejtoria e gjuhës burimore, që korrespondon me skedarin e konfigurimit `en` nga `fromTo` në `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Ju lutemi referojuni konfigurimit të përkthimit [i18](/i18/use)