# MarkDown formátum约定

## Horgonypontra

Hagyományos `MarkDown` horgonypontra alapuló szöveg tartalom nem alkalmazható többnyelvű környezetben.

Az `i18n.site` által javasolt horgonypont-megoldás a `<a rel=id href="#xxx" id="xxx"></a>` használatával a `MarkDown`-ban, hogy kézzel hozzunk létre pozicionálási horgonypontokat.

`<a rel=id href="#xxx" id="xxx"></a>`, itt a `rel=id` határozza meg a horgonypont oldalstílusát, a `xxx` helyére a valós horgonypont angol rövidítését kell helyettesíteni.

Horgonypontokat általában a címsorokba helyeznek, például:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

A megjelenési eredmény a következőképpen néz ki:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Írj `HTML`-et a `Markdown`-ben

`HTML` beágyazható a `pug` kódjába.

A `<pre>` elem tartalma nem lesz lefordítva.

Ezek két pont kombinálásával könnyedén írj `HTML`-et a `Markdown`-be, hogy különféle megjelenítési effektusokat érj el.

Az implementációra hivatkozhat a [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) oldalon, a kód a következőképpen néz ki:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Ne feledje, hogy a fenti `<pre>` elemben `<style>` is meghatározásra került.