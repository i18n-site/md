# Ntinye Na Ntanetị

`i18n.site` na-anakwere ihe owuwu [ngwa nwere otu ibe](https://developer.mozilla.org/docs/Glossary/SPA) , yana ibe mbata webụsaịtị na ọdịnaya webụsaịtị na-ebunye onwe ya.

Mgbe emechara ntụgharị asụsụ dị n'elu, a ga-emepụta akwụkwọ ndekọ aha `htm` na `v` n'okpuru akwụkwọ ndekọ `md/out/dev` .

N'ebe a, `dev` pụtara na e wuru ya dabere na faịlụ nhazi `.i18n/htm/dev.yml` .

`dev` ndekọ :

Akwụkwọ ndekọ `htm` bụ ibe mbata webụsaịtị.

Akwụkwọ ndekọ `v` nwere ọdịnaya webụsaịtị nwere nọmba ụdị.

Nhụchalụ mpaghara anaghị eche maka nọmba ụdị ahụ ma ọ ga-eṅomi faịlụ niile na ndekọ `out/dev/v/0.1.0` .

Maka mwepụta gọọmentị, a ga-eṅomi faịlụ ndị gbanwere na ndekọ nọmba ụdị ọhụrụ.

## Ezipụta Faịlụ Nhazi Na `-c`

Faịlụ nhazi dị iche iche ga-emepụta akwụkwọ ndekọ aha kwekọrọ na ndekọ `out` .

Dịka ọmụmaatụ, `.i18n/htm/main.yml` ga-emepụta ndekọ `out/main` .

`dev.yml` na `main.yml` bụ nhazi ndabara.

`dev` bụ mbiri nke `development` , na-egosi gburugburu mmepe, nke ejiri maka nlele mpaghara, ma bụrụkwa faịlụ nhazi nke ndabara.
`ol` bụ mbiri nke `online` , na-egosi gburugburu ebe nrụọrụ weebụ, nke a na-eji maka ntọhapụ gọọmentị, ọ bụkwa faịlụ nhazi nke ndabara mgbe ị na-eji paramita ahịrị `-n` ruo `npm` iji tọhapụ.

Ị nwekwara ike ịmepụta faịlụ nhazi ndị ọzọ Jiri `--htm_conf` n'ahịrị iwu iji kọwaa aha faịlụ nhazi iji:

ọmụmaatụ:
```
i18n.site --htm_conf dist --save
```

Ebe a `--save` na-anọchite nọmba ụdị mwepụta mmelite.

## <a rel=id href="#npm" id="npm"></a> Bipụta ọdịnaya na npmjs.com

Na [-](/i18n.site/feature#ha) ebipụta ọdịnaya na [npmjs.com](//npmjs.com)

### npm & Bipute

Wụnye `nodejs` , banye na `npm login` .

Dezie `md/.i18n/htm/main.yml` wee gbanwee uru nke [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` dị ka aha ngwugwu `npm` nke gị onwe gị ga [npmjs.com](//npmjs.com) eme.

Mgbe ahụ gbanwee `md/.i18n/htm/main.package.json`

Gbaa `i18n.site --npm` ma ọ bụ `i18n.site -n` n'ime ndekọ aha `md` iji tụgharịa asụsụ na bipụta.

Ọ bụrụ na ị na-eji gburugburu mwekota na-aga n'ihu iji bipụta, ọ dịghị mkpa ịwụnye `nodejs` Naanị detuo ikike abanye na ibipụta ikike `~/.npmrc` na gburugburu ebe obibi.

Ọ bụrụ na ị gbanwee aha ngwugwu nke `v:` na `main.yml` , biko **hụ na ị ga-ehichapụ `.i18n/v/main` na mbụ** wee bipụta ya.

#### Ihe Nkesa Proxy Nke npm Bipụtara

Ọ bụrụ na ndị ọrụ nọ na China China na-ezute nsogbu netwọkụ ma enweghị ike ibipụta ngwugwu `npm` , ha nwere ike ịtọ mgbanwe gburugburu `https_proxy` iji hazie sava proxy.

Na-eche na ọdụ ụgbọ mmiri proxy gị bụ `7890` , ị nwere ike dee:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Ọdịnaya Akwadoro Onwe Ya

Ọ bụrụ na ịchọrọ ijide onwe gị ọdịnaya, buru ụzọ dezie `md/.i18n/htm/main.yml` wee gbanwee `v: //unpkg.com/i18n.site` na prefix URL gị, dị ka `v: //i18n-v.xxx.com` .

Tinye ndekọ `md` wee gbaa ọsọ

```
i18n.site --htm_conf ol --save
```

ma ọ bụ ndebiri

```
i18n.site -c ol -s
```

Mgbe ahụ, hazie ọdịnaya dị na ndekọ `md/out/main/v` gaa na ụzọ prefix URL nke edobere na `v:` .

N'ikpeazụ, **hazie oge cache nke ụzọ ahụ na-agwụ na `/.v` ruo `1s`** , ma ọ bụghị ya, enweghị ike ịnweta ọdịnaya ọhụrụ ewepụtara ozugbo.

Enwere ike ịtọ oge nchekwa maka ụzọ ndị ọzọ ka ọ bụrụ otu afọ ma ọ bụ karịa iji belata arịrịọ na-enweghị isi.

## Ọdịnaya Nnabata Na s3

Iji ọdịnaya nke onwe, na mgbakwunye na iji ihe nkesa nke gị, nhọrọ ọzọ `CDN` na-ahụkarị bụ iji `S3` +

Ị nwere ike iji [rclone](https://rclone.org) ịbanye na sava `S3` , wee rụtụ aka na gbanwee edemede a, ma detuo naanị mgbanwe agbakwunyere na `S3` maka ntọhapụ ọ bụla.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Cheta ịhazi `CDN` ka oge cache nke ụzọ na-ejedebe na `/.v` bụ `1s` , ma ọ bụghị ya, enweghị ike ịnweta ọdịnaya ọhụrụ ewepụtara ozugbo.

## Bipụta Webụsaịtị

Enwere ike ibuga webụsaịtị ebe ọ bụla [github page](https://pages.github.com) na [cloudflare page](https://pages.cloudflare.com) bụ nhọrọ dị mma.

N'ihi na webụsaịtị na-eji nhazi [ngwa nwere otu ibe](https://developer.mozilla.org/docs/Glossary/SPA) , cheta idegharị URL ụzọ na-enweghị `. ` ruo `index.html` .

Ekwesịrị ibuga ibe ntinye webụsaịtị naanị otu ugboro, ọ nweghịkwa mkpa ịmegharị ibe ntinye webụsaịtị maka mmelite ọdịnaya na-esote.

### Nyefee Na Ibe github

Mbụ [pịa ebe github ka ịmepụta nzukọ](https://github.com/account/organizations/new?plan=free) aha `i18n-demo` dị ka ihe atụ.

Mepụta ụlọ nkwakọba ihe `i18n-demo.github.io` n'okpuru nzukọ a (biko jiri aha nzukọ ị mepụtara dochie `i18n-demo` ):

![](https://p.3ti.site/1721098657.avif)

Mgbe ị na-ebipụta ọdịnaya dị na edemede gara aga, `out/main/htm` ka emepụtara, biko tinye ndekọ a wee gbaa ọsọ :

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

### Nyefee Na Ibe cloudflare

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

Mgbe ejikọta aha ngalaba omenala, biko gaa na ngalaba aha iji hazie ụzọ idegharị ngwa nke otu ibe, dị ka egosiri n'okpuru:

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

### Na-Akwalite Mbugharị Webụsaịtị Na Ala China

Ọ bụrụ na ịchọrọ ịnweta arụmọrụ nnweta ka mma na mpaghara netwọkụ nke China, biko buru ụzọ [debanye aha ngalaba aha](//beian.aliyun.com) .

Mgbe `CDN` , jiri ihe nchekwa ihe nke ndị na- `out/main/htm` igwe ojii na China China +

Ị nwere ike iji kọmpụta ihu iji degharịa ụzọ iji mee mgbanwe na ngwa nwere otu ibe dịka ọmụmaatụ, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) nwere ike ịhazi ya dị ka nke a:

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
  // Enwere ike ịtọ isi okwu nzaghachi ka ọ bụrụ ihe nrụpụta, dị ka out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

N'ihi na ndekọ `MX` na ndekọ `CNAME` enweghị ike ibikọ ọnụ, ọ bụrụ na ịchọrọ ịnata ozi-e na ngalaba aha n'otu oge ahụ, ịkwesịrị [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) script na ọkwa `CNAME` n'ime ndekọ `A` .

Na mgbakwunye, n'ihi na ụgwọ okporo ụzọ esenidụt nke ndị na-ere igwe ojii na China dị oke ọnụ, ọ bụrụ na ịchọrọ ịkwalite ọnụahịa, ị nwere ike iji [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) [Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ntụgharị okporo ụzọ──Ntugharị okporo ụzọ na ala China Baidu Cloud `CDN` , okporo ụzọ mba ụwa na-aga cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ngwọta kachasị mma nke mbugharị ndị a dị mgbagwoju anya, a ga-ewebata ya n'isiakwụkwọ dị iche iche n'ọdịnihu.

### Ntụgharị Ngalaba Aha Izugbe

Ọ bụrụ na ị na-eji `i18n.site` iji mepụta webụsaịtị dị ka ebe nrụọrụ weebụ gị bụ isi, ị na-achọkarị ịhazi redirection pan-domain, ya bụ, redirect nweta `*.xxx.com` (gụnyere `www.xxx.com` ) gaa na `xxx.com` .

Enwere ike nweta ihe a chọrọ site n'enyemaka nke Alibaba Cloud `CDN` `EdgeScript` ( [akwụkwọ Bekee](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [akwụkwọ Chinese](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Tinye ngalaba aha na [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) wee tụọ ngalaba aha `*.xxx.com` `CNAME` na Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Dịka ọmụmaatụ, nhazi ntụgharị aha pan-domain nke `*.i18n.site` na foto dị n'elu bụ nke a:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Tinye nginx

Biko tinye nhazi yiri `out/main/htm` `/root/i18n/md/out/main/htm` na paragraf `server` nke nginx

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Dabere Na Ntinye `github action` Na-Aga N'ihu

Ị nwere ike zoo aka na ihe ndị a iji hazie `github action` gị:

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

Dị ka a na-ahụ na nhazi ahụ, a na-eme ka ọrụ a na-arụ ọrụ mgbe ọ na-agbanye na alaka `main` na alaka `dist` .

Usoro ọrụ ahụ ga-eji faịlụ nhazi kwekọrọ na aha alaka ụlọ ọrụ iji bipụta akwụkwọ ahụ Ebe a, `.i18n/htm/main.yml` na `.i18n/htm/dist.yml` ga-eji dị ka nhazi mbipụta n'otu n'otu.

Anyị na-akwado omume kacha mma ndị a maka usoro mwepụta akwụkwọ:

Mgbe a na-agbanye mgbanwe na alaka `main` , a na-eme ka e wuo akwụkwọ ahụ ma tinye ya na ebe nlele (ebe nlele dị [github page](//pages.github.com) ).

Mgbe ekwenyechara na akwụkwọ ahụ ziri ezi na saịtị nlele ahụ, a ga-ejikọta koodu ahụ ma tinye ya na alaka ụlọ ọrụ `dist` , na ụlọ ọrụ na-arụ ọrụ na ntinye ga-aga na ntanetị.

N'ezie, imejuputa usoro a dị n'elu chọrọ ide ihe nhazi ndị ọzọ.

Ị nwere ike na-ezo aka n'ezie ọrụ scripting workflow [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` na `secrets.NPM_TOKEN` na nhazi ahụ chọrọ ka ị hazie mgbanwe nzuzo na ntọala koodu.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` ịnweta [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` bụ akara nbipụta nke ngwugwu `npm` na nhazi ahụ [npmjs.com](//npmjs.com) mepụta akara nwere ikike ibipụta (dị ka egosiri n'okpuru).

![](//p.3ti.site/1730969906.avif)


## Ọdịdị Ndekọ

### `public`

Faịlụ webụsaịtị kwụ ọtọ, dịka `favicon.ico` , `robots.txt` , wdg.

Enwere ike iji faịlụ mepụta akara ngosi ebe a [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

N'okpuru ndekọ `.i18n` bụ faịlụ nhazi, cache ntụgharị asụsụ, wdg nke `i18n.site` Lee isiakwụkwọ na-esote ["Nhazi"](/i18n.site/conf) maka nkọwa.

### `en`

Akwụkwọ ndekọ asụsụ isi mmalite, kwekọrọ na `en` nke `fromTo` n'ime faịlụ nhazi `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Biko rụtụ aka na nhazi ntụgharị asụsụ [i18](/i18/use)