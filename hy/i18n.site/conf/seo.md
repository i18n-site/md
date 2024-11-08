# Որոնման Համակարգի Օպտիմիզացում (Seo)

## Սկզբունք

`i18n.site` ընդունում է ոչ թարմացվող մեկ էջի ճարտարապետություն Որոնման ինդեքսավորումը հեշտացնելու համար կստեղծվի առանձին ստատիկ էջ և `sitemap.xml` սողացողների համար:

Երբ մուտքի հայտի `User-Agent` -ն օգտագործվում է որոնման համակարգի սողունի կողմից, հարցումը կվերահղվի ստատիկ էջ `302` միջոցով:

Ստատիկ էջերում օգտագործեք `link` այս էջի տարբեր լեզուներով տարբերակների հղումները նշելու համար, օրինակ՝ :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Տեղական nginx Կոնֆիգուրացիա

Որպես օրինակ վերցրեք `.i18n/htm/main.yml` կազմաձևման ֆայլը ցուցադրական նախագծում

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

Խնդրում ենք նախ փոփոխեք վերը նշված `host:` -ի արժեքը ձեր տիրույթի անվան համար, օրինակ՝ `xxx.com` :

Այնուհետև, `i18n.site -n` , ստատիկ էջը կստեղծվի `out/main/htm` գրացուցակում:

Իհարկե, դուք կարող եք նաև միացնել այլ կազմաձևման ֆայլեր, օրինակ՝ նախ նկատի ունենալով `main` -ի կազմաձևը՝ `.i18n/htm/dist.package.json` և `.i18n/htm/dist.yml` ստեղծելու համար:

Այնուհետև գործարկեք `i18n.site -n -c dist` , որպեսզի ստատիկ էջը ստեղծվի մինչև `out/dist/htm` :

`nginx` կարող է սահմանվել՝ հղում կատարելով ստորև ներկայացված կազմաձևին:

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Չափազանց երկար մի պահեք սերվերի աշխատողի սկրիպտները
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Սահմանեք ավելի երկար քեշի ժամանակներ այլ ստատիկ ռեսուրսների համար
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Սահմանեք, թե որ ստատիկ ֆայլը որոնիչն օգտագործում է որպես գլխավոր էջի մուտք
location = / {
  # Եթե $botLang դատարկ չէ, դա նշանակում է սողունի մուտք և վերահղում ըստ սահմանված լեզվական ուղու
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Մեկ էջի հավելվածի կազմաձևում
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Կարգավորեք Օբյեկտների Պահեստը Ստատիկ Ֆայլեր Վերբեռնելու Համար

Ստատիկ ֆայլերը կարող են ստեղծվել տեղում, բայց ավելի տարածված մոտեցումը դրանք օբյեկտների պահեստում վերբեռնելն է:

Փոփոխեք վերևում կազմաձևված `out` :

```
out:
  - s3
```

Այնուհետև խմբագրեք `~/.config/i18n.site.yml` և ավելացրեք հետևյալ կոնֆիգուրացիան :

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

Կազմաձևում, խնդրում ենք փոխել `i18n.site` `host:` -ը `.i18n/htm/main.yml` -ում, մի քանի օբյեկտների պահեստներ կարող են կազմաձևվել `s3` տակ, իսկ `region` դաշտը կամընտիր է (օբյեկտների շատ պահեստարանների կարիք չկա այս դաշտը դնել):

Այնուհետև գործարկեք `i18n.site -n` նախագիծը վերահրապարակելու համար:

Եթե դուք փոփոխել եք `~/.config/i18n.site.yml` և ցանկանում եք նորից վերբեռնել, խնդրում ենք օգտագործել հետևյալ հրամանը ծրագրի արմատական գրացուցակում՝ վերբեռնման քեշը մաքրելու համար :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Կոնֆիգուրացիա

Դոմենի անուն հյուրընկալվել է [cloudflare](//www.cloudflare.com)

### Փոխակերպման Կանոններ

Ավելացրեք փոխակերպման կանոնները, ինչպես ցույց է տրված ստորև.

![](//p.3ti.site/1725436822.avif)

Կանոնների կոդը հետևյալն է, խնդրում ենք փոփոխել «i18n.site» կոդը ձեր տիրույթի անվան մեջ.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Քեշավորման Կանոններ

Ավելացնել քեշի կանոնները հետևյալ կերպ.

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Վերահղման Կանոններ

Սահմանեք վերահղման կանոնները հետևյալ կերպ, խնդրում ենք փոփոխել «i18n.site» կոդը ձեր տիրույթի անունով

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

`URL redirect` Ընտրեք դինամիկ վերահղում, խնդրում ենք փոփոխել `/en` վերահղման ուղու `concat("/en",http.request.uri.path,".htm")` ում դեպի այն լռելյայն լեզուն, որը ցանկանում եք ներառել որոնման համակարգերը:

## Baidu Intelligent Cloud Configuration

Եթե Ձեզ անհրաժեշտ է ծառայություններ մատուցել մայրցամաքային Չինաստանին, կարող եք օգտագործել [Baidu Smart Cloud-ը](//cloud.baidu.com) :

Տվյալները վերբեռնվում են Baidu Object Storage-ում և միացված են Baidu Content Distribution Network-ին:

Այնուհետև ստեղծեք սցենարը [EdgeJS ծառայության](//console.bce.baidu.com/cdn/#/cdn/ejs/list) մեջ հետևյալ կերպ

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
  // Պատասխանների վերնագրերը կարող են սահմանվել վրիպազերծման ելքի համար, օրինակ՝ out.XXX = 'MSG';
})
```

Սեղմեք `Debug` , ապա սեղմեք Հրապարակել ամբողջ ցանցին:

![](//p.3ti.site/1725437754.avif)

## Ընդլայնված Օգտագործում. Բաշխել Երթևեկությունը՝ Հիմնվելով Տարածաշրջանային Որոշման Վրա

Եթե ցանկանում եք ծառայություններ մատուցել մայրցամաքային Չինաստանում և ցանկանում եք նաև `cloudflare` անվճար միջազգային տրաֆիկ, կարող եք օգտագործել `DNS` տարածաշրջանային լուծմամբ:

Օրինակ, [Huawei Cloud- DNS](https://www.huaweicloud.com) տրամադրում է անվճար տարածաշրջանային վերլուծություն, որի միջոցով մայրցամաքային չինական երթևեկությունը կարող է անցնել Baidu Smart Cloud-ով, իսկ միջազգային տրաֆիկը կարող է անցնել `cloudflare` :

`cloudflare` ի կոնֆիգուրացիայի մեջ կան բազմաթիվ որոգայթներ: Ահա մի քանի կետ, որոնք պետք է նշել :

### Դոմենի Անունը Տեղակայված Է Այլ `DNS` -Ում, Ինչպես Օգտագործել `cloudflare`

Սկզբում կամայական տիրույթի անունը կապեք `cloudflare` ին, այնուհետև օգտագործեք `SSL/TLS` → հատուկ տիրույթի անունը՝ հիմնական տիրույթի անունը այս տիրույթի անվան հետ կապելու համար:

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Հնարավոր Չէ Մուտք Գործել Հատուկ Տիրույթի Անվան Միջոցով

Քանի որ `cloudflare` օբյեկտների պահեստը `R2` չի կարող մուտք գործել հարմարեցված տիրույթի անունով, անհրաժեշտ է օգտագործել երրորդ կողմի օբյեկտների պահեստավորում՝ ստատիկ ֆայլեր տեղադրելու համար:

Այստեղ մենք վերցնում `cloudflare` [backblaze.com](https://www.backblaze.com)

Ստեղծեք դույլ `backblaze.com` -ում, վերբեռնեք ցանկացած ֆայլ, սեղմեք՝ ֆայլը թերթելու համար և ստացեք `Friendly URL` -ի տիրույթի անունը, որն այստեղ `f003.backblazeb2.com` է:

![](//p.3ti.site/1725440783.avif)

Փոխեք տիրույթի անունը `CNAME` ից `f003.backblazeb2.com` ից `cloudflare` ում և միացրեք վստահված անձը:

![](//p.3ti.site/1725440896.avif)

Փոփոխել `cloudflare` `SSL` -ից → գաղտնագրման ռեժիմ, սահմանել `Full`

![](//p.3ti.site/1725438572.avif)

Ավելացրեք փոխակերպման կանոնը, ինչպես ցույց է տրված ստորև, դրեք այն առաջինը (առաջինն ունի ամենացածր առաջնահերթությունը).

![](//p.3ti.site/1725443232.avif)

`Rewrite to` ընտրեք դինամիկ և փոփոխեք `your_bucketname` `concat("/file/your_bucketname",http.request.uri.path)` -ում ձեր դույլի անվան համար:

Բացի այդ, վերը նշված `cloudflare` փոխակերպման կանոնում `index.html` փոխվում է `file/your_bucketname/index.html` ի, իսկ մյուս կոնֆիգուրացիաները մնում են նույնը:

![](//p.3ti.site/1725441384.avif)