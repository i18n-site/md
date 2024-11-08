# Kutsvaga Engine Optimization (Seo)

## Musimboti

`i18n.site` inotora gadziriso yepeji imwe isingadzoreki Kuti ifambise kutsvaga indexing, peji yakapatsanurwa uye `sitemap.xml` ichagadzirwa kuitira vanokambaira.

Kana `User-Agent` yechikumbiro chekuwana ichishandiswa neanotsvaga injini inokambaira, chikumbiro chinozoendeswa kune yakamira peji kuburikidza `302` .

Pamapeji akamira, shandisa `link` kuratidza zvinongedzo kushanduro dzemitauro dzakasiyana dzepeji rino, senge :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Local nginx Kumisikidza

Tora iyo `.i18n/htm/main.yml` yekumisikidza faira mune demo purojekiti semuenzaniso

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

Ndokumbira utange wagadzirisa kukosha `host:` kumusoro kune zita rako rezita, senge `xxx.com` .

Zvadaro, `i18n.site -n` , iyo static peji inozogadzirwa mune `out/main/htm` dhairekitori.

Ehe, iwe unogona zvakare kugonesa mamwe mafaera ekugadzirisa, sekutanga kutaura nezve `main` kugadzirisa `.i18n/htm/dist.package.json` uye `.i18n/htm/dist.yml` .

Wobva wamhanya `i18n.site -n -c dist` kuitira kuti iyo static peji iumbwe `out/dist/htm` .

`nginx` inogona kusetwa nekutarisa kune iyo gadziriso pazasi.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Usachengete sevhavha yevashandi zvinyorwa kwenguva yakareba
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Gadzirisa nguva yakareba cache yezvimwe zviwanikwa zvakamira
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Seta kuti faira ripi rinoshandiswa neanokambaira seyekupinda peji remba
location = / {
  # $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Single peji application kugadzirisa
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Gadzirisa Chengetedzo Yechinhu Kuti Uise Static Mafaera

Static mafaera anogona kugadzirwa munharaunda, asi nzira yakajairika ndeyekuaisa kune chinhu chekuchengetedza.

Shandura `out` yakagadziriswa pamusoro kuti :

```
out:
  - s3
```

Wobva wagadzirisa `~/.config/i18n.site.yml` uye wedzera iyo inotevera gadziriso :

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

Mukugadzirisa, tapota shandura `i18n.site` kune kukosha `host:` `.i18n/htm/main.yml` , zvitoro zvakawanda zvezvinhu zvinogona kugadziriswa pasi `s3` , uye `region` munda unosarudzwa (zvizhinji zvezvitoro zvezvinhu hazvidi kuisa munda uyu).

Wobva wamhanya `i18n.site -n` kuti uburitsezve chirongwa.

Kana iwe wakagadzirisa `~/.config/i18n.site.yml` uye uchida kurodha zvakare, ndapota shandisa murairo unotevera mumudziyo weprojekiti dhairekitori kudzima cache yekurodha :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Kugadzirisa

Domain name host to [cloudflare](//www.cloudflare.com)

### Mitemo Yekushandura

Wedzera mitemo yekushandura sezvinoratidzwa pasi apa:

![](//p.3ti.site/1725436822.avif)

Iyo kodhi kodhi ndeyekutevera, ndapota shandura iyo kodhi "i18n.site" kune yako zita rezita:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Caching Mitemo

Wedzera cache mitemo sezvinotevera:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Redirect Rules

Seta iyo redirection mitemo seinotevera, ndapota shandura iyo kodhi "i18n.site" kuzita rako rezita.

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

`URL redirect` Sarudza dhizaini redirection, ndapota shandura `/en` mune redirection nzira `concat("/en",http.request.uri.path,".htm")` kune iyo default mutauro waunoda kuti injini dzekutsvaga dzibatanidze.

## Baidu Intelligent Cloud Configuration

Kana iwe uchida kupa masevhisi kune mainland China, unogona kushandisa [Baidu Smart Cloud](//cloud.baidu.com) .

Data inokwidzwa kuBaidu Object Storage uye inosungirirwa kuBaidu Content Distribution Network.

Wobva wagadzira script mukati [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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
  // Misoro yemhinduro inogona kusetwa kuti igadzirise kubuda, senge out.XXX = 'MSG';
})
```

Dzvanya `Debug` , wobva wadzvanya Publish kune network yese.

![](//p.3ti.site/1725437754.avif)

## Kushandiswa Kwepamusoro: Govera Traffic Zvichienderana Nekugadziriswa Kwedunhu

Kana iwe uchida kupa masevhisi mu mainland China uye zvakare uchida `cloudflare` yemahara traffic yepasirese, unogona kushandisa `DNS` ine dunhu rekugadzirisa.

Semuenzaniso, [Huawei DNS](https://www.huaweicloud.com) inopa mahara kuongororwa kwedunhu, iyo mainland Chinese traffic inogona kuenda kuburikidza neBaidu Smart Cloud, uye traffic yepasirese inogona kupfuura `cloudflare` .

Pane zvakawanda zvinokanganisa mukugadzirisa kwe `cloudflare` Heano mazano mashomanana ekucherechedza :

### Iro Zita Rezita Rinobatwa Mune Mamwe `DNS` , Maitiro Ekushandisa `cloudflare`

Kutanga sunga zita renzvimbo isina kurongeka `cloudflare` , wobva washandisa `SSL/TLS` → zita remadunhurirwa kuti ubatanidze zita guru rezita kune iri rezita.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Haigone Kuwanikwa Kuburikidza Neyakajairwa Zita Rezita

Nekuti iyo yakavakirwa `cloudflare` muchinhu chekuchengetedza `R2` haigone kuwanikwa neyakagadzirirwa zita rezita, chechitatu-bato rekuchengetedza chinhu chinoda kushandiswa kuisa static mafaera.

[backblaze.com](https://www.backblaze.com) tinotora semuenzaniso kuratidza nzira yekusunga zvinhu zvechitatu kuti zvichengetwe `cloudflare` .

Gadzira bhaketi `backblaze.com` , rodha chero faira, tinya kuti utarise faira, uye tora zita rezita `Friendly URL` , iro riri `f003.backblazeb2.com` pano.

![](//p.3ti.site/1725440783.avif)

Chinja zita rezita kubva `CNAME` kuenda `f003.backblazeb2.com` `cloudflare` uye gonesa proxy.

![](//p.3ti.site/1725440896.avif)

Shandura `cloudflare` `SSL` → encryption modhi, isa `Full`

![](//p.3ti.site/1725438572.avif)

Wedzera mutemo wekutendeuka sezviri kuratidzwa pazasi, isa pakutanga (yekutanga ine yakaderera pamberi):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` sarudza inoshanduka uye shandura `your_bucketname` `concat("/file/your_bucketname",http.request.uri.path)` kune zita rebhaketi rako.

Mukuwedzera, mumutemo wekushandura `cloudflare` pamusoro apa, `index.html` inoshandurwa kuva `file/your_bucketname/index.html` , uye mamwe magadzirirwo anoramba akafanana.

![](//p.3ti.site/1725441384.avif)