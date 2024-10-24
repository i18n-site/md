# Hakukoneoptimointi (SEO)

## Periaatteet

`i18n.site` käyttää pivityksettä vaatimatonta yksisivuista arkkitehtuuria hakukoneiden indeksoinnin helpottamiseksi, ja se luo erillisen staattisen sivun sekä `sitemap.xml`-tiedoston hakurobottien käyttöä varten.

Kun hakukoneen indeksointirobotti käyttää pääsypyynnön `User-Agent`, pyyntö ohjataan staattiselle sivulle `302` kautta.

Staattisella sivulla käytetään `link`-elementtiä eri kieliversioiden linkkien merkitsemiseen, esimerkiksi:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Konfiguroi staattisten tiedostojen tallennusobjekti

Staattiset tiedostot voidaan luoda paikallisesti, mutta yleisempi käytäntö on ladata ne objektitallennustilaan.

Otetaan esimerkiksi demo-projektin `.i18n/htm/ol.yml`-määritystiedosto

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

Muokkaa ensin yllä olevaa `host:`-arvoa verkkotunnukseksesi, esimerkiksi `i18n.site`.

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

Kokoonpanossa muuta `i18n.site` `host:`-arvoksi `.i18n/htm/ol.yml`-tiedostossa, ja `s3`-kohdassa voit määrittää useita objektivarastoja. `region`-kenttä on valinnainen (monet objektivarastot eivät vaadi tätä kenttää).

Suorita sitten `i18n.site -n` projektin uudelleenjulkaisemiseksi.

Jos olet muokannut `~/.config/i18n.site.yml`-tiedostoa ja haluatladattaa uudelleen, käytä projektin juurikansiossa seuraavaa komentoa upload-välimuistin tyhjentämiseksi:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Cloudflare-konfiguraatio

Verkkotunnus isännöi [cloudflare](//www.cloudflare.com).

### Muunnossäännöt

Lisää seuraavat muunnossäännöt:

![](//p.3ti.site/1725436822.avif)

Sääntökoodi on seuraava, muuta "i18n.site" omalla verkkotunnuksellasi:

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

`URL redirect`-valinnassa valitse dynaaminen uudelleenohjaus ja muuta uudelleenohjauspolun `concat("/en",http.request.uri.path,".htm")` `/en`-osaa haluamaksesi hakukoneiden indeksoiman oletuskielen.

## Baidu Intelligent Cloud -konfiguraatio

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

## Edistynyt käyttö: Liikenteen jakaminen alueellisen analyysin perusteella

Jos haluat tarjota palveluita Manner-Kiinassa ja hyödyntää `cloudflare`:n ilmaista kansainvälistä liikennettä, voit käyttää alueellista `DNS`-resoluutiota.

Esimerkiksi [Huawei Cloud DNS](https://www.huaweicloud.com) tarjoaa ilmaisen alueellisen analyysin, jonka avulla Manner-Kiinan liikenne voi kulkea Baidu Smart Cloudin kautta ja kansainvälinen liikenne `cloudflare` kautta.

`cloudflare`-palvelun asetuksissa on useita sudenkuoppia. Tässä muutamia huomioitavia seikkoja:

### Verkkotunnusta isännöi toinen `DNS`, kuinka käyttää `cloudflare`:

Sido ensin mikä tahansa verkkotunnus `cloudflare`-palveluun ja liitä pääverkkotunnus tähän verkkotunnukseen `SSL/TLS` → mukautetun verkkotunnuksen avulla.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` ei ole saatavilla mukautetun verkkotunnuksen kautta

Koska `cloudflare`-palvelun sisäänrakennettu objektistore `R2` ei tue mukautettua verkkotunnusta, staattisten tiedostojen tallentamiseen tarvitaan kolmannen osapuolen objektistoria.

Tässä esimerkkinä [backblaze.com](https://www.backblaze.com), kuinka sidota kolmannen osapuolen objektistoren `cloudflare`-palveluun.

Luo `backblaze.com`-sivustolle tallennustila, lataa mikä tahansa tiedosto, selaa tiedostoja ja hanki `Friendly URL`-verkkotunnus, joka on tässä tapauksessa `f003.backblazeb2.com`.

![](//p.3ti.site/1725440783.avif)

Muuta verkkotunnusta `CNAME`-arvoksi `f003.backblazeb2.com` `cloudflare`-palvelussa ja ota välityspalvelin käyttöön.

![](//p.3ti.site/1725440896.avif)

Muokkaa `cloudflare`-palvelun `SSL`-salaustila asettamalla se `Full`-tilaan

![](//p.3ti.site/1725438572.avif)

Lisää seuraavat muunnossäännöt ja aseta ne ensimmäiseksi (ensimmäisellä on alhaisin prioriteetti):

![](//p.3ti.site/1725443232.avif)

`Rewrite to`-valinnassa valitse dynaaminen ja muuta `concat("/file/your_bucketname",http.request.uri.path)`-lauseessa `your_bucketname`-osaa omaksi säilön nimeksesi.

Lisäksi muuta yllä olevassa `cloudflare`-muunnossäännössä `index.html` `file/your_bucketname/index.html`-muotoon ja jätä muut asetukset ennalleen.

![](//p.3ti.site/1725441384.avif)