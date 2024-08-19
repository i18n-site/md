# کنوانسیون‌های فرمت MarkDown

## نقطه‌های لنگر

نقطه‌های لنگر سنتی `MarkDown` بر اساس محتوای متنی ایجاد می‌شوند، اما در شرایط چند زبانه، این روش کار نمی‌کند.

راهکار پیشنهادی `i18n.site` برای نقطه‌های لنگر، این است که در `MarkDown` متنی مانند `<a rel=id href="#xxx" id="xxx"></a>` قرار دهید تا به صورت دستی نقطه‌های لنگر ایجاد کنید.

`<a rel=id href="#xxx" id="xxx"></a>`، در اینجا `rel=id` سبک صفحه نقطه لنگر را تعریف می‌کند، `xxx` را با مخفف انگلیسی واقعی نقطه لنگر جایگزین کنید.

نقطه‌های لنگر معمولاً در标题‌ها اضافه می‌شوند، مانند:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

نتیجه نمایش به این صورت است:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` در `MarkDown` نوشتن

`HTML` را می‌توان در کد `pug` جاسازی کرد.

محتوای `<pre>` ترجمه نمی‌شود.

با ترکیب این دو نکته، می‌توان به راحتی در `MarkDown` `HTML` نوشت و به نمایش‌های مختلف دست یافت.

می‌توانید پیاده‌سازی را در [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) مشاهده کنید، کد به این صورت است:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

توجه داشته باشید که در `<pre>` بالا، `<style>` نیز تعریف شده است.