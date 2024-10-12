# Optimización para Motores de Búsqueda (SEO)

## Principio

`i18n.site` utiliza una arquitectura de página única sin recarga para facilitar la indexación por motores de búsqueda, generando páginas estáticas individuales y un `sitemap.xml` para que los rastreadores losjen escanear.

Cuando el `User-Agent` de una solicitud de acceso es un rastreador de motor de búsqueda, la solicitud se redirige a la página estática mediante un `302`.

En las páginas estáticas, se utiliza el etiquetado `link` para indicar los enlaces a las versiones en diferentes idiomas de la página, por ejemplo:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Configure el almacenamiento de objetos para cargar archivos estáticos

Los archivos estáticos se pueden generar localmente, pero es más común cargarlos en un almacenamiento de objetos.

Tome como ejemplo el archivo de configuración `.i18n/htm/ol.yml` del proyecto de demostración

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

Primero, modifique el valor de `host:` a su nombre de dominio, por ejemplo, `i18n.site`.

Luego, edite `~/.config/i18n.site.yml` y añada la siguiente configuración:

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

En la configuración, `i18n.site` debe cambiarse al valor de `host:` en `.i18n/htm/ol.yml`; en `s3` se pueden configurar varios almacenes de objetos, y el campo `region` es opcional (muchos almacenes de objetos no requieren este campo).

Luego ejecute `i18n.site -n` para republicar el proyecto.

Si ha modificado `~/.config/i18n.site.yml` y desea volver a cargar, utilice el siguiente comando en el directorio raíz del proyecto para limpiar el caché de carga:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Configure Cloudflare

El nombre de dominio está alojado en [cloudflare](//www.cloudflare.com).

### Reglas de Conversión

Añada las reglas de conversión como se muestra en la imagen:

![](//p.3ti.site/1725436822.avif)

El código de la regla es el siguiente, modifique "i18n.site" por su nombre de dominio:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Reglas de Caché

Añada las reglas de caché de la siguiente manera:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Reglas de Redirección

Configure las reglas de redirección de la siguiente manera, modifique "i18n.site" por su nombre de dominio

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

Seleccione `URL redirect` para una redirección dinámica y modifique `/en` en la ruta de redirección `concat("/en", http.request.uri.path, ".htm")` al idioma predeterminado que desea que los motores de búsqueda indexen.

## CONFIGURACIÓN DE LA NUBE INTELIGENTE DE BAIDU

Si necesita proporcionar servicios en China continental, puede utilizar [Baidu Smart Cloud](//cloud.baidu.com).

Los datos se suben a Baidu Object Storage y se enlazan a la Baidu Content Distribution Network.

Luego, cree un script en [el servicio EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) de la siguiente manera:

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

Haga clic en `Debug` y luego haga clic en Publicar en toda la red.

![](//p.3ti.site/1725437754.avif)

## USO AVANZADO: DISTRIBUCIÓN DE TRÁFICO BASADA EN LA RESOLUCIÓN GEOGRÁFICA

Si desea brindar servicios en China continental y también desea `cloudflare` tráfico internacional gratuito, puede usar `DNS` con resolución regional.

Por ejemplo, [Huawei Cloud DNS](https://www.huaweicloud.com) proporciona un análisis regional gratuito, con el que el tráfico de China continental puede pasar por Baidu Smart Cloud y el tráfico internacional puede pasar por `cloudflare` .

Hay muchas trampas en la configuración de `cloudflare` ¡Aquí hay algunos puntos a tener en cuenta :

### El Nombre De Dominio Está Alojado en Otro `DNS` , Cómo Usarlo `cloudflare`

Primero vincule un nombre de dominio arbitrario a `cloudflare` y luego use `SSL/TLS` → nombre de dominio personalizado para asociar el nombre de dominio principal a este nombre de dominio.

![](https://p.3ti.site/1725438658.avif)

### No Se Puede Acceder a `cloudflare R2` a Través De Un Nombre De Dominio Personalizado

Debido a que no se puede acceder al almacenamiento de objetos `cloudflare` `R2` mediante un nombre de dominio personalizado, se debe utilizar un almacenamiento de objetos de terceros para colocar archivos estáticos.

Aquí tomamos [backblaze.com](https://www.backblaze.com) como ejemplo para demostrar cómo vincular objetos de terceros y almacenarlos en `cloudflare` .

Cree un depósito en `backblaze.com`, suba cualquier archivo, haga clic para explorar el archivo y obtenga el nombre de dominio `Friendly URL`, que aquí es `f003.backblazeb2.com`.

![](//p.3ti.site/1725440783.avif)

Cambie el nombre de dominio de `CNAME` a `f003.backblazeb2.com` en `cloudflare` y habilite el proxy.

![](//p.3ti.site/1725440896.avif)

Modifique `Cloudflare` en `SSL` → Modo de cifrado, configurándolo en `Full`

![](//p.3ti.site/1725438572.avif)

Añada la regla de conversión como se muestra a continuación, poniéndola en primer lugar (la primera tiene la menor prioridad):

![](//p.3ti.site/1725443232.avif)

Seleccione `Rewrite to` dinámico y modifique `your_bucketname` en `concat("/file/your_bucketname", http.request.uri.path)` por el nombre de su depósito.

Además, en la regla de conversión `cloudflare` anterior, `index.html` se cambia a `file/your_bucketname/index.html` y otras configuraciones siguen siendo las mismas.

![](//p.3ti.site/1725441384.avif)