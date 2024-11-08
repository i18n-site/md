# Optimization Engine Search (Seo)

## Принцип

`i18n.site` меъмории як саҳифаи навнашавандаро қабул мекунад `sitemap.xml`

Вақте ки `User-Agent` -и дархости дастрасӣ аз ҷониби браузери системаи ҷустуҷӯ истифода мешавад, дархост тавассути `302` ба саҳифаи статикӣ равона карда мешавад.

Дар саҳифаҳои статикӣ `link` барои нишон додани истинодҳо ба версияҳои гуногуни забони ин саҳифа истифода баред, масалан :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Конфигуратсияи Маҳаллии nginx

Файли конфигуратсияи `.i18n/htm/main.yml` ро дар лоиҳаи намоишӣ ҳамчун мисол гиред

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

Лутфан аввал арзиши `host:` -ро дар боло ба номи домени худ тағир диҳед, масалан `xxx.com` .

Сипас, `i18n.site -n` , саҳифаи статикӣ дар феҳристи `out/main/htm` тавлид мешавад.

Албатта, шумо инчунин метавонед файлҳои конфигуратсияи дигарро фаъол созед, масалан, аввал бо истинод ба конфигуратсияи `main` барои сохтани `.i18n/htm/dist.package.json` ва `.i18n/htm/dist.yml` .

Сипас `i18n.site -n -c dist` иҷро кунед, то саҳифаи статикӣ ба `out/dist/htm` тавлид шавад.

`nginx` метавон бо истинод ба конфигуратсияи зер танзим кард.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Скриптҳои коргари серверро барои муддати тӯлонӣ кэш накунед
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Барои дигар захираҳои статикӣ вақти дарозтари кэш таъин кунед
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Муқаррар кунед, ки кадом файли статикиро браузер ҳамчун вуруди саҳифаи асосӣ истифода мебарад
location = / {
  # Агар $botLang холӣ набошад, ин маънои дастрасии браузер ва масир мувофиқи роҳи муқарраршудаи забонро дорад
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Конфигуратсияи замимаи як саҳифа
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Захираи Объектро Барои Боркунии Файлҳои Статикӣ Танзим Кунед

Файлҳои статикиро метавон ба таври маҳаллӣ тавлид кард, аммо равиши бештар маъмул ин бор кардани онҳо ба нигаҳдории объект мебошад.

`out` дар боло танзимшударо ба :

```
out:
  - s3
```

Пас, `~/.config/i18n.site.yml` ро таҳрир кунед ва конфигуратсияи зеринро илова кунед :

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

Дар конфигуратсия, лутфан `i18n.site` ба арзиши `host:` дар `.i18n/htm/main.yml` иваз кунед, якчанд мағозаҳои объектро дар зери `s3` танзим кардан мумкин аст ва майдони `region` ихтиёрӣ аст (бисёр мағозаҳои объектҳо лозим нест, ки ин майдонро танзим кунанд).

Сипас `i18n.site -n` ро иҷро кунед, то лоиҳаро дубора нашр кунед.

Агар шумо `~/.config/i18n.site.yml` тағир дода бошед ва мехоҳед дубора бор кунед, лутфан фармони зеринро дар директорияи решавӣ лоиҳа барои тоза кардани кэши боргузорӣ истифода баред :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Конфигуратсияи cloudflare

Номи домен дар [cloudflare](//www.cloudflare.com)

### Қоидаҳои Табдил

Қоидаҳои табдилро тавре, ки дар зер нишон дода шудааст, илова кунед:

![](//p.3ti.site/1725436822.avif)

Рамзи қоида чунин аст, лутфан рамзи "i18n.site" -ро ба номи домени худ тағир диҳед:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Қоидаҳои Кэш

Қоидаҳои кэшро ба таври зерин илова кунед:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Қоидаҳои Масир

Қоидаҳои масирро ба таври зерин муқаррар кунед, лутфан рамзи "i18n.site" -ро ба номи домени худ тағир диҳед

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

`URL redirect` Бозгашти динамикӣ-ро интихоб кунед, лутфан `/en` дар роҳи масир `concat("/en",http.request.uri.path,".htm")` ба забони пешфарз, ки мехоҳед муҳаррикҳои ҷустуҷӯ дохил кунанд, тағир диҳед.

## Конфигуратсияи Абрии Интеллектуалии Baidu

Агар ба шумо лозим ояд, ки ба материкии Чин хидмат пешниҳод кунед, шумо метавонед [Baidu Smart Cloud -ро](//cloud.baidu.com) истифода баред.

Маълумот ба Baidu Object Storage бор карда мешавад ва ба Шабакаи Distribution Content Baidu пайваст карда мешавад.

Пас скриптро дар [хидмати EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) ба таври зерин созед

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
  // Сарлавҳаҳои посухро метавон барои ислоҳи баромади худ танзим кард, масалан out.XXX = 'MSG';
})
```

`Debug` клик кунед ва баъд дар тамоми шабака Нашр кардан-ро пахш кунед.

![](//p.3ti.site/1725437754.avif)

## Истифодаи Пешрафта: Трафикро Дар Асоси Қарори Минтақавӣ Тақсим Кунед

Агар шумо хоҳед, ки дар материкии Чин хидмат пешниҳод кунед ва инчунин `cloudflare` трафики байналмилалии ройгон дошта бошед, шумо метавонед `DNS` бо ҳалли минтақавӣ истифода баред.

Масалан, [Huawei DNS](https://www.huaweicloud.com) таҳлили минтақавии ройгонро пешкаш мекунад, ки тавассути он трафики материкии Чин тавассути Baidu Smart Cloud ва трафики байналмилалӣ метавонад аз `cloudflare` гузарад.

Дар конфигуратсияи `cloudflare` домҳои зиёде мавҷуданд. Дар ин ҷо чанд нуктаро бояд қайд кард :

### Номи Домен Дар Дигар `DNS` Ҷойгир Карда Шудааст, Чӣ Тавр Истифода Бурдани `cloudflare`

Аввал номи домени ихтиёриро ба `cloudflare` пайваст кунед ва сипас `SSL/TLS` → номи домени фармоиширо барои пайваст кардани номи домени асосӣ ба ин номи домен истифода баред.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Тавассути Номи Домени Фармоишӣ Дастрас Шудан Мумкин Нест

Азбаски ба нигаҳдории объекти `cloudflare` `R2` бо номи домени фармоишӣ дастрас шуда наметавонад, барои ҷойгиркунии файлҳои статикӣ захираи объекти тарафи сеюм бояд истифода шавад.

Дар ин ҷо мо мисол мегирем [backblaze.com](https://www.backblaze.com) то нишон диҳем, ки объектҳои тарафи сеюмро дар `cloudflare` нигоҳ доштан мумкин аст.

Дар `backblaze.com` сатил эҷод кунед, ягон файлро бор кунед, барои дидани файл клик кунед ва номи домени `Friendly URL` ро гиред, ки дар ин ҷо `f003.backblazeb2.com` аст.

![](//p.3ti.site/1725440783.avif)

Номи доменро аз `CNAME` ба `f003.backblazeb2.com` дар `cloudflare` иваз кунед ва проксиро фаъол созед.

![](//p.3ti.site/1725440896.avif)

Тағир додани `cloudflare` аз `SSL` → ҳолати рамзгузорӣ, ба `Full` таъин кунед

![](//p.3ti.site/1725438572.avif)

Қоидаи табдилро тавре, ки дар зер нишон дода шудааст, илова кунед, онро аввал гузоред (аввалинтарин афзалияти пасттарин дорад):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` динамикро интихоб кунед ва `your_bucketname` дар `concat("/file/your_bucketname",http.request.uri.path)` ба номи сатилатон тағир диҳед.

Илова бар ин, дар қоидаи табдили `cloudflare` дар боло, `index.html` ба `file/your_bucketname/index.html` иваз карда мешавад ва конфигуратсияҳои дигар ҳамоно боқӣ мемонанд.

![](//p.3ti.site/1725441384.avif)