# Convention de format Markdown

## Ancre

Les points d'ancrage `MarkDown` traditionnels sont générés en fonction du contenu du texte. Dans le cas du multilingue, cette solution n'est pas réalisable.

La solution de point d'ancrage convenue avec `i18n.site` consiste à insérer un texte similaire à `<a rel=id href="#xxx" id="xxx"></a>` en `MarkDown` pour créer manuellement le point d'ancrage de positionnement.

`<a rel=id href="#xxx" id="xxx"></a>`, ici `rel=id` définit le style de l'ancrage sur la page, remplacez `xxx` par l'abréviation anglaise de l'ancrage que vous utilisez réellement.

Les ancres sont généralement ajoutées aux titres, par exemple :

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

L'affichage est comme suit :

<img src="//p.3ti.site/1721381136.avif" width="350">

## Écrire `HTML` Sur `MarkDown`

`HTML` peut être intégré dans le code `pug` .

Le contenu de l'élément `<pre>` ne sera pas traduit.

En combinant ces deux points, vous pouvez facilement écrire `HTML` sur `MarkDown` pour obtenir divers effets d'affichage.

Vous pouvez vous référer à l'implémentation dans [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) le code est comme suit :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Notez que `<style>` est également défini dans `<pre>` ci-dessus.