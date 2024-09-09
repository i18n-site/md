# Sökmotoroptimering (SEO)

## Principer

`i18n.site` använder en enklasidesarkitektur utan omladdning. För att underlätta sökindexering genereras en separat statisk sida och `sitemap.xml` för sökrobotar.

När `User-Agent` för en åtkomstbegäran identifieras som en sökrobot, omdirigeras förfrågan till en statisk sida via `302`.

På statiska sidor används `link`-taggar för att specificera länkar till olika språkversioner av sidan, till exempel:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Konfiguration av objektlagring för uppladdning av statiska filer

Statiska filer kan genereras lokalt, men det är vanligare att ladda upp dem till objektlagring.

Exempel på konfigurationsfil från `.i18n/htm/ol.yml` i ett demoprojekt

```yml
host:
seo: true
out:
  - s3
v: //unpkg.com/i18n.site
x: 18x
importmap:
  i/: //unpkg.com/@i18n.site/
```

Ändra först `host:`-värdet till ditt domännamn, till exempel `i18n.site`.

Redigera sedan `~/.config/i18n.site.yml` och lägg till följande konfiguration:

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

I konfigurationen, ändra `i18n.site` till `host:`-värdet i `.i18n/htm/ol.yml`. Under `s3` kan flera objektlager konfigureras, och `region`-fältet är valfritt (många objektlager kräver inte denna inställning).

Kör sedan `i18n.site -n` för att återpublicera projektet.

Om du har ändrat `~/.config/i18n.site.yml` och vill ladda upp igen, använd följande kommando i projektets rotkatalog för att rensa uppladdningscachen:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Cloudflare-konfiguration

Domänen är värd hos [cloudflare](//www.cloudflare.com).

### Överföringsregler

Lägg till följande överföringsregler:

![](//p.3ti.site/1725436822.avif)

Regelkoden är som följer, ändra "i18n.site" i koden till ditt domännamn:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Cachereglar

Lägg till följande cachereglar:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Omdirigeringsregler

Ställ in följande omdirigeringsregler, ändra "i18n.site" i koden till ditt domännamn:

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

`URL redirect` välj dynamisk omdirigering, ändra `/en` i omdirigeringsvägen `concat("/en",http.request.uri.path,".htm")` till det standardspråk du vill att sökmotorerna ska indexera.

## Baidu Smart Cloud-konfiguration

Om du behöver tillhandahålla tjänster till det kinesiska fastlandet kan du använda [Baidu Smart Cloud](//cloud.baidu.com).

Data laddas upp till Baidu Object Storage och binds till Baidu Content Distribution Network.

Skapa sedan ett skript i [EdgeJS Edge Service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) enligt följande:

```js
var uri=r.uri,p=uri.lastIndexOf('.');

if(
  p<0 || !/html?|css|rss|avif|md|ico|gz|js|json|png|svg|txt|webmanifest|xml/.test(uri.slice(p+1))
){
  const ua = r.headersIn['User-Agent'].toLowerCase();
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(302,(/baidu|yisou|sogou|360|byte/.test(ua)?'/zh':'/en')+r.uri+'.htm')
    return
  }
  r.uri = '/index.html'
}

r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})

})
```

Klicka på `Debug` och sedan på Publicera till hela nätverket.

![](//p.3ti.site/1725437754.avif)

## Avancerad användning: Distribuera trafik baserat på geografisk analys

Om du vill tillhandahålla tjänster i Kina och samtidigt utnyttja `cloudflare`'s gratis internationella trafik, kan du använda `DNS` med regional upplösning.

Till exempel erbjuder [Huawei Cloud DNS](https://www.huaweicloud.com) gratis regional analys. Genom detta kan kinesisk fastlandstrafik dirigeras till Baidu Smart Cloud, medan internationell trafik går via `cloudflare`.

`cloudflare`-konfigurationen är fylld med fallgropar. Här är några viktiga punkter att tänka på:

### Hur använder man `cloudflare` om domänen är värd hos en annan `DNS`?

Bind först ett valfritt domännamn till `cloudflare`, och använd sedan `SSL/TLS` → Anpassat domännamn för att koppla huvuddomännamnet till detta domännamn.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` kan inte nås via ett anpassat domännamn

Eftersom `cloudflare`'s inbyggda objektlagring `R2` inte kan nås via ett anpassat domännamn, måste en tredjeparts objektlagring användas för att lagra statiska filer.

Här använder vi [backblaze.com](https://www.backblaze.com) som exempel för att visa hur man binder en tredjeparts objektlagring till `cloudflare`.

Skapa en hink på `backblaze.com`, ladda upp en valfri fil, klicka för att bläddra i filen och få `Friendly URL`-domänen, till exempel `f003.backblazeb2.com`.

![](//p.3ti.site/1725440783.avif)

Ändra domännamnet från `CNAME` till `f003.backblazeb2.com` i `cloudflare` och aktivera proxy.

![](//p.3ti.site/1725440896.avif)

Ändra `cloudflare`'s `SSL` → Krypteringsläge till `Full`

![](//p.3ti.site/1725438572.avif)

Lägg till följande konverteringsregel som första regel (den första har lägst prioritet):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` välj dynamiskt och ändra `your_bucketname` i `concat("/file/your_bucketname",http.request.uri.path)` till ditt hinknamn.

Dessutom, i `cloudflare`-konverteringsregeln ovan, ändras `index.html` till `file/your_bucketname/index.html`, medan andra inställningar förblir oförändrade.

![](//p.3ti.site/1725441384.avif)