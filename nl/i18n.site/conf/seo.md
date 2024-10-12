# Zoekmachineoptimalisatie (SEO)

## Prinicipes

`i18n.site` maakt gebruik van een enkele pagina-architectuur zonder vernieuwing, en genereert afzonderlijke statische pagina's en een `sitemap.xml` om zoekmachinecrawlers te faciliteren.

Wanneer de `User-Agent` van een verzoek een zoekmachinecrawler is, wordt het verzoek via een `302`-omleiding naar een statische pagina doorgestuurd.

Op statische pagina's worden `link`-tags gebruikt om links naar verschillende taalversies van de pagina weer te geven, zoals:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Configureer de objectopslag voor het uploaden van statische bestanden

Statische bestanden kunnen lokaal gegenereerd worden, maar het is gebruikelijker ze naar een objectopslag te uploaden.

Neem het `.i18n/htm/ol.yml` configuratiebestand in het demoproject als voorbeeld

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

Wijzig eerst de waarde van `host:` hierboven naar uw domeinnaam, bijvoorbeeld `i18n.site`.

Bewerk vervolgens `~/.config/i18n.site.yml` en voeg de volgende configuratie toe:

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

In de configuratie, wijzig `i18n.site` naar de `host:`-waarde in `.i18n/htm/ol.yml`. Onder `s3` kunnen meerdere objectopslaglocaties worden geconfigureerd, en het `region`-veld is optioneel (veel objectopslaglocaties vereisen dit veld niet).

Voer vervolgens `i18n.site -n` uit om het project opnieuw te publiceren.

Als u `~/.config/i18n.site.yml` heeft aangepast en opnieuw wilt uploaden, gebruik dan de volgende opdracht in de hoofdmap van het project om de uploadcache te wissen:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Cloudflare-configuratie

Domeinnaam gehost bij [cloudflare](//www.cloudflare.com).

### Conversierules

Voeg de conversierules toe zoals in de afbeelding hieronder:

![](//p.3ti.site/1725436822.avif)

De regelcode is als volgt. Wijzig "i18n.site" in uw domeinnaam:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Cacheregels

Voeg cacheregels toe zoals hieronder:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Omleidingsregels

Stel de omleidingsregels in zoals hieronder. Wijzig "i18n.site" in uw domeinnaam:

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

Selecteer bij `URL redirect` dynamische omleiding en wijzig `/en` in het omleidingspad `concat("/en",http.request.uri.path,".htm")` naar de standaardtaal die zoekmachines moeten indexeren.

## Configuratie van Baidu Smart Cloud

Als u diensten wilt leveren aan China, kunt u [Baidu Smart Cloud](//cloud.baidu.com) gebruiken.

Gegevens uploaden naar Baidu Object Storage en koppelen aan het Baidu Content Distribution Network.

Maak vervolgens het script in [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) zoals hieronder:

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

Klik op `Debug` en vervolgens op Publiceren naar het hele netwerk.

![](//p.3ti.site/1725437754.avif)

## Geavanceerd gebruik: Verkeer verdelen op basis van geografische locatie

Als u zowel diensten wilt leveren aan China als gebruik wilt maken van het gratis internationale verkeer van `cloudflare`, kunt u een `DNS` met geografische locatie gebruiken.

[Huawei Cloud DNS](https://www.huaweicloud.com) biedt bijvoorbeeld gratis geografische locatie, waardoor verkeer uit China via Baidu Smart Cloud kan gaan en internationaal verkeer via `cloudflare`.

Er zijn veel valkuilen bij het configureren van `cloudflare`. Hier zijn enkele aandachtspunten:

### Domeinnaam gehost bij een andere `DNS`, hoe `cloudflare` te gebruiken?

Bind eerst een willekeurige domeinnaam aan `cloudflare` en gebruik vervolgens `SSL/TLS` → Aangepaste domeinnaam om de hoofddomeinnaam aan deze domeinnaam te koppelen.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` is niet toegankelijk via een aangepaste domeinnaam

Omdat de `cloudflare` objectopslag `R2` niet toegankelijk is via een aangepaste domeinnaam, moet u een objectopslag van derden gebruiken om statische bestanden op te slaan.

Hier nemen we [backblaze.com](https://www.backblaze.com) als voorbeeld om te demonstreren hoe u een objectopslag van derden kunt binden aan `cloudflare`.

Maak een bucket aan op `backblaze.com`, upload een willekeurig bestand, klik om door het bestand te bladeren en verkrijg de domeinnaam `Friendly URL`, hier `f003.backblazeb2.com`.

![](//p.3ti.site/1725440783.avif)

Wijzig de domeinnaam van `CNAME` naar `f003.backblazeb2.com` op `cloudflare` en schakel de proxy in.

![](//p.3ti.site/1725440896.avif)

Wijzig `cloudflare` van `SSL` → Encryptiemodus naar `Full`

![](//p.3ti.site/1725438572.avif)

Voeg de conversieregel toe zoals in de afbeelding hieronder, plaats deze op de eerste positie (de eerste heeft de laagste prioriteit):

![](//p.3ti.site/1725443232.avif)

Selecteer bij `Rewrite to` dynamisch en wijzig `your_bucketname` in `concat("/file/your_bucketname",http.request.uri.path)` naar uw bucketnaam.

Bovendien wordt in de bovenstaande `cloudflare` conversieregel `index.html` gewijzigd in `file/your_bucketname/index.html`, andere configuraties blijven ongewijzigd.

![](//p.3ti.site/1725441384.avif)