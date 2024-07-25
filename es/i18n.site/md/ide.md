# Recomendación Del Editor

Cada uno tiene su propio editor favorito. Compartamos nuestras mejores prácticas aquí `Markdown`

Usamos [vscode](https://code.visualstudio.com/) Write `MarkDown` e instalamos el complemento [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) para obtener una vista previa en tiempo real mientras escribimos.

Como se muestra a continuación, haga clic derecho en el editor para abrir la ventana de vista previa.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Ingrese `code xxx.md` en la línea de comando para llamar a `vscode` abrir `Markdown` archivo.

Utilice [PicList](https://github.com/Kuingsmile/PicList) para cargar imágenes, recuerde configurar la tecla de acceso directo de carga y cargue la captura de pantalla con un solo clic.

Admite la copia automática del formato del nombre `Markdown` archivo después de cargarlo, lo que mejora enormemente la eficiencia.

Al mismo tiempo, puede consultar la siguiente configuración, modificar el archivo y configurar el archivo cargado para que `avif` comprima automáticamente para reducir el tamaño de la imagen.

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
