# Install Deploy &

## Nsiesiei Token

`i18n.site` `i18` [`i18`](/i18/use)

## Fa Sto So

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Adwuma No

Momma yɛmfa demo project mfi ase na yensua sɛnea wɔde bedi dwuma `i18n.site`

Yɛdi kan yɛ demo akoraeɛ no clone na yɛyɛ ahyɛdeɛ no sɛdeɛ ɛdidi soɔ yi:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Wɔn a wɔde di dwuma wɔ China asasepɔn so no betumi:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Ɛsɛ sɛ code base clone no directory din yɛ `md` na `docker` `demo.i18n.site`

### Kyerɛ Aseɛ

Nea edi kan no, hyɛn `md` directory no mu na run `i18n.site` , a ɛbɛkyerɛ `en` ase akɔ `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Sɛ wotu mmirika wie a, wɔbɛhyehyɛ nkyerɛaseɛ ne cache fael ahodoɔ no yɛsrɛ wo kae sɛ wode bɛka akoraeɛ `git add . ` a ɛwɔ `md`

### Mpɔtam Hɔ Nhwɛso

Install na start `docker` ( `MAC` kamfo kyerɛ sɛ fa [orbstack](https://orbstack.dev) sɛ `docker` runtime ).

Afei, hyɛn `docker` directory no mu na tu mmirika `./up.sh` , na afei kɔ [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Post Nsɛm a Ɛwɔ Mu

`i18n.site` Egye [kratafa biako application](https://developer.mozilla.org/docs/Glossary/SPA) nhyehyɛe tom, na wɔde wɛbsaet no kwankyerɛ krataafa ne wɛbsaet no mu nsɛm di dwuma wɔ ahofadi mu.

Sɛ woyɛ atifi hɔ nkyerɛase no wie a, wɔbɛhyehyɛ `htm` ne `v` nkyerɛwde ahorow wɔ `md/out/dev`

Ɛha yi, `dev` kyerɛ sɛ wɔasi no gyina `.i18n/htm/dev.yml` fael no so.

`dev` :

`htm`

`v` Darekta no kura wɛbsaet no mu nsɛm a version nɔma wom.

Local preview bɛ copy fael nyinaa akɔ `out/dev/v/0.1.0` directory no mu a version nɔma mfa ho.

Sɛ wɔayi no adi wɔ aban kwan so a, wɔbɛkyerɛw fael a wɔasesa no akɔ version nɔma directory foforo no mu.

#### Fa -c Di Dwuma De Kyerɛ Nhyehyeɛ Fael No

Nsiesiei fael ahorow bɛbɔ kyerɛwtohɔ ahorow a ɛne no hyia wɔ `out`

Sɛ nhwɛso no, `.i18n/htm/ol.yml` bɛbɔ `out/ol` directory.

`dev.yml` ne `ol.yml` yɛ nhyehyeɛ a wɔahyɛ da ayɛ.

`dev` `development`
`ol` `online` `-n` `npm`

Wubetumi nso ayɛ nhyehyɛe fael afoforo Fa `--htm_conf`

Nhwɛsoɔ:
```
i18n.site --htm_conf yourConfig --save
```

Ɛha na `--save` kyerɛ update release version nɔma.

#### <a rel=id href="#npm" id="npm"></a> Kyerɛw nsɛm a ɛwɔ mu no kɔ npmjs.com

Nsɛm a [wobɛtintim](/i18n.site/feature#ha) akɔ [npmjs.com](//npmjs.com)

##### npm login & Gyae Mu

Install `nodejs` fa `npm login` di dwuma na kɔ mu.

Sesa `md/.i18n/htm/ol.yml` sesa `i18n.site` a ɛwɔ `v: //unpkg.com/i18n.site` mu no kɔ w'ankasa `npm` package din.

Fa paket din a obiara nni mu no di dwuma kɛkɛ wɔ [npmjs.com](//npmjs.com)

**`//unpkg.com/`** `v:` `i18n.site` `npm` `/.v`

Run `i18n.site --npm` anaa `i18n.site -n` wɔ `md` directory no mu na kyerɛ ase na tintim.

Sɛ wode nkabom `~/.npmrc` a ɛkɔ so di dwuma de tintim a, ɛho nhia sɛ wode hyɛ mu `nodejs`

**`.i18n/v/ol`** wo sesa paket din wɔ `v:` in `ol.yml`

##### Proxy Server a npm Tintimii

Sɛ wɔn a wɔde di dwuma wɔ China asasepɔn so no hyia ntwamutam `https_proxy` na wɔantumi antintim `npm`

Sɛ yɛfa no sɛ wo proxy server port no yɛ `7890` wubetumi akyerɛw:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Nsɛm a Wɔde Wɔn Ankasa Ahyɛ Mu

Sɛ wopɛ sɛ wo ho gye nsɛm no a, di kan, sesa `md/.i18n/htm/ol.yml` na sesa `v: //unpkg.com/i18n.site` kɔ wo URL anim, te sɛ `v: //i18n-v.xxx.com` .

Hyehyɛ `md` directory no mu na tu mmirika

```
i18n.site --htm_conf ol --save
```

anaasɛ asɛmfua tiawa

```
i18n.site -c ol -s
```

`v:` , hyehyɛ nsɛm a ɛwɔ `md/out/ol/v`

Awiei koraa no, **`1s` cache bere a ɔkwan a ɛba awiei wɔ `/.v`**

Wobetumi de cache bere ama akwan afoforo no ayɛ afe biako anaa nea ɛboro saa de atew abisade a ɛho nhia so.

##### Host Nsɛm a Ɛwɔ Mu No Kɔ s3

Sɛ wopɛ sɛ wo host content a, ɛka w’ankasa server a wode bedi dwuma ho no, ɔkwan foforo a wotaa fa `CDN` yɛ ne sɛ + `S3`

Wubetumi `S3` [rclone](https://rclone.org) Login `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Kae sɛ wobɛhyehyɛ `CDN` sɛnea ɛbɛyɛ a ɔkwan a ɛba awiei wɔ `/.v` no cache bere no bɛyɛ `1s` , anyɛ saa a worentumi nkɔ nneɛma foforo a wɔayi no adi no so ntɛm ara.

### Tintim Wɛbsaet Hɔ

Wobetumi de wɛbsaet no akɔ baabiara [github page](https://pages.github.com) na [cloudflare page](https://pages.cloudflare.com) yɛ akwan pa.

Esiane sɛ wɛbsaet no gye nhyehyɛe a ɛwɔ [kratafa biako application mu](https://developer.mozilla.org/docs/Glossary/SPA) nti, kae sɛ wobɛsan akyerɛw URL kwan a enni mu `. ` akɔ `index.html` .

Ɛho hia sɛ wɔde wɛbsaet no mu krataafa no di dwuma pɛnkoro pɛ, na ɛho nhia sɛ wɔsan de wɛbsaet no mu krataafa no si hɔ ma nsɛm foforo a edi hɔ.

#### Deploy Wɔ github Krataafa No So

Di kan [klik ha github yɛ ahyehyɛde bi](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Afei yɛ adekoradan wɔ saa ahyehyɛde yi ase `i18n-demo.github.io` (Yɛsrɛ wo fa ahyehyɛde din a woayɛ no si `i18n-demo` ananmu):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Sɛ woretintim nsɛm a ɛwɔ asɛm a atwam no mu a, wɔayɛ `out/ol/htm` Yɛsrɛ wo hyɛ saa nkyerɛwde yi mu na tu mmirika :

```
ln -s index.html 404.html
```


Efisɛ `github page` ntumi mmoa URL kwan a wɔsan kyerɛw, enti wɔde `404.html` di dwuma mmom.

Afei fa ahyɛde a edidi so yi di dwuma wɔ `htm` directory no mu (kae sɛ wode w’ankasa warehouse address besi `i18n-demo/i18n-demo.github.io.git` ananmu) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Sɛ wopia koodu no wie a, twɛn ma wɔde `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Sɛ wopɛ demo krataafa a, yɛsrɛ wo hwɛ:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Deploy Wɔ cloudflare Krataafa So

Sɛ `github page` toto [cloudflare page](//pages.cloudflare.com)

`cloudflare page` `github page`

Yɛ adwuma bi na kyekyere atifi hɔ adekoradan no `i18n-demo.github.io`

Wɔakyerɛ ɔkwan a wɔfa so yɛ no wɔ mfonini a ɛwɔ ase ha no mu:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` wo klik `Add Account`

Sɛ woakyekyere ahyehyɛde foforo adekoradan a, ebia ebehia sɛ wobɔ `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

Afei paw `i18n-demo.github.io` Warehouse, afei klik `Begin setup` , na fa default values ​​no di dwuma ma anammɔn a edi hɔ.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Sɛ wokyekyere nea edi kan wie a, ɛsɛ sɛ wotwɛn simma kakraa bi ansa na woatumi akɔ mu.

Sɛ wode di dwuma wie a, wubetumi akyekyere domain din a wɔahyɛ da ayɛ.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Sɛ wokyekyere domain din a wɔahyɛ da ayɛ no wie a, yɛsrɛ wo kɔ domain din no so na hyehyɛ ɔkwan a wɔbɛsan akyerɛw wɔ kratafa biako application no so, sɛnea wɔakyerɛ wɔ ase ha no:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Mmara a ɛwɔ atifi hɔ mfonini no mu `i18n.site` te sɛ nea edidi so yi.

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

Bio nso, yɛsrɛ wo hyehyɛ cache mmara no, sɛnea wɔakyerɛ wɔ ase ha no, na fa cache bere tenten no si ɔsram biako.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Yɛsrɛ wo sesa domain din a ɛne no hyia wɔ anammɔn a ɛtɔ so mmienu wɔ mfonini a ɛwɔ atifi hɔ no mu kɔ domain din a woakyekyere no so.

#### Wɛbsaet a Wɔde Bedi Dwuma Yiye Wɔ China Asasepɔn So

Sɛ wopɛ sɛ wunya accessibility adwumayɛ a eye wɔ network tebea a ɛwɔ China asasepɔn no so a, yɛsrɛ wo di kan [kyerɛw domain din](//beian.aliyun.com) .

Afei, fa `out/ol/htm` a wɔkora so a cloud vendors wɔ China asasepɔn so `CDN` di dwuma +

Wubetumi de edge computing adi dwuma de asan akyerɛw ɔkwan no de ayɛ nsakrae wɔ kratafa biako applications, te sɛ [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

Efisɛ `MX` kyerɛwtohɔ ne `CNAME` kyerɛwtohɔ ntumi ntra faako, sɛ wopɛ sɛ wunya domain din email bere koro mu a, ɛsɛ `A` wo `CNAME` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Afei nso, esiane sɛ amannɔne kar akwan ho ka a [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) tɔnfo wɔ China asasepɔn so no bo yɛ den nti, sɛ wopɛ sɛ wobɔ ka yiye a, wubetumi de [Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) kar akwan a wɔdannan──Traffic wɔ China asasepɔn so Baidu Cloud `CDN` amanaman ntam kar akwan kɔ cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Saa deployment optimization solutions yi yɛ den kɛseɛ na wɔde bɛba wɔ ti ahodoɔ mu daakye.

#### Generic Domain Din a Wɔde Kɔ Baabi Foforo

Sɛ wode `i18n.site` di dwuma de yɛ wɛbsaet sɛ wo wɛbsaet titiriw a, mpɛn pii no ɛsɛ sɛ wo hyehyɛ pan-domain redirection, kyerɛ sɛ, redirect `*.xxx.com` (a `www.xxx.com` ka ho) kwan kɔ `xxx.com` .

Wobetumi anya saa ahwehwɛde yi denam Alibaba Cloud mmoa so `EdgeScript` ( [Engiresi krataa](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinafo krataa](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) `CDN`

Fa domain din bi ka ho wɔ [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) mu na fa domain din `*.xxx.com` kyerɛ Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Sɛ nhwɛso no, pan-domain din redirection nhyehyɛe a ɛwɔ `*.i18n.site` wɔ mfonini a ɛwɔ atifi hɔ no te sɛ nea edidi so yi:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Fa nginx Di Dwuma

`/root/i18n/md/out/ol/htm` wo fa nhyehyeɛ a ɛte sɛ deɛ ɛdidi soɔ yi wɔ `server` `out/ol/htm` nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Directory Nhyehyɛe

#### Dwam

Fael ahorow a ɛwɔ wɛbsaet no so, te sɛ `favicon.ico` `robots.txt` , ne nea ɛkeka ho.

Wobetumi de [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n Na Ɛyɛ

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### en

Source kasa directory, a `.i18n/conf.yml` `fromTo` `en` a ɛwɔ nhyehyeɛ fael no mu hyia

```yaml
i18n:
  fromTo:
    en: zh
```

Yɛsrɛ wo hwɛ nkyerɛase nhyehyɛe no [i18](/i18/use)

