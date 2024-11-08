# Оптимизација Претраживача (Сео)

## Принцип

`i18n.site` усваја архитектуру једне странице без освежавања Да би се олакшало индексирање претраге, биће генерисана посебна статичка страница и `sitemap.xml` за пописиваче.

Када претраживач претраживача користи `User-Agent` захтева за приступ, захтев ће бити преусмерен на статичку страницу преко `302` .

На статичним страницама, користите `link` да бисте означили везе ка различитим језичким верзијама ове странице, као што је :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Локална Нгинк Конфигурација

Узмите конфигурациону датотеку `.i18n/htm/main.yml` у демо пројекту као пример

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

Прво измените вредност `host:` изнад у име вашег домена, као што је `xxx.com` .

Затим, `i18n.site -n` , статичка страница ће бити генерисана у директоријуму `out/main/htm` .

Наравно, можете омогућити и друге конфигурационе датотеке, као што је прво позивање на конфигурацију `main` да бисте креирали `.i18n/htm/dist.package.json` и `.i18n/htm/dist.yml` .

Затим покрените `i18n.site -n -c dist` тако да ће статичка страница бити генерисана на `out/dist/htm` .

`nginx` се може подесити позивањем на конфигурацију испод.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Немојте предуго кеширати скрипте радника сервера
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Подесите дуже време кеширања за друге статичке ресурсе
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Подесите коју статичку датотеку пописивач користи као унос почетне странице
location = / {
  # Ако $botLang није празан, то значи приступ пописивачу и преусмеравање према подешеној путањи језика
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Конфигурација апликације на једној страници
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Конфигуришите Складиште Објеката За Отпремање Статичких Датотека

Статичке датотеке се могу генерисати локално, али чешћи приступ је њихово отпремање у складиште објеката.

Измените `out` конфигурисану изнад у :

```
out:
  - s3
```

Затим измените `~/.config/i18n.site.yml` и додајте следећу конфигурацију :

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

У конфигурацији, промените `i18n.site` у вредност `host:` у `.i18n/htm/main.yml` , више складишта објеката се може конфигурисати под `s3` , а поље `region` је опционо (многа складишта објеката не морају да постављају ово поље).

Затим покрените `i18n.site -n` да бисте поново објавили пројекат.

Ако сте изменили `~/.config/i18n.site.yml` и желите да поново отпремите, користите следећу команду у основном директоријуму пројекта да обришете кеш за отпремање :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Цлоудфларе Конфигурација

Име домена хостовано на [cloudflare](//www.cloudflare.com)

### Правила Конверзије

Додајте правила конверзије као што је приказано у наставку:

![](//p.3ti.site/1725436822.avif)

Код правила је следећи, измените код „и18н.сите“ у име вашег домена:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Правила Кеширања

Додајте правила кеша на следећи начин:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Правила Преусмеравања

Поставите правила преусмеравања на следећи начин, измените код „и18н.сите“ у име вашег домена

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

`URL redirect` Изаберите динамичко преусмеравање, модификујте `/en` у путањи преусмеравања `concat("/en",http.request.uri.path,".htm")` на подразумевани језик који желите да претраживачи укључе.

## Баиду Интеллигент Цлоуд Цонфигуратион

Ако треба да пружате услуге континенталној Кини, можете да користите [Баиду Смарт Цлоуд](//cloud.baidu.com) .

Подаци се отпремају у Баиду Објецт Стораге и везују за Баиду мрежу за дистрибуцију садржаја.

Затим креирајте скрипту у [услузи EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) на следећи начин

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
  // Заглавља одговора се могу подесити на излаз за отклањање грешака, као што је оут.КСКСКС = 'МСГ';
})
```

Кликните на `Debug` , а затим кликните на Објави на целој мрежи.

![](//p.3ti.site/1725437754.avif)

## Напредна Употреба: Дистрибуирајте Саобраћај На Основу Регионалне Резолуције

Ако желите да пружате услуге у континенталној Кини и такође желите `cloudflare` бесплатног међународног саобраћаја, можете користити `DNS` са регионалном резолуцијом.

На пример, [Хуавеи DNS](https://www.huaweicloud.com) пружа бесплатну регионалну анализу, са којом саобраћај у континенталној Кини може да иде преко Баиду Смарт Цлоуд-а, а међународни саобраћај може да иде кроз `cloudflare` .

Постоји много замки у конфигурацији `cloudflare` Ево неколико тачака које треба приметити :

### Име Домена Се Налази У Другом `DNS` , Како Се Користи `cloudflare`

Прво повежите произвољно име домена на `cloudflare` , а затим користите `SSL/TLS` → прилагођено име домена да повежете име главног домена са овим именом домена.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Се Не Може Приступити Преко Прилагођеног Имена Домена

Пошто се `cloudflare` складишту објеката `R2` не може приступити преко прилагођеног имена домена, потребно је користити складиште објеката треће стране за постављање статичких датотека.

Овде `cloudflare` [backblaze.com](https://www.backblaze.com)

Направите корпу на `backblaze.com` , отпремите било коју датотеку, кликните да бисте је прегледали и добијте име домена `Friendly URL` , што је овде `f003.backblazeb2.com` .

![](//p.3ti.site/1725440783.avif)

Промените име домена са `CNAME` на `f003.backblazeb2.com` на `cloudflare` и омогућите прокси.

![](//p.3ti.site/1725440896.avif)

Измените `cloudflare` од `SSL` → режим шифровања, поставите на `Full`

![](//p.3ti.site/1725438572.avif)

Додајте правило конверзије као што је приказано испод, ставите га на прво место (прво има најнижи приоритет):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` изаберите динамички и модификујте `your_bucketname` у `concat("/file/your_bucketname",http.request.uri.path)` у назив вашег сегмента.

Поред тога, у горњем правилу конверзије `cloudflare` , `index.html` се мења у `file/your_bucketname/index.html` , а остале конфигурације остају исте.

![](//p.3ti.site/1725441384.avif)