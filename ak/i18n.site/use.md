# Install Deploy &

## Nsiesiei Token

`i18n.site` wɔ nkyerɛaseɛ adwinnadeɛ `i18` a wɔde ahyɛ mu Yɛsrɛ wo [klik ha na hwɛ `i18` krataa no na hyehyɛ kwan a wɔfa so kɔ mu no](/i18/use) .

## Fa Sto So

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Adwuma No

Momma yɛmfa demo project mfi ase mfa nsua sɛnea wɔde `i18n.site` bedi dwuma.

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

Ɛsɛ sɛ `demo.i18n.site` code base clone no directory din yɛ `md` na ama local preview ayɛ mmerɛw ne `docker` .

### Kyerɛ Aseɛ

Nea edi kan no, hyɛn `md` directory no mu na tu mmirika `i18n.site` , a ɛbɛkyerɛ `en` ase akɔ `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Sɛ wotu mmirika wie a, wɔbɛhyehyɛ nkyerɛaseɛ ne cache fael no Yɛsrɛ wo kae `git add . ` wode bɛka akoraeɛ a ɛwɔ `md` daerekta no mu.

### Mpɔtam Hɔ Nhwɛso

Install na fi ase `docker` ( `MAC` ɔdefo kamfo kyerɛ sɛ fa [orbstack](https://orbstack.dev) sɛ runtime ma `docker` ).

Afei, hyɛn `docker` directory no mu na tu mmirika `./up.sh` , na afei kɔ [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Post Nsɛm a Ɛwɔ Mu

`i18n.site` gye [kratafa biako application](https://developer.mozilla.org/docs/Glossary/SPA) nhyehyɛe tom, na wɔde wɛbsaet no kwan a wɔfa so kɔ mu ne wɛbsaet no mu nsɛm no di dwuma wɔ ahofadi mu.

Sɛ woyɛ atifi hɔ nkyerɛase no wie a, wɔbɛhyehyɛ directory `htm` ne `v` wɔ `md/out/dev` directory no ase.

Ɛha yi, `dev` kyerɛ sɛ wɔasi no gyina `.i18n/htm/dev.yml` nhyehyeɛ fael no so.

`dev` kyerɛwtohɔ :

`htm` directory no yɛ wɛbsaet no kwan a wɔfa so kɔ mu no.

`v` directory no kura wɛbsaet no mu nsɛm a version nɔma wom.

Local preview mfa version number no ho na ɛbɛ copy fael nyinaa akɔ `out/dev/v/0.1.0` directory no mu.

Sɛ wɔayi no adi wɔ aban kwan so a, wɔbɛkyerɛw fael a wɔasesa no akɔ version nɔma directory foforo no mu.

#### Fa -c Di Dwuma De Kyerɛ Nhyehyeɛ Fael No

Nsiesiei fael ahorow bɛbɔ daerekta ahorow a ɛne no hyia wɔ `out` daerekta no mu.

Sɛ nhwɛso no, `.i18n/htm/ol.yml` bɛbɔ `out/ol` daerekta no.

`dev.yml` ne `ol.yml` yɛ nhyehyeɛ a wɔahyɛ da ayɛ.

`dev` yɛ `development` tiawa, a ɛkyerɛ nkɔsoɔ tebea, a wɔde di dwuma ma mpɔtam hɔ nhwɛsoɔ, na ɛsan nso yɛ nhyehyeɛ fael a wɔahyɛ da ayɛ.
`ol` yɛ `online` tiawa, a ɛkyerɛ intanɛt so tebea, a wɔde di dwuma ma aban kwan so yie Ɛsan nso yɛ default nhyehyeɛ fael berɛ a wode ahyɛdeɛ kwan parameters `-n` kɔsi `npm` redi dwuma de ayi no adi.

Wubetumi nso ayɛ nhyehyeɛ fael foforɔ Fa `--htm_conf` di dwuma wɔ ahyɛdeɛ kwan no so de kyerɛ nhyehyeɛ fael din a wode bedi dwuma:

Nhwɛsoɔ:
```
i18n.site --htm_conf yourConfig --save
```

Ɛha na `--save` gyina hɔ ma update release version nɔma.

#### <a rel=id href="#npm" id="npm"></a> Kyerɛw nsɛm a ɛwɔ mu no kɔ npmjs.com

Nsɛm a [wobɛtintim](/i18n.site/feature#ha) akɔ [npmjs.com](//npmjs.com)

##### npm login & Gyae Mu

Install `nodejs` , fa `npm login` kɔ mu .

Sesa `md/.i18n/htm/ol.yml` na sesa `i18n.site` wɔ `v: //unpkg.com/i18n.site` mu kɔ w’ankasa `npm` package din mu.

Fa paket din a obiara nni mu no di dwuma kɛkɛ wɔ [npmjs.com](//npmjs.com)

Sɛ woretintim a egyina package `npm` so a, **hwɛ hu sɛ wode `//unpkg.com/` bedi dwuma ama** prefix a ɛyɛ `v:` value `i18n.site` ayɛ cache bere a ɛyɛ `/.v` yiye titiriw wɔ prefix kwan yi ase na ama woanya bere a ɛsɛ sɛ wohwɛ nneɛma foforo a wɔayi no adi.

Tu mmirika `i18n.site --npm` anaa `i18n.site -n` wɔ `md` directory no mu na kyerɛ ase na tintim.

Sɛ wode continuous integration environment di dwuma de tintim a, ɛho nhia sɛ wobɛ instɔl `nodejs` Kɔpi logged-in ne publishing permissions `~/.npmrc` kɔ environment no mu kɛkɛ.

Sɛ wo sesa package din a ɛyɛ `v:` wɔ `ol.yml` mu a, yɛsrɛ wo **hwɛ hu sɛ wubedi kan apopa `.i18n/v/ol`** na afei woatintim.

##### Proxy Server a npm Tintimii

Sɛ wɔn a wɔde di dwuma wɔ China asasepɔn so no hyia ntwamutam haw na wɔantumi antintim `npm` packages a, wobetumi de environment variable `https_proxy` asiesie proxy server no.

Sɛ yɛfa no sɛ wo proxy server port no yɛ `7890` , wobɛtumi akyerɛw:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Nsɛm a Wɔde Wɔn Ankasa Ahyɛ Mu

Sɛ wopɛ sɛ wo ho gye nsɛm no a, di kan sesa `md/.i18n/htm/ol.yml` na sesa `v: //unpkg.com/i18n.site` kɔ wo URL anim, te sɛ `v: //i18n-v.xxx.com` .

Hyehyɛ `md` directory no mu na tu mmirika

```
i18n.site --htm_conf ol --save
```

anaasɛ asɛmfua a wɔatwa no tiaa

```
i18n.site -c ol -s
```

Afei, hyehyɛ nsɛm a ɛwɔ `md/out/ol/v` daerekta no mu no kɔ URL prefix kwan a wɔahyehyɛ wɔ `v:` mu no so.

Awiei koraa no, **hyehyɛ cache bere a ɔkwan a ɛba awiei wɔ `/.v` kosi `1s`** , anyɛ saa a wontumi nkɔ nsɛm a wɔayi no adi foforo no so ntɛm ara.

Wobetumi de cache bere ama akwan afoforo no ayɛ afe biako anaa nea ɛboro saa de atew abisade a ɛho nhia so.

##### Host Nsɛm a Ɛwɔ Mu No Kɔ s3

Sɛ wopɛ sɛ wo host content a, ɛka w’ankasa server a wode bedi dwuma ho no, ɔkwan foforo a wɔtaa fa `CDN` yɛ ne sɛ wode `S3` bedi dwuma +

`S3` `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Kae sɛ wobɛhyehyɛ `CDN` sɛnea ɛbɛyɛ a ɔkwan a ɛba awiei wɔ `/.v` no cache bere no bɛyɛ `1s` , anyɛ saa a wontumi nkɔ nsɛm a wɔayi no adi foforo no so ntɛm ara.

### Tintim Wɛbsaet Hɔ

Wobetumi de wɛbsaet no akɔ baabiara [github page](https://pages.github.com) na [cloudflare page](https://pages.cloudflare.com) yɛ akwan pa.

Esiane sɛ wɛbsaet no de [kratafa biako application](https://developer.mozilla.org/docs/Glossary/SPA) architecture di dwuma nti, kae sɛ wobɛsan akyerɛw URL akwan a enni `. ` kosi `index.html` .

Ɛho hia sɛ wɔde wɛbsaet no mu krataafa no di dwuma pɛnkoro pɛ, na ɛho nhia sɛ wɔsan de wɛbsaet no mu krataafa no si hɔ ma nsɛm foforo a edi hɔ no.

#### Deploy Wɔ github Krataafa No So

Di kan [klik ha github yɛ ahyehyɛde bi](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Afei yɛ warehouse `i18n-demo.github.io` wɔ saa ahyehyɛdeɛ yi ase (yɛsrɛ wo fa ahyehyɛdeɛ din a woabɔ no si `i18n-demo` ananmu):

![](https://p.3ti.site/1721098657.avif)

Sɛ woretintim nsɛm a ɛwɔ asɛm a atwam no mu a, wɔayɛ `out/ol/htm` Yɛsrɛ wo hyɛ saa nkyerɛwde yi mu na tu mmirika :

```
ln -s index.html 404.html
```


Esiane sɛ `github page` ntumi mmoa URL kwan a wɔsan kyerɛw nti, wɔde `404.html` di dwuma mmom.

Afei fa ahyɛde a edidi so yi kɔ `htm` directory no mu (kae sɛ wode w’ankasa warehouse address besi `i18n-demo/i18n-demo.github.io.git` ananmu) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Sɛ wopia koodu no wie a, twɛn ma deployment `github page` nkɔ yiye (sɛnea wɔakyerɛ wɔ ase ha no) ansa na woatumi akɔ mu.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Sɛ wopɛ demo krataafa a, yɛsrɛ wo hwɛ:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Deploy Wɔ cloudflare Krataafa So

[cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` a wɔde di dwuma no taa gyina `github page` a wɔde di dwuma wɔ atifi hɔ no so.

Yɛ project na kyekyere `i18n-demo.github.io` warehouse a ɛwɔ atifi hɔ no.

Wɔakyerɛ ɔkwan a wɔfa so yɛ no wɔ mfonini a ɛwɔ ase ha no mu:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Yɛsrɛ wo klik `Add Account` so na ma kwan ma ahyehyɛde `i18n-demo` no nkɔ .

Sɛ woakyekyere ahyehyɛde foforo adekoradan a, ebia ɛho behia sɛ wobɔ `Add Account` mprenu na ama wo tumi mprenu ansa na wɔada ahyehyɛde foforo no adi.

![](https://p.3ti.site/1721118306.avif)

Afei, paw warehouse `i18n-demo.github.io` , afei klik `Begin setup` , na fa default values no di dwuma ma anammɔn a edi hɔ no.

![](https://p.3ti.site/1721118490.avif)

Sɛ wokyekyere nea edi kan wie a, ɛsɛ sɛ wotwɛn simma kakraa bi ansa na woatumi akɔ mu.

Sɛ wode di dwuma wie a, wubetumi akyekyere domain din a wɔahyɛ da ayɛ.

![](https://p.3ti.site/1721119459.avif)

Sɛ wokyekyere domain din a wɔahyɛ da ayɛ no wie a, yɛsrɛ wo kɔ domain din no so na hyehyɛ ɔkwan a wɔbɛsan akyerɛw wɔ kratafa biako application no so, sɛnea wɔakyerɛ wɔ ase ha no:

![](https://p.3ti.site/1721119320.avif)

`i18n.site` a ɛwɔ atifi hɔ mfonini no mu no te sɛ nea edidi so yi.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Bio nso, yɛsrɛ wo hyehyɛ cache mmara no, sɛnea wɔakyerɛ wɔ ase ha no, na fa cache bere tenten no si ɔsram biako.

![](https://p.3ti.site/1721125111.avif)

Yɛsrɛ wo sesa domain din a ɛne no hyia wɔ anammɔn a ɛtɔ so mmienu wɔ mfonini a ɛwɔ atifi hɔ no mu kɔ domain din a woakyekyere no so.

#### Wɛbsaet a Wɔde Bedi Dwuma Yiye Wɔ China Asasepɔn So

Sɛ wopɛ sɛ wunya accessibility adwumayɛ a eye wɔ network tebea a ɛwɔ China asasepɔn no so a, yɛsrɛ wo di kan [kyerɛw domain din](//beian.aliyun.com) .

Afei, fa nneɛma a wɔkora so a cloud vendors wɔ China asasepɔn so + di dwuma `CDN` Deploy the following content `out/ol/htm` .

Wubetumi de edge computing adi dwuma de asan akyerɛw ɔkwan no de ayɛ nsakrae wɔ kratafa biako application ahorow mu Sɛ nhwɛso no, wobetumi asiesie [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) te sɛ eyi:

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

Esiane sɛ record `MX` ne record `CNAME` ntumi ntra faako nti, sɛ wopɛ sɛ wo nsa ka domain name emails bere koro mu a, ɛsɛ sɛ wo ne [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) script no yɛ biako kɔ level `CNAME` kɔ record `A` mu.

Afei nso, esiane sɛ amannɔne kar akwan ho ka a [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) tɔnfo wɔ China asasepɔn so no bo yɛ den nti, sɛ wopɛ sɛ wobɔ ka yiye a, wubetumi de [Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) kar akwan a wɔdannan──Traffic wɔ China asasepɔn so Baidu Cloud `CDN` , amanaman ntam kar akwan kɔ cloudflare .

![](https://p.3ti.site/1721119788.avif)

Saa deployment optimization solutions yi yɛ den kɛseɛ na wɔde bɛba wɔ ti ahodoɔ mu daakye.

#### Generic Domain Din a Wɔde Kɔ Baabi Foforo

Sɛ wode `i18n.site` di dwuma de yɛ wɛbsaet sɛ wo wɛbsaet titiriw a, mpɛn pii no ɛsɛ sɛ wo hyehyɛ pan-domain redirection, kyerɛ sɛ, wobɛdan akɔ `*.xxx.com` (a `www.xxx.com` ka ho) akɔ `xxx.com` .

Wobetumi de Alibaba Cloud `CDN` `EdgeScript` ( [Engiresi krataa](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinafo krataa](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) mmoa adi saa ahwehwɛde yi ho dwuma .

Fa domain din no ka ho wɔ [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) na twe adwene si domain din `*.xxx.com` so kɔ `CNAME` wɔ Alibaba Cloud `CDN` mu .

![](https://p.3ti.site/1721122000.avif)

Sɛ nhwɛso no, pan-domain din redirection nhyehyɛe a ɛyɛ `*.i18n.site` wɔ mfonini a ɛwɔ atifi hɔ no mu no te sɛ nea edidi so yi:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Fa nginx Di Dwuma

Yɛsrɛ `/root/i18n/md/out/ol/htm` fa nhyehyeɛ a ɛte sɛ deɛ ɛdidi soɔ `out/ol/htm` wɔ `server` nkyekyɛmu a ɛwɔ nginx

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

#### `public`

Fael ahorow a ɛwɔ wɛbsaet no so, te sɛ `favicon.ico` , `robots.txt` , ne nea ɛkeka ho.

Wobetumi de [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Wɔ `.i18n` directory no ase no, nhyehyeɛ fael, nkyerɛaseɛ cache, ne nea ɛkeka ho a ɛwɔ `i18n.site` Hwɛ ti a ɛdi hɔ ["Nsiesiei"](/i18n.site/conf) ma nsɛm no mu nsɛm.

#### `en`

Source kasa directory, a ɛne `en` of `fromTo` wɔ `.i18n/conf.yml` nhyehyɛe fael hyia

```yaml
i18n:
  fromTo:
    en: zh
```

Yɛsrɛ wo hwɛ nkyerɛase nhyehyɛe no [i18](/i18/use)