# Hakukoneoptimointi (Seo)

## Periaate

`i18n.site` ottaa käyttöön päivittämättömän yhden sivun arkkitehtuurin Haun indeksoinnin helpottamiseksi indeksointiroboteille luodaan erillinen staattinen sivu ja `sitemap.xml` .

Kun hakukoneen indeksointirobotti käyttää pääsypyynnön `User-Agent` , pyyntö ohjataan staattiselle sivulle `302` kautta.

Käytä staattisilla sivuilla `link` osoittaaksesi linkit tämän sivun eri kieliversioihin, kuten :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Paikallinen Nginx-Määritys

Otetaan esimerkkinä esittelyprojektin `.i18n/htm/main.yml` määritystiedosto

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

Muokkaa ensin yllä olevaa `host:` :n arvoa verkkotunnuksesi nimeksi, kuten `xxx.com` .

Sitten `i18n.site -n` , staattinen sivu luodaan hakemistoon `out/main/htm` .

Tietenkin voit ottaa käyttöön myös muita konfiguraatiotiedostoja, esimerkiksi viittaamalla ensin `main` :n määritykseen luodaksesi `.i18n/htm/dist.package.json` ja `.i18n/htm/dist.yml` .

Suorita sitten `i18n.site -n -c dist` , jotta staattinen sivu luodaan `out/dist/htm` :ksi.

`nginx` voidaan asettaa alla olevan konfiguraation avulla.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Älä välimuistissa palvelintyön skriptejä liian kauan
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Aseta pidemmät välimuistiajat muille staattisille resursseille
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Määritä, mitä staattista tiedostoa indeksointirobotti käyttää etusivun merkintänä
location = / {
  # Jos $botLang ei ole tyhjä, se tarkoittaa indeksointia ja uudelleenohjausta määritetyn kielipolun mukaan
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Yhden sivun sovelluskokoonpano
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Määritä Objektin Tallennustila Staattisten Tiedostojen Lataamista Varten

Staattiset tiedostot voidaan luoda paikallisesti, mutta yleisempi tapa on ladata ne objektien tallennustilaan.

Muuta yllä määritetty `out` arvoksi :

```
out:
  - s3
```

Muokkaa sitten arvoa `~/.config/i18n.site.yml` ja lisää seuraava kokoonpano :

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

Muuta kokoonpanossa `i18n.site` arvoksi `host:` in `.i18n/htm/main.yml` , useita objektivarastoja voidaan määrittää `s3` alle ja `region` -kenttä on valinnainen (monien objektitalojen ei tarvitse asettaa tätä kenttää).

Suorita sitten `i18n.site -n` julkaistaksesi projektin uudelleen.

Jos olet muokannut arvoa `~/.config/i18n.site.yml` ja haluat ladata uudelleen, käytä seuraavaa komentoa projektin juurihakemistossa tyhjentääksesi lähetysvälimuistin :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Cloudflare-Kokoonpano

Verkkotunnus isännöi [cloudflare](//www.cloudflare.com)

### Muunnossäännöt

Lisää muunnossäännöt alla olevan kuvan mukaisesti:

![](//p.3ti.site/1725436822.avif)

Sääntökoodi on seuraava, muuta koodi "i18n.site" verkkotunnuksesi nimeksi:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Välimuistin Säännöt

Lisää välimuistisäännöt seuraavasti:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Uudelleenohjaussäännöt

Aseta uudelleenohjaussäännöt seuraavasti, muuta koodi "i18n.site" verkkotunnuksesi nimeksi

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

`URL redirect` Valitse dynaaminen uudelleenohjaus, muuta `/en` uudelleenohjauspolussa `concat("/en",http.request.uri.path,".htm")` oletuskieleksi, jonka haluat hakukoneiden sisällyttävän.

## Baidu Intelligent Cloud Configuration

Jos sinun on tarjottava palveluita Manner-Kiinaan, voit käyttää [Baidu Smart Cloudia](//cloud.baidu.com) .

Tiedot ladataan Baidu Object Storageen ja sidotaan Baidu Content Distribution Networkiin.

Luo sitten skripti [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) seuraavasti

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
  // Vastausotsikot voidaan asettaa virheenkorjaustuloksi, kuten out.XXX = 'MSG';
})
```

Napsauta `Debug` ja napsauta sitten Julkaise koko verkossa.

![](//p.3ti.site/1725437754.avif)

## Edistynyt Käyttö: Jaa Liikennettä Alueellisen Resoluution Perusteella

Jos haluat tarjota palveluita Manner-Kiinassa ja haluat myös `cloudflare` ilmaista kansainvälistä liikennettä, voit käyttää `DNS` alueellisella resoluutiolla.

Esimerkiksi [Huawei DNS](https://www.huaweicloud.com) tarjoaa ilmaisen alueanalyysin, jonka avulla Manner-Kiinan liikenne voi kulkea Baidu Smart Cloudin kautta ja kansainvälinen liikenne `cloudflare` kautta.

`cloudflare` :n asetuksissa on monia sudenkuoppia. Tässä on muutamia huomioitavia seikkoja :

### Verkkotunnusta Isännöi Muu `DNS` , Kuinka Käyttää `cloudflare`

Sido ensin mielivaltainen verkkotunnuksen nimi arvoon `cloudflare` ja liitä pääverkkotunnus tähän verkkotunnukseen käyttämällä `SSL/TLS` → mukautettu verkkotunnus.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ei Voi Käyttää Mukautetun Verkkotunnuksen Kautta

Koska `cloudflare` objektimuistia `R2` ei voi käyttää mukautetulla toimialueen nimellä, staattisten tiedostojen sijoittamiseen on käytettävä kolmannen osapuolen objektitallennustilaa.

[backblaze.com](https://www.backblaze.com) otamme esimerkkinä, kuinka sidotaan kolmannen osapuolen objektit, jotka tallennetaan arvoon `cloudflare` .

Luo ryhmä `backblaze.com` :lle, lataa mikä tahansa tiedosto, napsauta selataksesi tiedostoa ja hanki verkkotunnuksen nimi `Friendly URL` , joka on `f003.backblazeb2.com` tässä.

![](//p.3ti.site/1725440783.avif)

Muuta verkkotunnuksen nimi arvosta `CNAME` arvoon `f003.backblazeb2.com` kohdassa `cloudflare` ja ota välityspalvelin käyttöön.

![](//p.3ti.site/1725440896.avif)

Muokkaa `cloudflare` → salaustila `SSL` aseta arvoon `Full`

![](//p.3ti.site/1725438572.avif)

Lisää muunnossääntö alla olevan kuvan mukaisesti, aseta se ensin (ensimmäisellä on alhaisin prioriteetti):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` valitse dynaaminen ja muokkaa `your_bucketname` in `concat("/file/your_bucketname",http.request.uri.path)` -säilön nimeäsi.

Lisäksi yllä olevassa `cloudflare` muunnossäännössä `index.html` muutetaan arvoksi `file/your_bucketname/index.html` ja muut kokoonpanot pysyvät samoina.

![](//p.3ti.site/1725441384.avif)