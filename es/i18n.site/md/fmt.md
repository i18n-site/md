# Convención de formato Markdown

## Punto de anclaje

Los puntos de anclaje tradicionales en `Markdown` se basan en el contenido del texto, pero esta solución no es viable en contextos multilingües.

La solución acordada por `i18n.site` para puntos de anclaje consiste en insertar en `Markdown` texto del tipo `<a rel=id href="#xxx" id="xxx"></a>` para crear manualmente anclajes de posición.

`<a rel=id href="#xxx" id="xxx"></a>`, aquí `rel=id` define el estilo de la página para el anclaje; reemplace `xxx` con la abreviatura en inglés de su anclaje real.

Los anclajes se suelen agregar a los títulos, por ejemplo:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

El resultado de visualización es el siguiente:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Escribir `HTML` en `Markdown`

El código `pug` puede incrustar `HTML`.

El contenido dentro de los elementos `<pre>` no será traducido.

Combinando estos dos aspectos, es posible escribir `HTML` en `Markdown` de manera conveniente para lograr varios efectos de visualización.

Puede consultar la implementación en [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md), el código es el siguiente:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Tenga en cuenta que en el `<pre>` anterior también se definió `<style>`.