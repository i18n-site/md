# Convenció D'escriptura De MarkDown i18n.site

## Punt D'ancoratge

Els punts d'ancoratge `MarkDown` tradicionals es generen en funció del contingut del text. En el cas de multi-idioma, aquesta solució no és viable.

La solució del punt d'ancoratge acordada amb `i18n.site` és inserir un text semblant al `<a rel=id href="#xxx" id="xxx"></a>` en `MarkDown` per crear manualment el punt d'ancoratge de posicionament.

`<a rel=id href="#xxx" id="xxx"></a>` , aquí `rel=id` defineix l'estil de pàgina del punt d'ancoratge, substituïu `xxx` amb la vostra abreviatura anglesa d'ancoratge real.

Normalment s'afegeixen àncores al títol, com ara:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

L'efecte de visualització és el següent:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Escriu `HTML` en `MarkDown`

`HTML` es pot incrustar al codi `pug` .

El contingut en `<pre>` elements no es traduirà.

Combinant aquests dos punts, podeu escriure fàcilment `HTML` en `MarkDown` per aconseguir diversos efectes de visualització.

[Feu clic aquí per i18n.site la llista de codis d'idioma a la pàgina d'inici HTML](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) i el codi és el següent :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Tingueu en compte que `<style>` també es defineix a `<pre>` anterior.