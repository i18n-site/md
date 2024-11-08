# Convención De Escritura De i18n.site MarkDown

## Punto De Ancoraxe

Os puntos de ancoraxe `MarkDown` tradicionais xéranse en función do contido do texto. No caso de multilingüe, esta solución non é viable.

A solución do punto de ancoraxe acordada con `i18n.site` é inserir texto similar ao `<a rel=id href="#xxx" id="xxx"></a>` en `MarkDown` para crear manualmente o punto de ancoraxe de posicionamento.

`<a rel=id href="#xxx" id="xxx"></a>` , aquí `rel=id` define o estilo de páxina do punto de ancoraxe, substitúe `xxx` pola súa abreviatura inglesa de ancoraxe real.

Normalmente engádense áncoras ao título, como:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

O efecto de visualización é o seguinte:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Escribe `HTML` en `MarkDown`

`HTML` pódese inserir no código `pug` .

Non se traducirá o contido en `<pre>` elementos.

Combinando estes dous puntos, podes escribir facilmente `HTML` en `MarkDown` para conseguir varios efectos de visualización.

[Fai clic aquí para i18n.site A lista de códigos de idiomas na páxina de inicio HTML está escrita](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) e o código é o seguinte :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Teña en conta que `<style>` tamén se define en `<pre>` anterior.