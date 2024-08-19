# توصية المحرر

كل شخص لديه محرره المفضل، وهنا نشارك تجربتنا في أفضل ممارسات `Markdown`.

نستخدم [vscode](https://code.visualstudio.com/) لكتابة `Markdown`، ونعتمد على الإضافة [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) للمعاينة الفورية أثناء الكتابة.

كما هو موضح في الصورة أدناه، انقر بزر الماوس الأيمن داخل المحرر لفتح نافذة المعاينة.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

أدخل `code xxx.md` في سطر الأوامر للفتح `vscode` وفتح ملف `Markdown`.

نستخدم [PicList](https://github.com/Kuingsmile/PicList) لتحميل الصور، وتذكر تعيين مفتاح اختصار للتحميل، بعد التقاط اللقطة يمكن تحميلها بنقرة واحدة.

يدعم التطبيق نسخ اسم الملف تلقائيًا في تنسيق `Markdown` بعد التحميل، مما يزيد من الكفاءة بشكل كبير.

يمكنك أيضًا الرجوع إلى التكوين التالي لتعديل الملفات، وتكوين التحميل التلقائي للملفات لضغطها إلى تنسيق `avif` لتقليل حجم الصور.

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