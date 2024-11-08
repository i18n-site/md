# Nchọcha Nchọcha (Seo)

## Ụkpụrụ

`i18n.site` nakweere ihe owuwu otu ibe na-adịghị ewe ume ọhụrụ, ka a ga-emepụta ibe static dị iche na `sitemap.xml` maka ndị na-eri nri.

Mgbe a na-eji `User-Agent` nke ohere ịnweta site na crawler search engine, a ga-ebugharị arịrịọ ahụ na ibe static site na `302` .

Na ibe static, jiri `link` gosi njikọ na ụdị asụsụ dị iche iche nke ibe a, dị ka :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Nhazi nginx Mpaghara

Were faịlụ nhazi `.i18n/htm/main.yml` na ọrụ ngosi dị ka ọmụmaatụ

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

Biko buru ụzọ gbanwee uru nke `host:` dị n'elu na aha ngalaba gị, dị ka `xxx.com` .

Mgbe ahụ, `i18n.site -n` , a ga-emepụta ibe static na ndekọ `out/main/htm` .

N'ezie, ị nwekwara ike ịme faịlụ nhazi ndị ọzọ, dị ka nke mbụ na-ezo aka na nhazi nke `main` iji mepụta `.i18n/htm/dist.package.json` na `.i18n/htm/dist.yml` .

Wee gbaa ọsọ `i18n.site -n -c dist` ka ewepụta ibe static ka ọ bụrụ `out/dist/htm` .

`nginx` nwere ike ịtọ site na-ezo aka na nhazi n'okpuru.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Echekwala script nke ndị ọrụ ihe nkesa ruo ogologo oge
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Tọọ ogologo cache maka akụrụngwa ndị ọzọ kwụ ọtọ
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Tọọ faịlụ static nke crawler na-eji dị ka ntinye ibe mbụ
location = / {
  # Ọ bụrụ $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Nhazi ngwa otu ibe
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Hazie Nchekwa Ihe Maka Ibugo Faịlụ Static

Enwere ike ịmepụta faịlụ static na mpaghara, mana ụzọ a na-ahụkarị bụ ibugo ha na nchekwa ihe.

Gbanwee `out` ahaziri n'elu ka ọ bụrụ :

```
out:
  - s3
```

Mgbe ahụ, dezie `~/.config/i18n.site.yml` ma tinye nhazi ndị a :

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

Na nhazi, biko gbanwee `i18n.site` na uru nke `host:` na `.i18n/htm/main.yml` , ọtụtụ ụlọ ahịa ihe nwere ike ịhazi n'okpuru `s3` , na mpaghara `region` bụ nhọrọ (ọtụtụ ụlọ ahịa ihe adịghị mkpa ịtọ ebe a).

Wee gbaa `i18n.site -n` ka ibipụta ọrụ a ọzọ.

Ọ bụrụ na ị gbanweela `~/.config/i18n.site.yml` ma chọọ ibugharị ọzọ, biko jiri iwu na-esonụ na ndekọ mgbọrọgwụ ọrụ iji kpochapụ cache bulite :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Nhazi

Akwadoro aha ngalaba [cloudflare](//www.cloudflare.com)

### Iwu Ntụgharị

Tinye iwu ntụgharị dịka egosiri n'okpuru:

![](//p.3ti.site/1725436822.avif)

Usoro iwu bụ nke a, biko gbanwee koodu "i18n.site" na aha ngalaba gị:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Iwu Caching

Tinye iwu cache dị ka ndị a:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Iwu Redirect

Tọọ iwu redirection dị ka ndị a, biko gbanwee koodu "i18n.site" na aha ngalaba gị

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

`URL redirect` Họrọ ntụgharị ntụgharị ike, biko gbanwee `/en` na ụzọ ntụgharị `concat("/en",http.request.uri.path,".htm")` gaa na asụsụ ndabara nke ịchọrọ ka njin ọchụchọ tinye.

## Nhazi Igwe Ojii Baidu Nwere Ọgụgụ Isi

Ọ bụrụ na ịchọrọ ịnye ọrụ na ala China, ị nwere ike iji [Baidu Smart Cloud](//cloud.baidu.com) .

A na-ebugo data na Nchekwa Ihe Baidu ma kechie ya na netwọk Nkesa Ọdịnaya Baidu.

Mgbe ahụ mepụta script na [ọrụ EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) dị ka ndị a

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

Pịa `Debug` , wee pịa Bipụta na netwọkụ niile.

![](//p.3ti.site/1725437754.avif)

## Ojiji Dị Elu: Kesaa Okporo Ụzọ Dabere Na Mkpebi Mpaghara

Ọ bụrụ na ịchọrọ ịnye ọrụ na China China ma chọọ `cloudflare` okporo ụzọ mba ụwa n'efu, ịnwere ike iji `DNS` nwere mkpebi mpaghara.

Dịka ọmụmaatụ, [Huawei DNS](https://www.huaweicloud.com) na-enye nyocha mpaghara n'efu, nke okporo ụzọ ndị China nwere ike ịga site na Baidu Smart Cloud, na okporo ụzọ mba ụwa nwere ike ịgafe `cloudflare` .

Enwere ọtụtụ ọnyà na nhazi nke `cloudflare` Nke a bụ isi ihe ole na ole ị ga-ahụ :

### A Na-Akwado Ngalaba Aha Na `DNS` Ọzọ, Otu Esi Eji `cloudflare`

Buru ụzọ kekọta ngalaba aha aka ike na `cloudflare` , wee jiri `SSL/TLS` → aha ngalaba aha iji jikọta isi ngalaba aha na aha ngalaba a.

![](https://p.3ti.site/1725438658.avif)

### Enweghị Ike Ịnweta `cloudflare R2` Site Na Aha Ngalaba Aha Omenala

N'ihi na enweghị ike ịnweta aha ngalaba ahaziri `R2` wuru `cloudflare` na ihe nchekwa ihe, ekwesịrị iji nchekwa ihe ndị ọzọ idowe faịlụ static.

N'ebe a `cloudflare` anyị na-ewere [backblaze.com](https://www.backblaze.com)

Mepụta ịwụ na `backblaze.com` , bulite faịlụ ọ bụla, pịa iji chọgharịa faịlụ ahụ, wee nweta aha ngalaba nke `Friendly URL` , nke bụ `f003.backblazeb2.com` ebe a.

![](//p.3ti.site/1725440783.avif)

Gbanwee aha ngalaba site na `CNAME` gaa na `f003.backblazeb2.com` na `cloudflare` wee mee proxy.

![](//p.3ti.site/1725440896.avif)

Megharịa `cloudflare` nke `SSL` → ọnọdụ nzuzo, tọọ ka ọ bụrụ `Full`

![](//p.3ti.site/1725438572.avif)

Tinye usoro ntụgharị dịka egosiri n'okpuru, tinye ya na mbụ (nke mbụ nwere ihe kacha mkpa):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` họrọ ike ma gbanwee `your_bucketname` na `concat("/file/your_bucketname",http.request.uri.path)` n'aha ịwụ gị.

Na mgbakwunye, na iwu ntụgharị `cloudflare` dị n'elu, `index.html` gbanwere na `file/your_bucketname/index.html` , nhazi ndị ọzọ na-anọgidekwa otu.

![](//p.3ti.site/1725441384.avif)