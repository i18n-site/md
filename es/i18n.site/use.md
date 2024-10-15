# ¡Instalar &

## Token de configuración

`i18n.site` incluye una herramienta de traducción `i18` integrada. Haga [clic aquí para consultar el documento de configuración de `i18`](/i18/use) para el token de acceso.

## Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Proyecto de demostración

Comencemos con un proyecto de demostración para aprender a utilizar `i18n.site`.

Primero, clonemos el repositorio de demostración y ejecutemos el comando de la siguiente manera:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Los usuarios de China continental pueden:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

El nombre del directorio del clon del código base de `demo.i18n.site` debe ser `md` para facilitar la previsualización local con `docker`.

### Traducción

Primero, acceda al directorio `md` y ejecute `i18n.site`, lo que traducirá `en` a `zh`.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Después de la ejecución, se generarán archivos de traducción y caché. Recuerde agregarlos al repositorio con `git add .` en `md`.

### Previsualización local

Instale e inicie `docker` (el usuario de `MAC` puede recomendar usar [orbstack](https://orbstack.dev) como runtime para `docker`).

Luego, acceda al directorio `docker` y ejecute `./up.sh`, y luego visite [https://127.0.0.1](https://127.0.0.1) para obtener una previsualización local.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Publicación de contenido

`i18n.site` utiliza una arquitectura [de aplicación de una sola página](https://developer.mozilla.org/docs/Glossary/SPA), y la página de entrada del sitio web y el contenido del sitio web se implementan de manera independiente.

Después de ejecutar la traducción anterior, los directorios `htm` y `v` se generarán en el directorio `md/out/dev`.

En este caso, `dev` significa que se construye en base al archivo de configuración `.i18n/htm/dev.yml`.

Directorio `dev`:

El directorio `htm` es la página de entrada del sitio web.

El directorio `v` contiene el contenido del sitio web con números de versión.

Para la previsualización local, no importa el número de versión y copiará todos los archivos al directorio `out/dev/v/0.1.0`.

Para la publicación oficial, los archivos modificados se copiarán en el directorio del nuevo número de versión.

#### Utilice -c para especificar el archivo de configuración

Diferentes archivos de configuración crearán directorios correspondientes en el directorio `out`.

Por ejemplo, `.i18n/htm/ol.yml` creará el directorio `out/ol`.

`dev.yml` y `ol.yml` son las configuraciones predeterminadas.

`dev` es la abreviatura de `development`, que indica el entorno de desarrollo, utilizado para la previsualización local y también es el archivo de configuración predeterminado.
`ol` es la abreviatura de `online`, que indica el entorno en línea, utilizado para la publicación oficial. También es el archivo de configuración predeterminado al publicar con el parámetro de línea de comando `-n` a `npm`.

También puede crear otros archivos de configuración. Utilice `--htm_conf` en la línea de comando para especificar el nombre del archivo de configuración que se utilizará:

Por ejemplo:
```
i18n.site --htm_conf yourConfig --save
```

Aquí `--save` representa la actualización del número de versión.

#### <a rel=id href="#npm" id="npm"></a> Publicación de contenido en npmjs.com

La publicación de contenido en [npmjs.com](//npmjs.com) es la solución recomendada por defecto (ver [Alta disponibilidad de front-end](/i18n.site/feature#ha)).

##### npm login & Publicar

Instale `nodejs`, inicie sesión con `npm login`.

Edite `md/.i18n/htm/ol.yml` y cambie `i18n.site` en `v: //unpkg.com/i18n.site` por su propio nombre de paquete `npm`.

Simplemente use el nombre del paquete desocupado en [npmjs.com](//npmjs.com). Usar el nombre de dominio del sitio web como nombre del paquete es una buena opción.

Al publicar según el paquete `npm`, **asegúrese de usar `//unpkg.com/`** como prefijo de `v:`. `i18n.site` ha optimizado especialmente el tiempo de caché de `/.v` en esta ruta de prefijo para lograr una visualización oportuna de las nuevas versiones.

Ejecute `i18n.site --npm` o `i18n.site -n` en el directorio `md` para traducir y publicar.

Si utiliza un entorno de integración continua para publicar, no es necesario instalar `nodejs`, simplemente copie el permiso de publicación y de inicio de sesión `~/.npmrc` en el entorno.

Si modifica el nombre del paquete de `v:` en `ol.yml`, **asegúrese de eliminar `.i18n/v/ol` primero** y luego publicar.

##### Servidor proxy de publicación de npm

Si los usuarios de China continental encuentran problemas de red y no pueden publicar paquetes `npm`, pueden configurar la variable de entorno `https_proxy` para configurar el servidor proxy.

Suponiendo que el puerto de su servidor proxy es `7890`, puede escribir:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Contenido autoalojado

Si desea autoalojar el contenido, primero edite `md/.i18n/htm/ol.yml` y cambie `v: //unpkg.com/i18n.site` a su prefijo de URL, como `v: //i18n-v.xxx.com`.

Ingrese al directorio `md` y ejecute

```
i18n.site --htm_conf ol --save
```

o abreviatura

```
i18n.site -c ol -s
```

Luego, configure el contenido en el directorio `md/out/ol/v` con la ruta del prefijo URL establecida en `v:`.

Finalmente, **configure el tiempo de caché de la ruta que termina en `/.v` a `1s`**; de lo contrario, no se podrá acceder inmediatamente al contenido recién publicado.

El tiempo de caché para otras rutas se puede establecer en un año o más para reducir solicitudes innecesarias.

##### Almacenar contenido en S3

Además de usar su propio servidor, otra opción común para autoalojar contenido es usar `S3` + `CDN`.

Puede usar [rclone](https://rclone.org) para iniciar sesión en el servidor `S3`, luego consultar y modificar el siguiente script y copiar solo los cambios incrementales a `S3` para cada versión.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Recuerde configurar `CDN` para que el tiempo de caché de la ruta que termina en `/.v` sea `1s`; de lo contrario, no se podrá acceder inmediatamente al contenido recién publicado.

### Publicación del sitio web

El sitio web se puede implementar en cualquier lugar, [github page](https://pages.github.com) y [cloudflare page](https://pages.cloudflare.com) son buenas opciones.

Dado que el sitio web utiliza una arquitectura [de aplicación de una sola página](https://developer.mozilla.org/docs/Glossary/SPA), recuerde reescribir las rutas URL que no contienen `. ` a `index.html`.

La página de entrada del sitio web solo debe implementarse una vez y no es necesario volver a implementarla para actualizaciones de contenido posteriores.

#### Implementación en github page

Primero [haga clic aquí para crear una organización en github](https://github.com/account/organizations/new?plan=free). A continuación, use el nombre de la organización `i18n-demo` como ejemplo.

Después, cree el repositorio `i18n-demo.github.io` en esta organización (reemplace `i18n-demo` con el nombre de la organización que creó):

![](https://p.3ti.site/1721098657.avif)

Al publicar el contenido del artículo anterior, se generó `out/ol/htm`. ¡Ingrese a este directorio y ejecute!

```
ln -s index.html 404.html
```


Dado que `github page` no admite la reescritura de rutas URL, se utiliza `404.html` en su lugar.

Luego ejecute el siguiente comando en el directorio `htm` (reemplace `i18n-demo/i18n-demo.github.io.git` con su propia dirección de repositorio):

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Después de insertar el código, espere a que la implementación de `github page` se ejecute correctamente (como se muestra a continuación) antes de poder acceder a él.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Para ver la página de demostración, consulte:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Implementación en cloudflare page

[cloudflare page](//pages.cloudflare.com) en comparación con `github page`, proporciona reescritura de rutas y es más amigable para China continental; se recomienda su uso.

El despliegue de `cloudflare page` generalmente se basa en el despliegue de `github page` anterior.

Cree un proyecto y vincule el repositorio `i18n-demo.github.io` anterior.

El proceso se muestra en la siguiente figura:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Haga clic en `Add Account` para otorgar acceso a la organización `i18n-demo`.

Si ha vinculado el repositorio de otra organización, es posible que deba hacer clic en `Add Account` dos veces para autorizar dos veces antes de que se muestre la nueva organización.

![](https://p.3ti.site/1721118306.avif)

A continuación, seleccione el repositorio `i18n-demo.github.io`, luego haga clic en `Begin setup` y siga los pasos siguientes con los valores predeterminados.

![](https://p.3ti.site/1721118490.avif)

Después de vincularlo por primera vez, deberá esperar unos minutos antes de poder acceder.

Después de la implementación, puede vincular un nombre de dominio personalizado.

![](https://p.3ti.site/1721119459.avif)

Después de vincular el nombre de dominio personalizado, vaya al nombre de dominio para configurar la reescritura de ruta de la aplicación de una sola página, como se muestra a continuación:

![](https://p.3ti.site/1721119320.avif)

Las reglas en la imagen de arriba son las siguientes. Reemplace `i18n.site` en la primera línea a continuación con el nombre de dominio que vinculó.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Además, configure las reglas de caché, como se muestra a continuación, y establezca la duración del caché en un mes.

![](https://p.3ti.site/1721125111.avif)

Cambie el nombre de dominio que coincide en el segundo paso de la imagen de arriba por el nombre de dominio que vinculó.

#### Optimización de la implementación de sitios web en China continental

Si desea obtener un mejor rendimiento de accesibilidad en el entorno de red de China continental, primero [registre un nombre de dominio](//beian.aliyun.com).

Luego, utilice el almacenamiento `out/ol/htm` y el `CDN` de los proveedores de nube en China continental para implementar el siguiente contenido.

Puede usar la informática de punta para reescribir la ruta y adaptarse a aplicaciones de una sola página. Por ejemplo, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) se puede configurar de esta manera:

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
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
![](https://p.3ti.site/1721121273.avif)

Dado que el registro `MX` y el registro `CNAME` no pueden coexistir, si desea recibir correos electrónicos de nombres de dominio al mismo tiempo, debe cooperar con el script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) para pasar del nivel `CNAME` al registro `A`.

Además, debido a que las tarifas de tráfico internacional de los proveedores de nube en China continental son relativamente costosas, para optimizar los costos, puede complementar la [resolución geográfica gratuita de Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) con el nombre de dominio personalizado de [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (como se muestra en la siguiente imagen) para lograr el desvío de tráfico ── el tráfico en China continental a través de Baidu Cloud `CDN`, y el tráfico internacional a través de Cloudflare.

![](https://p.3ti.site/1721119788.avif)

Estas soluciones de optimización de la implementación son más complejas y se presentarán en capítulos separados en el futuro.

#### Redirección de nombres de dominio genéricos

Si utiliza `i18n.site` para generar un sitio web como su sitio web principal, generalmente necesita configurar la redirección de nombres de dominio genéricos, es decir, redirigir el acceso de `*.xxx.com` (incluido `www.xxx.com`) a `xxx.com`.

Este requisito se puede lograr con la ayuda de Alibaba Cloud `CDN` `EdgeScript` ([documento en inglés](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Documento en chino](https://help.aliyun.com/zh/cdn/developer-reference/edgescript))

Agregue el nombre de dominio en [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) y apunte el nombre de dominio `*.xxx.com` a `CNAME` en Alibaba Cloud `CDN`.

![](https://p.3ti.site/1721122000.avif)

Por ejemplo, la configuración de redirección de nombres de dominio genéricos de `*.i18n.site` en la imagen de arriba es la siguiente:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Implementación con nginx

Agregue una configuración similar a la siguiente en el párrafo `server` de nginx. Cambie `/root/i18n/md/out/ol/htm` a la ruta de su propio proyecto `out/ol/htm`:

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Estructura del directorio

#### `public`

Archivos estáticos del sitio web, como `favicon.ico`, `robots.txt`, etc.

En este caso, los archivos de iconos se pueden generar con [realfavicongenerator.net](https://realfavicongenerator.net).

#### `.i18n`

Bajo el directorio `.i18n` se encuentran los archivos de configuración, el caché de traducción, etc. de `i18n.site`. Consulte el siguiente capítulo ["Configuración"](/i18n.site/conf) para obtener más detalles.

#### `en`

Directorio del idioma de origen, correspondiente al archivo de configuración `en` de `fromTo` en `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

¡Consulte la configuración de traducción [i18](/i18/use).