# Search Engine Optimization (Seo)

## Принцип

`i18n.site` жаңыланбаган бир бет архитектурасын кабыл алат, издөө индексациясын жеңилдетүү үчүн, жөрмөлөгүчтөр үчүн өзүнчө статикалык барак жана `sitemap.xml` түзүлөт.

Кирүү суроо-талабынын `User-Agent` издегич жөрмөлөгүч тарабынан колдонулганда, сурам `302` аркылуу статикалык бетке багытталат.

Статикалык барактарда бул барактын ар кандай тил версияларына шилтемелерди көрсөтүү үчүн `link` колдонуңуз, мисалы :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Жергиликтүү nginx Конфигурациясы

Мисал катары демо долбоордогу `.i18n/htm/main.yml` конфигурация файлын алалы

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

Сураныч, алгач жогорудагы `host:` маанисин домен атыңызга өзгөртүңүз, мисалы `xxx.com` .

Андан кийин, `i18n.site -n` , статикалык барак `out/main/htm` каталогунда түзүлөт.

Албетте, сиз дагы башка конфигурация файлдарын иштете аласыз, мисалы, адегенде `.i18n/htm/dist.package.json` жана `.i18n/htm/dist.yml` түзүү үчүн `main` конфигурациясына шилтеме кылуу.

Андан кийин статикалык барак `out/dist/htm` түзүлө тургандай кылып `i18n.site -n -c dist` иштетиңиз.

`nginx` төмөнкү конфигурацияга шилтеме жасоо менен коюлушу мүмкүн.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Сервер жумушчу скрипттерин өтө узак убакытка кэштебеңиз
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Башка статикалык ресурстар үчүн көбүрөөк кэш убакыттарын коюңуз
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Кайсы статикалык файлды жөрмөлөгүч башкы бетке киргизүү катары колдоноорун коюңуз
location = / {
  # Эгерде $botLang бош эмес болсо, бул белгиленген тил жолуна ылайык жөрмөлөгүч кирүү жана кайра багыттоо дегенди билдирет
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Бир беттик колдонмо конфигурациясы
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Статикалык Файлдарды Жүктөө Үчүн Объект Сактагычын Конфигурациялаңыз

Статикалык файлдар локалдык түрдө түзүлүшү мүмкүн, бирок кеңири таралган ыкма аларды объект сактагычка жүктөө.

Жогоруда конфигурацияланган `out` өзгөртүңүз :

```
out:
  - s3
```

Андан кийин, `~/.config/i18n.site.yml` түзөтүңүз жана төмөнкү конфигурацияны кошуңуз :

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

Конфигурацияда `i18n.site` `host:` `.i18n/htm/main.yml` маанисине өзгөртүңүз, бир нече объект дүкөндөрү `s3` астында конфигурацияланса болот, ал эми `region` талаасы милдеттүү эмес (көп объект дүкөндөрүндө бул талааны коюунун кереги жок).

Андан кийин долбоорду кайра жарыялоо үчүн `i18n.site -n` иштетиңиз.

Эгер сиз `~/.config/i18n.site.yml` өзгөрткөн болсоңуз жана кайра жүктөөнү кааласаңыз, жүктөө кэшин тазалоо үчүн долбоордун түпкү каталогунда төмөнкү буйрукту колдонуңуз :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Конфигурациясы

Домен аты жайгаштырылган [cloudflare](//www.cloudflare.com)

### Конверсия Эрежелери

Төмөндө көрсөтүлгөндөй конверсия эрежелерин кошуңуз:

![](//p.3ti.site/1725436822.avif)

Эреже коду төмөндөгүдөй, "i18n.site" кодун домен атыңызга өзгөртүңүз:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Кэштөө Эрежелери

Төмөнкүдөй кэш эрежелерин кошуу:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Багыттоо Эрежелери

Багыттоо эрежелерин төмөнкүдөй орнотуңуз, "i18n.site" кодун домен атыңызга өзгөртүңүз

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

`URL redirect` Динамикалык кайра багыттоону тандаңыз, сураныч, `concat("/en",http.request.uri.path,".htm")` багыттоо жолундагы `/en` издөө системалары камтыган демейки тилге өзгөртүңүз.

## Baidu Intelligent Cloud Configuration

Эгер сиз материктик Кытайга кызмат көрсөтүү керек болсо, анда [Baidu Smart Cloud](//cloud.baidu.com) колдоно аласыз.

Берилиштер Baidu объект сактагычына жүктөлүп, Baidu Content Distribution Network менен байланышкан.

Андан кийин скриптти [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) кылып түзүңүз

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
  // Жооптун аталыштарын мүчүлүштүктөрдү оңдоого коюуга болот, мисалы out.XXX = 'MSG';
})
```

`Debug` чыкылдатып, андан кийин бүт тармакка жарыялоону басыңыз.

![](//p.3ti.site/1725437754.avif)

## Өркүндөтүлгөн Колдонуу: Аймактык Токтомдун Негизинде Трафикти Бөлүштүрүңүз

Эгер сиз материктик Кытайда кызмат көрсөтүүнү кааласаңыз жана ошондой эле `cloudflare` акысыз эл аралык трафикти кааласаңыз, анда аймактык чечим менен `DNS` колдоно аласыз.

Мисалы, [Huawei DNS](https://www.huaweicloud.com) акысыз аймактык анализди камсыз кылат, анын жардамы менен материктик кытай трафики Baidu Smart Cloud аркылуу, ал эми эл аралык трафик `cloudflare` аркылуу өтүшү мүмкүн.

`cloudflare` конфигурациясында көптөгөн тузактар бар. Бул жерде көңүл бура турган бир нече жагдайлар бар :

### Домен Аты Башка `DNS` Жайгаштырылган, `cloudflare` Кантип Колдонуу Керек

Адегенде ыктыярдуу домен атын `cloudflare` менен байланыштырыңыз, андан кийин `SSL/TLS` → ыңгайлаштырылган домендик аталышты бул домендик аталышка негизги домендик аталыш менен байланыштырыңыз.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ыңгайлаштырылган Домен Аты Аркылуу Кирүү Мүмкүн Эмес

`cloudflare` объект сактагычына `R2` ылайыкташтырылган домен аты менен кирүү мүмкүн болбогондуктан, статикалык файлдарды жайгаштыруу үчүн үчүнчү тараптын объект сактагычын колдонуу керек.

[backblaze.com](https://www.backblaze.com) жерде биз `cloudflare` сактала турган үчүнчү тараптын объекттерин кантип байланыштырууну көрсөтүү үчүн мисал келтиребиз.

`backblaze.com` боюнча чака түзүңүз, каалаган файлды жүктөңүз, файлды карап чыгуу үчүн чыкылдатыңыз жана бул жерде `f003.backblazeb2.com` болгон `Friendly URL` домен атын алыңыз.

![](//p.3ti.site/1725440783.avif)

Домендик аталышты `cloudflare` `CNAME` `f003.backblazeb2.com` өзгөртүп, проксиди иштетиңиз.

![](//p.3ti.site/1725440896.avif)

`SSL` ичинен `cloudflare` → шифрлөө режимин өзгөртүү, `Full` коюу

![](//p.3ti.site/1725438572.avif)

Төмөндө көрсөтүлгөндөй конверсия эрежесин кошуңуз, аны биринчи орунга коюңуз (биринчи эң төмөнкү артыкчылыкка ээ):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` динамикалык тандаңыз жана чакаңыздын атына `concat("/file/your_bucketname",http.request.uri.path)` `your_bucketname` өзгөртүңүз.

Мындан тышкары, жогорудагы `cloudflare` өзгөртүү эрежесинде `index.html` `file/your_bucketname/index.html` өзгөртүлүп, башка конфигурациялар ошол эле бойдон калат.

![](//p.3ti.site/1725441384.avif)