# i18n.site MarkDown Sau Ntawv Sib Tham

## Thauj Tog Rau Nkoj Point

Ib txwm `MarkDown` cov ntsiab lus thauj tog rau nkoj yog tsim los ntawm cov ntsiab lus hauv ntau hom lus, qhov kev daws teeb meem no tsis ua tau.

Qhov kev daws teeb meem thauj tog rau nkoj pom zoo nrog `i18n.site` yog txhawm rau ntxig cov ntawv zoo ib yam li `<a rel=id href="#xxx" id="xxx"></a>` hauv `MarkDown` los ua manually tsim qhov chaw thauj tog rau nkoj taw tes.

`<a rel=id href="#xxx" id="xxx"></a>` , ntawm no `rel=id` txhais cov nplooj ntawv style ntawm lub thauj tog rau nkoj taw tes, thov hloov `xxx` nrog koj qhov tseeb thauj tog rau nkoj English abbreviation.

Anchors feem ntau yog ntxiv rau lub npe, xws li:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Cov nyhuv tso saib yog raws li nram no:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` `MarkDown`

`HTML` tuaj yeem muab tso rau hauv `pug` code.

Cov ntsiab lus hauv `<pre>` cov ntsiab lus yuav tsis raug txhais.

Ua ke ob lub ntsiab lus no, koj tuaj yeem sau tau yooj yim `HTML` hauv `MarkDown` kom ua tiav ntau yam teebmeem.

[Nyem qhov HTML rau kev i18n.site](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Nco ntsoov tias `<style>` kuj txhais hauv `<pre>` saum toj no.