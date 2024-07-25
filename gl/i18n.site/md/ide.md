# Recomendación Do Editor

Cada un ten o seu propio editor favorito Imos compartir aquí as nosas mellores prácticas `Markdown`

Usamos `MarkDown` [vscode](https://code.visualstudio.com/) instalamos o complemento [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) para previsualizar en tempo real.

Como se mostra a continuación, fai clic co botón dereito no editor para abrir a xanela de vista previa.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Introduza `code xxx.md` na liña de comandos para chamar a `vscode` abrir o ficheiro `Markdown` .

Usa [PicList](https://github.com/Kuingsmile/PicList) para cargar imaxes, recorda configurar a tecla de atallo de carga e carga a captura de pantalla cun só clic.

Admite copiar automaticamente o formato do nome `Markdown` ficheiro despois da carga, o que mellora moito a eficiencia.

Ao mesmo tempo, pode consultar a seguinte configuración, modificar o ficheiro e configurar o ficheiro cargado para `avif` se comprima automaticamente para reducir o tamaño da imaxe.

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
