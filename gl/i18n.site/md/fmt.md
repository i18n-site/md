# Convención De Formato MarkDown

## Punto De Ancoraxe

As áncoras `MarkDown` xéranse en función do contido do texto. No caso de multilingüe, esta solución non é viable.

A solución `i18n.site` áncora acordada é inserir texto similar a `<a rel=id href="#xxx" id="xxx"></a>` en `MarkDown` para crear manualmente a áncora de posicionamento.

`<a rel=id href="#xxx" id="xxx"></a>` aquí `rel=id` define o estilo de páxina do punto de ancoraxe, substitúe `xxx` coa súa abreviatura inglesa de ancoraxe real.

Normalmente engádense áncoras ao título, como:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

O efecto de visualización é o seguinte:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Escribe `HTML` `MarkDown`

`pug` `HTML` pódese inserir no código.

Non se traducirá o contido do elemento `<pre>`

Combinando estes dous puntos, podes escribir `MarkDown` `HTML` para conseguir varios efectos de visualización.

Podes consultar a implementación en [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) o código é o seguinte :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Teña en conta que `<style>` tamén se define en `<pre>`
