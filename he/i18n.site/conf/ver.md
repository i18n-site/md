# גרסת הפרויקט

קח את פרויקט ההדגמה כדוגמה:

`en/demo2/v` הוא מספר הגרסה הנוכחי של הפרויקט, אשר יוצג מימין לשם הפרויקט במתאר סרגל הצד.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

`en/` קוד השפה המתאים לשפת המקור של התרגום `.i18n/conf.yml` .

אם שפת המקור שלך אינה אנגלית, יש למקם `v` הקובץ בספריית הפרויקט של שפת המקור שלך. 

היכולת לעיין בגרסאות היסטוריות של מסמכים נמצאת בפיתוח.

מומלץ לשנות את מספר הגרסה של המסמך רק בעת שחרור עדכונים גדולים (כגון `v1` , `v2` ) כדי למנוע עומס בדפים שנוספו לאינדקס על ידי מנועי החיפוש בגלל מספרי גרסאות רבים מדי.

## השתמש בקבצים `v` כדי לפצל אינדקסים של קבצים עבור פרויקטים שונים

בפרויקט ההדגמה, בנוסף `en/demo2/v` , אתה יכול גם לראות שהתוכן של ספריות `en/blog` ו- `en/demo1` ריקים `v` קבצים.

ריק `v` לא יוצג במתאר של סרגל הצד, אבל כל עוד הקובץ `v` קיים, ייווצר אינדקס עצמאי עבור הקבצים בספרייה ובתתי-ספריות.

על ידי פיצול האינדקסים של פרויקטים שונים, תוכל להימנע מגישה איטית הנגרמת על ידי טעינת האינדקס של כל הקבצים באתר כולו בבת אחת.

לדוגמה, בפרויקט ההדגמה קובץ [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) המתאים : `blog`

