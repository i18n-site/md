# אופטימיזציה למנועי חיפוש (SEO)

## עִקָרוֹן

`i18n.site` מאמץ ארכיטקטורת עמוד בודד ללא רענון על מנת להקל על אינדקס החיפוש, ייווצר דף סטטי נפרד ו `sitemap.xml` עבור הסורקים לסריקה.

כאשר `User-Agent` של בקשת הגישה משמש סורק מנוע החיפוש, הבקשה תופנה לדף הסטטי באמצעות `302` .

בדפים סטטיים, השתמש ב `link` כדי לציין קישורים לגרסאות שפה שונות של דף זה, כגון :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## הגדר אחסון אובייקטים להעלאת קבצים סטטיים

ניתן ליצור קבצים סטטיים באופן מקומי, אך גישה נפוצה יותר היא להעלות אותם לאחסון אובייקטים.

קח את קובץ התצורה `.i18n/htm/ol.yml` בפרויקט ההדגמה כדוגמה

```yml
host:
seo: true
out:
  - s3
v: //unpkg.com/i18n.site
x: 18x
importmap:
  i/: //unpkg.com/@i18n.site/
```

אנא שנה תחילה את הערך של `host:` למעלה לשם הדומיין שלך, כגון `i18n.site` .

לאחר מכן, ערוך `~/.config/i18n.site.yml` והוסף את התצורה הבאה :

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

בתצורה, אנא שנה `i18n.site` לערך של `host:` ב `.i18n/htm/ol.yml` , ניתן להגדיר מספר מאגרי אובייקטים תחת `s3` , והשדה `region` הוא אופציונלי (מאגרי אובייקטים רבים אינם צריכים להגדיר שדה זה).

לאחר מכן הפעל `i18n.site -n` כדי לפרסם מחדש את הפרויקט.

אם שינית את `~/.config/i18n.site.yml` וברצונך להעלות מחדש, אנא השתמש בפקודה הבאה בספריית השורש של הפרויקט כדי לנקות את מטמון ההעלאה :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## תצורת cloudflare

שם דומיין מתארח אצל [cloudflare](//www.cloudflare.com)

### כללי המרה

הוסף את כללי ההמרה כפי שמוצג להלן:

![](//p.3ti.site/1725436822.avif)

קוד הכלל הוא כדלקמן, אנא שנה את הקוד "i18n.site" לשם הדומיין שלך:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### כללי אחסון במטמון

הוסף כללי מטמון באופן הבא:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### כללי הפניה מחדש

הגדר את כללי ההפניה מחדש כדלקמן, אנא שנה את הקוד "i18n.site" לשם הדומיין שלך

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

`URL redirect` בחר ניתוב מחדש דינמי, שנה את `/en` בנתיב הפנייה מחדש `concat("/en",http.request.uri.path,".htm")` לשפת ברירת המחדל שאתה רוצה שמנועי החיפוש יכללו.

## Baidu Intelligent Cloud Configuration

אם אתה צריך לספק שירותים לסין היבשתית, אתה יכול להשתמש ב- [Baidu Smart Cloud](//cloud.baidu.com) .

הנתונים מועלים ל-Baidu Object Storage ומחוברים ל-Baidu Content Distribution Network.

לאחר מכן צור את הסקריפט [EdgeJS edge](//console.bce.baidu.com/cdn/#/cdn/ejs/list) כדלקמן

```js
var uri=r.uri,p=uri.lastIndexOf('.');

if(
  p<0 || !/html?|css|rss|avif|md|ico|gz|js|json|png|svg|txt|webmanifest|xml/.test(uri.slice(p+1))
){
  const ua = r.headersIn['User-Agent'].toLowerCase();
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(302,(/baidu|yisou|sogou|360|byte/.test(ua)?'/zh':'/en')+r.uri+'.htm')
    return
  }
  r.uri = '/index.html'
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

לחץ על `Debug` ולאחר מכן לחץ על פרסם לכל הרשת.

![](//p.3ti.site/1725437754.avif)

## שימוש מתקדם: הפצת תעבורה על סמך רזולוציה אזורית

אם אתה רוצה לספק שירותים ביבשת סין וגם רוצה `cloudflare` תעבורה בינלאומית חינם, אתה יכול להשתמש ב `DNS` ברזולוציה אזורית.

לדוגמה, [Huawei DNS](https://www.huaweicloud.com) מספק ניתוח אזורי בחינם, שבאמצעותו תעבורה סינית יכולה לעבור דרך Baidu Smart Cloud, ותעבורה בינלאומית יכולה לעבור דרך `cloudflare` .

ישנן מלכודות רבות בתצורה של `cloudflare` הנה כמה נקודות שיש לשים לב אליהן :

### שם הדומיין מתארח ב `DNS` אחר, כיצד להשתמש `cloudflare`

תחילה לאגד שם דומיין שרירותי ל `cloudflare` , ולאחר מכן להשתמש ב `SSL/TLS` → שם דומיין מותאם אישית כדי לשייך את שם הדומיין הראשי לשם הדומיין הזה.

![](https://p.3ti.site/1725438658.avif)

### לא ניתן לגשת ל `cloudflare R2` דרך שם דומיין מותאם אישית

מכיוון `cloudflare` לגשת `R2` באמצעות שם תחום מותאם אישית, יש להשתמש באחסון אובייקטים של צד שלישי כדי להציב קבצים סטטיים.

כאן [backblaze.com](https://www.backblaze.com) דוגמה כדי להדגים כיצד לאגד אובייקטים של צד שלישי לאחסון ב `cloudflare` .

צור דלי ב `backblaze.com` , העלה כל קובץ, לחץ כדי לעיין בקובץ וקבל את שם הדומיין של `Friendly URL` , שהוא `f003.backblazeb2.com` כאן.

![](//p.3ti.site/1725440783.avif)

שנה את שם הדומיין מ `CNAME` ל `f003.backblazeb2.com` ב `cloudflare` והפעל את ה-proxy.

![](//p.3ti.site/1725440896.avif)

שנה `cloudflare` מתוך `SSL` → מצב הצפנה, מוגדר ל `Full`

![](//p.3ti.site/1725438572.avif)

הוסף את כלל ההמרה כפי שמוצג להלן, שים אותו קודם (לראשון יש את העדיפות הנמוכה ביותר):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` בחר דינמי ושנה `your_bucketname` ב `concat("/file/your_bucketname",http.request.uri.path)` לשם הדלי שלך.

בנוסף, בכלל ההמרה `cloudflare` לעיל, `index.html` משתנה ל `file/your_bucketname/index.html` ותצורות אחרות נשארות זהות.

![](//p.3ti.site/1725441384.avif)