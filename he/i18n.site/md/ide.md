# המלצת עורך

לכל אחד יש את העורך המועדף שלו כאן אנו חולקים את `Markdown` השיטות המומלצות שלנו.

אנו משתמשים [vscode](https://code.visualstudio.com/) כדי לכתוב `MarkDown` ולהתקין את התוסף [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) לתצוגה מקדימה בזמן אמת בזמן הכתיבה.

כפי שמוצג להלן, לחץ לחיצה ימנית בעורך כדי לפתוח את חלון התצוגה המקדימה.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

הזן `code xxx.md` בשורת הפקודה כדי לקרוא `vscode` לפתיחת קובץ `Markdown` .

השתמש ב- [PicList](https://github.com/Kuingsmile/PicList) כדי להעלות תמונות, זכור להגדיר את מקש קיצור ההעלאה, והעלה את צילום המסך בלחיצה אחת.

הוא תומך בהעתקה אוטומטית של שם הקובץ לפורמט `Markdown` לאחר ההעלאה, מה שמשפר מאוד את היעילות.

במקביל, אתה יכול לעיין בתצורה הבאה, לשנות את הקובץ ולהגדיר את הקובץ שהועלה כך שיידחס אוטומטית ל `avif` כדי להקטין את גודל התמונה.

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