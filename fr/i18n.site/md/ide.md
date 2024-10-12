# Recommandation De L'éditeur

Chacun a son éditeur préféré. Nous partageons ici nos `Markdown` meilleures pratiques.

Nous utilisons [vscode](https://code.visualstudio.com/) pour écrire `MarkDown` et installons le plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) pour prévisualiser en temps réel pendant l'écriture.

Comme indiqué ci-dessous, cliquez avec le bouton droit dans l'éditeur pour ouvrir la fenêtre d'aperçu.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Entrez `code xxx.md` dans la ligne de commande pour appeler `vscode` pour ouvrir le fichier `Markdown` .

Utilisez [PicList](https://github.com/Kuingsmile/PicList) pour télécharger des images, n'oubliez pas de définir la touche de raccourci de téléchargement et de télécharger la capture d'écran en un seul clic.

Il prend en charge la copie automatique du nom du fichier au format `Markdown` après le téléchargement, ce qui améliore considérablement l'efficacité.

Dans le même temps, vous pouvez vous référer à la configuration suivante, modifier le fichier et configurer le fichier téléchargé pour qu'il soit automatiquement compressé à `avif` afin de réduire la taille de l'image.

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