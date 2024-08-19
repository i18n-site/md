# Форматирование по соглашению MarkDown

## Якорь

Традиционные якоря `MarkDown` основаны на текстовом контенте, и в многоязычных случаях это решение неэффективно.

Схема якорей, согласованная с `i18n.site`, заключается в插入 текста,类似ного `<a rel=id href="#xxx" id="xxx"></a>`, в `MarkDown` для ручного создания якоря定位.

`<a rel=id href="#xxx" id="xxx"></a>`, где `rel=id` определяет стиль якоря на странице, замените `xxx` на фактическое английское сокращение якоря.

Якоря обычно добавляются к заголовкам, например:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Результат отображения будет следующим:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Написание `HTML` в `MarkDown`

Код `pug` может включать `HTML`.

Содержимое в элементах `<pre>` не будет переведено.

Используя эти два момента, можно легко写入 `HTML` в `MarkDown`, чтобы достичь различных эффектов отображения.

您可以参考 реализацию в [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md), код如下:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Обратите внимание, что в предыдущем `<pre>` также определено `<style>`.