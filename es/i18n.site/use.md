# Instalar y desplegar

## Configuración del token

`i18n.site` incluye la herramienta de traducción `i18` integrada. Por favor, [consulte aquí la documentación de `i18` para configurar el token de acceso](/i18/use).

## Instalación

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Proyecto de demostración

Comencemos con el proyecto de demostración para aprender a usar `i18n.site`.

Primero, clonamos el repositorio de demostración y ejecutamos el siguiente comando:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Los usuarios de China continental pueden:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

El nombre del directorio del clon del repositorio `demo.i18n.site` debe ser `md` para facilitar la vista previa local con `docker`.

### Traducción

Primero, ingrese al directorio `md` y ejecute `i18n.site`, lo que traducirá `en` a `zh`.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Después de ejecutarlo, se generarán archivos de traducción y caché. Recuerde ejecutar `git add .` en el directorio `md` para agregarlos al repositorio.

### Vista previa local

Instale y inicie `docker` (los usuarios de `MAC` recomiendan usar [orbstack](https://orbstack.dev) como entorno de ejecución para `docker`).

Luego, ingrese al directorio `docker` y ejecute `./up.sh`, y luego visite [https://127.0.0.1](https://127.0.0.1) para obtener una vista previa local.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Publicar contenido

`i18n.site` utiliza una arquitectura de [aplicación de una sola página](https://developer.mozilla.org/docs/Glossary/SPA), donde la página de entrada del sitio web y el contenido del sitio web se implementan de forma independiente.

Después de ejecutar la traducción anterior, se generarán los directorios `htm` y `v` en el directorio `md/out/dev`.

Aquí, `dev` significa que se construyó en base al archivo de configuración `.i18n/htm/dev.yml`.

En el directorio `dev`:

El directorio `htm` contiene la página de entrada del sitio web.

El directorio `v` contiene el contenido del sitio web con números de versión.

En la vista previa local, no se tiene en cuenta el número de versión y se copiarán todos los archivos al directorio `out/dev/v/0.1.0`.

Para la publicación oficial, los archivos modificados se copiarán en el directorio del nuevo número de versión.

#### Usar -c para especificar el archivo de configuración

Diferentes archivos de configuración crearán directorios correspondientes en el directorio `out`.

Por ejemplo, `.i18n/htm/ol.yml` creará el directorio `out/ol`.

`dev.yml` y `ol.yml` son las configuraciones predeterminadas.

`dev` es la abreviatura de `development`, que indica el entorno de desarrollo, utilizado para la vista previa local y también es el archivo de configuración predeterminado.
`ol` es la abreviatura de `online`, que indica el entorno en línea, utilizado para la publicación oficial. También es el archivo de configuración predeterminado cuando se utilizan los parámetros de línea de comando `-n` para publicar en `npm`.

También puede crear otros archivos de configuración. Utilice `--htm_conf` en la línea de comando para especificar el nombre del archivo de configuración que se utilizará:

Por ejemplo:
```
i18n.site --htm_conf yourConfig --save
```

Aquí `--save` representa la actualización del número de versión.

#### <a rel=id href="#npm" id="npm"></a> Publicar contenido en npmjs.com

Publicar contenido en [npmjs.com](//npmjs.com) es la solución predeterminada recomendada (consulte [Alta disponibilidad de front-end](/i18n.site/feature#ha)).

##### npm login & Publicación

Instale `nodejs`, inicie sesión con `npm login`.

Edite `md/.i18n/htm/ol.yml` y cambie `i18n.site` en `v: //unpkg.com/i18n.site` por su propio nombre de paquete `npm`.

Simplemente use el nombre del paquete desocupado en [npmjs.com](//npmjs.com). Usar el nombre de dominio del sitio web como nombre del paquete es una buena opción.

Al publicar según el paquete `npm`, **asegúrese de usar `//unpkg.com/` para** el prefijo de `v:`. `i18n.site` ha optimizado especialmente el tiempo de caché de `/.v` en esta ruta de prefijo para lograr una visualización oportuna de las nuevas versiones.

Ejecute `i18n.site --npm` o `i18n.site -n` en el directorio `md` para traducir y publicar.

Si utiliza un entorno de integración continua para publicar, no es necesario instalar `nodejs`. Simplemente copie los permisos de publicación y de inicio de sesión `~/.npmrc` al entorno.

Si modifica el nombre del paquete de `v:` en `ol.yml`, **asegúrese de eliminar `.i18n/v/ol` primero** y luego publicarlo.

##### Proxy de publicación de npm

Los usuarios de China continental pueden encontrar problemas de red y no poder publicar paquetes `npm`. Pueden configurar la variable de entorno `https_proxy` para configurar el servidor proxy.

Suponiendo que el puerto de su servidor proxy es `7890`, puede escribir:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Contenido autoalojado

Si desea autoalojar el contenido, primero edite `md/.i18n/htm/ol.yml` y cambie `v: //unpkg.com/i18n.site` por su prefijo de URL, por ejemplo, `v: //i18n-v.xxx.com`.

Ingresar al directorio `md` y ejecutar:

```
i18n.site --htm_conf ol --save
```

O abreviado:

```
i18n.site -c ol -s
```

Luego, configure el contenido en el directorio `md/out/ol/v` con la ruta del prefijo URL establecida en `v`.

Finalmente, **configure el tiempo de caché de la ruta que termina en `/.v` a `1s`**; de lo contrario, no se podrá acceder inmediatamente al contenido recién publicado.

El tiempo de caché para otras rutas se puede establecer en un año o más para reducir solicitudes innecesarias.

##### Contenido alojado en S3

El autoalojamiento de contenido, además de usar su propio servidor, otra opción común es usar `S3` + `CDN`.

Puede utilizar [rclone](https://rclone.org) para iniciar sesión en el servidor `S3`, luego consultar y modificar el siguiente script, copiando solo los cambios incrementales a `S3` para cada versión.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Recuerde configurar `CDN` para que el tiempo de caché de la ruta que termina en `/.v` sea `1s`; de lo contrario, no se podrá acceder inmediatamente al contenido recién publicado.

### Publicar sitio web

El sitio web se puede implementar en cualquier lugar, [github page](https://pages.github.com) y [cloudflare page](https://pages.cloudflare.com) son buenas opciones.

Debido a que el sitio web utiliza una arquitectura de [aplicación de una sola página](https://developer.mozilla.org/docs/Glossary/SPA), recuerde reescribir las rutas URL que no contengan `. ` a `index.html`.

La página de entrada del sitio web solo debe implementarse una vez y no es necesario volver a implementarla para actualizaciones de contenido posteriores.

#### Publicar en github page

Primero [haga clic aquí para crear una organización en github](https://github.com/account/organizations/new?plan=free). A continuación, el nombre de la organización es `i18n-demo` como ejemplo.

Luego cree el repositorio `i18n-demo.github.io` en esta organización (reemplace `i18n-demo` con el nombre de la organización que creó):

![](https://p.3ti.site/1721098657.avif)

Al publicar el contenido anterior, se generó `out/ol/htm`. ¡Ingrese a este directorio y ejecútelo:

```
ln -s index.html 404.html
```


Debido a que `github page` no admite la reescritura de rutas URL, se utiliza `404.html` en su lugar.

Luego ejecute el siguiente comando en el directorio `htm` (recuerde reemplazar `i18n-demo/i18n-demo.github.io.git` con su propia dirección de repositorio):

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

#### Publicar en cloudflare page

[cloudflare page](//pages.cloudflare.com) en comparación con `github page` proporciona reescritura de rutas y es más amigable para China continental, se recomienda su uso.

El despliegue de `cloudflare page` generalmente se basa en el despliegue de `github page` anterior.

Cree un proyecto y vincule el repositorio `i18n-demo.github.io` anterior.

El proceso se muestra en la siguiente figura:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Haga clic en `Add Account` para otorgar acceso a la organización `i18n-demo`.

Si ha vinculado el repositorio de otra organización, es posible que deba hacer clic en `Add Account` dos veces para autorizar dos veces antes de que se muestre la nueva organización.

![](https://p.3ti.site/1721118306.avif)

A continuación, seleccione el repositorio `i18n-demo.github.io`, luego haga clic en `Begin setup` y utilice los valores predeterminados para los pasos siguientes.

![](https://p.3ti.site/1721118490.avif)

Después de vincularlo por primera vez, deberá esperar unos minutos antes de poder acceder.

Después de la implementación, puede vincular un nombre de dominio personalizado.

![](https://p.3ti.site/1721119459.avif)

Después de vincular el nombre de dominio personalizado, vaya al nombre de dominio para configurar la reescritura de ruta de la aplicación de una sola página, como se muestra a continuación:

![](https://p.3ti.site/1721119320.avif)

Las reglas en la imagen de arriba son las siguientes. Reemplace `i18n.site` en la primera línea a continuación con el nombre de dominio que vinculó.

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

Además, configure las reglas de caché, como se muestra a continuación, y establezca la duración del caché en un mes.

![](https://p.3ti.site/1721125111.avif)

Cambie el nombre de dominio que coincide en el segundo paso de la imagen de arriba por el nombre de dominio que vinculó.

#### Optimización de la implementación de sitios web en China continental

Si desea obtener un mejor rendimiento de accesibilidad en el entorno de red de China continental, primero [registre un nombre de dominio](//beian.aliyun.com).

Luego, utilice el almacenamiento `out/ol/htm` de los proveedores de nube en China continental + Implemente el siguiente contenido `CDN`.

Puede utilizar la informática de punta para reescribir la ruta y adaptarse a aplicaciones de una sola página. Por ejemplo, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) se puede configurar de esta manera:

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

Debido a que el registro `MX` y el registro `CNAME` no pueden coexistir, si desea recibir correos electrónicos de nombres de dominio al mismo tiempo, debe cooperar con el script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) hasta el nivel `CNAME` en el registro `A`.

Además, debido a que las tarifas de tráfico extranjero de los proveedores de nube en China continental son relativamente costosas, si desea optimizar los costos, puede usar [la resolución geográfica gratuita de Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) y el nombre de dominio personalizado [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (como se muestra a continuación) para lograrlo. Desvío de tráfico ── Tráfico en China continental Baidu Cloud `CDN`, el tráfico internacional cuesta cloudflare.

![](https://p.3ti.site/1721119788.avif)

Estas soluciones de optimización de la implementación son más complejas y se presentarán en capítulos separados en el futuro.

#### Redirección de nombres de dominio genéricos

Si usa `i18n.site` para generar un sitio web como su sitio web principal, generalmente necesita configurar la redirección de dominio panorámico, es decir, redirigir el acceso de `*.xxx.com` (incluido `www.xxx.com`) a `xxx.com`.

Este requisito se puede lograr con la ayuda de Alibaba Cloud `CDN` `EdgeScript` ([documento en inglés](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [documento en chino](https://help.aliyun.com/zh/cdn/developer-reference/edgescript))

Agregue el nombre de dominio en [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) y apunte el nombre de dominio `*.xxx.com` a `CNAME` en Alibaba Cloud `CDN`.

![](https://p.3ti.site/1721122000.avif)

Por ejemplo, la configuración de redirección de nombres de dominio panorámicos de `*.i18n.site` en la imagen de arriba es la siguiente:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Implementar con nginx

Agregue una configuración similar a la siguiente en el bloque `server` de nginx. Cambie `/root/i18n/md/out/ol/htm` a la ruta de su propio proyecto `out/ol/htm`:

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

Los archivos de iconos aquí se pueden generar con [realfavicongenerator.net](https://realfavicongenerator.net).

#### `.i18n`

Bajo el directorio `.i18n` se encuentran los archivos de configuración, el caché de traducción, etc. de `i18n.site`. Consulte el siguiente capítulo ["Configuración"](/i18n.site/conf) para obtener más detalles.

#### `en`

Directorio del idioma de origen, correspondiente al archivo de configuración `en` de `fromTo` en `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Consulte la configuración de traducción [i18](/i18/use).