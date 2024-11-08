# Іздеу Жүйесін Оңтайландыру (Seo)

## Принципі

`i18n.site` жаңармайтын бір бет архитектурасын қабылдайды. Іздеу индексін жеңілдету үшін тексеріп шығушылар тексеріп шығу үшін бөлек статикалық бет және `sitemap.xml` жасалады.

Рұқсат сұрауының `User-Agent` іздеу жүйесінің тексеріп шығушысы пайдаланған кезде, сұрау `302` арқылы тұрақты бетке қайта бағытталады.

Статикалық беттерде осы беттің әртүрлі тіл нұсқаларына сілтемелерді көрсету үшін `link` пайдаланыңыз, мысалы :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Жергілікті nginx Конфигурациясы

Мысал ретінде демонстрациялық жобадағы `.i18n/htm/main.yml` конфигурация файлын алыңыз

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

Алдымен жоғарыдағы `host:` мәнін `xxx.com` сияқты домендік атыңызға өзгертіңіз.

Содан кейін, `i18n.site -n` , статикалық бет `out/main/htm` каталогында жасалады.

Әрине, `.i18n/htm/dist.package.json` және `.i18n/htm/dist.yml` жасау үшін алдымен `main` конфигурациясына сілтеме жасау сияқты басқа конфигурация файлдарын қосуға болады.

Содан кейін статикалық бет `out/dist/htm` ге құрылатындай етіп `i18n.site -n -c dist` іске қосыңыз.

`nginx` төмендегі конфигурацияға сілтеме жасау арқылы орнатуға болады.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Сервер жұмысшы сценарийлерін тым ұзақ кэштемеңіз
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Басқа статикалық ресурстар үшін ұзағырақ кэш уақыттарын орнатыңыз
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Тексеріп шығушы негізгі бет жазбасы ретінде қандай статикалық файлды пайдаланатынын орнатыңыз
location = / {
  # Егер $botLang бос болмаса, ол орнатылған тіл жолына сәйкес тексеріп шығу құралына қол жеткізуді және қайта бағыттауды білдіреді
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Бір бет қолданбасының конфигурациясы
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Статикалық Файлдарды Жүктеп Салу Үшін Нысан Жадын Теңшеңіз

Статикалық файлдарды жергілікті түрде жасауға болады, бірақ неғұрлым кең тараған тәсіл оларды нысан қоймасына жүктеп салу болып табылады.

Жоғарыда конфигурацияланған `out` өзгертіңіз :

```
out:
  - s3
```

Содан кейін `~/.config/i18n.site.yml` өңдеңіз және келесі конфигурацияны қосыңыз :

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

Конфигурацияда `i18n.site` `host:` in `.i18n/htm/main.yml` мәніне өзгертіңіз, бірнеше нысан қоймаларын `s3` астында конфигурациялауға болады және `region` өрісі міндетті емес (көптеген нысандар қоймаларында бұл өрісті орнату қажет емес).

Содан кейін жобаны қайта жариялау үшін `i18n.site -n` іске қосыңыз.

`~/.config/i18n.site.yml` өзгерткен болсаңыз және қайта жүктеп салғыңыз келсе, жүктеп салу кэшін тазалау үшін жобаның түбірлік каталогындағы келесі пәрменді пайдаланыңыз :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Конфигурациясы

Домен атауы [cloudflare](//www.cloudflare.com)

### Түрлендіру Ережелері

Төменде көрсетілгендей түрлендіру ережелерін қосыңыз:

![](//p.3ti.site/1725436822.avif)

Ереже коды келесідей, "i18n.site" кодын домен атыңызға өзгертіңіз:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Кэштеу Ережелері

Кэш ережелерін келесідей қосыңыз:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Қайта Бағыттау Ережелері

Қайта бағыттау ережелерін келесідей орнатыңыз, домендік атыңызға "i18n.site" кодын өзгертіңіз.

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

`URL redirect` Динамикалық қайта бағыттауды таңдаңыз, `concat("/en",http.request.uri.path,".htm")` қайта бағыттау жолындағы `/en` іздеу жүйелері қосқыңыз келетін әдепкі тілге өзгертіңіз.

## Baidu Интеллектуалды Бұлтты Конфигурациясы

Материктік Қытайға қызмет көрсету қажет болса, [Baidu Smart Cloud](//cloud.baidu.com) қолданбасын пайдалануға болады.

Деректер Baidu нысан қоймасына жүктеп салынған және Baidu мазмұнды тарату желісіне байланыстырылған.

Содан кейін келесідей [EdgeJS қызметінде](//console.bce.baidu.com/cdn/#/cdn/ejs/list) сценарий жасаңыз

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
  // Жауап тақырыптарын шығысты түзету үшін орнатуға болады, мысалы out.XXX = 'MSG';
})
```

`Debug` түймесін басыңыз, содан кейін бүкіл желіге жариялау түймесін басыңыз.

![](//p.3ti.site/1725437754.avif)

## Жетілдірілген Пайдалану: Аймақтық Рұқсат Негізінде Трафикті Таратыңыз

Материктік Қытайда қызметтерді ұсынғыңыз келсе және сонымен қатар `cloudflare` тегін халықаралық трафикті қаласаңыз, аймақтық ажыратымдылығы бар `DNS` пайдалана аласыз.

Мысалы, [Huawei DNS](https://www.huaweicloud.com) тегін аймақтық талдауды қамтамасыз етеді, оның көмегімен материктік қытайлық трафик Baidu Smart Cloud арқылы, ал халықаралық трафик `cloudflare` арқылы өтуі мүмкін.

`cloudflare` конфигурациясында көптеген қателер бар. Мұнда ескеру қажет бірнеше тармақ бар :

### Домен Атауы Басқа `DNS` -Де Орналастырылған, `cloudflare` Қалай Пайдалану Керек

Алдымен ерікті домен атауын `cloudflare` мәніне байланыстырыңыз, содан кейін негізгі домен атауын осы домендік атаумен байланыстыру үшін `SSL/TLS` → теңшелетін домен атауын пайдаланыңыз.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ге Теңшелетін Домен Атауы Арқылы Қол Жеткізу Мүмкін Емес

`cloudflare` нысан сақтау орны `R2` теңшелген домен аты арқылы қол жеткізу мүмкін болмағандықтан, статикалық файлдарды орналастыру үшін үшінші тарап нысан қоймасын пайдалану қажет.

[backblaze.com](https://www.backblaze.com) біз `cloudflare` -де сақталатын үшінші тарап нысандарын қалай байланыстыру керектігін көрсету үшін мысал ретінде аламыз.

`backblaze.com` нүктесінде шелек жасаңыз, кез келген файлды жүктеп салыңыз, файлды шолу үшін басыңыз және осы жерден `f003.backblazeb2.com` болатын `Friendly URL` домен атауын алыңыз.

![](//p.3ti.site/1725440783.avif)

Домен атауын `cloudflare` -де `CNAME` ден `f003.backblazeb2.com` ге өзгертіңіз және проксиді қосыңыз.

![](//p.3ti.site/1725440896.avif)

`cloudflare` → `SSL` режимін өзгертіңіз, `Full` мәніне орнатыңыз

![](//p.3ti.site/1725438572.avif)

Төменде көрсетілгендей түрлендіру ережесін қосыңыз, оны бірінші орынға қойыңыз (біріншісі ең төменгі басымдыққа ие):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` динамикалық параметрін таңдап, шелек атауына `your_bucketname` -ні `concat("/file/your_bucketname",http.request.uri.path)` өзгертіңіз.

Бұған қоса, жоғарыдағы `cloudflare` түрлендіру ережесінде `index.html` `file/your_bucketname/index.html` мәніне өзгертіліп, басқа конфигурациялар өзгеріссіз қалады.

![](//p.3ti.site/1725441384.avif)