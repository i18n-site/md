# Install (Dɔgɔtɔrɔso) &

## Labɛnni Taamasiyɛn

`i18n.site` `i18` [`i18`](/i18/use)

## Ka Sigi

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Porozɛ Demokarasi

An ka daminɛ ni demo porozɛ ye ka baara kɛcogo dege `i18n.site`

An bɛ fɔlɔ ka demo repository clone ani ka cikan in kɛ nin cogo in na:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Baarakɛlaw minnu bɛ Sinuwa jamanaba la, olu bɛ se ka:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` basigi kloni ka ɲɛbila tɔgɔ ka kan ka kɛ `md` ye walasa ka sigida lajɛ nɔgɔya ni `docker` .

### Ka Bayɛlɛma

Fɔlɔ, `i18n.site` `zh` `en` `md`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Boli kɔfɛ, bamanankan baarakɛcogo ni cache files bɛna dilan Aw ye aw hakili to a la k’u fara marayɔrɔ `git add . ` kan `md`

### Sigida Lajɛ Fɔlɔ

Install and `docker` ( `MAC` bɛ ladilikan di ka baara kɛ ni [orbstack](https://orbstack.dev) ye i n'a fɔ `docker` ka boli waati ).

O [https://127.0.0.1](https://127.0.0.1) fɛ, `./up.sh` ka don `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Poste Kɔnɔkow

`i18n.site`[​](https://developer.mozilla.org/docs/Glossary/SPA)

Sanfɛ bamanankan baara kɛlen kɔfɛ, `htm` ni `v` ɲɛbilasɛbɛnw bɛna dilan `md/out/dev`

Yan `.i18n/htm/dev.yml` `dev`

Kɔnɔkow : `dev`

`htm`

`v` Annuaire kɔnɔ, site web kɔnɔkow bɛ sɔrɔ ni version number ye.

Sigida ɲɛjirali bɛna filenw bɛɛ kopi kɛ `out/dev/v/0.1.0`

Walasa ka bɔ foroba la, dosiye caman caman cili bɛna kopi kɛ version nimɔrɔ kura kɔnɔ.

#### Baara Kɛ Ni -c Ye Walasa Ka Labɛncogo Filen Jira

Labɛnni-dosiyɛri danfaralenw bɛna ɲɛbilasɛbɛnw dilan minnu bɛ bɛn o ma `out`

Misali la, `.i18n/htm/ol.yml` bɛna `out/ol` ɲɛbilasɛbɛn dɔ da.

`dev.yml` `ol.yml`

`dev` `development`
`ol` `online` `-n` `npm`

Aw bɛ se fana ka labɛnni-dosiyɛri wɛrɛw Dabɔ Baara kɛ ni `--htm_conf`

I n'a fo:
```
i18n.site --htm_conf yourConfig --save
```

Yan `--save` bɛ update bɔli version numéro jira.

#### <a rel=id href="#npm" id="npm"></a> Aw ye kɔnɔkow bɔ npmjs.com kan

[Kɔnɔkow](/i18n.site/feature#ha) bɔli ka [npmjs.com](//npmjs.com)

##### npm login & Ka Bila

Install `nodejs` baara kɛ ni `npm login` ye walasa ka don.

Edit `md/.i18n/htm/ol.yml` ka `i18n.site` in `v: //unpkg.com/i18n.site` Changer ka kɛ i yɛrɛ ta ye `npm` pake tɔgɔ.

Baara kɛ ni pake tɔgɔ ye min tɛ mɔgɔ si la dɔrɔn [npmjs.com](//npmjs.com)

Ni **`//unpkg.com/`** `/.v` `v:` `i18n.site` ka da `npm`

`i18n.site --npm` walima `i18n.site -n` boli `md`

Ni i bɛ baara kɛ ni sigida jɛlen `~/.npmrc` min bɛ taa ɲɛ walasa ka gafe bɔ, kun t'a la k'a sigi sen kan `nodejs`

N'i **`.i18n/v/ol`** pake tɔgɔ sɛmɛntiya `v:` in `ol.yml`

##### Proxy Server Min Bɔra npm Fɛ

Ni baarakɛlaw minnu bɛ Sinuwa jamanaba kɔnɔ, olu ye gɛlɛyaw sɔrɔ ɛntɛrinɛti `https_proxy` , wa u ma se ka `npm`

Ni an y’a miiri ko i ka proxy server port ye `7890` i bɛ se ka sɛbɛnni kɛ:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Kɔnɔkow Minnu Bɛ Kɛ U Yɛrɛ Ye

N’i ​​b’a fɛ ka kɔnɔkow jate i yɛrɛ ye, fɔlɔ, `v: //unpkg.com/i18n.site` `v: //i18n-v.xxx.com` `md/.i18n/htm/ol.yml`

Aw bɛ don `md`

```
i18n.site --htm_conf ol --save
```

walima a surunyacogo

```
i18n.site -c ol -s
```

O `v:` , kɔnɔkow labɛn `md/out/ol/v`

A laban na, **`1s` min bɛ laban ni `/.v`**

Sira wɛrɛw ka cache waati bɛ se ka sigi san kelen walima ka tɛmɛ o kan walasa ka dɔ bɔ ɲininiw na minnu tɛ mako ɲɛ.

##### Jatigila Kɔnɔkow Ka s3

Walasa ka kɔnɔkow jate i yɛrɛ ye, ka fara i yɛrɛ ka baarakɛminɛnw baara kan, fɛɛrɛ wɛrɛ min bɛ kɛ tuma caman na + o ye ka baara kɛ `CDN` `S3`

I bɛ se ka `S3` kɛ `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Aw hakili to a `/.v` `1s` `CDN`

### Site Web Bɔ Kɛnɛ Kan

Site web bɛ se ka bila yɔrɔ bɛɛ [github page](https://pages.github.com) wa [cloudflare page](https://pages.cloudflare.com) ye sugandili ɲumanw ye.

Ikomi siti in bɛ [ɲɛ kelen baarakɛminɛn dɔ](https://developer.mozilla.org/docs/Glossary/SPA) jɔcogo ta , aw hakili to a la ka URL sira sɛbɛn kokura min tɛ `index.html` ye `. `

Site web doncogo ɲɛ ka kan ka bila sen kan siɲɛ kelen dɔrɔn, wa a mago tɛ ka siti doncogo ɲɛ bila senkan kokura walasa ka kɔnɔkow sɛmɛntiya kɔfɛ.

#### A Bila Sen Kan github Ɲɛ Kan

Fɔlɔ [ka digi github walasa ka jɛkulu dɔ dabɔ](https://github.com/account/organizations/new?plan=free) nin jɛkulu tɔgɔ in ye misali ye `i18n-demo`

O kɔfɛ, depo dɔ dabɔ nin jɛkulu in `i18n-demo.github.io` (Aw ye `i18n-demo` bila a nɔ na ni jɛkulu tɔgɔ ye min dabɔra):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Ni barokun tɛmɛnen kɔnɔkow bɔra, : dabɔra Aw ye don nin ɲɛbilasɛbɛn in kɔnɔ ka boli `out/ol/htm`

```
ln -s index.html 404.html
```


Sabula `github page` tɛ URL sira sɛbɛnni dɛmɛ, o la `404.html` bɛ Kɛ o nɔ na.

O kɔfɛ : `i18n-demo/i18n-demo.github.io.git` cikan in kɛ `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Kode gɛrɛgɛrɛ kɔfɛ, i ka `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Walasa ka demo page lajɛ aw ye nin lajɛ:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Deploy on cloudflare Ɲɛ Kan

[cloudflare page](//pages.cloudflare.com) i y'a suma ni `github page`

`cloudflare page` `github page`

Porozɛ dɔ dabɔ ka sanfɛ depo siri `i18n-demo.github.io`

Taabolo jiralen bɛ ja in na min bɛ duguma:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Aw bɛ se ka `Add Account` walasa ka sira di `i18n-demo` ma .

N’i ​​ye jɛkulu wɛrɛ ka fɛnmarayɔrɔ siri, i bɛ se ka `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

O kɔfɛ `i18n-demo.github.io` Warehouse sugandi, o kɔ, `Begin setup` digi, ka baara kɛ ni nafaw ye minnu bɛ kɛ nataw kama.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Siɲɛ fɔlɔ sirilen kɔfɛ, aw ka kan ka miniti damadɔw makɔnɔ sani aw ka se ka don a la.

Deployment kɔfɛ, i bɛ se ka domaine tɔgɔ ladamulen dɔ siri.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Domini tɔgɔ ladamulen sirilen kɔfɛ, i bɛ taa domani tɔgɔ la walasa ka ɲɛ kelen-kelen-application sira sɛbɛnni kura labɛn, i n’a fɔ a jiralen bɛ cogo min na jukɔrɔ:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Sariya minnu bɛ ja in kan sanfɛ, olu ye ninnu ye Aw bɛ se ka `i18n.site`

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

Ka fara o kan, aw bɛ cakɛda sariyaw labɛn, i n’a fɔ a jiralen bɛ cogo min na jukɔrɔ, ka cakɛda kuntaala sigi kalo kelen na.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Aw ye domani tɔgɔ bɛnkan Changer (Yɛlɛma) taabolo filanan na ja min bɛ sanfɛ ka kɛ domaine tɔgɔ ye aw ye min siri.

#### Site Webw Bilali Baara Kɛcogo Ɲuman Na Sinuwa Jamanaba Kɔnɔ

N’i ​​b’a fɛ ka seko ni dɔnko baarakɛcogo ɲuman sɔrɔ Sinuwa jamanaba ka rezo sigida la, i ka [domani tɔgɔ sɛbɛn](//beian.aliyun.com) fɔlɔ.

O kɔfɛ, baara kɛ ni sankaba feerelaw ka `out/ol/htm` marali `CDN` Sinuwa jamanaba kɔnɔ +

Aw bɛ se ka baara kɛ ni edge computing ye walasa ka sira sɛbɛn kokura walasa ka ladamu ɲɛ kelen baarakɛcogo la, i n’a fɔ [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) A bɛ se ka labɛn nin cogo la:

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

`CNAME` `MX` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` `A`

Ka fara o kan, bawo sankaba feerelaw ka jamana kɔkan sirako sara bɛ Sinuwa jamanaba kɔnɔ, n’i b’a fɛ ka musakaw ɲɛnabɔ ka ɲɛ, i bɛ se ka baara kɛ ni [Huawei DNS ka dugukoloko ɲɛnabɔli fu ye](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ani [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ka domɛni tɔgɔ ladamulen (i n’a fɔ a jiralen bɛ cogo min na jukɔrɔ) walasa ka se ka sɔrɔ sirako jiginni──Jagokɛlaw ka Sinuwa jamanaba la Baidu Cloud `CDN` diɲɛ sirako bɛ taa cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

O baarakɛcogo ɲuman ɲɛnabɔcogo ninnu ka gɛlɛn kosɛbɛ, wa u bɛna don sapitiri danfaralenw kɔnɔ don nataw la.

#### Domɛni Tɔgɔ Caman Cili

N’i ​​bɛ `xxx.com` `*.xxx.com` `www.xxx.com` `i18n.site`

nin wajibi in bɛ se ka kɛ ni Alibaba Cloud ka `EdgeScript` ( [tubabukan sɛbɛn](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Sinuwa sɛbɛn](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) dɛmɛ ye `CDN`

aw bɛ domani tɔgɔ dɔ fara [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) kɔnɔ ka `*.xxx.com` tɔgɔ jira Alibaba Cloud `CDN` ka `CNAME` la .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Misali la, pan-domain tɔgɔ sinsinni labɛncogo `*.i18n.site` bɛ ja in sanfɛ, o ye nin ye:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Deploy Ni nginx Ye

`/root/i18n/md/out/ol/htm` ye labɛn dɔ fara a kan min bɛ tali kɛ nin `server` `out/ol/htm` nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Annuaire (Daɲɛgafew) Sigicogo

#### Foroba

Siti in ka dosiye jɔlenw, i n’a fɔ `favicon.ico` `robots.txt` , wdfl.

ikomi filenw bɛ se ka dilan ni [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n Ye

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### en

Source language directory, min bɛ `.i18n/conf.yml` `fromTo` `en` ma min bɛ configuration file kɔnɔ

```yaml
i18n:
  fromTo:
    en: zh
```

Aw ye bamanankan baarakɛcogo lajɛ [i18](/i18/use)

