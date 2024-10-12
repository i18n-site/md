---

brief: |
  Actualmente, se han desarrollado dos herramientas de línea de comandos de código abierto: i18 (herramienta de traducción de MarkDown desde la línea de comandos) y i18n.site (generador de sitios estáticos multilingües)

---


# i18n.site · ¡Herramienta de traducción y creación de sitios web en MarkDown ya disponible!

Después de casi medio año de desarrollo, [https://i18n.site](//i18n.site) ya está en línea.

Actualmente, se han desarrollado dos herramientas de línea de comandos de código abierto:

* `i18`: Herramienta de traducción de MarkDown desde la línea de comandos
* `i18n.site`: Generador de sitios estáticos multilingües, **optimizado para mejorar la experiencia de lectura**

La traducción puede conservar perfectamente el formato `Markdown`. Es capaz de identificar las modificaciones en los archivos y traducir únicamente aquellos que han sido alterados.

Las traducciones son editables; si se modifican el texto original y se traduce nuevamente, las correcciones manuales no se sobrescribirán (si el párrafo original no ha sido modificado).

[Accede aquí para autorizar el seguimiento automático del repositorio de código abierto de i18n.site en GitHub](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **y recibe un bono de $50**.

## Origen

En la era de Internet, el mercado es global y el multilingüismo y la localización son habilidades esenciales.

Las herramientas de gestión de traducción actuales son demasiado complejas, mientras que los programadores que utilizan `git` para el control de versiones prefieren las herramientas de línea de comandos.

Así, desarrollé la herramienta de traducción `i18` y, basado en ella, construí el generador de sitios estáticos multilingües `i18n.site`.

![](https://p.3ti.site/1723777556.avif)

Esto solo es el principio, hay muchos más proyectos en mente.

Por ejemplo, integrar los sitios estáticos con redes sociales y suscripciones por correo electrónico para llegar a los usuarios de manera oportuna con las actualizaciones.

Por ejemplo, crear foros y sistemas de tickets multilingües que se puedan incrustar en cualquier página web, facilitando la comunicación sin barreras.

## Código Abierto

Todo el [código del front-end, back-end y de línea de comandos está disponible como código abierto](https://i18n.site/i18n.site/c/src) (el modelo de traducción no está disponible como开源 aún).

La tecnología utilizada incluye:

Interfaz: [Svelte](https://svelte.dev), [Stylus](https://stylus-lang.com), [Pug](https://github.com/pugjs/pug), [Vite](https://github.com/vitejs/vite)

Línea de comandos y back-end: basado en Rust.

Back-end: [Axum](https://github.com/tokio-rs/axum), [Tower-HTTP](https://github.com/tower-rs/tower-http/releases).

Línea de comandos: [Motor de JavaScript integrado boa_engine](https://docs.rs/boa_engine), [Base de datos integrada fjall](https://github.com/fjall-rs/fjall).

Servidores VPS: [Contabo](https://my.contabo.com)

Base de datos: [Kvrocks](https://kvrocks.apache.org), [MariaDB](https://mariadb.org).

Envío de correo: [Chasquid](https://github.com/albertito/chasquid) SMTP.

## Contáctenos

Con el lanzamiento de nuevos productos, siempre habrá algunos problemas.

[groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) No dude en contactarnos a través del foro de Google: