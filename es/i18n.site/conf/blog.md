# Plantilla de blog

`i18n/conf.yml` con `use: Blog` indica que se utilizará la plantilla de blog para la renderización.

El archivo `markdown` de las entradas del blog debe incluir metadatos.

La metainformación debe encontrarse al inicio del archivo, iniciando con `---` y finalizando con `---`. El formato de la información de configuración que se encuentra entre ellos es `YAML`.

Un ejemplo de configuración de archivo es el siguiente:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` se refiere al resumen del contenido, el cual se mostrará en la página de índice del blog.

Con la ayuda de `YMAL` ' | `Sintaxis, puedes escribir resúmenes de varias líneas.

La configuración del árbol de directorios en el lateral derecho del blog también corresponde a los archivos `TOC` (véase el capítulo anterior). Solo las entradas enumeradas en `TOC` aparecerán en el índice de la página de inicio del blog.

Las entradas que no contengan metadatos no se mostrarán en la página de inicio del blog, pero pueden aparecer en el árbol de directorios lateral.

## Información del autor

En la metadata del artículo se puede incluir información del autor, por ejemplo:

```yml
author: marlowe
```

A continuación, edite el archivo `author.yml` en el directorio del idioma original y añada la información del autor, por ejemplo:

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name`, `url` y `title` son opcionales. Si no se define `name`, se usará el nombre de la clave (en este caso `marlowe`) como `name`.

Consulte el proyecto de demostración [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) y [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Artículo destacado

Para fijar un artículo en la parte superior, ejecute `i18n.site` y edite el archivo `xxx.yml` situado en `.i18n/data/blog`, cambiando la marca de tiempo a un valor negativo (los valores negativos se ordenarán de mayor a menor).