---

brief: |
  Actualmente, se han implementado dos herramientas de línea de comandos de código abierto: i18 (herramienta de traducción de línea de comandos MarkDown) e i18n.site (generador de sitios de documentos estáticos en varios idiomas)

---


# i18n.site · ¡La Herramienta De Traducción Y Creación De Sitios Web MarkDown Ya Está en Línea!

Después de más de medio año de desarrollo, [https://i18n.site](//i18n.site) está en línea.

Actualmente, se implementan dos herramientas de línea de comandos de código abierto:

* `i18` : MarkDown Herramienta de traducción de línea de comando
* `i18n.site` : Generador de sitios de documentos estáticos en varios idiomas, **optimizado para la experiencia de lectura**

La traducción puede mantener perfectamente el formato `Markdown` . Puede identificar modificaciones de archivos y solo traducir archivos con cambios.

La traducción es editable; si modifica el texto original y lo traduce automáticamente, las modificaciones manuales de la traducción no se sobrescribirán (si este párrafo del texto original no ha sido modificado).

[➤ Haga clic aquí para autorizar y seguir automáticamente i18n.site biblioteca github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) y **recibir un bono $50** .

## Origen

En la era de Internet, el mundo entero es un mercado y el multilingüismo y la localización son habilidades básicas.

Las herramientas de gestión de traducción existentes son demasiado pesadas. Para los programadores que dependen de la gestión de la versión `git` , todavía prefieren la línea de comandos.

Entonces, desarrollé una herramienta de traducción `i18` y construí un generador de sitios estáticos en varios idiomas `i18n.site` basado en la herramienta de traducción.

![](https://p.3ti.site/1723777556.avif)

Esto es sólo el comienzo, hay mucho más por hacer.

Por ejemplo, al conectar el sitio de documentos estáticos con las redes sociales y las suscripciones por correo electrónico, se puede llegar a los usuarios a tiempo cuando se publican las actualizaciones.

Por ejemplo, se pueden integrar foros en varios idiomas y sistemas de órdenes de trabajo en cualquier página web, lo que permite a los usuarios comunicarse sin barreras.

## Código Abierto

Los [códigos de front-end, back-end y línea de comandos son todos de código abierto](https://i18n.site/i18n.site/c/src) (el modelo de traducción aún no es de código abierto).

La pila de tecnología utilizada es la siguiente:

Interfaz [svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

La línea de comando y el backend se desarrollan en base a Rust.

extremo posterior [axum](https://github.com/tokio-rs/axum) , [tower-http](https://github.com/tower-rs/tower-http/releases) .

Línea de comando [incorporada js Motor boa_engine](https://docs.rs/boa_engine) , [base de datos incorporada fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

base de datos [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

Enviar correo [chasquid](https://github.com/albertito/chasquid) SMTP

## Contáctenos

Cuando se lanzan nuevos productos, los problemas son inevitables.

[groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) No dudes en contactarnos a través del Foro de Google :