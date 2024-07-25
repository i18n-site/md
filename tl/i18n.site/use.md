# I-Install &

## Token Ng Configuration

`i18n.site` Ang `i18` tool sa pagsasalin ay naka-embed, mangyaring [mag-click dito upang sumangguni sa `i18` dokumento upang i-configure ang access token](/i18/use) .

## I-Install

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Na Proyekto

Magsimula tayo sa isang demo na proyekto at matutunan kung paano gamitin `i18n.site`

I-clone muna namin ang demo repository at patakbuhin ang command tulad ng sumusunod:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Ang mga gumagamit sa mainland China ay maaaring:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Ang pangalan ng direktoryo ng code base clone ay dapat `md` upang mapadali `demo.i18n.site` lokal na preview na may `docker` .

### Isalin

Una, ipasok ang `md` direktoryo at patakbuhin `i18n.site` , na isasalin `en` sa `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Pagkatapos tumakbo, mabubuo ang mga file ng pagsasalin at cache Mangyaring tandaan na idagdag ang mga ito sa repositoryo `git add . ` sa `md` .

### Lokal Na Preview

I-install at simulan `docker` ( Inirerekomenda `MAC` na gamitin ang [orbstack](https://orbstack.dev) bilang runtime ng `docker` ).

Pagkatapos, ipasok ang `docker` direktoryo at patakbuhin `./up.sh` , at pagkatapos ay bisitahin ang [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Mag-Post Ng Nilalaman

`i18n.site` Nag-a-adopt ng isang [solong-pahinang arkitektura ng application](https://developer.mozilla.org/docs/Glossary/SPA) , at ang pahina ng pagpasok ng website at nilalaman ng website ay inde-deploy nang nakapag-iisa.

Pagkatapos patakbuhin ang pagsasalin sa itaas, `htm` at `v` na mga direktoryo ay bubuo sa `md/out/dev`

Dito, ipinapahiwatig ng `dev` na ito ay binuo batay sa `.i18n/htm/dev.yml` file.

Sa ilalim : nilalaman `dev`

`htm` Sa ilalim ng direktoryo ay ang pahina ng pagpasok ng website.

`v` Ang direktoryo ay naglalaman ng nilalaman ng website na may numero ng bersyon.

Kokopyahin ng lokal na preview ang lahat ng mga file sa `out/dev/v/0.1.0` anuman ang numero ng bersyon.

Para sa opisyal na paglabas, ang mga binagong file ay makokopya sa bagong direktoryo ng numero ng bersyon.

#### Gamitin Ang -c Upang Tukuyin Ang Configuration File

Ang iba't ibang configuration file ay lilikha ng kaukulang mga direktoryo sa ilalim ng `out`

Halimbawa, gagawa ng `out/ol` direktoryo ang `.i18n/htm/ol.yml`

`dev.yml` at `ol.yml` ang mga default na configuration.

`dev` ay ang abbreviation ng `development` , na kumakatawan sa development environment, ay ginagamit para sa lokal na preview, at ito rin ang default na configuration file.
`ol` ay ang abbreviation ng `online` , na kumakatawan sa online na kapaligiran, ay ginagamit para sa opisyal na paglabas, at ito rin ang default na configuration file kapag nag-publish sa `npm` gamit ang command line parameter `-n` .

Maaari ka ring gumawa ng iba pang configuration file Gamitin ang `--htm_conf`

Halimbawa:
```
i18n.site --htm_conf yourConfig --save
```

Dito `--save`

#### <a rel=id href="#npm" id="npm"></a> Mag-publish ng nilalaman sa npmjs.com

Ang pag-publish ng nilalaman sa [npmjs.com](//npmjs.com) ay ang inirerekomendang default na solusyon (tingnan [ang Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login &

I-install `nodejs` gamitin `npm login` para mag-log in.

I-edit `md/.i18n/htm/ol.yml` baguhin `i18n.site` sa `v: //unpkg.com/i18n.site` sa iyong sarili `npm` pangalan ng package.

Gamitin lang ang pangalan ng package na walang tao sa [npmjs.com](//npmjs.com)

Kapag nag-publish batay sa `npm` package, **tiyaking gamitin `//unpkg.com/`** bilang prefix ng `v:` value Ang oras ng cache `i18n.site` sa ilalim ng prefix path na ito `/.v` ay espesyal na na-optimize upang mapagana ang napapanahong pagtingin sa mga bagong release.

Patakbuhin `i18n.site --npm` o `i18n.site -n` sa `md` upang isalin at i-publish.

Kung gumagamit ka `~/.npmrc` tuloy-tuloy na integration environment para mag-publish, hindi na kailangang i-install ito `nodejs`

Kung babaguhin mo ang pangalan ng package sa `v:` sa `ol.yml` , **pakitiyak na tanggalin muna `.i18n/v/ol`** at pagkatapos ay i-publish ito.

##### Proxy Server Na Inilathala Ng npm

Kung ang mga user sa mainland China ay nakatagpo ng mga problema sa network at hindi mai-publish ang `npm` package, maaari nilang itakda ang environment variable `https_proxy` upang i-configure ang proxy server.

Ipagpalagay na ang port ng iyong proxy server ay `7890` maaari mong isulat ang:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Self-Host Na Nilalaman

Kung gusto mong i-self-host ang nilalaman, una, i- `md/.i18n/htm/ol.yml` at baguhin `v: //unpkg.com/i18n.site` sa iyong prefix ng URL, gaya ng `v: //i18n-v.xxx.com` .

Ipasok ang `md` at tumakbo

```
i18n.site --htm_conf ol --save
```

o abbreviation

```
i18n.site -c ol -s
```

Pagkatapos, i-configure ang nilalaman sa direktoryo `v:` `md/out/ol/v`

Panghuli, **i-configure ang oras ng cache ng path na nagtatapos sa `/.v` sa `1s`** , kung hindi, ang bagong inilabas na nilalaman ay hindi ma-access kaagad.

Ang oras ng cache para sa iba pang mga path ay maaaring itakda sa isang taon o higit pa upang mabawasan ang mga hindi kinakailangang kahilingan.

##### Mag-Host Ng Nilalaman Sa s3

Para sa self-host na nilalaman, bilang karagdagan sa paggamit ng iyong sariling server, `CDN` isa pang karaniwang opsyon ay ang paggamit + `S3`

Maaari mong gamitin ang server [rclone](https://rclone.org) Login `S3` , pagkatapos ay sumangguni sa at baguhin ang script sa ibaba, at kopyahin lamang ang mga pagbabago sa `S3` sa bawat oras na mag-publish ka.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Tandaang i-configure `CDN` upang ang oras ng cache ng landas na nagtatapos sa `/.v` ay `1s` , kung hindi, hindi mo kaagad maa-access ang bagong inilabas na nilalaman.

### Mag-Publish Ng Website

Maaaring i-deploy ang website kahit saan [github page](https://pages.github.com) at [cloudflare page](https://pages.cloudflare.com) ay mahusay na mga pagpipilian.

Dahil ang website ay gumagamit ng arkitektura ng [isang solong pahina na application](https://developer.mozilla.org/docs/Glossary/SPA) , tandaan na muling isulat ang URL path na hindi naglalaman `. ` `index.html` .

Isang beses lang kailangang i-deploy ang page ng pagpasok ng website, at hindi na kailangang muling i-deploy ang page ng pagpasok ng website para sa mga kasunod na pag-update ng nilalaman.

#### I-Deploy Sa github page

Mag [-click muna github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Pagkatapos ay gumawa ng warehouse sa ilalim ng organisasyong ito `i18n-demo.github.io` (Pakipalitan ang `i18n-demo` ng pangalan ng organisasyon na iyong ginawa):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Kapag ini-publish ang nilalaman sa nakaraang artikulo, ito ay `out/ol/htm` Mangyaring ipasok ang direktoryo na ito at patakbuhin :

```
ln -s index.html 404.html
```


Dahil hindi sinusuportahan `404.html` `github page`

Pagkatapos ay patakbuhin ang sumusunod na utos sa direktoryo ng `htm` (tandaang palitan `i18n-demo/i18n-demo.github.io.git` ng iyong sariling address ng bodega) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Pagkatapos itulak ang code, hintayin ang pag-deploy ng `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Para sa pahina ng demo mangyaring tingnan ang:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### I-Deploy Sa cloudflare page

[cloudflare page](//pages.cloudflare.com) Kumpara sa `github page` , nagbibigay ito ng muling pagsulat ng landas at mas madaling gamitin.

`cloudflare page` Ang deployment ay karaniwang nakabatay sa deployment ng `github page` sa itaas.

Lumikha ng isang proyekto at itali ang bodega sa itaas `i18n-demo.github.io`

Ang proseso ay ipinapakita sa figure sa ibaba:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Mangyaring i-click ang `Add Account` upang magbigay ng access sa `i18n-demo` .

Kung nai-bound mo ang bodega ng ibang organisasyon, maaaring kailanganin mong i `Add Account` click nang dalawang beses upang pahintulutan ito ng dalawang beses bago ipakita ang bagong organisasyon.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Susunod na piliin ang `i18n-demo.github.io` Warehouse, pagkatapos ay i-click ang `Begin setup` , at gamitin ang mga default na halaga para sa mga susunod na hakbang.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Pagkatapos mag-binding sa unang pagkakataon, kailangan mong maghintay ng ilang minuto bago mo ito ma-access.

Pagkatapos ng deployment, maaari kang mag-bind ng custom na domain name.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Pagkatapos i-binding ang custom na domain name, mangyaring pumunta sa domain name upang i-configure ang path na muling pagsusulat ng application na nag-iisang pahina, tulad ng ipinapakita sa ibaba:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Ang mga panuntunan sa larawan sa itaas ay ang mga sumusunod. Pakipalitan ang `i18n.site` sa unang linya sa ibaba ng domain name na nakatali sa iyo.

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

Bilang karagdagan, mangyaring i-configure ang mga panuntunan sa cache, tulad ng ipinapakita sa ibaba, at itakda ang tagal ng cache sa isang buwan.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Mangyaring palitan ang pagtutugma ng domain name sa ikalawang hakbang sa larawan sa itaas sa domain name na iyong nakatali.

#### Pag-Optimize Ng Pag-Deploy Ng Website Sa Mainland China

Kung gusto mong makakuha ng mas mahusay na pagganap sa pagiging naa-access sa kapaligiran ng network ng mainland China, mangyaring [magparehistro muna ng isang domain name](//beian.aliyun.com) .

`out/ol/htm` , gamitin ang object storage ng `CDN` cloud vendor sa mainland China +

Maaari mong gamitin ang edge computing upang muling isulat ang landas upang umangkop sa mga single-page na application, gaya ng [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

`MX` ang mga talaan at `CNAME` na tala ay hindi maaaring magkasabay, kung gusto mong makatanggap ng mga email ng domain name nang sabay, kailangan mong makipagtulungan sa [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) upang i-flat `CNAME` sa `A` record.

Bilang karagdagan, dahil medyo mahal ang mga singil sa trapiko sa ibang bansa ng mga cloud vendor sa mainland China, kung gusto mong i-optimize ang mga gastos, maaari mong gamitin [ang libreng geographical na resolution ng DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) at ang custom na domain name ng [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (tulad ng ipinapakita sa ibaba) para makamit traffic diversion──Trapiko sa mainland China Baidu Cloud `CDN` ang internasyonal na trapiko ay cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Ang mga solusyon sa pag-optimize ng deployment na ito ay mas kumplikado at ipakikilala sa magkakahiwalay na mga kabanata sa hinaharap.

#### Generic Na Domain Name Redirection

Kung gagamitin mo `i18n.site` upang bumuo ng isang website bilang iyong pangunahing website, karaniwang kailangan mong i-configure ang pag-redirect ng pan-domain, iyon ay, i-redirect `*.xxx.com` (kabilang ang `www.xxx.com` ) na access sa `xxx.com` .

Maaaring makamit ang pangangailangang ito sa tulong ng `EdgeScript` ng Alibaba Cloud `CDN` [dokumentong Ingles](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [dokumentong Tsino](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Magdagdag ng domain name sa [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) at ituro `*.xxx.com` domain name sa Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Halimbawa, ang pan-domain name redirection configuration ng sa larawan sa itaas ay ang `*.i18n.site` sumusunod:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### I-Deploy Gamit Ang nginx

Mangyaring magdagdag ng pagsasaayos na katulad ng sumusunod sa `server` nginx kung saan `/root/i18n/md/out/ol/htm` mangyaring baguhin ito sa landas ng iyong sariling proyekto `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Istruktura Ng Direktoryo

#### Pampubliko

Mga static na file ng website, tulad ng `favicon.ico` `robots.txt` , atbp.

Ang mga icon na file dito ay maaaring mabuo gamit ang [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### en

Direktoryo ng pinagmulang wika, na tumutugma `.i18n/conf.yml` `fromTo` `en` sa configuration file

```yaml
i18n:
  fromTo:
    en: zh
```

Mangyaring sumangguni sa pagsasaayos ng pagsasalin [i18](/i18/use)

