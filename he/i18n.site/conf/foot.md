# כותרת תחתונה

עדיין לוקחים את פרויקט ההדגמה כדוגמה, הכותרת התחתונה של האתר `.i18n/htm/foot.pug` במדריך `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) היא שפת תבנית שיוצרת `HTML` .

[➔ לחץ כאן כדי ללמוד את הדקדוק של pug](https://pugjs.org)

**אל תכתוב `css` ו- `js` `foot.pug`** , אחרת יהיו שגיאות.

אנא עיין בדברים הבאים, הסגנון כתוב ב- `.css` והאינטראקציה מושגת על ידי יצירת רכיבי אינטרנט.

## סגנון כותרת תחתונה

בפרויקט `md/.i18n/htm` יש 3 `css` קבצים למטה.

* `foot.css` :
* `import.css` `i18n.site` : האתר כולו
* `conf.css` : וגופנים

### גופן סמל

סמל הכותרת התחתונה נוצר על iconfont.cn ( [גרסה אנגלית](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) יצירת גופן בשם `F`

אנא צור גופן סמל משלך לפי הצורך והחלף : התצורה הבאה ב- `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## רכיבי אינטרנט

`foot.pug` לא יכול לכתוב בו `js` אם נדרשת אינטראקציה, נא להתאים אישית את רכיב דף האינטרנט.

אתה יכול להגדיר [רכיב אינטרנט](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` ולאחר מכן להשתמש ברכיב ב- `foot.pug` .

קל ליצור רכיבי אינטרנט, כמו תגים מותאמים אישית `<x-img>`

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

הקוד בו הוא : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

הנה `${I18N.C}` המקביל נמצא ב- `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

באמצעות `${I18N.xxx}` בדומה לשיטת כתיבה זו, בשילוב עם `i18n.yml` , ניתן להשיג אינטרנציונליזציה רב-שונית של הכותרת התחתונה.

`class="a"` לקישור כדי למנוע את המרת הקישור ל- `MarkDown` , ראה :
 [: `YAML` למנוע `HTML` של הקישור ל `Markdown`](/i18/qa#H2) .