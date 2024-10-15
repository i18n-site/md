# Características del producto

## Traducciones integradas de `i18`

El programa incluye traducciones `i18`; para un uso específico, consulte [➔ Documentación de `i18`](/i18).

## Matching automático del idioma del navegador

El idioma predeterminado del sitio web se ajustará automáticamente al idioma del navegador.

Después de que el usuario cambie manualmente el idioma, se recordará su elección.

Código: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Adaptación para dispositivos móviles

Una experiencia de lectura perfecta también en dispositivos móviles.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Alta disponibilidad del front-end

`i18n.site` publica contenido del sitio en `npmjs.com` por defecto, utilizando [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) y otros `CDN` para cargar el contenido en `npm`.

Sobre esta base, se han añadido fuentes espejo en China continental, permitiendo a los usuarios chinos un acceso estable y logrando **alta disponibilidad del front-end**.

El principio es: usar [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) para interceptar solicitudes, reintentar en otros `CDN` si fallan, y activar de manera adaptativa la fuente de respuesta más rápida como el sitio de carga predeterminado.

Código: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Aplicación de una sola página, carga ultrarrápida

El sitio web utiliza una arquitectura de aplicación de una sola página, cambiando de página sin recargar y con una carga ultrarrápida.

## Optimizado para la experiencia de lectura

### Diseño de estilo cuidado

> La belleza de la simplicidad se refleja perfectamente en el diseño web de este sitio.
> Abandona las decoraciones innecesarias y presenta el contenido en su forma más pura.
> Como un hermoso poema, aunque breve, emociona el corazón.

<p style="text-align:right">── Autor de I18N.SITE</p>

[➔ Haga clic aquí para ver una lista de estilos](/i18n.site/md/styl).

### Suscripción multilingüe a `RSS`

![](//p.3ti.site/1725541085.avif)

La imagen superior muestra la suscripción a `i18n.site` en varios idiomas mediante [inoreader.com](//inoreader.com) a través de un feed `RSS`.

### Carga de fuentes en línea, compatible con chino

La página web utiliza por defecto [la Fuente Variable Bicromática de Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) y otras fuentes en línea para unificar la experiencia de lectura de los usuarios en diferentes plataformas.

Al mismo tiempo, para mejorar la velocidad de carga, las fuentes se segmentan según las estadísticas de frecuencia de las palabras.

Código: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Navegación superior que se oculta automáticamente

Al desplazarse hacia abajo, la navegación superior se ocultará automáticamente.

Al desplazarse hacia arriba, la navegación oculta reaparecerá.

Cuando el ratón no se mueve, se desvanecerá.

En la esquina superior derecha de la barra de navegación hay un botón de pantalla completa, diseñado para una experiencia de lectura de documentos inmersiva.

### Resaltado sincronizado del esquema del capítulo actual

Al desplazarse por el contenido de la derecha, el esquema de la izquierda resaltará simultáneamente el capítulo que se está leyendo.

## Detalles geniales

### Efectos del ratón

Coloque el ratón sobre el botón en el lado derecho de la navegación superior para ver efectos geniales.

### Pequeño fantasma en la página `404`

La página `404` tiene un pequeño fantasma flotante, cuyos ojos siguen al ratón, [➔ Haga clic aquí para verlo](/404)

## Código fuente abierto

[El código está abierto](/i18n.site/src); si está interesado en participar en el desarrollo, bienvenido a presentarse en [la lista de correo](//groups.google.com/u/2/g/i18n-site).

Existen muchos requisitos pequeños pero importantes y no urgentes. El equipo de desarrollo asignará tareas prácticas basadas en las tecnologías en las que seas competente y mejorará la documentación de desarrollo al mismo tiempo que asigna los requisitos.