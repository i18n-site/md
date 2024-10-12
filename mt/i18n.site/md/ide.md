# Rakkomandazzjoni Tal-Editur

Kulħadd għandu l-editur favorit tiegħu Hawnhekk naqsmu l `Markdown` aħjar prattiki tagħna.

Aħna nużaw [vscode](https://code.visualstudio.com/) biex niktbu `MarkDown` u ninstallaw il-plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) biex nipprevedi f'ħin reali waqt il-kitba.

Kif muri hawn taħt, ikklikkja l-lemin fl-editur biex tiftaħ it-tieqa tal-previżjoni.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Daħħal `code xxx.md` fil-linja tal-kmand biex issejjaħ `vscode` biex tiftaħ il-fajl `Markdown` .

Uża [PicList](https://github.com/Kuingsmile/PicList) biex ittella' l-istampi, ftakar biex issettja l-buttuna tat-tlugħ, u ttella' l-iskrin b'klikk waħda.

Jappoġġja l-ikkuppjar awtomatikament tal-isem tal-fajl f'format `Markdown` wara t-tlugħ, li jtejjeb ħafna l-effiċjenza.

Fl-istess ħin, tista 'tirreferi għall-konfigurazzjoni li ġejja, timmodifika l-fajl, u tikkonfigura l-fajl imtella' biex jiġi kkompressat awtomatikament għal `avif` biex jitnaqqas id-daqs tal-immaġni.

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