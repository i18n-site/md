# Рэкамендацыя Рэдактара

У кожнага ёсць свой любімы рэдактар. Тут мы дзелімся `Markdown` лепшымі практыкамі.

Мы выкарыстоўваем [vscode](https://code.visualstudio.com/) `MarkDown` ўсталёўваем плагін [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) для папярэдняга прагляду ў рэжыме рэальнага часу.

Як паказана ніжэй, пстрыкніце правай кнопкай мышы ў рэдактары, каб адкрыць акно папярэдняга прагляду.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Увядзіце `code xxx.md` у камандны радок, каб выклікаць `vscode` , каб адкрыць файл `Markdown` .

Скарыстайцеся [PicList](https://github.com/Kuingsmile/PicList) , запампуйце ярлык і запампуйце скрыншот адным пстрычкай мышы.

Ён падтрымлівае аўтаматычнае капіраванне імя файла ў фармат `Markdown` пасля загрузкі, што значна павышае эфектыўнасць.

У той жа час вы можаце звярнуцца да наступнай канфігурацыі, змяніць файл і наладзіць аўтаматычнае сцісканне загружанага файла да `avif` , каб паменшыць памер выявы.

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