# Convención De Formato MarkDown

## Punto De Anclaje

Los anclajes `MarkDown` tradicionales se generan en función del contenido del texto. En el caso de varios idiomas, esta solución no es factible.

`i18n.site` La solución de anclaje acordada es insertar texto similar a `<a rel=id href="#xxx" id="xxx"></a>` en `MarkDown` para crear manualmente el anclaje de posicionamiento.

`<a rel=id href="#xxx" id="xxx"></a>` , aquí `rel=id` define el estilo de página del punto de anclaje, reemplace `xxx` con la abreviatura en inglés del anclaje real.

Generalmente se agregan anclajes al título, como por ejemplo:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

El efecto de visualización es el siguiente:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` en `MarkDown`

`pug` `HTML` se puede incrustar en el código.

El contenido dentro del elemento `<pre>` no se traducirá.

Combinando estos dos puntos, puede escribir `MarkDown` `HTML` para lograr varios efectos de visualización.

Puede consultar la implementación en [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) el código es el siguiente :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Tenga en cuenta que `<style>` también se define en `<pre>`
