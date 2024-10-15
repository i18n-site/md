# Versión del Proyecto

Tome el proyecto de demostración como ejemplo:

`en/demo2/v` es el número de versión actual del proyecto, el cual se mostrará al lado derecho del nombre del proyecto en el esquema de la barra lateral.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Aquí `en/` es el código de idioma correspondiente al idioma de origen de la traducción configurado en `.i18n/conf.yml`.

Si su idioma de origen no es el inglés, el archivo `v` debería colocarse en el directorio del proyecto correspondiente a su idioma de origen.

La funcionalidad para navegar por las versiones históricas de los documentos está siendo desarrollada.

Se recomienda cambiar el número de versión de los documentos solo para publicaciones de actualizaciones significativas (como `v1`, `v2`) para evitar que un exceso de versiones cause una索引ación desordenada en los motores de búsqueda.

## Utilice archivos `v` vacíos para dividir los índices de archivos de diferentes proyectos

En el proyecto de demostración, aparte de `en/demo2/v`, también se pueden observar archivos `v` vacíos en los directorios `en/blog` y `en/demo1`.

Los archivos `v` vacíos no se mostrarán en el esquema de la barra lateral, pero siempre que exista un archivo `v`, se generará un índice independiente para los archivos del directorio y sus subdirectorios.

Al dividir los índices de diferentes proyectos, se puede evitar una lentitud en el acceso causada por la carga simultánea del índice de todos los archivos del sitio.

Por ejemplo, el archivo de índice correspondiente a `blog` en el proyecto de demostración es: [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)