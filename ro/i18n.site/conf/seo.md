# Optimizare Pentru Motoarele De Căutare (Seo)

## Principiu

`i18n.site` adoptă o arhitectură de o singură pagină fără reîmprospătare Pentru a facilita indexarea căutării, o pagină statică separată și `sitemap.xml` vor fi generate pentru crawler-uri.

Când `User-Agent` al cererii de acces este folosit de crawler-ul motorului de căutare, cererea va fi redirecționată către pagina statică prin `302` .

În paginile statice, utilizați `link` pentru a indica link-uri către versiuni în diferite limbi ale acestei pagini, cum ar fi :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Configurați Stocarea Obiectelor Pentru Încărcarea Fișierelor Statice

Fișierele statice pot fi generate local, dar o abordare mai comună este să le încărcați în stocarea obiectelor.

Luați ca exemplu fișierul de configurare `.i18n/htm/ol.yml` din proiectul demo

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

Mai întâi modificați valoarea `host:` de mai sus la numele dvs. de domeniu, cum ar fi `i18n.site` .

Apoi, editați `~/.config/i18n.site.yml` și adăugați următoarea configurație :

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

În configurație, vă rugăm să schimbați `i18n.site` la valoarea de `host:` în `.i18n/htm/ol.yml` , mai multe depozite de obiecte pot fi configurate sub `s3` , iar câmpul `region` este opțional (multe magazine de obiecte nu trebuie să seteze acest câmp).

Apoi rulați `i18n.site -n` pentru a republica proiectul.

Dacă ați modificat `~/.config/i18n.site.yml` și doriți să reîncărcați, vă rugăm să utilizați următoarea comandă din directorul rădăcină al proiectului pentru a șterge memoria cache de încărcare :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Configurația cloudflare

Nume de domeniu găzduit [cloudflare](//www.cloudflare.com)

### Reguli De Conversie

Adăugați regulile de conversie după cum se arată mai jos:

![](//p.3ti.site/1725436822.avif)

Codul regulii este următorul, vă rugăm să modificați codul „i18n.site” la numele domeniului dumneavoastră:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Regulile De Cache

Adăugați reguli de cache după cum urmează:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Reguli De Redirecționare

Setați regulile de redirecționare după cum urmează, vă rugăm să modificați codul „i18n.site” la numele domeniului dumneavoastră

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

`URL redirect` Selectați redirecționare dinamică, modificați `/en` în calea de redirecționare `concat("/en",http.request.uri.path,".htm")` la limba implicită pe care doriți să o includă motoarele de căutare.

## Baidu Intelligent Cloud Configuration

Dacă trebuie să oferiți servicii Chinei continentale, puteți utiliza [Baidu Smart Cloud](//cloud.baidu.com) .

Datele sunt încărcate în Baidu Object Storage și legate la Baidu Content Distribution Network.

Apoi creați scriptul în [serviciul EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) după cum urmează

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

Faceți clic pe `Debug` , apoi faceți clic pe Publicare în întreaga rețea.

![](//p.3ti.site/1725437754.avif)

## Utilizare Avansată: Distribuiți Traficul Pe Baza Rezoluției Regionale

Dacă doriți să furnizați servicii în China continentală și doriți, de asemenea, `cloudflare` trafic internațional gratuit, puteți utiliza `DNS` cu rezoluție regională.

De exemplu, [Huawei Cloud DNS](https://www.huaweicloud.com) oferă analize regionale gratuite, cu care traficul din China continentală poate trece prin Baidu Smart Cloud, iar traficul internațional poate trece prin `cloudflare` .

Există multe capcane în configurația lui `cloudflare` Iată câteva puncte de reținut :

### Numele De Domeniu Este Găzduit În Alte `DNS` , Cum Se Utilizează `cloudflare`

Mai întâi legați un nume de domeniu arbitrar la `cloudflare` , apoi utilizați `SSL/TLS` → nume de domeniu personalizat pentru a asocia numele de domeniu principal cu acest nume de domeniu.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Nu Poate Fi Accesat Printr-Un Nume De Domeniu Personalizat

Deoarece stocarea de obiecte `cloudflare` `R2` nu poate fi accesată printr-un nume de domeniu personalizat, trebuie utilizată o stocare de obiecte terță parte pentru a plasa fișiere statice.

[backblaze.com](https://www.backblaze.com) luăm ca exemplu pentru a demonstra cum să legăm obiectele terțe pentru a fi stocate la `cloudflare` .

Creați o găleată la `backblaze.com` , încărcați orice fișier, faceți clic pentru a răsfoi fișierul și obțineți numele de domeniu `Friendly URL` , care este `f003.backblazeb2.com` aici.

![](//p.3ti.site/1725440783.avif)

Schimbați numele de domeniu de la `CNAME` la `f003.backblazeb2.com` la `cloudflare` și activați proxy-ul.

![](//p.3ti.site/1725440896.avif)

Modificați `cloudflare` din `SSL` → modul de criptare, setat la `Full`

![](//p.3ti.site/1725438572.avif)

Adăugați regula de conversie așa cum se arată mai jos, puneți-o pe primul loc (prima are cea mai mică prioritate):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` selectați dinamic și modificați `your_bucketname` în `concat("/file/your_bucketname",http.request.uri.path)` la numele găleții dvs.

În plus, în regula de conversie `cloudflare` de mai sus, `index.html` este schimbat în `file/your_bucketname/index.html` , iar celelalte configurații rămân aceleași.

![](//p.3ti.site/1725441384.avif)