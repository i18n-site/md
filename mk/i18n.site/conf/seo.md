# Оптимизација На Пребарувачот (Seo)

## Принцип

`i18n.site` усвојува архитектура на една страница без освежување Со цел да се олесни индексирањето на пребарувањето, ќе се генерираат посебна статична страница и `sitemap.xml` за индексирање на роботите.

Кога `User-Agent` од барањето за пристап се користи од пребарувачот на пребарувачот, барањето ќе биде пренасочено на статичната страница преку `302` .

На статичните страници, користете `link` за да означите врски до различни јазични верзии на оваа страница, како на :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Локална nginx Конфигурација

Земете ја конфигурациската датотека `.i18n/htm/main.yml` во демо-проектот како пример

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

Ве молиме прво изменете ја вредноста од `host:` погоре во името на вашиот домен, како на пример `xxx.com` .

Потоа, `i18n.site -n` , статичната страница ќе се генерира во директориумот `out/main/htm` .

Се разбира, можете да овозможите и други конфигурациски датотеки, како на пример прво да се повикате на конфигурацијата на `main` за да креирате `.i18n/htm/dist.package.json` и `.i18n/htm/dist.yml` .

Потоа извршете `i18n.site -n -c dist` , така што статичната страница ќе се генерира на `out/dist/htm` .

`nginx` може да се постави со повикување на конфигурацијата подолу.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Не ги кеширате скриптите на работникот на серверот предолго
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Поставете подолго време за кеширање за други статични ресурси
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Поставете која статичка датотека ја користи роботот како запис на почетната страница
location = / {
  # Ако $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Конфигурација на апликација за една страница
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Конфигурирајте Складирање На Објекти За Поставување Статични Датотеки

Статичните датотеки може да се генерираат локално, но почест пристап е да се прикачат во складирање на објекти.

Изменете `out` конфигурираната погоре во :

```
out:
  - s3
```

Потоа, уредете `~/.config/i18n.site.yml` и додајте ја следната конфигурација :

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

Во конфигурацијата, ве молиме сменете го `i18n.site` на вредноста `host:` во `.i18n/htm/main.yml` , повеќе складишта на објекти може да се конфигурираат под `s3` , а полето `region` е изборно (многу складишта на објекти не треба да го поставуваат ова поле).

Потоа извршете `i18n.site -n` за повторно да го објавите проектот.

Ако сте го измениле `~/.config/i18n.site.yml` и сакате повторно да испратите, ве молиме користете ја следнава команда во root директориумот на проектот за да го исчистите кешот за прикачување :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Конфигурација

Доменот е хостиран на [cloudflare](//www.cloudflare.com)

### Правила За Конверзија

Додадете ги правилата за конверзија како што е прикажано подолу:

![](//p.3ti.site/1725436822.avif)

Кодот на правилото е како што следува, модифицирајте го кодот „i18n.site“ во името на вашиот домен:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Правила За Кеширање

Додадете правила за кеш на следниов начин:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Правила За Пренасочување

Поставете ги правилата за пренасочување на следниов начин, модифицирајте го кодот „i18n.site“ на вашето име на домен

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

`URL redirect` Изберете динамично пренасочување, изменете го `/en` во патеката за пренасочување `concat("/en",http.request.uri.path,".htm")` до стандардниот јазик што сакате да го вклучат пребарувачите.

## Интелигентна Конфигурација На Облак На Baidu

Ако треба да обезбедите услуги за континентална Кина, можете да го користите [Baidu Smart Cloud](//cloud.baidu.com) .

Податоците се прикачуваат на Baidu Object Storage и се врзуваат за Baidu Content Distribution Network.

Потоа креирајте ја скриптата во [EdgeJS раб](//console.bce.baidu.com/cdn/#/cdn/ejs/list) на следниов начин

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
  // Заглавјата на одговорот може да се постават на излез за отстранување грешки, како што е надвор.XXX = 'MSG';
})
```

Кликнете `Debug` , потоа кликнете Објави на целата мрежа.

![](//p.3ti.site/1725437754.avif)

## Напредно Користење: Дистрибуирајте Го Сообраќајот Врз Основа На Регионалната Резолуција

Ако сакате да давате услуги во континентална Кина, а исто така сакате `cloudflare` бесплатен меѓународен сообраќај, можете да користите `DNS` со регионална резолуција.

На пример, [Huawei DNS](https://www.huaweicloud.com) обезбедува бесплатна регионална анализа, со која сообраќајот на копното на Кина може да оди преку Baidu Smart Cloud, а меѓународниот сообраќај може да оди преку `cloudflare` .

Има многу стапици во конфигурацијата на `cloudflare` Еве неколку точки што треба да се забележат :

### Името На Доменот Е Хостирано Во Други `DNS` , Како Да Се Користи `cloudflare`

Прво поврзете произволно име на домен на `cloudflare` , а потоа користете `SSL/TLS` → прилагодено име на домен за да го поврзете главното име на доменот со ова име на домен.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Не Може Да Се Пристапи Преку Приспособено Име На Домен

Бидејќи до `cloudflare` складирање на објекти `R2` не може да се пристапи со приспособено име на домен, треба да се користи складиште на објекти од трета страна за поставување статични датотеки.

Овде [backblaze.com](https://www.backblaze.com) земаме како пример за да демонстрираме како да ги врзуваме објектите од трети страни што треба да се складираат на `cloudflare` .

Направете кофа на `backblaze.com` , поставете која било датотека, кликнете за да ја прелистате датотеката и добијте го името на доменот `Friendly URL` , што е `f003.backblazeb2.com` овде.

![](//p.3ti.site/1725440783.avif)

Променете го името на доменот од `CNAME` на `f003.backblazeb2.com` на `cloudflare` и овозможете го проксито.

![](//p.3ti.site/1725440896.avif)

Измени `cloudflare` од `SSL` → режим на шифрирање, поставете го на `Full`

![](//p.3ti.site/1725438572.avif)

Додадете го правилото за конверзија како што е прикажано подолу, ставете го на прво место (првиот има најмал приоритет):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` изберете динамична и изменете `your_bucketname` во `concat("/file/your_bucketname",http.request.uri.path)` во името на вашата корпа.

Покрај тоа, во правилото за конверзија `cloudflare` погоре, `index.html` се менува во `file/your_bucketname/index.html` , а другите конфигурации остануваат исти.

![](//p.3ti.site/1725441384.avif)