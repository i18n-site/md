# ڕێکەوتنی فۆرمات مارکداون

## خاڵی له‌نگه‌ربوونی كه‌شتی

نەریتی `MarkDown`

`i18n.site` `MarkDown` `<a rel=id href="#xxx" id="xxx"></a>`

`<a rel=id href="#xxx" id="xxx"></a>` `rel=id` `xxx`

بەزۆری ئەنکرەکان بۆ ناونیشانەکە زیاد دەکرێن، وەک:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

کاریگەری پیشاندانی بەم شێوەیەیە:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` بنوسە `MarkDown`

`pug` `HTML` لە کۆدەکەدا جێگیر بکرێت.

ناوەڕۆکی ناو توخمەکەی `<pre>`

بە تێکەڵکردنی ئەم دوو خاڵە، دەتوانیت بە ئاسانی `HTML` `MarkDown` بنووسیت بۆ بەدەستهێنانی کاریگەرییە جۆراوجۆرەکانی نمایشکردن.

دەتوانن ئاماژە بە جێبەجێکردنەکە بکەن لە [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) کۆدەکە بەم شێوەیەی خوارەوەیە :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

تێبینی `<style>` لە `<pre>` پێناسە کراوە.
