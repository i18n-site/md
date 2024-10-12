# Hakukoneoptimointi (SEO)

## Periaatteet

`i18n.site` käyttää päivityksettömää yksisivuarKKitehtuuria hakukoneiden indeksoinnin helpottamiseksi, ja se luo erillisen staattisen sivun sekä `sitemap.xml`-tiedoston hakurobottien hakemista varten.

Kun hakukoneen indeksointirobotti käyttää pääsypyynnön `User-Agent`, pyyntö ohjataan staattiselle sivulle `302`-kautta.

Staattisella sivulla käytetään `link`-elementtiä eri kieliversioiden linkkien osoittamiseen, esimerkiksi:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Määritä staattisten tiedostojen tallennusobjektin tallennustila

Staattiset tiedostot voidaan luoda paikallisesti, mutta yleisempi käytäntö on ladata ne objektitallennustilaan.

Otetaan esimerkkinä esittelyprojektin `.i18n/htm/ol.yml`-määritystiedosto

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

Muokkaa ensin yllä olevaa `host:`-arvoa verkkotunnuksesi mukaan, esimerkiksi `i18n.site`.

Sitten muokkaa tiedostoa `~/.config/i18n.site.yml` ja lisää seuraava konfiguraatio:

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

Konfiguroinnissa `i18n.site` muutetaan `.i18n/htm/ol.yml`-tiedoston `host:`-arvon mukaiseksi, ja `s3`-kohdalle voidaan määrittää useita objektitallennuksia, `region`-kenttä on valinnainen (monien objektitallennusten ei tarvitse asettaa tätä kenttää).

Suorita sitten `i18n.site -n` ja julkaise projekti uudelleen.

Jos olet muokannut `~/.config/i18n.site.yml`-tiedostoa ja haluat ladata uudelleen, käytä seuraavaa komentoa projektin juurikansiossa tyhjentääksesi lähetysvälimuistin:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Cloudflare-konfigurointi

Verkkotunnus isännöi [cloudflare](//www.cloudflare.com).

### Muunnossäännöt

Lisää seuraava muunnossääntö:

![](//p.3ti.site/1725436822.avif)

Sääntökoodi on seuraava, muokkaa "i18n.site" omalla verkkotunnuksellasi:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Välimuistisäännöt

Lisää seuraavat välimuistisäännöt:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Uudelleenohjaussäännöt

Aseta seuraavat uudelleenohjaussäännöt, muuta "i18n.site" omalla verkkotunnuksellasi:

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

Valitse `URL redirect` dynaamiseksi ja muuta `/en` uudelleenohjauspolussa `concat("/en", http.request.uri.path, ".htm")` haluamallasi hakukoneiden indeksoiman oletuskieleksi.

## Baidu Intelligent Cloud -konfigurointi

Jos tarvitset palveluita Manner-Kiinassa, voit käyttää [Baidu Smart Cloud](//cloud.baidu.com).

Tiedot ladataan Baidu Object Storageen ja sidotaan Baidu Content Distribution Networkiin.

Luo sitten [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) -skripti seuraavasti:

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

Napsauta `Debug` ja napsauta sitten Julkaise koko verkossa.

![](//p.3ti.site/1725437754.avif)

## Edistynyt käyttö: Liikenteen jakaminen maantieteellisen analyysin perusteella

Jos haluat tarjota palveluita sekä Manner-Kiinassa että käyttää `cloudflare`n ilmaista kansainvälistä liikennettä, voit käyttää maantieteellisen analyysin tarjoavaa `DNS`.

Esimerkiksi [Huawei Cloud DNS](https://www.huaweicloud.com) tarjoaa ilmaisen maantieteellisen analyysin, jonka avulla voit ohjata Manner-Kiinan liikenteen Baidu Smart Cloudiin ja kansainvälisen liikenteen `cloudflare`en.

`cloudflare`n asetuksissa on useita sudenkuoppia. Tässä on muutamia huomioitavia asioita:

### Jos verkkotunnus isännöi muualla `DNS`:ssä, miten käyttää `cloudflare`ia?

Sido ensin mikä tahansa verkkotunnus `cloudflare`iin ja liitä pääverkkotunnus tähän verkkotunnukseen käyttämällä `SSL/TLS` → mukautettu verkkotunnus.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` ei voi käyttää mukautetun verkkotunnuksen kautta

Koska `cloudflare`n oma objektitallennus `R2` ei tue mukautettujen verkkotunnusten käyttöä, staattiset tiedostot on tallennettava kolmannen osapuolen objektitallennustilaan.

Otetaan esimerkkinä [backblaze.com](https://www.backblaze.com) ja näytetään, miten sitoa kolmannen osapuolen objektitallennus `cloudflare`iin.

Luo `backblaze.com`-sivustolle tallennustila, lataa mikä tahansa tiedosto, napsauta selataksesi tiedostoa ja hanki `Friendly URL`-verkkotunnus, joka on tässä `f003.backblazeb2.com`.

![](//p.3ti.site/1725440783.avif)

Muuta verkkotunnus `CNAME`-tunnukseksi `f003.backblazeb2.com` kohdassa `cloudflare` ja ota välityspalvelin käyttöön.

![](//p.3ti.site/1725440896.avif)

Muokkaa `cloudflare`n `SSL`-salaustila `Full`-tilaksi

![](//p.3ti.site/1725438572.avif)

Lisää seuraava muunnossääntö ja aseta se ensimmäiseksi (ensimmäisellä on alhaisin prioriteetti):

![](//p.3ti.site/1725443232.avif)

Valitse `Rewrite to` dynaamiseksi ja muokkaa `your_bucketname` `concat("/file/your_bucketname", http.request.uri.path)`-polussa.

Lisäksi muuta yllä olevassa `cloudflare`n muunnossäännössä `index.html` `file/your_bucketname/index.html`-muotoon ja muut asetukset pysyvät ennallaan.

![](//p.3ti.site/1725441384.avif)