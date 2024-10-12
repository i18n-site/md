# Recomendación del Editor

Cada uno tiene su editor de uso habitual; aquí compartimos nuestras mejores prácticas con `Markdown`.

Utilizamos [vscode](https://code.visualstudio.com/) para escribir en `Markdown` e instalamos el complemento [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) para visualizar en tiempo real mientras redactamos.

Como se muestra en la imagen siguiente, haciendo clic con el botón derecho en el editor, se puede abrir la ventana de vista previa.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

En la línea de comandos, ingrese `code xxx.md` para abrir el archivo `Markdown` con `vscode`.

Para subir imágenes, usamos [PicList](https://github.com/Kuingsmile/PicList); no olvide configurar el atajo de teclado para la carga, y después de capturar la pantalla, suba con un solo clic.

Soporta la copia automática del nombre del archivo en formato `Markdown` después de la carga, lo cual mejora significativamente la eficiencia.

Además, puede referirse a la siguiente configuración para modificar el archivo y ajustar la carga automática de archivos para que se compriman en `avif`, reduciendo así el tamaño de las imágenes.

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