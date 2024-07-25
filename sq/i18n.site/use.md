# Instaloni &

## Shenja E Konfigurimit

`i18n.site` `i18` [`i18`](/i18/use)

## Instaloni

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Projekt Demo

Le të fillojmë me një projekt demo dhe të mësojmë se si ta përdorim `i18n.site`

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

Emri i drejtorisë së klonit bazë të kodit duhet të jetë `md` për të lehtësuar pamjen paraprake lokale me `docker` `demo.i18n.site`

### Përkthejnë

Fillimisht, futni `md` dhe ekzekutoni `i18n.site` , i cili do të përkthejë `en` në `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Pas ekzekutimit, skedarët e përkthimit dhe cache `git add . ` `md` do të krijohen.

### Pamje Paraprake Lokale

Instaloni dhe `docker` ( `MAC` rekomandojnë përdorimin e [orbstack](https://orbstack.dev) si kohëzgjatje prej `docker` ).

Më pas [https://127.0.0.1](https://127.0.0.1) futni `./up.sh` `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Postoni Përmbajtje

`i18n.site` një arkitekturë [aplikacioni me një faqe](https://developer.mozilla.org/docs/Glossary/SPA) dhe faqja hyrëse e faqes në internet dhe përmbajtja e sajtit vendosen në mënyrë të pavarur.

Pas ekzekutimit të përkthimit të mësipërm, drejtoritë `htm` dhe `v` do të krijohen në drejtorinë `md/out/dev`

Këtu, `dev` tregon se është ndërtuar në bazë të skedarit `.i18n/htm/dev.yml` .

Nën : `dev`

Nën drejtorinë `htm` faqja hyrëse e faqes në internet.

`v` përmban përmbajtjen e faqes së internetit me numrin e versionit.

Pamja paraprake lokale do të kopjojë të gjithë skedarët në drejtorinë `out/dev/v/0.1.0`

Për lëshimin zyrtar, skedarët e ndryshuar do të kopjohen në drejtorinë e re të numrave të versionit.

#### Përdorni -c Për Të Specifikuar Skedarin E Konfigurimit

Skedarët e ndryshëm të konfigurimit do të krijojnë drejtoritë përkatëse nën drejtorinë `out`

Për shembull, `.i18n/htm/ol.yml` do të krijojë një drejtori `out/ol` .

`dev.yml` dhe `ol.yml` janë konfigurimet e paracaktuara.

`dev` është shkurtesa e `development` , e cila përfaqëson mjedisin e zhvillimit, përdoret për pamjen paraprake lokale dhe është gjithashtu skedari i konfigurimit të paracaktuar.
`ol` është shkurtesa e `online` , e cila përfaqëson mjedisin online, përdoret për lëshimin zyrtar dhe është gjithashtu skedari i konfigurimit të paracaktuar kur publikohet në `npm` duke përdorur parametrin e linjës së komandës `-n` .

Ju gjithashtu mund të krijoni skedarë të tjerë të konfigurimit. Përdorni `--htm_conf`

për shembull:
```
i18n.site --htm_conf yourConfig --save
```

`--save` tregon numrin e versionit të lëshimit të përditësimit.

#### <a rel=id href="#npm" id="npm"></a> Publikoni përmbajtjen në npmjs.com

Publikimi [i](/i18n.site/feature#ha) përmbajtjes në [npmjs.com](//npmjs.com)

##### npm login &

Instalo `nodejs` përdor `npm login` për t'u identifikuar.

Ndrysho `md/.i18n/htm/ol.yml` ndryshoje `i18n.site` në `v: //unpkg.com/i18n.site` në emrin tënd `npm` emri i paketës.

Thjesht përdorni emrin e paketës së pabanuar në [npmjs.com](//npmjs.com)

Kur publikoni `i18n.site` bazë të `/.v` `npm` , **sigurohuni që të përdorni `//unpkg.com/`** si prefiks të vlerës `v:` .

Ekzekutoni `i18n.site --npm` ose `i18n.site -n` në drejtorinë `md`

Nëse përdorni një mjedis integrimi të vazhdueshëm për të publikuar, nuk ka nevojë ta instaloni `nodejs` Thjesht kopjoni `~/.npmrc` e regjistruar dhe të publikuar në mjedis

Nëse ndryshoni emrin e paketës në `v:` `ol.yml` , ju lutemi **sigurohuni që së pari të fshini `.i18n/v/ol`** dhe më pas ta publikoni.

##### Proxy Server I Publikuar Nga npm

Nëse përdoruesit në Kinën kontinentale hasin probleme në rrjet dhe `https_proxy` janë në gjendje të publikojnë paketën `npm`

Duke supozuar se porti i serverit tuaj proxy është `7890` mund të shkruani:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Përmbajtje E Vetë-Strehuar

Nëse dëshironi të strehoni vetë përmbajtjen, së pari, `md/.i18n/htm/ol.yml` dhe ndryshoni `v: //unpkg.com/i18n.site` në prefiksin tuaj URL, si p.sh. `v: //i18n-v.xxx.com` .

Futni direktorinë `md`

```
i18n.site --htm_conf ol --save
```

ose shkurtim

```
i18n.site -c ol -s
```

Më pas, konfiguroni përmbajtjen në `v:` `md/out/ol/v`

Së fundi, **konfiguroni kohën e memories së shtegut që përfundon `/.v` `1s`** , përndryshe përmbajtja e sapo lëshuar nuk mund të aksesohet menjëherë.

Koha e cache-it për shtigjet e tjera mund të vendoset në një vit ose më shumë për të reduktuar kërkesat e panevojshme.

##### Prisni Përmbajtjen Në s3

Për të vetë-strehuar përmbajtjen, përveç përdorimit të serverit tuaj, një tjetër opsion i zakonshëm është përdorimi `CDN` `S3` +

Ju mund të `S3` `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Mos harroni të konfiguroni `CDN` në mënyrë që koha e cache-it të shtegut që përfundon me `/.v` të jetë `1s` , përndryshe nuk do të mund të përdorni menjëherë përmbajtjen e sapo lëshuar.

### Publikoni Faqen E Internetit

Faqja e internetit mund të vendoset kudo [github page](https://pages.github.com) dhe [cloudflare page](https://pages.cloudflare.com) janë zgjedhje të mira.

Për shkak se faqja e internetit adopton arkitekturën e [një aplikacioni me një faqe](https://developer.mozilla.org/docs/Glossary/SPA) , mos harroni të rishkruani shtegun e URL-së që nuk `. ` në `index.html` .

Faqja e hyrjes në uebfaqe duhet të vendoset vetëm një herë dhe nuk ka nevojë të rishpërndahet faqja e hyrjes në uebsajt për përditësimet e mëvonshme të përmbajtjes.

#### Vendoseni Në Faqen github

Së pari [klikoni github për të krijuar një organizatë](https://github.com/account/organizations/new?plan=free) Emri i mëposhtëm i organizatës është `i18n-demo`

Më pas krijoni një depo nën këtë `i18n-demo.github.io` (Ju lutemi zëvendësoni `i18n-demo` me emrin e organizatës që keni krijuar):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Kur publikoni përmbajtjen në artikullin e mëparshëm : ajo është krijuar `out/ol/htm`

```
ln -s index.html 404.html
```


Sepse `github page` nuk mbështet rishkrimin e shtegut të URL-së, kështu që përdoret `404.html` .

Pastaj ekzekutoni komandën `i18n-demo/i18n-demo.github.io.git` mëposhtme : drejtorinë `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Pasi të keni shtypur kodin, prisni që vendosja e `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Për faqen demo, shikoni:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Vendoseni Në Faqen cloudflare

Në krahasim `github page` [cloudflare page](//pages.cloudflare.com)

`cloudflare page` zakonisht bazohet në vendosjen e `github page` më sipër.

Krijo një projekt dhe lidh magazinën e mësipërme `i18n-demo.github.io`

Procesi tregohet në figurën më poshtë:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Ju lutemi `Add Account` për të dhënë akses në `i18n-demo` organizatë.

Nëse e keni lidhur magazinën e një organizate tjetër, mund t'ju duhet `Add Account` klikoni dy herë për ta autorizuar atë dy herë përpara se të shfaqet organizata e re.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Më pas zgjidhni `i18n-demo.github.io` , më pas klikoni `Begin setup` , dhe përdorni vlerat e paracaktuara për hapat pasues.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Pas lidhjes për herë të parë, duhet të prisni disa minuta përpara se të mund ta përdorni.

Pas vendosjes, mund të lidhni një emër domaini me porosi.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Pasi të lidhni emrin e personalizuar të domenit, ju lutemi shkoni te emri i domenit për të konfiguruar rishkrimin e rrugës së aplikacionit me një faqe, siç tregohet më poshtë:

<img alt="" src="https://p.3ti.site/1721119320.avif">

`i18n.site` në foton e mësipërme janë si më poshtë.

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

Përveç kësaj, ju lutemi konfiguroni rregullat e cache-it, siç tregohet më poshtë, dhe vendosni kohëzgjatjen e cache-së në një muaj.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Ju lutemi ndryshoni emrin e domenit që përputhet në hapin e dytë në figurën e mësipërme në emrin e domenit që keni lidhur.

#### Optimizimi I Vendosjes Së Faqes Në Internet Në Kinën Kontinentale

Nëse dëshironi të merrni një performancë më të mirë të aksesueshmërisë në mjedisin e rrjetit të Kinës kontinentale, ju lutemi [regjistroni fillimisht një emër domaini](//beian.aliyun.com) .

`out/ol/htm` , përdorni ruajtjen e objekteve të shitësve të cloud në `CDN` kontinentale +

Ju mund të përdorni llogaritjen e skajeve për të rishkruar shtegun për t'u përshtatur me aplikacionet me një faqe, të tilla si [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Mund të konfigurohet kështu:

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

Për `A` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` `CNAME` `MX`

Për më tepër, për shkak se tarifat e trafikut jashtë shtetit të shitësve të reve kompjuterike në territorin e Kinës janë relativisht të shtrenjta, nëse doni të optimizoni kostot, mund të përdorni [rezolucionin gjeografik falas të Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) dhe emrin e personalizuar të domenit të [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (siç tregohet më poshtë). devijimi i trafikut──Trafiku në kontinentin e Kinës Baidu Cloud `CDN` trafiku ndërkombëtar shkon cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Këto zgjidhje të optimizimit të vendosjes janë më komplekse dhe do të prezantohen në kapituj të veçantë në të ardhmen.

#### Ridrejtimi Gjenerik I Emrit Të Domenit

`www.xxx.com` `*.xxx.com` `xxx.com` `i18n.site`

Kjo kërkesë mund të arrihet me ndihmën e Alibaba Cloud `CDN` it `EdgeScript` ( [dokument anglisht](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [dokument kinez](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Shtoni një emër domeni në [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) dhe drejtojeni `*.xxx.com` e domenit në `CNAME` të Alibaba Cloud `CDN` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Për shembull, konfigurimi i ridrejtimit të `*.i18n.site` të pan-domainit në figurën e mësipërme është si më poshtë:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Vendoseni Me nginx

Ju lutemi shtoni një konfigurim të ngjashëm me atë të mëposhtëm në `server` nginx ku `/root/i18n/md/out/ol/htm` ju lutemi ndryshoni atë në shtegun e projektit tuaj `out/ol/htm` :

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

#### Publike

Skedarët statikë të faqes së internetit, si `favicon.ico` `robots.txt` , etj.

Skedarët e ikonave këtu mund të krijohen me [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### Sq

Drejtoria e gjuhës burimore, që korrespondon `.i18n/conf.yml` `fromTo` `en` në skedarin e konfigurimit

```yaml
i18n:
  fromTo:
    en: zh
```

Ju lutemi referojuni konfigurimit të përkthimit [i18](/i18/use)

