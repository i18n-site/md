# Nruab &

## Nruab

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Configuration Token

`i18n.site` muaj ib tug built-in `i18` txhais cov cuab yeej Thov [nyem qhov no mus rau `i18` daim ntawv los teeb tsa lub token nkag](/i18/use) .

## Demo Qhov Project

Cia peb pib nrog qhov project demo kom kawm paub siv `i18n.site` .

Peb thawj clone lub demo repository thiab khiav cov lus txib raws li hauv qab no:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Cov neeg siv hauv Suav teb loj tuaj yeem:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Cov npe ntawm cov npe ntawm `demo.i18n.site` code puag clone yuav tsum yog `md` los pab saib xyuas hauv zos nrog `docker` .

### Txhais

Ua ntej, nkag mus rau `md` directory thiab khiav `i18n.site` , uas yuav txhais `en` mus rau `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Tom qab ua haujlwm, kev txhais lus thiab cov ntaub ntawv cache yuav raug tsim, Thov nco ntsoov ntxiv lawv rau hauv qhov chaw khaws cia hauv `md` `git add . ` .

### Saib Ua Ntej Hauv Zos

Nruab thiab pib `docker` ( `MAC` tus neeg siv pom zoo siv [orbstack](https://orbstack.dev) raws li lub sijhawm ua haujlwm rau `docker` ).

Tom qab ntawd, nkag mus rau `docker` phau ntawv qhia thiab khiav `./up.sh` , thiab tom qab ntawd mus saib [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Tshaj Tawm Cov Ntsiab Lus

`i18n.site` txais yuav [ib nplooj ntawv thov](https://developer.mozilla.org/docs/Glossary/SPA) architecture, thiab lub vev xaib nkag thiab cov ntsiab lus hauv lub vev xaib raug xa tawm ntawm nws tus kheej.

Tom qab khiav cov lus txhais saum toj no, cov npe `htm` thiab `v` yuav raug tsim nyob rau hauv `md/out/dev` phau ntawv.

Ntawm no, `dev` txhais tau tias nws yog tsim los ntawm `.i18n/htm/dev.yml` configuration file.

`dev` npe :

Lub `htm` directory yog nplooj ntawv nkag lub vev xaib.

`v` phau ntawv teev npe muaj cov ntsiab lus hauv lub vev xaib nrog tus lej version.

Kev saib ua ntej hauv zos tsis quav ntsej txog tus lej version thiab yuav luam tag nrho cov ntaub ntawv mus rau `out/dev/v/0.1.0` phau ntawv.

Rau kev tso tawm, cov ntaub ntawv hloov pauv yuav raug theej mus rau cov npe tshiab version naj npawb.

#### Qhia Cov Ntaub Ntawv Configuration Nrog `-c`

Cov ntaub ntawv configuration sib txawv yuav tsim cov npe sib xws hauv `out` directory.

Piv txwv li, `.i18n/htm/ol.yml` yuav tsim cov `out/ol` directory.

`dev.yml` thiab `ol.yml` yog lub neej ntawd configurations.

`dev` yog cov ntawv luv ntawm `development` , qhia txog kev txhim kho ib puag ncig, siv rau kev saib ua ntej hauv zos, thiab tseem yog cov ntaub ntawv teeb tsa.
`ol` yog cov ntawv luv luv ntawm `online` , qhia qhov chaw hauv online, uas yog siv rau kev tso tawm nws kuj yog cov ntaub ntawv teeb tsa thaum siv cov kab hais kom ua `-n` txog `npm` tso tawm.

Koj tuaj yeem tsim lwm cov ntaub ntawv teeb tsa Siv `--htm_conf` ntawm kab lus hais kom qhia meej cov ntaub ntawv teeb tsa lub npe siv:

piv txwv:
```
i18n.site --htm_conf yourConfig --save
```

Ntawm no `--save` sawv cev rau qhov hloov tshiab tso tawm version naj npawb.

#### <a rel=id href="#npm" id="npm"></a> Tshaj tawm cov ntsiab lus rau npmjs.com

Kev tshaj tawm [cov](/i18n.site/feature#ha) ntsiab lus rau [npmjs.com](//npmjs.com)

##### npm login & Tawm

Nruab `nodejs` , nkag mus nrog `npm login` .

Kho kom raug `md/.i18n/htm/ol.yml` thiab hloov tus nqi ntawm [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) `YOUR_NPM_PACKAGE` raws li koj tus kheej lub npe `npm` pob lub [npmjs.com](//npmjs.com) yuav ua.

Tom qab ntawd hloov kho `md/.i18n/htm/ol.package.json`

Khiav `i18n.site --npm` lossis `i18n.site -n` hauv `md` phau ntawv txhais lus thiab tshaj tawm.

Yog tias koj siv ib puag ncig kev sib koom ua ke txuas ntxiv mus tshaj tawm, tsis tas yuav nruab `nodejs` , tsuas yog luam tawm cov ntawv nkag nkag thiab luam tawm kev tso cai `~/.npmrc` rau ib puag ncig.

Yog tias koj hloov kho lub npe pob ntawm `v:` hauv `ol.yml` , thov **nco ntsoov tshem tawm `.i18n/v/ol` ua ntej** thiab tom qab ntawd luam tawm.

##### Lub Npe Neeg Rau Zaub Mov Luam Tawm Los Ntawm npm

Yog tias cov neeg siv hauv Suav teb loj ntsib teeb meem hauv network thiab tsis tuaj yeem tshaj tawm `npm` pob khoom, lawv tuaj yeem teeb tsa qhov chaw hloov pauv `https_proxy` los teeb tsa lub npe server.

Piv txwv tias koj lub npe neeg rau zaub mov chaw nres nkoj yog `7890` , koj tuaj yeem sau:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Self-Hosted Cov Ntsiab Lus

Yog tias koj xav ua tus tswv tsev cov ntsiab lus, thawj zaug hloov `md/.i18n/htm/ol.yml` thiab hloov `v: //unpkg.com/i18n.site` rau koj qhov URL ua ntej, xws li `v: //i18n-v.xxx.com` .

Nkag mus rau `md` directory thiab khiav

```
i18n.site --htm_conf ol --save
```

los yog sau ntawv

```
i18n.site -c ol -s
```

Tom qab ntawd, teeb tsa cov ntsiab lus hauv `md/out/ol/v` phau ntawv teev npe mus rau qhov URL prefix kab teeb hauv `v:` .

Thaum kawg, **teeb tsa lub sijhawm cache ntawm txoj hauv kev xaus hauv `/.v` txog `1s`** , txwv tsis pub cov ntsiab lus tawm tshiab tuaj yeem nkag tsis tau tam sim ntawd.

Lub sijhawm cache rau lwm txoj hauv kev tuaj yeem teem caij rau ib xyoos lossis ntau dua los txo cov kev thov tsis tsim nyog.

##### Host Cov Ntsiab Lus Rau s3

Txhawm rau tswj hwm tus kheej cov ntsiab lus, ntxiv rau kev `CDN` koj tus kheej server, lwm qhov kev xaiv yog siv `S3` + .

Koj tuaj yeem siv [rclone](https://rclone.org) txhawm rau nkag mus rau `S3` tus neeg rau zaub mov, tom qab ntawd xa mus thiab hloov kho cov ntawv hauv qab no, thiab tsuas yog luam cov kev hloov pauv ntxiv rau `S3` rau txhua qhov kev tso tawm.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Nco ntsoov teeb tsa `CDN` kom lub sijhawm cache ntawm txoj kev xaus rau hauv `/.v` yog `1s` , txwv tsis pub cov ntsiab lus tawm tshiab tuaj yeem nkag tsis tau tam sim ntawd.

### Luam Tawm Lub Vev Xaib

Lub vev xaib tuaj yeem xa mus rau txhua qhov chaw [github page](https://pages.github.com) thiab [cloudflare page](https://pages.cloudflare.com) yog qhov kev xaiv zoo.

Vim tias lub vev xaib siv [ib nplooj ntawv thov](https://developer.mozilla.org/docs/Glossary/SPA) architecture, nco ntsoov rov sau URL txoj hauv kev uas tsis muaj `. ` txog `index.html` .

Nplooj ntawv nkag lub vev xaib tsuas yog yuav tsum tau xa tawm ib zaug, thiab tsis tas yuav rov siv lub vev xaib nkag mus rau cov ntsiab lus txuas ntxiv.

#### Deploy on github page

Ua ntej nyem qhov no `i18n-demo` [github tsim ib lub koom haum](https://github.com/account/organizations/new?plan=free) .

Tom qab ntawd tsim warehouse `i18n-demo.github.io` nyob rau hauv lub koom haum no (thov hloov `i18n-demo` nrog lub koom haum lub npe koj tsim):

![](https://p.3ti.site/1721098657.avif)

Thaum tshaj tawm cov ntsiab lus nyob rau hauv tsab xov xwm dhau los, `out/ol/htm` tau raug tsim tawm Thov sau cov npe no thiab khiav :

```
ln -s index.html 404.html
```


Vim `github page` tsis txhawb URL txoj kev rov sau dua, `404.html` yog siv hloov.

Tom qab ntawd khiav cov lus txib hauv qab no hauv `htm` phau ntawv teev npe (nco ntsoov hloov `i18n-demo/i18n-demo.github.io.git` nrog koj tus kheej chaw nyob hauv tsev khaws khoom) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Tom qab thawb tus lej, tos rau kev xa tawm ntawm `github page` kom ua tiav (raws li qhia hauv qab no) ua ntej koj tuaj yeem nkag mus rau nws.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Rau nplooj ntawv demo thov saib:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Deploy Ntawm cloudflare Nplooj

[cloudflare page](//pages.cloudflare.com) Piv nrog rau `github page` , nws muab txoj hauv kev rov sau dua thiab yog tus phooj ywg zoo dua rau Suav teb av loj thiab pom zoo siv.

Kev xa tawm ntawm `cloudflare page` feem ntau yog raws li kev xa tawm ntawm `github page` saum toj no.

Tsim ib qhov project thiab khi lub `i18n-demo.github.io` warehouse saum toj no.

Cov txheej txheem tau qhia hauv daim duab hauv qab no:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Thov nias `Add Account` kom tso cai nkag mus rau lub koom haum `i18n-demo` .

Yog tias koj tau khi lub warehouse ntawm lwm lub koom haum, koj yuav tau nyem `Add Account` ob zaug kom tso cai ob zaug ua ntej lub koom haum tshiab yuav tshwm sim.

![](https://p.3ti.site/1721118306.avif)

Tom ntej no, xaiv warehouse `i18n-demo.github.io` , ces nyem `Begin setup` , thiab siv lub neej ntawd qhov tseem ceeb rau cov kauj ruam tom ntej.

![](https://p.3ti.site/1721118490.avif)

Tom qab khi thawj zaug, koj yuav tsum tau tos ob peb feeb ua ntej koj tuaj yeem nkag mus rau nws.

Tom qab kev xa tawm, koj tuaj yeem khi lub npe sau npe.

![](https://p.3ti.site/1721119459.avif)

Tom qab khi txoj cai sau npe, thov mus rau lub npe sau npe los teeb tsa txoj kev rov sau dua ntawm daim ntawv thov ib nplooj ntawv, raws li qhia hauv qab no:

![](https://p.3ti.site/1721119320.avif)

Cov cai hauv daim duab saum toj no yog raws li hauv qab no Thov hloov `i18n.site` hauv thawj kab hauv qab no nrog lub npe sau koj khi.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Tsis tas li ntawd, thov teeb tsa cov cai cache, raws li qhia hauv qab no, thiab teeb tsa lub sijhawm cache rau ib hlis.

![](https://p.3ti.site/1721125111.avif)

Thov hloov lub npe sau npe sib piv nyob rau theem ob hauv daim duab saum toj no rau lub npe sau npe koj khi.

#### Optimizing Lub Vev Xaib Xa Tawm Hauv Suav Teb Av Loj

Yog tias koj xav kom tau txais kev nkag tau zoo dua hauv kev sib txuas hauv network ntawm Tuam Tshoj mainland, thov [sau npe sau npe](//beian.aliyun.com) ua ntej.

Tom qab `CDN` , siv cov khoom cia ntawm cov neeg `out/ol/htm` khoom huab hauv Suav teb av loj +

Koj tuaj yeem siv ntug kev suav sau rov qab txoj hauv kev los hloov mus rau ib nplooj ntawv thov Piv txwv li, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) tuaj yeem teeb tsa zoo li no:

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

Vim tias cov ntaub ntawv `MX` thiab cov ntaub ntawv `CNAME` tsis tuaj yeem sib koom ua ke, yog tias koj xav tau txais email npe tib lub sijhawm, koj yuav tsum koom tes nrog cov ntawv [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) rau qib `CNAME` rau hauv cov ntaub ntawv `A` .

Tsis tas li ntawd, vim tias cov nqi tsheb thauj mus los txawv teb chaws ntawm cov neeg muag khoom huab hauv Suav teb tseem pheej yig, yog tias koj xav kom zoo dua cov nqi, koj tuaj yeem siv [Huawei Cloud 's dawb daws teeb DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) tsheb khiav tawm ── Tsheb hauv av loj Tuam Tshoj Baidu Huab `CDN` , kev tsheb khiav thoob ntiaj teb mus cloudflare .

![](https://p.3ti.site/1721119788.avif)

Cov kev daws teeb meem kev ua kom zoo tshaj plaws no yog qhov nyuaj dua thiab yuav raug qhia hauv tshooj cais yav tom ntej.

#### Generic Sau Npe Redirection

Yog tias koj siv `i18n.site` los tsim lub vev xaib raws li koj lub vev xaib tseem ceeb, feem ntau koj yuav tsum tau teeb tsa pan-domain redirection, uas yog, hloov mus rau `*.xxx.com` (xws li `www.xxx.com` ) rau `xxx.com` .

Qhov kev xav tau no tuaj yeem ua tiav nrog kev pab los ntawm Alibaba Cloud `CDN` `EdgeScript` ( [English document](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinese document](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Ntxiv lub npe `*.xxx.com` `CNAME` `CDN` Alibaba [Huab CDN](https://cdn.console.aliyun.com/domain/list)

![](https://p.3ti.site/1721122000.avif)

Piv txwv li, pan-domain name redirection configuration ntawm `*.i18n.site` nyob rau hauv daim duab saum toj no yog raws li nram no:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Deploy Nrog nginx

Thov ntxiv ib qho kev `/root/i18n/md/out/ol/htm` tsa zoo ib yam li cov hauv qab no hauv `server` `out/ol/htm` lus ntawm nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Directory Structure

#### `public`

Cov ntaub ntawv zoo li qub ntawm lub vev xaib, xws li `favicon.ico` , `robots.txt` , thiab lwm yam.

Cov ntaub ntawv icon ntawm no tuaj yeem tsim nrog [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Nyob rau hauv lub `.i18n` directory yog cov configuration ntaub ntawv, translation cache, thiab lwm yam. ntawm `i18n.site` Saib tshooj tom ntej ["Configuration"](/i18n.site/conf) kom paub meej.

#### `en`

Cov npe ntawm cov lus qhia, sib xws rau `en` ntawm `fromTo` hauv `.i18n/conf.yml` cov ntaub ntawv teeb tsa

```yaml
i18n:
  fromTo:
    en: zh
```

Thov xa mus rau lub configuration ntawm kev txhais lus [i18](/i18/use)