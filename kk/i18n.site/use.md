# Орнату &

## Конфигурация Белгісі

`i18` аударма құралы ендірілген `i18n.site` [рұқсат белгісін конфигурациялау үшін `i18` құжатына сілтеме жасау үшін осы жерді басыңыз](/i18/use) .

## Орнату

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Демо Жоба

Демо-жобадан бастайық және оны қалай пайдалану керектігін білейік `i18n.site`

Алдымен демонстрациялық репозиторийді клондап, пәрменді келесідей іске қосамыз:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Материктік Қытайдағы пайдаланушылар:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker` арқылы жергілікті алдын ала қарауды жеңілдету үшін код негізі клонының каталог атауы `md` болуы керек `demo.i18n.site`

### Аудару

Алдымен, `md` енгізіңіз `i18n.site` `en` сөзін `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Іске қосылғаннан кейін аударма және кэш файлдары оларды `md` `git add . ` репозиторийге қосуды ұмытпаңыз.

### Жергілікті Алдын Ала Қарау

Орнату және іске қосу `docker` ( `MAC` [orbstack](https://orbstack.dev) `docker` уақыты ретінде пайдалануды ұсынады).

Содан кейін, `docker` енгізіңіз және `./up.sh` іске қосыңыз, содан кейін жергілікті [https://127.0.0.1](https://127.0.0.1) қарау үшін кіріңіз.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Мазмұнды Жариялау

`i18n.site` [Бір беттік қолданба](https://developer.mozilla.org/docs/Glossary/SPA) архитектурасын қабылдайды және веб-сайтқа кіру беті мен веб-сайт мазмұны тәуелсіз түрде орналастырылады.

Жоғарыдағы аударманы орындағаннан кейін, `md/out/dev` `htm` және `v` каталогтары жасалады.

Мұнда, `dev` оның `.i18n/htm/dev.yml` файлына негізделгенін көрсетеді.

: бойынша `dev`

`htm` Анықтаманың астында веб-сайтқа кіру беті бар.

`v` нұсқа нөмірі бар веб-сайт мазмұны бар.

Жергілікті алдын ала қарау барлық файлдарды нұсқа нөміріне қарамастан `out/dev/v/0.1.0`

Ресми шығарылым үшін өзгертілген файлдар жаңа нұсқа нөмірі каталогына көшіріледі.

#### Конфигурация Файлын Көрсету Үшін -c Пайдаланыңыз

Әртүрлі конфигурация файлдары `out` астында сәйкес каталогтарды жасайды.

Мысалы, `.i18n/htm/ol.yml` `out/ol` каталогын жасайды.

`dev.yml` және `ol.yml` - әдепкі конфигурациялар.

`dev` — `development` аббревиатурасы, ол әзірлеу ортасын білдіреді, жергілікті алдын ала қарау үшін пайдаланылады және сонымен қатар әдепкі конфигурация файлы болып табылады.
`ol` — желілік ортаны білдіретін `online` аббревиатурасы, ресми шығарылым үшін пайдаланылады және сонымен бірге `npm` `-n` пәрмен жолы параметрін пайдалану арқылы) жариялау кезінде әдепкі конфигурация файлы болып табылады.

Конфигурация файлының атын көрсету үшін `--htm_conf` жолында басқа конфигурация файлдарын жасауға болады:

мысалы:
```
i18n.site --htm_conf yourConfig --save
```

Мұнда жаңарту шығарылымының нөмірі көрсетіледі `--save`

#### <a rel=id href="#npm" id="npm"></a> Мазмұнды npmjs.com сайтында жариялау

Мазмұнды [npmjs.com](//npmjs.com) ұсынылатын әдепкі шешім ( [Front-end High Availability](/i18n.site/feature#ha) бөлімін қараңыз).

##### npm login &

Орнату `nodejs` жүйеге кіру үшін `npm login` пайдаланыңыз.

Өңдеңіз `md/.i18n/htm/ol.yml` `v: //unpkg.com/i18n.site` ішіндегі `i18n.site` өзіңізге өзгертіңіз `npm` бума атауы.

Бос пакет атауын пайдаланыңыз [npmjs.com](//npmjs.com)

`npm` бумасына негізделген жариялау кезінде, жаңа шығарылымдарды `v:` қарауды **`//unpkg.com/`** ету үшін кэш уақыты `i18n.site` осы префикс жолының астында `/.v` ретінде арнайы оңтайландырылған.

Аудару және жариялау үшін `md` `i18n.site --npm` немесе `i18n.site -n` іске қосыңыз.

Жариялау үшін үздіксіз интеграциялық ортаны пайдалансаңыз, оны орнатудың қажеті жоқ `nodejs` Тек жүйеге кіріп, жарияланған рұқсатты `~/.npmrc` ортаға көшіріңіз.

Пакет атауын `v:` in `ol.yml` ішінде өзгертсеңіз, **алдымен `.i18n/v/ol` жойып, содан кейін оны жариялауды ұмытпаңыз** .

##### npm Жариялаған Прокси Сервер

Егер материктік Қытайдағы пайдаланушылар желі ақауларына тап болса және `npm` жариялай алмаса, олар прокси серверді конфигурациялау үшін `https_proxy` орта айнымалысын орната алады.

Прокси-сервер порты `7890` жаза аласыз:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Өздігінен Орналастырылған Мазмұн

Мазмұнды өзіңіз орналастырғыңыз келсе, алдымен өңдеңіз `md/.i18n/htm/ol.yml` `v: //unpkg.com/i18n.site` URL префиксіне өзгертіңіз, мысалы, `v: //i18n-v.xxx.com` .

`md` енгізіңіз және іске қосыңыз

```
i18n.site --htm_conf ol --save
```

немесе аббревиатура

```
i18n.site -c ol -s
```

Содан кейін `md/out/ol/v` каталогындағы мазмұнды `v:` ішінде орнатылған URL префикс жолына теңшеңіз.

Соңында **`/.v` `1s` аяқталатын жолдың кэш уақытын конфигурациялаңыз** , әйтпесе жаңадан шыққан мазмұнға бірден қол жеткізу мүмкін емес.

Басқа жолдар үшін кэш уақытын қажетсіз сұрауларды азайту үшін бір жылға немесе одан да көп уақытқа орнатуға болады.

##### Хост Мазмұны s3

Мазмұнды өздігінен орналастыру үшін, өз серверіңізді пайдаланудан басқа `CDN` `S3` +

[rclone](https://rclone.org) `S3` серверін пайдалана аласыз, содан кейін төмендегі сценарийді қараңыз және өзгерте аласыз және әр жариялаған сайын тек қосымша өзгерістерді `S3` көшіріңіз.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`/.v` әрпімен аяқталатын жолдың кэш уақыты `1s` болатындай конфигурациялауды ұмытпаңыз `CDN` әйтпесе жаңадан шыққан мазмұнға бірден қол жеткізе алмайсыз.

### Веб-Сайтты Жариялау

Веб-сайтты кез келген жерде орналастыруға болады [github page](https://pages.github.com) және [cloudflare page](https://pages.cloudflare.com) - бұл жақсы таңдау.

Веб-сайт [бір беттік қолданбаның](https://developer.mozilla.org/docs/Glossary/SPA) архитектурасын қабылдағандықтан, құрамында `. ` жоқ URL жолын қайта жазуды ұмытпаңыз `index.html`

Веб-сайтқа кіру бетін тек бір рет орналастыру қажет және кейінгі мазмұн жаңартулары үшін веб-сайттың кіру бетін қайта орналастырудың қажеті жоқ.

#### github Бетінде Орналастыру

[Ұйым құру үшін алдымен мына github басыңыз](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Содан кейін осы `i18n-demo.github.io` астында қойма жасаңыз ( `i18n-demo` дегенді өзіңіз жасаған ұйым атауымен ауыстырыңыз):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Мазмұнды алдыңғы мақалада жариялаған кезде, ол жасалды `out/ol/htm` осы каталогты енгізіп, іске қосыңыз :

```
ln -s index.html 404.html
```


Себебі `github page` URL жолын қайта жазуды қолдамайды, сондықтан оның орнына `404.html` пайдаланылады.

Содан кейін `htm` каталогында келесі пәрменді орындаңыз ( `i18n-demo/i18n-demo.github.io.git` өзіңіздің қойма мекенжайыңызбен ауыстыруды ұмытпаңыз) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Кодты басқаннан кейін `github page` қолданбасының сәтті іске қосылуын күтіңіз (төменде көрсетілгендей), содан кейін оған қол жеткізе аласыз.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Демонстрациялық бетті қараңыз:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### cloudflare Бетінде Орналастыру

[cloudflare page](//pages.cloudflare.com) мен салыстырғанда `github page` ол жолды қайта жазуды қамтамасыз етеді және материктік Қытайға ыңғайлы және оны пайдалану ұсынылады.

`cloudflare page` Орналастыру әдетте жоғарыдағы `github page` орналастыруға негізделген.

Жоба жасаңыз және жоғарыдағы `i18n-demo.github.io` байланыстырыңыз.

Процесс төмендегі суретте көрсетілген:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` ұйымға рұқсат беру үшін басыңыз `Add Account`

Егер сіз басқа ұйымның қоймасын байланыстырсаңыз, жаңа ұйым көрсетілмес бұрын оған екі рет рұқсат беру үшін `Add Account` екі рет басу қажет болуы мүмкін.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Әрі қарай `i18n-demo.github.io` таңдаңыз, содан кейін `Begin setup` түймесін басыңыз және келесі қадамдар үшін әдепкі мәндерді пайдаланыңыз.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Бірінші рет байланыстырғаннан кейін оған қол жеткізу үшін бірнеше минут күту керек.

Орналастырудан кейін пайдаланушы домен атауын байланыстыра аласыз.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Теңшелетін домен атауын байланыстырғаннан кейін, төменде көрсетілгендей бір беттік қолданбаның жолын қайта жазуды конфигурациялау үшін домен атауына өтіңіз:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Жоғарыдағы суреттегі ережелер төмендегідей `i18n.site`

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

Сонымен қатар, төменде көрсетілгендей кэш ережелерін конфигурациялаңыз және кэш ұзақтығын бір айға орнатыңыз.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Жоғарыдағы суреттегі екінші қадамға сәйкес келетін домен атауын байланыстырған домендік атқа өзгертіңіз.

#### Материктік Қытайда Веб-Сайтты Орналастыруды Оңтайландыру

Материктік Қытайдың желілік ортасында жақсырақ қолжетімділік өнімділігін алғыңыз келсе, алдымен [домен атауын тіркеңіз](//beian.aliyun.com) .

`out/ol/htm` кейін `CDN` материктік Қытайдағы бұлтты жеткізушілердің нысан сақтауын пайдаланыңыз +

[Baidu Smart Cloud сияқты бір беттік қолданбаларға бейімделу жолын қайта жазу үшін шеттік есептеулерді пайдалануға болады `CDN`](//cloud.baidu.com/product/cdn.html) Оны келесідей конфигурациялауға болады:

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
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
<img alt="" src="https://p.3ti.site/1721121273.avif">

`MX` мен `CNAME` жазбалар қатар өмір сүре алмайтындықтан, егер сіз бір уақытта домендік атауды алғыңыз келсе, `CNAME` жазуын `A` үшін [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Бұған қоса, материктік Қытайдағы бұлтты жеткізушілердің шетелдегі трафик төлемдері салыстырмалы түрде қымбат болғандықтан, шығындарды оңтайландырғыңыз келсе, оған қол жеткізу үшін [Huawei Cloud тегін географиялық DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) және [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) пайдаланушы домен атауын пайдалануға болады трафикті бұру──Материк Қытайдағы трафик Baidu Cloud `CDN` халықаралық трафик cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Бұл орналастыруды оңтайландыру шешімдері күрделірек және болашақта бөлек тарауларда енгізіледі.

#### Жалпы Домен Атауын Қайта Бағыттау

Егер сіз веб-сайтты негізгі веб-сайт ретінде жасау үшін `i18n.site` , әдетте пандоменді қайта бағыттауды конфигурациялауыңыз керек, `www.xxx.com` `xxx.com` `*.xxx.com`

Бұл талапты Alibaba Cloud компаниясының `EdgeScript` ( [ағылшын құжаты](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Қытай құжаты](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) көмегімен орындауға болады `CDN`

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) жүйесінде домен атауын қосыңыз және домен `*.xxx.com` Alibaba Cloud `CDN` `CNAME` тармағына бағыттаңыз.

<img alt="" src="https://p.3ti.site/1721122000.avif">

Мысалы, жоғарыдағы суреттегі пан-домен атауын қайта бағыттау конфигурациясы `*.i18n.site` :

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx Көмегімен Орналастыру

`server` келесіге ұқсас конфигурацияны қосыңыз nginx мұнда `/root/i18n/md/out/ol/htm` оны өз жобаңыздың `out/ol/htm` жолына өзгертіңіз:

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Каталог Құрылымы

#### Қоғамдық

Веб-сайттың статикалық файлдары, мысалы `favicon.ico` `robots.txt` және т.б.

Бұл жерде белгіше файлдарын [realfavicongenerator.net](https://realfavicongenerator.net) арқылы жасауға болады.

#### .i18n

`.i18n` Каталогтың астында `i18n.site` конфигурация файлдары, аударма кэші және т.б. бар. Мәліметтерді келесі ["Конфигурация"](/i18n.site/conf) тарауынан қараңыз.

#### Kk

Конфигурация файлындағы `fromTo` `en` сәйкес `.i18n/conf.yml` бастапқы тіл каталогы

```yaml
i18n:
  fromTo:
    en: zh
```

Аударма конфигурациясын қараңыз [i18](/i18/use)

