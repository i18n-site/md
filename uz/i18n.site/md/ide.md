# Muharrir Tavsiyasi

Har `Markdown` insonning o'z sevimli muharriri bor.

Biz `MarkDown` yozish uchun [vscode](https://code.visualstudio.com/) va yozish paytida real vaqtda ko'rish uchun [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) plaginini o'rnatamiz.

Quyida ko'rsatilganidek, oldindan ko'rish oynasini ochish uchun muharrirni o'ng tugmasini bosing.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

`Markdown` faylni ochish uchun `vscode` qo'ng'iroq qilish uchun buyruq satriga `code xxx.md` kiriting.

Rasmlarni yuklash uchun [PicList](https://github.com/Kuingsmile/PicList) dan foydalaning, yuklash yorliqlarini o'rnatishni unutmang va bir marta bosish bilan skrinshotni yuklang.

U yuklangandan so'ng fayl nomini avtomatik ravishda `Markdown` formatiga nusxalashni qo'llab-quvvatlaydi, bu esa samaradorlikni sezilarli darajada oshiradi.

Shu bilan birga, siz quyidagi konfiguratsiyaga murojaat qilishingiz, faylni o'zgartirishingiz va yuklangan faylni tasvir hajmini kamaytirish uchun avtomatik ravishda `avif` ga siqilgan holda sozlashingiz mumkin.

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