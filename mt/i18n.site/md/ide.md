# Rakkomandazzjoni Tal-Editur

Kulħadd għandu l-editur favorit tiegħu Ejja naqsmu l-aħjar prattiki tagħna hawn `Markdown`

[Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) nużaw `MarkDown` [vscode](https://code.visualstudio.com/)

Kif muri hawn taħt, ikklikkja l-lemin fl-editur biex tiftaħ it-tieqa tal-previżjoni.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

`code xxx.md` fuq il-linja tal-kmand biex issejjaħ `vscode` open `Markdown` file.

Uża [PicList](https://github.com/Kuingsmile/PicList) biex ittella' l-istampi, ftakar biex issettja l-buttuna tat-tlugħ, u ttella' l-iskrin b'klikk waħda.

Jappoġġa l-ikkupjar awtomatikament tal `Markdown` format tal-isem tal-fajl wara t-tlugħ, li jtejjeb ħafna l-effiċjenza.

Fl-istess ħin, tista 'tirreferi għall-konfigurazzjoni li ġejja, timmodifika l-fajl, u tikkonfigura l-fajl imtella' biex jiġi kkompressat awtomatikament biex `avif` id-daqs tal-immaġni.

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
