# اتفاقية الكتابة i18n.site MarkDown

## نقطة الربط

يتم إنشاء نقاط الربط التقليدية `MarkDown` بناءً على محتوى النص، وفي حالة اللغات المتعددة، فإن هذا الحل غير ممكن.

يتمثل حل نقطة الربط المتفق عليه مع `i18n.site` في إدراج نص مشابه لـ `<a rel=id href="#xxx" id="xxx"></a>` في `MarkDown` لإنشاء نقطة ربط تحديد الموضع يدويًا.

`<a rel=id href="#xxx" id="xxx"></a>` ، هنا `rel=id` يحدد نمط الصفحة لنقطة الربط، يرجى استبدال `xxx` بالاختصار الإنجليزي الفعلي الخاص بك.

عادة ما يتم إضافة نقاط ارتساء إلى العنوان، مثل:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

تأثير العرض كما يلي:

<img src="//p.3ti.site/1721381136.avif" width="350">

## اكتب `HTML` في `MarkDown`

يمكن تضمين `HTML` في رمز `pug` .

لن تتم ترجمة المحتوى الموجود في `<pre>` عنصر.

من خلال الجمع بين هاتين النقطتين، يمكنك بسهولة كتابة `HTML` في `MarkDown` لتحقيق تأثيرات العرض المختلفة.

[انقر هنا للرجوع إليها i18n.site قائمة رموز اللغة في الصفحة الرئيسية مكتوبة HTML](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) ، والكود كما يلي :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

لاحظ أن `<style>` محدد أيضًا في `<pre>` أعلاه.