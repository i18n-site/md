# Søgemaskineoptimering (SEO)

## Principper

`i18n.site` anvender en single-page application-arkitektur uden genindlæsning. For at lette søgeindeksering genereres separate statiske sider og en `sitemap.xml`, som crawlere kan gennemgå.

Når `User-Agent` for en adgangsanmodning er en søgemaskinecrawler, vil anmodningen blive omdirigeret til en statisk side via `302`.

På statiske sider bruges `link`-tagget til at angive links til forskellige sprogversioner af denne side, f.eks.:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Konfiguration af upload af statiske filer til objektlager

Statiske filer kan genereres lokalt, men det er mere almindeligt at uploade dem til et objektlager.

Tage `.i18n/htm/ol.yml` konfigurationsfilen i demoprojektet som et eksempel

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

Rediger først `host:` værdien ovenfor til dit domænenavn, f.eks. `i18n.site`.

Rediger derefter `~/.config/i18n.site.yml` og tilføj følgende konfiguration:

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

I konfigurationen skal `i18n.site` ændres til `host:` værdien i `.i18n/htm/ol.yml`. Under `s3` kan flere objektlagre konfigureres, og `region`-feltet er valgfrit (mange objektlagre kræver ikke denne indstilling).

Kør derefter `i18n.site -n` for at genudgive projektet.

Hvis du har ændret `~/.config/i18n.site.yml` og ønsker at uploade igen, skal du i projektets rodkatalog bruge følgende kommando til at rydde upload-cachen:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Cloudflare-konfiguration

Domænenavnet er hostet hos [cloudflare](//www.cloudflare.com).

### OMDannelser

Tilføj følgende OMDannelser som vist i figuren:

![](//p.3ti.site/1725436822.avif)

Regelkoden er som følger, ændr venligst "i18n.site" til dit domænenavn:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Cache-regler

Tilføj følgende cache-regler:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Omdirigeringsregler

Indstil følgende omdirigeringsregler, ændr venligst "i18n.site" til dit domænenavn:

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

`URL redirect` vælg dynamisk omdirigering, ændr venligst `/en` i omdirigeringsstien `concat("/en",http.request.uri.path,".htm")` til standard.sprog, som søgemaskinerne skal indeksere.

## Baidu Intelligent Cloud-konfiguration

Hvis du skal levere tjenester til det kinesiske fastland, kan du bruge [Baidu Intelligent Cloud](//cloud.baidu.com).

Dataene uploades til Baidu Object Storage og bindes til Baidu Content Distribution Network.

Opret derefter følgende script i [EdgeJS Edge Service](//console.bce.baidu.com/cdn/#/cdn/ejs/list):

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

Klik på `Debug`, og klik derefter på "Udgiv til hele netværket".

![](//p.3ti.site/1725437754.avif)

## Avanceret brug: Fordeling af trafik baseret på regional analyse

Hvis du både vil levere tjenester til det kinesiske fastland og udnytte `cloudflare`'s gratis internationale trafik, kan du bruge en `DNS` med regional analyse.

For eksempel tilbyder [Huawei Cloud DNS](https://www.huaweicloud.com) gratis regional analyse, som kan bruges til at sende kinesisk trafik gennem Baidu Intelligent Cloud og international trafik gennem `cloudflare`.

Der er flere faldgruber i konfigurationen af `cloudflare`. Her er nogle punkter, du skal være opmærksom på:

### Hvordan bruger man `cloudflare`, når domænenavnet er hostet hos en anden `DNS`?

Bind først et vilkårligt domænenavn til `cloudflare`, og brug derefter `SSL/TLS` → brugerdefineret domænenavn til at knytte hoveddomænenavnet til dette domænenavn.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` kan ikke tilgås via et brugerdefineret domænenavn

Fordi `Cloudflare`'s indbyggede objektlager `R2` ikke understøtter tilpasning af domænenavne, er det nødvendigt at bruge en tredjeparts objektlager til at placere statiske filer.

Her tager vi [backblaze.com](https://www.backblaze.com) som et eksempel for at demonstrere, hvordan man binder tredjepartsobjektlager til `cloudflare`.

Opret en bøsse ved `backblaze.com`, upload en fil, klik for at gennemse filen og få `Friendly URL`-domænenavnet, som er `f003.backblazeb2.com` her.

![](//p.3ti.site/1725440783.avif)

Brug `CNAME` til at omdirigere domænenavnet til `f003.backblazeb2.com` ved `cloudflare` og aktiver proxyen.

![](//p.3ti.site/1725440896.avif)

Rediger `cloudflare`'s `SSL` → krypteringstilstand og sæt den til `Full`

![](//p.3ti.site/1725438572.avif)

Tilføj følgende konverteringsregel som vist i figuren, og sæt den først (den første har laveste prioritet):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` vælg dynamisk og ændr `your_bucketname` i `concat("/file/your_bucketname",http.request.uri.path)` til dit bucket-navn.

Derudover skal `index.html` i `cloudflare`'s konverteringsregel ændres til `file/your_bucketname/index.html`, og andre indstillinger forbliver uændrede.

![](//p.3ti.site/1725441384.avif)