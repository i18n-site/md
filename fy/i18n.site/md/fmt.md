# i18n.site MarkDown Skriuwen Konvinsje

## Ankerpunt

Tradisjoneel `MarkDown` ankerpunten wurde oanmakke op basis fan tekstynhâld Yn it gefal fan meartalige is dizze oplossing net mooglik.

De oplossing foar ankerpunt ôfpraat mei `i18n.site` is om tekst yn te foegjen lykas `<a rel=id href="#xxx" id="xxx"></a>` yn `MarkDown` om it posysjonearjende ankerpunt manuell te meitsjen.

`<a rel=id href="#xxx" id="xxx"></a>` , hjir definiearret `rel=id` de sidestyl fan it ankerpunt, ferfange asjebleaft `xxx` mei jo eigentlike anker Ingelske ôfkoarting.

Ankers wurde normaal tafoege oan de titel, lykas:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

It display-effekt is as folget:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Skriuw `HTML` Yn `MarkDown`

`HTML` kin wurde ynbêde yn `pug` koade.

Ynhâld yn `<pre>` eleminten sil net oerset wurde.

Troch dizze twa punten te kombinearjen, kinne jo maklik `HTML` yn `MarkDown` skriuwe om ferskate display-effekten te berikken.

[Klik hjir foar i18n.site De taalkoadelist op de thússide HTML is skreaun](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , en de koade is as folget :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Tink derom dat `<style>` ek definiearre is yn `<pre>` hjirboppe.