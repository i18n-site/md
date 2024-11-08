# Deployment at Online

`i18n.site` ay gumagamit ng isang [solong-pahinang arkitektura ng application](https://developer.mozilla.org/docs/Glossary/SPA) , at ang pahina ng pagpasok ng website at nilalaman ng website ay independiyenteng naka-deploy.

Pagkatapos patakbuhin ang pagsasalin sa itaas, ang mga direktoryo `htm` at `v` ay bubuo sa ilalim ng `md/out/dev` na direktoryo.

Dito, `dev` ay nangangahulugan na ito ay binuo batay sa `.i18n/htm/dev.yml` configuration file.

`dev` direktoryo :

Ang `htm` na direktoryo ay ang pahina ng pagpasok ng website.

Ang `v` na direktoryo ay naglalaman ng nilalaman ng website na may mga numero ng bersyon.

Walang pakialam ang lokal na preview sa numero ng bersyon at kokopyahin ang lahat ng file sa `out/dev/v/0.1.0` na direktoryo.

Para sa opisyal na paglabas, ang mga binagong file ay makokopya sa bagong direktoryo ng numero ng bersyon.

## Tukuyin Ang Configuration File Na May `-c`

Ang iba't ibang mga configuration file ay lilikha ng kaukulang mga direktoryo sa `out` na direktoryo.

Halimbawa, `.i18n/htm/main.yml` ay lilikha ng `out/main` direktoryo.

`dev.yml` at `main.yml` ang mga default na configuration.

`dev` ay ang abbreviation ng `development` , na nagpapahiwatig ng development environment, na ginagamit para sa lokal na preview, at ito rin ang default na configuration file.
`ol` ay ang pagdadaglat ng `online` , na nagpapahiwatig ng online na kapaligiran, na ginagamit para sa opisyal na paglabas Ito rin ang default na file ng pagsasaayos kapag gumagamit ng mga parameter ng command line `-n` hanggang `npm` upang ilabas.

Maaari ka ring gumawa ng iba pang configuration file Gamitin ang `--htm_conf` sa command line para tukuyin ang configuration file name na gagamitin:

halimbawa:
```
i18n.site --htm_conf dist --save
```

Dito kinakatawan `--save` ang numero ng bersyon ng paglabas ng update.

## <a rel=id href="#npm" id="npm"></a> Mag-publish ng nilalaman sa npmjs.com

Ang pag-publish ng nilalaman sa [npmjs.com](//npmjs.com) ay ang inirerekomendang default na solusyon (tingnan [ang Front-end High Availability](/i18n.site/feature#ha) ).

### npm Login & Post

I-install `nodejs` , mag-log in gamit ang `npm login` .

I-edit ang `md/.i18n/htm/main.yml` [npmjs.com](//npmjs.com) baguhin ang halaga ng [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` bilang iyong sariling `npm` pangalan ng package.

Pagkatapos ay baguhin ang `md/.i18n/htm/main.package.json`

Magpatakbo ng `i18n.site --npm` o `i18n.site -n` sa `md` na direktoryo upang isalin at i-publish.

Kung gumagamit ka ng tuloy-tuloy na integration environment para mag-publish, hindi na kailangang mag-install `nodejs` Kopyahin lang ang naka-log in at publishing permissions `~/.npmrc` sa environment.

Kung babaguhin mo ang pangalan ng package na `v:` sa `main.yml` , **pakitiyak na tanggalin muna `.i18n/v/main`** at pagkatapos ay i-publish ito.

#### Proxy Server Na Inilathala Ng npm

Kung ang mga user sa mainland China ay nakakaranas ng mga problema sa network at hindi makapag-publish ng `npm` package, maaari nilang itakda ang environment variable `https_proxy` para i-configure ang proxy server.

Ipagpalagay na ang port ng iyong proxy server ay `7890` , maaari mong isulat ang:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Self-Host Na Nilalaman

Kung gusto mong i-self-host ang nilalaman, i-edit muna `md/.i18n/htm/main.yml` at baguhin ang `v: //unpkg.com/i18n.site` sa iyong prefix ng URL, gaya ng `v: //i18n-v.xxx.com` .

Ipasok ang `md` na direktoryo at tumakbo

```
i18n.site --htm_conf ol --save
```

o abbreviation

```
i18n.site -c ol -s
```

Pagkatapos, i-configure ang content sa `md/out/main/v` directory sa URL prefix path na itinakda sa `v:` .

Panghuli, **i-configure ang oras ng cache ng path na nagtatapos sa `/.v` hanggang `1s`** , kung hindi, hindi agad ma-access ang bagong inilabas na content.

Ang oras ng cache para sa iba pang mga path ay maaaring itakda sa isang taon o higit pa upang mabawasan ang mga hindi kinakailangang kahilingan.

## Mag-Host Ng Nilalaman Sa s3

Para sa self-host na nilalaman, bilang karagdagan sa paggamit ng iyong sariling server, `CDN` isa pang karaniwang opsyon ay ang paggamit ng `S3` +

Maaari mong gamitin [rclone](https://rclone.org) upang mag-log in sa `S3` server, pagkatapos ay sumangguni sa at baguhin ang sumusunod na script, at kopyahin lamang ang mga incremental na pagbabago sa `S3` para sa bawat release.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Tandaang i-configure `CDN` upang ang oras ng cache ng path na nagtatapos sa `/.v` ay `1s` , kung hindi, hindi agad ma-access ang bagong inilabas na nilalaman.

## Mag-Publish Ng Website

Maaaring i-deploy ang website kahit saan [github page](https://pages.github.com) at ang [cloudflare page](https://pages.cloudflare.com) ay mahusay na mga pagpipilian.

Dahil gumagamit ang website ng isang [solong pahinang arkitektura ng application](https://developer.mozilla.org/docs/Glossary/SPA) , tandaan na muling isulat ang mga path ng URL na hindi naglalaman ng `. ` hanggang `index.html` .

Isang beses lang kailangang i-deploy ang page ng pagpasok ng website, at hindi na kailangang muling i-deploy ang page ng pagpasok ng website para sa mga kasunod na pag-update ng nilalaman.

### I-Deploy Sa github page

[Mag-click muna dito github upang lumikha ng isang organisasyon](https://github.com/account/organizations/new?plan=free) Ang sumusunod na pangalan ng organisasyon ay `i18n-demo` bilang isang halimbawa.

Pagkatapos ay gumawa ng warehouse `i18n-demo.github.io` sa ilalim ng organisasyong ito (pakipalitan ang `i18n-demo` ng pangalan ng organisasyon na iyong ginawa):

![](https://p.3ti.site/1721098657.avif)

Kapag nag-publish ng nilalaman sa nakaraang artikulo, `out/main/htm` ay nabuo Mangyaring ipasok ang direktoryo na ito at patakbuhin :

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

### I-Deploy Sa cloudflare page

[cloudflare page](//pages.cloudflare.com) Kumpara sa `github page` , nagbibigay ito ng muling pagsulat ng landas at mas madaling gamitin sa mainland China at mas madaling gamitin.

Ang deployment ng `cloudflare page` ay karaniwang batay sa deployment ng `github page` sa itaas.

Gumawa ng proyekto at itali ang `i18n-demo.github.io` bodega sa itaas.

Ang proseso ay ipinapakita sa figure sa ibaba:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Mangyaring i-click `Add Account` upang magbigay ng access sa organisasyon `i18n-demo` .

Kung itinali mo ang bodega ng ibang organisasyon, maaaring kailanganin mong i-click `Add Account` nang dalawang beses upang pahintulutan nang dalawang beses bago ipakita ang bagong organisasyon.

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
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Bilang karagdagan, mangyaring i-configure ang mga panuntunan sa cache, tulad ng ipinapakita sa ibaba, at itakda ang tagal ng cache sa isang buwan.

![](https://p.3ti.site/1721125111.avif)

Mangyaring baguhin ang pagtutugma ng domain name sa ikalawang hakbang sa larawan sa itaas sa domain name na iyong nakatali.

### Pag-Optimize Ng Pag-Deploy Ng Website Sa Mainland China

Kung gusto mong makakuha ng mas mahusay na pagganap sa pagiging naa-access sa kapaligiran ng network ng mainland China, mangyaring [magparehistro muna ng isang domain name](//beian.aliyun.com) .

Pagkatapos, gamitin ang object storage ng cloud vendor sa mainland China + I-deploy ang sumusunod na content `CDN` `out/main/htm`

Maaari mong gamitin ang edge computing upang muling isulat ang path upang umangkop sa mga single-page na application [`CDN`](//cloud.baidu.com/product/cdn.html)

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // Maaaring itakda ang mga header ng tugon upang i-debug ang output, gaya ng out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Dahil hindi maaaring magkasabay ang record `MX` at record `CNAME` , kung gusto mong makatanggap ng mga email ng domain name sa parehong oras, kailangan mong [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) sa script sa level `CNAME` sa record `A` .

Bilang karagdagan, dahil medyo mahal ang mga singil sa trapiko sa ibang bansa ng mga cloud vendor sa mainland China, kung gusto mong i-optimize ang mga gastos, maaari mong gamitin [ang libreng geographical na resolution ng DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) at ang custom na domain name ng [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (tulad ng ipinapakita sa ibaba) para makamit traffic diversion──Traffic routing sa mainland China Baidu Cloud `CDN` , ang internasyonal na trapiko ay napupunta cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ang mga solusyon sa pag-optimize ng deployment na ito ay mas kumplikado at ipakikilala sa magkakahiwalay na mga kabanata sa hinaharap.

### Generic Na Domain Name Redirection

Kung gumagamit ka `i18n.site` upang bumuo ng isang website bilang iyong pangunahing website, karaniwang kailangan mong i-configure ang pag-redirect ng pan-domain, iyon ay, pag-redirect ng access sa `*.xxx.com` (kabilang ang `www.xxx.com` ) hanggang `xxx.com` .

Ang pangangailangang ito ay maaaring makamit sa tulong ng Alibaba Cloud `CDN` `EdgeScript` ( [English document](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinese document](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Idagdag ang domain name sa [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) at ituro ang domain name `*.xxx.com` `CNAME` sa Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Halimbawa, ang configuration ng pag-redirect ng pangalan ng pan-domain na `*.i18n.site` sa larawan sa itaas ay ang mga sumusunod:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### I-Deploy Gamit Ang nginx

Mangyaring magdagdag ng pagsasaayos na katulad ng sumusunod sa `server` talata ng nginx Mangyaring baguhin `/root/i18n/md/out/main/htm` sa landas ng iyong sariling proyekto `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Batay Sa `github action` Tuloy-Tuloy Na Pagsasama

Maaari kang sumangguni sa mga sumusunod upang i-configure ang iyong `github action` :

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Tulad ng makikita sa pagsasaayos, ang daloy ng trabaho na ito ay na-trigger kapag nagtutulak sa branch `main` at branch `dist` .

Gagamitin ng workflow ang configuration file na naaayon sa pangalan ng sangay upang i-publish ang dokumento Dito, `.i18n/htm/main.yml` at `.i18n/htm/dist.yml` ang gagamitin bilang configuration ng pag-publish ayon sa pagkakabanggit.

Inirerekomenda namin ang mga sumusunod na pinakamahuhusay na kagawian para sa proseso ng paglabas ng dokumento:

Kapag ang mga pagbabago ay itinulak sa branch `main` , ang dokumento ay na-trigger na mabuo at i-deploy sa preview station (ang preview station ay available [github page](//pages.github.com) ).

Pagkatapos makumpirma na ang dokumento ay tama sa preview site, ang code ay isasama at itutulak sa branch `dist` , at ang opisyal na build at deployment ay mapupunta online.

Siyempre, ang pagpapatupad ng proseso sa itaas ay nangangailangan ng pagsusulat ng higit pang mga pagsasaayos.

Maaari kang sumangguni sa aktwal na proyekto para sa pag-script ng daloy ng trabaho [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` at `secrets.NPM_TOKEN` sa pagsasaayos ay nangangailangan sa iyo na i-configure ang mga lihim na variable sa base ng code.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` ay ang token sa pag-publish ng package `npm` sa configuration ng Bisitahin ang [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## Istraktura Ng Direktoryo

### `public`

Mga static na file ng website, gaya ng `favicon.ico` , `robots.txt` , atbp.

Ang mga icon na file dito ay maaaring mabuo gamit ang [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Sa ilalim ng `.i18n` na direktoryo ay ang mga configuration file, translation cache, atbp. ng `i18n.site` Tingnan ang susunod na kabanata ["Configuration"](/i18n.site/conf) para sa mga detalye.

### `en`

Direktoryo ng pinagmulang wika, na tumutugma sa `en` ng `fromTo` sa `.i18n/conf.yml` na configuration file

```yaml
i18n:
  fromTo:
    en: zh
```

Mangyaring sumangguni sa pagsasaayos ng pagsasalin [i18](/i18/use)