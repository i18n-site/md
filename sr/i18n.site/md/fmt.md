# Конвенција О Формату МаркДовн

## Тачка Сидрења

`MarkDown` сидра су генерисана на основу текстуалног садржаја.

Договорено решење `i18n.site` сидро је да уметнете текст сличан `<a rel=id href="#xxx" id="xxx"></a>` у `MarkDown` да бисте ручно креирали сидро за позиционирање.

`<a rel=id href="#xxx" id="xxx"></a>` овде `rel=id` дефинише стил странице сидрене тачке, замените `xxx` својом стварном енглеском скраћеницом.

Сидра се обично додају у наслов, као што су:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ефекат приказа је следећи:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` `MarkDown`

`pug` `HTML` може уградити у код.

Садржај унутар `<pre>` неће бити преведен.

Комбинујући ове две тачке, можете лако да упишете `HTML` у `MarkDown`

Можете се позвати на имплементацију у [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) код је следећи :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Имајте на уму да је `<style>` такође дефинисан у `<pre>`
