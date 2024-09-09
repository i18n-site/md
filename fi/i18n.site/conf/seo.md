# Hakukoneoptimointi (SEO)

## Periaatteet

`i18n.site` käyttää yksisivurakennetta, joka ei vaadi päivitystä, ja luo hakukoneiden indeksointia varten erillisiä staattisia sivuja ja `sitemap.xml`-tiedoston.

Kun pyynnön `User-Agent` on hakukoneen indeksointirobotti, pyyntö ohjataan staattiselle sivulle `302`-uudelleenohjauksella.

Staattisella sivulla käytetään `link`-elementtiä eri kieliversioiden linkkien merkitsemiseen, esimerkiksi:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Konfiguroi staattisten tiedostojen tallennusobjekti

Staattiset tiedostot voidaan luoda paikallisesti, mutta yleisempi käytäntö on ladata ne objektitallennustilaan.

Ottakaamme esimerkiksi esittelyprojektin `.i18n/htm/ol.yml`-konfiguraatiotiedoston

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

Muokkaa ensin `host:`-arvoa verkkotunnuksesi mukaan, esimerkiksi `i18n.site`.

Muokkaa sitten `~/.config/i18n.site.yml`-tiedostoa ja lisää seuraava konfiguraatio:

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

Konfiguraatiossa muuta `i18n.site` `host:`-arvon mukaiseksi `.i18n/htm/ol.yml`-tiedostossa, ja `s3`-alaan voidaan määrittää useita objektitallennuksia, `region`-kenttä on valinnainen (monet objektitallennukset eivät vaadi tätä kenttää).

Suorita sitten `i18n.site -n` ja julkaise projekti uudelleen.

Jos olet muokannut `~/.config/i18n.site.yml`-tiedostoa ja haluat ladata uudelleen, käytä seuraavaa komentoa projektin juurikansiossa tyhjentääksesi lähetysvälimuistin:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Cloudflare-konfiguraatio

Verkkotunnus isännöi [cloudflare](//www.cloudflare.com).

### Muunnossäännöt

Lisää seuraavaan kuvan mukaiset muunnossäännöt:

![](//p.3ti.site/1725436822.avif)

Sääntökoodi on seuraava, muokkaa "i18n.site" omaksi verkkotunnuksesi:

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

Aseta seuraavat uudelleenohjaussäännöt, muuta "i18n.site" omaksi verkkotunnuksesi:

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

Valitse `URL redirect` dynaamiseksi ja muuta `/en` uudelleenohjauspolussa `concat("/en", http.request.uri.path, ".htm")` haluamasi hakukoneiden indeksoiman oletuskielen mukaiseksi.

## Baidu Intelligent Cloud -konfiguraatio

Jos tarvitset palveluita Manner-Kiinassa, voit käyttää [Baidu Intelligent Cloudia](//cloud.baidu.com).

Tiedot ladataan Baidu Object Storageen ja sidotaan Baidu Content Distribution Networkiin.

Luo sitten seuraava skripti [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) -palvelussa:

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

Napsauta `Debug` ja napsauta sitten "Julkaise koko verkossa".

![](//p.3ti.site/1725437754.avif)

## Edistynyt käyttö: Alueellisen analyysin perusteella liikenteen jakaminen

Jos haluat tarjota palveluita Manner-Kiinassa ja haluat myös `cloudflare` ilmaista kansainvälistä liikennettä, voit käyttää `DNS` alueellisella resoluutiolla.

Esimerkiksi [Huawei Cloud DNS](https://www.huaweicloud.com) tarjoaa ilmaisen alueellisen analyysin, jonka avulla Manner-Kiinan liikenne voi kulkea Baidu Smart Cloudin kautta, ja kansainvälinen liikenne `cloudflare` kautta.

`cloudflare`-asetuksissa on monia sudenkuoppia. Tässä muutamia huomioitavia seikkoja:

### Verkkotunnus isännöidään muulla `DNS`:llä, kuinka käyttää `cloudflare`ä?

Sido ensin mielivaltainen verkkotunnus `cloudflare`-palveluun ja liitä pääverkkotunnus tähän verkkotunnukseen `SSL/TLS` → "Mukautettu verkkotunnus" -välilehdellä.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` ei voi käytettäessä mukautettua verkkotunnusta

Koska `cloudflare` sisältää oman objektitallennuksen `R2`, jota ei voi käyttää mukautetulla verkkotunnuksella, tarvitaan kolmannen osapuolen objektitallennusta staattisten tiedostojen sijoittamiseen.

Tässä esimerkkinä [backblaze.com](https://www.backblaze.com), kuinka sidota kolmannen osapuolen objektitallennuksen `cloudflare`-palveluun.

Luo `backblaze.com`-palvelussa tallennustila, lataa mikä tahansa tiedosto, napsauta selataksesi tiedostoa ja hanki `Friendly URL`-verkkotunnus, esimerkiksi `f003.backblazeb2.com`.

![](//p.3ti.site/1725440783.avif)

Muuta verkkotunnus `CNAME`-arvoksi `f003.backblazeb2.com` `cloudflare`-palvelussa ja ota välityspalvelin käyttöön.

![](//p.3ti.site/1725440896.avif)

Muokkaa `cloudflare` → `SSL`-asetuksia ja valitse `Full`-tila

![](//p.3ti.site/1725438572.avif)

Lisää seuraava muunnossääntö ja aseta se ensimmäiseksi (ensimmäisellä on alhaisin prioriteetti):

![](//p.3ti.site/1725443232.avif)

Valitse `Rewrite to` dynaamiseksi ja muokkaa `your_bucketname` `concat("/file/your_bucketname", http.request.uri.path)`-polussa omaksi säilösi.

Lisäksi yllä olevassa `cloudflare`-muunnossäännössä `index.html` muutetaan `file/your_bucketname/index.html`-muodoksi, ja muut kokoonpanot pysyvät samoina.

![](//p.3ti.site/1725441384.avif)