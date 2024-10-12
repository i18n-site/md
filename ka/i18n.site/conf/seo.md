# Საძიებო Სისტემის Ოპტიმიზაცია (Seo)

## Პრინციპი

`i18n.site` იღებს არაგანახლების ერთ გვერდის არქიტექტურას ძიების ინდექსირების გასაადვილებლად, ცალკე სტატიკური გვერდი და `sitemap.xml` იქნება გენერირებული მცოცავებისთვის.

როდესაც წვდომის მოთხოვნის `User-Agent` გამოიყენება საძიებო სისტემის მცოცავის მიერ, მოთხოვნა გადამისამართდება სტატიკურ გვერდზე `302` საშუალებით.

სტატიკურ გვერდებზე გამოიყენეთ `link` , რათა მიუთითოთ ბმულები ამ გვერდის სხვადასხვა ენებზე, როგორიცაა :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Ობიექტების Შენახვის Კონფიგურაცია Სტატიკური Ფაილების Ატვირთვისთვის

სტატიკური ფაილების გენერირება შესაძლებელია ადგილობრივად, მაგრამ უფრო გავრცელებული მიდგომაა მათი ატვირთვა ობიექტების შესანახად.

მაგალითისთვის აიღეთ `.i18n/htm/ol.yml` კონფიგურაციის ფაილი დემო პროექტში

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

გთხოვთ, ჯერ შეცვალოთ `host:` -ის მნიშვნელობა თქვენი დომენის სახელით, როგორიცაა `i18n.site` .

შემდეგ, შეცვალეთ `~/.config/i18n.site.yml` და დაამატეთ შემდეგი კონფიგურაცია :

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

კონფიგურაციაში, გთხოვთ, შეცვალოთ `i18n.site` მნიშვნელობით `host:` ში `.i18n/htm/ol.yml` ში, მრავალი ობიექტის მაღაზიის კონფიგურაცია შესაძლებელია `s3` ქვეშ, ხოლო `region` ველი არჩევითია (ობიექტების ბევრ მაღაზიას არ სჭირდება ამ ველის დაყენება).

შემდეგ გაუშვით `i18n.site -n` პროექტის ხელახლა გამოსაქვეყნებლად.

თუ თქვენ შეცვალეთ `~/.config/i18n.site.yml` და გსურთ ხელახლა ატვირთოთ, გთხოვთ, გამოიყენოთ შემდეგი ბრძანება პროექტის root დირექტორიაში ატვირთვის ქეშის გასასუფთავებლად :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## cloudflare Კონფიგურაცია

დომენის მასპინძლობა [cloudflare](//www.cloudflare.com)

### Კონვერტაციის Წესები

დაამატეთ კონვერტაციის წესები, როგორც ნაჩვენებია ქვემოთ:

![](//p.3ti.site/1725436822.avif)

წესის კოდი ასეთია, გთხოვთ შეცვალოთ კოდი "i18n.site" თქვენი დომენის სახელით:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Ქეშირების Წესები

დაამატეთ ქეშის წესები შემდეგნაირად:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Გადამისამართების Წესები

დააყენეთ გადამისამართების წესები შემდეგნაირად, გთხოვთ შეცვალოთ კოდი "i18n.site" თქვენს დომენის სახელზე

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

`URL redirect` აირჩიეთ დინამიური გადამისამართება, გთხოვთ, შეცვალოთ `/en` გადამისამართების გზაზე `concat("/en",http.request.uri.path,".htm")` ნაგულისხმევ ენაზე, რომელიც გსურთ საძიებო სისტემებში ჩართოთ.

## Baidu Intelligent Cloud Configuration

თუ თქვენ გჭირდებათ სერვისების მიწოდება მატერიკულ ჩინეთში, შეგიძლიათ გამოიყენოთ [Baidu Smart Cloud](//cloud.baidu.com) .

მონაცემები აიტვირთება Baidu Object Storage-ში და უკავშირდება Baidu-ს კონტენტის სადისტრიბუციო ქსელს.

შემდეგ შექმენით სკრიპტი [EdgeJS სერვისში](//console.bce.baidu.com/cdn/#/cdn/ejs/list) შემდეგნაირად

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

დააწკაპუნეთ `Debug` , შემდეგ დააწკაპუნეთ გამოქვეყნება მთელ ქსელში.

![](//p.3ti.site/1725437754.avif)

## Გაფართოებული Გამოყენება: Ტრაფიკის Განაწილება Რეგიონული Რეზოლუციის Მიხედვით

თუ გსურთ სერვისების მიწოდება კონტინენტზე ჩინეთში და ასევე გსურთ `cloudflare` უფასო საერთაშორისო ტრაფიკი, შეგიძლიათ გამოიყენოთ `DNS` რეგიონალური რეზოლუციით.

მაგალითად, [Huawei DNS](https://www.huaweicloud.com) გთავაზობთ უფასო რეგიონალურ ანალიზს, რომლითაც ჩინეთის ტრაფიკს შეუძლია გაიაროს Baidu Smart Cloud, ხოლო საერთაშორისო ტრაფიკი შეიძლება გაიაროს `cloudflare` ზე.

`cloudflare` ის კონფიგურაციაში ბევრი ხარვეზია. აქ არის რამდენიმე პუნქტი, რომელიც უნდა აღინიშნოს :

### Დომენის Სახელი Განთავსებულია Სხვა `DNS` -Ში, Როგორ Გამოვიყენოთ `cloudflare`

ჯერ დააკავშირეთ თვითნებური დომენის სახელი `cloudflare` -ზე და შემდეგ გამოიყენეთ `SSL/TLS` → მორგებული დომენის სახელი, რომ დააკავშიროთ მთავარი დომენის სახელი ამ დომენის სახელთან.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ზე Წვდომა Შეუძლებელია Მორგებული Დომენის Სახელით

იმის გამო, რომ `cloudflare` ობიექტის საცავი `R2` არ არის წვდომა მორგებული დომენის სახელით, მესამე მხარის ობიექტების საცავი უნდა იქნას გამოყენებული სტატიკური ფაილების განსათავსებლად.

აქ ჩვენ ვიღებთ მაგალითს [backblaze.com](https://www.backblaze.com) რათა ვაჩვენოთ, თუ როგორ უნდა დააკავშიროთ მესამე მხარის ობიექტები, რომლებიც ინახება `cloudflare` -ზე.

შექმენით bucket `backblaze.com` -ზე, ატვირთეთ ნებისმიერი ფაილი, დააწკაპუნეთ ფაილის დასათვალიერებლად და მიიღეთ დომენის სახელი `Friendly URL` , რომელიც არის `f003.backblazeb2.com` აქ.

![](//p.3ti.site/1725440783.avif)

შეცვალეთ დომენის სახელი `CNAME` დან `f003.backblazeb2.com` მდე `cloudflare` -ზე და ჩართეთ პროქსი.

![](//p.3ti.site/1725440896.avif)

შეცვალეთ `cloudflare` `SSL` -დან → დაშიფვრის რეჟიმი, დააყენეთ `Full` ზე

![](//p.3ti.site/1725438572.avif)

დაამატეთ კონვერტაციის წესი, როგორც ნაჩვენებია ქვემოთ, დადეთ იგი პირველ რიგში (პირველს აქვს ყველაზე დაბალი პრიორიტეტი):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` აირჩიეთ დინამიური და შეცვალეთ `your_bucketname` `concat("/file/your_bucketname",http.request.uri.path)` -ში თქვენი თაიგულის სახელით.

გარდა ამისა, ზემოთ `cloudflare` კონვერტაციის წესში `index.html` შეიცვალა `file/your_bucketname/index.html` ით და სხვა კონფიგურაციები იგივე რჩება.

![](//p.3ti.site/1725441384.avif)