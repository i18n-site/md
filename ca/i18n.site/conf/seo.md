# Optimització Per a Motors De Cerca (Seo)

## Principi

`i18n.site` adopta una arquitectura d'una sola pàgina sense actualització Per tal de facilitar la indexació de la cerca, es generarà una pàgina estàtica separada i `sitemap.xml` per als rastrejadors.

Quan el rastrejador del motor de cerca utilitza `User-Agent` de la sol·licitud d'accés, la sol·licitud es redirigirà a la pàgina estàtica mitjançant `302` .

A les pàgines estàtiques, utilitzeu `link` per indicar enllaços a diferents versions d'idiomes d'aquesta pàgina, com ara :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Configureu L'emmagatzematge D'objectes Per Carregar Fitxers Estàtics

Els fitxers estàtics es poden generar localment, però un enfocament més comú és pujar-los a l'emmagatzematge d'objectes.

Preneu com a exemple el fitxer de configuració `.i18n/htm/ol.yml` del projecte de demostració

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

Primer modifiqueu el valor de `host:` anterior al vostre nom de domini, com ara `i18n.site` .

A continuació, editeu `~/.config/i18n.site.yml` i afegiu la configuració següent :

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

A la configuració, canvieu `i18n.site` al valor de `host:` en `.i18n/htm/ol.yml` , es poden configurar diversos magatzems d'objectes sota `s3` i el camp `region` és opcional (molts magatzems d'objectes no necessiten establir aquest camp).

A continuació, executeu `i18n.site -n` per tornar a publicar el projecte.

Si heu modificat `~/.config/i18n.site.yml` i voleu tornar a carregar, utilitzeu l'ordre següent al directori arrel del projecte per esborrar la memòria cau de càrrega :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Configuració De cloudflare

Nom de domini allotjat a [cloudflare](//www.cloudflare.com)

### Normes De Conversió

Afegiu les regles de conversió tal com es mostra a continuació:

![](//p.3ti.site/1725436822.avif)

El codi de regla és el següent, modifiqueu el codi "i18n.site" al vostre nom de domini:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Regles De Memòria Cau

Afegiu regles de memòria cau de la següent manera:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Regles De Redirecció

Establiu les regles de redirecció de la següent manera, modifiqueu el codi "i18n.site" al vostre nom de domini

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

`URL redirect` Seleccioneu la redirecció dinàmica, modifiqueu `/en` al camí de redirecció `concat("/en",http.request.uri.path,".htm")` a l'idioma predeterminat que voleu que incloguin els motors de cerca.

## Baidu Intelligent Cloud Configuration

Si necessiteu oferir serveis a la Xina continental, podeu utilitzar [Baidu Smart Cloud](//cloud.baidu.com) .

Les dades es pengen a l'emmagatzematge d'objectes de Baidu i s'uneixen a la xarxa de distribució de contingut de Baidu.

A continuació, creeu l'script al [servei EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) de la manera següent

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

Feu clic a `Debug` , a continuació, feu clic a Publica a tota la xarxa.

![](//p.3ti.site/1725437754.avif)

## Ús Avançat: Distribueix El Trànsit en Funció De La Resolució Regional

Si voleu oferir serveis a la Xina continental i també voleu `cloudflare` trànsit internacional gratuït, podeu utilitzar `DNS` amb resolució regional.

Per exemple, [Huawei DNS](https://www.huaweicloud.com) ofereix anàlisi regional gratuïta, amb la qual el trànsit de la Xina continental pot passar per Baidu Smart Cloud i el trànsit internacional pot passar per `cloudflare` .

Hi ha molts inconvenients en la configuració de `cloudflare` Aquí teniu alguns punts a tenir en compte :

### El Nom De Domini Està Allotjat en Un Altre `DNS` , Com S'utilitza `cloudflare`

Primer uniu un nom de domini arbitrari a `cloudflare` i, a continuació, utilitzeu `SSL/TLS` → nom de domini personalitzat per associar el nom de domini principal a aquest nom de domini.

![](https://p.3ti.site/1725438658.avif)

### No Es Pot Accedir `cloudflare R2` Mitjançant Un Nom De Domini Personalitzat

Com que no es pot accedir a l'emmagatzematge d'objectes `cloudflare` `R2` mitjançant un nom de domini personalitzat, cal utilitzar un emmagatzematge d'objectes de tercers per col·locar fitxers estàtics.

[backblaze.com](https://www.backblaze.com) prenem com a exemple per demostrar com vincular objectes de tercers per emmagatzemar-los a `cloudflare` .

Creeu un cub a `backblaze.com` , carregueu qualsevol fitxer, feu clic per explorar el fitxer i obteniu el nom de domini `Friendly URL` , que és `f003.backblazeb2.com` aquí.

![](//p.3ti.site/1725440783.avif)

Canvieu el nom de domini d' `CNAME` a `f003.backblazeb2.com` a `cloudflare` i activeu el proxy.

![](//p.3ti.site/1725440896.avif)

Modifiqueu `cloudflare` de `SSL` → mode de xifratge, establiu-lo en `Full`

![](//p.3ti.site/1725438572.avif)

Afegiu la regla de conversió tal com es mostra a continuació, poseu-la primer (la primera té la prioritat més baixa):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` seleccioneu dinàmic i modifiqueu `your_bucketname` en `concat("/file/your_bucketname",http.request.uri.path)` al vostre nom de cub.

A més, a la regla de conversió `cloudflare` anterior, `index.html` es canvia per `file/your_bucketname/index.html` i la resta de configuracions segueixen sent les mateixes.

![](//p.3ti.site/1725441384.avif)