# Søkemotoroptimalisering (SEO)

## Prinsipp

`i18n.site` bruker en en-sides applikasjonsarkitektur uten oppdateringer. For å gjøre det lettere for søkemotorer å indeksere, genereres en separat statisk side og `sitemap.xml`.

Når `User-Agent` for en forespørsel er en søkemotorrobot, blir forespørselen omdirigert til en statisk side via `302`.

På statiske sider brukes `link`-taggen for å angi lenker til forskjellige språkversjoner av siden, for eksempel:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Konfigurasjon for opplasting av statiske filer til objektlagring

Statiske filer kan genereres lokalt, men det er mer vanlig å laste dem opp til objektlagring.

Ta `.i18n/htm/ol.yml` konfigurasjonsfilen i demoprosjektet som et eksempel

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

Endre først `host:` til ditt domenenavn, for eksempel `i18n.site`.

Rediger deretter `~/.config/i18n.site.yml` og legg til følgende konfigurasjon:

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

I konfigurasjonen, vennligst endre `i18n.site` til verdien for `host:` i `.i18n/htm/ol.yml`, flere objektlagre kan konfigureres under `s3`, og `region`-feltet er valgfritt (mange objektlagre trenger ikke å sette dette feltet).

Kjør deretter `i18n.site -n` for å publisere prosjektet på nytt.

Hvis du har endret `~/.config/i18n.site.yml` og ønsker å laste opp på nytt, bruk følgende kommando i prosjektets rotkatalog for å tømme opplastingsbufferen:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Cloudflare-konfigurasjon

Domenenavn er vert for [cloudflare](//www.cloudflare.com).

### Overføringsregler

Legg til følgende overføringsregler:

![](//p.3ti.site/1725436822.avif)

Regelkoden er som følger, endre "i18n.site" til ditt domenenavn:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Lag cache-regler som følger:

Legg til følgende cache-regler:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Sett opp omdirigeringsregler som følger:

Angi omdirigeringsregler som følger, endre "i18n.site" til ditt domenenavn:

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

Velg `URL redirect`, og endre `/en` i omdirigeringsbanen `concat("/en", http.request.uri.path, ".htm")` til standardspråket du vil at søkemotorer skal indeksere.

## Baidu Intelligent Cloud-konfigurasjon

Hvis du trenger å tilby tjenester til Kina, kan du bruke [Baidu Intelligent Cloud](//cloud.baidu.com).

Data lastes opp til Baidu Object Storage og bindes til Baidu Content Distribution Network.

Opprett deretter følgende skript i [EdgeJS-tjenesten](//console.bce.baidu.com/cdn/#/cdn/ejs/list):

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

Klikk `Debug` , og klikk deretter Publiser til hele nettverket.

![](//p.3ti.site/1725437754.avif)

## Avansert bruk: Distribusjon av trafikk basert på regional analyse

Hvis du ønsker å tilby tjenester i Kina og samtidig dra nytte av `cloudflare`'s gratis internasjonal trafikk, kan du bruke `DNS` med regional oppløsning.

For eksempel tilbyr [Huawei Cloud DNS](https://www.huaweicloud.com) gratis regional oppløsning, som kan brukes til å lede kinesisk fastlandstrafikk gjennom Baidu Smart Cloud og internasjonal trafikk gjennom `cloudflare`.

`cloudflare`-konfigurasjonen har mange fallgruver. Her er noen viktige punkter å merke seg:

### Hvordan bruke `cloudflare` når domenenavnet er vert for andre `DNS`:

Bind først et vilkårlig domenenavn til `cloudflare`, og bruk deretter `SSL/TLS` → Tilpasset domenenavn for å knytte hoveddomenenavnet til dette domenenavnet.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` kan ikke nås via et tilpasset domenenavn

Dette skyldes at `cloudflare`'s innebygde objektlagring `R2` ikke kan nås med et tilpasset domenenavn, så en tredjeparts objektlagring må brukes til å plassere statiske filer.

La oss ta [backblaze.com](https://www.backblaze.com) som et eksempel for å vise hvordan du kan binde en tredjeparts objektlagring til `cloudflare`.

Opprett en bøtte på `backblaze.com`, last opp en fil, klikk for å bla gjennom filen, og få `Friendly URL`-domenet, som er `f003.backblazeb2.com` her.

![](//p.3ti.site/1725440783.avif)

Rediger domenenavnet til `CNAME` til `f003.backblazeb2.com` i `cloudflare` og aktiver proxyen.

![](//p.3ti.site/1725440896.avif)

Endre `Cloudflare`'s `SSL` → Krypteringsmodus til `Full`

![](//p.3ti.site/1725438572.avif)

Legg til følgende konverteringsregel, plasser den først (den første har lavest prioritet):

![](//p.3ti.site/1725443232.avif)

Velg `Rewrite to` som dynamisk, og endre `your_bucketname` i `concat("/file/your_bucketname", http.request.uri.path)` til ditt bøttenavn.

I tillegg, i `cloudflare`-konverteringsregelen ovenfor, endres `index.html` til `file/your_bucketname/index.html`, og andre konfigurasjoner forblir uendret.

![](//p.3ti.site/1725441384.avif)