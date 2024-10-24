# Optimización de Motores de Búsqueda (SEO)

## Principio

`i18n.site` utiliza una arquitectura de página única sin recarga para facilitar la indexación de búsqueda, generando páginas estáticas individuales y un `sitemap.xml` para que los rastreadores puedan capturarlas.

Cuando el `User-Agent` de una solicitud de acceso es un rastreador de motor de búsqueda, la solicitud se redirige a la página estática mediante un `302`.

En las páginas estáticas, se utiliza el etiquetado `link` para indicar los enlaces a las versiones en diferentes idiomas de la página, por ejemplo:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Configure el almacenamiento de objetos para cargar archivos estáticos

Los archivos estáticos pueden generarse localmente, pero es más común cargarlos a un almacenamiento de objetos.

Tomemos como ejemplo el archivo de configuración `.i18n/htm/ol.yml` del proyecto de demostración

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

Modifique primero el valor de `host:` en el archivo superior a su dominio, por ejemplo, `i18n.site`.

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

En la configuración, reemplace `i18n.site` con el valor de `host:` en `.i18n/htm/ol.yml`; en `s3`, puede configurar varios almacenamientos de objetos, y el campo `region` es opcional (muchos almacenamientos de objetos no requieren este campo).

Luego ejecute `i18n.site -n` para republicar el proyecto.

Si ha modificado `~/.config/i18n.site.yml` y desea volver a cargar, utilice el siguiente comando en el directorio raíz del proyecto para limpiar el caché de carga:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## CONFIGURACIÓN DE CLOUDFLARE

Dominio alojado en [cloudflare](//www.cloudflare.com).

### Reglas de conversión

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

### Reglas de almacenamiento en caché

Añada las reglas de caché de la siguiente manera:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Reglas de redirección

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

Seleccione la redirección dinámica en `URL redirect`, y modifique la ruta de redirección `concat("/en", http.request.uri.path, ".htm")` para que `/en` refleje el idioma predeterminado que desea que los motores de búsqueda indexen.

## CONFIGURACIÓN DE LA NUBE INTELIGENTE DE BAIDU

Si necesita proporcionar servicios en China continental, puede utilizar [Baidu Smart Cloud](//cloud.baidu.com).

Los datos se cargan en el Baidu Object Storage y se enlazan a la Baidu Content Distribution Network.

Luego, cree un script en [el servicio EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) de la siguiente manera

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

## USO AVANZADO: DISTRIBUCIÓN DE TRÁFICO BASADA EN RESOLUCIÓN REGIONAL

Si desea ofrecer servicios tanto en China continental como beneficiarse del tráfico internacional gratuito de `cloudflare`, puede utilizar un `DNS` con resolución regional.

Por ejemplo, [Huawei Cloud DNS](https://www.huaweicloud.com) ofrece un análisis regional gratuito, lo que permite que el tráfico de China continental sea gestionado por Baidu Smart Cloud y el tráfico internacional por `cloudflare`.

La configuración de `cloudflare` tiene algunas trampas, aquí hay algunos puntos a considerar:

### Cómo usar `cloudflare` si el nombre de dominio está alojado en otro `DNS`

Primero, asocie un dominio cualquiera a `cloudflare`, y luego, mediante `SSL/TLS` → Dominio personalizado, vincule el dominio principal a este dominio.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` no es accesible a través de un dominio personalizado

Puesto que el almacenamiento de objetos `R2` integrado en `Cloudflare` no permite el acceso mediante un dominio personalizado, es necesario utilizar un servicio de almacenamiento de objetos de terceros para alojar los archivos estáticos.

Aquí se toma [backblaze.com](https://www.backblaze.com) como ejemplo para demostrar cómo vincular un almacenamiento de terceros a `cloudflare`.

Cree un depósito en `backblaze.com`, cárgue un archivo cualquiera, haga clic para explorar el archivo y obtenga el nombre de dominio de `Friendly URL`, que aquí es `f003.backblazeb2.com`.

![](//p.3ti.site/1725440783.avif)

En `cloudflare`, cambie el nombre de dominio a `CNAME` de `f003.backblazeb2.com` y active el proxy.

![](//p.3ti.site/1725440896.avif)

Modifique el modo de cifrado en `cloudflare` de `SSL` a `Full`

![](//p.3ti.site/1725438572.avif)

Añada la regla de conversión como se muestra a continuación, colóquela en primer lugar (la primera tiene la prioridad más baja):

![](//p.3ti.site/1725443232.avif)

En `Rewrite to`, seleccione dinámico y modifique `your_bucketname` en `concat("/file/your_bucketname", http.request.uri.path)` por el nombre de su cubo de almacenamiento.

Además, en las reglas de conversión previas de `cloudflare`, cambie `index.html` a `file/your_bucketname/index.html`, manteniendo el resto de la configuración sin cambios.

![](//p.3ti.site/1725441384.avif)