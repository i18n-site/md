# i18n.site مارڪ ڊائون لکڻ جو ڪنوينشن

## لنگر پوائنٽ

روايتي `MarkDown` لنگر پوائنٽون ٺاهيل آهن متن جي مواد جي صورت ۾، اهو حل ممڪن ناهي.

لنگر پوائنٽ حل `i18n.site` سان اتفاق ڪيو ويو آهي `<a rel=id href="#xxx" id="xxx"></a>` `MarkDown` ملندڙ متن داخل ڪرڻ لاءِ دستي طور تي پوزيشننگ اينڪر پوائنٽ ٺاهڻ لاءِ.

`<a rel=id href="#xxx" id="xxx"></a>` ، هتي `rel=id` صفحي جي انداز کي اينڪر پوائنٽ جي وضاحت ڪري ٿو، مھرباني ڪري `xxx` پنھنجي اصل اينڪر انگريزي مخفف سان تبديل ڪريو.

لنگر عام طور تي عنوان ۾ شامل ڪيا ويا آهن، جهڙوڪ:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ڊسپلي اثر هيٺ ڏنل آهي:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` ۾ `MarkDown` لکو

`HTML` `pug` ڪوڊ ۾ شامل ٿي سگھي ٿو.

`<pre>` عناصر ۾ مواد ترجمو نه ڪيو ويندو.

انهن ٻن پوائنٽن کي گڏ ڪندي، توهان آساني سان لکي سگهو ٿا `HTML` ۾ `MarkDown` مختلف ڊسپلي اثرات حاصل ڪرڻ لاءِ.

[i18n.site لاءِ هتي ڪلڪ ڪريو هوم پيج تي ٻولي ڪوڊ لسٽ HTML لکيل آهي](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) ، ۽ ڪوڊ هن ريت آهي :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

ياد رهي ته `<style>` پڻ مٿي ڏنل `<pre>` ۾ بيان ڪيو ويو آهي.