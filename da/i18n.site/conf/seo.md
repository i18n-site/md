# Søgemaskineoptimering (Seo)

## Princip

`i18n.site` anvender en enkeltsidearkitektur, der ikke opdateres. For at lette søgeindeksering vil der blive genereret en separat statisk side og `sitemap.xml` , som crawlere kan gennemgå.

Når `User-Agent` for adgangsanmodningen bruges af søgemaskinecrawleren, vil anmodningen blive omdirigeret til den statiske side via `302` .

På statiske sider skal du bruge `link` til at angive links til forskellige sprogversioner af denne side, såsom :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Lokal Nginx-Konfiguration

Tag `.i18n/htm/main.yml` konfigurationsfilen i demoprojektet som et eksempel

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

Rediger først værdien af `host:` ovenfor til dit domænenavn, såsom `xxx.com` .

Derefter, `i18n.site -n` , vil den statiske side blive genereret i mappen `out/main/htm` .

Selvfølgelig kan du også aktivere andre konfigurationsfiler, såsom først at henvise til konfigurationen af `main` for at oprette `.i18n/htm/dist.package.json` og `.i18n/htm/dist.yml` .

Kør derefter `i18n.site -n -c dist` , så den statiske side vil blive genereret til `out/dist/htm` .

`nginx` kan indstilles ved at henvise til nedenstående konfiguration.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Cache ikke serverarbejderscripts for længe
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Indstil længere cachetider for andre statiske ressourcer
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Indstil hvilken statisk fil crawleren bruger som startsideindgang
location = / {
  # Hvis $botLang ikke er tom, betyder det crawler-adgang og omdirigering i henhold til den indstillede sprogsti
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Enkeltside applikationskonfiguration
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Konfigurer Objektlager Til Upload Af Statiske Filer

Statiske filer kan genereres lokalt, men en mere almindelig tilgang er at uploade dem til objektlager.

Rediger `out` konfigureret ovenfor til :

```
out:
  - s3
```

Rediger derefter `~/.config/i18n.site.yml` og tilføj følgende konfiguration :

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

I konfigurationen skal du ændre `i18n.site` til værdien af `host:` i `.i18n/htm/main.yml` , flere objektlagre kan konfigureres under `s3` , og feltet `region` er valgfrit (mange objektlagre behøver ikke at indstille dette felt).

Kør derefter `i18n.site -n` for at genudgive projektet.

Hvis du har ændret `~/.config/i18n.site.yml` og ønsker at uploade igen, skal du bruge følgende kommando i projektets rodbibliotek for at rydde upload-cachen :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Cloudflare-Konfiguration

Domænenavn hostet til [cloudflare](//www.cloudflare.com)

### Konverteringsregler

Tilføj konverteringsreglerne som vist nedenfor:

![](//p.3ti.site/1725436822.avif)

Regelkoden er som følger, modificer venligst koden "i18n.site" til dit domænenavn:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Caching Regler

Tilføj cache-regler som følger:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Omdirigeringsregler

Indstil omdirigeringsreglerne som følger, modificer venligst koden "i18n.site" til dit domænenavn

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

`URL redirect` Vælg dynamisk omdirigering, modificer venligst `/en` i omdirigeringssti `concat("/en",http.request.uri.path,".htm")` til det standardsprog, som søgemaskinerne skal inkludere.

## Baidu Intelligent Cloud-Konfiguration

Hvis du skal levere tjenester til det kinesiske fastland, kan du bruge [Baidu Smart Cloud](//cloud.baidu.com) .

Data uploades til Baidu Object Storage og bindes til Baidu Content Distribution Network.

Opret derefter scriptet i [Edge EdgeJS tjenesten](//console.bce.baidu.com/cdn/#/cdn/ejs/list) som følger

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
  // Svarheadere kan indstilles til at fejlfinde output, såsom out.XXX = 'MSG';
})
```

Klik på `Debug` , og klik derefter på Udgiv til hele netværket.

![](//p.3ti.site/1725437754.avif)

## Avanceret Brug: Fordel Trafik Baseret På Regional Opløsning

Hvis du vil levere tjenester på det kinesiske fastland og også ønsker `cloudflare` gratis international trafik, kan du bruge `DNS` med regional opløsning.

For eksempel giver [Huawei Cloud DNS](https://www.huaweicloud.com) gratis regional analyse, hvormed den kinesiske trafik kan gå gennem Baidu Smart Cloud, og international trafik kan gå gennem `cloudflare` .

Der er mange faldgruber i konfigurationen af `cloudflare` Her er et par punkter at bemærke :

### Domænenavnet Er Hostet I Andre `DNS` , Hvordan Man Bruger `cloudflare`

Bind først et vilkårligt domænenavn til `cloudflare` , og brug derefter `SSL/TLS` → brugerdefineret domænenavn til at knytte hoveddomænenavnet til dette domænenavn.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Kan Ikke Tilgås via Et Brugerdefineret Domænenavn

Fordi det `cloudflare` objektlager `R2` ikke kan tilgås af et tilpasset domænenavn, skal der bruges en tredjeparts objektlager til at placere statiske filer.

Her tager vi [backblaze.com](https://www.backblaze.com) som et eksempel for at demonstrere, hvordan man binder tredjepartsobjekter, der skal gemmes ved `cloudflare` .

Opret en bucket ved `backblaze.com` , upload en fil, klik for at gennemse filen og få domænenavnet på `Friendly URL` , som er `f003.backblazeb2.com` her.

![](//p.3ti.site/1725440783.avif)

Skift domænenavnet fra `CNAME` til `f003.backblazeb2.com` ved `cloudflare` og aktiver proxyen.

![](//p.3ti.site/1725440896.avif)

Rediger `cloudflare` af `SSL` → krypteringstilstand, indstillet til `Full`

![](//p.3ti.site/1725438572.avif)

Tilføj konverteringsreglen som vist nedenfor, sæt den først (den første har den laveste prioritet):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` vælg dynamisk og modificer `your_bucketname` i `concat("/file/your_bucketname",http.request.uri.path)` til dit bucket-navn.

Derudover ændres `index.html` i `cloudflare` konverteringsreglen ovenfor til `file/your_bucketname/index.html` , og andre konfigurationer forbliver de samme.

![](//p.3ti.site/1725441384.avif)