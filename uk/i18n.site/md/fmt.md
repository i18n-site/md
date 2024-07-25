# Угода Про Формат MarkDown

## Опорна Точка

`MarkDown` прив’язки генеруються на основі текстового вмісту. У разі використання кількох мов це рішення неможливо.

`i18n.site` Узгоджене рішення прив’язки полягає в `MarkDown` `<a rel=id href="#xxx" id="xxx"></a>` щоб вручну створити прив’язку позиціонування.

`<a rel=id href="#xxx" id="xxx"></a>` , тут `rel=id` визначає стиль сторінки опорної точки, будь ласка, замініть `xxx` вашою фактичною англійською абревіатурою.

Якір зазвичай додається до заголовка, наприклад:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ефект відображення такий:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Напишіть `HTML` В `MarkDown`

`pug` `HTML` можна вставити в код.

Вміст елемента `<pre>` не буде перекладено.

Поєднуючи ці дві точки, ви можете легко написати `HTML` в `MarkDown`

Ви можете звернутися до реалізації в [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) код такий :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Зверніть увагу, що `<style>` також визначено в `<pre>`
