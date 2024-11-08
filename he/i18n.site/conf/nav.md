# ניווט מותאם אישית

בואו ניקח את אתר ההדגמה [i18n-demo.github.io](//i18n-demo.github.io) כדי להסביר כיצד להתאים אישית את הניווט.

![](https://p.3ti.site/1731036697.avif)

הקבצים התואמים לאזורים הממוספרים באיור לעיל הם כדלקמן:

1. שמאל [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. נכון [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) היא שפת תבנית שיוצרת `HTML` .

[➔ לחץ כאן כדי ללמוד את הדקדוק של pug](https://pugjs.org)

מחרוזת הפורמט `${I18N.sponsor}` משמשת בקובץ ליישום בינלאומי, והתוכן שלה יוחלף בטקסט המתאים בספריית שפת המקור [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml)

**אל תכתוב `css` ו `js` ב `pug`** , אחרת תהיה שגיאה.

סגנונות נכתבים ל `css` , ואינטראקציה מושגת על ידי יצירת רכיבי אינטרנט.

כאן, הקובץ המתאים לסגנון של סרגל הניווט [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) :