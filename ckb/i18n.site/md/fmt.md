# i18n.site ڕێکەوتننامەی نووسینی MarkDown

## خاڵی لەنگەری

`MarkDown` خاڵە لەنگەری نەریتی لەسەر بنەمای ناوەڕۆکی دەق دروست دەکرێن لە حاڵەتی فرە زماندا، ئەم چارەسەرە ناتوانرێت.

چارەسەری خاڵی ئەنکر کە لەگەڵ `i18n.site` ڕێککەوتووە بریتییە لە دانانی دەقی هاوشێوەی `<a rel=id href="#xxx" id="xxx"></a>` لە `MarkDown` بۆ دروستکردنی خاڵی ئەنکر بە دەست.

`<a rel=id href="#xxx" id="xxx"></a>` ، لێرەدا `rel=id` شێوازی لاپەڕەی خاڵی ئەنکر پێناسە دەکات، تکایە `xxx` بە کورتکراوەی ڕاستەقینەی ئینگلیزی ئەنکرەکەت بگۆڕە.

بەزۆری ئەنکرەکان بۆ ناونیشانەکە زیاد دەکرێن، وەک:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

کاریگەری پیشاندانی بەم شێوەیەیە:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` لە `MarkDown` بنووسە

`HTML` دەتوانرێت لە `pug` کۆددا جێگیر بکرێت.

ناوەڕۆک لە `<pre>` توخمدا وەرناگێڕدرێت.

بە تێکەڵکردنی ئەم دوو خاڵە، دەتوانیت بە ئاسانی `HTML` لە `MarkDown` بنووسیت بۆ بەدەستهێنانی کاریگەرییە جۆراوجۆرەکانی پیشاندانی.

[بۆ i18n.site کلیک لێرە بکە لیستی کۆدی زمان لە ماڵپەڕی سەرەکی HTML نووسراوە](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , و کۆدەکە بەم شێوەیەیە :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

تێبینی بکە کە `<style>` لە `<pre>` سەرەوەشدا پێناسە کراوە.