# i18n.site · ¡La herramienta de traducción y creación de sitios web Markdown ya está en línea!

Después de más de medio año de desarrollo, [https://i18n.site](//i18n.site) está en línea.

Actualmente, se han implementado dos herramientas de línea de comandos de código abierto:

* `i18` : Herramienta de línea de comandos para traducción Markdown
* `i18n.site` : Generador de sitios estáticos multilingües, **optimizado para la experiencia de lectura**

La traducción puede conservar perfectamente el formato `Markdown`. Reconoce las modificaciones en los archivos y traduce únicamente aquellos que han sido alterados.

Las traducciones son editables; si se modifican el texto original y se traduce nuevamente, las modificaciones manuales no se sobrescribirán (si el párrafo original no ha sido modificado).

[Haga clic aquí para autorizar y seguir automáticamente i18n.site github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) y **recibir un bono de $50** .

## Origen

En la era de Internet, el mundo entero es un mercado, y el multilingüismo y la localización son habilidades básicas.

Las herramientas de gestión de traducción actuales son demasiado complejas. Para los programadores que dependen de la gestión de versiones con `git`, prefieren aún la línea de comandos.

Así que desarrollé la herramienta de traducción `i18` y construí el generador de sitios estáticos multilingües `i18n.site` basado en la herramienta de traducción.

![](https://p.3ti.site/1723777556.avif)

Esto solo es el principio, hay mucho más que quiero hacer.

Por ejemplo, conectar el sitio de documentos estáticos con redes sociales y suscripciones por correo electrónico para llegar a los usuarios de manera oportuna al publicar actualizaciones.

Por ejemplo, integrar foros y sistemas de tickets multilingües en cualquier página web para que los usuarios puedan comunicarse sin barreras.

## Código Abierto

Todo el [código de front-end, back-end y línea de comandos está disponible como código abierto](https://i18n.site/i18n.site/c/src) (el modelo de traducción aún no está disponible como código abierto).

La tecnología utilizada es la siguiente:

Front-end: [Svelte](https://svelte.dev), [Stylus](https://stylus-lang.com), [Pug](https://github.com/pugjs/pug), [Vite](https://github.com/vitejs/vite)

Línea de comandos y back-end basados en Rust.

Back-end: [Axum](https://github.com/tokio-rs/axum), [Tower-HTTP](https://github.com/tower-rs/tower-http/releases).

Línea de comandos: [Motor JS integrado boa_engine](https://docs.rs/boa_engine), [Base de datos integrada fjall](https://github.com/fjall-rs/fjall).

Servidor VPS: [Contabo](https://my.contabo.com)

Base de datos: [Kvrocks](https://kvrocks.apache.org), [MariaDB](https://mariadb.org).

Envío de correo con SMTP: [Chasquid](https://github.com/albertito/chasquid).

## Contáctenos

Con el lanzamiento de nuevos productos, es inevitable encontrar problemas.

[groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) No dude en contactarnos a través del foro de Google: