# i18n.site MarkDown Confensiwn Ysgrifennu

## Pwynt Angor

Cynhyrchir pwyntiau angori traddodiadol `MarkDown` yn seiliedig ar gynnwys testun Yn achos aml-iaith, nid yw'r datrysiad hwn yn ymarferol.

Y datrysiad pwynt angori y cytunwyd arno gyda `i18n.site` yw mewnosod testun tebyg i `<a rel=id href="#xxx" id="xxx"></a>` mewn `MarkDown` i greu'r pwynt angori lleoli â llaw.

`<a rel=id href="#xxx" id="xxx"></a>` , dyma `rel=id` yn diffinio arddull tudalen y pwynt angori, rhowch eich talfyriad Saesneg angor gwirioneddol yn lle `xxx` .

Mae angorau fel arfer yn cael eu hychwanegu at y teitl, fel:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Mae'r effaith arddangos fel a ganlyn:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Ysgrifennu `HTML` Mewn `MarkDown`

Gellir ymgorffori `HTML` mewn `pug` cod.

Ni fydd cynnwys mewn `<pre>` elfen yn cael ei gyfieithu.

Gan gyfuno'r ddau bwynt hyn, gallwch chi ysgrifennu `HTML` mewn `MarkDown` yn hawdd i gyflawni effeithiau arddangos amrywiol.

[Cliciwch yma i HTML i18n.site](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Sylwch fod `<style>` hefyd wedi'i ddiffinio yn `<pre>` uchod.