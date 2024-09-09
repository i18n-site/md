# Search Engine Optimization (SEO)

## နိယာမ

`i18n.site` ရှာဖွေမှုအညွှန်းပြုလုပ်ခြင်းကို လွယ်ကူချောမွေ့စေရန်အတွက် စာမျက်နှာတစ်ခုတည်းကို ပြန်လည်စတင်ခြင်းမဟုတ်သော တည်ဆောက်မှုပုံစံကို လက်ခံရယူရန်အတွက် သီးခြားအငြိမ်စာမျက်နှာနှင့် `sitemap.xml` ကူးယူလေ့လာရန်အတွက် ထုတ်ပေးမည်ဖြစ်သည်။

ဝင်ရောက်ခွင့်တောင်းဆိုချက်၏ `User-Agent` ရှာဖွေရေးအင်ဂျင်စာရေးကိရိယာမှ အသုံးပြုသောအခါ၊ တောင်းဆိုချက်အား `302` မှတစ်ဆင့် static page သို့ ပြန်ညွှန်းမည်ဖြစ်သည်။

တည်ငြိမ်သောစာမျက်နှာများတွင်၊ ဤစာမျက်နှာကဲ့သို့သော မတူညီသောဘာသာစကားဗားရှင်းများသို့ လင့်ခ်များကိုညွှန်ပြရန် `link` အသုံးပြုပါ :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## ပုံသေဖိုင်များ အပ်လုဒ်တင်ခြင်းအတွက် အရာဝတ္ထုသိုလှောင်မှုကို စီစဉ်သတ်မှတ်ပါ။

Static ဖိုင်များကို စက်တွင်းတွင် ထုတ်ပေးနိုင်သော်လည်း ပို၍အသုံးများသောနည်းလမ်းမှာ ၎င်းတို့ကို အရာဝတ္ထုသိုလှောင်မှုသို့ အပ်လုဒ်လုပ်ခြင်းဖြစ်သည်။

နမူနာအဖြစ် ဒီမိုပရောဂျက်ရှိ `.i18n/htm/ol.yml` ဖွဲ့စည်းမှုပုံစံဖိုင်ကို ယူပါ။

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

ကျေးဇူးပြု၍ ဦးစွာ အထက်ပါ `host:` တန်ဖိုးကို သင့်ဒိုမိန်းအမည်ဖြစ်သည့် `i18n.site` ကဲ့သို့ ပြောင်းလဲပါ။

ထို့နောက် `~/.config/i18n.site.yml` တည်းဖြတ်ပြီး အောက်ပါ configuration ကို ပေါင်းထည့်ပါ :

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

စီစဉ်ဖွဲ့စည်းမှုတွင်၊ ကျေးဇူးပြု၍ `i18n.site` `host:` in `.i18n/htm/ol.yml` ၏တန်ဖိုးသို့ပြောင်းပါ၊ `s3` အောက်ရှိ အရာဝတ္တုစတိုးဆိုင်များစွာကို ပြင်ဆင်သတ်မှတ်နိုင်ပြီး `region` အကွက်သည် စိတ်ကြိုက်ရွေးချယ်နိုင်သည် (ဤအကွက်ကို အရာဝတ္ထုဆိုင်များစွာက သတ်မှတ်ရန်မလိုအပ်ပါ)။

ထို့နောက် ပရောဂျက်ကို ပြန်လည်ထုတ်ဝေရန် `i18n.site -n` ကိုဖွင့်ပါ။

အကယ်၍ သင်သည် `~/.config/i18n.site.yml` ပြုပြင်ပြီး ပြန်လည် အပ်လုဒ်လုပ်လိုပါက၊ ကျေးဇူးပြု၍ အပ်လုဒ် cache ကို ရှင်းလင်းရန် ပရောဂျက် root directory တွင် အောက်ပါ command ကို အသုံးပြုပါ :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## cloudflare ဖွဲ့စည်းမှု

ဒိုမိန်းအမည် [cloudflare](//www.cloudflare.com)

### ကူးပြောင်းခြင်းဆိုင်ရာ စည်းမျဉ်းများ

အောက်တွင်ပြထားသည့်အတိုင်း ပြောင်းလဲခြင်းစည်းမျဉ်းများကို ထည့်ပါ-

![](//p.3ti.site/1725436822.avif)

စည်းမျဉ်းကုဒ်မှာ အောက်ပါအတိုင်းဖြစ်သည်၊ ကျေးဇူးပြု၍ "i18n.site" ကုဒ်ကို သင့်ဒိုမိန်းအမည်သို့ ပြင်ဆင်ပါ။

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### caching စည်းမျဉ်းများ

အောက်ပါအတိုင်း cache စည်းမျဉ်းများကို ထည့်ပါ

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### စည်းမျဉ်းများကို ပြန်ညွှန်းသည်။

ပြန်ညွှန်းခြင်းစည်းမျဉ်းများကို အောက်ပါအတိုင်းသတ်မှတ်ပါ၊ ကျေးဇူးပြု၍ "i18n.site" ကုဒ်ကို သင့်ဒိုမိန်းအမည်သို့ ပြောင်းလဲပါ။

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

`URL redirect` သွက်လက်သောလမ်းကြောင်းပြန်ညွှန်မှုကို ရွေးပါ၊ ကျေးဇူးပြု၍ လမ်းကြောင်း `concat("/en",http.request.uri.path,".htm")` တွင် `/en` သင်ရှာဖွေရေးအင်ဂျင်များပါ၀င်စေလိုသော မူရင်းဘာသာစကားသို့ ပြန်ညွှန်းခြင်းလမ်းကြောင်း 1 ကို ပြင်ဆင်ပါ။

## Baidu Intelligent Cloud Configuration

တရုတ်ပြည်မကြီးကို ဝန်ဆောင်မှုတွေ ပေးချင်တယ်ဆိုရင်တော့ [Baidu Smart Cloud ကို](//cloud.baidu.com) သုံးနိုင်ပါတယ်။

ဒေတာကို Baidu Object Storage သို့ အပ်လုဒ်လုပ်ပြီး Baidu Content Distribution Network သို့ ချိတ်ဆက်ထားသည်။

ထို့နောက် အောက်ပါအတိုင်း [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) တွင် script ကိုဖန်တီးပါ။

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

`Debug` နှိပ်ပါ၊ ထို့နောက် ကွန်ရက်တစ်ခုလုံးသို့ Publish ကိုနှိပ်ပါ။

![](//p.3ti.site/1725437754.avif)

## အဆင့်မြင့်အသုံးပြုမှု- ဒေသဆိုင်ရာဖြေရှင်းချက်အပေါ်အခြေခံ၍ အသွားအလာဖြန့်ဝေပါ။

သင်သည် တရုတ်ပြည်မကြီးတွင် ဝန်ဆောင်မှုများ ပေးဆောင်လိုပြီး အခမဲ့ နိုင်ငံတကာ ၀င်ထွက် `cloudflare` လိုချင်ပါက၊ ဒေသဆိုင်ရာ ဆုံးဖြတ်ချက်ဖြင့် `DNS` သင် အသုံးပြုနိုင်သည်။

ဥပမာအားဖြင့်၊ [Huawei Cloud DNS](https://www.huaweicloud.com) အခမဲ့ ဒေသဆိုင်ရာ ခွဲခြမ်းစိတ်ဖြာမှုကို ပံ့ပိုးပေးသည်၊ ၎င်းသည် တရုတ်ပြည်မကြီးမှ Baidu Smart Cloud မှတဆင့် ဖြတ်သန်းနိုင်ပြီး နိုင်ငံတကာ အသွားအလာ `cloudflare` ဖြတ်သန်းနိုင်သည်။

`cloudflare` ၏ဖွဲ့စည်းပုံတွင် အမှားအယွင်းများစွာရှိသည်။ ဤသည်မှာ သတိပြုရန်အချက်အချို့ဖြစ်သည် :

### ဒိုမိန်းအမည်ကို အခြား `DNS` တွင် လက်ခံထားသည်၊ အသုံးပြုနည်း `cloudflare`

ပင်မဒိုမိန်းအမည်ကို ဤဒိုမိန်းအမည်နှင့် ချိတ်ဆက်ရန် ပထမဆုံး `cloudflare` နှင့် `SSL/TLS` → စိတ်ကြိုက်ဒိုမိန်းအမည်ကို အသုံးပြုပါ။

![](https://p.3ti.site/1725438658.avif)

### စိတ်ကြိုက်ဒိုမိန်းအမည်ဖြင့် ၀င်ရောက်၍မရပါ `cloudflare R2`

`R2` စိတ်ကြိုက်ဒိုမိန်းအမည်ဖြင့် ဝင်ရောက်ကြည့်ရှု `cloudflare` ကြောင့်၊ တည်ငြိမ်သောဖိုင်များထားရှိရန် ပြင်ပအရာဝတ္ထုသိုလှောင်မှုကို အသုံးပြုရန်လိုအပ်သည်။

ဤနေရာတွင် ကျွန်ုပ်တို့သည် `cloudflare` တွင် သိမ်းဆည်းထားရန် ပြင်ပအရာဝတ္ထုများကို ချည်နှောင်နည်းကို သရုပ်ပြရန် ဥပမာတစ်ခုအနေနှင့် ယူသည် [backblaze.com](https://www.backblaze.com)

`backblaze.com` တွင် ပုံးတစ်ခုဖန်တီးပါ၊ မည်သည့်ဖိုင်ကိုမဆို အပ်လုဒ်လုပ်ပါ၊ ဖိုင်ကိုကြည့်ရှုရန် နှိပ်ပါ၊ ဤနေရာတွင် `f003.backblazeb2.com` ဖြစ်သည့် `Friendly URL` ၏ဒိုမိန်းအမည်ကို ရယူပါ။

![](//p.3ti.site/1725440783.avif)

`cloudflare` တွင် `CNAME` မှ `f003.backblazeb2.com` မှ domain name ကိုပြောင်းပြီး proxy ကိုဖွင့်ပါ။

![](//p.3ti.site/1725440896.avif)

`SSL` → ကုဒ်ဝှက်ခြင်းမုဒ်မှ `cloudflare` ကိုမွမ်းမံပါ၊ `Full` သို့သတ်မှတ်ပါ။

![](//p.3ti.site/1725438572.avif)

အောက်တွင်ပြထားသည့်အတိုင်း ပြောင်းလဲခြင်းစည်းမျဉ်းကို ထည့်ပါ၊ ၎င်းကို ဦးစွာထည့်ပါ (ပထမတစ်ခုသည် အနိမ့်ဆုံးဦးစားပေးဖြစ်သည်)

![](//p.3ti.site/1725443232.avif)

`Rewrite to` dynamic ကိုရွေးချယ်ပြီး `your_bucketname` in `concat("/file/your_bucketname",http.request.uri.path)` ကို သင့်ပုံးအမည်သို့ ပြင်ဆင်ပါ။

ထို့အပြင်၊ အထက်ဖော်ပြပါ `cloudflare` ပြောင်းလဲခြင်းစည်းမျဉ်းတွင် `index.html` `file/your_bucketname/index.html` သို့ပြောင်းပြီး အခြားဖွဲ့စည်းပုံများသည် အတူတူပင်ဖြစ်ပါသည်။

![](//p.3ti.site/1725441384.avif)