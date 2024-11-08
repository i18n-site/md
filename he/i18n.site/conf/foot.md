# כותרת תחתונה מותאמת אישית

עדיין לוקחים את פרויקט ההדגמה כדוגמה, `.i18n/htm/foot.pug` בספריית `md` מגדיר את הכותרת התחתונה של האתר.

![](https://p.3ti.site/1721286077.avif)

## סגנון כותרת תחתונה

ישנם שלושה קבצים `css` מתחת `md/.i18n/htm` בפרויקט ההדגמה.

* `foot.css` סגנון כותרת :
* `import.css` : סגנון `i18n.site` עבור האתר כולו
* `conf.css` סמלים וגופנים של כותרת :

### גופן סמל

סמל הכותרת התחתונה נוצר על ידי יצירת גופן בשם iconfont.cn ( [גרסה אנגלית](https://www.iconfont.cn/?lang=en-us) `F` /[版](https://www.iconfont.cn/?lang=zh)).

אנא צור גופן סמל משלך לפי הצורך והחלף את התצורה הבאה ב `conf.css` :

```
@font-face {
  font-family: "F";
  src: url(//p.3ti.site/ico1.woff2) format("woff2");
}

#Ft>b>a.site {
  background: url("//p.3ti.site/i18n.svg") 0 0 / cover;
  display: block;
  height: 24px;
  opacity: 0.8;
  width: 115px;
  flex-shrink: 0;
}
```

נא לא להפנות ישירות לקובץ הגופן של iconfont.cn מכיוון שלא ניתן לטעון אותו בדפדפן הספארי.

## רכיבי אינטרנט

אינך יכול לכתוב `js` ב `foot.pug` אם נדרשת אינטראקציה, אנא התאם אישית את רכיב האינטרנט.

ניתן להגדיר [רכיב אינטרנט](https://www.freecodecamp.org/news/build-your-first-web-component/) ב `md/.i18n/htm/index.js` ולאחר מכן להשתמש ב `foot.pug` .

קל ליצור רכיבי אינטרנט, כגון `<x-img>` מותאמים אישית0 .

```js
customElements.define(
  'x-img',
  class extends HTMLElement {
    constructor() {
      super();
      var img = document.createElement('img');
      img.src = '//p.3ti.site/i18n.svg';
      img.style = "height:99px;width:99px;";
      this.append(img);
    }
  }
)
```

## כותרת תחתונה רב לשונית

הקוד ב `.i18n/htm/foot.pug` הוא כדלקמן :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

כאן `${I18N.C}` מתאים ל `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

באמצעות `${I18N.xxx}` הדומה לשיטת כתיבה זו, בשילוב עם `i18n.yml` , ניתן להשיג בינאום רב-לשוני של הכותרת התחתונה.

הוספת `class="a"` לקישור היא כדי למנוע את המרת הקישור ל `MarkDown` ראה :
 [➔ `YAML` כיצד למנוע המרת קישור `HTML` `Markdown` :](/i18/qa#H2) .