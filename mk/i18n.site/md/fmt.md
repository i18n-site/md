# Конвенција За Формат MarkDown

## Точка На Прицврстување

`MarkDown` Сидра се создаваат врз основа на содржината на текстот.

`i18n.site` `MarkDown` `<a rel=id href="#xxx" id="xxx"></a>`

`<a rel=id href="#xxx" id="xxx"></a>` овде `rel=id` го дефинира стилот на страницата на точката за прицврстување, заменете го `xxx` со вашата вистинска англиска кратенка.

Сидра обично се додаваат на насловот, како што се:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ефектот на приказот е како што следува:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Напишете `HTML` Во `MarkDown`

`pug` може `HTML` се вметне во кодот.

Содржината во елементот `<pre>` нема да биде преведена.

Со комбинирање на овие две точки, можете лесно да напишете `HTML` во `MarkDown`

Можете да се повикате на имплементацијата во [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) кодот е како што следува :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Имајте предвид дека `<style>` е исто така дефинирано во `<pre>`
