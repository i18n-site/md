# Rekòmandasyon Editè

Tout moun gen pwòp editè yo pi renmen Isit la nou pataje `Markdown` pi bon pratik nou yo.

Nou itilize [vscode](https://code.visualstudio.com/) pou ekri `MarkDown` epi enstale plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) pou preview an tan reyèl pandan w ap ekri.

Jan yo montre anba a, klike sou editè a pou w ouvri fenèt preview la.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Antre `code xxx.md` nan liy kòmand pou rele `vscode` pou louvri fichye `Markdown` .

Sèvi ak [PicList](https://github.com/Kuingsmile/PicList) pou telechaje foto, sonje mete kle rakoursi telechaje a, epi telechaje ekran an ak yon sèl klike sou.

Li sipòte otomatikman kopye non dosye a nan fòma `Markdown` apre w fin telechaje, ki amelyore efikasite anpil.

An menm tan an, ou ka refere a konfigirasyon sa a, modifye fichye a, ak konfigirasyon fichye a Uploaded yo dwe otomatikman konprese a `avif` diminye gwosè a imaj.

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