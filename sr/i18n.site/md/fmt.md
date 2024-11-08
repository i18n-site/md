# И18н.сите МаркДовн Конвенција О Писању

## Тачка Сидрења

Традиционалне тачке сидрења `MarkDown` се генеришу на основу текстуалног садржаја. У случају вишејезичног, ово решење није изводљиво.

Решење за тачку сидрења договорено са `i18n.site` је уметање текста сличног `<a rel=id href="#xxx" id="xxx"></a>` у `MarkDown` да бисте ручно креирали сидрену тачку за позиционирање.

`<a rel=id href="#xxx" id="xxx"></a>` , овде `rel=id` дефинише стил странице сидрене тачке, замените `xxx` вашом стварном енглеском скраћеницом за сидро.

Сидра се обично додају у наслов, као што су:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ефекат приказа је следећи:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Напиши `HTML` У `MarkDown`

`HTML` се може уградити у `pug` код.

Садржај у `<pre>` елемената неће бити преведен.

Комбинујући ове две тачке, лако можете написати `HTML` у `MarkDown` да бисте постигли различите ефекте приказа.

[Кликните овде за i18n.site Листа језичких кодова на почетној HTML је написана](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , а код је следећи :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Имајте на уму да је `<style>` такође дефинисано у `<pre>` горе.