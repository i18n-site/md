# توصیه ویرایشگر

هر کسی ویرایشگر مورد علاقه خود را دارد `Markdown`

ما `MarkDown` [vscode](https://code.visualstudio.com/) می کنیم و پلاگین [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) را برای پیش نمایش در زمان نوشتن نصب می کنیم.

مطابق شکل زیر، در ویرایشگر کلیک راست کنید تا پنجره پیش نمایش باز شود.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

`code xxx.md` در خط فرمان وارد کنید تا `vscode` تماس بگیرید تا فایل `Markdown` باز شود.

برای آپلود تصاویر از [PicList](https://github.com/Kuingsmile/PicList)

از کپی خودکار نام فایل به فرمت `Markdown` پس از آپلود پشتیبانی می کند که کارایی را تا حد زیادی بهبود می بخشد.

در عین حال می توانید به پیکربندی زیر مراجعه کنید، فایل را تغییر دهید و فایل آپلود شده را به گونه ای تنظیم کنید که به صورت خودکار به `avif` فشرده شود تا اندازه تصویر کاهش یابد.

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