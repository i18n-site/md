# Пошукова Оптимізація (SEO)

## Принцип

`i18n.site` використовує односторінкову архітектуру, щоб полегшити індексацію пошуковими системами, генеруючи окремі статичні сторінки та `sitemap.xml` для індексування роботами.

Коли запит відвідування відбувається від робота пошукової системи `User-Agent`, запит буде перенаправлений на статичну сторінку через `302`.

На статичних сторінках використовуйте тег `link` для вказівки посилань на різні мовні версії цієї сторінки, наприклад:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Налаштування завантаження статичних файлів у сховище об'єктів

Статичні файли можуть бути створені локально, але частіше їх завантажують до сховища об'єктів.

Розглянемо файл конфігурації `.i18n/htm/ol.yml` у демонстраційному проекті як приклад

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

Спочатку змініть значення `host:` у верхній частині на ваше доменне ім'я, наприклад `i18n.site`.

Потім відредагуйте `~/.config/i18n.site.yml`, додавши наступну конфігурацію:

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

У конфігурації замініть `i18n.site` на значення `host:` з файлу `.i18n/htm/ol.yml`, під `s3` можна налаштувати кілька сховищ об'єктів, а поле `region` є необов'язковим (багато сховищ об'єктів не потребують цього поля).

Потім запустіть `i18n.site -n`, щоб повторно опублікувати проект.

Якщо ви змінили `~/.config/i18n.site.yml` і хочете повторно завантажити, використовуйте наступну команду в кореневій директорії проекту для очищення кешу завантаження:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Конфігурація Cloudflare

Доменне ім'я розміщено на [cloudflare](//www.cloudflare.com).

### Правила перетворення

Додайте правила перетворення, як показано на малюнку:

![](//p.3ti.site/1725436822.avif)

Код правила такий: змініть код "i18n.site" на своє доменне ім'я:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Правила кешування

Додайте правила кешування наступним чином:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Правила перенаправлення

Налаштуйте правила перенаправлення, змінивши код "i18n.site" на своє доменне ім'я

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

Виберіть динамічне перенаправлення `URL redirect`, змініть шлях перенаправлення `concat("/en",http.request.uri.path,".htm")`, замінивши `/en` на мову за умовчанням, яку ви хочете, щоб пошукові системи індексували.

## Конфігурація百度 Smart Cloud

Якщо вам потрібно надавати послуги в материковому Китаї, ви можете використовувати [Baidu Smart Cloud](//cloud.baidu.com).

Дані завантажуються до百度 Object Storage і прив'язуються до мережі розповсюдження контенту百度.

Потім створіть сценарій у [службі EdgeJS edge](//console.bce.baidu.com/cdn/#/cdn/ejs/list) наступним чином:

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

Клацніть `Debug` , а потім натисніть кнопку "Опублікувати для всієї мережі".

![](//p.3ti.site/1725437754.avif)

## Розширене використання: Розподіл трафіку на основі регіонального розподілу

Якщо ви хочете надавати послуги в материковому Китаї та користуватися безкоштовним міжнародним трафіком від `cloudflare`, ви можете скористатися `DNS` з регіональним налаштуванням.

Наприклад, [Huawei Cloud DNS](https://www.huaweicloud.com) надає безкоштовний регіональний аналіз, завдяки якому трафік материкового Китаю може бути направлений через Baidu Smart Cloud, а міжнародний трафік — через `cloudflare`.

Конфігурація `cloudflare` має кілька підводних каменів. Ось кілька моментів, на які варто звернути увагу:

### Як використовувати `cloudflare`, якщо домен розміщений в іншому `DNS`?

Спочатку зв'яжіть будь-яке доменне ім'я з `cloudflare`, а потім за допомогою `SSL/TLS` → налаштування доменного імені пов'яжіть основне доменне ім'я з цим доменним ім'ям.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` не можна доступити через власне доменне ім'я

Оскільки об’єктне сховище `R2` від `cloudflare` не підтримує налаштоване доменне ім’я, для розміщення статичних файлів потрібно використовувати стороннє об’єктне сховище.

Ось приклад з [backblaze.com](https://www.backblaze.com), як прив’язати стороннє об’єктне сховище до `cloudflare`.

Створіть сховище на `backblaze.com`, завантажте будь-який файл, натисніть, щоб переглянути файл, і отримайте доменне ім'я `Friendly URL`, яке тут є `f003.backblazeb2.com`.

![](//p.3ti.site/1725440783.avif)

Переконайтеся, що ваш домен налаштований як `CNAME` на `f003.backblazeb2.com` у `cloudflare` і увімкніть проксі.

![](//p.3ti.site/1725440896.avif)

Змініть `SSL` → режим шифрування в `cloudflare` на `Full`

![](//p.3ti.site/1725438572.avif)

Додайте правило перетворення, як показано на малюнку, і поставте його на перше місце (першому надається найнижчий пріоритет):

![](//p.3ti.site/1725443232.avif)

Виберіть динамічне перенаправлення `Rewrite to` і змініть `your_bucketname` у виразі `concat("/file/your_bucketname",http.request.uri.path)` на назву вашого сховища.

Крім того, у попередніх правилах перетворення `cloudflare` замініть `index.html` на `file/your_bucketname/index.html`, залишивши інші налаштування без змін.

![](//p.3ti.site/1725441384.avif)