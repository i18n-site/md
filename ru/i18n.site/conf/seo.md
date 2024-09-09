# Поисковая оптимизация (SEO)

## Принципы

`i18n.site` использует архитектуру одностраничного приложения без перезагрузки, и для удобства индексации поисковыми системами генерирует отдельные статические страницы и `sitemap.xml` для爬еров.

Когда `User-Agent` запроса принадлежит поисковому роботу, запрос перенаправляется на статическую страницу через `302`.

На статических страницах с помощью тега `link` указываются ссылки на версии страницы на разных языках, например:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Настройка загрузки статических файлов в объектное хранилище

Статические файлы могут быть созданы локально, но более распространена их загрузка в объектное хранилище.

Возьмем в пример файл конфигурации `.i18n/htm/ol.yml` из демонстрационного проекта

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

Сначала измените значение `host:` на ваше доменное имя, например `i18n.site`.

Затем отредактируйте `~/.config/i18n.site.yml`, добавив следующую конфигурацию:

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

В конфигурации измените `i18n.site` на значение `host:` из `.i18n/htm/ol.yml`, в разделе `s3` можно настроить несколько объектных хранилищ, поле `region` является可选ным (многим объектным хранилищам не требуется это поле).

Затем выполните команду `i18n.site -n` для повторного deployment проекта.

Если вы изменили `~/.config/i18n.site.yml` и хотите повторно загрузить данные, в корневом каталоге проекта выполните команду для清理 кэша загрузки:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Конфигурация Cloudflare

Доменное имя размещено у [Cloudflare](//www.cloudflare.com).

### Правила преобразования

Добавьте правила преобразования, как показано на рисунке:

![](//p.3ti.site/1725436822.avif)

Код правила следующий: замените "i18n.site" на ваше доменное имя:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Правила кэширования

Добавьте правила кэширования следующим образом:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Правила перенаправления

Настройте правила перенаправления следующим образом: замените "i18n.site" на ваше доменное имя

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

Выберите в rule type `URL redirect`, и измените `/en` в `concat("/en",http.request.uri.path,".htm")` на язык по умолчанию, который вы хотите индексировать поисковыми системами.

## Конфигурация интеллектуального облака Baidu

Если вам нужно предоставлять услуги для материкового Китая, вы можете использовать [Baidu Smart Cloud](//cloud.baidu.com).

Данные загружаются в объектное хранилище Baidu и привязываются к сети распространения контента Baidu.

Затем создайте сценарий в [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) следующим образом:

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

Нажмите на кнопку `Debug` и затем выберите опцию «Опубликовать для всей сети».

![](//p.3ti.site/1725437754.avif)

## Расширенное использование: распределение трафика на основе географического признака

Если вы хотите предоставлять услуги в материковом Китае и при этом использовать бесплатный международный трафик от `Cloudflare`, вы можете использовать `DNS` с географическим признаком.

Например, [Huawei Cloud DNS](https://www.huaweicloud.com) предлагает бесплатный географический анализ, который позволяет трафику из материкового Китая идти через Baidu Smart Cloud, а международному трафику — через `Cloudflare`.

В конфигурации `Cloudflare` есть множество нюансов. Вот несколько моментов, на которые стоит обратить внимание:

### Если доменное имя размещено у другого провайдера `DNS`, как использовать `Cloudflare`?

Сначала добавьте любое доменное имя в `cloudflare`, а затем через раздел `SSL/TLS` → «Собственное доменное имя» свяжите основное доменное имя с этим новым доменом.

![](https://p.3ti.site/1725438658.avif)

### `Cloudflare R2` не поддерживает доступ через собственное доменное имя

Поскольку `R2` от `Cloudflare` не поддерживает доступ через настраиваемое доменное имя, для хранения статических файлов необходимо использовать стороннее объектное хранилище.

Возьмем в пример [Backblaze](https://www.backblaze.com), чтобы продемонстрировать, как связать стороннее объектное хранилище с `Cloudflare`.

Создайте контейнер на `Backblaze`, загрузите любой файл, щелкните для просмотра файла и получите доменное имя `Friendly URL`, например `f003.backblazeb2.com`.

![](//p.3ti.site/1725440783.avif)

Настройте доменное имя `CNAME` на `f003.backblazeb2.com` в `Cloudflare` и включите прокси.

![](//p.3ti.site/1725440896.avif)

Изменить `cloudflare` из `SSL` → режим шифрования, установить на `Full`

![](//p.3ti.site/1725438572.avif)

Добавьте правило преобразования, как показано на рисунке, и поместите его в начало списка (правила в начале списка имеютlowest приоритет)

![](//p.3ti.site/1725443232.avif)

Выберите `Rewrite to`, и измените `your_bucketname` в `concat("/file/your_bucketname",http.request.uri.path)` на имя вашего контейнера.

Кроме того, в предыдущем правиле преобразования `cloudflare` замените `index.html` на `file/your_bucketname/index.html`, а другие настройки оставьте без изменений.

![](//p.3ti.site/1725441384.avif)