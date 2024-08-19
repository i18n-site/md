# Recommandation de l'éditeur

Chacun a son éditeur habituel, ici nous partageons nos meilleures pratiques avec `Markdown`.

Nous utilisons [vscode](https://code.visualstudio.com/) pour écrire du `Markdown`, tout en installant le plugin [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) pour une prévisualisation en temps réel pendant la rédaction.

Comme illustré ci-dessous, un clic droit dans l'éditeur permet d'ouvrir la fenêtre de prévisualisation.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

La commande `code xxx.md` saisie dans le terminal permet d'ouvrir le fichier `Markdown` avec `vscode`.

Pour le téléversement d'images, utilisez [PicList](https://github.com/Kuingsmile/PicList), n'oubliez pas de configurer un raccourci de téléversement pour uploader d'un clic après capture d'écran.

Il prend en charge la copie automatique du nom du fichier au format `Markdown` après le téléversement, ce qui est très efficace.

En même temps, vous pouvez vous référer à la configuration suivante pour modifier le fichier et activer la compression automatique des fichiers téléversés en `avif`, réduisant ainsi la taille des images.

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