# توصیه‌ی ویرایشگر

هر کسی ویرایشگر مورد علاقه‌ی خود را برای `Markdown` دارد.

ما از [vscode](https://code.visualstudio.com/) برای نوشتن `Markdown` استفاده می‌کنیم و پلاگین [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) را نصب کرده‌ایم تا بتوانیم در حال نوشتن، پیش‌نمایش实时 داشته باشیم.

همانطور که در تصویر زیر می‌بینید، با کلیک راست در ویرایشگر، می‌توانید پنجره‌ی پیش‌نمایش را باز کنید.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

با تایپ کردن `code xxx.md` در خط فرمان، می‌توانید `vscode` را برای باز کردن فایل `Markdown` فراخوانی کنید.

برای آپلود تصاویر از [PicList](https://github.com/Kuingsmile/PicList)

این ابزار پس از آپلود به طور خودکار نام فایل را به فرمت `Markdown` کپی می‌کند که به طور قابل توجهی کارایی را افزایش می‌دهد.

همچنین می‌توانید به تنظیمات زیر مراجعه کنید، فایل را تغییر دهید و تنظیم کنید که فایل‌های آپلود شده به صورت خودکار به فرمت `avif` فشرده شوند تا اندازه‌ی تصاویر کاهش یابد.

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