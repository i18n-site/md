# Søkemotoroptimalisering (SEO)

## Prinsipp

`i18n.site` bruker en en-side-applikasjonsarkitektur uten oppdateringer. For å gjøre det enklere for søkemotorer å indeksere, genereres separate statiske sider og `sitemap.xml` for爬虫 å samle inn.

Når `User-Agent` for en tilgangsforespørsel er en søkemotorrobot, vil forespørselen bli omdirigert til en statisk side via `302`.

På statiske sider brukes `link`-taggen for å angi lenker til forskjellige språkversjoner av siden, for eksempel:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Konfigurasjon for opplasting av statiske filer til objektlagring

Statiske filer kan genereres lokalt, men det er mer vanlig å laste dem opp til objektlagring.

Tar `.i18n/htm/ol.yml` konfigurasjonsfilen i demonstrasjonsprosjektet som et eksempel

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

Rediger først `host:`-verdien øverst til ditt domenenavn, for eksempel `i18n.site`.

Deretter rediger `~/.config/i18n.site.yml` og legg til følgende konfigurasjon:

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

I konfigurasjonen, endre `i18n.site` til `host:`-verdien i `.i18n/htm/ol.yml`, og under `s3` kan du konfigurere flere objektlagringsenheter. Feltet `region` er valgfritt (mange objektlagringsenheter trenger ikke dette feltet).

Kjør deretter `i18n.site -n` for å publisere prosjektet på nytt.

Hvis du har endret `~/.config/i18n.site.yml` og ønsker å laste opp på nytt, bruk følgende kommando i prosjektets rotmappe for å rydde opp i opplastingsbufferen:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Cloudflare-konfigurasjon

Domenenavn er vert for [cloudflare](//www.cloudflare.com).

### Overføringsregler

Legg til overføringsregler som vist i figuren:

![](//p.3ti.site/1725436822.avif)

Regelkoden er som følger, endre "i18n.site" i koden til ditt domenenavn:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Lag cache-regler som følger:

Legg til cache-regler som vist:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Sett opp omdirigeringsregler som følger:

Angi omdirigeringsregler som vist, endre "i18n.site" i koden til ditt domenenavn

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

`URL redirect` velg dynamisk omdirigering, og endre `/en` i omdirigeringsbanen `concat("/en",http.request.uri.path,".htm")` til standardspråket du vil at søkemotorer skal indeksere.

## Baidu Intelligent Cloud-konfigurasjon

Hvis du trenger å tilby tjenester til Kina, kan du bruke [Baidu Intelligent Cloud](//cloud.baidu.com).

Data lastes opp til Baidu Object Storage og bindes til Baidu Content Distribution Network.

Deretter oppretter du et skript i [EdgeJS-tjenesten](//console.bce.baidu.com/cdn/#/cdn/ejs/list) som følger:

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

Klikk `Debug`, og klikk deretter på "Publiser til hele nettverket".

![](//p.3ti.site/1725437754.avif)

## Avansert bruk: Distribusjon av trafikk basert på regional analyse

Hvis du ønsker å tilby tjenester i fastlands-Kina og også ønsker `cloudflare` gratis internasjonal trafikk, kan du bruke `DNS` med regional oppløsning.

For eksempel tilbyr [Huawei Cloud DNS](https://www.huaweicloud.com) gratis regional oppløsning, som gjør det mulig for kinesisk fastlandstrafikk å gå gjennom Baidu Smart Cloud, mens internasjonal trafikk går gjennom `cloudflare`.

`cloudflare`'s konfigurasjon har mange fallgruver. Her er noen viktige punkter å merke seg:

### Hvordan bruke `cloudflare` når domenenavnet er vert for andre `DNS`:

Bind først et vilkårlig domenenavn til `cloudflare`, og bruk deretter `SSL/TLS` → tilpasset domenenavn for å koble hoveddomenet til dette domenenavnet.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` kan ikke nås via et tilpasset domenenavn

Da `cloudflare`'s innebygde objektlagring `R2` ikke kan nås med et tilpasset domenenavn, må en tredjeparts objektlagring brukes til å plassere statiske filer.

La oss ta [backblaze.com](https://www.backblaze.com) som et eksempel for å vise hvordan du binder en tredjeparts objektlagring til `cloudflare`.

Opprett en bøtte på `backblaze.com`, last opp en fil, klikk for å bla gjennom filen, og få `Friendly URL`-domenet, som er `f003.backblazeb2.com` her.

![](//p.3ti.site/1725440783.avif)

Rediger domenenavnet fra `CNAME` til `f003.backblazeb2.com` i `cloudflare` og aktiver proxyen.

![](//p.3ti.site/1725440896.avif)

Endre `cloudflare`'s `SSL` → krypteringsmodus til `Full`

![](//p.3ti.site/1725438572.avif)

Legg til en konverteringsregel som vist i figuren, plasser den først (den første har lavest prioritet)

![](//p.3ti.site/1725443232.avif)

`Rewrite to` velg dynamisk, og endre `your_bucketname` i `concat("/file/your_bucketname",http.request.uri.path)` til ditt bøttenavn.

I tillegg, i `cloudflare`'s omdirigeringsregler, endre `index.html` til `file/your_bucketname/index.html`, og behold de andre konfigurasjonene som de er.

![](//p.3ti.site/1725441384.avif)