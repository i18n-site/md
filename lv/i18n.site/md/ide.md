# Redaktora Ieteikums

Katram ir savs iecienītākais redaktors. Šeit mēs dalāmies ar mūsu `Markdown` paraugpraksi.

Mēs izmantojam [vscode](https://code.visualstudio.com/) lai ierakstītu `MarkDown` un instalētu spraudni [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) , lai priekšskatītu reāllaikā rakstīšanas laikā.

Kā parādīts zemāk, ar peles labo pogu noklikšķiniet uz redaktora, lai atvērtu priekšskatījuma logu.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Komandrindā ievadiet `code xxx.md` , lai izsauktu `vscode` un atvērtu failu `Markdown` .

Izmantojiet [PicList](https://github.com/Kuingsmile/PicList) , lai augšupielādētu attēlus, neaizmirstiet iestatīt augšupielādes īsinājumtaustiņu un augšupielādēt ekrānuzņēmumu ar vienu klikšķi.

Tā atbalsta automātisku faila nosaukuma kopēšanu `Markdown` formātā pēc augšupielādes, kas ievērojami uzlabo efektivitāti.

Vienlaikus varat atsaukties uz tālāk norādīto konfigurāciju, modificēt failu un konfigurēt, lai augšupielādētais fails tiktu automātiski saspiests līdz `avif` , lai samazinātu attēla izmēru.

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