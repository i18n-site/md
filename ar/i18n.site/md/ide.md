# توصية المحرر

كل شخص لديه محرره المفضل، فلنشارك أفضل ممارساتنا هنا `Markdown`

نحن نستخدم [vscode](https://code.visualstudio.com/) `MarkDown` ونثبت المكون الإضافي [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) للمعاينة في الوقت الفعلي أثناء الكتابة.

كما هو موضح أدناه، انقر بزر الماوس الأيمن فوق المحرر لفتح نافذة المعاينة.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

أدخل `code xxx.md` في سطر الأوامر للاتصال بملف `vscode` open `Markdown` .

استخدم [PicList](https://github.com/Kuingsmile/PicList) لتحميل الصور، وتذكر تعيين مفتاح اختصار التحميل، وتحميل لقطة الشاشة بنقرة واحدة.

وهو يدعم نسخ تنسيق اسم `Markdown` تلقائيًا بعد التحميل، مما يحسن الكفاءة بشكل كبير.

في الوقت نفسه، يمكنك الرجوع إلى التكوين التالي، وتعديل الملف، وتكوين الملف الذي تم تحميله ليتم `avif` تلقائيًا لتقليل حجم الصورة.

```json
"buildIn": {
  "compress": {
    "quality": 99,
    "isConvert": true,
    "convertFormat": "avif",
    "isReSize": false,
    "reSizeWidth": 0,
    "reSizeHeight": 0,
    "skipReSizeOfSmallImg": false,
    "isReSizeByPercent": false,
    "reSizePercent": 50,
    "isRotate": false,
    "rotateDegree": 0,
    "isRemoveExif": true,
    "isFlip": false,
    "isFlop": false,
    "formatConvertObj": {}
  },
  … …
```
