# המלצת עורך

לכל אחד יש את העורך המועדף שלו. בואו נשתף כאן את השיטות המומלצות שלנו `Markdown`

אנו משתמשים בכתובת [vscode](https://code.visualstudio.com/) ומתקינים את התוסף [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) לתצוגה `MarkDown` בזמן אמת.

כפי שמוצג להלן, לחץ לחיצה ימנית בעורך כדי לפתוח את חלון התצוגה המקדימה.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

הזן `code xxx.md` בשורת הפקודה כדי לקרוא `vscode` `Markdown` פתוח.

השתמש ב- [PicList](https://github.com/Kuingsmile/PicList) כדי להעלות תמונות, זכור להגדיר את מקש קיצור ההעלאה, והעלה את צילום המסך בלחיצה אחת.

זה תומך בהעתקה אוטומטית של שם `Markdown` לאחר ההעלאה, מה שמשפר מאוד את היעילות.

במקביל, אתה יכול לעיין בתצורה הבאה, לשנות את הקובץ ולהגדיר את הקובץ שהועלה כך שיידחס אוטומטית ל- `avif`

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
