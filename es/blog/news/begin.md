---

brief: |
  Actualmente, se han desarrollado dos herramientas de línea de comandos de código abierto: i18 (herramienta de traducción de línea de comandos para Markdown) y i18n.site (generador de sitios estáticos multilingües)

---


# i18n.site · ¡Herramienta de traducción y creación de sitios Markdown ya disponible!

Después de casi medio año de desarrollo, [https://i18n.site](//i18n.site) ya está en línea.

Actualmente, se han desarrollado dos herramientas de línea de comandos de código abierto:

* `i18`: Herramienta de traducción en línea de comandos para Markdown
* `i18n.site`: Generador de sitios estáticos multilingües, **optimizado para mejorar la experiencia de lectura**

La traducción puede mantener perfectamente el formato `Markdown`. Puede identificar las modificaciones en los archivos y traducir únicamente aquellos que han sido modificados.

Las traducciones son editables; si se modifican el texto original, una nueva traducción automática no sobrescribirá las modificaciones manuales (si el párrafo original no ha sido modificado).

[Haga clic aquí para autorizar y seguir automáticamente el repositorio de código abierto de i18n.site en GitHub](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **y reciba un bono de $50**.

## Origen

En la era de Internet, el mundo entero es un mercado, y ser multilingüe y localizado es fundamental.

Las herramientas de gestión de traducción existentes resultan demasiado robustas. Para los programadores que se apoyan en la gestión de versiones mediante `git`, la línea de comandos sigue siendo su opción preferida.

Así, desarrollé la herramienta de traducción `i18` y, basado en ella, construí el generador de sitios estáticos multilingües `i18n.site`.

![](https://p.3ti.site/1723777556.avif)

Esto solo es el principio, hay mucho más por hacer.

Por ejemplo, integrar los sitios estáticos con redes sociales y suscripciones por correo electrónico para llegar a los usuarios de manera oportuna cuando se publiquen actualizaciones.

Por ejemplo, crear foros y sistemas de tickets multilingües que se puedan incrustar en cualquier página web, permitiendo una comunicación sin barreras.

## Código Abierto

Los [códigos de front-end, back-end y línea de comandos son todos de código abierto](https://i18n.site/i18n.site/c/src) (el modelo de traducción aún no es de código abierto).

La tecnología utilizada incluye:

Interfaz: [Svelte](https://svelte.dev), [Stylus](https://stylus-lang.com), [Pug](https://github.com/pugjs/pug), [Vite](https://github.com/vitejs/vite)

Línea de comandos y back-end: basado en Rust.

Back-end: [Axum](https://github.com/tokio-rs/axum), [Tower-HTTP](https://github.com/tower-rs/tower-http/releases).

Línea de comandos: [Motor de JS integrado boa_engine](https://docs.rs/boa_engine), [Base de datos integrada fjall](https://github.com/fjall-rs/fjall).

Servidor VPS: [Contabo](https://my.contabo.com)

Base de datos: [Kvrocks](https://kvrocks.apache.org), [MariaDB](https://mariadb.org).

Envío de correo: [Chasquid](https://github.com/albertito/chasquid) SMTP.

## Contáctenos

Cuando se lanzan nuevos productos, es normal encontrar problemas.

[groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) No dude en contactarnos a través del foro de Google: