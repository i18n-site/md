# Пошукова Оптимізація (SEO)

## Принцип

`i18n.site` використовує односторінкову архітектуру для полегшення індексації пошуковими системами, генеруючи окремі статичні сторінки та `sitemap.xml` для індексування.

Коли запит від сканера пошукової системи ідентифікується через `User-Agent`, запит буде перенаправлений на статичну сторінку за допомогою `302`.

На статичних сторінках використовуйте тег `link` для вказівки посилань на різні мовні версії цієї сторінки, наприклад:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Налаштування об'єктного сховища для завантаження статичних файлів

Статичні файли можуть бути згенеровані локально, але частіше їх завантажують до об'єктного сховища.

Розглянемо файл конфігурації `.i18n/htm/ol.yml` з демонстраційного проекту

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

Спочатку змініть значення `host:` на своє доменне ім'я, наприклад `i18n.site`.

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

У конфігурації змініть `i18n.site` на значення `host:` з `.i18n/htm/ol.yml`, під `s3` можна налаштувати кілька об'єктних сховищ, а поле `region` є необов'язковим (багато об'єктних сховищ не потребують цього поля).

Після цього запустіть `i18n.site -n` для повторного публікування проекту.

Якщо ви змінили `~/.config/i18n.site.yml` і хочете повторно завантажити, скористайтеся наступною командою в кореневій директорії проекту для очищення кешу завантаження:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Конфігурація Cloudflare

Доменне ім'я розміщено на [cloudflare](//www.cloudflare.com).

### Правила перетворення

Додайте правила перетворення, як показано на малюнку:

![](//p.3ti.site/1725436822.avif)

Код правила такий: будь ласка, змініть код "i18n.site" на своє доменне ім'я:

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

Налаштуйте правила перенаправлення наступним чином, змінивши код "i18n.site" на своє доменне ім'я:

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

Виберіть динамічне перенаправлення `URL redirect`, змінивши `/en` у шляху перенаправлення `concat("/en", http.request.uri.path, ".htm")` на мову за умовчанням, яку ви хочете включити до пошукових систем.

## Конфігурація Baidu Smart Cloud

Якщо вам потрібно надавати послуги в материковому Китаї, ви можете використовувати [Baidu Smart Cloud](//cloud.baidu.com).

Дані завантажуються до Baidu Object Storage і прив'язуються до мережі розповсюдження вмісту Baidu.

Потім створіть сценарій у [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) наступним чином:

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

Якщо ви хочете надавати послуги в материковому Китаї та використовувати безкоштовний міжнародний трафік від `cloudflare`, ви можете використовувати `DNS` з регіональним розподілом.

Наприклад, [Huawei Cloud DNS](https://www.huaweicloud.com) надає безкоштовний регіональний аналіз, що дозволяє розподіляти трафік материкового Китаю через Baidu Smart Cloud, а міжнародний трафік через `cloudflare`.

Конфігурація `cloudflare` має багато підводних каменів. Ось кілька моментів, на які варто звернути увагу:

### Якщо доменне ім'я розміщено в іншому `DNS`, як використовувати `cloudflare`?

Спочатку прив’яжіть будь-який домен до `cloudflare`, а потім скористайтеся `SSL/TLS` → "Налаштування для спеціального домену", щоб пов’язати основний домен з цим доменом.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` не можна отримати через власне доменне ім'я

Оскільки до `cloudflare` об'єктного сховища `R2` неможливо отримати доступ за допомогою налаштованого доменного імені, для розміщення статичних файлів необхідно використовувати об'єктне сховище третьої сторони.

Тут ми розглянемо приклад [backblaze.com](https://www.backblaze.com), щоб продемонструвати, як прив'язати об'єктне сховище третьої сторони до `cloudflare`.

Створіть сховище на `backblaze.com`, завантажте будь-який файл, натисніть, щоб переглянути файл, і отримайте доменне ім'я `Friendly URL`, яке тут є `f003.backblazeb2.com`.

![](//p.3ti.site/1725440783.avif)

Змініть доменне ім'я з `CNAME` на `f003.backblazeb2.com` у `cloudflare` і увімкніть проксі.

![](//p.3ti.site/1725440896.avif)

Змінити `cloudflare` із `SSL` → режим шифрування, встановити `Full`

![](//p.3ti.site/1725438572.avif)

Додайте правило перетворення, як показано на малюнку, і поставте його на перше місце (перша позиція має найнижчий пріоритет):

![](//p.3ti.site/1725443232.avif)

Виберіть динамічне перетворення `Rewrite to` і змініть `your_bucketname` у `concat("/file/your_bucketname", http.request.uri.path)` на назву свого відра.

Крім того, у правилі перетворення `cloudflare` змініть `index.html` на `file/your_bucketname/index.html`, а інші налаштування залиште без змін.

![](//p.3ti.site/1725441384.avif)