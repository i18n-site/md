# i18n.site قرارداد نوشتن MarkDown

## نقطه لنگر

`MarkDown` نقطه لنگر سنتی بر اساس محتوای متنی ایجاد می شود در مورد چند زبانه، این راه حل امکان پذیر نیست.

راه حل نقطه لنگر توافق شده با `i18n.site` این است که متنی مشابه `<a rel=id href="#xxx" id="xxx"></a>` در `MarkDown` درج کنید تا به صورت دستی نقطه لنگر موقعیت یابی ایجاد شود.

`<a rel=id href="#xxx" id="xxx"></a>` ، در اینجا `rel=id` سبک صفحه نقطه لنگر را تعریف می کند، لطفا `xxx` با مخفف انگلیسی واقعی انکر جایگزین کنید.

لنگرها معمولاً به عنوان اضافه می شوند، مانند:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

افکت نمایش به صورت زیر است:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` در `MarkDown` بنویس

`HTML` می توان در `pug` کد جاسازی کرد.

محتوای `<pre>` عنصر ترجمه نخواهد شد.

با ترکیب این دو نقطه می توانید به راحتی `HTML` در `MarkDown` بنویسید تا به افکت های نمایشی مختلف برسید.

[برای i18n.site اینجا را کلیک کنید لیست کد زبان در صفحه اصلی HTML نوشته شده است](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) و : به صورت زیر است

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

توجه داشته باشید که `<style>` نیز در `<pre>` در بالا تعریف شده است.