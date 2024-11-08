# Recomendación Do Editor

Todo o mundo ten o seu propio editor favorito Aquí compartimos as nosas `Markdown` mellores prácticas.

Usamos [vscode](https://code.visualstudio.com/) para escribir `MarkDown` e instalar o complemento [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) para previsualizar en tempo real mentres escribimos.

Como se mostra a continuación, fai clic co botón dereito no editor para abrir a xanela de vista previa.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Introduza `code xxx.md` na liña de comandos para chamar `vscode` para abrir o ficheiro `Markdown` .

Usa [PicList](https://github.com/Kuingsmile/PicList) para cargar imaxes, recorda configurar a tecla de atallo de carga e carga a captura de pantalla cun só clic.

Admite copiar automaticamente o nome do ficheiro ao formato `Markdown` despois da carga, o que mellora moito a eficiencia.

Ao mesmo tempo, pode consultar a seguinte configuración, modificar o ficheiro e configurar o ficheiro cargado para que se comprima automaticamente a `avif` para reducir o tamaño da imaxe.

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