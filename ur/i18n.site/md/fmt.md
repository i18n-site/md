# مارک ڈاون فارمیٹ کنونشن

## اینکر پوائنٹ

متنی مواد کی بنیاد پر `MarkDown` اینکرز بنائے جاتے ہیں، یہ حل ممکن نہیں ہے۔

متفقہ اینکر حل یہ ہے کہ دستی طور پر پوزیشننگ اینکر بنانے کے لیے `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` کی طرح کا متن داخل کیا جائے `i18n.site`

`<a rel=id href="#xxx" id="xxx"></a>` ، یہاں `rel=id` اینکر پوائنٹ کے صفحہ کے انداز کی وضاحت کرتا ہے، براہ کرم `xxx` اپنے اصل اینکر انگریزی مخفف سے بدل دیں۔

اینکرز کو عام طور پر عنوان میں شامل کیا جاتا ہے، جیسے:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ڈسپلے اثر مندرجہ ذیل ہے:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` میں لکھیں `MarkDown`

`HTML` کوڈ میں ایمبیڈ کیا جا سکتا ہے `pug`

عنصر کے اندر موجود مواد کا ترجمہ نہیں کیا جائے گا `<pre>`

ان دو پوائنٹس کو ملا کر، آپ مختلف ڈسپلے اثرات حاصل کرنے کے لیے آسانی سے `HTML` سکتے ہیں `MarkDown`

آپ میں نفاذ کا حوالہ دے سکتے ہیں [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) کوڈ درج ذیل ہے :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

نوٹ کریں کہ `<style>` اوپر بھی بیان کیا گیا ہے `<pre>`
