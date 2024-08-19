# Características del producto

## Traducción integrada de `i18`

El programa incluye traducción `i18`; para más detalles, consulta [➔ Documentación de `i18`](/i18).

## Matching automático del idioma del navegador

El idioma predeterminado del sitio web se ajustará automáticamente al idioma del navegador.

Después de que el usuario cambie manualmente el idioma, se recordará su elección.

Código relacionado: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Adaptación para dispositivos móviles

La experiencia de lectura en dispositivos móviles es perfecta.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Alta disponibilidad del frontend

`i18n.site` publica contenido del sitio en `npmjs.com` por defecto, utilizando [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) y otros `CDN` para cargar el contenido en `npm`.

Sobre esta base, se han añadido fuentes espejo en China continental para proporcionar un acceso estable a los usuarios chinos, logrando así **alta disponibilidad del frontend**.

El principio es: utilizar el [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) para interceptar solicitudes, reintentar las solicitudes fallidas en otros `CDN` y activar de manera adaptativa el origen de respuesta más rápida como fuente de carga predeterminada.

Código relacionado: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Aplicación de una sola página, carga ultrarrápida

El sitio web utiliza una arquitectura de aplicación de una sola página, lo que permite cambiar de página sin recargar y ofrece una carga ultrarrápida.

## Optimizado para la experiencia de lectura

### Diseño de estilo cuidado

> La belleza de la simplicidad se refleja perfectamente en el diseño web de este sitio.
> Abandona el exceso de ornamento para presentar el contenido en su forma más pura.
> Como un hermoso poema, aunque breve, emociona el corazón.

<p style="text-align:right">── Autor de I18N.SITE</p>

[➔ Haga clic aquí para ver una lista de estilos](/i18n.site/md/styl).

### Carga de fuentes en línea, compatible con chino

La página web utiliza por defecto [Alimama Double Axial Variable Rectangle Font](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) y otras fuentes en línea para unificar la experiencia de lectura de los usuarios en diferentes plataformas.

Mientras tanto, para mejorar la velocidad de carga, las fuentes se han fragmentado según las estadísticas de frecuencia de las palabras.

Código relacionado: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### La navegación superior se oculta automáticamente

Al desplazarse hacia abajo, la navegación superior se ocultará automáticamente.

Al desplazarse hacia arriba, la navegación oculta volverá a aparecer.

Cuando el ratón no se mueve, la navegación se desvanecerá.

En la esquina superior derecha de la barra de navegación hay un botón de pantalla completa que ofrece una experiencia de lectura de documentos inmersiva.

### El esquema se resalta sincrónicamente con el capítulo actual

Al desplazarse por el contenido de la derecha, el esquema de la izquierda resalta simultáneamente el capítulo que se está leyendo.

## Detalles geniales

### Efectos del ratón

Si pasas el ratón sobre el botón de la derecha en la navegación superior, verás efectos geniales.

### Pequeño fantasma en la página `404`

La página `404` tiene un pequeño fantasma flotante que sigue el cursor del ratón. [➔ Haga clic aquí para verlo](/404)

## Código fuente abierto

[El código está abierto](/i18n.site/src); si estás interesado en participar en el desarrollo, welcome a presentarte en [la lista de correo](//groups.google.com/u/2/g/i18n-site).

Hay muchos requisitos pequeños pero importantes y no urgentes. El equipo de desarrollo asignará tareas de práctica según tus habilidades técnicas y mejorará la documentación de desarrollo al mismo tiempo que asigna los requisitos.