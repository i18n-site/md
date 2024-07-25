# Gosod &

## Tocyn Cyfluniad

`i18n.site` `i18` [`i18`](/i18/use)

## Gosod

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Prosiect Demo

Gadewch i ni ddechrau gyda phrosiect demo a dysgu sut i ddefnyddio `i18n.site`

Rydym yn clonio'r ystorfa demo yn gyntaf ac yn rhedeg y gorchymyn fel a ganlyn:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Gall defnyddwyr ar dir mawr Tsieina:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Rhaid `demo.i18n.site` enw cyfeiriadur y clon sylfaen cod fod yn `md` i hwyluso rhagolwg lleol gyda `docker` .

### Cyfieithu

Yn gyntaf, rhowch y cyfeiriadur `md` a rhedeg `i18n.site` , a fydd yn cyfieithu `en` i `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Ar ôl rhedeg, bydd ffeiliau cyfieithiad a storfa yn cael eu cynhyrchu. Cofiwch eu hychwanegu at y gadwrfa `git add . ` yn y cyfeiriadur `md`

### Rhagolwg Lleol

Gosod a dechrau `docker` ( `MAC` yn argymell defnyddio [orbstack](https://orbstack.dev) fel yr amser rhedeg o `docker` ).

Yna, rhowch y cyfeiriadur `docker` a rhedeg `./up.sh` , ac yna ewch i [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Postio Cynnwys

Yn mabwysiadu pensaernïaeth [cais un dudalen](https://developer.mozilla.org/docs/Glossary/SPA) , ac mae tudalen mynediad y wefan a chynnwys y wefan yn cael `i18n.site` defnyddio'n annibynnol.

Ar ôl rhedeg y cyfieithiad uchod, bydd cyfeiriaduron `htm` a `v` yn cael eu cynhyrchu yn y cyfeiriadur `md/out/dev`

Yma, mae `dev` yn nodi ei fod wedi'i adeiladu yn seiliedig ar y ffeil `.i18n/htm/dev.yml` .

`dev` dan gynnwys :

`htm` dan y cyfeiriadur mae tudalen mynediad y wefan.

`v` Mae'r cyfeiriadur yn cynnwys cynnwys y wefan gyda rhif y fersiwn.

Bydd rhagolwg lleol yn copïo pob ffeil i'r cyfeiriadur `out/dev/v/0.1.0`

I'w rhyddhau'n swyddogol, bydd ffeiliau sydd wedi'u newid yn cael eu copïo i'r cyfeiriadur rhif fersiwn newydd.

#### Defnyddiwch -c I Nodi'r Ffeil Ffurfweddu

Bydd ffeiliau cyfluniad gwahanol yn creu cyfeiriaduron cyfatebol o dan y cyfeiriadur `out`

Er enghraifft, bydd `.i18n/htm/ol.yml` yn creu `out/ol` cyfeiriadur.

`dev.yml` a `ol.yml` yw'r ffurfweddiadau rhagosodedig.

`dev` yw'r talfyriad o `development` , sy'n cynrychioli'r amgylchedd datblygu, a ddefnyddir ar gyfer rhagolwg lleol, a dyma'r ffeil ffurfweddu rhagosodedig hefyd.
`ol` yw'r talfyriad o `online` , sy'n cynrychioli'r amgylchedd ar-lein, a ddefnyddir i'w ryddhau'n swyddogol, a dyma hefyd y ffeil ffurfweddu rhagosodedig wrth gyhoeddi i `npm` gan ddefnyddio'r paramedr llinell orchymyn `-n` .

Gallwch hefyd greu ffeiliau ffurfweddu eraill. Defnyddiwch `--htm_conf` ar y llinell orchymyn i nodi enw'r ffeil ffurfweddu:

er enghraifft:
```
i18n.site --htm_conf yourConfig --save
```

Yma `--save` yn nodi rhif y fersiwn rhyddhau diweddariad.

#### <a rel=id href="#npm" id="npm"></a> Cyhoeddi cynnwys i npmjs.com

Cyhoeddi [cynnwys](/i18n.site/feature#ha) i [npmjs.com](//npmjs.com)

##### Rhyddhau npm login &

Gosod `nodejs` defnyddiwch `npm login` i fewngofnodi.

Golygu `md/.i18n/htm/ol.yml` newidiwch `i18n.site` mewn `v: //unpkg.com/i18n.site` i'ch un chi `npm` enw'r pecyn.

Defnyddiwch enw'r pecyn heb ei feddiannu ar [npmjs.com](//npmjs.com)

Wrth `i18n.site` yn **`//unpkg.com/`** ar `v:` `/.v` `npm`

Rhedeg `i18n.site --npm` neu `i18n.site -n` yn y cyfeiriadur `md`

Os ydych yn defnyddio `~/.npmrc` integreiddio parhaus i gyhoeddi, nid oes angen ei osod `nodejs`

Os newidiwch enw'r pecyn yn `v:` **`.i18n/v/ol`** `ol.yml`

##### Gweinydd Dirprwy Wedi'i Gyhoeddi Gan npm

Os yw defnyddwyr ar dir mawr Tsieina yn dod ar draws problemau rhwydwaith ac yn methu â chyhoeddi'r pecyn `npm` , gallant osod y newidyn amgylchedd `https_proxy` i ffurfweddu'r gweinydd dirprwy.

Gan dybio bod eich porth gweinydd dirprwyol yn `7890` gallwch ysgrifennu:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Cynnwys Hunangynhaliol

Os ydych am hunangynhaliol y cynnwys, yn gyntaf, golygwch `md/.i18n/htm/ol.yml` a newidiwch `v: //unpkg.com/i18n.site` i'ch rhagddodiad URL, megis `v: //i18n-v.xxx.com` .

Rhowch y cyfeiriadur `md`

```
i18n.site --htm_conf ol --save
```

neu dalfyriad

```
i18n.site -c ol -s
```

Yna, ffurfweddwch y cynnwys yn y `v:` `md/out/ol/v`

Yn olaf, **ffurfweddwch amser storfa'r llwybr sy'n gorffen yn `/.v` i `1s`** , fel arall ni ellir cyrchu'r cynnwys sydd newydd ei ryddhau ar unwaith.

Gellir gosod yr amser storio ar gyfer llwybrau eraill i flwyddyn neu fwy i leihau ceisiadau diangen.

##### Cynnwys Gwesteiwr I s3

I hunangynnal cynnwys, yn ogystal â defnyddio'ch `CDN` eich hun, + cyffredin arall yw defnyddio `S3`

Gallwch ddefnyddio gweinydd Mewngofnodi [rclone](https://rclone.org) `S3` yna cyfeirio at y sgript isod a'i haddasu, a dim ond copïo newidiadau cynyddol i `S3` bob tro y byddwch yn cyhoeddi.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Cofiwch ffurfweddu `CDN` fel bod amser storfa'r llwybr sy'n gorffen yn `/.v` yn `1s` , fel arall ni fyddwch yn gallu cyrchu'r cynnwys sydd newydd ei ryddhau ar unwaith.

### Cyhoeddi Gwefan

Gellir defnyddio'r wefan yn unrhyw le [github page](https://pages.github.com) ac mae [cloudflare page](https://pages.cloudflare.com) yn ddewisiadau da.

Oherwydd bod y wefan yn mabwysiadu saernïaeth [rhaglen un dudalen](https://developer.mozilla.org/docs/Glossary/SPA) , cofiwch ailysgrifennu'r llwybr URL nad yw'n `. ` i `index.html` .

Dim ond unwaith y mae angen defnyddio tudalen mynediad y wefan, ac nid oes angen adleoli tudalen mynediad y wefan ar gyfer diweddariadau cynnwys dilynol.

#### Defnyddio Ar Dudalen github

[Cliciwch github yn gyntaf i greu sefydliad](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Yna crëwch warws o dan y sefydliad hwn `i18n-demo.github.io` (Rhowch enw'r sefydliad a grewyd gennych yn lle `i18n-demo` ):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Wrth gyhoeddi'r cynnwys yn yr erthygl flaenorol, mae wedi'i gynhyrchu `out/ol/htm` Rhowch y cyfeiriadur hwn a rhedeg :

```
ln -s index.html 404.html
```


Oherwydd nad yw `github page` yn cefnogi ailysgrifennu llwybr URL, felly defnyddir `404.html` yn lle hynny.

Yna rhedeg y gorchymyn canlynol yn y cyfeiriadur `htm` (cofiwch amnewid `i18n-demo/i18n-demo.github.io.git` gyda'ch cyfeiriad warws eich hun) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Ar ôl gwthio'r cod, arhoswch i'r defnydd o `github page` redeg yn llwyddiannus (fel y dangosir isod), ac yna gallwch chi gael mynediad iddo.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Ar gyfer y dudalen demo gweler:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Defnyddio Ar Dudalen cloudflare

[cloudflare page](//pages.cloudflare.com) gymharu â `github page` , mae'n darparu ailysgrifennu llwybrau ac mae'n fwy cyfeillgar i dir mawr Tsieina ac mae'n fwy hygyrch.

`cloudflare page` defnydd fel arfer yn seiliedig ar ddefnyddio `github page` uchod.

Creu prosiect a rhwymo'r warws uchod `i18n-demo.github.io`

Dangosir y broses yn y ffigur isod:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Cliciwch `Add Account` i ganiatáu mynediad i'r `i18n-demo` .

Os ydych wedi rhwymo warws sefydliad arall, efallai y bydd angen i chi glicio `Add Account` ddwywaith i'w awdurdodi ddwywaith cyn y bydd y sefydliad newydd yn cael ei arddangos.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Nesaf dewiswch `i18n-demo.github.io` Warehouse , yna cliciwch `Begin setup` , a defnyddiwch y gwerthoedd rhagosodedig ar gyfer camau dilynol.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Ar ôl rhwymo am y tro cyntaf, mae angen i chi aros ychydig funudau cyn y gallwch gael mynediad iddo.

Ar ôl ei ddefnyddio, gallwch chi rwymo enw parth arferol.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Ar ôl rhwymo'r enw parth arferol, ewch i'r enw parth i ffurfweddu llwybr ailysgrifennu'r rhaglen un dudalen, fel y dangosir isod:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Mae'r rheolau yn y llun uchod fel a ganlyn os gwelwch yn dda amnewid `i18n.site`

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

Yn ogystal, ffurfweddwch y rheolau storfa, fel y dangosir isod, a gosodwch hyd y storfa i fis.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Newidiwch yr enw parth sy'n cyfateb yn yr ail gam yn y llun uchod i'r enw parth a rwymwyd gennych.

#### Optimeiddio'r Defnydd O Wefannau Ar Dir Mawr Tsieina

Os ydych chi am gael gwell perfformiad hygyrchedd yn amgylchedd rhwydwaith tir mawr Tsieina, [cofrestrwch enw parth](//beian.aliyun.com) yn gyntaf.

Yna, defnyddiwch storfa `out/ol/htm` gwerthwyr cwmwl ar dir mawr `CDN` +

Gallwch ddefnyddio cyfrifiadura ymyl i ailysgrifennu'r llwybr i addasu i gymwysiadau un dudalen, fel [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

`MX` `A` yw cofnodion a `CNAME` cofnod yn gallu cydfodoli, os ydych am dderbyn e-byst enw parth ar yr un pryd, mae angen i chi gydweithredu `CNAME` sgript [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Yn ogystal, oherwydd bod taliadau traffig tramor gwerthwyr cwmwl ar dir mawr Tsieina yn gymharol ddrud, os ydych chi am wneud y gorau o'r costau, gallwch ddefnyddio [datrysiad daearyddol rhad ac am ddim Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ac enw parth arferol [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (fel y dangosir isod) i'w gyflawni dargyfeirio traffig ──Traffig ar dir mawr Tsieina Baidu Cloud `CDN` traffig rhyngwladol yn mynd cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Mae'r atebion optimeiddio defnydd hyn yn fwy cymhleth a chânt eu cyflwyno mewn penodau ar wahân yn y dyfodol.

#### Ailgyfeirio Enw Parth Generig

Os ydych yn defnyddio `i18n.site` i gynhyrchu gwefan fel eich prif wefan, fel arfer mae angen i chi ffurfweddu ailgyfeirio ar draws y parth, hynny yw, ailgyfeirio `*.xxx.com` (gan gynnwys `www.xxx.com` ) mynediad i `xxx.com` .

Gellir cyflawni'r gofyniad hwn gyda chymorth `EdgeScript` ( [dogfen Saesneg](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [dogfen Tsieineaidd](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) Alibaba Cloud `CDN`

Ychwanegwch enw parth yn [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) a phwyntiwch `*.xxx.com` enw parth at Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Er enghraifft, mae cyfluniad ailgyfeirio enw parth cyfan o `*.i18n.site` yn y llun uchod fel a ganlyn:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Defnyddio Gyda nginx

Ychwanegwch gyfluniad tebyg i'r canlynol ym `server` nginx lle `/root/i18n/md/out/ol/htm` newidiwch ef i lwybr eich prosiect `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Strwythur Cyfeiriadur

#### Cyhoeddus

Ffeiliau statig y wefan, megis `favicon.ico` `robots.txt` , ac ati.

Gellir cynhyrchu'r ffeiliau eicon yma gyda [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` O dan y cyfeiriadur mae ffeiliau cyfluniad `i18n.site` , storfa cyfieithu, ac ati [.](/i18n.site/conf)

#### Cy

Cyfeiriadur iaith ffynhonnell, sy'n cyfateb `.i18n/conf.yml` `fromTo` `en` yn y ffeil ffurfweddu

```yaml
i18n:
  fromTo:
    en: zh
```

Cyfeiriwch at gyfluniad cyfieithu [i18](/i18/use)

