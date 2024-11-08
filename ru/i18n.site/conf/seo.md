# Поисковая Оптимизация (Seo)

## Принцип

`i18n.site` использует одностраничную архитектуру без обновления. Чтобы облегчить индексацию поиска, для сканирования сканерами будет создана отдельная статическая страница и `sitemap.xml` .

Когда `User-Agent` запроса доступа используется сканером поисковой системы, запрос будет перенаправлен на статическую страницу через `302` .

На статических страницах используйте `link` для обозначения ссылок на разные языковые версии этой страницы, например :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Локальная Конфигурация nginx

В качестве примера возьмем файл конфигурации `.i18n/htm/main.yml` в демонстрационном проекте.

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

Сначала измените значение `host:` указанное выше, на имя вашего домена, например `xxx.com` .

Затем `i18n.site -n` статическая страница будет создана в каталоге `out/main/htm` .

Конечно, вы также можете включить другие файлы конфигурации, например, сначала обратиться к конфигурации `main` для создания `.i18n/htm/dist.package.json` и `.i18n/htm/dist.yml` .

Затем запустите `i18n.site -n -c dist` , чтобы статическая страница была сгенерирована до `out/dist/htm` .

`nginx` можно установить, обратившись к конфигурации ниже.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Не кэшируйте рабочие сценарии сервера слишком долго.
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Установите более длительное время кэширования для других статических ресурсов.
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Установите, какой статический файл сканер будет использовать в качестве записи на домашней странице.
location = / {
  # Если $botLang не пусто, это означает доступ и перенаправление сканера в соответствии с заданным языковым путем.
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Конфигурация одностраничного приложения
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Настройка Объектного Хранилища Для Загрузки Статических Файлов

Статические файлы можно создавать локально, но более распространенным подходом является их загрузка в объектное хранилище.

Измените `out` настроенное выше, на :

```
out:
  - s3
```

Затем отредактируйте `~/.config/i18n.site.yml` и добавьте следующую конфигурацию :

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

В конфигурации измените `i18n.site` на значение `host:` в `.i18n/htm/main.yml` , несколько хранилищ объектов можно настроить под `s3` , а поле `region` является необязательным (многим хранилищам объектов не требуется задавать это поле).

Затем запустите `i18n.site -n` чтобы повторно опубликовать проект.

Если вы изменили `~/.config/i18n.site.yml` и хотите повторно загрузить, используйте следующую команду в корневом каталоге проекта, чтобы очистить кеш загрузки :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Конфигурация cloudflare

Доменное имя размещено на домене [cloudflare](//www.cloudflare.com)

### Правила Конвертации

Добавьте правила преобразования, как показано ниже:

![](//p.3ti.site/1725436822.avif)

Код правила следующий: измените код «i18n.site» на свое доменное имя:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Правила Кэширования

Добавьте правила кэширования следующим образом:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Правила Перенаправления

Установите следующие правила перенаправления: измените код «i18n.site» на свое доменное имя.

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

`URL redirect` Выберите динамическое перенаправление, измените `/en` в пути перенаправления `concat("/en",http.request.uri.path,".htm")` на язык по умолчанию, который вы хотите включить в поисковые системы.

## Конфигурация Интеллектуального Облака Baidu

Если вам необходимо предоставлять услуги материковому Китаю, вы можете использовать [Baidu Smart Cloud](//cloud.baidu.com) .

Данные загружаются в объектное хранилище Baidu и привязываются к сети распространения контента Baidu.

Затем создайте сценарий в [службе EdgeJS Edge](//console.bce.baidu.com/cdn/#/cdn/ejs/list) следующим образом.

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
  // Заголовки ответов можно настроить для вывода отладки, например out.XXX = 'MSG';
})
```

Нажмите `Debug` , затем нажмите «Опубликовать для всей сети».

![](//p.3ti.site/1725437754.avif)

## Расширенное Использование: Распределение Трафика На Основе Регионального Разрешения.

Если вы хотите предоставлять услуги в материковом Китае, а также хотите `cloudflare` бесплатного международного трафика, вы можете использовать `DNS` с региональным разрешением.

Например, [Huawei Cloud DNS](https://www.huaweicloud.com) обеспечивает бесплатный региональный анализ, благодаря которому трафик материкового Китая может проходить через Baidu Smart Cloud, а международный трафик — через `cloudflare` .

В настройке `cloudflare` есть много подводных камней. Вот несколько моментов, на которые следует обратить внимание :

### Доменное Имя Размещено В Другом Месте `DNS` , Как Использовать `cloudflare`

Сначала привяжите произвольное доменное имя к `cloudflare` , а затем используйте `SSL/TLS` → собственное доменное имя, чтобы связать основное доменное имя с этим доменным именем.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Невозможно Получить Доступ Через Собственное Доменное Имя

Поскольку доступ к `cloudflare` объектному хранилищу `R2` невозможен с помощью настроенного доменного имени, для размещения статических файлов необходимо использовать стороннее объектное хранилище.

Здесь мы возьмем [backblaze.com](https://www.backblaze.com) в качестве примера, чтобы продемонстрировать, как привязывать сторонние объекты и сохранять их в `cloudflare` .

Создайте корзину по адресу `backblaze.com` , загрузите любой файл, щелкните, чтобы просмотреть файл, и получите доменное имя `Friendly URL` , которое здесь равно `f003.backblazeb2.com` .

![](//p.3ti.site/1725440783.avif)

Измените имя домена с `CNAME` на `f003.backblazeb2.com` на `cloudflare` и включите прокси.

![](//p.3ti.site/1725440896.avif)

Изменить `cloudflare` из `SSL` → режим шифрования, установить на `Full`

![](//p.3ti.site/1725438572.avif)

Добавьте правило конвертации, как показано ниже, поставьте его первым (первое имеет самый низкий приоритет):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` выберите динамический и измените `your_bucketname` в `concat("/file/your_bucketname",http.request.uri.path)` на имя вашего сегмента.

Кроме того, в приведенном выше правиле преобразования `cloudflare` `index.html` заменяется на `file/your_bucketname/index.html` , а другие конфигурации остаются прежними.

![](//p.3ti.site/1725441384.avif)