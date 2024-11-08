# Søkemotoroptimalisering (Seo)

## Prinsipp

`i18n.site` tar i bruk en enkeltsidearkitektur som ikke oppdateres. For å lette søkeindeksering vil en separat statisk side og `sitemap.xml` bli generert for gjennomsøking.

Når `User-Agent` til tilgangsforespørselen brukes av søkemotoren, vil forespørselen bli omdirigert til den statiske siden via `302` .

På statiske sider, bruk `link` for å indikere lenker til forskjellige språkversjoner av denne siden, for eksempel :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Lokal Nginx-Konfigurasjon

Ta `.i18n/htm/main.yml` konfigurasjonsfilen i demoprosjektet som et eksempel

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

Vennligst endre først verdien på `host:` ovenfor til domenenavnet ditt, for eksempel `xxx.com` .

Deretter, `i18n.site -n` , vil den statiske siden bli generert i `out/main/htm` katalogen.

Selvfølgelig kan du også aktivere andre konfigurasjonsfiler, for eksempel først referere til konfigurasjonen av `main` for å lage `.i18n/htm/dist.package.json` og `.i18n/htm/dist.yml` .

Kjør så `i18n.site -n -c dist` slik at den statiske siden blir generert til `out/dist/htm` .

`nginx` kan settes ved å referere til konfigurasjonen nedenfor.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Ikke hurtigbufr serverarbeiderskript for lenge
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Angi lengre hurtigbuffertider for andre statiske ressurser
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Angi hvilken statisk fil søkeroboten bruker som startsideoppføring
location = / {
  # Hvis $botLang ikke er tom, betyr det søkerobottilgang og omdirigering i henhold til den angitte språkbanen
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Enkeltside applikasjonskonfigurasjon
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Konfigurer Objektlagring for Opplasting Av Statiske Filer

Statiske filer kan genereres lokalt, men en mer vanlig tilnærming er å laste dem opp til objektlagring.

Endre `out` som er konfigurert ovenfor til :

```
out:
  - s3
```

Rediger deretter `~/.config/i18n.site.yml` og legg til følgende konfigurasjon :

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

I konfigurasjonen, vennligst endre `i18n.site` til verdien av `host:` i `.i18n/htm/main.yml` , flere objektlagre kan konfigureres under `s3` , og `region` feltet er valgfritt (mange objektlagre trenger ikke å angi dette feltet).

Kjør deretter `i18n.site -n` for å publisere prosjektet på nytt.

Hvis du har endret `~/.config/i18n.site.yml` og ønsker å laste opp på nytt, vennligst bruk følgende kommando i prosjektets rotkatalog for å tømme opplastingsbufferen :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Cloudflare-Konfigurasjon

Domenenavn er vert for [cloudflare](//www.cloudflare.com)

### Konverteringsregler

Legg til konverteringsreglene som vist nedenfor:

![](//p.3ti.site/1725436822.avif)

Regelkoden er som følger, vennligst endre koden "i18n.site" til ditt domenenavn:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Bufringsregler

Legg til cache-regler som følger:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Omdirigeringsregler

Angi omdirigeringsreglene som følger, vennligst endre koden "i18n.site" til ditt domenenavn

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

`URL redirect` Velg dynamisk omdirigering, vennligst endre `/en` i omdirigeringsbane `concat("/en",http.request.uri.path,".htm")` til standardspråket du vil at søkemotorer skal inkludere.

## Baidu Intelligent Cloud Configuration

Hvis du trenger å tilby tjenester til fastlands-Kina, kan du bruke [Baidu Smart Cloud](//cloud.baidu.com) .

Data lastes opp til Baidu Object Storage og bindes til Baidu Content Distribution Network.

Deretter oppretter du skriptet i [EdgeJS -tjenesten](//console.bce.baidu.com/cdn/#/cdn/ejs/list) som følger

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
  // Responshoder kan settes til å feilsøke utdata, for eksempel out.XXX = 'MSG';
})
```

Klikk `Debug` , og klikk deretter Publiser til hele nettverket.

![](//p.3ti.site/1725437754.avif)

## Avansert Bruk: Distribuer Trafikk Basert På Regional Oppløsning

Hvis du ønsker å tilby tjenester i fastlands-Kina og også ønsker `cloudflare` gratis internasjonal trafikk, kan du bruke `DNS` med regional oppløsning.

[Huawei Cloud DNS](https://www.huaweicloud.com) gir for eksempel gratis regional analyse, med hvilken kinesisk fastlandstrafikk kan gå gjennom Baidu Smart Cloud, og internasjonal trafikk kan gå gjennom `cloudflare` .

Det er mange fallgruver i konfigurasjonen av `cloudflare` Her er noen punkter å merke seg :

### Domenenavnet Er Vert for Andre `DNS` , Hvordan Bruker Du `cloudflare`

Bind først et vilkårlig domenenavn til `cloudflare` , og bruk deretter `SSL/TLS` → tilpasset domenenavn for å knytte hoveddomenenavnet til dette domenenavnet.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Kan Ikke Nås via Et Tilpasset Domenenavn

Fordi den `cloudflare` objektlagringen `R2` ikke kan nås med et tilpasset domenenavn, må en tredjeparts objektlagring brukes til å plassere statiske filer.

Her tar vi [backblaze.com](https://www.backblaze.com) som et eksempel for å demonstrere hvordan man binder tredjepartsobjekter som skal lagres ved `cloudflare` .

Opprett en bøtte ved `backblaze.com` , last opp en fil, klikk for å bla gjennom filen, og få domenenavnet til `Friendly URL` , som er `f003.backblazeb2.com` her.

![](//p.3ti.site/1725440783.avif)

Endre domenenavnet fra `CNAME` til `f003.backblazeb2.com` ved `cloudflare` og aktiver proxyen.

![](//p.3ti.site/1725440896.avif)

Endre `cloudflare` av `SSL` → krypteringsmodus, satt til `Full`

![](//p.3ti.site/1725438572.avif)

Legg til konverteringsregelen som vist nedenfor, sett den først (den første har lavest prioritet):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` velg dynamisk og modifiser `your_bucketname` i `concat("/file/your_bucketname",http.request.uri.path)` til bøttenavnet ditt.

I tillegg, i `cloudflare` konverteringsregelen ovenfor, endres `index.html` til `file/your_bucketname/index.html` , og andre konfigurasjoner forblir de samme.

![](//p.3ti.site/1725441384.avif)