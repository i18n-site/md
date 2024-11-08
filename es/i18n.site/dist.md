# Implementación Y en Línea

`i18n.site` adopta una arquitectura [de aplicación de una sola página](https://developer.mozilla.org/docs/Glossary/SPA) , y la página de entrada del sitio web y el contenido del sitio web se implementan de forma independiente.

Después de ejecutar la traducción anterior, los directorios `htm` y `v` se generarán en el directorio `md/out/dev` .

Aquí, `dev` significa que está construido en base al archivo de configuración `.i18n/htm/dev.yml` .

`dev` directorio :

El directorio `htm` es la página de entrada del sitio web.

El directorio `v` contiene contenido del sitio web con números de versión.

A la vista previa local no le importa el número de versión y copiará todos los archivos al directorio `out/dev/v/0.1.0` .

Para el lanzamiento oficial, los archivos modificados se copiarán en el directorio del nuevo número de versión.

## Especifique El Archivo De Configuración Con `-c`

Diferentes archivos de configuración crearán directorios correspondientes en el directorio `out` .

Por ejemplo, `.i18n/htm/main.yml` creará el directorio `out/main` .

`dev.yml` y `main.yml` son las configuraciones predeterminadas.

`dev` es la abreviatura de `development` , que indica el entorno de desarrollo, que se utiliza para la vista previa local y también es el archivo de configuración predeterminado.
`ol` es la abreviatura de `online` , que indica el entorno en línea, que se utiliza para el lanzamiento oficial. También es el archivo de configuración predeterminado cuando se utilizan los parámetros de línea de comando `-n` a `npm` para el lanzamiento.

También puede crear otros archivos de configuración. Utilice `--htm_conf` en la línea de comando para especificar el nombre del archivo de configuración que se utilizará:

Por ejemplo:
```
i18n.site --htm_conf dist --save
```

Aquí `--save` representa el número de versión de la actualización.

## <a rel=id href="#npm" id="npm"></a> Publicar contenido en npmjs.com

Publicar contenido en [npmjs.com](//npmjs.com) es la solución predeterminada recomendada (consulte [Alta disponibilidad de front-end](/i18n.site/feature#ha) ).

### npm Iniciar Sesión & Publicar

Instale `nodejs` , inicie sesión con `npm login` .

Edite `md/.i18n/htm/main.yml` y cambie el valor de [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` como su propio nombre de paquete `npm` Cualquier nombre de paquete desocupado en [npmjs.com](//npmjs.com)

Luego modifica `md/.i18n/htm/main.package.json`

Ejecute `i18n.site --npm` o `i18n.site -n` en el directorio `md` para traducir y publicar.

Si utiliza un entorno de integración continua para publicar, no es necesario instalar `nodejs` Simplemente copie los permisos de publicación y de inicio de sesión `~/.npmrc` al entorno.

Si modifica el nombre del paquete de `v:` en `main.yml` , **asegúrese de eliminar `.i18n/v/main` primero** y luego publicarlo.

#### Servidor Proxy Publicado Por npm

Si los usuarios de China continental encuentran problemas de red y no pueden publicar paquetes `npm` , pueden configurar la variable de entorno `https_proxy` para configurar el servidor proxy.

Suponiendo que el puerto de su servidor proxy es `7890` , puede escribir:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Contenido Autohospedado

Si desea autohospedar el contenido, primero edite `md/.i18n/htm/main.yml` y cambie `v: //unpkg.com/i18n.site` a su prefijo de URL, como `v: //i18n-v.xxx.com` .

Ingrese al directorio `md` y ejecute

```
i18n.site --htm_conf ol --save
```

o abreviatura

```
i18n.site -c ol -s
```

Luego, configure el contenido en el directorio `md/out/main/v` con la ruta del prefijo URL establecida en `v:` .

Finalmente, **configure el tiempo de caché de la ruta que termina en `/.v` a `1s`** ; de lo contrario, no se podrá acceder inmediatamente al contenido recién publicado.

El tiempo de caché para otras rutas se puede establecer en un año o más para reducir solicitudes innecesarias.

## Alojar Contenido en s3

Para autohospedar contenido, además de `CDN` su propio servidor, otra opción común es usar `S3` + .

Puede utilizar [rclone](https://rclone.org) para iniciar sesión en el servidor `S3` , luego consultar y modificar el siguiente script y copiar solo los cambios incrementales a `S3` para cada versión.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Recuerde configurar `CDN` para que el tiempo de caché de la ruta que termina en `/.v` sea `1s` ; de lo contrario, no se podrá acceder inmediatamente al contenido recién publicado.

## Publicar Sitio Web

El sitio web se puede implementar en cualquier lugar [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) son buenas opciones.

Debido a que el sitio web utiliza una arquitectura [de aplicación de una sola página](https://developer.mozilla.org/docs/Glossary/SPA) , recuerde reescribir las rutas URL que no contengan `. ` a `index.html` .

La página de entrada del sitio web solo debe implementarse una vez y no es necesario volver a implementarla para actualizaciones de contenido posteriores.

### Implementar en La Página De github

Primero [haga clic github para crear una organización](https://github.com/account/organizations/new?plan=free) . El siguiente nombre de la organización es `i18n-demo` como ejemplo.

Luego cree el almacén `i18n-demo.github.io` en esta organización (reemplace `i18n-demo` con el nombre de la organización que creó):

![](https://p.3ti.site/1721098657.avif)

Al publicar el contenido del artículo anterior, se generó `out/main/htm` ¡Ingrese a este directorio y ejecútelo :

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

Después de insertar el código, espere a que la implementación de `github page` se ejecute correctamente (como se muestra a continuación) antes de poder acceder a él.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Para ver la página de demostración, consulte:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Implementar en La Página De cloudflare

[cloudflare page](//pages.cloudflare.com) En comparación con `github page` , proporciona reescritura de rutas y es más amigable para China continental y se recomienda su uso.

El despliegue de `cloudflare page` generalmente se basa en el despliegue de `github page` anterior.

Cree un proyecto y vincule el almacén `i18n-demo.github.io` anterior.

El proceso se muestra en la siguiente figura:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Haga clic en `Add Account` para otorgar acceso a la organización `i18n-demo` .

Si ha vinculado el almacén de otra organización, es posible que deba hacer clic en `Add Account` dos veces para autorizar dos veces antes de que se muestre la nueva organización.

![](https://p.3ti.site/1721118306.avif)

A continuación, seleccione el almacén `i18n-demo.github.io` , luego haga clic en `Begin setup` y utilice los valores predeterminados para los pasos siguientes.

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

### Optimización De La Implementación De Sitios Web en China Continental

Si desea obtener un mejor rendimiento de accesibilidad en el entorno de red de China continental, primero [registre un nombre de dominio](//beian.aliyun.com) .

Luego, utilice el almacenamiento `out/main/htm` objetos de los proveedores de nube en China continental + Implemente el siguiente contenido `CDN` .

Puede utilizar la informática de punta para reescribir la ruta y adaptarse a aplicaciones de una sola página. Por ejemplo, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) se puede configurar de esta manera:

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

![](https://p.3ti.site/1721121273.avif)

Debido a que el registro `MX` y el registro `CNAME` no pueden coexistir, si desea recibir correos electrónicos de nombres de dominio al mismo tiempo, debe cooperar con el script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) hasta el nivel `CNAME` en el registro `A` .

Además, debido a que las tarifas de tráfico extranjero de los proveedores de nube en China continental son relativamente costosas, si desea optimizar los costos, puede usar [la resolución geográfica gratuita de Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) y el nombre de dominio personalizado [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (como se muestra a continuación) para lograrlo. Desvío de tráfico──Enrutamiento de tráfico en China continental Baidu Cloud `CDN` , el tráfico internacional cuesta cloudflare .

![](https://p.3ti.site/1721119788.avif)

Estas soluciones de optimización de la implementación son más complejas y se presentarán en capítulos separados en el futuro.

### Redirección De Nombres De Dominio Genéricos

Si usa `i18n.site` para generar un sitio web como su sitio web principal, generalmente necesita configurar la redirección de dominio panorámico, es decir, redirigir el acceso de `*.xxx.com` (incluido `www.xxx.com` ) a `xxx.com` .

Este requisito se puede lograr con la ayuda de Alibaba Cloud `CDN` `EdgeScript` ( [¡documento en inglés](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Documento en chino](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ).

Agregue el nombre de dominio en [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) y apunte el nombre de dominio `*.xxx.com` `CNAME` en Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Por ejemplo, la configuración de redirección de nombres de dominio panorámico de `*.i18n.site` en la imagen de arriba es la siguiente:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Implementar Con nginx

Agregue una configuración similar a la siguiente en el párrafo `server` de nginx Cambie `/root/i18n/md/out/main/htm` a la ruta de su propio proyecto `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Basado en `github action` Integración Continua

Puede consultar lo siguiente para configurar su `github action` :

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Como se puede ver en la configuración, este flujo de trabajo se activa al presionar hacia la rama `main` y la rama `dist` .

El flujo de trabajo utilizará el archivo de configuración correspondiente al nombre de la rama para publicar el documento. Aquí, se utilizarán `.i18n/htm/main.yml` y `.i18n/htm/dist.yml` como configuración de publicación respectivamente.

Recomendamos las siguientes mejores prácticas para el proceso de publicación de documentos:

Cuando los cambios se envían a la rama `main` , se activa la creación del documento y su implementación en la estación de vista previa (¡la estación de vista previa está disponible [github page](//pages.github.com) ).

Después de confirmar que el documento es correcto en el sitio de vista previa, el código se fusionará y se enviará a la rama `dist` , y la compilación e implementación oficiales estarán en línea.

Por supuesto, implementar el proceso anterior requiere escribir más configuraciones.

Puede consultar el proyecto real para obtener secuencias de comandos del flujo de [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) .

`secrets.I18N_SITE_TOKEN` y `secrets.NPM_TOKEN` en la configuración requieren que configure variables secretas en el código base.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token) Obtener.

`NPM_TOKEN` es el token de publicación del paquete `npm` en la configuración. [npmjs.com](//npmjs.com) y cree un token con permisos de publicación (como se muestra a continuación).

![](//p.3ti.site/1730969906.avif)


## Estructura Del Directorio

### `public`

Archivos estáticos del sitio web, como `favicon.ico` , `robots.txt` , etc.

Los archivos de iconos aquí se pueden generar con [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Bajo el directorio `.i18n` se encuentran los archivos de configuración, el caché de traducción, etc. de `i18n.site` Consulte el siguiente capítulo ["Configuración"](/i18n.site/conf) para obtener más detalles.

### `en`

Directorio del idioma de origen, correspondiente al archivo de configuración `en` de `fromTo` en `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

¡Consulte la configuración de traducción [i18](/i18/use)