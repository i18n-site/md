# Zoekmachineoptimalisatie (Seo)

## Beginsel

`i18n.site` gebruikt een niet-vernieuwde architectuur voor één pagina. Om zoekindexering te vergemakkelijken, wordt er een afzonderlijke statische pagina en `sitemap.xml` gegenereerd die crawlers kunnen crawlen.

Wanneer `User-Agent` van het toegangsverzoek wordt gebruikt door de crawler van de zoekmachine, wordt het verzoek via `302` doorgestuurd naar de statische pagina.

Op statische pagina's gebruikt u `link` om links naar verschillende taalversies van deze pagina aan te geven, zoals :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Lokale Nginx-Configuratie

Neem het `.i18n/htm/main.yml` configuratiebestand in het demoproject als voorbeeld

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

Wijzig eerst de waarde van `host:` hierboven in uw domeinnaam, bijvoorbeeld `xxx.com` .

Vervolgens wordt, `i18n.site -n` , de statische pagina gegenereerd in de map `out/main/htm` .

Uiteraard kunt u ook andere configuratiebestanden inschakelen, zoals eerst verwijzen naar de configuratie van `main` om `.i18n/htm/dist.package.json` en `.i18n/htm/dist.yml` aan te maken.

Voer vervolgens `i18n.site -n -c dist` uit, zodat de statische pagina wordt gegenereerd naar `out/dist/htm` .

`nginx` kan worden ingesteld door de onderstaande configuratie te raadplegen.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Bewaar serverwerkscripts niet te lang in de cache
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Stel langere cachetijden in voor andere statische bronnen
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Stel in welk statisch bestand de crawler gebruikt als startpagina-item
location = / {
  # Als $botLang niet leeg is, betekent dit crawlertoegang en omleiding volgens het ingestelde taalpad
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Applicatieconfiguratie met één pagina
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Configureer Objectopslag Voor Het Uploaden Van Statische Bestanden

Statische bestanden kunnen lokaal worden gegenereerd, maar een meer gebruikelijke aanpak is om ze naar objectopslag te uploaden.

Wijzig `out` in :

```
out:
  - s3
```

Bewerk vervolgens `~/.config/i18n.site.yml` en voeg de volgende configuratie toe :

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

Wijzig in de configuratie `i18n.site` in de waarde van `host:` in `.i18n/htm/main.yml` . Er kunnen meerdere objectopslagplaatsen worden geconfigureerd onder `s3` , en het veld `region` is optioneel (veel objectopslagplaatsen hoeven dit veld niet in te stellen).

Voer vervolgens `i18n.site -n` uit om het project opnieuw te publiceren.

Als je `~/.config/i18n.site.yml` hebt gewijzigd en opnieuw wilt uploaden, gebruik dan de volgende opdracht in de hoofdmap van het project om de uploadcache te wissen :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Cloudflare-Configuratie

Domeinnaam gehost op [cloudflare](//www.cloudflare.com)

### Conversieregels

Voeg de conversieregels toe zoals hieronder weergegeven:

![](//p.3ti.site/1725436822.avif)

De regelcode is als volgt. Wijzig de code "i18n.site" in uw domeinnaam:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Regels Voor Cachen

Voeg cacheregels als volgt toe:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Regels Voor Omleiding

Stel de omleidingsregels als volgt in. Wijzig de code "i18n.site" naar uw domeinnaam

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

`URL redirect` Selecteer dynamische omleiding. Wijzig `/en` in omleidingspad `concat("/en",http.request.uri.path,".htm")` naar de standaardtaal die zoekmachines moeten gebruiken.

## Baidu Intelligente Cloudconfiguratie

Als u diensten moet leveren aan het vasteland van China, kunt u [Baidu Smart Cloud](//cloud.baidu.com) gebruiken.

Gegevens worden geüpload naar Baidu Object Storage en gebonden aan het Baidu Content Distribution Network.

Maak vervolgens het script in [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) als volgt

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
  // Antwoordheaders kunnen worden ingesteld om uitvoer te debuggen, zoals out.XXX = 'MSG';
})
```

Klik op `Debug` en vervolgens op Publiceren naar het gehele netwerk.

![](//p.3ti.site/1725437754.avif)

## Geavanceerd Gebruik: Verdeel Verkeer Op Basis Van Regionale Resolutie

Als u diensten wilt verlenen op het vasteland van China en ook `cloudflare` gratis internationaal verkeer wilt, kunt u `DNS` met regionale resolutie gebruiken.

[Huawei Cloud DNS](https://www.huaweicloud.com) biedt bijvoorbeeld gratis regionale analyses, waarmee het Chinese verkeer op het vasteland via Baidu Smart Cloud kan gaan, en het internationale verkeer via `cloudflare` .

Er zijn veel valkuilen bij de configuratie van `cloudflare` Hier zijn een paar aandachtspunten :

### De Domeinnaam Wordt Gehost in Andere `DNS` , Hoe Te Gebruiken `cloudflare`

Bind eerst een willekeurige domeinnaam aan `cloudflare` en gebruik vervolgens `SSL/TLS` → aangepaste domeinnaam om de hoofddomeinnaam aan deze domeinnaam te koppelen.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Is Niet Toegankelijk via Een Aangepaste Domeinnaam

Omdat de `cloudflare` objectopslag `R2` niet toegankelijk is via een aangepaste domeinnaam, moet een objectopslag van derden worden gebruikt om statische bestanden te plaatsen.

Hier nemen we [backblaze.com](https://www.backblaze.com) als voorbeeld om te demonstreren hoe objecten van derden kunnen worden gebonden om op `cloudflare` te worden opgeslagen.

Maak een bucket op `backblaze.com` , upload een willekeurig bestand, klik om door het bestand te bladeren en verkrijg de domeinnaam `Friendly URL` , dat is hier `f003.backblazeb2.com` .

![](//p.3ti.site/1725440783.avif)

Wijzig de domeinnaam van `CNAME` naar `f003.backblazeb2.com` op `cloudflare` en schakel de proxy in.

![](//p.3ti.site/1725440896.avif)

Wijzig `cloudflare` van `SSL` → encryptiemodus, stel in op `Full`

![](//p.3ti.site/1725438572.avif)

Voeg de conversieregel toe zoals hieronder weergegeven, zet deze op de eerste plaats (de eerste heeft de laagste prioriteit):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` selecteer dynamisch en wijzig `your_bucketname` in `concat("/file/your_bucketname",http.request.uri.path)` naar uw bucketnaam.

Bovendien wordt in de bovenstaande `cloudflare` conversieregel `index.html` gewijzigd in `file/your_bucketname/index.html` en blijven andere configuraties hetzelfde.

![](//p.3ti.site/1725441384.avif)