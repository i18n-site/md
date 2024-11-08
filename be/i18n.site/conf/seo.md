# Пошукавая Аптымізацыя (Seo)

## Прынцып

`i18n.site` выкарыстоўвае архітэктуру адной старонкі без абнаўлення. Для палягчэння індэксацыі пошуку будзе створана асобная статычная старонка і `sitemap.xml` для сканіравання.

Калі `User-Agent` запыту на доступ выкарыстоўваецца сканерам пошукавай сістэмы, запыт будзе перанакіраваны на статычную старонку праз `302` .

На статычных старонках выкарыстоўвайце `link` для пазначэння спасылак на розныя моўныя версіі гэтай старонкі, напрыклад :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Лакальная Канфігурацыя nginx

Возьмем у якасці прыкладу файл канфігурацыі `.i18n/htm/main.yml` у дэманстрацыйным праекце

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

Спачатку змяніце значэнне `host:` вышэй для вашага даменнага імя, напрыклад `xxx.com` .

Затым, `i18n.site -n` , статычная старонка будзе згенеравана ў каталогу `out/main/htm` .

Вядома, вы таксама можаце ўключыць іншыя файлы канфігурацыі, напрыклад, спачатку звярнуцца да канфігурацыі `main` , каб стварыць `.i18n/htm/dist.package.json` і `.i18n/htm/dist.yml` .

Затым запусціце `i18n.site -n -c dist` , каб статычная старонка была згенеравана ў `out/dist/htm` .

`nginx` можна ўсталяваць, спасылаючыся на канфігурацыю ніжэй.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Не кэшуйце працоўныя сцэнарыі сервера занадта доўга
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Усталюйце большы час кэшавання для іншых статычных рэсурсаў
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Усталюйце, які статычны файл будзе выкарыстоўвацца сканерам у якасці запісу на галоўнай старонцы
location = / {
  # Калі $botLang не пусты, гэта азначае доступ сканера і перанакіраванне ў адпаведнасці з усталяваным моўным шляхам
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Канфігурацыя аднастаронкавага прыкладання
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Наладзьце Сховішча Аб'ектаў Для Загрузкі Статычных Файлаў

Статычныя файлы можна ствараць лакальна, але больш распаўсюджаным падыходам з'яўляецца загрузка іх у сховішча аб'ектаў.

Змяніце настроены вышэй `out` на :

```
out:
  - s3
```

Затым адрэдагуйце `~/.config/i18n.site.yml` і дадайце наступную канфігурацыю :

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

У канфігурацыі змяніце `i18n.site` на значэнне `host:` у `.i18n/htm/main.yml` , некалькі сховішчаў аб'ектаў можна наладзіць у `s3` , а поле `region` неабавязковае (у многіх сховішчах аб'ектаў усталёўваць гэта поле не трэба).

Затым запусціце `i18n.site -n` каб перавыдаць праект.

Калі вы змянілі `~/.config/i18n.site.yml` і хочаце загрузіць паўторна, выкарыстоўвайце наступную каманду ў каранёвым каталогу праекта, каб ачысціць кэш загрузкі :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Канфігурацыя cloudflare

Даменнае імя, размешчанае ў [cloudflare](//www.cloudflare.com)

### Правілы Пераўтварэння

Дадайце правілы пераўтварэння, як паказана ніжэй:

![](//p.3ti.site/1725436822.avif)

Код правіла наступны, змяніце код "i18n.site" на імя вашага дамена:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Правілы Кэшавання

Дадайце правілы кэша наступным чынам:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Правілы Перанакіравання

Усталюйце правілы перанакіравання наступным чынам, змяніце код "i18n.site" на імя вашага дамена

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

`URL redirect` Выберыце дынамічнае перанакіраванне, змяніце `/en` у шляху перанакіравання `concat("/en",http.request.uri.path,".htm")` на мову па змаўчанні, якую вы хочаце ўключыць у пошукавыя сістэмы.

## Канфігурацыя Інтэлектуальнага Воблака Baidu

Калі вам трэба прадастаўляць паслугі ў Кітаі, вы можаце выкарыстоўваць [Baidu Smart Cloud](//cloud.baidu.com) .

Даныя загружаюцца ў Baidu Object Storage і прывязваюцца да сеткі распаўсюджвання змесціва Baidu.

Затым стварыце скрыпт у [службе EdgeJS edge](//console.bce.baidu.com/cdn/#/cdn/ejs/list) наступным чынам

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
  // Загалоўкі адказу могуць быць устаноўлены для выхаду адладкі, напрыклад, out.XXX = 'MSG';
})
```

Націсніце `Debug` , затым націсніце Апублікаваць ва ўсёй сетцы.

![](//p.3ti.site/1725437754.avif)

## Пашыранае Выкарыстанне: Размеркаванне Трафіку Ў Залежнасці Ад Рэгіянальнага Дазволу

Калі вы хочаце прадастаўляць паслугі ў мацерыковым Кітаі, а таксама жадаеце `cloudflare` бясплатных міжнародных трафікаў, вы можаце выкарыстоўваць `DNS` з рэгіянальным дазволам.

Напрыклад, [Huawei Cloud DNS](https://www.huaweicloud.com) забяспечвае бясплатны рэгіянальны аналіз, з дапамогай якога трафік мацерыковага Кітая можа праходзіць праз Baidu Smart Cloud, а міжнародны - праз `cloudflare` .

Ёсць шмат падводных камянёў у канфігурацыі `cloudflare` Вось некалькі момантаў, на якія варта звярнуць увагу :

### Даменнае Імя Знаходзіцца Ў Іншым `DNS` , Як Выкарыстоўваць `cloudflare`

Спачатку прывяжыце адвольнае даменнае імя да `cloudflare` , а потым выкарыстоўвайце `SSL/TLS` → карыстацкае даменнае імя, каб звязаць асноўнае даменнае імя з гэтым даменным імем.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Нельга Атрымаць Праз Карыстацкае Даменнае Імя

Паколькі да `cloudflare` сховішча аб'ектаў `R2` нельга атрымаць доступ праз наладжанае даменнае імя, для размяшчэння статычных файлаў трэба выкарыстоўваць сховішча аб'ектаў трэцяга боку.

Вось прыклад [backblaze.com](https://www.backblaze.com) каб прадэманстраваць, як прывязваць аб'екты трэціх асоб і захоўваць іх у `cloudflare` .

Стварыце вядро ў `backblaze.com` , загрузіце любы файл, націсніце, каб праглядзець файл, і атрымаеце даменнае імя `Friendly URL` , якое тут роўна `f003.backblazeb2.com` .

![](//p.3ti.site/1725440783.avif)

Зменіце даменнае імя з `CNAME` на `f003.backblazeb2.com` на `cloudflare` і ўключыце проксі.

![](//p.3ti.site/1725440896.avif)

Змяніць `cloudflare` з `SSL` → рэжым шыфравання, усталяваць `Full`

![](//p.3ti.site/1725438572.avif)

Дадайце правіла пераўтварэння, як паказана ніжэй, пастаўце яго першым (першае мае самы нізкі прыярытэт):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` выберыце дынамічны і змяніце `your_bucketname` у `concat("/file/your_bucketname",http.request.uri.path)` імя вашага вядра.

Акрамя таго, у прыведзеным вышэй правіле пераўтварэння `cloudflare` `index.html` змяняецца на `file/your_bucketname/index.html` , а іншыя канфігурацыі застаюцца ранейшымі.

![](//p.3ti.site/1725441384.avif)