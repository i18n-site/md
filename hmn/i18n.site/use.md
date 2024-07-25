# Nruab &

## Configuration Token

`i18n.site` Cov cuab yeej txhais lus `i18` yog embedded, thov [nias ntawm no mus saib `i18` daim ntawv los teeb tsa lub token nkag](/i18/use) .

## Nruab

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Qhov Project

Cia peb pib nrog qhov project demo thiab kawm paub siv `i18n.site`

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

`demo.i18n.site` Daim ntawv teev npe ntawm cov code puag clone yuav tsum yog `md` los pab txhawb kev saib ua ntej hauv zos nrog `docker` .

### Txhais

Ua ntej, nkag mus `en` hauv `zh` ntawv teev `i18n.site` `md`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Tom qab ua haujlwm, kev txhais lus thiab cov ntaub ntawv cache yuav raug tsim, Thov nco ntsoov ntxiv rau hauv qhov chaw khaws cia `git add . ` hauv phau ntawv qhia `md`

### Saib Ua Ntej Hauv Zos

Nruab thiab pib `docker` ( `MAC` pom zoo siv [orbstack](https://orbstack.dev) raws li lub sijhawm ua haujlwm ntawm `docker` ).

Tom qab ntawd, nkag mus rau cov npe `docker` thiab khiav `./up.sh` , thiab tom qab ntawd mus saib [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Tshaj Tawm Cov Ntsiab Lus

`i18n.site` Txais yuav ib [nplooj ntawv thov](https://developer.mozilla.org/docs/Glossary/SPA) architecture, thiab lub vev xaib nkag thiab cov ntsiab lus hauv lub vev xaib raug xa tawm ntawm nws tus kheej.

Tom qab khiav cov lus txhais saum toj no, `htm` thiab `v` cov npe yuav raug tsim tawm hauv phau ntawv qhia `md/out/dev`

Ntawm no, `dev` qhia tias nws yog tsim los ntawm `.i18n/htm/dev.yml` file.

Hauv : cov ntsiab lus `dev`

`htm` Hauv qab daim ntawv teev npe yog nplooj ntawv nkag lub vev xaib.

`v` Daim ntawv teev npe muaj cov ntsiab lus ntawm lub vev xaib nrog tus lej version.

Saib ua ntej hauv zos yuav luam tag nrho cov ntaub ntawv mus rau cov npe `out/dev/v/0.1.0`

Rau kev tso tawm, cov ntaub ntawv hloov pauv yuav raug theej mus rau tus lej tshiab ntawm phau ntawv teev npe.

#### Siv -c Kom Qhia Meej Cov Ntaub Ntawv Teeb Tsa

Cov ntaub ntawv teeb tsa sib txawv yuav tsim cov npe sib xws hauv qab cov npe `out`

Piv txwv li, `.i18n/htm/ol.yml` yuav tsim ib daim ntawv teev npe `out/ol` .

`dev.yml` thiab `ol.yml` yog cov kev teeb tsa ua ntej.

`dev` yog cov ntawv luv ntawm `development` , uas sawv cev rau ib puag ncig kev txhim kho, yog siv rau kev saib ua ntej hauv zos, thiab tseem yog cov ntaub ntawv teeb tsa.
`ol` `online` `-n` `npm`

Koj tuaj yeem tsim lwm cov ntaub ntawv teeb tsa Siv `--htm_conf`

piv txwv:
```
i18n.site --htm_conf yourConfig --save
```

Ntawm no `--save` qhia qhov hloov tshiab tso tawm tus lej.

#### <a rel=id href="#npm" id="npm"></a> Tshaj tawm cov ntsiab lus rau npmjs.com

Kev tshaj tawm [cov](/i18n.site/feature#ha) ntsiab lus rau [npmjs.com](//npmjs.com)

##### Tso npm login &

Nruab `nodejs` siv `npm login` nkag mus.

Kho kom raug `md/.i18n/htm/ol.yml` hloov `i18n.site` hauv `v: //unpkg.com/i18n.site` rau koj tus kheej `npm` pob npe.

Tsuas yog siv lub npe pob tsis muaj nyob rau ntawm [npmjs.com](//npmjs.com)

Thaum `i18n.site` tawm raws **`//unpkg.com/`** `/.v` `v:` `npm`

Khiav `i18n.site --npm` lossis `i18n.site -n` hauv `md` ntawv txhais lus thiab tshaj tawm.

Yog tias koj siv `~/.npmrc` puag ncig kev koom ua ke txuas ntxiv mus tshaj tawm, tsis tas yuav nruab nws `nodejs`

Yog tias koj hloov **`.i18n/v/ol`** lub npe pob hauv `v:` hauv `ol.yml`

##### Proxy Server Luam Tawm Los Ntawm npm

Yog tias cov neeg siv hauv Suav teb tseem ntsib teeb meem hauv network thiab tsis tuaj yeem tshaj tawm cov `https_proxy` `npm`

Piv txwv tias koj lub npe server chaw nres nkoj yog `7890` koj tuaj yeem sau:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Self-Hosted Cov Ntsiab Lus

Yog tias koj xav ua `v: //unpkg.com/i18n.site` tswv tsev cov ntsiab lus, ua ntej, `v: //i18n-v.xxx.com` `md/.i18n/htm/ol.yml`

Nkag mus rau hauv phau ntawv qhia `md`

```
i18n.site --htm_conf ol --save
```

los yog sau ntawv

```
i18n.site -c ol -s
```

Tom qab ntawd, teeb tsa cov ntsiab lus hauv `v:` ntawv teev npe `md/out/ol/v`

Thaum kawg, **teeb tsa lub sijhawm cache ntawm txoj hauv kev `/.v` rau `1s`** , txwv tsis pub cov ntsiab lus tawm tshiab tuaj yeem nkag tsis tau tam sim ntawd.

Lub sijhawm cache rau lwm txoj hauv kev tuaj yeem teem caij rau ib xyoos lossis ntau dua los txo cov kev thov tsis tsim nyog.

##### Host Cov Ntsiab Lus Rau s3

Txhawm rau tswj hwm tus kheej cov ntsiab lus, ntxiv rau kev siv koj tus kheej server + lwm `CDN` kev xaiv yog siv `S3`

Koj tuaj yeem siv [rclone](https://rclone.org) Nkag mus `S3` neeg rau zaub mov, tom qab ntawd xa mus rau thiab hloov cov ntawv hauv qab no, thiab tsuas yog luam cov kev hloov pauv ntxiv rau `S3` txhua zaus koj tshaj tawm.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Nco ntsoov teeb tsa `CDN` kom lub sijhawm cache ntawm txoj kev xaus rau `/.v` yog `1s` , txwv tsis pub koj yuav tsis tuaj yeem nkag mus rau cov ntsiab lus tawm tshiab tam sim ntawd.

### Luam Tawm Lub Vev Xaib

Lub vev xaib tuaj yeem xa mus rau txhua qhov chaw [github page](https://pages.github.com) thiab [cloudflare page](https://pages.cloudflare.com) yog qhov kev xaiv zoo.

Vim tias lub vev xaib tau txais cov qauv tsim ntawm [ib nplooj ntawv thov](https://developer.mozilla.org/docs/Glossary/SPA) , nco ntsoov rov sau cov URL uas tsis `. ` rau `index.html` .

Nplooj ntawv nkag lub vev xaib tsuas yog yuav tsum tau xa tawm ib zaug, thiab tsis tas yuav rov siv lub vev xaib nkag mus rau cov ntsiab lus txuas ntxiv.

#### Deploy on github page

Ua ntej [nyem qhov github los tsim ib lub koom haum](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Tom qab ntawd tsim lub tsev khaws `i18n-demo` hauv lub koom haum no `i18n-demo.github.io`

<img alt="" src="https://p.3ti.site/1721098657.avif">

Thaum tshaj tawm cov ntsiab lus hauv tsab xov xwm dhau los, nws : raug tsim tawm `out/ol/htm`

```
ln -s index.html 404.html
```


Vim `github page` tsis txhawb URL txoj kev rov sau dua, yog li `404.html` siv hloov.

Tom qab ntawd khiav cov lus txib hauv qab `i18n-demo/i18n-demo.github.io.git` hauv `htm` ntawv teev npe :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Tom qab thawb lub chaws, tos rau kev xa tawm ntawm `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Rau nplooj ntawv demo thov saib:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Deploy Ntawm cloudflare Nplooj

Piv [cloudflare page](//pages.cloudflare.com) rau `github page`

`cloudflare page` Kev xa tawm feem ntau yog raws li kev xa tawm ntawm `github page` saum toj no.

Tsim ib qhov project thiab khi cov khoom saum toj no `i18n-demo.github.io`

Cov txheej txheem tau qhia hauv daim duab hauv qab no:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Thov nias `Add Account` kom tso cai nkag mus rau `i18n-demo` .

Yog tias koj tau khi lub warehouse ntawm lwm lub koom haum, tej zaum koj yuav tau nyem `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

Tom ntej no xaiv `i18n-demo.github.io` Warehouse, ces nias `Begin setup` , thiab siv lub neej ntawd qhov tseem ceeb rau cov kauj ruam tom ntej.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Tom qab khi thawj zaug, koj yuav tsum tau tos ob peb feeb ua ntej koj tuaj yeem nkag mus rau nws.

Tom qab kev xa tawm, koj tuaj yeem khi lub npe sau npe.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Tom qab khi txoj cai sau npe, thov mus rau lub npe sau npe los teeb tsa txoj kev rov sau dua ntawm daim ntawv thov ib nplooj ntawv, raws li qhia hauv qab no:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Cov cai hauv daim duab saum toj no yog raws li hauv qab no Thov hloov `i18n.site`

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

Tsis tas li ntawd, thov teeb tsa cov cai cache, raws li qhia hauv qab no, thiab teeb tsa lub sijhawm cache rau ib hlis.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Thov hloov lub npe sau npe sib piv nyob rau theem ob hauv daim duab saum toj no rau lub npe sau npe koj khi.

#### Optimizing Lub Vev Xaib Xa Tawm Hauv Suav Teb Av Loj

Yog tias koj xav kom tau txais kev nkag tau zoo dua hauv kev sib txuas hauv network ntawm Tuam Tshoj mainland, thov [sau npe sau npe](//beian.aliyun.com) ua ntej.

Tom qab ntawd, siv cov khoom cia ntawm cov neeg muag khoom huab hauv `CDN` teb `out/ol/htm` +

Koj tuaj yeem siv ntug xam los sau txoj hauv kev los hloov mus rau ib nplooj ntawv thov, xws li [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

Vim tias `MX` cov ntaub ntawv thiab `CNAME` cov ntaub ntawv `A` tuaj yeem sib koom ua ke, yog tias koj xav tau txais cov npe sau npe email tib lub sijhawm, koj yuav tsum koom tes nrog tsab `CNAME` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Tsis tas li ntawd, vim tias cov nqi tsheb thauj mus los txawv teb chaws ntawm cov neeg muag khoom huab hauv Suav teb tseem pheej yig, yog tias koj xav kom zoo dua cov nqi, koj tuaj yeem siv [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) [Cloud 's dawb daws teeb meem DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) tsheb khiav tawm ── Tsheb hauv av loj Tuam Tshoj Baidu Huab `CDN` thoob ntiaj teb tsheb mus cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Cov kev daws teeb meem kev ua kom zoo tshaj plaws no yog qhov nyuaj dua thiab yuav raug qhia hauv tshooj cais yav tom ntej.

#### Generic Sau Npe Redirection

Yog tias koj siv `i18n.site` los tsim lub vev xaib raws li koj lub vev xaib tseem ceeb, feem ntau koj yuav tsum tau teeb tsa pan-domain redirection, uas yog, redirect `*.xxx.com` (xws li `www.xxx.com` ) nkag mus rau `xxx.com` .

Qhov kev xav tau no tuaj yeem ua tiav nrog kev pab los ntawm Alibaba `CDN` 's `EdgeScript` ( [English document](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Suav document](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Ntxiv lub npe sau npe hauv [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) thiab taw qhia `*.xxx.com` npe sau npe rau Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Piv txwv li, lub pan-domain npe redirection configuration ntawm `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Deploy Nrog nginx

Thov ntxiv ib qho kev teeb tsa zoo ib yam li cov hauv qab no hauv `server` nginx qhov twg `/root/i18n/md/out/ol/htm` thov hloov mus rau txoj hauv kev ntawm koj tus kheej qhov project `out/ol/htm` :

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

#### Pej Xeem

Cov ntaub ntawv zoo li qub ntawm lub vev xaib, xws li `favicon.ico` `robots.txt` , thiab lwm yam.

Cov ntaub ntawv icon ntawm no tuaj yeem tsim nrog [realfavicongenerator.net](https://realfavicongenerator.net)

#### Ib 18n

`.i18n` Nyob rau hauv phau ntawv qhia yog `i18n.site` 's configuration files, translation cache, thiab lwm yam. Saib tshooj tom ntej ["Configuration"](/i18n.site/conf) kom paub meej.

#### en

Cov npe ntawm cov lus qhia, sib xws `.i18n/conf.yml` `fromTo` `en` hauv cov ntaub ntawv teeb tsa

```yaml
i18n:
  fromTo:
    en: zh
```

Thov xa mus rau lub configuration ntawm kev txhais lus [i18](/i18/use)

