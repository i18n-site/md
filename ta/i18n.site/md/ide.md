# ஆசிரியர் பரிந்துரை

`Markdown` பிடித்தமான எடிட்டர் உள்ளது

`MarkDown` எழுதவும், நிகழ்நேரத்தில் முன்னோட்டம் பார்க்க செருகுநிரல் [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) நிறுவவும் [vscode](https://code.visualstudio.com/) .

கீழே காட்டப்பட்டுள்ளபடி, முன்னோட்ட சாளரத்தைத் திறக்க எடிட்டரில் வலது கிளிக் செய்யவும்.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

கோப்பு `Markdown` திறக்க `vscode` அழைக்க கட்டளை வரியில் `code xxx.md` உள்ளிடவும்.

படங்களைப் பதிவேற்ற, பதிவேற்ற ஷார்ட்கட் விசையை அமைக்கவும், ஸ்கிரீன்ஷாட்டை ஒரே கிளிக்கில் பதிவேற்றவும் [PicList](https://github.com/Kuingsmile/PicList)

பதிவேற்றிய பிறகு கோப்பு பெயரை `Markdown` வடிவத்திற்கு தானாக நகலெடுப்பதை இது ஆதரிக்கிறது, இது செயல்திறனை பெரிதும் மேம்படுத்துகிறது.

அதே நேரத்தில், நீங்கள் பின்வரும் உள்ளமைவைப் பார்க்கவும், கோப்பை மாற்றவும் மற்றும் பதிவேற்றிய கோப்பை தானாக `avif` ஆக சுருக்கி படத்தின் அளவைக் குறைக்க உள்ளமைக்கவும்.

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