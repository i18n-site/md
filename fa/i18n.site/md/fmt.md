# کنوانسیون فرمت MarkDown

## نقطه لنگر

لنگرهای `MarkDown` بر اساس محتوای متنی تولید می شوند.

راه حل توافق شده لنگر این است که متنی شبیه به `<a rel=id href="#xxx" id="xxx"></a>` در `MarkDown` درج کنید تا به `i18n.site` دستی لنگر موقعیت یابی ایجاد شود.

`<a rel=id href="#xxx" id="xxx"></a>` در اینجا `rel=id` سبک صفحه نقطه لنگر را تعریف می کند، لطفاً `xxx` با مخفف انگلیسی واقعی خود جایگزین کنید.

لنگرها معمولاً به عنوان اضافه می شوند، مانند:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

افکت نمایش به صورت زیر است:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` کردن `MarkDown`

`HTML` `pug` توان در کد جاسازی کرد.

محتوای موجود در عنصر `<pre>`

با ترکیب این دو نقطه، می توانید به راحتی `HTML` را `MarkDown` نویسی بنویسید تا به جلوه های نمایشی مختلف برسید.

می توانید به پیاده سازی در [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) کد به شرح زیر است :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

توجه داشته باشید که `<style>` `<pre>` بالا نیز تعریف شده است.
