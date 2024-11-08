# Redaktor Maslahaty

Her kimiň öz halaýan redaktory bar Bu ýerde iň gowy `Markdown` tejribämizi paýlaşýarys.

`MarkDown` ýazmak we plaginleri [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) ýazmak üçin hakyky wagtda öňünden görmek üçin ulanýarys [vscode](https://code.visualstudio.com/)

Aşakda görkezilişi ýaly, deslapky penjire açmak üçin redaktorda sag düwmä basyň.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

`Markdown` faýly açmak üçin `vscode` jaň etmek üçin buýruk setirine `code xxx.md` giriziň.

Suratlary ýüklemek üçin [PicList](https://github.com/Kuingsmile/PicList) , ýükleme gysga düwmesini goýmagy ýatdan çykarmaň we skrinshoty bir gezek basyp ýükläň!

Uploadükläniňizden soň faýlyň adyny `Markdown` formata awtomatiki göçürmegi goldaýar, bu netijeliligi ep-esli ýokarlandyrýar.

Şol bir wagtyň özünde, aşakdaky konfigurasiýa ýüz tutup, faýly üýtgedip we ýüklenen faýly şekiliň ululygyny azaltmak üçin awtomatiki usulda `avif` a gysmak üçin düzüp bilersiňiz.

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