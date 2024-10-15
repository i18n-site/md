# سرچ انجن آپٹیمائزیشن (SEO)

## اصول

`i18n.site` نان ریفریش سنگل پیج آرکیٹیکچر کو اپناتا ہے تاکہ سرچ انڈیکسنگ میں آسانی ہو، کرالرز کے لیے ایک علیحدہ جامد صفحہ اور `sitemap.xml` تیار کیا جائے گا۔

جب رسائی کی درخواست کا `User-Agent` سرچ انجن کرالر استعمال کرتا ہے، تو درخواست کو `302` کے ذریعے جامد صفحہ پر بھیج دیا جائے گا۔

جامد صفحات پر، اس صفحہ کے مختلف زبان کے ورژن کے لنکس کی نشاندہی کرنے کے لیے `link` استعمال کریں، جیسے :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## جامد فائلوں کو اپ لوڈ کرنے کے لیے آبجیکٹ اسٹوریج کو ترتیب دیں۔

جامد فائلیں مقامی طور پر تیار کی جا سکتی ہیں، لیکن زیادہ عام طریقہ یہ ہے کہ انہیں آبجیکٹ اسٹوریج پر اپ لوڈ کیا جائے۔

مثال کے طور پر ڈیمو پروجیکٹ میں `.i18n/htm/ol.yml` کنفیگریشن فائل لیں۔

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

براہ کرم پہلے اوپر والے `host:` کی قدر کو اپنے ڈومین نام میں تبدیل کریں، جیسے `i18n.site` ۔

پھر، `~/.config/i18n.site.yml` میں ترمیم کریں اور درج ذیل ترتیب شامل کریں :

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

کنفیگریشن میں، براہ کرم `i18n.site` `.i18n/htm/ol.yml` میں `host:` کی قدر میں تبدیل کریں، متعدد آبجیکٹ اسٹورز کو `s3` کے تحت ترتیب دیا جا سکتا ہے، اور `region` فیلڈ اختیاری ہے (بہت سے آبجیکٹ اسٹورز کو اس فیلڈ کو سیٹ کرنے کی ضرورت نہیں ہے)۔

پھر پروجیکٹ کو دوبارہ شائع کرنے کے لیے `i18n.site -n` چلائیں۔

اگر آپ نے `~/.config/i18n.site.yml` ترمیم کی ہے اور دوبارہ اپ لوڈ کرنا چاہتے ہیں، تو براہ کرم پراجیکٹ روٹ ڈائرکٹری میں درج ذیل کمانڈ کو اپ لوڈ کیشے کو صاف کرنے کے لیے استعمال کریں :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## کلاؤڈ فلیئر کنفیگریشن

ڈومین کا نام [cloudflare](//www.cloudflare.com)

### تبادلوں کے اصول

تبادلوں کے قواعد شامل کریں جیسا کہ ذیل میں دکھایا گیا ہے:

![](//p.3ti.site/1725436822.avif)

اصول کوڈ درج ذیل ہے، براہ کرم اپنے ڈومین نام میں کوڈ "i18n.site" میں ترمیم کریں:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### کیشنگ کے قوانین

کیشے کے قواعد کو درج ذیل شامل کریں:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### ری ڈائریکٹ قواعد

ری ڈائریکشن کے اصول مندرجہ ذیل ترتیب دیں، براہ کرم اپنے ڈومین نام میں "i18n.site" کوڈ میں ترمیم کریں۔

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

`URL redirect` ڈائنامک ری ڈائریکشن کا انتخاب کریں، براہ کرم `/en` ری ڈائریکشن پاتھ `concat("/en",http.request.uri.path,".htm")` میں اس ڈیفالٹ زبان میں تبدیل کریں جسے آپ سرچ انجنز کو شامل کرنا چاہتے ہیں۔

## Baidu ذہین کلاؤڈ کنفیگریشن

اگر آپ کو سرزمین چین میں خدمات فراہم کرنے کی ضرورت ہے، تو آپ [Baidu Smart Cloud](//cloud.baidu.com) استعمال کر سکتے ہیں۔

ڈیٹا Baidu Object Storage پر اپ لوڈ کیا جاتا ہے اور Baidu Content Distribution Network سے منسلک ہوتا ہے۔

پھر اسکرپٹ کو [EdgeJS سروس](//console.bce.baidu.com/cdn/#/cdn/ejs/list) میں درج ذیل بنائیں

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

`Debug` پر کلک کریں، پھر پورے نیٹ ورک پر شائع کریں پر کلک کریں۔

![](//p.3ti.site/1725437754.avif)

## اعلی درجے کا استعمال: علاقائی ریزولوشن کی بنیاد پر ٹریفک کو تقسیم کریں۔

اگر آپ سرزمین چین میں خدمات فراہم کرنا چاہتے ہیں اور `cloudflare` مفت بین الاقوامی ٹریفک بھی چاہتے ہیں تو آپ علاقائی ریزولوشن کے ساتھ `DNS` استعمال کر سکتے ہیں۔

مثال کے طور پر، [DNS Cloud](https://www.huaweicloud.com) مفت علاقائی تجزیہ فراہم کرتا ہے، جس کے ساتھ مین لینڈ چینی ٹریفک Baidu Smart Cloud سے گزر سکتی ہے، اور بین الاقوامی ٹریفک `cloudflare` سے گزر سکتی ہے۔

`cloudflare` کی ترتیب میں بہت سے نقصانات ہیں۔ یہاں چند نکات نوٹ کرنے کے لیے ہیں :

### ڈومین کا نام دوسرے `DNS` میں ہوسٹ کیا جاتا ہے، `cloudflare` کیسے استعمال کیا جائے۔

سب سے پہلے ایک صوابدیدی ڈومین نام کو `cloudflare` سے باندھیں، اور پھر `SSL/TLS` → کسٹم ڈومین نام کا استعمال کریں تاکہ اس ڈومین نام کے ساتھ مرکزی ڈومین نام کو منسلک کریں۔

![](https://p.3ti.site/1725438658.avif)

### حسب ضرورت ڈومین نام کے ذریعے `cloudflare R2` تک رسائی حاصل نہیں کی جا سکتی

چونکہ بلٹ `cloudflare` آبجیکٹ اسٹوریج `R2` تک کسی حسب ضرورت ڈومین نام کے ذریعے رسائی حاصل نہیں کی جاسکتی ہے، اس لیے جامد فائلوں کو رکھنے کے لیے تھرڈ پارٹی آبجیکٹ اسٹوریج کو استعمال کرنے کی ضرورت ہے۔

یہاں [backblaze.com](https://www.backblaze.com) ایک مثال کے طور پر یہ ظاہر کرتے ہیں کہ تھرڈ پارٹی اشیاء کو `cloudflare` پر کیسے باندھنا ہے۔

`backblaze.com` پر ایک بالٹی بنائیں، کوئی بھی فائل اپ لوڈ کریں، فائل کو براؤز کرنے کے لیے کلک کریں، اور `Friendly URL` کا ڈومین نام حاصل کریں، جو کہ یہاں `f003.backblazeb2.com` ہے۔

![](//p.3ti.site/1725440783.avif)

ڈومین کا نام `CNAME` سے `f003.backblazeb2.com` میں `cloudflare` پر تبدیل کریں اور پراکسی کو فعال کریں۔

![](//p.3ti.site/1725440896.avif)

`SSL` میں سے `cloudflare` میں ترمیم کریں → انکرپشن موڈ، `Full` پر سیٹ کریں۔

![](//p.3ti.site/1725438572.avif)

تبادلوں کے اصول کو شامل کریں جیسا کہ ذیل میں دکھایا گیا ہے، اسے پہلے رکھیں (پہلے کی ترجیح سب سے کم ہے):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` متحرک منتخب کریں اور اپنے بالٹی کے نام میں `your_bucketname` میں `concat("/file/your_bucketname",http.request.uri.path)` میں ترمیم کریں۔

اس کے علاوہ، اوپر کے `cloudflare` تبدیلی کے اصول میں، `index.html` کو `file/your_bucketname/index.html` میں تبدیل کر دیا گیا ہے، اور دیگر کنفیگریشنز وہی رہیں گی۔

![](//p.3ti.site/1725441384.avif)