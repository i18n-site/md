# Wụnye &

## Token Nhazi

Ngwa ntụgharị `i18n.site` `i18` agbakwunyere, biko [pịa ebe a iji rụtụ aka na akwụkwọ `i18` iji hazie akara nnabata](/i18/use) .

## Wụnye

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Ihe Ngosi Ngosi

Ka anyị jiri ihe ngosi bido mụta ka esi eji `i18n.site`

Anyị na-ebu ụzọ mechie ebe nchekwa ngosi ma na-eme iwu dị ka ndị a:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Ndị ọrụ na China China nwere ike:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Aha ndekọ nke koodu ntọala clone ga `demo.i18n.site` abụrịrị `md` iji kwado nlele mpaghara na `docker` .

### Sụgharịa

Nke mbụ, tinye `md` ma mee `i18n.site` , nke ga-atụgharị `en` ka ọ bụrụ `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Mgbe emechara, a ga-emepụta ntụgharị na cache faịlụ. Biko cheta itinye ha na ebe nchekwa `git add . ` na `md` .

### Nlele Mpaghara

`MAC` `docker` [orbstack](https://orbstack.dev) `docker`

Mgbe ahụ, tinye `docker` ma mee `./up.sh` , wee gaa na [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Bipute Ọdịnaya

`i18n.site`[​](https://developer.mozilla.org/docs/Glossary/SPA)

Mgbe emechara ntụgharị asụsụ dị n'elu, a ga-emepụta akwụkwọ ndekọ aha `htm` na `v` na ndekọ `md/out/dev`

Ebe a, `dev` na-egosi na e wuru ya dabere na faịlụ `.i18n/htm/dev.yml` .

N'okpuru : `dev`

N'okpuru akwụkwọ ndekọ `htm` bụ ibe mbata webụsaịtị.

`v` Akwụkwọ ndekọ ahụ nwere ọdịnaya webụsaịtị nwere nọmba ụdị.

Nhụchalụ mpaghara ga-eṅomi faịlụ niile na ndekọ `out/dev/v/0.1.0` n'agbanyeghị nọmba ụdị.

Maka mwepụta gọọmentị, a ga-eṅomi faịlụ ndị gbanwere na ndekọ nọmba ụdị ọhụrụ.

#### Jiri -c Kọwaa Faịlụ Nhazi

Faịlụ nhazi dị iche iche ga-emepụta akwụkwọ ndekọ aha n'okpuru ndekọ `out`

Dịka ọmụmaatụ, `.i18n/htm/ol.yml` ga-emepụta akwụkwọ ndekọ aha `out/ol` .

`dev.yml` na `ol.yml` bụ nhazi ndabara.

`dev` bụ mbiri nke `development` , nke na-anọchite anya gburugburu mmepe, na-eji maka nlele mpaghara, ma bụrụkwa faịlụ nhazi nke ndabara.
`ol` bụ mbiri nke `online` , nke na-anọchi anya ebe dị n'ịntanetị, bụ nke a na-eji maka mwepụta gọọmentị, ma bụrụkwa faịlụ nhazi nke ndabara mgbe a na-ebipụta ya `npm` na-eji akara akara iwu `-n` .

Ị nwekwara ike ịmepụta faịlụ nhazi ndị ọzọ Jiri `--htm_conf`

ọmụmaatụ:
```
i18n.site --htm_conf yourConfig --save
```

Ebe `--save` na-egosi nọmba ụdị ntọhapụ.

#### <a rel=id href="#npm" id="npm"></a> Bipụta ọdịnaya na npmjs.com

Na [-](/i18n.site/feature#ha) ebipụta ọdịnaya na [npmjs.com](//npmjs.com)

##### npm login &

Wụnye `nodejs` jiri `npm login` banye.

Dezie `md/.i18n/htm/ol.yml` gbanwee `i18n.site` na `v: //unpkg.com/i18n.site` ka ọ bụrụ nke gị `npm` aha ngwugwu.

Naanị jiri aha ngwugwu na-enweghị ọrụ na [npmjs.com](//npmjs.com)

Mgbe ị na-ebipụta na ngwungwu `npm` , **jide n'aka na ị ga-eji `//unpkg.com/`** dị ka prefix nke uru `v:` oge cache `i18n.site` n'okpuru prefix ụzọ a `/.v` ka emebere nke ọma iji mee ka nlele ọhụrụ dị n'oge.

Gbaa `i18n.site --npm` ma ọ bụ `i18n.site -n` n'ime ndekọ `md` iji tụgharịa asụsụ ma bipụta.

Ọ bụrụ na ị na-eji gburugburu njikọta na-aga n'ihu iji bipụta, ọ dịghị mkpa ịwụnye ya `nodejs` Naanị detuo ikike abanye na ebipụta `~/.npmrc` na gburugburu.

Ọ bụrụ na ị gbanwee aha ngwugwu na `v:` `ol.yml` , biko **hụ na ị ga-ebu ụzọ ihichapụ `.i18n/v/ol`** wee bipụta ya.

##### Ihe Nkesa Proxy Nke npm Bipụtara

Ọ bụrụ na ndị ọrụ nọ na China na-ezute nsogbu netwọkụ ma enweghị ike ibipụta ngwugwu `npm` , ha nwere ike ịtọ mgbanwe gburugburu `https_proxy` iji hazie sava proxy.

Na-eche na ọdụ ụgbọ mmiri proxy gị bụ `7890` ị nwere ike dee:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Ọdịnaya Akwadoro Onwe Ya

Ọ bụrụ na ịchọrọ ijide onwe gị, buru ụzọ `md/.i18n/htm/ol.yml` ma gbanwee `v: //unpkg.com/i18n.site` gaa na prefix URL gị, dị ka `v: //i18n-v.xxx.com` .

Tinye `md` ma gbaa ọsọ

```
i18n.site --htm_conf ol --save
```

ma ọ bụ ndebiri

```
i18n.site -c ol -s
```

Mgbe ahụ, hazie ọdịnaya dị na `v:` `md/out/ol/v`

N'ikpeazụ, **hazie oge cache nke ụzọ na `/.v` ejedebe na `1s`** , ma ọ bụghị ya, enweghị ike ịnweta ọdịnaya ewepụtara ọhụrụ ozugbo.

Enwere ike ịtọ oge nchekwa maka ụzọ ndị ọzọ ka ọ bụrụ otu afọ ma ọ bụ karịa iji belata arịrịọ na-enweghị isi.

##### Ọdịnaya Nnabata Na s3

Iji ọdịnaya nke onwe, na mgbakwunye `CDN` iji sava nke gị, nhọrọ ọzọ a na-ahụkarị bụ iji `S3` +

Ị nwere ike `S3` `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Cheta ịhazi `CDN` nke mere na cache oge nke ụzọ na-agwụ na `/.v` bụ `1s` , ma ọ bụghị na ị gaghị enwe ike ịnweta ọdịnaya ewepụtara ọhụrụ ozugbo.

### Bipụta Webụsaịtị

Enwere ike ibuga webụsaịtị ebe ọ bụla [github page](https://pages.github.com) na [cloudflare page](https://pages.cloudflare.com) bụ nhọrọ dị mma.

N'ihi na webụsaịtị na-anakwere nhazi nke [ngwa nwere otu ibe](https://developer.mozilla.org/docs/Glossary/SPA) , cheta idegharị ụzọ URL na- `. ` `index.html` .

Ekwesịrị ibuga ibe ntinye webụsaịtị naanị otu ugboro, ọ nweghịkwa mkpa ịmegharị ibe ntinye webụsaịtị maka mmelite ọdịnaya na-esote.

#### Nyefee Na Ibe github

Mbụ [pịa ebe github ka ịmepụta otu](https://github.com/account/organizations/new?plan=free) aha nzukọ `i18n-demo` dị ka ihe atụ.

Mepụta ụlọ nkwakọba ihe n'okpuru nzukọ `i18n-demo.github.io` (Biko jiri aha nzukọ ị mepụtara dochie `i18n-demo` ):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Mgbe ị na-ebipụta ọdịnaya dị na akụkọ gara aga, : ya `out/ol/htm`

```
ln -s index.html 404.html
```


`404.html` `github page`

Wee mee iwu na `i18n-demo/i18n-demo.github.io.git` esonụ : ndekọ `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Mgbe ịmechara koodu ahụ, chere ka ntinye nke `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Maka ibe ngosi biko hụ:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Nyefee Na Ibe cloudflare

[cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` a na-adaberekarị na ntinye nke `github page` n'elu.

Mepụta oru ngo ma kechie ụlọ nkwakọba ihe n'elu `i18n-demo.github.io`

E gosipụtara usoro a na foto dị n'okpuru:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` pịa `Add Account`

Ọ bụrụ na ị kechiela ụlọ nkwakọba ihe nke nzukọ ọzọ, ị nwere ike pịa `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

Ọzọ họrọ `i18n-demo.github.io` nkwakọba ihe, wee pịa `Begin setup` , wee jiri ụkpụrụ ndabara maka usoro ndị ọzọ.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Mgbe ejikọtachara nke mbụ, ịkwesịrị ichere nkeji ole na ole tupu ị nweta ya.

Mgbe nkenye gachara, ị nwere ike kee ngalaba aha omenala.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Mgbe ejikọta aha ngalaba omenala, biko gaa na ngalaba aha iji hazie ụzọ edegharị ngwa nke otu ibe, dị ka egosiri n'okpuru:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Iwu dị na foto a dị n'elu bụ ndị a, biko `i18n.site` aha ngalaba ahụ n'ahịrị mbụ n'okpuru.

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

Na mgbakwunye, biko hazie iwu cache, dị ka egosiri n'okpuru, ma tọọ oge cache ahụ ka ọ bụrụ otu ọnwa.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Biko gbanwee ngalaba aha dabara na nzọụkwụ nke abụọ na foto dị n'elu gaa na ngalaba aha ị kekọtara.

#### Na-Akwalite Mbugharị Webụsaịtị Na Ala China

Ọ bụrụ na ịchọrọ ịnweta arụmọrụ nnweta ka mma na mpaghara netwọkụ nke China, biko buru ụzọ [debanye aha ngalaba aha](//beian.aliyun.com) .

Mgbe ahụ, jiri ebe nchekwa `out/ol/htm` nke ndị na-ere igwe ojii na `CDN` +

Ị nwere ike iji kọmpụta ihu iji degharịa ụzọ iji mee mgbanwe maka ngwa nwere otu ibe, dị ka [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

N'ihi `MX` ndekọ na `CNAME` ndekọ enweghị ike ịdị n'otu, ọ bụrụ na ịchọrọ ịnata ozi-e ngalaba aha n'otu oge, ịkwesịrị ịkwado `CNAME` na `A` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Na mgbakwunye, n'ihi na ụgwọ okporo ụzọ esenidụt nke ndị na-ere [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ojii na China dị oke ọnụ, ọ bụrụ na ịchọrọ ịkwalite ọnụahịa, ị nwere ike iji [Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ntụgharị okporo ụzọ──Okporo ụzọ na ala China Baidu Cloud `CDN` okporo ụzọ mba ụwa na-aga cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Ngwọta kachasị mma nke mbugharị ndị a dị mgbagwoju anya, a ga-ewebata ya n'isiakwụkwọ dị iche iche n'ọdịnihu.

#### Ntụgharị Ngalaba Aha Izugbe

Ọ bụrụ na ị na-eji `i18n.site` iji mepụta webụsaịtị dị ka ebe nrụọrụ weebụ bụ isi, ị na-achọkarị ịhazi ntụgharị ngalaba pan-domain, ya bụ, redirect `*.xxx.com` (gụnyere `www.xxx.com` ) ịnweta `xxx.com` .

Enwere ike nweta ihe a chọrọ site n'enyemaka nke Alibaba Cloud `CDN` `EdgeScript` ( [akwụkwọ Bekee](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [akwụkwọ Chinese](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Tinye ngalaba aha na [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) wee tụọ `*.xxx.com` aha na Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Dịka ọmụmaatụ, nhazi ntụgharị aha pan-ngalaba `*.i18n.site` na foto dị n'elu bụ nke a:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Tinye nginx

Biko tinye nhazi yiri nke a na `server` nginx ebe `/root/i18n/md/out/ol/htm` biko gbanwee ya n'ụzọ nke aka gị `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Ọdịdị Ndekọ

#### Ọha

Faịlụ webụsaịtị kwụ ọtọ, dị ka `favicon.ico` `robots.txt` , wdg.

Enwere ike iji faịlụ mepụta akara ngosi ebe [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### en

Akwụkwọ ndekọ asụsụ isi mmalite, kwekọrọ `.i18n/conf.yml` `fromTo` `en` dị na faịlụ nhazi

```yaml
i18n:
  fromTo:
    en: zh
```

Biko rụtụ aka na nhazi ntụgharị asụsụ [i18](/i18/use)

