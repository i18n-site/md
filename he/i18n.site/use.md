# התקן &

## אסימון תצורה

כלי התרגום `i18` מוטבע, `i18n.site` [לחץ כאן כדי לעיין במסמך `i18` כדי להגדיר את אסימון הגישה](/i18/use) .

## להתקין

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## פרויקט הדגמה

בואו נתחיל עם פרויקט הדגמה ונלמד כיצד להשתמש `i18n.site`

אנו משכפלים תחילה את מאגר ההדגמה ונפעיל את הפקודה באופן הבא:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

משתמשים ביבשת סין יכולים:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

שם הספרייה של שיבוט בסיס הקוד חייב להיות `md` כדי לאפשר תצוגה מקדימה מקומית עם `docker` `demo.i18n.site`

### לתרגם

ראשית, הזן `md` הספרייה והפעל `i18n.site` , אשר יתרגם `en` ל- `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

לאחר ההפעלה, יווצרו קבצי תרגום ומטמון אנא זכור להוסיף אותם למאגר `git add . ` `md` .

### תצוגה מקדימה מקומית

התקן `docker` ( `MAC` ממליצים להשתמש ב- [orbstack](https://orbstack.dev) בתור זמן הריצה של `docker` ).

לאחר מכן, היכנס `docker` והפעל `./up.sh` , ולאחר מכן [https://127.0.0.1](https://127.0.0.1) בתצוגה מקדימה מקומית.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### תוכן דואר

`i18n.site` ארכיטקטורת [אפליקציה של עמוד אחד](https://developer.mozilla.org/docs/Glossary/SPA) , ועמוד הכניסה לאתר ותוכן האתר נפרסים באופן עצמאי.

לאחר הפעלת התרגום שלעיל, ספריות `htm` ו- `v` יופקו בספרייה `md/out/dev`

כאן, `dev` מציין שהוא בנוי על בסיס קובץ `.i18n/htm/dev.yml` .

תחת : `dev`

מתחת `htm` נמצא עמוד הכניסה לאתר.

`v` מכיל את תוכן האתר עם מספר הגרסה.

תצוגה מקדימה מקומית תעתיק את כל הקבצים `out/dev/v/0.1.0` ללא קשר למספר הגרסה.

לשחרור רשמי, קבצים שהשתנו יועתקו לספריית מספרי הגרסה החדשה.

#### השתמש ב-c כדי לציין את קובץ התצורה

קבצי תצורה שונים ייצרו ספריות מתאימות תחת הספרייה `out`

לדוגמה, `.i18n/htm/ol.yml` תיצור ספרייה `out/ol` .

`dev.yml` ו- `ol.yml` הן תצורות ברירת המחדל.

`dev` הוא הקיצור של `development` , המייצג את סביבת הפיתוח, משמש לתצוגה מקדימה מקומית, והוא גם ברירת המחדל של קובץ התצורה.
`ol` הוא הקיצור של `online` , המייצג את הסביבה המקוונת, משמש לשחרור רשמי, והוא גם קובץ התצורה של ברירת המחדל בעת פרסום אל `npm` באמצעות פרמטר שורת הפקודה `-n` .

אתה יכול גם ליצור קבצי תצורה אחרים `--htm_conf` בשורת הפקודה כדי לציין את שם קובץ התצורה:

לדוגמה:
```
i18n.site --htm_conf yourConfig --save
```

כאן `--save` מציין את מספר גרסת העדכון.

#### <a rel=id href="#npm" id="npm"></a> פרסם תוכן ב-npmjs.com

פרסום תוכן אל [npmjs.com](//npmjs.com) הוא פתרון ברירת המחדל המומלץ (ראה [זמינות גבוהה בחזית](/i18n.site/feature#ha) ).

##### npm login &

התקן `nodejs` השתמש ב- `npm login` כדי להיכנס.

ערוך `md/.i18n/htm/ol.yml` שנה `i18n.site` ב- `v: //unpkg.com/i18n.site` לשלך `npm` שם החבילה.

פשוט השתמש בשם החבילה הפנויה ב- [npmjs.com](//npmjs.com)

בעת פרסום המבוסס על חבילת `npm` , **הקפד להשתמש `//unpkg.com/`** בתור הקידומת של הערך `v:` זמן המטמון `i18n.site` תחת נתיב הקידומת הזה `/.v` מותאם במיוחד כדי לאפשר צפייה בזמן של מהדורות חדשות.

הפעל `i18n.site --npm` או `i18n.site -n` `md` כדי לתרגם ולפרסם.

אם אתה משתמש בסביבת אינטגרציה רציפה לפרסום, אין צורך להתקין `nodejs` פשוט העתק את `~/.npmrc` המחוברת והפורסמה לסביבה.

אם תשנה את שם החבילה ב- `v:` `ol.yml` , אנא **הקפד למחוק `.i18n/v/ol` תחילה** ולאחר מכן לפרסם אותו.

##### שרת פרוקסי שפורסם על ידי npm

אם משתמשים ביבשת סין נתקלים בבעיות רשת ואינם יכולים לפרסם `npm` החבילה, הם יכולים להגדיר את משתנה הסביבה `https_proxy` כדי להגדיר את שרת ה-proxy.

בהנחה שיציאת שרת ה-proxy שלך היא `7890` אתה יכול לכתוב:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### תוכן באירוח עצמי

אם אתה רוצה לארח את התוכן בעצמך, תחילה `md/.i18n/htm/ol.yml` ושנה את `v: //unpkg.com/i18n.site` לקידומת כתובת האתר שלך, כגון `v: //i18n-v.xxx.com` .

היכנס לספריית `md`

```
i18n.site --htm_conf ol --save
```

או קיצור

```
i18n.site -c ol -s
```

לאחר מכן, הגדר את התוכן בספריה `md/out/ol/v` קידומת כתובת האתר שהוגדר ב- `v:` .

לבסוף, **הגדר את זמן המטמון של הנתיב המסתיים `/.v` `1s`** , אחרת לא ניתן לגשת לתוכן החדש ששוחרר באופן מיידי.

ניתן להגדיר את זמן המטמון עבור נתיבים אחרים לשנה אחת או יותר כדי לצמצם בקשות מיותרות.

##### מארח תוכן ל-s3

כדי לארח תוכן, בנוסף לשימוש בשרת משלך, `CDN` נפוצה נוספת היא להשתמש + `S3`

אתה יכול להשתמש [rclone](https://rclone.org) `S3` , ואז לעיין בסקריפט למטה ולהעתיק רק שינויים מצטברים ל- `S3` בכל פעם שאתה מפרסם.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

זכור להגדיר את `CDN` כך שזמן המטמון של הנתיב המסתיים ב- `/.v` הוא `1s` , אחרת לא תוכל לגשת לתוכן החדש שיצא באופן מיידי.

### לפרסם אתר

ניתן לפרוס את האתר בכל מקום [github page](https://pages.github.com) ו- [cloudflare page](https://pages.cloudflare.com) הן אפשרויות טובות.

מכיוון `index.html` מאמץ את הארכיטקטורה של [יישום בעל עמוד בודד](https://developer.mozilla.org/docs/Glossary/SPA) , זכור לכתוב מחדש את נתיב ה-URL שאינו מכיל `. `

יש לפרוס את דף הכניסה לאתר פעם אחת בלבד, ואין צורך לפרוס מחדש את דף הכניסה לאתר לצורך עדכוני תוכן הבאים.

#### פרוס בדף github

תחילה [לחץ github כדי ליצור ארגון](https://github.com/account/organizations/new?plan=free) שם הארגון הבא הוא `i18n-demo`

לאחר מכן צור מחסן תחת הארגון `i18n-demo.github.io` (אנא החלף את `i18n-demo` בשם הארגון שיצרת):

<img alt="" src="https://p.3ti.site/1721098657.avif">

בעת פרסום התוכן במאמר הקודם, הוא נוצר `out/ol/htm` הכנס לספרייה זו והפעל :

```
ln -s index.html 404.html
```


מכיוון ש- `github page` אינו תומך בשכתוב של נתיב כתובות, לכן משתמשים במקום זאת `404.html` .

לאחר מכן הפעל את הפקודה הבאה `htm` (זכור להחליף `i18n-demo/i18n-demo.github.io.git` בכתובת המחסן שלך) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

לאחר דחיפת הקוד, המתן לפריסה של `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

לדף הדגמה אנא ראה:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### פרוס בדף cloudflare

בהשוואה [cloudflare page](//pages.cloudflare.com) `github page` הוא מספק שכתוב של נתיבים וידידותי יותר לסין ומומלץ יותר להשתמש בו.

הפריסה מבוססת בדרך כלל על הפריסה של `github page` לעיל `cloudflare page`

צור פרויקט ואגד את המחסן לעיל `i18n-demo.github.io`

התהליך מוצג באיור שלהלן:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

אנא לחץ `Add Account` כדי להעניק גישה לארגון `i18n-demo` .

אם קשרת את המחסן של ארגון אחר, ייתכן שתצטרך `Add Account` פעמיים כדי לאשר אותו פעמיים לפני שהארגון החדש יוצג.

<img alt="" src="https://p.3ti.site/1721118306.avif">

לאחר מכן בחר `i18n-demo.github.io` , ולאחר מכן לחץ על `Begin setup` , והשתמש בערכי ברירת המחדל עבור השלבים הבאים.

<img alt="" src="https://p.3ti.site/1721118490.avif">

לאחר הכריכה בפעם הראשונה, עליך להמתין מספר דקות לפני שתוכל לגשת אליו.

לאחר הפריסה, תוכל לאגד שם דומיין מותאם אישית.

<img alt="" src="https://p.3ti.site/1721119459.avif">

לאחר קשירת שם הדומיין המותאם אישית, עבור אל שם הדומיין כדי להגדיר את שכתוב הנתיב מחדש של היישום בעל עמוד בודד, כפי שמוצג להלן:

<img alt="" src="https://p.3ti.site/1721119320.avif">

הכללים בתמונה למעלה הם כדלקמן בבקשה `i18n.site` בשורה הראשונה למטה בשם הדומיין המחובר אליך.

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

בנוסף, אנא הגדר את כללי המטמון, כפי שמוצג להלן, והגדר את משך המטמון לחודש אחד.

<img alt="" src="https://p.3ti.site/1721125111.avif">

אנא שנה את התאמת שם הדומיין בשלב השני בתמונה למעלה לשם הדומיין שקשרת.

#### אופטימיזציה של פריסת אתרים ביבשת סין

אם ברצונך להשיג ביצועי נגישות טובים יותר בסביבת הרשת של סין היבשתית, אנא [רשום תחילה שם דומיין](//beian.aliyun.com) .

לאחר `out/ol/htm` , השתמש באחסון האובייקטים של ספקי ענן ביבשת `CDN` +

אתה יכול להשתמש במחשוב קצה כדי לשכתב את הנתיב להסתגלות ליישומים של עמוד בודד, כגון [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
}
r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})
})
```
<img alt="" src="https://p.3ti.site/1721121273.avif">

`MX` שרשומות ורשומות `CNAME` אינן יכולות להתקיים במקביל, אם אתה רוצה לקבל דוא"ל עם שמות דומיין בו זמנית, אתה צריך לשתף פעולה עם [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) כדי לשטח את `CNAME` ל- `A` record.

בנוסף, מכיוון שחיובי התעבורה בחו"ל של ספקי ענן ביבשת סין יקרים יחסית, אם אתה רוצה לייעל את העלויות, אתה יכול להשתמש [ברזולוציה הגיאוגרפית החינמית של Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ובשם הדומיין המותאם אישית של [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (כפי שמוצג להלן). הסטת תנועה──תנועה ביבשת סין Baidu Cloud `CDN` תנועה בינלאומית עולה cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

פתרונות אופטימיזציה של פריסה אלה מורכבים יותר ויוצגו בפרקים נפרדים בעתיד.

#### הפנייה כללית של שם דומיין

אם אתה משתמש ב- `i18n.site` כדי ליצור אתר אינטרנט כאתר הראשי שלך, אתה בדרך כלל צריך להגדיר ניתוב מחדש של פאן-דומיין, כלומר להפנות `*.xxx.com` `xxx.com` (כולל `www.xxx.com` ).

ניתן להשיג דרישה זו בעזרת ה- `EdgeScript` של Alibaba `CDN` ( [מסמך באנגלית](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [מסמך סיני](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

הוסף שם דומיין ב- [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) והפנה `*.xxx.com` שם הדומיין ל- `CNAME` של Alibaba Cloud `CDN` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

לדוגמה, תצורת הפניה מחדש של שם התחום של `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### פרוס עם nginx

אנא הוסף תצורה דומה להלן `server` nginx כאשר `/root/i18n/md/out/ol/htm` אנא שנה אותה לנתיב של הפרויקט שלך `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### מבנה ספריות

#### פּוּמְבֵּי

קבצים סטטיים של האתר, כגון `favicon.ico` `robots.txt` וכו'.

את קבצי הסמלים כאן ניתן ליצור עם [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

תחת `.i18n` נמצאים קבצי התצורה של `i18n.site` , מטמון התרגום וכו'. לפרטים, ראה את הפרק הבא ["תצורה"](/i18n.site/conf) .

#### he

ספריית שפת המקור, המתאימה `.i18n/conf.yml` `fromTo` `en` בקובץ התצורה

```yaml
i18n:
  fromTo:
    en: zh
```

אנא עיין בתצורת התרגום [i18](/i18/use)

