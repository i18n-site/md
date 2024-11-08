# Search Engine Optimization (Seo)

## Txoj Cai

`i18n.site` txais yuav ib nplooj ntawv uas tsis yog hloov tshiab ib nplooj ntawv architecture txhawm rau pab txhawb kev tshawb nrhiav indexing, ib nplooj ntawv zoo li qub thiab `sitemap.xml` yuav raug tsim tawm rau cov neeg nkag mus nkag.

Thaum `User-Agent` ntawm qhov kev thov nkag tau siv los ntawm kev tshawb fawb cav crawler, qhov kev thov yuav raug xa mus rau nplooj ntawv zoo li qub ntawm `302` .

Ntawm nplooj ntawv zoo li qub, siv `link` los qhia txog kev txuas mus rau ntau hom lus ntawm nplooj ntawv no, xws li :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Local nginx Configuration

Siv cov ntaub ntawv `.i18n/htm/main.yml` configuration hauv qhov project demo ua piv txwv

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

Thov ua ntej hloov tus nqi ntawm `host:` saum toj no rau koj lub npe sau npe, xws li `xxx.com` .

Tom qab ntawd, `i18n.site -n` , nplooj ntawv zoo li qub yuav raug tsim tawm hauv `out/main/htm` phau ntawv teev npe.

Tau kawg, koj tuaj yeem ua rau lwm cov ntaub ntawv teeb tsa, xws li thawj zaug xa mus rau kev teeb tsa ntawm `main` los tsim `.i18n/htm/dist.package.json` thiab `.i18n/htm/dist.yml` .

Tom qab ntawd khiav `i18n.site -n -c dist` kom cov nplooj ntawv zoo li qub yuav raug tsim rau `out/dist/htm` .

`nginx` tuaj yeem teeb tsa los ntawm kev xa mus rau kev teeb tsa hauv qab no.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Tsis txhob cache server neeg ua haujlwm scripts ntev dhau lawm
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Teem sijhawm ntev cache rau lwm yam khoom siv zoo li qub
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Teem cov ntaub ntawv zoo li qub uas tus crawler siv ua qhov homepage nkag
location = / {
  # Yog $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Ib nplooj ntawv thov configuration
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Configure Khoom Cia Rau Uploading Cov Ntaub Ntawv Zoo Li Qub

Cov ntaub ntawv zoo li qub tuaj yeem tsim tawm hauv zos, tab sis ib txoj hauv kev ntau dua yog xa lawv mus rau qhov khoom khaws cia.

Hloov kho `out` configured saum toj no rau :

```
out:
  - s3
```

Tom qab ntawd, hloov kho `~/.config/i18n.site.yml` thiab ntxiv cov kev teeb tsa hauv qab no :

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

Hauv kev teeb tsa, thov hloov `i18n.site` rau tus nqi ntawm `host:` hauv `.i18n/htm/main.yml` , ntau lub khw muag khoom tuaj yeem teeb tsa hauv qab `s3` , thiab `region` daim teb yog xaiv tau (ntau lub khw muag khoom tsis tas yuav teeb tsa daim teb no).

Ces khiav `i18n.site -n` rov luam tawm qhov project.

Yog tias koj tau hloov kho `~/.config/i18n.site.yml` thiab xav rov upload dua, thov siv cov lus txib hauv qab no hauv qhov project hauv paus directory kom tshem tawm cov cache :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Configuration

Domain name hosted rau [cloudflare](//www.cloudflare.com)

### Kev Cai Hloov Dua Siab Tshiab

Ntxiv cov cai hloov dua siab tshiab raws li qhia hauv qab no:

![](//p.3ti.site/1725436822.avif)

Txoj cai cai yog raws li hauv qab no, thov hloov qhov chaws "i18n.site" rau koj lub npe sau npe:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Kev Cai Caching

Ntxiv cov cai cache raws li hauv qab no:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Redirect Cov Cai

Teem cov cai redirection raws li hauv qab no, thov hloov qhov chaws "i18n.site" rau koj lub npe sau

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

`URL redirect` Xaiv dynamic redirection, thov hloov `/en` nyob rau hauv redirection txoj kev `concat("/en",http.request.uri.path,".htm")` rau lub neej ntawd lus koj xav kom search engines suav nrog.

## Baidu Intelligent Huab Configuration

Yog tias koj xav tau muab kev pabcuam rau Suav teb av loj, koj tuaj yeem siv [Baidu Smart Cloud](//cloud.baidu.com) .

Cov ntaub ntawv raug xa mus rau Baidu Object Storage thiab khi rau Baidu Content Distribution Network.

Tom qab ntawd tsim cov ntawv hauv [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) raws li hauv qab no

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
  // Koj tuaj yeem teeb tsa cov lus teb header rau debug cov zis, xws li out.XXX = 'MSG';
})
```

Nyem `Debug` , ces nyem Publish rau tag nrho lub network.

![](//p.3ti.site/1725437754.avif)

## Kev Siv Advanced: Faib Tsheb Raws Li Kev Daws Teeb Meem Hauv Cheeb Tsam

Yog tias koj xav muab kev pabcuam hauv Suav teb av loj thiab tseem xav tau `cloudflare` kev tsheb khiav thoob ntiaj teb dawb, koj tuaj yeem siv `DNS` nrog kev daws teeb meem hauv cheeb tsam.

Piv txwv li, [Huawei huab DNS](https://www.huaweicloud.com) muab kev tshuaj ntsuam xyuas hauv cheeb tsam dawb, nrog rau cov tsheb ciav hlau hauv Suav teb tuaj yeem hla dhau Baidu Smart Cloud, thiab kev tsheb khiav thoob ntiaj teb tuaj yeem hla `cloudflare` .

Muaj ntau qhov pitfalls nyob rau hauv lub configuration ntawm `cloudflare` Nov yog ob peb lub ntsiab lus kom nco ntsoov :

### Lub Npe Sau Yog Tuav Hauv Lwm Yam `DNS` , Yuav Siv Li Cas `cloudflare`

Ua ntej khi lub npe arbitrary rau `cloudflare` , thiab tom qab ntawd siv `SSL/TLS` → kev cai sau npe los koom nrog lub npe tseem ceeb rau lub npe sau npe no.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Tsis Tuaj Yeem Nkag Los Ntawm Lub Npe Sau Npe

Vim hais tias lub built `cloudflare` in khoom cia `R2` tsis tuaj yeem nkag tau los ntawm lub npe sau npe, tus neeg thib peb cov khoom cia yuav tsum tau siv los tso cov ntaub ntawv zoo li qub.

Ntawm no peb `cloudflare` [backblaze.com](https://www.backblaze.com)

Tsim ib lub thoob ntawm `backblaze.com` , upload tej ntaub ntawv, nyem mus xauj cov ntaub ntawv, thiab tau txais lub npe sau npe ntawm `Friendly URL` , uas yog `f003.backblazeb2.com` ntawm no.

![](//p.3ti.site/1725440783.avif)

Hloov lub npe sau los ntawm `CNAME` mus rau `f003.backblazeb2.com` ntawm `cloudflare` thiab pab kom lub npe.

![](//p.3ti.site/1725440896.avif)

Hloov kho `cloudflare` ntawm `SSL` → encryption hom, teem rau `Full`

![](//p.3ti.site/1725438572.avif)

Ntxiv txoj cai hloov dua siab tshiab raws li qhia hauv qab no, muab tso ua ntej (thawj tus muaj qhov tseem ceeb tshaj plaws):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` xaiv dynamic thiab hloov kho `your_bucketname` hauv `concat("/file/your_bucketname",http.request.uri.path)` rau koj lub npe thoob.

Tsis tas li ntawd, hauv `cloudflare` txoj cai hloov dua siab tshiab saum toj no, `index.html` hloov mus rau `file/your_bucketname/index.html` , thiab lwm yam kev teeb tsa tseem zoo ib yam.

![](//p.3ti.site/1725441384.avif)