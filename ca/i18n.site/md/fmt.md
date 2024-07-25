# Convenció De Format MarkDown

## Punt D'ancoratge

`MarkDown` àncores tradicionals es generen en funció del contingut del text.

La solució `i18n.site` ancoratge acordada és inserir un text semblant a `<a rel=id href="#xxx" id="xxx"></a>` a `MarkDown` per crear manualment l'àncora de posicionament.

`<a rel=id href="#xxx" id="xxx"></a>` aquí `rel=id` defineix l'estil de pàgina del punt d'ancoratge, si us plau, substituïu `xxx` per l'abreviatura anglesa d'ancoratge real.

Normalment s'afegeixen àncores al títol, com ara:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

L'efecte de visualització és el següent:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` en `MarkDown`

`pug` `HTML` pot incrustar al codi.

El contingut de l'element `<pre>` no es traduirà.

Combinant aquests dos punts, podeu escriure `MarkDown` `HTML` per aconseguir diversos efectes de visualització.

Podeu consultar la implementació a [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) el codi és el següent :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Tingueu en compte que `<style>` també es defineix a `<pre>`
