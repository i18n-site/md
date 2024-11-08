# Soekenjinoptimalisering (Seo)

## Beginsel

`i18n.site` neem 'n nie-verfris-enkelbladsy-argitektuur aan Ten einde soekindeksering te vergemaklik, sal 'n aparte statiese bladsy en `sitemap.xml` gegenereer word vir kruipers om te deurkruip.

Wanneer `User-Agent` van die toegangsversoek deur die soekenjin-kruiper gebruik word, sal die versoek herlei word na die statiese bladsy via `302` .

Op statiese bladsye, gebruik `link` om skakels na verskillende taalweergawes van hierdie bladsy aan te dui, soos :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Plaaslike Nginx-Konfigurasie

Neem die `.i18n/htm/main.yml` konfigurasielêer in die demo-projek as 'n voorbeeld

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

Verander asseblief eers die waarde van `host:` hierbo aan jou domeinnaam, soos `xxx.com` .

Dan, `i18n.site -n` , sal die statiese bladsy in die `out/main/htm` gids gegenereer word.

Natuurlik kan jy ook ander konfigurasielêers aktiveer, soos om eers na die konfigurasie van `main` te verwys om `.i18n/htm/dist.package.json` en `.i18n/htm/dist.yml` te skep.

Begin dan `i18n.site -n -c dist` sodat die statiese bladsy na `out/dist/htm` gegenereer sal word.

`nginx` kan gestel word deur na die konfigurasie hieronder te verwys.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Moenie bedienerwerkerskrifte te lank kas nie
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Stel langer kastye vir ander statiese hulpbronne
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Stel watter statiese lêer die deurkruiser gebruik as die tuisbladinskrywing
location = / {
  # As $botLang nie leeg is nie, beteken dit kruipertoegang en herleiding volgens die vasgestelde taalpad
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Enkelbladsy-toepassingkonfigurasie
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Stel Voorwerpberging Op Vir Die Oplaai Van Statiese Lêers

Statiese lêers kan plaaslik gegenereer word, maar 'n meer algemene benadering is om dit op te laai na objekberging.

Verander `out` wat hierbo gekonfigureer is na :

```
out:
  - s3
```

Wysig dan `~/.config/i18n.site.yml` en voeg die volgende konfigurasie by :

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

In die konfigurasie, verander asseblief `i18n.site` na die waarde van `host:` in `.i18n/htm/main.yml` , veelvuldige voorwerpwinkels kan onder `s3` gekonfigureer word, en die `region` veld is opsioneel (baie voorwerpwinkels hoef nie hierdie veld in te stel nie).

Begin dan `i18n.site -n` om die projek te herpubliseer.

As jy `~/.config/i18n.site.yml` gewysig het en weer wil oplaai, gebruik asseblief die volgende opdrag in die projek se wortelgids om die oplaaikas skoon te maak :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Cloudflare-Konfigurasie

Domeinnaam gehuisves aan [cloudflare](//www.cloudflare.com)

### Omskakelingsreëls

Voeg die omskakelingsreëls by soos hieronder getoon:

![](//p.3ti.site/1725436822.avif)

Die reëlkode is soos volg, verander asseblief die kode "i18n.site" na jou domeinnaam:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Kasreëls

Voeg kasreëls soos volg by:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Herlei Reëls

Stel die herleidingreëls soos volg, verander asseblief die kode "i18n.site" na jou domeinnaam

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

`URL redirect` Kies dinamiese herleiding, verander asseblief `/en` in herleidingspad `concat("/en",http.request.uri.path,".htm")` na die verstektaal wat jy wil hê soekenjins moet insluit.

## Baidu Intelligente Wolk-Konfigurasie

As jy dienste aan die vasteland van China moet verskaf, kan jy [Baidu Smart Cloud](//cloud.baidu.com) gebruik.

Data word opgelaai na Baidu Object Storage en gebind aan Baidu Content Distribution Network.

Skep dan die script in [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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
  // Antwoordopskrifte kan gestel word om uitvoer te ontfout, soos out.XXX = 'MSG';
})
```

Klik `Debug` , klik dan Publiseer na die hele netwerk.

![](//p.3ti.site/1725437754.avif)

## Gevorderde Gebruik: Versprei Verkeer Gebaseer Op Streeksresolusie

As jy dienste op die vasteland van China wil lewer en ook `cloudflare` gratis internasionale verkeer wil hê, kan jy `DNS` met streeksresolusie gebruik.

[Huawei DNS](https://www.huaweicloud.com) bied byvoorbeeld gratis streeksanalise, waarmee die Chinese vasteland-verkeer deur Baidu Smart Cloud kan gaan, en internasionale verkeer deur `cloudflare` kan gaan.

Daar is baie slaggate in die konfigurasie van `cloudflare` Hier is 'n paar punte om op te let :

### Die Domeinnaam Word in Ander `DNS` Gehuisves, Hoe Om `cloudflare` Te Gebruik

Bind eers 'n arbitrêre domeinnaam aan `cloudflare` , en gebruik dan `SSL/TLS` → pasgemaakte domeinnaam om die hoofdomeinnaam aan hierdie domeinnaam te assosieer.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Kan Nie Verkry Word Deur 'n Pasgemaakte Domeinnaam Nie

Omdat die `cloudflare` voorwerpberging `R2` nie deur 'n pasgemaakte domeinnaam verkry kan word nie, moet 'n derdeparty-objekberging gebruik word om statiese lêers te plaas.

Hier neem [backblaze.com](https://www.backblaze.com) as 'n voorbeeld om te demonstreer hoe om derdeparty-voorwerpe te bind om by `cloudflare` gestoor te word.

Skep 'n emmer by `backblaze.com` , laai enige lêer op, klik om deur die lêer te blaai, en kry die domeinnaam van `Friendly URL` , wat `f003.backblazeb2.com` hier is.

![](//p.3ti.site/1725440783.avif)

Verander die domeinnaam van `CNAME` na `f003.backblazeb2.com` by `cloudflare` en aktiveer die instaanbediener.

![](//p.3ti.site/1725440896.avif)

Verander `cloudflare` van `SSL` → enkripsiemodus, gestel op `Full`

![](//p.3ti.site/1725438572.avif)

Voeg die omskakelingsreël by soos hieronder getoon, plaas dit eerste (die eerste een het die laagste prioriteit):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` kies dinamiese en verander `your_bucketname` in `concat("/file/your_bucketname",http.request.uri.path)` na jou emmernaam.

Daarbenewens, in die `cloudflare` omskakelingsreël hierbo, word `index.html` na `file/your_bucketname/index.html` verander, en ander konfigurasies bly dieselfde.

![](//p.3ti.site/1725441384.avif)