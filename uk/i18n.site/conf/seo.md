# Пошукова Оптимізація (Seo)

## Принцип

`i18n.site` використовує односторінкову архітектуру, щоб полегшити пошукову індексацію, буде створено окрему статичну сторінку та `sitemap.xml` для сканування.

Коли сканер пошукової системи використовує `User-Agent` запиту доступу, запит буде перенаправлено на статичну сторінку через `302` .

На статичних сторінках використовуйте `link` щоб позначити посилання на різні мовні версії цієї сторінки, наприклад :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Локальна Конфігурація nginx

Візьмемо для прикладу файл конфігурації `.i18n/htm/main.yml` у демонстраційному проекті

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

Спочатку змініть значення `host:` вище для свого доменного імені, наприклад `xxx.com` .

Тоді, `i18n.site -n` , статична сторінка буде згенерована в каталозі `out/main/htm` .

Звичайно, ви також можете ввімкнути інші файли конфігурації, наприклад, спочатку звернутися до конфігурації `main` , щоб створити `.i18n/htm/dist.package.json` і `.i18n/htm/dist.yml` .

Потім запустіть `i18n.site -n -c dist` , щоб статична сторінка була згенерована до `out/dist/htm` .

`nginx` можна встановити, звернувшись до наведеної нижче конфігурації.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Не кешуйте робочі сценарії сервера надто довго
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Встановіть довший час кешування для інших статичних ресурсів
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Встановіть, який статичний файл використовуватиме сканер як запис домашньої сторінки
location = / {
  # Якщо $botLang не пусте, це означає доступ сканера та перенаправлення відповідно до встановленого мовного шляху
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Конфігурація програми на одній сторінці
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Налаштувати Сховище Об’єктів Для Завантаження Статичних Файлів

Статичні файли можна створити локально, але більш поширеним підходом є завантаження їх у сховище об’єктів.

Змініть налаштований вище `out` на :

```
out:
  - s3
```

Потім відредагуйте `~/.config/i18n.site.yml` і додайте таку конфігурацію :

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

У конфігурації змініть `i18n.site` на значення `host:` в `.i18n/htm/main.yml` , кілька сховищ об’єктів можна налаштувати під `s3` , а поле `region` є необов’язковим (багатьом сховищам об’єктів не потрібно встановлювати це поле).

Потім запустіть `i18n.site -n` щоб повторно опублікувати проект.

Якщо ви змінили `~/.config/i18n.site.yml` і хочете повторно завантажити, скористайтеся наступною командою в кореневому каталозі проекту, щоб очистити кеш завантаження :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Конфігурація cloudflare

Доменне ім'я розміщено на [cloudflare](//www.cloudflare.com)

### Правила Перетворення

Додайте правила перетворення, як показано нижче:

![](//p.3ti.site/1725436822.avif)

Код правила такий: будь ласка, змініть код "i18n.site" на ім'я свого домену:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Правила Кешування

Додайте правила кешу таким чином:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Правила Перенаправлення

Встановіть правила переспрямування, будь ласка, змініть код "i18n.site" на своє доменне ім'я

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

`URL redirect` Виберіть динамічне перенаправлення, будь ласка, змініть `/en` у шляху перенаправлення `concat("/en",http.request.uri.path,".htm")` на мову за умовчанням, яку потрібно включити в пошукові системи.

## Конфігурація Інтелектуальної Хмари Baidu

Якщо вам потрібно надавати послуги материковому Китаю, ви можете використовувати [Baidu Smart Cloud](//cloud.baidu.com) .

Дані завантажуються в Baidu Object Storage і зв’язуються з мережею розповсюдження вмісту Baidu.

Потім створіть сценарій у [службі EdgeJS edge](//console.bce.baidu.com/cdn/#/cdn/ejs/list) наступним чином

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
  // Заголовки відповідей можна встановити для виводу налагодження, наприклад out.XXX = 'MSG';
})
```

Клацніть `Debug` , а потім клацніть Опублікувати для всієї мережі.

![](//p.3ti.site/1725437754.avif)

## Розширене Використання: Розподіл Трафіку На Основі Регіональної Роздільної Здатності

Якщо ви хочете надавати послуги в материковому Китаї, а також хочете `cloudflare` безкоштовного міжнародного трафіку, ви можете використовувати `DNS` з регіональним дозволом.

Наприклад, [Huawei Cloud DNS](https://www.huaweicloud.com) забезпечує безкоштовний регіональний аналіз, за допомогою якого трафік материкового Китаю може проходити через Baidu Smart Cloud, а міжнародний трафік може проходити через `cloudflare` .

Є багато підводних каменів у конфігурації `cloudflare` Ось кілька моментів, на які слід звернути увагу :

### Доменне Ім’я Розміщено В Іншому `DNS` , Як Використовувати `cloudflare`

Спочатку прив’яжіть довільне доменне ім’я до `cloudflare` , а потім скористайтеся `SSL/TLS` → спеціальне доменне ім’я, щоб пов’язати основне доменне ім’я з цим доменним іменем.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Не Можна Отримати Через Власне Доменне Ім’я

Оскільки до `cloudflare` сховища об’єктів `R2` неможливо отримати доступ за допомогою налаштованого доменного імені, для розміщення статичних файлів необхідно використовувати сховище об’єктів стороннього виробника.

Тут ми беремо приклад [backblaze.com](https://www.backblaze.com) щоб продемонструвати, як прив’язати сторонні об’єкти до `cloudflare` .

Створіть сегмент на `backblaze.com` , завантажте будь-який файл, натисніть, щоб переглянути файл, і отримайте доменне ім’я `Friendly URL` , яке тут є `f003.backblazeb2.com` .

![](//p.3ti.site/1725440783.avif)

Змініть доменне ім’я з `CNAME` на `f003.backblazeb2.com` на `cloudflare` і ввімкніть проксі.

![](//p.3ti.site/1725440896.avif)

Змінити `cloudflare` із `SSL` → режим шифрування, встановити `Full`

![](//p.3ti.site/1725438572.avif)

Додайте правило перетворення, як показано нижче, поставте його першим (перше має найнижчий пріоритет):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` виберіть динамічний і змініть `your_bucketname` в `concat("/file/your_bucketname",http.request.uri.path)` назву свого відра.

Крім того, у наведеному вище правилі перетворення `cloudflare` `index.html` змінюється на `file/your_bucketname/index.html` , а інші конфігурації залишаються незмінними.

![](//p.3ti.site/1725441384.avif)