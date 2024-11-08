# ការបង្កើនប្រសិទ្ធភាពម៉ាស៊ីនស្វែងរក (SEO)

## គោលការណ៍

`i18n.site` ទទួលយកស្ថាបត្យកម្មទំព័រតែមួយដែលមិនធ្វើឱ្យស្រស់ ដើម្បីសម្រួលដល់ការបង្កើតលិបិក្រមស្វែងរក ទំព័រឋិតិវន្តដាច់ដោយឡែក និង `sitemap.xml` នឹងត្រូវបានបង្កើតសម្រាប់អ្នកស្រាវជ្រាវដើម្បីរុករក។

នៅពេលដែល `User-Agent` នៃសំណើចូលប្រើត្រូវបានប្រើប្រាស់ដោយកម្មវិធីរុករកម៉ាស៊ីនស្វែងរក សំណើនឹងត្រូវបានបញ្ជូនបន្តទៅទំព័រឋិតិវន្តតាមរយៈ `302` ។

នៅលើទំព័រឋិតិវន្ត ប្រើ `link` ដើម្បីបង្ហាញតំណទៅកាន់កំណែភាសាផ្សេងៗនៃទំព័រនេះ ដូចជា :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## ការកំណត់រចនាសម្ព័ន្ធ nginx ក្នុងតំបន់

យកឯកសារកំណត់រចនាសម្ព័ន្ធ `.i18n/htm/main.yml` នៅក្នុងគម្រោងសាកល្បងជាឧទាហរណ៍

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

ជាដំបូង សូមកែប្រែតម្លៃ `host:` ខាងលើទៅឈ្មោះដែនរបស់អ្នក ដូចជា `xxx.com` .

បន្ទាប់មក `i18n.site -n` ទំព័រឋិតិវន្តនឹងត្រូវបានបង្កើតក្នុង `out/main/htm` ថត។

ជាការពិតណាស់ អ្នកក៏អាចបើកឯកសារកំណត់រចនាសម្ព័ន្ធផ្សេងទៀតផងដែរ ដូចជាដំបូងគេយោងទៅលើការកំណត់រចនាសម្ព័ន្ធ `main` ដើម្បីបង្កើត `.i18n/htm/dist.package.json` និង `.i18n/htm/dist.yml` ។

បន្ទាប់មកដំណើរការ `i18n.site -n -c dist` ដូច្នេះទំព័រឋិតិវន្តនឹងត្រូវបានបង្កើតទៅជា `out/dist/htm` ។

`nginx` អាចត្រូវបានកំណត់ដោយយោងទៅការកំណត់ខាងក្រោម។

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# កុំទុកស្គ្រីបអ្នកបម្រើម៉ាស៊ីនមេយូរពេក
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# កំណត់ពេលវេលាឃ្លាំងសម្ងាត់យូរជាងនេះសម្រាប់ធនធានឋិតិវន្តផ្សេងទៀត។
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# កំណត់ឯកសារឋិតិវន្តមួយណាដែលកម្មវិធីរុករកប្រើជាធាតុទំព័រដើម
location = / {
  # ប្រសិនបើ $botLang មិនទទេ វាមានន័យថាការចូលប្រើ crawler និងការបញ្ជូនបន្តតាមភាសាដែលបានកំណត់
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# ការកំណត់រចនាសម្ព័ន្ធកម្មវិធីទំព័រតែមួយ
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## កំណត់រចនាសម្ព័ន្ធការផ្ទុកវត្ថុសម្រាប់ការផ្ទុកឡើងឯកសារឋិតិវន្ត

ឯកសារឋិតិវន្តអាចបង្កើតបានក្នុងមូលដ្ឋាន ប៉ុន្តែវិធីសាស្រ្តទូទៅមួយគឺការបង្ហោះពួកវាទៅកន្លែងផ្ទុកវត្ថុ។

កែប្រែ `out` ដែលបានកំណត់ខាងលើទៅជា :

```
out:
  - s3
```

បន្ទាប់មកកែសម្រួល `~/.config/i18n.site.yml` ហើយបន្ថែមការកំណត់ខាងក្រោម :

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

នៅក្នុងការកំណត់រចនាសម្ព័ន្ធ សូមប្តូរលេខ `i18n.site` ទៅតម្លៃនៃ `host:` ក្នុង `.i18n/htm/main.yml` ហាងលក់វត្ថុជាច្រើនអាចត្រូវបានកំណត់រចនាសម្ព័ន្ធក្រោម `s3` ហើយវាល `region` គឺស្រេចចិត្ត (ហាងលក់វត្ថុជាច្រើនមិនចាំបាច់កំណត់វាលនេះទេ)។

បន្ទាប់មកដំណើរការ `i18n.site -n` ដើម្បីផ្សព្វផ្សាយគម្រោងឡើងវិញ។

ប្រសិនបើអ្នកបានកែប្រែ `~/.config/i18n.site.yml` ហើយចង់បង្ហោះឡើងវិញ សូមប្រើពាក្យបញ្ជាខាងក្រោមនៅក្នុងថតឯកសាររបស់គម្រោង ដើម្បីសម្អាតឃ្លាំងផ្ទុកទិន្នន័យ :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## ការកំណត់រចនាសម្ព័ន្ធ cloudflare

ឈ្មោះដែនត្រូវបានបង្ហោះទៅ [cloudflare](//www.cloudflare.com)

### ច្បាប់បំប្លែង

បន្ថែមច្បាប់បំប្លែងដូចបង្ហាញខាងក្រោម៖

![](//p.3ti.site/1725436822.avif)

លេខកូដច្បាប់មានដូចខាងក្រោម សូមកែប្រែកូដ "i18n.site" ទៅជាឈ្មោះដែនរបស់អ្នក៖

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### ច្បាប់ឃ្លាំងសម្ងាត់

បន្ថែមច្បាប់ឃ្លាំងសម្ងាត់ដូចខាងក្រោម៖

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### បង្វែរក្បួន

កំណត់ច្បាប់បញ្ជូនបន្តដូចខាងក្រោម សូមកែប្រែកូដ "i18n.site" ទៅជាឈ្មោះដែនរបស់អ្នក។

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

`URL redirect` ជ្រើសរើសការបង្វែរទិសដៅថាមវន្ត សូមកែប្រែ `/en` នៅក្នុងផ្លូវប្តូរទិសទី `concat("/en",http.request.uri.path,".htm")` ទៅជាភាសាលំនាំដើមដែលអ្នកចង់ឱ្យម៉ាស៊ីនស្វែងរករួមបញ្ចូល។

## ការកំណត់រចនាសម្ព័ន្ធពពកឆ្លាតវៃ Baidu

ប្រសិនបើអ្នកត្រូវការផ្តល់សេវាកម្មដល់ប្រទេសចិនដីគោក អ្នកអាចប្រើ [Baidu Smart Cloud](//cloud.baidu.com) ។

ទិន្នន័យត្រូវបានផ្ទុកឡើងទៅ Baidu Object Storage ហើយភ្ជាប់ទៅបណ្តាញចែកចាយមាតិកា Baidu ។

បន្ទាប់មកបង្កើត script នៅក្នុង [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) ដូចតទៅ

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
  // ក្បាលឆ្លើយតបអាចត្រូវបានកំណត់ទៅជាលទ្ធផលបំបាត់កំហុស ដូចជា out.XXX = 'MSG';
})
```

ចុច `Debug` បន្ទាប់មកចុច Publish ទៅកាន់បណ្តាញទាំងមូល។

![](//p.3ti.site/1725437754.avif)

## ការប្រើប្រាស់កម្រិតខ្ពស់៖ ចែកចាយចរាចរណ៍ដោយផ្អែកលើដំណោះស្រាយក្នុងតំបន់

ប្រសិនបើអ្នកចង់ផ្តល់សេវាកម្មនៅក្នុងប្រទេសចិនដីគោក ហើយក៏ចង់បាន `cloudflare` ចរាចរណ៍អន្តរជាតិដោយឥតគិតថ្លៃ អ្នកអាចប្រើ `DNS` ជាមួយនឹងដំណោះស្រាយក្នុងតំបន់។

ឧទាហរណ៍ [ក្រុមហ៊ុន Huawei Cloud DNS](https://www.huaweicloud.com) ផ្តល់ការវិភាគក្នុងតំបន់ដោយឥតគិតថ្លៃ ដែលចរាចរណ៍ចិនដីគោកអាចឆ្លងកាត់ Baidu Smart Cloud ហើយចរាចរណ៍អន្តរជាតិអាចឆ្លងកាត់ `cloudflare` ។

មានបញ្ហាជាច្រើនក្នុងការកំណត់រចនាសម្ព័ន្ធ `cloudflare` នេះជាចំណុចមួយចំនួនដែលត្រូវកត់សម្គាល់ :

### ឈ្មោះដែនត្រូវបានបង្ហោះក្នុង `DNS` ផ្សេងទៀត របៀបប្រើ `cloudflare`

ដំបូងត្រូវចងឈ្មោះដែនបំពានទៅ `cloudflare` ហើយបន្ទាប់មកប្រើ `SSL/TLS` → ឈ្មោះដែនផ្ទាល់ខ្លួន ដើម្បីភ្ជាប់ឈ្មោះដែនចម្បងទៅនឹងឈ្មោះដែននេះ។

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` មិនអាចចូលប្រើបានតាមរយៈឈ្មោះដែនផ្ទាល់ខ្លួន

ដោយសារតែកន្លែងផ្ទុកវត្ថុ `R2` `cloudflare` ត្រូវបានសាងសង់ឡើងមិនអាចចូលប្រើបានដោយឈ្មោះដែនផ្ទាល់ខ្លួន ការផ្ទុកវត្ថុភាគីទីបីចាំបាច់ត្រូវប្រើដើម្បីដាក់ឯកសារឋិតិវន្ត។

[backblaze.com](https://www.backblaze.com) យើងយកជាឧទាហរណ៍ដើម្បីបង្ហាញពីរបៀបចងវត្ថុភាគីទីបីហើយទុកវាជា `cloudflare` ។

បង្កើតធុងទឹកនៅ `backblaze.com` ផ្ទុកឡើងឯកសារណាមួយ ចុចដើម្បីរកមើលឯកសារ និងទទួលបានឈ្មោះដែន `Friendly URL` ដែលជា `f003.backblazeb2.com` នៅទីនេះ។

![](//p.3ti.site/1725440783.avif)

ផ្លាស់ប្តូរឈ្មោះដែនពី `CNAME` ទៅ `f003.backblazeb2.com` នៅ `cloudflare` ហើយបើកប្រូកស៊ី។

![](//p.3ti.site/1725440896.avif)

កែប្រែ `cloudflare` នៃ `SSL` → របៀបអ៊ិនគ្រីប កំណត់ទៅ `Full`

![](//p.3ti.site/1725438572.avif)

បន្ថែមច្បាប់បំប្លែងដូចបង្ហាញខាងក្រោម ដាក់វាជាមុនសិន (ទីមួយមានអាទិភាពទាបបំផុត)៖

![](//p.3ti.site/1725443232.avif)

`Rewrite to` ជ្រើសរើសថាមវន្ត និងកែប្រែ `your_bucketname` ក្នុង `concat("/file/your_bucketname",http.request.uri.path)` ទៅឈ្មោះធុងរបស់អ្នក។

លើសពីនេះ នៅក្នុងច្បាប់បម្លែង `cloudflare` ខាងលើ `index.html` ត្រូវបានប្តូរទៅ `file/your_bucketname/index.html` ហើយការកំណត់ផ្សេងទៀតនៅតែដដែល។

![](//p.3ti.site/1725441384.avif)