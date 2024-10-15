# Wụnye &

## Token Nhazi

`i18n.site` nwere ngwa ntụgharị asụsụ `i18` arụnyere n'ime ya, biko [pịa ebe a iji rụtụ aka na akwụkwọ `i18` iji hazie akara nnabata](/i18/use) .

## Wụnye

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Ihe Ngosi Ngosi

Ka anyị bido na ihe ngosi ngosi ka anyị mụta otu esi eji `i18n.site` .

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

Aha ndekọ aha nke `demo.i18n.site` code base clone ga-abụrịrị `md` iji kwado nlele mpaghara na `docker` .

### Sụgharịa

Mbụ, tinye ndekọ `md` wee mee `i18n.site` , nke ga-atụgharị `en` gaa na `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Mgbe emechara, a ga-emepụta ntụgharị na cache faịlụ, biko cheta itinye ha na ebe nchekwa na `git add . ` `md` .

### Nlele Mpaghara

Wụnye wee malite `docker` (onye ọrụ `MAC` na-atụ aro iji [orbstack](https://orbstack.dev) dị ka oge ịgba ọsọ maka `docker` ).

Mgbe ahụ, tinye ndekọ `docker` wee mee `./up.sh` , wee gaa na [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Bipute Ọdịnaya

`i18n.site` na-anakwere ihe owuwu [ngwa nwere otu ibe](https://developer.mozilla.org/docs/Glossary/SPA) , yana ibe mbata webụsaịtị na ọdịnaya webụsaịtị na-ebunye onwe ya.

Mgbe emechara ntụgharị asụsụ dị n'elu, a ga-emepụta akwụkwọ ndekọ aha `htm` na `v` n'okpuru akwụkwọ ndekọ `md/out/dev` .

N'ebe a, `dev` pụtara na e wuru ya dabere na faịlụ nhazi `.i18n/htm/dev.yml` .

`dev` ndekọ :

Akwụkwọ ndekọ `htm` bụ ibe mbata webụsaịtị.

Akwụkwọ ndekọ `v` nwere ọdịnaya webụsaịtị nwere nọmba ụdị.

Nhụchalụ mpaghara anaghị eche maka nọmba ụdị ahụ ma ọ ga-eṅomi faịlụ niile na ndekọ `out/dev/v/0.1.0` .

Maka mwepụta gọọmentị, a ga-eṅomi faịlụ ndị gbanwere na ndekọ nọmba ụdị ọhụrụ.

#### Jiri -c Kọwaa Faịlụ Nhazi

Faịlụ nhazi dị iche iche ga-emepụta akwụkwọ ndekọ aha kwekọrọ na ndekọ `out` .

Dịka ọmụmaatụ, `.i18n/htm/ol.yml` ga-emepụta ndekọ `out/ol` .

`dev.yml` na `ol.yml` bụ nhazi ndabara.

`dev` bụ mbiri nke `development` , na-egosi gburugburu mmepe, nke ejiri maka nlele mpaghara, ma bụrụkwa faịlụ nhazi nke ndabara.
`ol` bụ mbiri nke `online` , na-egosi gburugburu ebe nrụọrụ weebụ, nke a na-eji maka ntọhapụ gọọmentị, ọ bụkwa faịlụ nhazi nke ndabara mgbe ị na-eji paramita ahịrị `-n` ruo `npm` iji tọhapụ.

Ị nwekwara ike ịmepụta faịlụ nhazi ndị ọzọ Jiri `--htm_conf` n'ahịrị iwu iji kọwaa aha faịlụ nhazi iji:

ọmụmaatụ:
```
i18n.site --htm_conf yourConfig --save
```

Ebe a `--save` na-anọchite nọmba ụdị mwepụta mmelite.

#### <a rel=id href="#npm" id="npm"></a> Bipụta ọdịnaya na npmjs.com

Na [-](/i18n.site/feature#ha) ebipụta ọdịnaya na [npmjs.com](//npmjs.com)

##### npm login &

Wụnye `nodejs` , banye na `npm login` .

Dezie `md/.i18n/htm/ol.yml` wee gbanwee `i18n.site` na `v: //unpkg.com/i18n.site` ka ọ bụrụ aha ngwugwu `npm` nke gị.

Naanị jiri aha ngwugwu na-enweghị ọrụ na [npmjs.com](//npmjs.com)

Mgbe ị na-ebipụta dabere na ngwugwu `npm` , **jide n'aka na ị ga-eji `//unpkg.com/`** maka prefix nke `v:` uru `i18n.site` emeberela oge nchekwa nke `/.v` n'okpuru ụzọ prefix a iji nweta nlele oge nke mwepụta ọhụrụ.

Gbaa `i18n.site --npm` ma ọ bụ `i18n.site -n` n'ime ndekọ aha `md` iji tụgharịa asụsụ na bipụta.

Ọ bụrụ na ị na-eji gburugburu mwekota na-aga n'ihu na-ebipụta, ọ dịghị mkpa ịwụnye `nodejs` , dị nnọọ detuo abanye na ibipụta ikike `~/.npmrc` na gburugburu ebe obibi.

Ọ bụrụ na ị gbanwee aha ngwugwu nke `v:` na `ol.yml` , biko **hụ na ị ga-ehichapụ `.i18n/v/ol` na mbụ** wee bipụta ya.

##### Ihe Nkesa Proxy Nke npm Bipụtara

Ọ bụrụ na ndị ọrụ nọ na China China na-ezute nsogbu netwọkụ ma enweghị ike ibipụta ngwugwu `npm` , ha nwere ike ịtọ mgbanwe gburugburu `https_proxy` iji hazie sava proxy.

Na-eche na ọdụ ụgbọ mmiri proxy gị bụ `7890` , ị nwere ike dee:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Ọdịnaya Akwadoro Onwe Ya

Ọ bụrụ na ịchọrọ ijide onwe gị ọdịnaya, buru ụzọ dezie `md/.i18n/htm/ol.yml` wee gbanwee `v: //unpkg.com/i18n.site` na prefix URL gị, dị ka `v: //i18n-v.xxx.com` .

Tinye ndekọ `md` wee gbaa ọsọ

```
i18n.site --htm_conf ol --save
```

ma ọ bụ ndebiri

```
i18n.site -c ol -s
```

Mgbe ahụ, hazie ọdịnaya dị na ndekọ `md/out/ol/v` gaa na ụzọ prefix URL nke edobere na `v:` .

N'ikpeazụ, **hazie oge cache nke ụzọ ahụ na-agwụ na `/.v` ruo `1s`** , ma ọ bụghị ya, enweghị ike ịnweta ọdịnaya ọhụrụ ewepụtara ozugbo.

Enwere ike ịtọ oge nchekwa maka ụzọ ndị ọzọ ka ọ bụrụ otu afọ ma ọ bụ karịa iji belata arịrịọ na-enweghị isi.

##### Ọdịnaya Nnabata Na s3

Iji ọdịnaya nke onwe, na mgbakwunye na iji ihe nkesa nke gị, nhọrọ ọzọ `CDN` na-ahụkarị bụ iji `S3` +

Ị nwere ike iji [rclone](https://rclone.org) ịbanye na sava `S3` , wee rụtụ aka na gbanwee edemede a, ma detuo naanị mgbanwe agbakwunyere na `S3` maka ntọhapụ ọ bụla.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Cheta ịhazi `CDN` ka oge cache nke ụzọ na-ejedebe na `/.v` bụ `1s` , ma ọ bụghị ya, enweghị ike ịnweta ọdịnaya ọhụrụ ewepụtara ozugbo.

### Bipụta Webụsaịtị

Enwere ike ibuga webụsaịtị ebe ọ bụla [github page](https://pages.github.com) na [cloudflare page](https://pages.cloudflare.com) bụ nhọrọ dị mma.

N'ihi na webụsaịtị na-eji nhazi [ngwa nwere otu ibe](https://developer.mozilla.org/docs/Glossary/SPA) , cheta idegharị URL ụzọ na-enweghị `. ` ruo `index.html` .

Ekwesịrị ibuga ibe ntinye webụsaịtị naanị otu ugboro, ọ nweghịkwa mkpa ịmegharị ibe ntinye webụsaịtị maka mmelite ọdịnaya na-esote.

#### Nyefee Na Ibe github

Mbụ [pịa ebe github ka ịmepụta nzukọ](https://github.com/account/organizations/new?plan=free) aha `i18n-demo` dị ka ihe atụ.

Mepụta ụlọ nkwakọba ihe `i18n-demo.github.io` n'okpuru nzukọ a (biko jiri aha nzukọ ị mepụtara dochie `i18n-demo` ):

![](https://p.3ti.site/1721098657.avif)

Mgbe ị na-ebipụta ọdịnaya dị na edemede gara aga, `out/ol/htm` ka emepụtara, biko tinye ndekọ a wee gbaa ọsọ :

```
ln -s index.html 404.html
```


N'ihi na `github page` anaghị akwado idegharị URL ụzọ, a na-eji `404.html` kama.

Wee mee iwu na-esonụ na ndekọ `htm` (cheta na iji adreesị ụlọ nkwakọba ihe nke gị dochie `i18n-demo/i18n-demo.github.io.git` ) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Mgbe ịmechara koodu ahụ, chere maka ntinye nke `github page` ka ọ rụọ ọrụ nke ọma (dị ka egosiri n'okpuru) tupu ịnweta ya.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Maka ibe ngosi biko hụ:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Nyefee Na Ibe cloudflare

E jiri [cloudflare page](//pages.cloudflare.com) tụnyere `github page` , ọ na-enye ndị na-edegharị ụzọ ma na-enwekwu enyi na China ma na-atụ aro ka ị jiri ya.

Nbugharị nke `cloudflare page` na-adaberekarị na ntinye nke `github page` n'elu.

Mepụta oru ngo ma kechie ụlọ nkwakọba ihe `i18n-demo.github.io` dị n'elu.

E gosipụtara usoro a na foto dị n'okpuru:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Biko pịa `Add Account` iji nye ohere ịnweta nzukọ `i18n-demo` .

Ọ bụrụ na ị kechiela ụlọ nkwakọba ihe nke nzukọ ọzọ, ị nwere ike pịa `Add Account` ugboro abụọ iji nye ikike ugboro abụọ tupu nzukọ ọhụrụ ahụ egosipụta.

![](https://p.3ti.site/1721118306.avif)

Ọzọ, họrọ ụlọ nkwakọba ihe `i18n-demo.github.io` , wee pịa `Begin setup` , wee jiri ụkpụrụ ndabara maka usoro ndị ọzọ.

![](https://p.3ti.site/1721118490.avif)

Mgbe ejikọtachara nke mbụ, ịkwesịrị ichere nkeji ole na ole tupu ị nweta ya.

Mgbe nkenye gachara, ị nwere ike kee ngalaba aha omenala.

![](https://p.3ti.site/1721119459.avif)

Mgbe ejikọta aha ngalaba omenala, biko gaa na ngalaba aha iji hazie ụzọ edegharị ngwa nke otu ibe, dị ka egosiri n'okpuru:

![](https://p.3ti.site/1721119320.avif)

Iwu dị na foto a dị n'elu bụ ndị a, biko dochie `i18n.site` na ahịrị mbụ dị n'okpuru ebe a na aha ngalaba.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Na mgbakwunye, biko hazie iwu cache, dị ka egosiri n'okpuru, ma tọọ oge cache ahụ ka ọ bụrụ otu ọnwa.

![](https://p.3ti.site/1721125111.avif)

Biko gbanwee ngalaba aha dabara na nzọụkwụ nke abụọ na foto dị n'elu gaa na ngalaba aha ị kekọtara.

#### Na-Akwalite Mbugharị Webụsaịtị Na Ala China

Ọ bụrụ na ịchọrọ ịnweta arụmọrụ nnweta ka mma na mpaghara netwọkụ nke China, biko buru ụzọ [debanye aha ngalaba aha](//beian.aliyun.com) .

Mgbe `CDN` , jiri ihe nchekwa ihe nke ndị na- `out/ol/htm` igwe ojii na China China +

Ị nwere ike iji kọmpụta ihu iji degharịa ụzọ iji mee mgbanwe na ngwa nwere otu ibe dịka ọmụmaatụ, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) nwere ike ịhazi ya dị ka nke a:

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

N'ihi na ndekọ `MX` na ndekọ `CNAME` enweghị ike ibikọ ọnụ, ọ bụrụ na ịchọrọ ịnata ozi-e na ngalaba aha n'otu oge ahụ, ịkwesịrị [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) script na ọkwa `CNAME` n'ime ndekọ `A` .

Na mgbakwunye, n'ihi na ụgwọ okporo ụzọ esenidụt nke ndị na-ere igwe ojii na China dị oke ọnụ, ọ bụrụ na ịchọrọ ịkwalite ọnụahịa, ị nwere ike iji [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) [Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ntụgharị okporo ụzọ──Okporo ụzọ na ala China Baidu Cloud `CDN` , okporo ụzọ mba ụwa na-aga cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ngwọta kachasị mma nke mbugharị ndị a dị mgbagwoju anya, a ga-ewebata ya n'isiakwụkwọ dị iche iche n'ọdịnihu.

#### Ntụgharị Ngalaba Aha Izugbe

Ọ bụrụ na ị na-eji `i18n.site` iji mepụta webụsaịtị dị ka ebe nrụọrụ weebụ gị bụ isi, ị na-achọkarị ịhazi redirection pan-domain, ya bụ, redirect nweta `*.xxx.com` (gụnyere `www.xxx.com` ) gaa na `xxx.com` .

Enwere ike nweta ihe a chọrọ site n'enyemaka nke Alibaba Cloud `CDN` `EdgeScript` ( [akwụkwọ Bekee](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [akwụkwọ Chinese](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Tinye ngalaba aha na [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) wee tụọ ngalaba aha `*.xxx.com` `CNAME` na Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Dịka ọmụmaatụ, nhazi ntụgharị aha pan-domain nke `*.i18n.site` na foto dị n'elu bụ nke a:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Tinye nginx

Biko tinye nhazi yiri `out/ol/htm` `/root/i18n/md/out/ol/htm` na paragraf `server` nke nginx

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

#### `public`

Faịlụ webụsaịtị kwụ ọtọ, dịka `favicon.ico` , `robots.txt` , wdg.

Enwere ike iji faịlụ mepụta akara ngosi ebe a [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

N'okpuru ndekọ `.i18n` bụ faịlụ nhazi, cache ntụgharị asụsụ, wdg nke `i18n.site` Lee isiakwụkwọ na-esote ["Nhazi"](/i18n.site/conf) maka nkọwa.

#### `en`

Akwụkwọ ndekọ asụsụ isi mmalite, kwekọrọ na `en` nke `fromTo` n'ime faịlụ nhazi `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Biko rụtụ aka na nhazi ntụgharị asụsụ [i18](/i18/use)