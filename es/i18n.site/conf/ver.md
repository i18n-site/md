# Versión Del Proyecto

Tome el proyecto de demostración como ejemplo:

`en/demo2/v` es el número de versión actual del proyecto, que se mostrará a la derecha del nombre del proyecto en el esquema de la barra lateral.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Aquí `en/` es el código de idioma correspondiente al idioma de origen de la traducción configurado por `.i18n/conf.yml` .

Si su idioma de origen no es el inglés, entonces el archivo `v` debe colocarse en el directorio del proyecto de su idioma de origen.

Se está desarrollando la capacidad de explorar versiones históricas de documentos.

Se recomienda modificar el número de versión del documento únicamente cuando se publiquen actualizaciones importantes (como `v1` , `v2` ) para evitar que demasiados números de versión causen desorden en las páginas indexadas por los motores de búsqueda.

## Utilice Archivos `v` Vacíos Para Dividir Los Índices De Archivos De Diferentes Proyectos

En el proyecto de demostración, además de `en/demo2/v` , también puede ver que hay `v` archivos vacíos en los directorios `en/blog` y `en/demo1` .

No se mostrará un `v` vacío en el esquema de la barra lateral, pero siempre que haya un archivo `v` , se generará un índice independiente para los archivos en el directorio y los subdirectorios.

Al dividir los índices de diferentes proyectos, puede evitar el acceso lento causado por cargar el índice de todos los archivos en todo el sitio a la vez.

Por ejemplo, el archivo de índice correspondiente a `blog` en el proyecto de demostración es : [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)