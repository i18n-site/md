# اتفاقية تنسيق MarkDown

## مرساة نقطة

يتم إنشاء نقاط الارتساء `MarkDown` بناءً على محتوى النص، وفي حالة اللغات المتعددة، فإن هذا الحل غير ممكن.

الحل المتفق `i18n.site` هو إدراج نص مشابه لـ `<a rel=id href="#xxx" id="xxx"></a>` في `MarkDown` لإنشاء مرساة تحديد الموضع يدويًا.

`<a rel=id href="#xxx" id="xxx"></a>` ، هنا `rel=id` يحدد نمط الصفحة لنقطة الربط، يرجى استبدال `xxx` بالاختصار الإنجليزي الفعلي.

عادة ما يتم إضافة نقاط ارتساء إلى العنوان، مثل:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

تأثير العرض كما يلي:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` في `MarkDown`

يمكن تضمين `pug` `HTML` الكود.

لن تتم ترجمة المحتوى الموجود داخل العنصر `<pre>`

من خلال الجمع بين هاتين النقطتين، يمكنك بسهولة `HTML` `MarkDown` تأثيرات العرض المختلفة.

يمكنك الرجوع إلى التنفيذ في [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) الكود كما يلي :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

لاحظ أن `<style>` تم تعريفه أيضًا في `<pre>` أعلاه.
