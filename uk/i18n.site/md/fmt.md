# Правила Написання MarkDown i18n.site

## Опорна Точка

Традиційні опорні точки `MarkDown` генеруються на основі текстового вмісту. У випадку з кількома мовами це рішення неможливе.

Рішення опорної точки, узгоджене з `i18n.site` полягає у вставленні тексту, подібного до `<a rel=id href="#xxx" id="xxx"></a>` в `MarkDown` щоб вручну створити опорну точку позиціонування.

`<a rel=id href="#xxx" id="xxx"></a>` , тут `rel=id` визначає стиль сторінки точки прив’язки, будь ласка, замініть `xxx` вашою фактичною абревіатурою прив’язки англійською мовою.

Якір зазвичай додається до заголовка, наприклад:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ефект відображення такий:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Напишіть `HTML` З `MarkDown`

`HTML` можна вставити в код `pug` .

Вміст в елементах `<pre>` не буде перекладено.

Поєднавши ці дві точки, ви можете легко написати `HTML` в `MarkDown` для досягнення різних ефектів відображення.

[Натисніть тут для довідки i18n.site Список кодів мов на домашній HTML написано](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) так: :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Зверніть увагу, що `<style>` також визначено в `<pre>` вище.