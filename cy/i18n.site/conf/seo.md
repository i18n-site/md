# Optimeiddio Peiriannau Chwilio (Seo)

## Egwyddor

Mae `i18n.site` yn mabwysiadu pensaernïaeth un dudalen nad yw'n adnewyddu Er mwyn hwyluso mynegeio chwilio, bydd tudalen statig ar wahân ac `sitemap.xml` yn cael eu cynhyrchu i ymlusgwyr eu cropian.

Pan ddefnyddir `User-Agent` y cais mynediad gan ymlusgwr y peiriant chwilio, bydd y cais yn cael ei ailgyfeirio i'r dudalen statig trwy `302` .

Ar dudalennau sefydlog, defnyddiwch `link` i nodi dolenni i fersiynau iaith gwahanol o'r dudalen hon, megis :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Cyfluniad nginx Lleol

Cymerwch y ffeil ffurfweddu `.i18n/htm/main.yml` yn y prosiect demo fel enghraifft

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

Yn gyntaf, addaswch werth `host:` uchod i'ch enw parth, fel `xxx.com` .

Yna, `i18n.site -n` , bydd y dudalen statig yn cael ei chynhyrchu yn y cyfeiriadur `out/main/htm` .

Wrth gwrs, gallwch chi hefyd alluogi ffeiliau cyfluniad eraill, megis cyfeirio'n gyntaf at gyfluniad `main` i greu `.i18n/htm/dist.package.json` a `.i18n/htm/dist.yml` .

Yna rhedwch `i18n.site -n -c dist` fel bod y dudalen statig yn cael ei chynhyrchu i `out/dist/htm` .

Gellir gosod `nginx` trwy gyfeirio at y ffurfweddiad isod.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Peidiwch â storio sgriptiau gweithwyr gweinydd am gyfnod rhy hir
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Gosod amseroedd storfa hirach ar gyfer adnoddau sefydlog eraill
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Gosod pa ffeil statig y mae'r ymlusgwr yn ei defnyddio fel cofnod hafan
location = / {
  # Os nad yw $botLang yn wag, mae'n golygu mynediad ymlusgo ac ailgyfeirio yn ôl y llwybr iaith a osodwyd
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Ffurfweddiad cais tudalen sengl
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Ffurfweddu Storfa Gwrthrychau Ar Gyfer Uwchlwytho Ffeiliau Statig

Gellir cynhyrchu ffeiliau statig yn lleol, ond dull mwy cyffredin yw eu huwchlwytho i storfa gwrthrychau.

Addasu'r `out` sydd wedi'i ffurfweddu uchod i :

```
out:
  - s3
```

Yna, golygu `~/.config/i18n.site.yml` ac ychwanegu'r ffurfweddiad canlynol :

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

Yn y ffurfweddiad, newidiwch `i18n.site` i werth `host:` mewn `.i18n/htm/main.yml` , gellir ffurfweddu storfeydd gwrthrychau lluosog o dan `s3` , ac mae'r maes `region` yn ddewisol (nid oes angen i lawer o siopau gwrthrychau osod y maes hwn).

Yna rhedwch `i18n.site -n` i ailgyhoeddi'r prosiect.

Os ydych chi wedi addasu `~/.config/i18n.site.yml` ac eisiau ail-lwytho i fyny, defnyddiwch y gorchymyn canlynol yng nghyfeiriadur gwraidd y prosiect i glirio'r storfa uwchlwytho :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Cyfluniad cloudflare

Enw parth wedi'i letya i [cloudflare](//www.cloudflare.com)

### Rheolau Trosi

Ychwanegwch y rheolau trosi fel y dangosir isod:

![](//p.3ti.site/1725436822.avif)

Mae'r cod rheol fel a ganlyn, addaswch y cod "i18n.site" i'ch enw parth:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Rheolau Caching

Ychwanegu rheolau storfa fel a ganlyn:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Rheolau Ailgyfeirio

Gosodwch y rheolau ailgyfeirio fel a ganlyn, addaswch y cod "i18n.site" i'ch enw parth

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

`URL redirect` Dewiswch ailgyfeirio deinamig, addaswch `/en` yn llwybr ailgyfeirio `concat("/en",http.request.uri.path,".htm")` i'r iaith ddiofyn yr ydych am i beiriannau chwilio ei chynnwys.

## Ffurfweddiad Cwmwl Deallus Baidu

Os oes angen i chi ddarparu gwasanaethau i dir mawr Tsieina, gallwch ddefnyddio [Baidu Smart Cloud](//cloud.baidu.com) .

Mae data'n cael ei lanlwytho i Baidu Object Storage a'i rwymo i Baidu Content Distribution Network.

Yna crëwch y sgript yn [EdgeJS gwasanaeth ymyl](//console.bce.baidu.com/cdn/#/cdn/ejs/list) fel a ganlyn

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
  // Gellir gosod penawdau ymateb i allbwn dadfygio, megis out.XXX = 'MSG';
})
```

Cliciwch `Debug` , yna cliciwch Cyhoeddi i'r rhwydwaith cyfan.

![](//p.3ti.site/1725437754.avif)

## Defnydd Uwch: Dosbarthu Traffig Yn Seiliedig Ar Ddatrysiad Rhanbarthol

Os ydych chi eisiau darparu gwasanaethau ar dir mawr Tsieina a hefyd eisiau `cloudflare` traffig rhyngwladol am ddim, gallwch ddefnyddio `DNS` gyda datrysiad rhanbarthol.

Er enghraifft, mae [Huawei DNS](https://www.huaweicloud.com) `cloudflare`

Mae yna lawer o beryglon yng nghyfluniad `cloudflare` Dyma rai pwyntiau i'w nodi :

### Mae'r Enw Parth Yn Cael Ei Letya Mewn `DNS` Arall, Sut I Ddefnyddio `cloudflare`

Yn gyntaf rhwymwch enw parth mympwyol i `cloudflare` , ac yna defnyddiwch `SSL/TLS` → enw parth arferol i gysylltu'r prif enw parth â'r enw parth hwn.

![](https://p.3ti.site/1725438658.avif)

### Ni Ellir Cyrchu `cloudflare R2` Trwy Enw Parth Wedi'i Deilwra

Oherwydd nad oes modd cyrchu'r storfa gwrthrychau `R2` sydd wedi'i `cloudflare` i mewn trwy ddefnyddio enw parth wedi'i addasu, mae angen defnyddio storfa gwrthrychau trydydd parti i osod ffeiliau statig.

Yma rydym yn cymryd [backblaze.com](https://www.backblaze.com) fel enghraifft i ddangos sut i rwymo gwrthrychau trydydd parti i'w storio ar `cloudflare` .

Creu bwced ar `backblaze.com` , uwchlwytho unrhyw ffeil, cliciwch i bori'r ffeil, a chael enw parth `Friendly URL` , sef `f003.backblazeb2.com` yma.

![](//p.3ti.site/1725440783.avif)

Newidiwch yr enw parth o `CNAME` i `f003.backblazeb2.com` yn `cloudflare` a galluogi'r dirprwy.

![](//p.3ti.site/1725440896.avif)

Addasu `cloudflare` o `SSL` → modd amgryptio, gosod i `Full`

![](//p.3ti.site/1725438572.avif)

Ychwanegwch y rheol trosi fel y dangosir isod, rhowch hi yn gyntaf (yr un cyntaf sydd â'r flaenoriaeth isaf):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` dewiswch deinamig ac addaswch `your_bucketname` mewn `concat("/file/your_bucketname",http.request.uri.path)` i'ch enw bwced.

Yn ogystal, yn y rheol trosi `cloudflare` uchod, mae `index.html` yn cael ei newid i `file/your_bucketname/index.html` , ac mae ffurfweddiadau eraill yn aros yr un fath.

![](//p.3ti.site/1725441384.avif)