# התקן &

## לְהַתְקִין

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## אסימון תצורה

`i18n.site` יש כלי תרגום מובנה אנא [לחץ כאן כדי לעיין במסמך `i18` כדי להגדיר את אסימון הגישה](/i18/use) `i18`

## פרויקט הדגמה

בואו נתחיל עם פרויקט הדגמה כדי ללמוד כיצד להשתמש `i18n.site` .

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

שם הספרייה של שיבוט בסיס קוד `demo.i18n.site` חייב להיות `md` כדי לאפשר תצוגה מקדימה מקומית עם `docker` .

### לְתַרְגֵם

ראשית, הזן את ספריית `md` והפעל `i18n.site` , אשר יתרגם `en` ל `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

לאחר ההפעלה, יווצרו קבצי תרגום ומטמון אנא זכור להוסיף אותם למאגר `git add . ` `md` .

### תצוגה מקדימה מקומית

התקן והתחל `docker` (משתמש `MAC` ממליץ להשתמש ב- [orbstack](https://orbstack.dev) בתור זמן הריצה עבור `docker` ).

לאחר מכן, הזן את ספריית `docker` והפעל `./up.sh` , ולאחר מכן בקר ב- [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### פרסם תוכן

`i18n.site` מאמץ ארכיטקטורת [אפליקציה של עמוד אחד](https://developer.mozilla.org/docs/Glossary/SPA) , ודף הכניסה לאתר ותוכן האתר נפרסים באופן עצמאי.

לאחר הפעלת התרגום הנ"ל, ספריות `htm` ו `v` יופקו תחת ספריית `md/out/dev` .

כאן, `dev` אומר שהוא בנוי על סמך קובץ התצורה `.i18n/htm/dev.yml` .

ספריית `dev` :

ספריית `htm` היא דף הכניסה לאתר.

ספריית `v` מכילה תוכן אתר עם מספרי גרסאות.

לתצוגה המקדימה המקומית לא אכפת ממספר הגרסה והיא תעתיק את כל הקבצים לספריית `out/dev/v/0.1.0` .

לשחרור רשמי, קבצים שהשתנו יועתקו לספריית מספרי הגרסה החדשה.

#### ציין קובץ תצורה עם `-c`

קבצי תצורה שונים ייצרו ספריות מתאימות בספריית `out` .

לדוגמה, `.i18n/htm/ol.yml` יצור את ספריית `out/ol` .

`dev.yml` ו `ol.yml` הן תצורות ברירת המחדל.

`dev` הוא הקיצור של `development` , המציין את סביבת הפיתוח, המשמש לתצוגה מקדימה מקומית, והוא גם קובץ התצורה המוגדר כברירת מחדל.
`ol` הוא הקיצור של `online` , המציין את הסביבה המקוונת, המשמשת לשחרור רשמי. זהו גם קובץ התצורה של ברירת המחדל בעת שימוש בפרמטרים של שורת הפקודה `-n` עד `npm` .

אתה יכול גם ליצור קובצי תצורה אחרים השתמש ב `--htm_conf` בשורת הפקודה כדי לציין את שם קובץ התצורה לשימוש:

לְדוּגמָה:
```
i18n.site --htm_conf yourConfig --save
```

כאן `--save` מייצג את מספר גרסת מהדורת העדכון.

#### <a rel=id href="#npm" id="npm"></a> פרסם תוכן ב-npmjs.com

פרסום תוכן אל [npmjs.com](//npmjs.com) הוא פתרון ברירת המחדל המומלץ (ראה [זמינות גבוהה בחזית](/i18n.site/feature#ha) ).

##### npm login &

התקן `nodejs` , התחבר עם `npm login` .

ערוך `md/.i18n/htm/ol.yml` ושנה את הערך [npmjs.com](//npmjs.com) [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) `YOUR_NPM_PACKAGE` כשם חבילה `npm` .

לאחר מכן שנה `md/.i18n/htm/ol.package.json`

הפעל `i18n.site --npm` או `i18n.site -n` בספריית `md` כדי לתרגם ולפרסם.

אם אתה משתמש בסביבת אינטגרציה רציפה לפרסום, אין צורך להתקין `nodejs` , פשוט העתק את הרשאת הכניסה והפרסום `~/.npmrc` לסביבה.

אם תשנה את שם החבילה של `v:` ב `ol.yml` , אנא **הקפד למחוק תחילה `.i18n/v/ol`** ולאחר מכן לפרסם אותו.

##### שרת פרוקסי שפורסם על ידי npm

אם משתמשים ביבשת סין נתקלים בבעיות רשת ואינם יכולים לפרסם `npm` חבילות, הם יכולים להגדיר את משתנה הסביבה `https_proxy` כדי להגדיר את שרת ה-proxy.

בהנחה שיציאת שרת ה-proxy שלך היא `7890` , אתה יכול לכתוב:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### תוכן באירוח עצמי

אם אתה רוצה לארח את התוכן בעצמך, תחילה ערוך `md/.i18n/htm/ol.yml` ושנה `v: //unpkg.com/i18n.site` לקידומת כתובת האתר שלך, כגון `v: //i18n-v.xxx.com` .

הזן את ספריית `md` והפעל

```
i18n.site --htm_conf ol --save
```

או קיצור

```
i18n.site -c ol -s
```

לאחר מכן, הגדר את התוכן בספריית `md/out/ol/v` לנתיב קידומת כתובת האתר שהוגדר ב `v:` .

לבסוף, **הגדר את זמן המטמון של הנתיב המסתיים ב `/.v` עד `1s`** , אחרת לא ניתן לגשת מיד לתוכן החדש ששוחרר.

ניתן להגדיר את זמן המטמון עבור נתיבים אחרים לשנה אחת או יותר כדי לצמצם בקשות מיותרות.

##### מארח תוכן ל-s3

כדי לארח תוכן עצמי, בנוסף לשימוש בשרת משלך, אפשרות נפוצה נוספת היא להשתמש `CDN` `S3` +

אתה יכול להשתמש ב- [rclone](https://rclone.org) כדי להיכנס לשרת `S3` , ואז לעיין בסקריפט הבא ולשנות אותו, ולהעתיק רק את השינויים המצטברים ל `S3` עבור כל מהדורה.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

זכור להגדיר `CDN` כך שזמן המטמון של הנתיב המסתיים ב `/.v` יהיה `1s` , אחרת לא ניתן לגשת מיד לתוכן החדש ששוחרר.

### לפרסם אתר

ניתן לפרוס את האתר בכל מקום, [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) הן אפשרויות טובות.

מכיוון שהאתר משתמש בארכיטקטורת [יישומים של עמוד בודד](https://developer.mozilla.org/docs/Glossary/SPA) , זכור לשכתב נתיבי URL שאינם מכילים `. ` עד `index.html` .

יש לפרוס את דף הכניסה לאתר פעם אחת בלבד, ואין צורך לפרוס מחדש את דף הכניסה לאתר לצורך עדכוני תוכן הבאים.

#### פרוס בדף github

תחילה [לחץ github כדי ליצור ארגון](https://github.com/account/organizations/new?plan=free) שם הארגון הבא הוא `i18n-demo` כדוגמה.

לאחר מכן צור מחסן `i18n-demo.github.io` תחת ארגון זה (נא להחליף את `i18n-demo` בשם הארגון שיצרת):

![](https://p.3ti.site/1721098657.avif)

בעת פרסום התוכן במאמר הקודם, נוצר `out/ol/htm` אנא הכנס לספרייה זו והפעל :

```
ln -s index.html 404.html
```


מכיוון ש `github page` אינו תומך בשכתוב נתיב כתובת URL, `404.html` משמש במקום זאת.

לאחר מכן הפעל את הפקודה הבאה בספריית `htm` (זכור להחליף `i18n-demo/i18n-demo.github.io.git` בכתובת המחסן שלך) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

לאחר דחיפת הקוד, המתן עד שהפריסה של `github page` תפעל בהצלחה (כפי שמוצג להלן) לפני שתוכל לגשת אליו.

<img src="//p.3ti.site/1721116586.avif" width="350px">

לדף הדגמה אנא ראה:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### פרוס בדף cloudflare

[cloudflare page](//pages.cloudflare.com) ל `github page` , הוא מספק שכתוב של נתיבים וידידותי יותר לסין ומומלץ יותר להשתמש בו.

הפריסה של `cloudflare page` מבוססת בדרך כלל על הפריסה של `github page` לעיל.

צור פרויקט ואגד את המחסן `i18n-demo.github.io` למעלה.

התהליך מוצג באיור שלהלן:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

אנא לחץ על `Add Account` כדי להעניק גישה לארגון `i18n-demo` .

אם קשרת את המחסן של ארגון אחר, ייתכן שתצטרך ללחוץ פעמיים על `Add Account` כדי לאשר פעמיים לפני שהארגון החדש יוצג.

![](https://p.3ti.site/1721118306.avif)

לאחר מכן, בחר מחסן `i18n-demo.github.io` ולאחר מכן לחץ על `Begin setup` והשתמש בערכי ברירת המחדל עבור השלבים הבאים.

![](https://p.3ti.site/1721118490.avif)

לאחר הכריכה בפעם הראשונה, עליך להמתין מספר דקות לפני שתוכל לגשת אליו.

לאחר הפריסה, תוכל לאגד שם דומיין מותאם אישית.

![](https://p.3ti.site/1721119459.avif)

לאחר קשירת שם הדומיין המותאם אישית, עבור אל שם הדומיין כדי להגדיר את שכתוב הנתיב מחדש של היישום בעל עמוד בודד, כפי שמוצג להלן:

![](https://p.3ti.site/1721119320.avif)

הכללים בתמונה שלמעלה הם כדלקמן בבקשה החלף `i18n.site` בשורה הראשונה למטה בשם הדומיין שקשרתם.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

בנוסף, אנא הגדר את כללי המטמון, כפי שמוצג להלן, והגדר את משך המטמון לחודש אחד.

![](https://p.3ti.site/1721125111.avif)

אנא שנה את התאמת שם הדומיין בשלב השני בתמונה למעלה לשם הדומיין שקשרת.

#### אופטימיזציה של פריסת אתרים ביבשת סין

אם ברצונך להשיג ביצועי נגישות טובים יותר בסביבת הרשת של סין היבשתית, אנא [רשום תחילה שם דומיין](//beian.aliyun.com) .

לאחר מכן, השתמש באחסון האובייקטים של ספקי ענן ביבשת + `CDN` פרוס את התוכן הבא `out/ol/htm` !

אתה יכול להשתמש במחשוב קצה כדי לשכתב את הנתיב כדי להתאים ליישומים של עמוד בודד. לדוגמה, ניתן להגדיר [את Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) כך:

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
![](https://p.3ti.site/1721121273.avif)

מכיוון שרשומה `MX` ורשומה `CNAME` אינן יכולות להתקיים במקביל, אם ברצונך לקבל דוא"ל עם שם דומיין בו-זמנית, עליך לשתף פעולה עם [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) לרמה `CNAME` לרשומה `A` .

בנוסף, מכיוון שחיובי התעבורה בחו"ל של ספקי ענן ביבשת סין יקרים יחסית, אם אתה רוצה לייעל את העלויות, אתה יכול להשתמש [DNS הגיאוגרפית החינמית של Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ובשם הדומיין המותאם אישית של [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (כפי שמוצג להלן). הסטת תנועה──תנועה ביבשת סין Baidu Cloud `CDN` , תנועה בינלאומית עולה cloudflare .

![](https://p.3ti.site/1721119788.avif)

פתרונות אופטימיזציה של פריסה אלה מורכבים יותר ויוצגו בפרקים נפרדים בעתיד.

#### הפנייה כללית של שם דומיין

אם אתה משתמש `i18n.site` כדי ליצור אתר כאתר הראשי שלך, בדרך כלל עליך להגדיר ניתוב מחדש של תחום הפאן, כלומר להפנות גישה ל `*.xxx.com` (כולל `www.xxx.com` ) ל `xxx.com` .

דרישה זו יכולה להיות מושגת בעזרת Alibaba Cloud `CDN` `EdgeScript` ( [מסמך באנגלית](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [מסמך סיני](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

הוסף את שם הדומיין ב- [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) וכוון את שם הדומיין `*.xxx.com` `CNAME` ב- Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

לדוגמה, תצורת ההפניה מחדש של שם התחום של `*.i18n.site` בתמונה למעלה היא כדלקמן:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### פרוס עם nginx

אנא הוסף תצורה דומה להלן בפסקה `server` של nginx אנא שנה `/root/i18n/md/out/ol/htm` לנתיב של פרוייקט `out/ol/htm` שלך:

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

#### `public`

קבצים סטטיים של האתר, כגון `favicon.ico` , `robots.txt` וכו'.

ניתן ליצור את קבצי הסמלים כאן עם [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

תחת ספריית `.i18n` נמצאים קבצי התצורה, מטמון התרגום וכו' של `i18n.site` ראה את הפרק הבא ["תצורה"](/i18n.site/conf) לפרטים.

#### `en`

ספריית שפת המקור, המקבילה לקובץ תצורה של `en` מתוך `fromTo` ב `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

אנא עיין בתצורת התרגום [i18](/i18/use)