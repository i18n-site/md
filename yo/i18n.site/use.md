# Fi Sori Ẹrọ &

## Fi Sori Ẹrọ

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Àmi Iṣeto Ni

`i18n.site` ni irinṣẹ itumọ `i18` ti a ṣe sinu rẹ Jọwọ [tẹ ibi lati tọka si iwe-ipamọ `i18` lati tunto ami wiwọle](/i18/use) .

## Ririnkiri Ise Agbese

Jẹ ki a bẹrẹ pẹlu iṣẹ akanṣe demo kan lati kọ ẹkọ bi a ṣe le lo `i18n.site` .

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

Orukọ itọsọna ti ẹda oniye ipilẹ koodu `demo.i18n.site` gbọdọ jẹ `md` lati dẹrọ awotẹlẹ agbegbe pẹlu `docker` .

### Tumọ

Ni akọkọ, tẹ itọsọna `md` sii ki o si ṣiṣẹ `i18n.site` , eyiti yoo tumọ `en` si `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Lẹhin ti nṣiṣẹ, itumọ `git add . ` awọn faili cache yoo jẹ ipilẹṣẹ `md`

### Agbegbe Awotẹlẹ

Fi sori ẹrọ ati bẹrẹ `docker` ( olumulo `MAC` ṣeduro lilo [orbstack](https://orbstack.dev) bi akoko asiko fun `docker` ).

Lẹhinna, tẹ iwe ilana `docker` ati ṣiṣe `./up.sh` , lẹhinna ṣabẹwo [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Ifiweranṣẹ Akoonu

`i18n.site` gba faaji [ohun elo oju-iwe kan ṣoṣo](https://developer.mozilla.org/docs/Glossary/SPA) , ati oju-iwe iwọle oju opo wẹẹbu ati akoonu oju opo wẹẹbu ni a gbe lọ ni ominira.

Lẹhin ṣiṣe itumọ ti o wa loke, awọn ilana `htm` ati `v` yoo jẹ ipilẹṣẹ labẹ ilana `md/out/dev` .

Nibi, `dev` tumọ si pe o da lori faili iṣeto ni `.i18n/htm/dev.yml` .

`dev` liana :

Ilana `htm` jẹ oju-iwe iwọle oju opo wẹẹbu.

Ilana `v` ni akoonu oju opo wẹẹbu pẹlu awọn nọmba ẹya.

Awotẹlẹ agbegbe ko bikita nipa nọmba ẹya ati pe yoo daakọ gbogbo awọn faili si itọsọna `out/dev/v/0.1.0` .

Fun itusilẹ osise, awọn faili ti o yipada yoo jẹ daakọ si itọsọna nọmba ẹya tuntun.

#### Pato Faili Iṣeto Ni Pẹlu `-c`

Awọn faili iṣeto ni oriṣiriṣi yoo ṣẹda awọn ilana ti o baamu ni ilana `out` .

Fun apẹẹrẹ, `.i18n/htm/ol.yml` yoo ṣẹda itọsọna `out/ol` naa.

`dev.yml` ati `ol.yml` jẹ awọn atunto aiyipada.

`dev` jẹ abbreviation ti `development` , afihan agbegbe idagbasoke, ti a lo fun awotẹlẹ agbegbe, ati pe o tun jẹ faili iṣeto ni aiyipada.
`ol` jẹ abbreviation ti `online` , ti o nfihan ayika ori ayelujara, eyiti o jẹ lilo fun idasilẹ osise O tun jẹ faili iṣeto ni aiyipada nigba lilo awọn ipilẹ laini aṣẹ `-n` si `npm` lati tu silẹ.

O tun le ṣẹda awọn faili atunto miiran Lo `--htm_conf` lori laini aṣẹ lati pato orukọ faili iṣeto lati lo:

fun apere:
```
i18n.site --htm_conf yourConfig --save
```

Nibi `--save` duro fun nọmba ikede imudojuiwọn.

#### <a rel=id href="#npm" id="npm"></a> Ṣe atẹjade akoonu si npmjs.com

Titẹjade akoonu si [npmjs.com](//npmjs.com) ni ojutu aiyipada ti a ṣeduro (wo Wiwa [Giga Iwaju-opin](/i18n.site/feature#ha) ).

##### Tu Silẹ npm login &

Fi `nodejs` sori ẹrọ, wọle pẹlu `npm login` .

Ṣatunkọ `md/.i18n/htm/ol.yml` ki o yipada iye ti [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) `YOUR_NPM_PACKAGE` gẹgẹbi orukọ package `npm` ti ara rẹ yoo [npmjs.com](//npmjs.com) .

Lẹhinna yipada `md/.i18n/htm/ol.package.json`

Ṣiṣe `i18n.site --npm` tabi `i18n.site -n` ninu ilana `md` lati tumọ ati ṣe atẹjade.

Ti o ba lo agbegbe iṣọpọ lemọlemọ lati gbejade, ko si iwulo lati fi sii `nodejs` , kan daakọ ti o wọle ati titẹjade igbanilaaye `~/.npmrc` si agbegbe naa.

Ti o ba yipada orukọ package ti `v:` ni `ol.yml` , jọwọ **rii daju pe o paarẹ `.i18n/v/ol` ni akọkọ** ati lẹhinna gbejade.

##### Olupin Aṣoju Ti a Tẹjade Nipasẹ npm

Ti awọn olumulo ni Ilu China ba pade awọn iṣoro nẹtiwọọki ati pe wọn ko le ṣe atẹjade awọn akopọ `npm` , wọn le ṣeto oniyipada ayika `https_proxy` lati tunto olupin aṣoju.

A ro pe ibudo olupin aṣoju rẹ jẹ `7890` , o le kọ:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Akoonu Ti Ara Ẹni Ti Gbalejo

Ti o ba fẹ lati gbalejo akoonu funrararẹ, ṣatunkọ akọkọ `md/.i18n/htm/ol.yml` ki o yi `v: //unpkg.com/i18n.site` pada si asọtẹlẹ URL rẹ, bii `v: //i18n-v.xxx.com` .

Tẹ `md` liana ki o si ṣiṣẹ

```
i18n.site --htm_conf ol --save
```

tabi abbreviation

```
i18n.site -c ol -s
```

Lẹhinna, tunto akoonu ti o wa ninu itọsọna `md/out/ol/v` si ọna itọsi URL ti a ṣeto ni `v:` .

Nikẹhin, **tunto akoko kaṣe ti ọna ti o pari ni `/.v` si `1s`** , bibẹẹkọ akoonu tuntun ti a tu silẹ ko le wọle si lẹsẹkẹsẹ.

Akoko kaṣe fun awọn ọna miiran le ṣeto si ọdun kan tabi diẹ sii lati dinku awọn ibeere ti ko wulo.

##### Gbalejo Akoonu Si s3

Si akoonu ti ara ẹni, ni afikun si lilo olupin tirẹ, aṣayan miiran ti `CDN` wọpọ ni lati lo `S3` + .

O le lo [rclone](https://rclone.org) lati buwolu wọle si olupin `S3` , lẹhinna tọka si ati ṣe atunṣe iwe afọwọkọ atẹle, ati daakọ awọn ayipada afikun si `S3` nikan fun idasilẹ kọọkan.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ranti lati tunto `CDN` ki akoko kaṣe ti ọna ti o pari ni `/.v` jẹ `1s` , bibẹẹkọ akoonu tuntun ti a tu silẹ ko le wọle si lẹsẹkẹsẹ.

### Jade Aaye Ayelujara

Oju opo wẹẹbu le wa ni ransogun nibikibi [github page](https://pages.github.com) ati [cloudflare page](https://pages.cloudflare.com) jẹ awọn yiyan ti o dara.

Nitoripe oju opo wẹẹbu nlo faaji [ohun elo oju-iwe kan](https://developer.mozilla.org/docs/Glossary/SPA) , ranti lati tun awọn ọna URL kọ ti ko ni `. ` si `index.html` ninu.

Oju-iwe titẹsi oju opo wẹẹbu nilo lati ran lọ lẹẹkan, ati pe ko si iwulo lati tun ṣe oju-iwe titẹsi oju opo wẹẹbu fun awọn imudojuiwọn akoonu atẹle.

#### Ran Lọ Si Oju-Iwe github

[Kọkọ tẹ github lati ṣẹda ajọ kan](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Lẹhinna ṣẹda ile-ipamọ `i18n-demo.github.io` labẹ ajo yii (jọwọ rọpo `i18n-demo` pẹlu orukọ agbari ti o ṣẹda):

![](https://p.3ti.site/1721098657.avif)

Nigbati o ba ṣe atẹjade akoonu inu nkan ti tẹlẹ, `out/ol/htm` ti jẹ ipilẹṣẹ :

```
ln -s index.html 404.html
```


Nitoripe `github page` ko ṣe atilẹyin ọna atunṣe URL, `404.html` lo dipo.

Lẹhinna ṣiṣe aṣẹ atẹle ni itọsọna `htm` (ranti lati rọpo `i18n-demo/i18n-demo.github.io.git` pẹlu adirẹsi ile-itaja tirẹ) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Lẹhin titari koodu naa, duro fun imuṣiṣẹ ti `github page` lati ṣiṣẹ ni aṣeyọri (bii o han ni isalẹ) ṣaaju ki o to wọle si.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Fun oju-iwe demo jọwọ wo:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Ran Lọ Si Oju-Iwe cloudflare

Ti a [cloudflare page](//pages.cloudflare.com) pẹlu `github page` , o pese ọna atunṣe ati pe o jẹ ọrẹ diẹ si Ilu China ati pe o wa ni iraye si diẹ sii.

Gbigbe ti `cloudflare page` nigbagbogbo da lori imuṣiṣẹ ti `github page` loke.

Ṣẹda iṣẹ akanṣe kan ki o di ile-itaja `i18n-demo.github.io` loke.

Ilana naa han ni aworan ni isalẹ:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Jọwọ tẹ `Add Account` lati fun ni iwọle si agbari `i18n-demo` .

Ti o ba ti dè ile-itaja ti ile-iṣẹ miiran, o le nilo lati tẹ `Add Account` lẹẹmeji lati fun laṣẹ lẹẹmeji ṣaaju iṣafihan tuntun naa.

![](https://p.3ti.site/1721118306.avif)

Nigbamii, yan ile-iṣẹ `i18n-demo.github.io` , lẹhinna tẹ `Begin setup` , ki o lo awọn iye aiyipada fun awọn igbesẹ ti o tẹle.

![](https://p.3ti.site/1721118490.avif)

Lẹhin ti dipọ fun igba akọkọ, o nilo lati duro fun iṣẹju diẹ ṣaaju ki o to wọle si.

Lẹhin imuṣiṣẹ, o le di orukọ ìkápá aṣa kan.

![](https://p.3ti.site/1721119459.avif)

Lẹhin didi orukọ ìkápá aṣa, jọwọ lọ si orukọ ìkápá lati tunto ọna atunkọ ohun elo oju-iwe ẹyọkan, bi a ṣe han ni isalẹ:

![](https://p.3ti.site/1721119320.avif)

Awọn ofin ti o wa ninu aworan ti o wa loke jẹ atẹle. Jọwọ rọpo `i18n.site` ni laini akọkọ ni isalẹ pẹlu orukọ ìkápá ti o dè.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Ni afikun, jọwọ tunto awọn ofin kaṣe, bi o ṣe han ni isalẹ, ki o ṣeto iye akoko kaṣe si oṣu kan.

![](https://p.3ti.site/1721125111.avif)

Jọwọ yi orukọ ìkápá ti o baamu ni igbesẹ keji ni aworan loke si orukọ ìkápá ti o dè.

#### Ti O Dara Ju Imuṣiṣẹ Oju Opo Wẹẹbu Ni Oluile China

Ti o ba fẹ lati gba iṣẹ iraye si to dara julọ ni agbegbe nẹtiwọọki ti oluile China, jọwọ [forukọsilẹ orukọ ìkápá kan](//beian.aliyun.com) ni akọkọ.

Lẹhinna, lo ibi ipamọ ohun ti awọn olutaja awọsanma ni oluile + `CDN` Mu akoonu `out/ol/htm` wọnyi ṣiṣẹ.

O le lo iširo eti lati tun ọna naa kọ lati ṣe deede si awọn ohun elo oju-iwe kan Fun apẹẹrẹ, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) le tunto bii eyi:

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

Nitori igbasilẹ `MX` ati igbasilẹ `CNAME` ko le gbepọ, ti o ba fẹ lati gba awọn apamọ orukọ ašẹ ni akoko kanna, o nilo lati ṣe ifowosowopo pẹlu iwe [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) si ipele `CNAME` sinu igbasilẹ `A` .

Ni afikun, nitori awọn idiyele ijabọ okeokun ti awọn olutaja awọsanma ni oluile China jẹ gbowolori diẹ, ti o ba fẹ mu awọn idiyele pọ si, o le lo [DNS agbegbe ọfẹ ti Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ati orukọ aṣa aṣa [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (gẹgẹbi a ṣe han ni isalẹ) lati ṣaṣeyọri ipa ọna opopona──Ijabọ ni oluile China Baidu Cloud `CDN` , ijabọ agbaye n lọ cloudflare .

![](https://p.3ti.site/1721119788.avif)

Awọn solusan iṣapeye imuṣiṣẹ wọnyi jẹ idiju diẹ sii ati pe yoo ṣafihan ni awọn ipin lọtọ ni ọjọ iwaju.

#### Generic Ašẹ Orukọ Redirection

Ti o ba lo `i18n.site` lati ṣe ina oju opo wẹẹbu kan gẹgẹbi oju opo wẹẹbu akọkọ rẹ, o nilo nigbagbogbo lati tunto atunto-ašẹ pan-ašẹ, iyẹn ni, àtúnjúwe iwọle si `*.xxx.com` (pẹlu `www.xxx.com` ) si `xxx.com` .

Ibeere yii le ṣe aṣeyọri pẹlu iranlọwọ ti Alibaba Cloud `CDN` `EdgeScript` ( [iwe Gẹẹsi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [iwe Kannada](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Ṣafikun orukọ `*.xxx.com` `CDN` Alibaba `CNAME` [CDN](https://cdn.console.aliyun.com/domain/list)

![](https://p.3ti.site/1721122000.avif)

Fun apẹẹrẹ, iṣeto atunto orukọ pan-ašẹ ti `*.i18n.site` ninu aworan loke jẹ atẹle yii:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Mu Ṣiṣẹ Pẹlu nginx

Jọwọ ṣafikun iṣeto ti o jọra si atẹle naa ni paragira `server` ti nginx Jọwọ yi `/root/i18n/md/out/ol/htm` pada si ọna ti iṣẹ akanṣe tirẹ `out/ol/htm`

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Ilana Itọnisọna

#### `public`

Awọn faili aimi ti oju opo wẹẹbu, bii `favicon.ico` , `robots.txt` , ati bẹbẹ lọ.

Awọn faili aami nibi le ṣe ipilẹṣẹ pẹlu [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Labẹ awọn `.i18n` liana ni o wa iṣeto ni awọn faili, translation kaṣe, ati be be lo ti `i18n.site` Wo nigbamii ti ipin ["Ito ni"](/i18n.site/conf) fun awọn alaye.

#### `en`

Itọsọna ede orisun, bamu si `en` ti `fromTo` ni `.i18n/conf.yml` faili iṣeto ni

```yaml
i18n:
  fromTo:
    en: zh
```

Jọwọ tọkasi iṣeto ti itumọ [i18](/i18/use)