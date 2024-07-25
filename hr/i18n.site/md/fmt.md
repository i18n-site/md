# Konvencija Formata MarkDown

## Mjesto Sidrenja

`MarkDown` sidri se generiraju na temelju tekstualnog sadržaja. U slučaju višejezičnog sadržaja, ovo rješenje nije izvedivo.

`i18n.site` Dogovoreno rješenje za sidro je umetanje teksta sličnog `<a rel=id href="#xxx" id="xxx"></a>` u `MarkDown` za ručno stvaranje sidra za pozicioniranje.

`<a rel=id href="#xxx" id="xxx"></a>` , ovdje `rel=id` definira stil stranice sidrišne točke, zamijenite `xxx` vašom stvarnom sidrišnom kraticom.

Sidra se obično dodaju u naslov, kao što su:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Učinak prikaza je sljedeći:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Upišite `HTML` `MarkDown`

`pug` `HTML` može se ugraditi u kod.

Sadržaj unutar elementa `<pre>` neće biti preveden.

Kombinirajući ove dvije točke, možete jednostavno napisati `HTML` u `MarkDown` kako biste postigli različite efekte prikaza.

Možete pogledati implementaciju u [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) kod je sljedeći :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Imajte na umu da je `<style>` također definiran u `<pre>`
