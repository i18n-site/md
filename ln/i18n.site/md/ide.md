# Likanisi Ya Mobongisi-Nzela

Moto na moto azali na éditeur na ye oyo alingaka mingi Awa tozali kokabola `Markdown` meilleures pratiques na biso.

Tosalelaka [vscode](https://code.visualstudio.com/) pona kokoma `MarkDown` pe ko installer plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) pona ko aperçu en temps réel tango ya kokoma.

Ndenge emonisami awa na nse, finá na lobɔkɔ ya mobali na mobongisi mpo na kofungola lininisa ya aperçu.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Tyá `code xxx.md` na molɔngɔ ya komande mpo na kobenga `vscode` mpo na kofungola fisyé `Markdown` .

Salelá [PicList](https://github.com/Kuingsmile/PicList)

Ezali kosunga kosala copie automatiquement ya kombo ya fichier na format `Markdown` sima ya ko uploader, oyo ebongisaka mingi efficacité.

Na tango moko, okoki kotala configuration oyo elandi, kobongola fichier, mpe ko configurer fichier oyo otie mpo e compresser automatiquement na `avif` mpo na kokitisa taille ya image.

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