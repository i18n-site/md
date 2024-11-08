# Plantilla De Blog

`i18n/conf.yml` de `use: Blog` significa usar la plantilla del blog para renderizar.

El archivo `markdown` de la publicación del blog necesita configurar metainformación.

La metainformación debe estar al principio del archivo, comenzando con `---` y terminando con `---` El formato de la información de configuración en el medio es `YAML` .

La configuración de un archivo de demostración es la siguiente:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` indica el resumen del contenido, que se mostrará en la página de índice del blog.

Con la ayuda de `YMAL` ' | `Sintaxis, puedes escribir resúmenes de varias líneas.

La configuración del árbol de directorios en el lado derecho del blog también es `TOC` archivos (consulte el capítulo anterior. Solo los artículos enumerados en `TOC` aparecerán en el índice de la página de inicio del blog).

Los artículos que no contengan metainformación no aparecerán en la página de inicio del blog, pero pueden aparecer en el árbol de directorios de la derecha.

## Información Del Autor

La información del autor se puede escribir en la metainformación del artículo, como por ejemplo:

```yml
author: marlowe
```

Luego edite `author.yml` en el directorio del idioma de origen y agregue información del autor, como :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` y `title` son todos opcionales. Si no se establece `name` , el nombre de la clave (aquí `marlowe` ) se utilizará como `name` .

Ver proyecto de demostración [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) y [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Artículo Fijado

Si necesita fijar el artículo en la parte superior, ejecute `i18n.site` y edite los `xxx.yml` archivos debajo de `.i18n/data/blog` y cambie la marca de tiempo a un número negativo (se ordenarán varios números negativos de mayor a menor).