# Редакторын Зөвлөмж

Хүн бүр өөрийн гэсэн дуртай редактортой байдаг `Markdown`

Бид [vscode](https://code.visualstudio.com/) `MarkDown` бичиж, [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) залгаасыг суулгаж, бодит цаг хугацаанд нь урьдчилан харах боломжтой.

Доор үзүүлсэн шиг засварлагч дээр хулганы баруун товчийг дарж урьдчилан харах цонхыг нээнэ үү.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

`Markdown` файлыг нээхийн тулд `vscode` дуудахын тулд командын мөрөнд `code xxx.md` оруулна уу.

[PicList](https://github.com/Kuingsmile/PicList) ашиглан зураг байршуулж, байршуулах товчлолыг тохируулж, нэг товшилтоор дэлгэцийн агшинг байршуулна уу.

Энэ нь байршуулсны дараа файлын нэрийг автоматаар `Markdown` формат руу хуулахыг дэмждэг бөгөөд энэ нь үр ашгийг ихээхэн сайжруулдаг.

Үүний зэрэгцээ та дараах тохиргоонд хандаж, файлыг өөрчилж, байршуулсан файлаа автоматаар `avif` болгон шахаж, зургийн хэмжээг багасгаж болно.

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