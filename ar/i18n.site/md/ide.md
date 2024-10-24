# توصية المحرر

كل شخص لديه محرره المفضل، وهنا نشارك أفضل ممارساتنا في `Markdown`.

نستخدم [vscode](https://code.visualstudio.com/) لكتابة `Markdown`، وكلنا نثبت إضافة [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) للمعاينة الفورية أثناء الكتابة.

كما يظهر في الصورة أدناه، انقر بزر الماوس الأيمن داخل المحرر لفتح نافذة المعاينة.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

أدخل `code xxx.md` في سطر الأوامر للفتح `vscode` وفتح ملف `Markdown`.

استخدم [PicList](https://github.com/Kuingsmile/PicList) لتحميل الصور، وتذكر إعداد مفتاح اختصار للتحميل، بعد التقاط اللقطة يمكن تحميلها بنقرة واحدة.

يدعم النسخ التلقائي لاسم الملف في تنسيق `Markdown` بعد التحميل، مما يزيد من الكفاءة بشكل كبير.

في نفس الوقت، يمكنك الرجوع إلى التكوين التالي، وتعديل الملفات، وتكوين التحميل التلقائي للملفات لضغطها إلى تنسيق `avif` لتقليل حجم الصور.

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