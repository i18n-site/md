# Redaktora Ieteikums

Ikvienam ir savs iecienītākais redaktors. Dalīsimies ar mūsu labāko praksi `Markdown`

Mēs izmantojam [vscode](https://code.visualstudio.com/) un instalējam spraudni [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) `MarkDown` lai priekšskatītu rakstīšanas laikā.

Kā parādīts zemāk, ar peles labo pogu noklikšķiniet uz redaktora, lai atvērtu priekšskatījuma logu.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Komandrindā ievadiet `code xxx.md` , lai izsauktu `vscode` open `Markdown` failu.

Izmantojiet [PicList](https://github.com/Kuingsmile/PicList) , lai augšupielādētu attēlus, neaizmirstiet iestatīt augšupielādes īsinājumtaustiņu un augšupielādēt ekrānuzņēmumu ar vienu klikšķi.

Tas atbalsta faila `Markdown` automātisku kopēšanu pēc augšupielādes, kas ievērojami uzlabo efektivitāti.

Tajā pašā laikā varat atsaukties uz tālāk norādīto konfigurāciju, modificēt failu un konfigurēt augšupielādēto failu `avif` lai tas tiktu automātiski saspiests, lai samazinātu attēla izmēru.

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
