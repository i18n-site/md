# اتفاقية كتابة i18n.site MarkDown

## نقاط التعلق

تقوم نقاط التعلق التقليدية في `MarkDown` بالتكوين بناءً على محتوى النص، ولكن في حالة التعددية اللغوية، هذا الحل غير عملي.

تتلخص طريقة نقاط التعلق المتفق عليها في `i18n.site` في إدراج نصوص مشابهة لـ `<a rel=id href="#xxx" id="xxx"></a>` في `MarkDown` لإنشاء نقاط تعلق مخصصة يدويًا.

`<a rel=id href="#xxx" id="xxx"></a>`، هنا `rel=id` يحدد نمط الصفحة لنقاط التعلق، يرجى استبدال `xxx` بالاختصار الإنجليزي الفعلي الخاص بك.

توضع نقاط التعلق عادةً في العناوين، مثل:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

سيناريو العرض كالتالي:

<img src="//p.3ti.site/1721381136.avif" width="350">

## كتابة `HTML` في `MarkDown`

يمكن تضمين `HTML` في كود `pug`.

محتوى عنصر `<pre>` لن يُترجم.

بجمع هاتين النقطتين، يمكن بسهولة كتابة `HTML` في `MarkDown` لتحقيق تأثيرات عرض متنوعة.

يمكنك الاطلاع على التنفيذ في [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) الكود كالتالي:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

لاحظ أن `<style>` تم تحديده أيضًا في `<pre>` في النص السابق.


## الصور/الفيديوهات/الروابط بلغات متعددة

بعد تحويل `MarkDown` إلى `HTML`، سيتم استبدال `$LANG` في السمات `src` و `href` برمز اللغة الحالي [here](/i18/LANG_CODE).

باستخدام هذا المتغير، يمكنك تحقيق تعدد اللغات للصور/مقاطع الفيديو/الروابط.