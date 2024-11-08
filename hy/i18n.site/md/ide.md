# Խմբագրի Առաջարկություն

Յուրաքանչյուր ոք ունի իր սիրելի խմբագրիչը: Այստեղ մենք կիսում ենք մեր `Markdown` լավագույն փորձը:

Մենք օգտագործում ենք `MarkDown` [vscode](https://code.visualstudio.com/) համար և տեղադրում ենք [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) plug-in՝ գրելիս իրական ժամանակում նախադիտելու համար:

Ինչպես ցույց է տրված ստորև, աջ սեղմեք խմբագրի վրա՝ նախադիտման պատուհանը բացելու համար:

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Հրամանի տողում մուտքագրեք `code xxx.md` `vscode` `Markdown` բացելու համար զանգահարելու համար:

Օգտագործեք [PicList](https://github.com/Kuingsmile/PicList) նկարներ վերբեռնելու համար, հիշեք, որ տեղադրեք վերբեռնման դյուրանցման ստեղնը և վերբեռնեք սքրինշոթը մեկ սեղմումով:

Այն աջակցում է ավտոմատ կերպով պատճենել ֆայլի անունը `Markdown` ձևաչափով բեռնումից հետո, ինչը զգալիորեն բարելավում է արդյունավետությունը:

Միևնույն ժամանակ, դուք կարող եք դիմել հետևյալ կազմաձևին, փոփոխել ֆայլը և կարգավորել վերբեռնված ֆայլը, որպեսզի այն ավտոմատ կերպով սեղմվի մինչև `avif` ՝ պատկերի չափը նվազեցնելու համար:

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