# Deployment Ug Online

`i18n.site` nagsagop sa usa ka [panid nga arkitektura sa aplikasyon](https://developer.mozilla.org/docs/Glossary/SPA) , ug ang panid sa pagsulod sa website ug ang sulud sa website gi-deploy nga independente.

Human sa pagpadagan sa ibabaw nga hubad, ang mga direktoryo `htm` ug `v` mabuhat ubos sa `md/out/dev` nga direktoryo.

Dinhi, `dev` nagpasabot nga kini gitukod base sa `.i18n/htm/dev.yml` configuration file.

`dev` nga direktoryo :

Ang `htm` nga direktoryo mao ang panid sa pagsulod sa website.

Ang `v` nga direktoryo adunay sulud sa website nga adunay mga numero sa bersyon.

Ang lokal nga preview wala magtagad sa numero sa bersyon ug kopyahon ang tanan nga mga file sa `out/dev/v/0.1.0` nga direktoryo.

Para sa opisyal nga pagpagawas, ang nausab nga mga file makopya ngadto sa bag-ong bersyon nga direktoryo sa numero.

## Tinoa Ang Configuration File Nga Adunay `-c`

Ang lainlaing mga file sa pag-configure maghimo katugbang nga mga direktoryo sa `out` nga direktoryo.

Pananglitan, `.i18n/htm/main.yml` maghimo sa `out/main` nga direktoryo.

`dev.yml` ug `main.yml` mao ang default nga mga configuration.

`dev` mao ang minubo sa `development` , nga nagpaila sa development environment, gigamit alang sa lokal nga preview, ug mao usab ang default configuration file.
`ol` mao ang abbreviation sa `online` , nga nagpakita sa online nga palibot, nga gigamit alang sa opisyal nga pagpagawas Kini mao usab ang default configuration file sa diha nga ang paggamit sa command line parameters `-n` ngadto sa `npm` sa pagpagawas.

Mahimo ka usab maghimo ug uban pang mga file sa pag-configure gamit `--htm_conf` sa linya sa mando aron mahibal-an ang ngalan sa file sa pag-configure nga gamiton:

pananglitan:
```
i18n.site --htm_conf dist --save
```

Dinhi `--save` nagrepresentar sa numero sa bersyon sa pagpagawas sa update.

## <a rel=id href="#npm" id="npm"></a> Imantala ang sulod sa npmjs.com

Ang pagpatik sa sulod sa [npmjs.com](//npmjs.com) mao ang girekomenda nga default nga solusyon (tan-awa [ang Front-end High Availability](/i18n.site/feature#ha) ).

### npm &

I-install `nodejs` , pag-log in gamit ang `npm login` .

I-edit `md/.i18n/htm/main.yml` ug usba ang bili sa [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` isip imong kaugalingon nga `npm` nga ngalan sa pakete ang [npmjs.com](//npmjs.com) .

Unya usba ang `md/.i18n/htm/main.package.json`

Pagdalag `i18n.site --npm` o `i18n.site -n` sa `md` nga direktoryo aron mahubad ug mamantala.

Kung mogamit ka usa ka padayon nga panagsama nga palibot aron mamantala, dili kinahanglan nga i-install `nodejs` Kopyaha lang ang naka-log-in ug mga pagtugot sa pagmantala `~/.npmrc` sa palibot.

Kung imong usbon ang ngalan sa package nga `v:` sa `main.yml` , palihug **siguroha nga papason una `.i18n/v/main`** ug dayon imantala kini.

#### Ang Proxy Server Nga Gipatik Sa npm

Kung ang mga tiggamit sa mainland China makasugat og mga problema sa network ug dili makahimo sa pagmantala `npm` nga mga pakete, mahimo nilang itakda ang environment variable `https_proxy` aron ma-configure ang proxy server.

Sa paghunahuna nga ang imong proxy server port kay `7890` , mahimo nimong isulat:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Self-Host Nga Sulod

Kung gusto nimo nga i-host sa kaugalingon ang sulud, una nga i-edit `md/.i18n/htm/main.yml` ug usba `v: //unpkg.com/i18n.site` sa imong prefix sa URL, sama sa `v: //i18n-v.xxx.com` .

Pagsulod sa `md` nga direktoryo ug pagdagan

```
i18n.site --htm_conf ol --save
```

o abbreviation

```
i18n.site -c ol -s
```

Dayon, i-configure ang sulod sa `md/out/main/v` directory ngadto sa URL prefix path nga gitakda sa `v:` .

Sa katapusan, **i-configure ang oras sa cache sa agianan nga nagtapos sa `/.v` hangtod `1s`** , kung dili ang bag-ong gipagawas nga sulud dili ma-access dayon.

Ang oras sa cache alang sa ubang mga agianan mahimong itakda sa usa ka tuig o labaw pa aron makunhuran ang wala kinahanglana nga mga hangyo.

## Pag-Host Sa Sulud Sa s3

Sa self-host nga sulod, dugang sa paggamit sa imong kaugalingong server, laing komon nga kapilian mao ang paggamit `CDN` `S3` +

Mahimo nimong gamiton [rclone](https://rclone.org) sa pag-log in sa `S3` server, dayon i-refer ug usbon ang mosunod nga script, ug kopyaha lang ang incremental nga mga kausaban ngadto sa `S3` alang sa matag pagpagawas.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Hinumdumi nga i-configure `CDN` aron ang oras sa cache sa agianan nga natapos sa `/.v` mao ang `1s` , kung dili ang bag-ong gipagawas nga sulud dili ma-access dayon.

## Imantala Ang Website

Ang website mahimong ma-deploy bisan asa [github page](https://pages.github.com) ug ang [cloudflare page](https://pages.cloudflare.com) maayong mga pagpili.

Tungod kay ang website naggamit sa usa ka [panid nga arkitektura sa aplikasyon](https://developer.mozilla.org/docs/Glossary/SPA) , hinumdomi nga isulat pag-usab ang mga agianan sa URL nga wala’y `. ` hangtod `index.html` .

Ang panid sa pagsulod sa website kinahanglan ra nga ma-deploy kausa, ug dili kinahanglan nga i-redeploy ang panid sa pagsulod sa website alang sa sunod nga mga update sa sulud.

### I-Deploy Sa github page

Unang [pag-klik github aron makahimo og](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Dayon paghimo og bodega `i18n-demo.github.io` ubos niini nga organisasyon (palihug pulihan ang `i18n-demo` sa ngalan sa organisasyon nga imong gibuhat):

![](https://p.3ti.site/1721098657.avif)

Kung gipatik ang sulud sa miaging artikulo, `out/main/htm` ang nahimo Palihug isulod kini nga direktoryo ug dagan :

```
ln -s index.html 404.html
```


Tungod kay `github page` dili mosuporta sa URL nga pagsulat pag-usab, `404.html` ang gigamit.

Dayon padagana ang mosunod nga sugo sa `htm` nga direktoryo (hinumdomi nga pulihan `i18n-demo/i18n-demo.github.io.git` sa imong kaugalingong address sa bodega) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Human sa pagduso sa code, hulata ang deployment sa `github page` nga malampuson nga modagan (sama sa gipakita sa ubos) sa dili pa nimo kini ma-access.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Para sa demo page palihog tan-awa:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### I-Deploy Sa cloudflare Nga Panid

[cloudflare page](//pages.cloudflare.com) `github page`

Ang deployment sa `cloudflare page` kasagaran gibase sa deployment sa `github page` sa ibabaw.

Paghimo og proyekto ug ihigot ang `i18n-demo.github.io` bodega sa ibabaw.

Ang proseso gipakita sa hulagway sa ubos:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Palihug i-klik `Add Account` aron mahatagan og access ang organisasyon `i18n-demo` .

Kung gigapos nimo ang bodega sa laing organisasyon, kinahanglan nimo nga i-klik `Add Account` kaduha aron magtugot kaduha sa dili pa ipakita ang bag-ong organisasyon.

![](https://p.3ti.site/1721118306.avif)

Sunod, pilia ang bodega `i18n-demo.github.io` , dayon i-klik ang `Begin setup` , ug gamita ang default nga mga kantidad alang sa sunod nga mga lakang.

![](https://p.3ti.site/1721118490.avif)

Human sa pagbugkos sa unang higayon, kinahanglang maghulat ka ug pipila ka minuto sa dili pa nimo ma-access kini.

Pagkahuman sa pag-deploy, mahimo nimong ibugkos ang usa ka naandan nga ngalan sa domain.

![](https://p.3ti.site/1721119459.avif)

Human sa paggapos sa custom nga domain name, palihug adto sa domain name aron i-configure ang path rewriting sa single-page nga aplikasyon, sama sa gipakita sa ubos:

![](https://p.3ti.site/1721119320.avif)

Ang mga lagda sa ibabaw nga hulagway mao ang mosunod. Palihug ilisan `i18n.site` sa unang linya sa ubos sa ngalan sa domain nga imong gigapos.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Dugang pa, palihug i-configure ang mga lagda sa cache, ingon sa gipakita sa ubos, ug itakda ang gidugayon sa cache sa usa ka bulan.

![](https://p.3ti.site/1721125111.avif)

Palihug usba ang pagpares sa ngalan sa domain sa ikaduhang lakang sa hulagway sa ibabaw ngadto sa ngalan sa domain nga imong gigapos.

### Pag-Optimize Sa Pag-Deploy Sa Website Sa Mainland China

Kung gusto nimo makakuha og mas maayo nga performance sa accessibility sa network environment sa mainland China, palihog [magparehistro una og domain name](//beian.aliyun.com) .

Dayon, gamita ang butang storage sa cloud vendors sa mainland China + I-deploy ang mosunod nga sulod `CDN` `out/main/htm`

Mahimo nimong gamiton ang edge computing aron isulat pag-usab ang agianan aron ipahiangay sa usa ka panid nga aplikasyon Pananglitan, [ang Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) mahimong ma-configure sama niini:

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
  // Ang mga ulohan sa tubag mahimong itakda sa pag-debug sa output, sama sa out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Tungod kay ang rekord `MX` ug rekord `CNAME` dili mag-uban, kung gusto nimo nga makadawat sa mga email sa ngalan sa domain sa parehas nga oras, kinahanglan nimo nga [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) sa script sa lebel `CNAME` hangtod sa record `A` .

Dugang pa, tungod kay ang mga bayad sa trapiko sa gawas sa nasud sa mga nagbaligya sa panganod sa mainland China medyo mahal, kung gusto nimo nga ma-optimize ang mga gasto, mahimo nimong gamiton [ang libre nga resolusyon sa heyograpiya sa DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ug ang custom nga ngalan sa domain sa [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (sama sa gipakita sa ubos) aron makab-ot traffic diversion──Traffic routing sa mainland China Baidu Cloud `CDN` , internasyonal nga trapiko moadto cloudflare .

![](https://p.3ti.site/1721119788.avif)

Kini nga mga solusyon sa pag-optimize sa pag-deploy mas komplikado ug ipaila sa lain nga mga kapitulo sa umaabot.

### Generic Nga Domain Name Redirection

Kung mogamit ka og `i18n.site` aron makamugna og website isip imong nag-unang website, kasagaran kinahanglan nimo nga i-configure ang pan-domain redirection, nga mao, redirect access sa `*.xxx.com` (lakip ang `www.xxx.com` ) ngadto sa `xxx.com` .

Kini nga kinahanglanon mahimong makab-ot sa tabang sa Alibaba Cloud `CDN` `EdgeScript` ( [English nga dokumento](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinese nga dokumento](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Idugang ang domain name sa [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ug itudlo ang domain name `*.xxx.com` `CNAME` sa Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Pananglitan, ang pan-domain name redirection configuration sa `*.i18n.site` sa hulagway sa ibabaw mao ang mosunod:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### I-Deploy Gamit Ang nginx

Palihug idugang ang usa ka configuration nga susama sa mosunod sa `server` paragraph sa nginx Palihog usba `/root/i18n/md/out/main/htm` ngadto sa dalan sa imong kaugalingong proyekto `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Base Sa `github action` Padayon Nga Paghiusa

Mahimo nimong i-refer ang mosunod aron ma-configure ang imong `github action` :

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

Ingon sa makita sa configuration, kini nga workflow ma-trigger kung magduso sa branch `main` ug branch `dist` .

Ang workflow mogamit sa configuration file nga katugbang sa branch name aron imantala ang dokumento Dinhi, `.i18n/htm/main.yml` ug `.i18n/htm/dist.yml` ang gamiton isip publishing configuration matag usa.

Among girekomendar ang mosunod nga labing maayong gawi alang sa proseso sa pagpagawas sa dokumento:

Kung ang mga pagbag-o giduso sa branch `main` , ang dokumento ma-trigger nga matukod ug i-deploy sa preview station (ang preview station anaa [github page](//pages.github.com) ).

Human sa pagkumpirma nga ang dokumento husto sa preview site, ang code i-merge ug iduso ngadto sa branch `dist` , ug ang opisyal nga pagtukod ug deployment moadto online.

Siyempre, ang pag-implementar sa proseso sa ibabaw nanginahanglan pagsulat og dugang nga mga configuration.

Mahimo nimong i-refer ang aktuwal nga proyekto [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` ug `secrets.NPM_TOKEN` sa configuration nagkinahanglan kanimo sa pag-configure sa sekreto nga mga variable sa code base.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` mao ang publishing token sa package `npm` sa configuration [npmjs.com](//npmjs.com) paghimo og token nga adunay permiso sa pagpatik (sama sa gipakita sa ubos).

![](//p.3ti.site/1730969906.avif)


## Istruktura Sa Direktoryo

### `public`

Static nga mga file sa website, sama sa `favicon.ico` , `robots.txt` , ug uban pa.

Ang mga file sa icon dinhi mahimong mabuhat gamit ang [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Ubos sa `.i18n` nga direktoryo mao ang mga configuration file, translation cache, ug uban pa sa `i18n.site` Tan-awa ang sunod nga kapitulo ["Configuration"](/i18n.site/conf) alang sa mga detalye.

### `en`

Direktoryo sa pinulongang tinubdan, katumbas sa `en` sa `fromTo` sa `.i18n/conf.yml` nga configuration file

```yaml
i18n:
  fromTo:
    en: zh
```

Palihog tan-awa ang configuration sa paghubad [i18](/i18/use)