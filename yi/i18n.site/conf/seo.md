# זוכן ענגינע אָפּטימיזאַטיאָן (SEO)

## פּרינציפּ

`i18n.site` אַדאַפּץ אַ ניט-דערפרישן איין בלאַט אַרקאַטעקטשער אין סדר צו פאַסילאַטייט זוכן ינדעקסינג, אַ באַזונדער סטאַטיק בלאַט און `sitemap.xml` וועט זיין דזשענערייטאַד פֿאַר קראַוולערז צו קריכן.

ווען `User-Agent` פון די אַקסעס בעטן איז געניצט דורך די זוכן מאָטאָר קריכער, די בעטן וועט זיין רידערעקטיד צו די סטאַטיק בלאַט דורך `302` .

אויף סטאַטיק בלעטער, נוצן `link` צו אָנווייַזן לינקס צו פאַרשידענע שפּראַך ווערסיעס פון דעם בלאַט, אַזאַ ווי :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## לאקאלע nginx קאַנפיגיעריישאַן

נעמען די `.i18n/htm/main.yml` קאַנפיגיעריישאַן טעקע אין די דעמאָ פּרויעקט ווי אַ בייַשפּיל

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

ביטע ערשטער מאָדיפיצירן די ווערט פון `host:` אויבן צו דיין פעלד נאָמען, אַזאַ ווי `xxx.com` .

דערנאָך, `i18n.site -n` , די סטאַטיק בלאַט וועט זיין דזשענערייטאַד אין די `out/main/htm` וועגווייַזער.

פון קורס, איר קענען אויך געבן אנדערע קאַנפיגיעריישאַן טעקעס, אַזאַ ווי ערשטער ריפערינג צו די קאַנפיגיעריישאַן פון `main` צו שאַפֿן `.i18n/htm/dist.package.json` און `.i18n/htm/dist.yml` .

דערנאָך לויפן `i18n.site -n -c dist` אַזוי אַז די סטאַטיק בלאַט וועט זיין דזשענערייטאַד צו `out/dist/htm` .

`nginx` קענען זיין באַשטימט דורך ריפערינג צו די קאַנפיגיעריישאַן אונטן.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# צי ניט קאַש סערווער אַרבעט סקריפּס פֿאַר צו לאַנג
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# שטעלן מער קאַש צייט פֿאַר אנדערע סטאַטיק רעסורסן
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# באַשטעטיקט וואָס סטאַטיק טעקע די קראַוולער ניצט ווי די פּאָזיציע אין האָמעפּאַגע
location = / {
  # אויב $botLang איז נישט ליידיק, עס מיטל קריכער אַקסעס און רידערעקשאַן לויט די שטעלן שפּראַך דרך
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# איין בלאַט אַפּלאַקיישאַן קאַנפיגיעריישאַן
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## קאַנפיגיער כייפעץ סטאָרידזש פֿאַר ופּלאָאַדינג סטאַטיק טעקעס

סטאַטיק טעקעס קענען זיין דזשענערייטאַד לאָוקאַלי, אָבער אַ מער פּראָסט צוגאַנג איז צו צופֿעליקער זיי צו אַבדזשעקץ סטאָרידזש.

מאָדיפיצירן `out` קאַנפיגיערד אויבן צו :

```
out:
  - s3
```

דערנאָך, רעדאַגירן `~/.config/i18n.site.yml` און לייגן די פאלגענדע קאַנפיגיעריישאַן :

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

אין די קאַנפיגיעריישאַן, ביטע טוישן `i18n.site` צו די ווערט פון `host:` אין `.i18n/htm/main.yml` , קייפל כייפעץ סטאָרז קענען זיין קאַנפיגיערד אונטער `s3` , און די `region` פעלד איז אַפּשאַנאַל (פילע כייפעץ סטאָרז טאָן ניט דאַרפֿן צו שטעלן דעם פעלד).

דערנאָך לויפן `i18n.site -n` צו ריפּובליקירן די פּרויעקט.

אויב איר האָט מאַדאַפייד `~/.config/i18n.site.yml` און איר ווילן צו שייַעך-ופּלאָאַד, ביטע נוצן די פאלגענדע באַפֿעל אין די פּרויעקט וואָרצל וועגווייַזער צו ויסמעקן די ופּלאָאַד קאַש :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare קאַנפיגיעריישאַן

פעלד נאָמען כאָוסטיד צו [cloudflare](//www.cloudflare.com)

### קאַנווערזשאַן כּללים

לייג די קאַנווערזשאַן כּללים ווי געוויזן אונטן:

![](//p.3ti.site/1725436822.avif)

די הערשן קאָד איז ווי גייט, ביטע מאָדיפיצירן די קאָד "i18n.site" צו דיין פעלד נאָמען:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### קאַטשינג כּללים

לייג קאַש כּללים ווי גייט:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### רידירעקט כּללים

שטעלן די רידערעקשאַן כּללים ווי גייט, ביטע מאָדיפיצירן די קאָד "i18n.site" צו דיין פעלד נאָמען

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

`URL redirect` אויסקלייַבן דינאַמיש רידערעקשאַן, ביטע מאָדיפיצירן `/en` אין רידערעקשאַן דרך `concat("/en",http.request.uri.path,".htm")` צו די פעליקייַט שפּראַך איר ווילן זוכן ענדזשאַנז צו אַרייַננעמען.

## באַידו ינטעליגענט קלאָוד קאַנפיגיעריישאַן

אויב איר דאַרפֿן צו צושטעלן באַדינונגס צו יאַבאָשע טשיינאַ, איר קענען נוצן [Baidu Smart Cloud](//cloud.baidu.com) .

דאַטן זענען ופּלאָאַדעד צו Baidu Object Storage און געבונדן צו Baidu Content Distribution Network.

דערנאָך שאַפֿן די שריפט אין [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // ענטפער כעדערז קענען זיין באַשטימט צו דיבאַג רעזולטאַט, אַזאַ ווי אָוט.קסקסקס = 'מסג';
})
```

דריקט `Debug` , דעמאָלט גיט אַרויסגעבן צו די גאנצע נעץ.

![](//p.3ti.site/1725437754.avif)

## אַוואַנסירטע באַניץ: פאַרשפּרייטן פאַרקער באזירט אויף רעגיאָנאַל האַכלאָטע

אויב איר ווילן צו צושטעלן באַדינונגס אין יאַבאָשע טשיינאַ און אויך ווילן `cloudflare` פריי אינטערנאַציאָנאַלע פאַרקער, איר קענען נוצן `DNS` מיט רעגיאָנאַל האַכלאָטע.

פֿאַר בייַשפּיל, [Huawei DNS](https://www.huaweicloud.com) גיט פריי רעגיאָנאַל אַנאַליסיס, מיט וואָס יאַבאָשע כינעזיש פאַרקער קענען גיין דורך Baidu Smart Cloud, און אינטערנאַציאָנאַלע פאַרקער קענען גיין דורך `cloudflare` .

עס זענען פילע פּיטפאָלז אין די קאַנפיגיעריישאַן פון `cloudflare` דאָ זענען אַ ביסל פונקטן צו טאָן :

### די פעלד נאָמען איז כאָוסטיד אין אנדערע `DNS` , ווי צו נוצן `cloudflare`

ערשטער בינדן אַ אַרביטראַריש פעלד נאָמען צו `cloudflare` , און דעמאָלט נוצן `SSL/TLS` → מנהג פעלד נאָמען צו פאַרבינדן די הויפּט פעלד נאָמען צו דעם פעלד נאָמען.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` קענען ניט זיין אַקסעסט דורך אַ מנהג פעלד נאָמען

ווייַל די געבויט `cloudflare` אין אָבדזשעקט סטאָרידזש `R2` קענען ניט זיין אַקסעסט דורך אַ קאַסטאַמייזד פעלד נאָמען, אַ דריט-פּאַרטיי אָבדזשעקט סטאָרידזש דאַרף זיין געוויינט צו שטעלן סטאַטיק טעקעס.

[backblaze.com](https://www.backblaze.com) מיר נעמען ווי אַ בייַשפּיל צו באַווייַזן ווי צו בינדן דריט-פּאַרטיי אַבדזשעקץ צו זיין סטאָרד אין `cloudflare` .

שאַפֿן אַ עמער בייַ `backblaze.com` , ופּלאָאַד קיין טעקע, גיט צו בלעטער דער טעקע, און באַקומען די פעלד נאָמען פון `Friendly URL` , וואָס איז `f003.backblazeb2.com` דאָ.

![](//p.3ti.site/1725440783.avif)

טוישן די פעלד נאָמען פון `CNAME` צו `f003.backblazeb2.com` ביי `cloudflare` און געבן די פראקסי.

![](//p.3ti.site/1725440896.avif)

מאָדיפיצירן `cloudflare` פון `SSL` → ענקריפּשאַן מאָדע, שטעלן צו `Full`

![](//p.3ti.site/1725438572.avif)

לייג די קאַנווערזשאַן הערשן ווי געוויזן אונטן, שטעלן עס ערשטער (דער ערשטער האט די לאָואַסט בילכערקייַט):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` אויסקלייַבן דינאַמיש און מאָדיפיצירן `your_bucketname` אין `concat("/file/your_bucketname",http.request.uri.path)` צו דיין עמער נאָמען.

אין דערצו, אין די `cloudflare` קאַנווערזשאַן הערשן אויבן, `index.html` איז פארענדערט צו `file/your_bucketname/index.html` , און אנדערע קאַנפיגיעריישאַנז בלייבן די זעלבע.

![](//p.3ti.site/1725441384.avif)