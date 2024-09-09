# Optimizare pentru Motoarele de Căutare (SEO)

## Principii

`i18n.site` adoptă o arhitectură de pagină unică fără reîmprospătare, pentru a facilita indexarea de către motoarele de căutare, generând pagini statice separate și `sitemap.xml` pentru crawleri.

Când `User-Agent` al solicitării este recunoscut ca aparținând unui crawler de motor de căutare, solicitarea este redirecționată către pagina statică printr-o `302`.

Pe paginile statice, se utilizează eticheta `link` pentru a menționa link-urile către versiunile în alte limbi ale paginii, de exemplu:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Configurează stocarea obiectelor pentru încărcarea fișierelor statice

Fișierele statice pot fi generate local, dar este mai comun să le încarci în stocarea obiectelor.

Învățați din fișierul de configurare `.i18n/htm/ol.yml` din proiectul demonstrativ

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

Modificați mai întâi valoarea `host:` de sus la domeniul dvs., cum ar fi `i18n.site`.

Apoi, editați `~/.config/i18n.site.yml` și adăugați următoarea configurație:

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

În configurație, modificați `i18n.site` cu valoarea `host:` din `.i18n/htm/ol.yml`, sub `s3` pot fi configurate mai multe stocări de obiecte, câmpul `region` fiind opțional (multe stocări de obiecte nu necesită acest câmp).

Apoi rulați `i18n.site -n` pentru a republica proiectul.

Dacă ați modificat `~/.config/i18n.site.yml` și doriți să reîncărcați, folosiți comanda următoare în directorul rădăcină al proiectului pentru a curăța cache-ul de încărcare:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Configurează Cloudflare

Domeniul este găzduit la [cloudflare](//www.cloudflare.com).

### Reguli de conversie

Adăugați regulile de conversie așa cum se arată în imagine:

![](//p.3ti.site/1725436822.avif)

Codul regulii este următorul, vă rugăm să modificați codul „i18n.site” cu numele domeniului dvs.:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Reguli de cache

Adăugați reguli de cache astfel:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Reguli de redirecționare

Setați regulile de redirecționare astfel, vă rugăm să modificați codul „i18n.site” cu numele domeniului dvs.:

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

`URL redirect` selectați redirecționare dinamică și modificați `/en` în calea de redirecționare `concat("/en", http.request.uri.path, ".htm")` cu limba implicită pe care doriți să o indexeze motoarele de căutare.

## Configurează Baidu Smart Cloud

Dacă trebuie să oferiți servicii în China continentală, puteți folosi [Baidu Smart Cloud](//cloud.baidu.com).

Datele sunt încărcate în Baidu Object Storage și legate la Baidu Content Distribution Network.

Apoi creați un script în [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) astfel:

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

Faceți clic pe `Debug`, apoi pe Publicare pe rețea globală.

![](//p.3ti.site/1725437754.avif)

## Utilizare avansată: Distribuirea traficului pe baza rezoluției regionale

Dacă doriți să oferiți servicii atât în China continentală, cât și să beneficiați de traficul internațional gratuit de la `cloudflare`, puteți folosi un `DNS` cu rezoluție regională.

De exemplu, [Huawei Cloud DNS](https://www.huaweicloud.com) oferă rezoluție regională gratuită, permițându-vă să distribuiți traficul din China continentală prin Baidu Smart Cloud și traficul internațional prin `cloudflare`.

Există multe capcane în configurația `cloudflare`, iată câteva puncte de luat în considerare:

### Cum să folosiți `cloudflare` când domeniul este găzduit la alt `DNS`

Mai întâi legați un domeniu arbitrar la `cloudflare`, apoi folosiți `SSL/TLS` → nume de domeniu personalizat pentru a asocia domeniul principal cu acest domeniu.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` nu poate fi accesat printr-un nume de domeniu personalizat

Din cauza că `R2` de la `cloudflare` nu poate fi accesat printr-un nume de domeniu personalizat, trebuie să folosiți o stocare de obiecte terță parte pentru a plasa fișierele statice.

Aici, ca exemplu, [backblaze.com](https://www.backblaze.com) arată cum să legați stocarea terță parte la `cloudflare`.

Creați un bucket la `backblaze.com`, încărcați orice fișier, faceți clic pentru a răsfoi fișierul și obțineți numele de domeniu `Friendly URL`, de exemplu `f003.backblazeb2.com`.

![](//p.3ti.site/1725440783.avif)

Schimbați domeniul `CNAME` la `f003.backblazeb2.com` în `cloudflare` și activați proxy-ul.

![](//p.3ti.site/1725440896.avif)

Modificați `cloudflare` la `SSL` → modul de criptare, setat pe `Full`

![](//p.3ti.site/1725438572.avif)

Adăugați regula de conversie așa cum se arată în imagine, plasând-o pe primul loc (prima are prioritatea cea mai mică):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` selectați dinamic și modificați `your_bucketname` în `concat("/file/your_bucketname", http.request.uri.path)` cu numele găleții dvs.

In plus, în regula de conversie `cloudflare` de mai sus, înlocuiți `index.html` cu `file/your_bucketname/index.html`, păstrând celelalte configurații neschimbate.

![](//p.3ti.site/1725441384.avif)