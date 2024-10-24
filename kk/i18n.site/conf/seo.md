# Іздеу Жүйесін Оңтайландыру (Seo)

## Принципі

`i18n.site` жаңармайтын бір бет архитектурасын қабылдайды. Іздеу индексін жеңілдету үшін тексеріп шығушылар тексеріп шығу үшін бөлек статикалық бет және `sitemap.xml` жасалады.

Рұқсат сұрауының `User-Agent` іздеу жүйесінің тексеріп шығушысы пайдаланған кезде, сұрау `302` арқылы тұрақты бетке қайта бағытталады.

Статикалық беттерде осы беттің әртүрлі тіл нұсқаларына сілтемелерді көрсету үшін `link` пайдаланыңыз, мысалы :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Статикалық Файлдарды Жүктеп Салу Үшін Нысан Жадын Теңшеңіз

Статикалық файлдарды жергілікті түрде жасауға болады, бірақ неғұрлым кең тараған тәсіл оларды нысан қоймасына жүктеп салу болып табылады.

Мысал ретінде демонстрациялық жобадағы `.i18n/htm/ol.yml` конфигурация файлын алыңыз

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

Алдымен жоғарыдағы `host:` мәнін `i18n.site` сияқты домендік атыңызға өзгертіңіз.

Содан кейін `~/.config/i18n.site.yml` өңдеңіз және келесі конфигурацияны қосыңыз :

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

Конфигурацияда `i18n.site` `host:` in `.i18n/htm/ol.yml` мәніне өзгертіңіз, бірнеше нысан қоймаларын `s3` астында конфигурациялауға болады және `region` өрісі міндетті емес (көптеген нысандар қоймаларында бұл өрісті орнату қажет емес).

Содан кейін жобаны қайта жариялау үшін `i18n.site -n` іске қосыңыз.

`~/.config/i18n.site.yml` өзгерткен болсаңыз және қайта жүктеп салғыңыз келсе, жүктеп салу кэшін тазалау үшін жобаның түбірлік каталогындағы келесі пәрменді пайдаланыңыз :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## cloudflare Конфигурациясы

Домен атауы [cloudflare](//www.cloudflare.com)

### Түрлендіру Ережелері

Төменде көрсетілгендей түрлендіру ережелерін қосыңыз:

![](//p.3ti.site/1725436822.avif)

Ереже коды келесідей, "i18n.site" кодын домен атыңызға өзгертіңіз:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Кэштеу Ережелері

Кэш ережелерін келесідей қосыңыз:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Қайта Бағыттау Ережелері

Қайта бағыттау ережелерін келесідей орнатыңыз, домендік атыңызға "i18n.site" кодын өзгертіңіз.

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

`URL redirect` Динамикалық қайта бағыттауды таңдаңыз, `concat("/en",http.request.uri.path,".htm")` қайта бағыттау жолындағы `/en` іздеу жүйелері қосқыңыз келетін әдепкі тілге өзгертіңіз.

## Baidu Интеллектуалды Бұлтты Конфигурациясы

Материктік Қытайға қызмет көрсету қажет болса, [Baidu Smart Cloud](//cloud.baidu.com) қолданбасын пайдалануға болады.

Деректер Baidu нысан қоймасына жүктеп салынған және Baidu мазмұнды тарату желісіне байланыстырылған.

Содан кейін келесідей [EdgeJS қызметінде](//console.bce.baidu.com/cdn/#/cdn/ejs/list) сценарий жасаңыз

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

`Debug` түймесін басыңыз, содан кейін бүкіл желіге жариялау түймесін басыңыз.

![](//p.3ti.site/1725437754.avif)

## Жетілдірілген Пайдалану: Аймақтық Рұқсат Негізінде Трафикті Таратыңыз

Материктік Қытайда қызметтерді ұсынғыңыз келсе және сонымен қатар `cloudflare` тегін халықаралық трафикті қаласаңыз, аймақтық ажыратымдылығы бар `DNS` пайдалана аласыз.

Мысалы, [Huawei DNS](https://www.huaweicloud.com) тегін аймақтық талдауды қамтамасыз етеді, оның көмегімен материктік қытайлық трафик Baidu Smart Cloud арқылы, ал халықаралық трафик `cloudflare` арқылы өтуі мүмкін.

`cloudflare` конфигурациясында көптеген қателер бар. Мұнда ескеру қажет бірнеше тармақ бар :

### Домен Атауы Басқа `DNS` -Де Орналастырылған, `cloudflare` Қалай Пайдалану Керек

Алдымен ерікті домен атауын `cloudflare` мәніне байланыстырыңыз, содан кейін негізгі домен атауын осы домендік атаумен байланыстыру үшін `SSL/TLS` → теңшелетін домен атауын пайдаланыңыз.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ге Теңшелетін Домен Атауы Арқылы Қол Жеткізу Мүмкін Емес

`cloudflare` нысан сақтау орны `R2` теңшелген домен аты арқылы қол жеткізу мүмкін болмағандықтан, статикалық файлдарды орналастыру үшін үшінші тарап нысан қоймасын пайдалану қажет.

[backblaze.com](https://www.backblaze.com) біз `cloudflare` -де сақталатын үшінші тарап нысандарын қалай байланыстыру керектігін көрсету үшін мысал ретінде аламыз.

`backblaze.com` нүктесінде шелек жасаңыз, кез келген файлды жүктеп салыңыз, файлды шолу үшін басыңыз және осы жерден `f003.backblazeb2.com` болатын `Friendly URL` домен атауын алыңыз.

![](//p.3ti.site/1725440783.avif)

Домен атауын `CNAME` ден `f003.backblazeb2.com` ге `cloudflare` ге өзгертіңіз және проксиді қосыңыз.

![](//p.3ti.site/1725440896.avif)

`cloudflare` → `SSL` режимін өзгертіңіз, `Full` мәніне орнатыңыз

![](//p.3ti.site/1725438572.avif)

Төменде көрсетілгендей түрлендіру ережесін қосыңыз, оны бірінші орынға қойыңыз (біріншісі ең төменгі басымдыққа ие):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` динамикалық параметрін таңдап, шелек атауына `your_bucketname` -ні `concat("/file/your_bucketname",http.request.uri.path)` өзгертіңіз.

Бұған қоса, жоғарыдағы `cloudflare` түрлендіру ережесінде `index.html` `file/your_bucketname/index.html` мәніне өзгертіліп, басқа конфигурациялар өзгеріссіз қалады.

![](//p.3ti.site/1725441384.avif)