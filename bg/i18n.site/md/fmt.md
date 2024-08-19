# Форматни约定 за MarkDown

## Котва

Традиционните котви в `MarkDown` се генерират въз основа на текстовото съдържание, но това не е възможно при многоезичие.

Решението за опорна точка, съгласувано с `i18n.site`, е да се вмъкне текст, подобен на `<a rel=id href="#xxx" id="xxx"></a>`, в `Markdown`, за да се създаде ръчно позициониращата опорна точка.

`<a rel=id href="#xxx" id="xxx"></a>`, тук `rel=id` дефинира стила на котвата на страницата, моля, заменете `xxx` с вашето реално английско съкращение за котва.

Котвите обикновено се добавят към заглавията, например:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Следния ефект ще видите на екрана:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Напиши `HTML` в `Markdown`

`HTML` може да бъде вграден в кода на `pug`.

Съдържанието в елемента `<pre>` няма да бъде преведено.

Комбинирайки тези две точки, можете лесно да включите `HTML` в `Markdown`, за да постигнете различни визуални ефекти.

Можете да се inspire от реализацията в [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md), кодът е следния:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Забележете, че в горния `<pre>` също е дефиниран `<style>`.