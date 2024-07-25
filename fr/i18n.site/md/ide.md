# Recommandation De L'éditeur

Chacun a son propre éditeur préféré. Partageons ici nos meilleures pratiques `Markdown`

Nous utilisons [vscode](https://code.visualstudio.com/) Write `MarkDown` et installons le plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) pour prévisualiser en temps réel pendant l'écriture.

Comme indiqué ci-dessous, cliquez avec le bouton droit dans l'éditeur pour ouvrir la fenêtre d'aperçu.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Entrez `code xxx.md` sur la ligne de commande pour appeler `vscode` open `Markdown` file.

Utilisez [PicList](https://github.com/Kuingsmile/PicList) pour télécharger des images, n'oubliez pas de définir la touche de raccourci de téléchargement et de télécharger la capture d'écran en un seul clic.

Il prend en charge la copie automatique du `Markdown` du nom de fichier après le téléchargement, ce qui améliore considérablement l'efficacité.

En même temps, vous pouvez vous référer à la configuration suivante, modifier le fichier et configurer le fichier téléchargé pour qu'il soit automatiquement compressé en `avif` afin de réduire la taille de l'image.

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
