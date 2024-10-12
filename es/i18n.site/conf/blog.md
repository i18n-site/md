# Plantilla de Blog

En `i18n/conf.yml`, `use: Blog` indica que se utilizará la plantilla de blog para la renderización.

Los archivos `markdown` de las entradas del blog deben configurar metainformación.

Las metainformaciones deben estar al principio del archivo, comenzando con `---` y terminando con `---`. El formato de la información de configuración intermedia es `YAML`.

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

`brief` representa el resumen del contenido, que se mostrará en la página de índice del blog.

Con la ayuda de `YMAL` '|`Sintaxis, puedes escribir resúmenes de varias líneas.

La configuración del árbol de directorios en el lado derecho del blog también corresponde a los archivos `TOC` (véase el capítulo anterior). Solo las entradas enumeradas en `TOC` aparecerán en el índice de la página principal del blog.

Las entradas del blog que no contengan metainformación no se mostrarán en la página principal del blog, pero pueden aparecer en el árbol de directorios derecho.

Si desea destacar una entrada en la parte superior, ejecute `i18n.site` y edite el archivo `xxx.yml` situado en `.i18n/data/blog`, cambiando la marca de tiempo a un número negativo (los números negativos se ordenarán de menor a mayor en valor absoluto).