# Konvencija O Formatu MarkDown

## Sidrišna Tačka

`MarkDown` sidra se generišu na osnovu tekstualnog sadržaja.

Dogovoreno rješenje `i18n.site` sidro je da umetnete tekst sličan `<a rel=id href="#xxx" id="xxx"></a>` u `MarkDown` da biste ručno kreirali sidro za pozicioniranje.

`<a rel=id href="#xxx" id="xxx"></a>` ovdje `rel=id` definira stil stranice sidrišta, molimo zamijenite `xxx` svojom stvarnom engleskom skraćenicom.

Sidra se obično dodaju naslovu, kao što su:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Efekt prikaza je sljedeći:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Upišite `HTML` U `MarkDown`

`pug` `HTML` može ugraditi u kod.

Sadržaj unutar `<pre>` neće biti preveden.

Kombinujući ove dve tačke, možete lako da upišete `HTML` u `MarkDown`

Možete se pozvati na implementaciju u [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) kod je sljedeći :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Imajte na umu da je `<style>` također definiran u `<pre>`
