# Fi Sori Ẹrọ &

## Àmi Iṣeto Ni

Ohun elo `i18` itumọ ti wa ni ifibọ `i18n.site` jọwọ [tẹ ibi lati tọka si `i18` lati tunto ami wiwọle](/i18/use) .

## Fi Sori Ẹrọ

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Ririnkiri Ise Agbese

Jẹ ki a bẹrẹ pẹlu iṣẹ akanṣe demo ki o kọ ẹkọ bi o ṣe le lo `i18n.site`

A kọkọ kọ ibi ipamọ demo ati ṣiṣe aṣẹ naa bi atẹle:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Awọn olumulo ni oluile China le:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Orukọ itọsọna ti ẹda oniye koodu gbọdọ jẹ `md` lati dẹrọ awotẹlẹ agbegbe pẹlu `docker` `demo.i18n.site`

### Tumọ

Lakọọkọ `zh` tẹ `i18n.site` `en` `md`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Lẹhin ṣiṣe, itumọ ati `git add . ` faili cache yoo jẹ ipilẹṣẹ `md`

### Agbegbe Awotẹlẹ

Fi sori ẹrọ ki o `docker` ( `MAC` ṣeduro lilo [orbstack](https://orbstack.dev) bi akoko asiko ti `docker` ).

Lẹhinna, tẹ `docker` itọsọna naa ṣiṣẹ `./up.sh` , lẹhinna ṣabẹwo si [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Ifiweranṣẹ Akoonu

`i18n.site` Ṣe igbasilẹ faaji [ohun elo oju-iwe kan](https://developer.mozilla.org/docs/Glossary/SPA) , ati oju-iwe iwọle oju opo wẹẹbu ati akoonu oju opo wẹẹbu ni a gbe lọ ni ominira.

Lẹhin ṣiṣe itumọ ti o wa loke, awọn ilana `htm` ati `v` yoo jẹ ipilẹṣẹ ninu itọsọna `md/out/dev`

Nibi `.i18n/htm/dev.yml` `dev`

Labẹ : akoonu `dev`

Labẹ itọsọna `htm` ni oju-iwe iwọle si oju opo wẹẹbu.

`v` Itọsọna naa ni akoonu oju opo wẹẹbu pẹlu nọmba ẹya.

Awotẹlẹ agbegbe yoo daakọ gbogbo awọn faili si itọsọna `out/dev/v/0.1.0`

Fun itusilẹ osise, awọn faili ti o yipada yoo jẹ daakọ si itọsọna nọmba ẹya tuntun.

#### Lo -c Lati Pato Faili Iṣeto Ni

Awọn faili iṣeto ni oriṣiriṣi yoo ṣẹda awọn ilana ti o baamu labẹ ilana `out`

Fun apẹẹrẹ, `.i18n/htm/ol.yml` yoo ṣẹda `out/ol` itọsọna kan.

`dev.yml` ati `ol.yml` jẹ awọn atunto aiyipada.

`dev` ni abbreviation ti `development` , eyiti o duro fun ayika idagbasoke, ti a lo fun awotẹlẹ agbegbe, ati pe o tun jẹ faili iṣeto ni aiyipada.
`ol` ni abbreviation ti `online` , eyiti o duro fun ayika ori ayelujara, ti a lo fun itusilẹ osise, ati pe o tun jẹ faili iṣeto ni aiyipada nigbati o ba tẹjade si `npm` ni lilo paramita laini aṣẹ `-n` .

O tun le ṣẹda awọn faili iṣeto ni Lo `--htm_conf`

fun apere:
```
i18n.site --htm_conf yourConfig --save
```

Nibi `--save` tọkasi nọmba ẹya imudojuiwọn.

#### <a rel=id href="#npm" id="npm"></a> Ṣe atẹjade akoonu si npmjs.com

Titẹjade akoonu si [npmjs.com](//npmjs.com) ni ojutu aiyipada ti a ṣeduro (wo Wiwa [Giga Iwaju-opin](/i18n.site/feature#ha) ).

##### Tu Silẹ npm login &

Fi sori ẹrọ `nodejs` lo `npm login` lati wọle.

Ṣatunkọ `md/.i18n/htm/ol.yml` yi `i18n.site` ni `v: //unpkg.com/i18n.site` pada si tirẹ `npm` orukọ package.

O kan lo orukọ idii ti a ko tẹ lori [npmjs.com](//npmjs.com)

Nigbati `i18n.site` ba ṣe atẹjade ti o da lori idii `npm` , **rii daju pe o lo `//unpkg.com/`** gẹgẹbi ami-iṣaaju ti iye `v:` naa ti jẹ iṣapeye ni `/.v` lati jẹ ki wiwo akoko ti awọn idasilẹ tuntun.

Ṣiṣe `i18n.site --npm` tabi `i18n.site -n` ninu iwe ilana `md`

Ti o ba lo `~/.npmrc` iṣọpọ lemọlemọ lati gbejade, ko si iwulo lati fi sii `nodejs`

Ti o ba ṣe atunṣe orukọ package ni `v:` `ol.yml` , jọwọ **rii daju pe o pa `.i18n/v/ol` akọkọ** ati lẹhinna gbejade.

##### Olupin Aṣoju Ti a Tẹjade Nipasẹ npm

Ti awọn olumulo ni Ilu China ba pade awọn iṣoro nẹtiwọọki ati pe wọn ko le ṣe atẹjade `npm` , wọn le ṣeto oniyipada ayika `https_proxy` lati tunto olupin aṣoju naa.

A ro pe ibudo olupin aṣoju rẹ jẹ `7890` o le kọ:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Akoonu Ti Ara Ẹni Ti Gbalejo

Ti o ba fẹ lati gbalejo akoonu funrararẹ, akọkọ `v: //i18n-v.xxx.com` `v: //unpkg.com/i18n.site` `md/.i18n/htm/ol.yml`

Tẹ awọn `md`

```
i18n.site --htm_conf ol --save
```

tabi abbreviation

```
i18n.site -c ol -s
```

Lẹhinna, tunto akoonu inu `v:` ilana `md/out/ol/v`

Lakotan, **tunto akoko kaṣe ti ọna `/.v` o pari si `1s`** , bibẹẹkọ akoonu tuntun ti a tu silẹ ko le wọle si lẹsẹkẹsẹ.

Akoko kaṣe fun awọn ọna miiran le ṣeto si ọdun kan tabi diẹ sii lati dinku awọn ibeere ti ko wulo.

##### Gbalejo Akoonu Si s3

Si akoonu ti ara ẹni, ni afikun + lilo olupin tirẹ, aṣayan miiran `CDN` o wọpọ ni lati lo `S3`

`S3` le `S3` olupin [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ranti lati tunto `CDN` ki akoko kaṣe ti ọna ti o pari ni `/.v` jẹ `1s` , bibẹẹkọ iwọ kii yoo ni anfani lati wọle si akoonu tuntun ti a tu silẹ lẹsẹkẹsẹ.

### Jade Aaye Ayelujara

Oju opo wẹẹbu le wa ni ransogun nibikibi [github page](https://pages.github.com) ati [cloudflare page](https://pages.cloudflare.com) jẹ awọn yiyan ti o dara.

Nitoripe oju opo wẹẹbu gba iṣẹ ọna ti [ohun elo oju-iwe kan](https://developer.mozilla.org/docs/Glossary/SPA) , ranti lati tun ọna URL kọ `. ` `index.html` si .

Oju-iwe titẹsi oju opo wẹẹbu nilo lati ran lọ lẹẹkan, ati pe ko si iwulo lati tun ṣe oju-iwe titẹsi oju opo wẹẹbu fun awọn imudojuiwọn akoonu atẹle.

#### Ran Lọ Si Oju-Iwe github

[Kọkọ tẹ github lati ṣẹda ajọ](https://github.com/account/organizations/new?plan=free) `i18n-demo` bi apẹẹrẹ.

Lẹhinna ṣẹda ile itaja labẹ ajo `i18n-demo.github.io` (Jọwọ rọpo `i18n-demo` pẹlu orukọ agbari ti o ṣẹda):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Nigbati o ba n tẹjade akoonu inu nkan ti tẹlẹ, o ti ṣe : `out/ol/htm`

```
ln -s index.html 404.html
```


Nitori `github page` ko ṣe atilẹyin ọna atunṣe URL, nitorinaa `404.html` lo dipo.

Lẹhinna ṣiṣẹ `i18n-demo/i18n-demo.github.io.git` atẹle : itọsọna `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Lẹhin titari koodu, duro fun imuṣiṣẹ ti `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Fun oju-iwe demo jọwọ wo:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Ran Lọ Si Oju-Iwe cloudflare

Ti a ṣe afiwe [cloudflare page](//pages.cloudflare.com) `github page` o pese ọna atunṣe ati pe o jẹ ọrẹ diẹ sii si Ilu China ati pe o wa ni iraye si.

Awọn imuṣiṣẹ jẹ `cloudflare page` da lori imuṣiṣẹ ti `github page` loke.

Ṣẹda iṣẹ akanṣe kan ki o di ile-ipamọ loke `i18n-demo.github.io`

Ilana naa han ni aworan ni isalẹ:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Jọwọ `i18n-demo` `Add Account`

Ti o ba ti dè ile-itaja ti ajo miiran, o le nilo lati tẹ `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

Nigbamii yan `i18n-demo.github.io` Warehouse, lẹhinna tẹ `Begin setup` , ati lo awọn iye aiyipada fun awọn igbesẹ ti o tẹle.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Lẹhin ti dipọ fun igba akọkọ, o nilo lati duro fun iṣẹju diẹ ṣaaju ki o to wọle si.

Lẹhin imuṣiṣẹ, o le di orukọ ìkápá aṣa kan.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Lẹhin sisọ orukọ ìkápá aṣa, jọwọ lọ si orukọ ìkápá lati tunto ọna atunkọ ohun elo oju-iwe ẹyọkan, bi a ṣe han ni isalẹ:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Awọn ofin ti o wa ninu aworan ti o wa loke jẹ bi atẹle. Jọwọ rọpo `i18n.site`

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

Ni afikun, jọwọ tunto awọn ofin kaṣe, bi o ṣe han ni isalẹ, ki o ṣeto iye akoko kaṣe si oṣu kan.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Jọwọ yi orukọ ìkápá ti o baamu ni igbesẹ keji ni aworan loke si orukọ ìkápá ti o dè.

#### Ti O Dara Ju Imuṣiṣẹ Oju Opo Wẹẹbu Ni Oluile China

Ti o ba fẹ lati gba iṣẹ iraye si to dara julọ ni agbegbe nẹtiwọọki ti oluile China, jọwọ [forukọsilẹ orukọ ìkápá kan](//beian.aliyun.com) ni akọkọ.

Lẹhinna, lo ibi ipamọ `out/ol/htm` ti awọn olutaja awọsanma ni Ilu `CDN` +

O le lo iširo eti lati tun ọna naa ṣe lati ṣe deede si awọn ohun elo oju-iwe kan, gẹgẹbi [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) O le tunto bii eyi:

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

`CNAME` `CNAME` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `MX` `A`

Ni afikun, nitori awọn idiyele ijabọ okeokun ti awọn olutaja awọsanma ni oluile China jẹ gbowolori diẹ, ti o ba fẹ mu awọn idiyele pọ si, o le lo [ipinnu agbegbe ọfẹ ti Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ati orukọ aṣa aṣa [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (gẹgẹbi a ṣe han ni isalẹ) lati ṣaṣeyọri ipa ọna opopona──Ijabọ ni oluile China Baidu Cloud `CDN` ijabọ agbaye n lọ cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Awọn solusan iṣapeye imuṣiṣẹ wọnyi jẹ idiju diẹ sii ati pe yoo ṣafihan ni awọn ipin lọtọ ni ọjọ iwaju.

#### Generic Ašẹ Orukọ Redirection

Ti `*.xxx.com` `xxx.com` `www.xxx.com` `i18n.site`

`EdgeScript` yii le / aṣeyọri pẹlu [iranlọwọ](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) ti Alibaba [Cloud](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) `CDN`

Ṣafikun orukọ ìkápá kan ni [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ki o tọka `*.xxx.com` ìkápá naa si Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Fun apẹẹrẹ, iṣeto atunto orukọ pan-ašẹ ti `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Mu Ṣiṣẹ Pẹlu nginx

Jọwọ ṣafikun iṣeto ti o jọra si atẹle naa ni `server` nginx nibiti `/root/i18n/md/out/ol/htm` jọwọ yi pada si ọna ti iṣẹ akanṣe tirẹ `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Ilana Ilana

#### Gbangba

Awọn faili aimi ti oju opo wẹẹbu, gẹgẹbi `favicon.ico` `robots.txt` , ati bẹbẹ lọ.

Awọn faili aami nibi le ṣe ipilẹṣẹ pẹlu [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` itọsọna naa ni awọn faili iṣeto ni `i18n.site` 's, kaṣe itumọ, ati bẹbẹ lọ Wo ori ti o tẹle ["Iṣeto"](/i18n.site/conf) fun awọn alaye.

#### en

Itọsọna ede orisun, ti o baamu `.i18n/conf.yml` `fromTo` `en` ninu faili iṣeto

```yaml
i18n:
  fromTo:
    en: zh
```

Jọwọ tọkasi iṣeto ti itumọ [i18](/i18/use)

