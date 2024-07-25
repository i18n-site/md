# MarkDown Format Konventioun

## Ankerpunkt

`MarkDown` Anker ginn op Textinhalt generéiert Am Fall vu Multi-Sprooch ass dës Léisung net machbar.

`i18n.site` Déi ausgemaach Ankerléisung ass den Text ähnlech wéi `<a rel=id href="#xxx" id="xxx"></a>` an `MarkDown` anzeginn fir manuell Positionéierungsanker ze kreéieren.

`<a rel=id href="#xxx" id="xxx"></a>` hei `rel=id` definéiert de Säitstil vum Verankerungspunkt, ersetzt w.e.g. `xxx` mat Ärer aktueller englescher Ofkierzung.

Anker ginn normalerweis zum Titel bäigefüügt, sou wéi:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Den Affichage Effekt ass wéi follegt:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Schreift `HTML` `MarkDown`

`pug` `HTML` kann am Code agebonne ginn.

Inhalt am `<pre>` gëtt net iwwersat.

Kombinéiert dës zwee Punkten, kënnt Dir einfach `MarkDown` `HTML` fir verschidde Displayeffekter z'erreechen.

Dir kënnt op d'Ëmsetzung an [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) de Code ass wéi follegt :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Notéiert datt `<style>` och hei `<pre>` definéiert ass.
