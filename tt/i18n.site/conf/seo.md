# Эзләү Двигательен Оптимизацияләү (Seo)

## Принцибы

`i18n.site` яңартылмаган бер бит архитектурасын кабул итә Эзләү индексациясен җиңеләйтү өчен, крейлерлар өчен аерым статик бит һәм `sitemap.xml` барлыкка киләчәк.

Рөхсәт соравының `User-Agent` эзләү системасы крейлеры кулланганда, сорау `302` аша статик биткә юнәлтеләчәк.

Статик битләрдә бу битнең төрле тел версияләренә сылтамалар күрсәтү өчен `link` кулланыгыз, мәсәлән :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Localирле nginx Конфигурациясе

Мисал итеп демо проектындагы `.i18n/htm/main.yml` конфигурация файлын алыгыз

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

Зинһар, башта `host:` кебек кыйммәтне домен исемегезгә үзгәртегез, мәсәлән `xxx.com` .

Аннары, `i18n.site -n` , статик бит `out/main/htm` каталогта барлыкка киләчәк.

Әлбәттә, сез башка конфигурация файлларын да эшли аласыз, мәсәлән, `.i18n/htm/dist.package.json` һәм `.i18n/htm/dist.yml` ясау өчен `main` конфигурациясенә мөрәҗәгать итү кебек.

Аннары `i18n.site -n -c dist` эшләгез, статик бит `out/dist/htm` чыгарылсын.

`nginx` түбәндәге конфигурациягә мөрәҗәгать итеп куелырга мөмкин.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Сервер эшче сценарийларын бик озак сакламагыз
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Башка статик ресурслар өчен озынрак кэш вакытларын куегыз
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Тапшыручы нинди статик файлны баш биткә кертү итеп куегыз
location = / {
  # Әгәр $botLang буш булмаса, бу крейлерга керү һәм билгеләнгән тел юлы буенча юнәлтү дигән сүз
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Бер бит кушымтасы конфигурациясе
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Статик Файлларны Йөкләү Өчен Объект Саклауны Конфигурацияләгез

Статик файллар җирле ясалырга мөмкин, ләкин киң таралган ысул - аларны объект саклауга йөкләү.

Aboveгарыда конфигурацияләнгән `out` үзгәртегез :

```
out:
  - s3
```

Аннары, `~/.config/i18n.site.yml` үзгәртегез һәм түбәндәге конфигурацияне өстәгез :

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

Конфигурациядә `i18n.site` `.i18n/htm/main.yml` -дән `host:` -гә үзгәртегез, берничә объект кибете `s3` яшькә кадәр конфигурацияләнергә мөмкин, һәм `region` кыр факультатив (күп объект кибетләренә бу кырны куярга кирәк түгел).

Аннары проектны бастыру өчен `i18n.site -n` йөгерегез.

Әгәр дә сез `~/.config/i18n.site.yml` үзгәрттегез һәм яңадан йөкләргә телисез икән, зинһар, проект тамыр каталогында йөкләү кэшын чистарту өчен түбәндәге боерыкны кулланыгыз :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Болыт Конфигурациясе

Домен исеме [cloudflare](//www.cloudflare.com)

### Конверсия Кагыйдәләре

Түбәндә күрсәтелгәнчә үзгәртү кагыйдәләрен өстәгез:

![](//p.3ti.site/1725436822.avif)

Кагыйдә коды түбәндәгечә, зинһар, "i18n.site" кодын домен исемегезгә үзгәртегез:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Кэш Кагыйдәләре

Кэш кагыйдәләрен түбәндәгечә өстәгез:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Кагыйдәләрне Юнәлтү

Реклама кагыйдәләрен түбәндәгечә куегыз, зинһар, "i18n.site" кодын домен исемегезгә үзгәртегез

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

`URL redirect` Динамик юнәлтүне сайлагыз, зинһар, `concat("/en",http.request.uri.path,".htm")` юнәлтү юлында `/en` эзләү системалары кертергә теләгән килешү теленә үзгәртегез.

## Baidu Интеллектуаль Болыт Конфигурациясе

Әгәр дә сез Кытай материкларына хезмәт күрсәтергә тиеш булсагыз, сез [Baidu Smart Cloud](//cloud.baidu.com) куллана аласыз.

Мәгълүматлар Baidu объект саклауга йөкләнә һәм Baidu эчтәлеген тарату челтәренә бәйләнә.

Аннары сценарийны [кыр читендә ясагыз EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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
  // Headавап башлыкларын чыгару өчен көйләргә мөмкин, мәсәлән, out.XXX = 'MSG';
})
```

`Debug` басыгыз, аннары бөтен челтәргә бастырырга басыгыз.

![](//p.3ti.site/1725437754.avif)

## Алдынгы Куллану: Региональ Резолюция Нигезендә Трафикны Таратыгыз

Әгәр дә сез Кытайның материкларында хезмәт күрсәтергә телисез, шулай ук `cloudflare` бушлай халыкара трафик телисез икән, сез региональ резолюция белән `DNS` куллана аласыз.

Мәсәлән, [Huawei DNS](https://www.huaweicloud.com) бушлай региональ анализ бирә, аның белән материк Кытай трафикы Baidu Smart Cloud аша уза ала, һәм халыкара трафик `cloudflare` аша үтәргә мөмкин.

`cloudflare` конфигурациясендә бик күп тозаклар бар. Монда берничә игътибарга лаек :

### Домен Исеме Бүтән `DNS` Урнаштырылган, `cloudflare` Ничек Кулланырга

Башта теләсә нинди домен исемен `cloudflare` белән бәйләгез, аннары төп домен исемен бу домен исеменә бәйләү өчен `SSL/TLS` → махсус домен исемен кулланыгыз.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Махсус Домен Исеме Аша Кереп Булмый

Төзелгән `cloudflare` объект саклагычында `R2` махсуслаштырылган домен исеме белән кереп булмый, статик файллар урнаштыру өчен өченче як объект саклауны кулланырга кирәк.

Монда без өченче як объектларны `cloudflare` белән ничек бәйләргә икәнен күрсәтү өчен мисал итеп алабыз [backblaze.com](https://www.backblaze.com)

`backblaze.com` чиләк ясагыз, теләсә `f003.backblazeb2.com` `Friendly URL` исемен алыгыз.

![](//p.3ti.site/1725440783.avif)

Домен исемен `CNAME` дән `cloudflare` `f003.backblazeb2.com` кадәр үзгәртегез һәм прокси эшләгез.

![](//p.3ti.site/1725440896.avif)

`SSL` → `Full` режимының `cloudflare` үзгәртегез

![](//p.3ti.site/1725438572.avif)

Түбәндә күрсәтелгәнчә конверсия кагыйдәсен өстәгез, аны беренче урынга куегыз (беренчесе иң түбән өстенлеккә ия):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` динамиканы сайлагыз һәм `concat("/file/your_bucketname",http.request.uri.path)` `your_bucketname` чиләк исеменә үзгәртегез.

Моннан тыш, өстә `cloudflare` конверсия кагыйдәсендә `index.html` `file/your_bucketname/index.html` үзгәртелә, һәм башка конфигурацияләр элеккечә кала.

![](//p.3ti.site/1725441384.avif)