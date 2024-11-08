# כנס כתיבה של i18n.site MarkDown

## נקודת עיגון

`MarkDown` נקודות עוגן מסורתיות נוצרות על סמך תוכן טקסט במקרה של ריבוי שפות, פתרון זה אינו בר ביצוע.

פתרון נקודת העיגון המוסכם עם `i18n.site` הוא הוספת טקסט דומה ל `<a rel=id href="#xxx" id="xxx"></a>` ב `MarkDown` כדי ליצור באופן ידני את נקודת העיגון למיקום.

`<a rel=id href="#xxx" id="xxx"></a>` , כאן `rel=id` מגדיר את סגנון העמוד של נקודת העיגון, נא להחליף `xxx` בקיצור העוגן האנגלי האמיתי שלך.

עוגנים מתווספים בדרך כלל לכותרת, כגון:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

אפקט התצוגה הוא כדלקמן:

<img src="//p.3ti.site/1721381136.avif" width="350">

## לכתוב `HTML` ב `MarkDown`

ניתן להטמיע `HTML` בקוד `pug` .

תוכן ב `<pre>` אלמנטים לא יתורגם.

שילוב של שתי הנקודות הללו, אתה יכול בקלות לכתוב `HTML` ל `MarkDown` כדי להשיג אפקטים שונים של תצוגה.

[לחץ כאן i18n.site רשימת קוד השפה בדף הבית HTML כתובה](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , והקוד הוא כדלקמן :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

שימו לב ש `<style>` מוגדר גם ב `<pre>` לעיל.