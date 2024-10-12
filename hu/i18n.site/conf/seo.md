# Keresőoptimalizálás (Seo)

## Alapelv

`i18n.site` nem frissíti az egyoldalas architektúrát. A keresési indexelés megkönnyítése érdekében külön statikus oldal és `sitemap.xml` jön létre a bejárók számára.

Ha `User-Agent` -ját használja a keresőmotor bejárója, a kérést átirányítja a statikus oldalra `302` keresztül.

Statikus oldalakon használja `link` az oldal különböző nyelvi változataira mutató hivatkozások jelzésére, például :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Állítsa Be Az Objektumtárolót Statikus Fájlok Feltöltéséhez

A statikus fájlok helyileg is előállíthatók, de elterjedtebb az, hogy objektumtárolóba töltik fel őket.

Vegyük példaként a `.i18n/htm/ol.yml` konfigurációs fájlt a demóprojektben

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

Kérjük, először módosítsa a fenti `host:` értékét a domain nevére, például `i18n.site` .

Ezután szerkessze `~/.config/i18n.site.yml` , és adja hozzá a következő konfigurációt :

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

A konfigurációban módosítsa `i18n.site` `host:` az `.i18n/htm/ol.yml` ben értékre, `s3` alatt több objektumtároló is konfigurálható, és a `region` mező nem kötelező (sok objektumtárolónak nem kell beállítania ezt a mezőt).

Ezután futtassa `i18n.site -n` a projekt újbóli közzétételéhez.

Ha módosította `~/.config/i18n.site.yml` , és újra fel szeretné tölteni, használja a következő parancsot a projekt gyökérkönyvtárában a feltöltési gyorsítótár törléséhez :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## cloudflare Konfiguráció

A domain név a következő helyen található [cloudflare](//www.cloudflare.com) .

### Konverziós Szabályok

Adja hozzá a konverziós szabályokat az alábbiak szerint:

![](//p.3ti.site/1725436822.avif)

A szabály kódja a következő, kérjük, módosítsa az "i18n.site" kódot a domain nevére:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Gyorsítótárazási Szabályok

Adjon hozzá gyorsítótár-szabályokat az alábbiak szerint:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Átirányítási Szabályok

Állítsa be az átirányítási szabályokat az alábbiak szerint, kérjük, módosítsa az "i18n.site" kódot a domain nevére

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

`URL redirect` Válassza a dinamikus átirányítást, kérjük, módosítsa `/en` `concat("/en",http.request.uri.path,".htm")` átirányítási útvonalon arra az alapértelmezett nyelvre, amelyet a keresőmotorok használni szeretnének.

## Baidu Intelligent Cloud Configuration

Ha szolgáltatásokat kell nyújtania Kínának, használhatja [a Baidu Smart Cloud szolgáltatást](//cloud.baidu.com) .

Az adatok a Baidu Object Storage-ba töltődnek fel, és a Baidu Content Distribution Networkhöz kötődnek.

Ezután hozza létre a szkriptet [a EdgeJS edge szolgáltatásban](//console.bce.baidu.com/cdn/#/cdn/ejs/list) az alábbiak szerint

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

Kattintson `Debug` , majd a Közzététel a teljes hálózaton elemre.

![](//p.3ti.site/1725437754.avif)

## Speciális Használat: A Forgalom Elosztása Regionális Felbontás Alapján

Ha Kínában szeretne szolgáltatásokat nyújtani és `cloudflare` ingyenes nemzetközi forgalmat is szeretne, használhat `DNS` regionális felbontással.

Például [a Huawei DNS](https://www.huaweicloud.com) ingyenes regionális elemzést biztosít, amellyel a szárazföldi kínai forgalom a Baidu Smart Cloudon, a nemzetközi forgalom pedig `cloudflare` keresztül haladhat.

A `cloudflare` konfigurációjában sok buktató található. Íme néhány megjegyzés :

### A Domain Név Más `DNS` Ban Van Tárolva, Hogyan Kell Használni `cloudflare`

Először kössön egy tetszőleges tartománynevet `cloudflare` -hoz, majd `SSL/TLS` → egyéni tartománynév használatával társítsa a fő tartománynevet ehhez a tartománynévhez.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Nem Érhető El Egyéni Domain Néven Keresztül

Mivel a `cloudflare` objektumtároló `R2` nem érhető el testreszabott tartománynévvel, a statikus fájlok elhelyezéséhez harmadik féltől származó objektumtárolót kell használni.

Itt példának [backblaze.com](https://www.backblaze.com) a `cloudflare` ban tárolandó harmadik féltől származó objektumok összerendelését.

Hozzon létre egy gyűjtőt `backblaze.com` helyen, töltsön fel bármilyen fájlt, kattintson a fájl tallózásához, és kapja meg az `Friendly URL` domain nevet, ami itt `f003.backblazeb2.com` .

![](//p.3ti.site/1725440783.avif)

Módosítsa a domain nevet `CNAME` ről `f003.backblazeb2.com` -re `cloudflare` -nál, és engedélyezze a proxyt.

![](//p.3ti.site/1725440896.avif)

Módosítsa `SSL` -ből `cloudflare` t → titkosítási mód, állítsa `Full` re

![](//p.3ti.site/1725438572.avif)

Adja hozzá a konverziós szabályt az alábbiak szerint, tegye első helyre (az elsőnek van a legalacsonyabb prioritása):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` válassza ki a dinamikus lehetőséget, és módosítsa `your_bucketname` `concat("/file/your_bucketname",http.request.uri.path)` -ben beállítást a gyűjtőhely nevére.

Ezenkívül a fenti `cloudflare` konverziós szabályban `index.html` `file/your_bucketname/index.html` -re változik, és a többi konfiguráció változatlan marad.

![](//p.3ti.site/1725441384.avif)