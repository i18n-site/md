# Recomendación del Editor

Cada persona tiene su editor de uso habitual; aquí compartimos nuestras mejores prácticas con `Markdown`.

Utilizamos [vscode](https://code.visualstudio.com/) para escribir en `Markdown` e instalamos el complemento [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) para visualizar en tiempo real mientras redactamos.

Como se muestra en la imagen siguiente, hacer clic con el botón derecho en el editor permite abrir la ventana de vista previa.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

En la línea de comandos, escribir `code xxx.md` abre `vscode` para editar el archivo `Markdown`.

Para subir imágenes, usamos [PicList](https://github.com/Kuingsmile/PicList); no olvide configurar un atajo de teclado para la carga, lo que permite subir capturas de pantalla con un solo clic.

Además, después de la carga, admite la copia automática del nombre del archivo en formato `Markdown`, lo que mejora significativamente la eficiencia.

Asimismo, puede referirse a la configuración siguiente para modificar el archivo y configurar la compresión automática de los archivos cargados a `avif`, reduciendo así el tamaño de las imágenes.

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