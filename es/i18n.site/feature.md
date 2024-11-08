# Características Del Producto

## `i18` Traducciones Integrado

El programa tiene traducción `i18` incorporada; consulte [➔ `i18` documento](/i18) para un uso específico.

## Coincidir Automáticamente Con El Idioma Del Navegador

El idioma predeterminado del sitio web coincidirá automáticamente con el idioma del navegador.

Después de que el usuario cambie manualmente de idioma, se recordará la elección del usuario.

Código [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## Adaptación De Terminales Móviles

También existe una experiencia de lectura perfecta en el teléfono móvil.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Alta disponibilidad frontal

`i18n.site` publicará el contenido del sitio en `npmjs.com` de forma predeterminada, con la ayuda de [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) y otros `CDN` contenidos cargados en `npm` .

Sobre esta base, se agregaron fuentes espejo de China continental para permitir a los usuarios chinos tener un acceso estable y lograr **una alta disponibilidad de front-end** .

El principio es: interceptar solicitudes con [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , reintentar solicitudes fallidas en otros `CDN` y habilitar de forma adaptativa el sitio de origen de respuesta más rápida como fuente de carga predeterminada.

Código [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## Aplicación De Una Sola Página, Carga Extremadamente Rápida

El sitio web adopta una arquitectura de aplicación de una sola página, sin actualización al cambiar de página y con una carga extremadamente rápida.

## Optimizado Para La Experiencia De Lectura.

### Estilo Bien Diseñado

> La belleza de la sencillez se interpreta perfectamente en el diseño web de este sitio web.
> Abandona la decoración superflua y presenta el contenido en estado puro.
> Como un hermoso poema, aunque breve, toca el corazón de las personas.

<p style="text-align:right">── I18N.SITE</p>

[➔ Haga clic aquí para ver una lista de estilos](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

La imagen de arriba muestra varios idiomas `RSS` usando [inoreader.com](//inoreader.com) suscripción `i18n.site` .

### Cargue Fuentes en Línea, Admita Chino

De forma predeterminada [, las fuentes rectangulares variables de doble eje de Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) [MiSans](https://hyperos.mi.com/font/zh/download/) otras fuentes en línea están habilitadas en la página web para unificar la experiencia de lectura de los usuarios en diferentes plataformas.

Al mismo tiempo, para mejorar la velocidad de carga, las fuentes se dividen según las estadísticas de frecuencia de palabras.

Código [github.com/i18n-site/font](https://github.com/i18n-site/font) :

### Navegación Superior Oculta Automáticamente

Desplácese hacia abajo y la navegación superior se ocultará automáticamente.

Desplácese hacia arriba y aparecerá nuevamente la navegación oculta.

Se desvanecerá cuando el mouse no se esté moviendo.

Hay un botón de pantalla completa en la esquina superior derecha de la barra de navegación para crear una experiencia inmersiva de lectura de documentos.

### Resaltado De Esquema Sincronizado Del Capítulo Actual

Al desplazarse por el contenido de la derecha, el esquema de la izquierda resaltará simultáneamente el capítulo que se está leyendo actualmente.

## Detalles Interesantes

### Efectos Del Ratón

Pase el mouse sobre el botón en el lado derecho de la navegación superior para ver efectos especiales interesantes.

### `404` Pequeño Fantasma

Hay un pequeño y lindo fantasma flotante en la página `404` , cuyos ojos se moverán con el mouse. [➔ Haga clic aquí para verlo](/404) .

## Código Fuente Abierto

[El código es de código abierto](/i18n.site/c/src) . Si está interesado en participar en el desarrollo, preséntese en [la lista de correo](//groups.google.com/u/2/g/i18n-site) .

Hay muchos requisitos pequeños que son importantes pero no urgentes. El equipo de desarrollo asignará tareas prácticas basadas en las tecnologías en las que usted es bueno y mejorará los documentos de desarrollo mientras asigna los requisitos.