# Хайлтын Системийн Оновчлол (Seo)

## Зарчим

`i18n.site` шинэчлэгдэхгүй нэг хуудасны архитектурыг ашигладаг. Хайлтын индексжүүлэлтийг хөнгөвчлөхийн тулд мөлхөгчдийг мөлхөхөд зориулж тусдаа статик хуудас болон `sitemap.xml` үүсгэнэ.

Хандалтын хүсэлтийн `User-Agent` хайлтын системийн мөлхөгч ашиглах үед хүсэлтийг `302` ээр дамжуулан статик хуудас руу дахин чиглүүлэх болно.

`link` :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Орон Нутгийн nginx Тохиргоо

Демо төслийн `.i18n/htm/main.yml` тохиргооны файлыг жишээ болгон авч үзье

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

Эхлээд дээрх `host:` -ийн утгыг `xxx.com` гэх мэт домэйн нэрэндээ өөрчилнө үү.

Дараа нь, `i18n.site -n` , статик хуудас `out/main/htm` санд үүсгэгдэх болно.

Мэдээжийн хэрэг, та `.i18n/htm/dist.package.json` болон `.i18n/htm/dist.yml` үүсгэхийн тулд эхлээд `main` -ийн тохиргоонд хандах гэх мэт бусад тохиргооны файлуудыг идэвхжүүлж болно.

Дараа нь `i18n.site -n -c dist` ажиллуулснаар статик хуудас `out/dist/htm` болж үүсгэгдэнэ.

Доорх тохиргооноос `nginx` тохируулж болно.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Серверийн ажилтны скриптүүдийг хэт удаан кэш болгож болохгүй
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Бусад статик нөөцөд илүү урт кэш хийх хугацааг тохируулна уу
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Мөлхөгч ямар статик файлыг нүүр хуудасны оруулга болгон ашиглахыг тохируулна уу
location = / {
  # Хэрэв $botLang хоосон биш бол энэ нь тогтоосон хэлний замын дагуу мөлхөгч рүү хандах болон дахин чиглүүлэх гэсэн үг юм
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Нэг хуудасны програмын тохиргоо
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Статик Файлуудыг Байршуулах Объектын Санг Тохируулах

Статик файлуудыг дотооддоо үүсгэж болох боловч илүү түгээмэл арга бол тэдгээрийг объектын санд байршуулах явдал юм.

Дээр тохируулсан `out` өөрчлөх :

```
out:
  - s3
```

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

Тохиргоонд `i18n.site` `.i18n/htm/main.yml` -д `host:` -ын утга болгон өөрчилнө үү, `s3` доор олон объектын дэлгүүрийг тохируулах боломжтой ба `region` талбар нь сонголттой (олон объектын дэлгүүрт энэ талбарыг тохируулах шаардлагагүй).

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

Дараа нь скриптийг [edge EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) дараах байдлаар үүсгэнэ үү

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
  // Хариултын толгой хэсгийг out.XXX = 'MSG';
})
```

`Debug` товшоод, бүх сүлжээнд нийтлэх дээр дарна уу.

![](//p.3ti.site/1725437754.avif)

## Нарийвчилсан Хэрэглээ: Бүс Нутгийн Шийдэлд Тулгуурлан Урсгалыг Хуваарилах

Хэрэв та эх газрын Хятадад үйлчилгээ үзүүлэхийг хүсэж байгаа бол мөн олон улсын `cloudflare` үнэгүй трафик авахыг хүсвэл бүс нутгийн нарийвчлалтай `DNS` ашиглаж болно.

Жишээлбэл, [Huawei Cloud DNS](https://www.huaweicloud.com) эх газрын Хятадын урсгалыг Baidu Smart Cloud-ээр дамжуулж, олон улсын урсгалыг `cloudflare` ээр дамжуулж болох бүс нутгийн шинжилгээг үнэ төлбөргүй үзүүлдэг.

`cloudflare` ийн тохиргоонд олон алдаа бий. Энд анхаарах хэдэн зүйл байна :

### Домэйн Нэрийг Өөр `DNS` -Д Байршуулсан, `cloudflare` Хэрхэн Ашиглах Талаар

Эхлээд дурын домэйн нэрийг `cloudflare` -д холбож, дараа нь `SSL/TLS` → захиалгат домэйн нэрийг ашиглан үндсэн домэйн нэрийг энэ домэйн нэртэй холбоно.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Захиалгат Домэйн Нэрээр Хандах Боломжгүй

`cloudflare` объектын санах ой `R2` д тохируулсан домэйн нэрээр хандах боломжгүй тул статик файлуудыг байрлуулахын тулд гуравдагч талын объектын санг ашиглах шаардлагатай.

Энд бид `cloudflare` -д хадгалагдах гуравдагч этгээдийн объектуудыг хэрхэн холбохыг жишээ болгон авч [backblaze.com](https://www.backblaze.com) .

`backblaze.com` дээр хувин үүсгэж, дурын файлыг байршуулж, файлыг үзэхийн тулд товшоод эндээс `f003.backblazeb2.com` гэсэн `Friendly URL` домэйн нэрийг аваарай.

![](//p.3ti.site/1725440783.avif)

Домэйн нэрийг `cloudflare` -д `CNAME` ээс `f003.backblazeb2.com` болгож сольж, проксиг идэвхжүүлнэ үү.

![](//p.3ti.site/1725440896.avif)

`SSL` -ийн `cloudflare` өөрчлөх → шифрлэлтийн горимыг `Full` болгож тохируулна уу

![](//p.3ti.site/1725438572.avif)

Доор үзүүлсэн шиг хөрвүүлэх дүрмийг нэмж, эхлээд тавь (эхнийх нь хамгийн бага ач холбогдолтой):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` динамикийг сонгоод `your_bucketname` `concat("/file/your_bucketname",http.request.uri.path)` д хувин нэрэндээ өөрчил.

Үүнээс гадна дээрх `cloudflare` хувиргах дүрэмд `index.html` `file/your_bucketname/index.html` болгож өөрчилсөн бөгөөд бусад тохиргоонууд нь хэвээр байна.

![](//p.3ti.site/1725441384.avif)