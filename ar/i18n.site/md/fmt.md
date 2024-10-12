# اتفاقية تنسيق Markdown

## نقطة الربط

تتمثل نقاط الربط التقليدية في `Markdown` في إنشائها بناءً على محتوى النص، ولكن في حالة اللغات المتعددة، هذا الحل غير مجدي.

يُتفق عليه في `i18n.site` أن نقطة الربط تُنشأ عن طريق إدراج نص يشبه `<a rel=id href="#xxx" id="xxx"></a>` داخل `Markdown`، مما يتيح إنشاء نقاط ربط تحديد الموضع يدويًا.

`<a rel=id href="#xxx" id="xxx"></a>`، هنا `rel=id` يحدد نمط الصفحة لنقاط الوصل، يرجى استبدال `xxx` بالاختصار الإنجليزي الفعلي الخاص بك.

توضع نقاط الوصل عادةً في العناوين، مثل:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

سيناريو العرض كالتالي:

<img src="//p.3ti.site/1721381136.avif" width="350">

## اكتب `HTML` داخل `Markdown`

يمكن دمج `HTML` داخل رمز `Pug`.

المحتوى داخل عنصر `<pre>` لن يُترجم.

بتوفيق هذين العنصرين، يمكنك بسهولة كتابة `HTML` داخل `Markdown` لتحقيق تأثيرات عرض متنوعة.

يمكنك الاطلاع على التنفيذ في [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) الكود كالتالي:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

لاحظ أن `<style>` تم تحديده أيضًا داخل `<pre>` في النص السابق.