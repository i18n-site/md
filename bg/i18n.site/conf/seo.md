# Оптимизация За Търсачки (Seo)

## Принцип

`i18n.site` приема архитектура на една страница без опресняване, за да се улесни индексирането на търсенето, ще бъдат генерирани отделна статична страница и `sitemap.xml` за обхождане от роботите.

Когато `User-Agent` на заявката за достъп се използва от робота на търсачката, заявката ще бъде пренасочена към статичната страница чрез `302` .

На статични страници използвайте `link` за да посочите връзки към различни езикови версии на тази страница, като :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Локална Конфигурация На nginx

Вземете за пример конфигурационния файл `.i18n/htm/main.yml` в демонстрационния проект

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

Моля, първо променете стойността на `host:` по-горе за името на вашия домейн, като например `xxx.com` .

След това, `i18n.site -n` , статичната страница ще бъде генерирана в `out/main/htm` директория.

Разбира се, можете също да активирате други конфигурационни файлове, като например първо да препратите към конфигурацията на `main` за да създадете `.i18n/htm/dist.package.json` и `.i18n/htm/dist.yml` .

След това стартирайте `i18n.site -n -c dist` , така че статичната страница да бъде генерирана до `out/dist/htm` .

`nginx` може да бъде зададено, като се обърнете към конфигурацията по-долу.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Не кеширайте сървърните работни скриптове твърде дълго
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Задайте по-дълги времена за кеширане за други статични ресурси
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Задайте кой статичен файл роботът да използва като запис на началната страница
location = / {
  # Ако $botLang не е празно, това означава достъп за обхождане и пренасочване според зададения езиков път
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Конфигурация на едностранично приложение
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Конфигурирайте Обектно Съхранение За Качване На Статични Файлове

Статичните файлове могат да се генерират локално, но по-често срещаният подход е да се качат в обектно хранилище.

Променете `out` конфигуриран по-горе, на :

```
out:
  - s3
```

След това редактирайте `~/.config/i18n.site.yml` и добавете следната конфигурация :

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

В конфигурацията, моля, променете `i18n.site` на стойността `host:` в `.i18n/htm/main.yml` , няколко хранилища на обекти могат да бъдат конфигурирани под `s3` , а полето `region` не е задължително (много хранилища на обекти не е необходимо да задават това поле).

След това стартирайте `i18n.site -n` , за да публикувате отново проекта.

Ако сте променили `~/.config/i18n.site.yml` и искате да качите отново, моля, използвайте следната команда в главната директория на проекта, за да изчистите кеша за качване :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Конфигурация На cloudflare

Име на домейн, хоствано на [cloudflare](//www.cloudflare.com)

### Правила За Преобразуване

Добавете правилата за преобразуване, както е показано по-долу:

![](//p.3ti.site/1725436822.avif)

Кодът на правилото е както следва, моля, променете кода „i18n.site“ към името на вашия домейн:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Правила За Кеширане

Добавете правила за кеширане, както следва:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Правила За Пренасочване

Задайте правилата за пренасочване, както следва, моля, променете кода „i18n.site“ към името на вашия домейн

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

`URL redirect` Изберете динамично пренасочване, моля, променете `/en` в пътя за пренасочване `concat("/en",http.request.uri.path,".htm")` до езика по подразбиране, който искате да включват търсачките.

## Интелигентна Облачна Конфигурация На Baidu

Ако трябва да предоставите услуги на континентален Китай, можете да използвате [Baidu Smart Cloud](//cloud.baidu.com) .

Данните се качват в Baidu Object Storage и се свързват към Baidu Content Distribution Network.

След това създайте скрипта в [услугата EdgeJS edge](//console.bce.baidu.com/cdn/#/cdn/ejs/list) , както следва

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
  // Заглавките на отговорите могат да бъдат настроени за изход за отстраняване на грешки, като out.XXX = 'MSG';
})
```

Щракнете върху `Debug` , след което щракнете върху Публикуване в цялата мрежа.

![](//p.3ti.site/1725437754.avif)

## Разширено Използване: Разпределете Трафика Въз Основа На Регионална Резолюция

Ако искате да предоставяте услуги в континентален Китай и също така искате `cloudflare` безплатен международен трафик, можете да използвате `DNS` с регионална резолюция.

Например [Huawei Cloud DNS](https://www.huaweicloud.com) предоставя безплатен регионален анализ, с който трафикът от континентален Китай може да преминава през Baidu Smart Cloud, а международният трафик може да преминава през `cloudflare` .

Има много клопки в конфигурацията на `cloudflare` Ето няколко точки, които трябва да отбележите :

### Името На Домейна Се Хоства В Други `DNS` , Как Да Използвате `cloudflare`

Първо обвържете произволно име на домейн с `cloudflare` и след това използвайте `SSL/TLS` → потребителско име на домейн, за да свържете основното име на домейн с това име на домейн.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Не Може Да Бъде Достъпен Чрез Потребителско Име На Домейн

Тъй като `cloudflare` хранилище на обекти `R2` не може да бъде достъпно чрез персонализирано име на домейн, трябва да се използва хранилище на обекти на трета страна за поставяне на статични файлове.

Тук вземаме пример [backblaze.com](https://www.backblaze.com) за да демонстрираме как да обвържем обекти на трети страни, които да се съхраняват на `cloudflare` .

Създайте кофа на `backblaze.com` , качете произволен файл, щракнете, за да прегледате файла, и вземете името на домейна `Friendly URL` , което е `f003.backblazeb2.com` тук.

![](//p.3ti.site/1725440783.avif)

Променете името на домейна от `CNAME` на `f003.backblazeb2.com` на `cloudflare` и активирайте проксито.

![](//p.3ti.site/1725440896.avif)

Промяна на `cloudflare` от `SSL` → режим на криптиране, зададен на `Full`

![](//p.3ti.site/1725438572.avif)

Добавете правилото за преобразуване, както е показано по-долу, поставете го първо (първото е с най-нисък приоритет):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` изберете динамично и променете `your_bucketname` в `concat("/file/your_bucketname",http.request.uri.path)` на името на вашата кофа.

В допълнение, в правилото за преобразуване `cloudflare` по-горе, `index.html` се променя на `file/your_bucketname/index.html` , а другите конфигурации остават същите.

![](//p.3ti.site/1725441384.avif)