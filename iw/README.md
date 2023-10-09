# I18N.SITE · שפה ללא גבולות<img Src="//i-01.eu.org/i18n/logo.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, מחולל אתרים סטטי רב שפות, יכול לתרגם אוטומטית את Markdown [ליותר ממאה שפות שונות](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

יש אנשים שירצו לשאול, עכשיו שלדפדפנים יש פונקציות תרגום מובנות, האם זה מיותר לבצע אינטרנציונל של האתר?

אני רוצה לומר שרק **על ידי אינטרנציונל של האתר כולו נוכל לתמוך בחיפוש טקסט מלא רב-לשוני באתר ובאופטימיזציה למנועי חיפוש** .

## הדרכה

## מבוא פונקציה

### שמור על פורמט Markdown

### שנה תרגום

לאחר שינוי התרגום, עליך להפעיל מחדש `./i18n.sh` כדי לעדכן את המטמון.

### הערות תרגום

הערות תרגום צריכות לציין את השפה אחרי \```, כגון ` ```rust` .

תומך כרגע בתרגום הערות עבור rust, c, cpp, java, js, coffee, python ו-bash.

ערוך את [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) כדי להוסיף תמיכת תרגום להערות בשפות נוספות.

### הגדר פרוקסי

הגדרת משתני הסביבה הבאים מאפשרת לקריאות ל-Google Translate API לעבור דרך ה-proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### הטבעה משתנה

```
test: 测试变量<br 0>嵌入
```

### רוקן את המטמון

```bash
rm -rf .i18n/.cache
```
