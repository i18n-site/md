# Sökmotoroptimering (Seo)

## Princip

`i18n.site` antar en enkelsidesarkitektur som inte uppdateras. För att underlätta sökindexering kommer en separat statisk sida och `sitemap.xml` att genereras för sökrobotar.

När `User-Agent` :an för åtkomstbegäran används av sökmotorns sökrobot, omdirigeras begäran till den statiska sidan via `302` .

På statiska sidor, använd `link` för att indikera länkar till olika språkversioner av denna sida, som :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Lokal Nginx-Konfiguration

Ta konfigurationsfilen `.i18n/htm/main.yml` i demoprojektet som ett exempel

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

Ändra först värdet på `host:` ovan för ditt domännamn, till exempel `xxx.com` .

Sedan, `i18n.site -n` , kommer den statiska sidan att genereras i katalogen `out/main/htm` .

Naturligtvis kan du även aktivera andra konfigurationsfiler, som att först hänvisa till konfigurationen av `main` för att skapa `.i18n/htm/dist.package.json` och `.i18n/htm/dist.yml` .

Kör sedan `i18n.site -n -c dist` så att den statiska sidan genereras till `out/dist/htm` .

`nginx` kan ställas in genom att hänvisa till konfigurationen nedan.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Cachelagra inte serverarbetarskript för länge
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Ställ in längre cachetider för andra statiska resurser
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Ställ in vilken statisk fil som sökroboten använder som startsida
location = / {
  # Om $botLang inte är tom, betyder det sökrobotåtkomst och omdirigering enligt den inställda språksökvägen
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Ensidig applikationskonfiguration
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Konfigurera Objektlagring För Uppladdning Av Statiska Filer

Statiska filer kan genereras lokalt, men ett vanligare tillvägagångssätt är att ladda upp dem till objektlagring.

Ändra `out` som konfigurerats ovan till :

```
out:
  - s3
```

Redigera sedan `~/.config/i18n.site.yml` och lägg till följande konfiguration :

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

I konfigurationen ändrar du `i18n.site` till värdet `host:` i `.i18n/htm/main.yml` , flera objektlager kan konfigureras under `s3` och fältet `region` är valfritt (många objektlager behöver inte ställa in detta fält).

Kör sedan `i18n.site -n` för att återpublicera projektet.

Om du har ändrat `~/.config/i18n.site.yml` och vill ladda upp igen, använd följande kommando i projektets rotkatalog för att rensa uppladdningscachen :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Cloudflare-Konfiguration

Domännamn värd för [cloudflare](//www.cloudflare.com)

### Konverteringsregler

Lägg till konverteringsreglerna enligt nedan:

![](//p.3ti.site/1725436822.avif)

Regelkoden är som följer, vänligen ändra koden "i18n.site" till ditt domännamn:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Cachningsregler

Lägg till cacheregler enligt följande:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Omdirigeringsregler

Ställ in omdirigeringsreglerna enligt följande, vänligen ändra koden "i18n.site" till ditt domännamn

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

`URL redirect` Välj dynamisk omdirigering, vänligen ändra `/en` i omdirigeringsväg `concat("/en",http.request.uri.path,".htm")` till standardspråket du vill att sökmotorerna ska inkludera.

## Baidu Intelligent Cloud Configuration

Om du behöver tillhandahålla tjänster till Kina kan du använda [Baidu Smart Cloud](//cloud.baidu.com) .

Data laddas upp till Baidu Object Storage och binds till Baidu Content Distribution Network.

Skapa sedan skriptet i [edge EdgeJS tjänsten](//console.bce.baidu.com/cdn/#/cdn/ejs/list) enligt följande

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
  // Svarsrubriker kan ställas in för att felsöka utdata, såsom out.XXX = 'MSG';
})
```

Klicka på `Debug` och sedan på Publicera till hela nätverket.

![](//p.3ti.site/1725437754.avif)

## Avancerad Användning: Fördela Trafik Baserat På Regional Upplösning

Om du vill tillhandahålla tjänster i Kina och även vill ha `cloudflare` gratis internationell trafik kan du använda `DNS` med regional upplösning.

Till exempel tillhandahåller [Huawei Cloud DNS](https://www.huaweicloud.com) gratis regional analys, med vilken kinesisk fastlandstrafik kan gå genom Baidu Smart Cloud, och internationell trafik kan gå genom `cloudflare` .

Det finns många fallgropar i konfigurationen `cloudflare` Här är några punkter att notera :

### Domännamnet Är Värd I Andra `DNS` , Hur Man Använder `cloudflare`

Bind först ett godtyckligt domännamn till `cloudflare` och använd sedan `SSL/TLS` → anpassat domännamn för att associera huvuddomännamnet till detta domännamn.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Kan Inte Nås via Ett Anpassat Domännamn

Eftersom den `cloudflare` objektlagringen `R2` inte kan nås med ett anpassat domännamn, måste ett objektlagring från tredje part användas för att placera statiska filer.

Här tar vi [backblaze.com](https://www.backblaze.com) som ett exempel för att demonstrera hur man binder tredjepartsobjekt som ska lagras vid `cloudflare` .

Skapa en hink vid `backblaze.com` , ladda upp valfri fil, klicka för att bläddra i filen och få domännamnet `Friendly URL` , vilket är `f003.backblazeb2.com` här.

![](//p.3ti.site/1725440783.avif)

Ändra domännamnet från `CNAME` till `f003.backblazeb2.com` vid `cloudflare` och aktivera proxyn.

![](//p.3ti.site/1725440896.avif)

Ändra `cloudflare` av `SSL` → krypteringsläge, inställt på `Full`

![](//p.3ti.site/1725438572.avif)

Lägg till konverteringsregeln som visas nedan, sätt den först (den första har lägst prioritet):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` välj dynamiskt och ändra `your_bucketname` i `concat("/file/your_bucketname",http.request.uri.path)` till ditt hinknamn.

Dessutom, i `cloudflare` konverteringsregeln ovan, ändras `index.html` till `file/your_bucketname/index.html` och andra konfigurationer förblir desamma.

![](//p.3ti.site/1725441384.avif)