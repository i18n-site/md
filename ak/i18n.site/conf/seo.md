# Nneɛma a Wɔde Hwehwɛ Nneɛma Mu (Seo) .

## Nnyinasosɛm

`i18n.site` gye kratafa biako nhyehyɛe a ɛnyɛ foforo sɛnea ɛbɛyɛ a nhwehwɛmu indexing bɛyɛ mmerɛw no, wɔbɛyɛ static krataafa a ɛyɛ soronko ne `sitemap.xml` ama krawlafo atumi akɔ.

Sɛ `User-Agent` a ɛwɔ access request no mu no de search engine crawler no di dwuma a, wɔbɛdan abisadeɛ no akɔ static page no so denam `302` so.

Wɔ static nkratafa so no, fa `link` kyerɛ link ahorow a ɛkɔ kasa ahorow a ɛwɔ krataafa yi mu, te sɛ :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Mpɔtam Hɔ nginx Nhyehyɛe

Fa `.i18n/htm/main.yml` nhyehyeɛ fael a ɛwɔ demo adwuma no mu no sɛ nhwɛsoɔ

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

Yɛsrɛ wo di kan sesa `host:` a ɛwɔ atifi hɔ no boɔ no ma ɛnyɛ wo domain din, te sɛ `xxx.com` .

Afei, `i18n.site -n` , wɔbɛhyehyɛ static krataafa no wɔ `out/main/htm` directory no mu.

Nokwarem no, wubetumi nso ama nhyehyɛe fael afoforo ayɛ adwuma, te sɛ nea edi kan a wobɛtwe adwene asi nhyehyɛe a ɛwɔ `main` so de ayɛ `.i18n/htm/dist.package.json` ne `.i18n/htm/dist.yml` .

Afei run `i18n.site -n -c dist` sɛnea ɛbɛyɛ a static page no bɛba `out/dist/htm` .

`nginx` betumi ahyɛ denam nhyehyeɛ a ɛwɔ aseɛ ha no a wobɛhwɛ so.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Mma nnyɛ cache server worker scripts nkyɛ dodo
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Set cache bere tenten ma static nneɛma afoforo
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Set static file bɛn na crawler no de di dwuma sɛ homepage entry
location = / {
  # Sɛ $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Kratafa biako application nhyehyɛe
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Hyehyɛ Adeɛ Akoraeɛ Ma Static Fael a Wɔde Bɛto So

Wobetumi ayɛ static fael ahorow wɔ mpɔtam hɔ, nanso ɔkwan a wɔtaa fa so ne sɛ wɔde bɛto nneɛma akorae so.

Sesa `out` a wɔahyehyɛ wɔ atifi hɔ no ma ɛnyɛ :

```
out:
  - s3
```

Afei, sesa `~/.config/i18n.site.yml` na fa nhyehyeɛ a ɛdidi soɔ yi ka ho :

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

Wɔ nhyehyeɛ no mu no, yɛsrɛ wo sesa `i18n.site` kɔ boɔ a ɛyɛ `host:` wɔ `.i18n/htm/main.yml` mu, wobɛtumi asiesie nneɛma akoraeɛ pii wɔ `s3` ase, na `region` afuo no yɛ nea wopɛ (ɛho nhia sɛ nneɛma akoraeɛ pii hyehyɛ saa afuo yi).

Afei tu mmirika `i18n.site -n` na san tintim adwuma no.

Sɛ woasesa `~/.config/i18n.site.yml` na wopɛ sɛ wosan de gu so a, yɛsrɛ wo fa ahyɛde a edidi so yi di dwuma wɔ project root directory no mu na popa upload cache no :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Nhyehyɛe

Domain din a wɔde ahyɛ [cloudflare](//www.cloudflare.com)

### Nsakrae Ho Mmara

Fa nsakrae ho mmara no ka ho sɛnea wɔakyerɛ wɔ ase ha no:

![](//p.3ti.site/1725436822.avif)

Mmara koodu no te sɛ nea edidi so yi, yɛsrɛ wo sesa koodu "i18n.site" no ma ɛnyɛ wo domain din:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Caching Mmara Ahorow

Fa cache mmara ka ho sɛnea edidi so yi:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Fa Mmara Ahorow No Kɔ Baabi Foforo

Set redirection mmara no sɛnea edidi so yi, yɛsrɛ wo sesa code "i18n.site" no ma ɛnyɛ wo domain din

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

`URL redirect` Paw dynamic redirection, yɛsrɛ wo sesa `/en` wɔ redirection kwan `concat("/en",http.request.uri.path,".htm")` mu kɔ kasa default a wopɛ sɛ search engine ahorow de ka ho no so.

## Baidu Intelligent Cloud Nsiesiei

Sɛ ɛho hia sɛ wode nnwuma ma China asasepɔn no a, wubetumi de [Baidu Smart Cloud](//cloud.baidu.com) adi dwuma.

Wɔde data kɔ Baidu Object Storage na wɔkyekyere no kɔ Baidu Content Distribution Network so.

Afei yɛ script no wɔ [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) mu sɛnea edidi so yi

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
  // Wobetumi de mmuae atiri no asi hɔ sɛ ɛnyɛ debug output, te sɛ out.XXX = 'MSG';
})
```

Klik `Debug` , afei klik Publish to the entire network so.

![](//p.3ti.site/1725437754.avif)

## Nneɛma a Wɔde Di Dwuma a Ɛkɔ Akyiri: Kyɛ Kar Akwantu a Egyina Ɔmantam Gyinaesi So

Sɛ wopɛ sɛ wode nnwuma ma wɔ China asasepɔn so na wopɛ nso sɛ `cloudflare` amanaman ntam akwantu a wontua hwee a, wubetumi de `DNS` adi dwuma a ɔmantam gyinaesi wom.

Sɛ nhwɛso no `cloudflare` [Huawei Cloud DNS](https://www.huaweicloud.com)

Afiri pii wɔ `cloudflare` nhyehyɛe no mu.Nsɛntitiriw kakraa bi a ɛsɛ sɛ yɛhyɛ no nsow ni :

### Domain Din No Wɔ Host Wɔ Afoforo `DNS` , Sɛnea Wɔde `cloudflare` Di Dwuma

Di kan kyekyere domain din a wopɛ no to `cloudflare` , na afei fa `SSL/TLS` → custom domain din di dwuma de fa domain din titiriw no bata domain din yi ho.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ntumi Mfa Domain Din a Wɔahyɛ Da Ayɛ So Nkɔ

Esiane sɛ wɔrentumi mfa domain din a wɔahyɛ da ayɛ so nkɔ adeɛ akoraeɛ `R2` a wɔasisi mu `cloudflare` nti, ɛhia sɛ wɔde adeɛ akoraeɛ a ɛtɔ so mmiɛnsa di dwuma de fa fael a ɛnyɛ adwuma sisi hɔ.

`cloudflare` na yɛfa [backblaze.com](https://www.backblaze.com)

Yɛ bokiti wɔ `backblaze.com` , fa fael biara to so, klik na hwehwɛ fael no mu, na nya domain din a ɛyɛ `Friendly URL` , a ɛyɛ `f003.backblazeb2.com` wɔ ha.

![](//p.3ti.site/1725440783.avif)

Sesa domain din no fi `CNAME` kɔ `f003.backblazeb2.com` wɔ `cloudflare` na ma proxy no nyɛ adwuma.

![](//p.3ti.site/1725440896.avif)

Sesa `cloudflare` of `SSL` → encryption mode, de si hɔ sɛ `Full`

![](//p.3ti.site/1725438572.avif)

Fa nsakraeɛ mmara no ka ho sɛdeɛ wɔakyerɛ wɔ aseɛ ha yi, fa di kan (deɛ ɛdi kan no na ɛdi kan koraa):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` paw dynamic na sesa `your_bucketname` wɔ `concat("/file/your_bucketname",http.request.uri.path)` mu kɔ wo bokiti din mu.

Bio nso, wɔ `cloudflare` nsakraeɛ mmara a ɛwɔ atifi hɔ no mu no, wɔsesa `index.html` kɔ `file/your_bucketname/index.html` , na nhyehyeɛ foforɔ da so ara yɛ pɛ.

![](//p.3ti.site/1725441384.avif)