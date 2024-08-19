# I-Install &

## Token Ng Configuration

`i18n.site` ay may built-in na `i18` translation tool Mangyaring [mag-click dito upang sumangguni sa `i18` dokumento upang i-configure ang access token](/i18/use) .

## I-Install

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Na Proyekto

Magsimula tayo sa isang demo project para matutunan kung paano gamitin `i18n.site` .

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

Ang pangalan ng direktoryo ng `demo.i18n.site` code base clone ay dapat na `md` upang mapadali ang lokal na preview na may `docker` .

### Isalin

Una, ipasok ang `md` na direktoryo at patakbuhin `i18n.site` , na isasalin `en` hanggang `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Pagkatapos tumakbo, bubuo ng mga file ng pagsasalin at cache Mangyaring tandaan na idagdag `git add . ` sa repositoryo sa `md` na direktoryo.

### Lokal Na Preview

I-install at simulan `docker` ( `MAC` user ang nagrerekomenda na gamitin ang [orbstack](https://orbstack.dev) bilang runtime para `docker` ).

Pagkatapos, ipasok ang `docker` na direktoryo at patakbuhin `./up.sh` , at pagkatapos ay bisitahin ang [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Mag-Post Ng Nilalaman

`i18n.site` ay gumagamit ng isang [solong-pahinang arkitektura ng application](https://developer.mozilla.org/docs/Glossary/SPA) , at ang pahina ng pagpasok ng website at nilalaman ng website ay independiyenteng naka-deploy.

Pagkatapos patakbuhin ang pagsasalin sa itaas, ang mga direktoryo `htm` at `v` ay bubuo sa ilalim ng `md/out/dev` na direktoryo.

Dito, `dev` ay nangangahulugan na ito ay binuo batay sa `.i18n/htm/dev.yml` configuration file.

`dev` direktoryo :

Ang `htm` na direktoryo ay ang pahina ng pagpasok ng website.

Ang `v` na direktoryo ay naglalaman ng nilalaman ng website na may mga numero ng bersyon.

Walang pakialam ang lokal na preview sa numero ng bersyon at kokopyahin ang lahat ng file sa `out/dev/v/0.1.0` na direktoryo.

Para sa opisyal na paglabas, ang mga binagong file ay makokopya sa bagong direktoryo ng numero ng bersyon.

#### Gamitin Ang -c Upang Tukuyin Ang Configuration File

Ang iba't ibang mga configuration file ay lilikha ng kaukulang mga direktoryo sa `out` na direktoryo.

Halimbawa, `.i18n/htm/ol.yml` ay lilikha ng `out/ol` direktoryo.

`dev.yml` at `ol.yml` ang mga default na configuration.

`dev` ay ang abbreviation ng `development` , na nagpapahiwatig ng development environment, na ginagamit para sa lokal na preview, at ito rin ang default na configuration file.
`ol` ay ang pagdadaglat ng `online` , na nagpapahiwatig ng online na kapaligiran, na ginagamit para sa opisyal na paglabas Ito rin ang default na file ng pagsasaayos kapag gumagamit ng mga parameter ng command line `-n` hanggang `npm` upang ilabas.

Maaari ka ring gumawa ng iba pang configuration file Gamitin `--htm_conf` sa command line para tukuyin ang configuration file name na gagamitin:

halimbawa:
```
i18n.site --htm_conf yourConfig --save
```

Dito kinakatawan `--save` ang numero ng bersyon ng paglabas ng update.

#### <a rel=id href="#npm" id="npm"></a> Mag-publish ng nilalaman sa npmjs.com

Ang pag-publish ng nilalaman sa [npmjs.com](//npmjs.com) ay ang inirerekomendang default na solusyon (tingnan [ang Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login &

I-install `nodejs` , mag-log in gamit ang `npm login` .

I-edit `md/.i18n/htm/ol.yml` at baguhin `i18n.site` sa `v: //unpkg.com/i18n.site` sa sarili mong `npm` pangalan ng package.

Gamitin lang ang pangalan ng package na walang tao sa [npmjs.com](//npmjs.com)

Kapag nagpa-publish batay sa package `npm` , **tiyaking gumamit `//unpkg.com/` para** sa prefix na `v:` value na espesyal na na-optimize ng `i18n.site` ang oras ng cache na `/.v` sa ilalim ng prefix na path na ito upang makamit ang napapanahong pagtingin sa mga bagong release.

Magpatakbo `i18n.site --npm` o `i18n.site -n` sa `md` na direktoryo upang isalin at i-publish.

Kung gagamit ka ng tuluy-tuloy na integration environment para mag-publish, hindi na kailangang i-install `nodejs` , kopyahin lang ang naka-log in at pahintulot sa pag-publish `~/.npmrc` sa environment.

Kung babaguhin mo ang pangalan ng package na `v:` sa `ol.yml` , **pakitiyak na tanggalin muna `.i18n/v/ol`** at pagkatapos ay i-publish ito.

##### Proxy Server Na Inilathala Ng npm

Kung ang mga user sa mainland China ay nakakaranas ng mga problema sa network at hindi makapag-publish `npm` package, maaari nilang itakda ang environment variable `https_proxy` para i-configure ang proxy server.

Ipagpalagay na ang port ng iyong proxy server ay `7890` , maaari mong isulat ang:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Self-Host Na Nilalaman

Kung gusto mong i-self-host ang nilalaman, i-edit muna `md/.i18n/htm/ol.yml` at baguhin `v: //unpkg.com/i18n.site` sa iyong prefix ng URL, gaya ng `v: //i18n-v.xxx.com` .

Ipasok ang `md` na direktoryo at tumakbo

```
i18n.site --htm_conf ol --save
```

o abbreviation

```
i18n.site -c ol -s
```

Pagkatapos, i-configure ang content sa `md/out/ol/v` directory sa URL prefix path na itinakda sa `v:` .

Panghuli, **i-configure ang oras ng cache ng path na nagtatapos sa `/.v` hanggang `1s`** , kung hindi, hindi agad ma-access ang bagong inilabas na content.

Ang oras ng cache para sa iba pang mga path ay maaaring itakda sa isang taon o higit pa upang mabawasan ang mga hindi kinakailangang kahilingan.

##### Mag-Host Ng Nilalaman Sa s3

Para sa self-host na nilalaman, bilang `CDN` sa paggamit ng iyong sariling server, ang isa pang karaniwang opsyon ay ang paggamit ng `S3` +

Maaari mong gamitin ang [rclone](https://rclone.org) upang mag-log in sa `S3` server, pagkatapos ay sumangguni sa at baguhin ang sumusunod na script, at kopyahin lamang ang mga incremental na pagbabago sa `S3` para sa bawat release.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Tandaang i-configure `CDN` upang ang oras ng cache ng path na nagtatapos sa `/.v` ay `1s` , kung hindi, hindi agad ma-access ang bagong inilabas na nilalaman.

### Mag-Publish Ng Website

Maaaring i-deploy ang website kahit saan [github page](https://pages.github.com) at [cloudflare page](https://pages.cloudflare.com) ay mahusay na mga pagpipilian.

Dahil gumagamit ang website ng isang [solong pahinang arkitektura ng application](https://developer.mozilla.org/docs/Glossary/SPA) , tandaan na muling isulat ang mga path ng URL na hindi naglalaman ng `. ` hanggang `index.html` .

Isang beses lang kailangang i-deploy ang page ng entry sa website, at hindi na kailangang i-redeploy ang page ng entry ng website para sa mga susunod na update sa content.

#### I-Deploy Sa github page

[Mag-click muna dito github upang lumikha ng isang organisasyon](https://github.com/account/organizations/new?plan=free) Ang sumusunod na pangalan ng organisasyon ay `i18n-demo` bilang isang halimbawa.

Pagkatapos ay gumawa ng warehouse `i18n-demo.github.io` sa ilalim ng organisasyong ito (pakipalitan `i18n-demo` ng pangalan ng organisasyon na iyong nilikha):

![](https://p.3ti.site/1721098657.avif)

Kapag nag-publish ng nilalaman sa nakaraang artikulo, `out/ol/htm` ay nabuo Mangyaring ipasok ang direktoryo na ito at patakbuhin :

```
ln -s index.html 404.html
```


Dahil hindi sinusuportahan `github page` ang muling pagsusulat ng path ng URL, `404.html` ang ginagamit sa halip.

Pagkatapos ay patakbuhin ang sumusunod na command sa `htm` na direktoryo (tandaang palitan `i18n-demo/i18n-demo.github.io.git` ng iyong sariling address ng bodega) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Pagkatapos itulak ang code, hintaying matagumpay na tumakbo ang deployment ng `github page` (tulad ng ipinapakita sa ibaba) bago mo ito ma-access.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Para sa pahina ng demo mangyaring tingnan ang:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### I-Deploy Sa cloudflare page

[cloudflare page](//pages.cloudflare.com) Kumpara sa `github page` , nagbibigay ito ng muling pagsulat ng landas at mas madaling gamitin sa mainland China at mas madaling gamitin.

Ang deployment ng `cloudflare page` ay karaniwang batay sa deployment ng `github page` sa itaas.

Gumawa ng proyekto at itali ang `i18n-demo.github.io` warehouse sa itaas.

Ang proseso ay ipinapakita sa figure sa ibaba:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Mangyaring i-click ang `Add Account` upang magbigay ng access sa organisasyon `i18n-demo` .

Kung itinali mo ang bodega ng isa pang organisasyon, maaaring kailanganin mong i-click `Add Account` nang dalawang beses upang pahintulutan nang dalawang beses bago ipakita ang bagong organisasyon.

![](https://p.3ti.site/1721118306.avif)

Susunod, piliin ang warehouse `i18n-demo.github.io` , pagkatapos ay i-click ang `Begin setup` , at gamitin ang mga default na halaga para sa mga susunod na hakbang.

![](https://p.3ti.site/1721118490.avif)

Pagkatapos mag-binding sa unang pagkakataon, kailangan mong maghintay ng ilang minuto bago mo ito ma-access.

Pagkatapos ng deployment, maaari kang mag-bind ng custom na domain name.

![](https://p.3ti.site/1721119459.avif)

Pagkatapos i-binding ang custom na domain name, mangyaring pumunta sa domain name upang i-configure ang path na muling pagsusulat ng application na nag-iisang pahina, tulad ng ipinapakita sa ibaba:

![](https://p.3ti.site/1721119320.avif)

Ang mga patakaran sa larawan sa itaas ay ang mga sumusunod. Mangyaring palitan `i18n.site` sa unang linya sa ibaba ng domain name na iyong nakatali.

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

![](https://p.3ti.site/1721125111.avif)

Mangyaring palitan ang pagtutugma ng domain name sa ikalawang hakbang sa larawan sa itaas sa domain name na iyong nakatali.

#### Pag-Optimize Ng Pag-Deploy Ng Website Sa Mainland China

Kung gusto mong makakuha ng mas mahusay na pagganap sa pagiging naa-access sa kapaligiran ng network ng mainland China, mangyaring [magparehistro muna ng isang domain name](//beian.aliyun.com) .

Pagkatapos, gamitin ang object storage ng cloud vendor sa mainland + `CDN` I-deploy ang sumusunod na content `out/ol/htm` .

Maaari mong gamitin [`CDN`](//cloud.baidu.com/product/cdn.html) edge computing upang muling isulat ang path upang umangkop sa mga single-page na application.

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

Dahil hindi maaaring magkasabay ang record `MX` at record `CNAME` , kung gusto mong makatanggap ng mga email ng domain name sa parehong oras, kailangan mong makipagtulungan [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) script sa level `CNAME` sa record `A` .

Bilang karagdagan, dahil medyo mahal ang mga singil sa trapiko sa ibang bansa ng mga cloud vendor sa mainland China, kung gusto mong i-optimize ang mga gastos, maaari mong gamitin [ang libreng geographical na resolution ng DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) at ang custom na domain name ng [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (tulad ng ipinapakita sa ibaba) para makamit traffic diversion──Trapiko sa mainland China Baidu Cloud `CDN` , ang internasyonal na trapiko ay cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ang mga solusyon sa pag-optimize ng deployment na ito ay mas kumplikado at ipakikilala sa magkakahiwalay na mga kabanata sa hinaharap.

#### Generic Na Domain Name Redirection

Kung gumagamit ka ng `i18n.site` upang bumuo ng isang website bilang iyong pangunahing website, karaniwang kailangan mong i-configure ang pag-redirect ng pan-domain, iyon ay, pag-redirect ng access sa `*.xxx.com` (kabilang ang `www.xxx.com` ) hanggang `xxx.com` .

Ang pangangailangang ito ay maaaring makamit sa tulong ng Alibaba Cloud `CDN` `EdgeScript` ( [English document](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinese document](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Idagdag ang domain name sa [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) at ituro ang domain name `*.xxx.com` hanggang `CNAME` sa Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Halimbawa, ang configuration ng pag-redirect ng pangalan ng pan-domain na `*.i18n.site` sa larawan sa itaas ay ang mga sumusunod:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### I-Deploy Gamit Ang nginx

Mangyaring magdagdag ng pagsasaayos na katulad ng sumusunod sa `server` talata ng nginx Mangyaring baguhin `/root/i18n/md/out/ol/htm` sa landas ng iyong sariling proyekto `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Istraktura Ng Direktoryo

#### `public`

Mga static na file ng website, gaya ng `favicon.ico` , `robots.txt` , atbp.

Ang mga icon na file dito ay maaaring mabuo gamit ang [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Sa ilalim ng `.i18n` na direktoryo ay ang mga configuration file, translation cache, atbp. ng `i18n.site` Tingnan ang susunod na kabanata ["Configuration"](/i18n.site/conf) para sa mga detalye.

#### `en`

Direktoryo ng pinagmulang wika, na tumutugma sa `en` ng `fromTo` sa `.i18n/conf.yml` na configuration file

```yaml
i18n:
  fromTo:
    en: zh
```

Mangyaring sumangguni sa pagsasaayos ng pagsasalin [i18](/i18/use)