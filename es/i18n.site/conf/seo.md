# Optimización De Motores De Búsqueda (Seo)

## Principio

`i18n.site` adopta una arquitectura de página única sin actualización Para facilitar la indexación de búsqueda, se generarán una página estática separada y `sitemap.xml` para que los rastreadores la rastreen.

Cuando el rastreador del motor de búsqueda utiliza `User-Agent` de la solicitud de acceso, la solicitud será redirigida a la página estática a través de `302` .

En páginas estáticas, utilice `link` para indicar enlaces a versiones en diferentes idiomas de esta página, como :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Configuración Local De nginx

Tome el archivo de configuración `.i18n/htm/main.yml` en el proyecto de demostración como ejemplo.

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

Primero modifique el valor `host:` anterior a su nombre de dominio, como `xxx.com` .

Luego, `i18n.site -n` , la página estática se generará en el directorio `out/main/htm` .

Por supuesto, también puede habilitar otros archivos de configuración, como consultar primero la configuración de `main` para crear `.i18n/htm/dist.package.json` y `.i18n/htm/dist.yml` .

Luego ejecute `i18n.site -n -c dist` para que la página estática se genere en `out/dist/htm` .

`nginx` se puede configurar consultando la configuración siguiente.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# No almacene en caché los scripts de los trabajadores del servidor durante demasiado tiempo
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Establecer tiempos de caché más largos para otros recursos estáticos
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Establecer qué archivo estático utiliza el rastreador como entrada de la página de inicio
location = / {
  # Si $botLang está vacío, significa acceso y redirección del rastreador según la ruta de idioma establecida.
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Configuración de la aplicación de una sola página
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Configurar El Almacenamiento De Objetos Para Cargar Archivos Estáticos

Los archivos estáticos se pueden generar localmente, pero un enfoque más común es cargarlos en el almacenamiento de objetos.

Modifique `out` configurado arriba a :

```
out:
  - s3
```

Luego, edite `~/.config/i18n.site.yml` y agregue la siguiente configuración :

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

En la configuración, cambie `i18n.site` al valor de `host:` en `.i18n/htm/main.yml` , se pueden configurar varios almacenes de objetos en `s3` y el campo `region` es opcional (muchos almacenes de objetos no necesitan configurar este campo).

Luego ejecute `i18n.site -n` para volver a publicar el proyecto.

Si ha modificado `~/.config/i18n.site.yml` y desea volver a cargar, utilice el siguiente comando en el directorio raíz del proyecto para borrar el caché de carga :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Configuración De Nube

Nombre de dominio alojado en [cloudflare](//www.cloudflare.com)

### Reglas De Conversión

Agregue las reglas de conversión como se muestra a continuación:

![](//p.3ti.site/1725436822.avif)

El código de regla es el siguiente, modifique el código "i18n.site" a su nombre de dominio:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Reglas De Almacenamiento en Caché

Agregue reglas de caché de la siguiente manera:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Reglas De Redireccionamiento

Configure las reglas de redirección de la siguiente manera, modifique el código "i18n.site" a su nombre de dominio.

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

`URL redirect` Seleccione la redirección dinámica, modifique `/en` en la ruta de redirección `concat("/en",http.request.uri.path,".htm")` al idioma predeterminado que desea que incluyan los motores de búsqueda.

## Configuración Inteligente De La Nube De Baidu

Si necesita proporcionar servicios a China continental, puede utilizar [Baidu Smart Cloud](//cloud.baidu.com) .

Los datos se cargan en Baidu Object Storage y se vinculan a Baidu Content Distribution Network.

Luego cree el script en [el servicio EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) de la siguiente manera.

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
  // Los encabezados de respuesta se pueden configurar para depurar la salida, como out.XXX = 'MSG';
})
```

Haga clic en `Debug` y luego haga clic en Publicar en toda la red.

![](//p.3ti.site/1725437754.avif)

## Uso Avanzado: Distribuya El Tráfico Según La Resolución Regional

Si desea brindar servicios en China continental y también desea `cloudflare` tráfico internacional gratuito, puede usar `DNS` con resolución regional.

Por ejemplo, [Huawei Cloud DNS](https://www.huaweicloud.com) proporciona análisis regionales gratuitos, con los que el tráfico de China continental puede pasar por Baidu Smart Cloud y el tráfico internacional puede pasar por `cloudflare` .

Hay muchas trampas en la configuración de `cloudflare` ¡Aquí hay algunos puntos a tener en cuenta :

### El Nombre De Dominio Está Alojado en Otro `DNS` , Cómo Usarlo `cloudflare`

Primero vincule un nombre de dominio arbitrario a `cloudflare` y luego use `SSL/TLS` → nombre de dominio personalizado para asociar el nombre de dominio principal a este nombre de dominio.

![](https://p.3ti.site/1725438658.avif)

### No Se Puede Acceder a `cloudflare R2` a Través De Un Nombre De Dominio Personalizado

Debido a que no se puede acceder al almacenamiento de objetos `cloudflare` `R2` mediante un nombre de dominio personalizado, se debe utilizar un almacenamiento de objetos de terceros para colocar archivos estáticos.

Aquí tomamos [backblaze.com](https://www.backblaze.com) como ejemplo para demostrar cómo vincular objetos de terceros y almacenarlos en `cloudflare` .

Cree un depósito en `backblaze.com` , cargue cualquier archivo, haga clic para explorar el archivo y obtenga el nombre de dominio de `Friendly URL` , que aquí es `f003.backblazeb2.com` .

![](//p.3ti.site/1725440783.avif)

Cambie el nombre de dominio de `CNAME` a `f003.backblazeb2.com` en `cloudflare` y habilite el proxy.

![](//p.3ti.site/1725440896.avif)

Modificar `cloudflare` de `SSL` → modo de cifrado, establecido en `Full`

![](//p.3ti.site/1725438572.avif)

Agregue la regla de conversión como se muestra a continuación, colóquela primero (la primera tiene la prioridad más baja):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` seleccione dinámico y modifique `your_bucketname` en `concat("/file/your_bucketname",http.request.uri.path)` al nombre de su depósito.

Además, en la regla de conversión `cloudflare` anterior, `index.html` se cambia a `file/your_bucketname/index.html` y otras configuraciones siguen siendo las mismas.

![](//p.3ti.site/1725441384.avif)