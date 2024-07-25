# I-Install &

## Token Sa Pag-Configure

`i18n.site` Ang `i18` tool sa paghubad kay na-embed, palihog [i-klik dinhi para i-refer ang `i18` document para ma-configure ang access token](/i18/use) .

## Pag-Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Nga Proyekto

Magsugod ta sa usa ka proyekto sa demo ug makat-on unsaon paggamit `i18n.site`

Una namong gi-clone ang demo repository ug gipadagan ang command sama sa mosunod:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Ang mga tiggamit sa mainland China mahimong:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Ang direktoryo nga ngalan sa code base clone kinahanglang `md` aron mapadali `demo.i18n.site` lokal nga preview sa `docker` .

### Paghubad

Una, pagsulod sa `md` direktoryo ug pagdagan `i18n.site` , nga maghubad sa `en` sa `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Human sa pagdagan, ang mga hubad ug cache nga mga file mabuhat Palihug hinumdumi nga idugang kini sa repository `git add . ` sa `md` .

### Lokal Nga Preview

`docker` `MAC` instalar ug [orbstack](https://orbstack.dev) `docker`

Dayon, pagsulod sa `docker` direktoryo ug pagdagan `./up.sh` , ug dayon bisitaha ang [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### I-Post Ang Sulod

`i18n.site` Nagsagop sa usa ka [panid nga arkitektura sa aplikasyon](https://developer.mozilla.org/docs/Glossary/SPA) , ug ang panid sa pagsulod sa website ug ang sulod sa website kay independente nga gipakatap.

Human sa pagpadagan sa ibabaw nga hubad, `htm` ug `v` mga direktoryo mamugna sa `md/out/dev`

Dinhi, `dev` nagpakita nga kini gitukod base sa `.i18n/htm/dev.yml` file.

Ubos sa : `dev`

Ubos sa direktoryo mao ang panid `htm` pagsulod sa website.

Ang `v` adunay sulod sa website nga adunay numero sa bersyon.

Ang lokal nga preview mokopya sa tanang file ngadto sa `out/dev/v/0.1.0`

Para sa opisyal nga pagpagawas, ang nausab nga mga file makopya ngadto sa bag-ong bersyon nga direktoryo sa numero.

#### Gamita Ang -c Aron Itakda Ang Configuration File

Ang lainlaing mga file sa pag-configure maghimo katugbang nga mga direktoryo sa ilawom sa direktoryo `out`

Pananglitan, `.i18n/htm/ol.yml` maghimo ug `out/ol` direktoryo.

`dev.yml` ug `ol.yml` mao ang default nga mga pag-configure.

`dev` mao ang abbreviation sa `development` , nga nagrepresentar sa development environment, gigamit alang sa lokal nga preview, ug mao usab ang default configuration file.
`ol` mao ang abbreviation sa `online` , nga nagrepresentar sa online nga palibot, gigamit alang sa opisyal nga pagpagawas, ug mao usab ang default nga file sa pag-configure sa pagmantala sa `npm` gamit ang command line parameter `-n` .

Mahimo ka usab maghimo ug ubang mga file sa pag-configure `--htm_conf` ang linya sa mando aron mahibal-an ang ngalan sa file sa pag-configure:

pananglitan:
```
i18n.site --htm_conf yourConfig --save
```

Dinhi `--save` nagpakita sa numero sa bersyon sa pagpagawas sa update.

#### <a rel=id href="#npm" id="npm"></a> I-publish ang sulud sa npmjs.com

Ang pagpatik sa sulod sa [npmjs.com](//npmjs.com) mao ang girekomenda nga default nga solusyon (tan-awa [ang Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login &

I-install `nodejs` gamita ang `npm login` para maka-log in.

Edit `md/.i18n/htm/ol.yml` usba `i18n.site` sa `v: //unpkg.com/i18n.site` sa imong kaugalingon `npm` package name.

Gamita lang ang ngalan sa package nga walay tawo sa [npmjs.com](//npmjs.com)

Sa pagmantala base sa `npm` nga pakete, **siguroha nga gamiton `//unpkg.com/`** isip prefix sa `v:` value Ang cache time `i18n.site` ubos niining prefix path `/.v` kay espesyal nga gi-optimize aron sa tukma sa panahon nga pagtan-aw sa mga bag-ong gipagawas.

Dagan ang `i18n.site --npm` o `i18n.site -n` sa `md` aron mahubad ug mamantala.

Kung mogamit ka usa ka padayon nga panagsama nga `~/.npmrc` sa pagmantala, dili kinahanglan nga i-install kini `nodejs`

Kung imong usbon ang ngalan sa package sa `v:` `ol.yml` , palihug **siguroha nga papason una `.i18n/v/ol`** ug unya imantala kini.

##### Ang Proxy Server Nga Gipatik Sa npm

Kung ang mga tiggamit sa mainland China makasugat og mga problema sa network ug dili makamantala sa `npm` package, mahimo nilang i-set ang environment variable `https_proxy` aron ma-configure ang proxy server.

Sa paghunahuna nga ang imong proxy server port kay `7890` mahimo nimong isulat:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Self-Host Nga Sulod

Kung gusto nimo nga i-host sa kaugalingon ang sulud, una, `md/.i18n/htm/ol.yml` ug usba ang `v: //unpkg.com/i18n.site` sa imong prefix sa URL, sama sa `v: //i18n-v.xxx.com` .

Pagsulod sa `md` ug pagdagan

```
i18n.site --htm_conf ol --save
```

o abbreviation

```
i18n.site -c ol -s
```

Dayon, i-configure ang sulod sa direktoryo `v:` `md/out/ol/v`

Sa katapusan, **i-configure ang oras sa pagtago sa agianan `/.v` nagtapos sa `1s`** , kung dili ang bag-ong gipagawas nga sulud dili ma-access dayon.

Ang oras sa cache alang sa ubang mga agianan mahimong itakda sa usa ka tuig o labaw pa aron makunhuran ang wala kinahanglana nga mga hangyo.

##### Pag-Host Sa Sulud Sa s3

Sa self-host `CDN` sulod, dugang sa paggamit sa imong kaugalingong server, laing komon nga kapilian mao + paggamit `S3`

Mahimo nimong gamiton `S3` [rclone](https://rclone.org) Login `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Hinumdumi nga i-configure `CDN` aron ang oras sa cache sa dalan nga nagtapos sa `/.v` kay `1s` , kung dili dili ka maka-access dayon sa bag-ong gipagawas nga sulud.

### Imantala Ang Website

Ang website mahimong ma-deploy bisan asa [github page](https://pages.github.com) ug [cloudflare page](https://pages.cloudflare.com) maayong mga pagpili.

Tungod kay gisagop sa website ang arkitektura sa [usa ka panid nga aplikasyon](https://developer.mozilla.org/docs/Glossary/SPA) , hinumdumi nga isulat pag-usab ang agianan sa URL nga wala `. ` sa `index.html` .

Ang panid sa pagsulod sa website kinahanglan ra nga ma-deploy kausa, ug dili kinahanglan nga i-redeploy ang panid sa pagsulod sa website alang sa sunod nga mga update sa sulud.

#### I-Deploy Sa github page

Una [i-klik github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Dayon paghimo ug bodega ubos niini nga organisasyon `i18n-demo.github.io` (Palihug pulihan `i18n-demo` sa ngalan sa organisasyon nga imong gibuhat):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Kung gipatik ang sulud sa miaging artikulo, nahimo na `out/ol/htm` palihug pagsulod niini nga direktoryo ug pagdagan :

```
ln -s index.html 404.html
```


Tungod kay wala mosuporta `404.html` `github page`

Dayon padagana ang mosunod `i18n-demo/i18n-demo.github.io.git` sugo : `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Human sa pagduso sa code, paghulat alang sa deployment sa `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Para sa demo page palihog tan-awa:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### I-Deploy Sa Panid Sa cloudflare

[cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` Ang deployment kasagaran gibase sa deployment sa `github page` sa ibabaw.

Paghimo usa ka proyekto ug ihigot ang naa `i18n-demo.github.io` bodega.

Ang proseso gipakita sa hulagway sa ubos:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Palihug i-klik `Add Account` para mahatagan ug access ang `i18n-demo` .

Kung imong gigapos ang bodega sa laing organisasyon, kinahanglan nimo nga i-klik ang `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

Sunod pilia ang `i18n-demo.github.io` Warehouse, dayon i-klik ang `Begin setup` , ug gamita ang default values ​​para sa sunod nga mga lakang.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Human sa pagbugkos sa unang higayon, kinahanglang maghulat ka ug pipila ka minuto sa dili pa nimo kini ma-access.

Pagkahuman sa pag-deploy, mahimo nimong ibugkos ang usa ka naandan nga ngalan sa domain.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Human sa pagbugkos sa custom nga domain name, palihug adto sa domain name aron i-configure ang dalan nga pagsulat pag-usab sa usa ka panid nga aplikasyon, sama sa gipakita sa ubos:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Ang mga lagda sa hulagway sa ibabaw mao ang mosunod. Palihog ilisan ang `i18n.site`

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

Dugang pa, palihug i-configure ang mga lagda sa cache, ingon sa gipakita sa ubos, ug itakda ang gidugayon sa cache sa usa ka bulan.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Palihug usba ang pagpares sa ngalan sa domain sa ikaduhang lakang sa hulagway sa ibabaw ngadto sa ngalan sa domain nga imong gigapos.

#### Pag-Optimize Sa Pag-Deploy Sa Website Sa Mainland China

Kung gusto nimo makakuha og mas maayo nga performance sa accessibility sa network environment sa mainland China, palihog [magparehistro una og domain name](//beian.aliyun.com) .

Unya, gamita ang butang `out/ol/htm` sa cloud vendors sa mainland `CDN` +

Mahimo nimong gamiton ang edge computing aron isulat pag-usab ang agianan aron ipahiangay sa usa ka panid nga aplikasyon, sama sa [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) Mahimo kini nga ma-configure sama niini:

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

Tungod `MX` ang mga rekord ug `CNAME` nga mga rekord dili mag-uban, kung gusto nimo makadawat mga email sa ngalan sa domain sa parehas nga oras, kinahanglan nimo nga mokooperar sa [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) aron ma-flat ang `CNAME` sa `A` record.

Dugang pa, tungod kay ang mga bayad sa trapiko sa gawas sa nasud sa mga nagbaligya sa panganod sa mainland China medyo mahal, kung gusto nimo nga ma-optimize ang mga gasto, mahimo nimong gamiton [ang libre nga resolusyon sa heyograpiya sa DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ug ang custom nga ngalan sa domain sa [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (sama sa gipakita sa ubos) aron makab-ot traffic diversion──Traffic sa mainland China Baidu Cloud `CDN` internasyonal nga trapiko moadto cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Kini nga mga solusyon sa pag-optimize sa pag-deploy mas komplikado ug ipaila sa lain nga mga kapitulo sa umaabot.

#### Generic Nga Domain Name Redirection

Kon imong gamiton ang `i18n.site` aron makamugna og website isip imong nag-unang website, kasagaran kinahanglan nimo nga i-configure ang pan-domain redirection, nga mao, redirect `*.xxx.com` (lakip ang `www.xxx.com` ) access sa `xxx.com` .

Kini nga kinahanglanon makab-ot pinaagi sa tabang sa `EdgeScript` Alibaba `CDN` ( [English nga dokumento](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinese nga dokumento](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Pagdugang ug domain name sa [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ug itudlo `*.xxx.com` domain name sa Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Pananglitan, ang pan-domain name redirection configuration sa `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### I-Deploy Gamit Ang nginx

Palihog dugangi og configuration nga susama sa mosunod sa `server` nginx `/root/i18n/md/out/ol/htm` palihog usba kini sa dalan sa imong kaugalingong proyekto `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Istruktura Sa Direktoryo

#### Publiko

Static nga mga file sa website, sama sa `favicon.ico` `robots.txt` , ug uban pa.

Ang mga file sa icon dinhi mahimong mabuhat gamit ang [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Ubos sa direktoryo mao ang `i18n.site` 's configuration files, translation cache, ug uban pa. Tan-awa ang sunod nga kapitulo ["Configuration"](/i18n.site/conf) para sa mga detalye.

#### en

Direktoryo sa pinulongang tinubdan, katumbas `.i18n/conf.yml` `fromTo` `en` sa configuration file

```yaml
i18n:
  fromTo:
    en: zh
```

Palihog tan-awa ang configuration sa paghubad [i18](/i18/use)

