# Versión Del Proyecto

Tome el proyecto de demostración como ejemplo:

`en/demo2/v` es el número de versión actual del proyecto, que se mostrará a la derecha del nombre del proyecto en el esquema de la barra lateral.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Aquí `en/` el código de idioma correspondiente al `.i18n/conf.yml` idioma fuente de traducción configurado.

Si su idioma de origen no es el inglés, entonces el archivo `v` debe colocarse en el directorio del proyecto de su idioma de origen. 

Se está desarrollando la capacidad de explorar versiones históricas de documentos.

Se recomienda modificar únicamente el número de versión del documento cuando se publiquen actualizaciones importantes (como `v1` , `v2` ) para evitar saturar las páginas indexadas por los motores de búsqueda debido a demasiados números de versión.

## Utilice Archivos `v` Para Dividir Índices De Archivos Para Diferentes Proyectos

En el proyecto de demostración, además de `en/demo2/v` , también puede ver que el contenido de `en/blog` y `en/demo1` están vacíos `v` files.

¡Vacío `v` no se mostrará en el esquema de la barra lateral, pero mientras exista el archivo `v` , se generará un índice independiente para los archivos en el directorio y los subdirectorios.

Al dividir los índices de diferentes proyectos, puede evitar el acceso lento causado por cargar el índice de todos los archivos en todo el sitio a la vez.

Por ejemplo, en el proyecto de demostración `blog` el archivo de índice correspondiente es [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :

