# தேடுபொறி உகப்பாக்கம் (SEO)

## கொள்கை

`i18n.site` புதுப்பித்தலற்ற ஒற்றைப் பக்க கட்டமைப்பை ஏற்றுக்கொள்கிறது `sitemap.xml`

தேடுபொறி கிராலர் அணுகல் கோரிக்கையின் `User-Agent` பயன்படுத்தும் போது, கோரிக்கை `302` வழியாக நிலையான பக்கத்திற்கு திருப்பி விடப்படும்.

நிலையான பக்கங்களில், இந்தப் பக்கத்தின் வெவ்வேறு மொழி பதிப்புகளுக்கான இணைப்புகளைக் குறிக்க `link` பயன்படுத்தவும், எடுத்துக்காட்டாக :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## நிலையான கோப்புகளைப் பதிவேற்ற பொருள் சேமிப்பகத்தை உள்ளமைக்கவும்

நிலையான கோப்புகளை உள்நாட்டில் உருவாக்க முடியும், ஆனால் அவற்றைப் பொருள் சேமிப்பகத்தில் பதிவேற்றுவது மிகவும் பொதுவான அணுகுமுறை.

டெமோ திட்டத்தில் உள்ள `.i18n/htm/ol.yml` உள்ளமைவு கோப்பை உதாரணமாக எடுத்துக் கொள்ளுங்கள்

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

மேலே உள்ள `host:` இன் மதிப்பை முதலில் உங்கள் டொமைன் பெயருக்கு மாற்றவும், எடுத்துக்காட்டாக `i18n.site` .

பின்னர், `~/.config/i18n.site.yml` திருத்தி, பின்வரும் உள்ளமைவைச் சேர்க்கவும் :

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

உள்ளமைவில், `i18n.site` `.i18n/htm/ol.yml` இன் `host:` இன் மதிப்புக்கு மாற்றவும், பல பொருள் கடைகளை `s3` இன் கீழ் உள்ளமைக்க முடியும், மேலும் `region` புலம் விருப்பமானது (பல பொருள் கடைகளுக்கு இந்த புலத்தை அமைக்க தேவையில்லை).

திட்டத்தை மீண்டும் வெளியிட `i18n.site -n` இயக்கவும்.

நீங்கள் `~/.config/i18n.site.yml` மாற்றியமைத்து மீண்டும் பதிவேற்ற விரும்பினால், பதிவேற்ற தற்காலிக சேமிப்பை அழிக்க திட்ட ரூட் கோப்பகத்தில் பின்வரும் கட்டளையைப் பயன்படுத்தவும் :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## cloudflare கட்டமைப்பு

டொமைன் பெயர் [cloudflare](//www.cloudflare.com)

### மாற்று விதிகள்

கீழே காட்டப்பட்டுள்ளபடி மாற்று விதிகளைச் சேர்க்கவும்:

![](//p.3ti.site/1725436822.avif)

விதிக் குறியீடு பின்வருமாறு உள்ளது, தயவுசெய்து "i18n.site" குறியீட்டை உங்கள் டொமைன் பெயருக்கு மாற்றவும்:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### கேச்சிங் விதிகள்

கேச் விதிகளை பின்வருமாறு சேர்க்கவும்:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### வழிமாற்று விதிகள்

திசைதிருப்பல் விதிகளை பின்வருமாறு அமைக்கவும், "i18n.site" குறியீட்டை உங்கள் டொமைன் பெயருக்கு மாற்றவும்

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

`URL redirect` டைனமிக் திசைதிருப்பலைத் தேர்ந்தெடுங்கள், திசைதிருப்பல் பாதை `concat("/en",http.request.uri.path,".htm")` ல் உள்ள `/en` , தேடுபொறிகள் சேர்க்க விரும்பும் இயல்புநிலை மொழிக்கு மாற்றவும்.

## Baidu நுண்ணறிவு கிளவுட் உள்ளமைவு

நீங்கள் சீனாவின் பிரதான நிலப்பகுதிக்கு சேவைகளை வழங்க வேண்டும் என்றால், நீங்கள் [Baidu Smart Cloud ஐப்](//cloud.baidu.com) பயன்படுத்தலாம்.

Baidu ஆப்ஜெக்ட் ஸ்டோரேஜில் தரவு பதிவேற்றப்பட்டு, Baidu உள்ளடக்க விநியோக நெட்வொர்க்குடன் இணைக்கப்பட்டுள்ளது.

ஸ்கிரிப்டை பின்வருமாறு உருவாக்கவும் [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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

`Debug` கிளிக் செய்து, முழு நெட்வொர்க்கிலும் வெளியிடு என்பதைக் கிளிக் செய்யவும்.

![](//p.3ti.site/1725437754.avif)

## மேம்பட்ட பயன்பாடு: பிராந்திய தீர்மானத்தின் அடிப்படையில் போக்குவரத்தை விநியோகிக்கவும்

நீங்கள் சீனாவின் பிரதான நிலப்பரப்பில் சேவைகளை வழங்க விரும்பினால் மற்றும் `cloudflare` இலவச சர்வதேச போக்குவரத்தை விரும்பினால், பிராந்தியத் தீர்மானத்துடன் `DNS` பயன்படுத்தலாம்.

எடுத்துக்காட்டாக `cloudflare` [Huawei Cloud DNS](https://www.huaweicloud.com)

`cloudflare` இன் உள்ளமைவில் பல குறைபாடுகள் உள்ளன. இங்கே கவனிக்க வேண்டிய சில புள்ளிகள் உள்ளன :

### டொமைன் பெயர் மற்ற `DNS` இல் ஹோஸ்ட் செய்யப்பட்டுள்ளது, `cloudflare` எவ்வாறு பயன்படுத்துவது

முதலில் தன்னிச்சையான டொமைன் பெயரை `cloudflare` க்கு பிணைக்கவும், பின்னர் `SSL/TLS` → தனிப்பயன் டொமைன் பெயரைப் பயன்படுத்தி முதன்மை டொமைன் பெயரை இந்த டொமைன் பெயருடன் இணைக்கவும்.

![](https://p.3ti.site/1725438658.avif)

### தனிப்பயன் டொமைன் பெயர் மூலம் `cloudflare R2` அணுக முடியாது

தனிப்பயனாக்கப்பட்ட டொமைன் பெயர் மூலம் `cloudflare` பொருள் சேமிப்பு `R2` அணுக முடியாது என்பதால், நிலையான கோப்புகளை வைக்க மூன்றாம் தரப்பு பொருள் சேமிப்பகம் பயன்படுத்தப்பட வேண்டும்.

`cloudflare` இல் சேமிக்கப்படும் மூன்றாம் தரப்பு பொருட்களை எவ்வாறு பிணைப்பது என்பதை விளக்குவதற்கு [backblaze.com](https://www.backblaze.com) நாம் ஒரு உதாரணம் எடுத்துக்கொள்கிறோம்.

`backblaze.com` இல் ஒரு வாளியை உருவாக்கவும், எந்த கோப்பையும் பதிவேற்றவும், கோப்பை உலாவ கிளிக் செய்யவும் மற்றும் `Friendly URL` இன் டொமைன் பெயரைப் பெறவும், இது `f003.backblazeb2.com` இங்கே உள்ளது.

![](//p.3ti.site/1725440783.avif)

டொமைன் பெயரை `CNAME` இலிருந்து `f003.backblazeb2.com` ஆக `cloudflare` இல் மாற்றி ப்ராக்ஸியை இயக்கவும்.

![](//p.3ti.site/1725440896.avif)

`cloudflare` இல் `SSL` → குறியாக்க பயன்முறையை மாற்றவும், `Full` ஆக அமைக்கவும்

![](//p.3ti.site/1725438572.avif)

கீழே காட்டப்பட்டுள்ளபடி மாற்று விதியைச் சேர்க்கவும், அதை முதலில் வைக்கவும் (முதலாவது குறைந்த முன்னுரிமை கொண்டது):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` டைனமிக் என்பதைத் தேர்ந்தெடுத்து, `your_bucketname` இன் `concat("/file/your_bucketname",http.request.uri.path)` ஐ உங்கள் பக்கெட் பெயருக்கு மாற்றவும்.

கூடுதலாக, மேலே உள்ள `cloudflare` மாற்று விதியில், `index.html` ஆனது `file/your_bucketname/index.html` ஆக மாற்றப்பட்டது, மற்ற கட்டமைப்புகள் அப்படியே இருக்கும்.

![](//p.3ti.site/1725441384.avif)