# ¡Instalar &

## Token De Configuración

`i18n.site` La herramienta de traducción `i18` está integrada, [haga clic aquí para consultar el documento `i18` para configurar el token de acceso](/i18/use) .

## Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Proyecto De Demostración

¡Comencemos con un proyecto de demostración y aprendamos a usarlo `i18n.site`

Primero clonamos el repositorio de demostración y ejecutamos el comando de la siguiente manera:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Los usuarios de China continental pueden:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` El nombre del directorio del clon base del código debe ser `md` para facilitar la vista previa local con `docker` .

### Traducir

Primero, ingrese al directorio `md` y ejecute `i18n.site` , lo que traducirá `en` a `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Después de la ejecución, se generarán archivos de traducción y caché. Recuerde agregarlos al repositorio `git add . ` en `md` directorio.

### Vista Previa Local

¡Instálelo y comience `docker` ( `MAC` recomiendan usar [orbstack](https://orbstack.dev) como tiempo de ejecución de `docker` ).

Luego, ingrese al directorio `docker` y ejecute `./up.sh` , y luego visite [https://127.0.0.1](https://127.0.0.1) para obtener una vista previa local.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Publicar Contenido

`i18n.site` Adopta una arquitectura [de aplicación de una sola página](https://developer.mozilla.org/docs/Glossary/SPA) , y la página de entrada del sitio web y el contenido del sitio web se implementan de forma independiente.

Después de ejecutar la traducción anterior, se generarán los directorios `htm` y `v` en el `md/out/dev` .

Aquí, `dev` indica que está construido en base al archivo `.i18n/htm/dev.yml` .

`dev` Bajo contenidos :

`htm` Debajo del directorio está la página de entrada del sitio web.

`v` El directorio contiene el contenido del sitio web con el número de versión.

La vista previa local copiará todos los archivos al directorio `out/dev/v/0.1.0` independientemente del número de versión.

Para el lanzamiento oficial, los archivos modificados se copiarán en el directorio del nuevo número de versión.

#### Utilice -c Para Especificar El Archivo De Configuración

Diferentes archivos de configuración crearán directorios correspondientes en `out` directorio.

Por ejemplo, `.i18n/htm/ol.yml` creará un directorio `out/ol` .

`dev.yml` y `ol.yml` son las configuraciones predeterminadas.

`dev` es la abreviatura de `development` , que representa el entorno de desarrollo, se utiliza para la vista previa local y también es el archivo de configuración predeterminado.
`ol` es la abreviatura de `online` , que representa el entorno en línea, se usa para el lanzamiento oficial y también es el archivo de configuración predeterminado al publicar en `npm` usando el parámetro de línea de comando `-n` .

También puede crear otros archivos de configuración. Utilice `--htm_conf` en la línea de comando para especificar el nombre del archivo de configuración:

Por ejemplo:
```
i18n.site --htm_conf yourConfig --save
```

Aquí `--save` indica el número de versión de la actualización.

#### <a rel=id href="#npm" id="npm"></a> Publicar contenido en npmjs.com

Publicar contenido en [npmjs.com](//npmjs.com) es la solución predeterminada recomendada (consulte [Alta disponibilidad de front-end](/i18n.site/feature#ha) ).

##### npm login & Liberar

¡Instalar `nodejs` use `npm login` para iniciar sesión.

¡Editar `md/.i18n/htm/ol.yml` cambie `i18n.site` en `v: //unpkg.com/i18n.site` por el suyo propio `npm` nombre del paquete.

Simplemente use el nombre del paquete desocupado en [npmjs.com](//npmjs.com) . Usar el nombre de dominio del sitio web como nombre del paquete es una buena opción.

Al publicar según el paquete `npm` , **asegúrese de utilizar `//unpkg.com/`** como prefijo del valor `v:` . El tiempo de caché `i18n.site` bajo esta ruta de prefijo `/.v` se ha optimizado especialmente para permitir la visualización oportuna de nuevas versiones.

Ejecute `i18n.site --npm` o `i18n.site -n` en el directorio `md` para traducir y publicar.

Si utiliza un entorno de integración continua para publicar, no es necesario instalarlo `nodejs` Simplemente copie el `~/.npmrc` permiso publicado y registrado en el entorno.

Si modifica el nombre del paquete en `v:` `ol.yml` , **asegúrese de eliminar `.i18n/v/ol` primero** y luego publicarlo.

##### Servidor Proxy Publicado Por npm

Si los usuarios de China continental encuentran problemas de red y no pueden publicar el paquete `npm` pueden configurar la variable de entorno `https_proxy` para configurar el servidor proxy.

Suponiendo que el puerto de su servidor proxy es `7890` puede escribir:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Contenido Autohospedado

Si desea autohospedar el contenido, primero edite `md/.i18n/htm/ol.yml` y cambie `v: //unpkg.com/i18n.site` por el prefijo de su URL, como `v: //i18n-v.xxx.com` .

Ingrese al directorio `md` y ejecute

```
i18n.site --htm_conf ol --save
```

o abreviatura

```
i18n.site -c ol -s
```

Luego, configure el contenido en el directorio `md/out/ol/v` con la ruta del prefijo URL establecida en `v:` .

Finalmente, **configure el tiempo de caché de la ruta que termina en `/.v` en `1s`** ; de lo contrario, no se podrá acceder inmediatamente al contenido recién publicado.

El tiempo de caché para otras rutas se puede establecer en un año o más para reducir solicitudes innecesarias.

##### Alojar Contenido en s3

Para autohospedar contenido, además de utilizar + propio `CDN` , otra opción común es utilizar `S3`

Puede utilizar el servidor [rclone](https://rclone.org) Iniciar sesión `S3` , luego consultar y modificar el script a continuación y copiar solo los cambios incrementales en `S3` cada vez que publique.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Recuerde configurar `CDN` para que el tiempo de caché de la ruta que termina en `/.v` sea `1s` ; de lo contrario, no podrá acceder al contenido recién publicado de inmediato.

### Publicar Sitio Web

El sitio web se puede implementar en cualquier [github page](https://pages.github.com) y [cloudflare page](https://pages.cloudflare.com) son buenas opciones.

Debido a que el sitio web adopta la arquitectura de [una aplicación de una sola página](https://developer.mozilla.org/docs/Glossary/SPA) , recuerde reescribir la ruta URL que no `. ` `index.html` .

La página de entrada del sitio web solo debe implementarse una vez y no es necesario volver a implementarla para actualizaciones de contenido posteriores.

#### Implementar en La Página De github

Primero [haga clic github para crear una organización](https://github.com/account/organizations/new?plan=free) . El siguiente nombre de la organización `i18n-demo` como ejemplo.

Luego cree un almacén en esta `i18n-demo.github.io` (reemplace `i18n-demo` con el nombre de la organización que creó):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Al publicar el contenido del artículo anterior, se ha generado `out/ol/htm` ¡Ingrese a este directorio y ejecútelo :

```
ln -s index.html 404.html
```


Debido a que `github page` no admite la reescritura de rutas URL, se utiliza `404.html` en su lugar.

Luego ejecute el siguiente comando en el directorio `htm` (recuerde reemplazar `i18n-demo/i18n-demo.github.io.git` con su propia dirección de almacén) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Después de insertar el código, espere a que la implementación de `github page` se ejecute correctamente (como se muestra a continuación) y luego podrá acceder a él.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Para ver la página de demostración, consulte:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Implementar en La Página De cloudflare

[cloudflare page](//pages.cloudflare.com) En comparación con `github page` , proporciona reescritura de rutas y es más amigable para China continental y se recomienda su uso.

`cloudflare page` La implementación generalmente se basa en la implementación de `github page` anterior.

¡Crea un proyecto y vincula el almacén anterior `i18n-demo.github.io`

El proceso se muestra en la siguiente figura:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Haga clic en `Add Account` para otorgar acceso a la `i18n-demo` .

Si ha vinculado el almacén de otra organización, es posible que deba hacer clic `Add Account` veces para autorizarlo dos veces antes de que se muestre la nueva organización.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Luego seleccione `i18n-demo.github.io` Almacén, luego haga clic en `Begin setup` y use los valores predeterminados para los pasos siguientes.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Después de vincularlo por primera vez, deberá esperar unos minutos antes de poder acceder.

Después de la implementación, puede vincular un nombre de dominio personalizado.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Después de vincular el nombre de dominio personalizado, vaya al nombre de dominio para configurar la reescritura de ruta de la aplicación de una sola página, como se muestra a continuación:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Las reglas en la imagen de arriba son las siguientes. ¡Reemplace `i18n.site` en la primera línea a continuación con el nombre de dominio vinculado a usted.

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

<img alt="" src="https://p.3ti.site/1721125111.avif">

Cambie el nombre de dominio que coincide en el segundo paso de la imagen de arriba por el nombre de dominio que vinculó.

#### Optimización De La Implementación De Sitios Web en China Continental

Si desea obtener un mejor rendimiento de accesibilidad en el entorno de red de China continental, primero [registre un nombre de dominio](//beian.aliyun.com) .

Luego, utilice el almacenamiento de objetos de los proveedores de nube en China continental + `CDN` Implemente `out/ol/htm` siguiente contenido!

Puede utilizar la informática de punta para reescribir la ruta y adaptarse a aplicaciones de una sola página, como [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Se puede configurar de esta manera:

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
<img alt="" src="https://p.3ti.site/1721121273.avif">

Debido a que los registros `MX` y `CNAME` no pueden coexistir, si desea recibir correos electrónicos de nombres de dominio al mismo tiempo, debe cooperar con el script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) para acoplar `CNAME` en `A` record.

Además, debido a que las tarifas de tráfico extranjero de los proveedores de nube en China continental son relativamente costosas, si desea optimizar los costos, puede usar [la resolución geográfica gratuita de Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) y el nombre de dominio personalizado [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (como se muestra a continuación) para lograrlo. Desvío de tráfico──¡Tráfico en China continental Baidu Cloud `CDN` el tráfico internacional cuesta cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Estas soluciones de optimización de la implementación son más complejas y se presentarán en capítulos separados en el futuro.

#### Redirección De Nombres De Dominio Genéricos

Si utiliza `i18n.site` para generar un sitio web como su sitio web principal, normalmente necesitará configurar la redirección de dominio completo, es decir, redirigir el acceso `*.xxx.com` (incluido `www.xxx.com` ) a `xxx.com` .

`EdgeScript` Este requisito se puede lograr con la ayuda de Alibaba Cloud `CDN` (¡ [Documento en inglés](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Documento en chino](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ).

Agregue un nombre de dominio en [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) y apunte `*.xxx.com` nombre de dominio a `CNAME` de Alibaba Cloud `CDN` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Por ejemplo, la configuración de redirección de nombres de dominio pan de `*.i18n.site` en la imagen de arriba es la siguiente:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Implementar Con nginx

Agregue una configuración similar a la siguiente en `server` nginx donde `/root/i18n/md/out/ol/htm` cámbiela a la ruta de su propio proyecto `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Estructura De Directorios

#### Público

Archivos estáticos del sitio web, como `favicon.ico` `robots.txt` , etc.

Los archivos de iconos aquí se pueden generar con [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Debajo del directorio se encuentran los archivos de configuración de `i18n.site` , el caché de traducción, etc. Consulte el siguiente capítulo ["Configuración"](/i18n.site/conf) para obtener más detalles.

#### Es

Directorio del idioma de origen, correspondiente `.i18n/conf.yml` `fromTo` `en` en el archivo de configuración

```yaml
i18n:
  fromTo:
    en: zh
```

¡Consulte la configuración de traducción [i18](/i18/use)

