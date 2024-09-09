# Хайлтын Системийн Оновчлол (Seo)

## Зарчим

`i18n.site` шинэчлэгдэхгүй нэг хуудасны архитектурыг ашигладаг. Хайлтын индексжүүлэлтийг хөнгөвчлөхийн тулд мөлхөгчдийг мөлхөхөд зориулж тусдаа статик хуудас болон `sitemap.xml` үүсгэнэ.

Хандалтын хүсэлтийн `User-Agent` хайлтын системийн мөлхөгч ашиглах үед хүсэлтийг `302` ээр дамжуулан статик хуудас руу дахин чиглүүлэх болно.

`link` :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Статик Файлуудыг Байршуулах Объектын Санг Тохируулах

Статик файлуудыг дотооддоо үүсгэж болох боловч илүү түгээмэл арга бол тэдгээрийг объектын санд байршуулах явдал юм.

Демо төслийн `.i18n/htm/ol.yml` тохиргооны файлыг жишээ болгон авч үзье

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

Эхлээд дээрх `host:` -ийн утгыг `i18n.site` гэх мэт домэйн нэрэндээ өөрчилнө үү.

Дараа нь `~/.config/i18n.site.yml` засаад дараах тохиргоог нэмнэ үү :

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

Тохиргоонд `i18n.site` `.i18n/htm/ol.yml` -д `host:` ын утга болгон өөрчилнө үү, `s3` доор олон объектын дэлгүүрийг тохируулах боломжтой ба `region` талбар нь сонголттой (олон объектын дэлгүүрт энэ талбарыг тохируулах шаардлагагүй).

Дараа нь төслийг дахин нийтлэхийн тулд `i18n.site -n` ажиллуулна уу.

Хэрэв та `~/.config/i18n.site.yml` өөрчилсөн бөгөөд дахин байршуулахыг хүсвэл төслийн үндсэн лавлах дээрх дараах тушаалыг ашиглан байршуулах кэшийг цэвэрлэнэ үү :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## cloudflare Тохиргоо

Домэйн нэрийг байршуулсан [cloudflare](//www.cloudflare.com)

### Хөрвүүлэх Дүрэм

Доор үзүүлсэн шиг хөрвүүлэх дүрмийг нэмнэ үү.

![](//p.3ti.site/1725436822.avif)

Дүрмийн код нь дараах байдалтай байна, "i18n.site" кодыг өөрийн домэйн нэрээр өөрчилнө үү:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Кэш Хийх Дүрэм

Кэшийн дүрмийг дараах байдлаар нэмнэ үү:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Дахин Чиглүүлэх Дүрэм

Дахин чиглүүлэх дүрмийг дараах байдлаар тохируулна уу, "i18n.site" кодыг өөрийн домэйн нэрээр өөрчилнө үү.

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

`URL redirect` Динамик дахин чиглүүлэлтийг сонго, `concat("/en",http.request.uri.path,".htm")` чиглүүлэлтийн зам дахь `/en` хайлтын системд оруулахыг хүссэн өгөгдмөл хэл рүү өөрчилнө үү.

## Baidu Ухаалаг Үүлэн Тохиргоо

Хэрэв та эх газрын Хятадад үйлчилгээ үзүүлэх шаардлагатай бол [Baidu Smart Cloud](//cloud.baidu.com) ашиглаж болно.

Өгөгдлийг Baidu Object Storage-д байршуулж, Baidu Content Distribution Network-д холбоно.

Дараа нь скриптийг [EdgeJS үйлчилгээнд](//console.bce.baidu.com/cdn/#/cdn/ejs/list) дараах байдлаар үүсгэнэ үү

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

`Debug` дээр товшоод, бүх сүлжээнд нийтлэх дээр дарна уу.

![](//p.3ti.site/1725437754.avif)

## Нарийвчилсан Хэрэглээ: Бүс Нутгийн Шийдэлд Тулгуурлан Урсгалыг Хуваарилах

Хэрэв та эх газрын Хятадад үйлчилгээ үзүүлэхийг хүсэж байгаа бол мөн олон улсын `cloudflare` үнэгүй трафик авахыг хүсвэл бүс нутгийн нарийвчлалтай `DNS` ашиглаж болно.

Жишээлбэл, [Huawei DNS](https://www.huaweicloud.com) эх газрын Хятадын урсгалыг Baidu Smart Cloud-аар дамжуулж, олон улсын урсгалыг `cloudflare` ээр дамжуулж болох бүс нутгийн шинжилгээг үнэ төлбөргүй үзүүлдэг.

`cloudflare` ийн тохиргоонд олон алдаа бий. Энд анхаарах хэдэн зүйл байна :

### Домэйн Нэрийг Өөр `DNS` Д Байршуулсан, `cloudflare` Хэрхэн Ашиглах Талаар

Эхлээд дурын домэйн нэрийг `cloudflare` -д холбож, дараа нь `SSL/TLS` → захиалгат домэйн нэрийг ашиглан үндсэн домэйн нэрийг энэ домэйн нэртэй холбоно.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Захиалгат Домэйн Нэрээр Хандах Боломжгүй

`R2` тохируулсан домэйн нэрээр хандах `cloudflare` тул статик файлуудыг байрлуулахын тулд гуравдагч талын объектын санг ашиглах шаардлагатай.

Энд бид `cloudflare` д хадгалагдах гуравдагч этгээдийн объектуудыг хэрхэн холбохыг жишээ болгон авч [backblaze.com](https://www.backblaze.com) .

`backblaze.com` дээр хувин үүсгэж, дурын файлыг байршуулж, файлыг үзэхийн тулд товшоод эндээс `f003.backblazeb2.com` гэсэн `Friendly URL` домэйн нэрийг аваарай.

![](//p.3ti.site/1725440783.avif)

Домэйн нэрийг `cloudflare` -д `CNAME` -ээс `f003.backblazeb2.com` болгож сольж, проксиг идэвхжүүлнэ үү.

![](//p.3ti.site/1725440896.avif)

`SSL` ийн `cloudflare` өөрчлөх → шифрлэлтийн горимыг `Full` болгож тохируулна уу

![](//p.3ti.site/1725438572.avif)

Доор үзүүлсэн шиг хөрвүүлэх дүрмийг нэмж, эхлээд тавь (эхнийх нь хамгийн бага ач холбогдолтой):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` динамикийг сонгоод `your_bucketname` `concat("/file/your_bucketname",http.request.uri.path)` д хувин нэрэндээ өөрчил.

Нэмж дурдахад, дээрх `cloudflare` хувиргах дүрэмд `index.html` `file/your_bucketname/index.html` болгож өөрчилсөн бөгөөд бусад тохиргоонууд хэвээр байна.

![](//p.3ti.site/1725441384.avif)