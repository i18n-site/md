# Редакторын Зөвлөмж

Хүн бүр өөрийн дуртай засварлагчтай байдаг. Энд хамгийн сайн туршлагаа хуваалцъя `Markdown`

[vscode](https://code.visualstudio.com/) бичиж байхдаа шууд үзэхийн тулд [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) залгаасыг ашигладаг `MarkDown`

Доор үзүүлсэн шиг засварлагч дээр хулганы баруун товчийг дарж урьдчилан харах цонхыг нээнэ үү.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

`vscode` нээлттэй `Markdown` файл руу залгахын тулд командын мөрөнд оруулна `code xxx.md` .

[PicList](https://github.com/Kuingsmile/PicList) ашиглан зураг байршуулж, байршуулах товчлолыг тохируулж, нэг товшилтоор дэлгэцийн агшинг байршуулна уу.

Энэ нь байршуулсны дараа файлын нэрийг автоматаар хуулахыг дэмждэг `Markdown` энэ нь үр ашгийг ихээхэн нэмэгдүүлдэг.

Үүний зэрэгцээ та дараах тохиргоонд хандаж, файлыг өөрчилж, зургийн хэмжээг багасгахын тулд байршуулсан файлыг автоматаар `avif` тохируулах боломжтой.

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
