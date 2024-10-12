# Versión del Proyecto

Tome el proyecto de demostración como ejemplo:

`en/demo2/v` es la versión actual del proyecto, que se mostrará al lado derecho del nombre del proyecto en el panel lateral.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Aquí `en/` es el código de idioma correspondiente al idioma de origen configurado en `.i18n/conf.yml`.

Si su idioma de origen no es el inglés, el archivo `v` debe colocarse en el directorio del proyecto correspondiente a su idioma de origen.

La funcionalidad para navegar por las versiones históricas de los documentos está siendo desarrollada.

Se recomienda cambiar el número de versión de los documentos solo para publicaciones de actualizaciones significativas (como `v1`, `v2`) para evitar que demasiados números de versión provoquen un desorden en las páginas indexadas por los motores de búsqueda.

## Utilice archivos `v` vacíos para dividir el índice de archivos de diferentes proyectos

En el proyecto de demostración, aparte de `en/demo2/v`, también se pueden ver archivos `v` vacíos en los directorios `en/blog` y `en/demo1`.

Los archivos `v` vacíos no se mostrarán en el panel lateral, pero siempre que exista un archivo `v`, se generará un índice independiente para los archivos en ese directorio y sus subdirectorios.

Al dividir el índice de diferentes proyectos, se puede evitar una lentitud en el acceso causada por la carga simultánea del índice de todos los archivos del sitio.

Por ejemplo, el archivo de índice correspondiente a `blog` en el proyecto de demostración es: [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)