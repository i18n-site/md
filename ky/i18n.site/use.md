# Орнотуу &

## Конфигурация Белгиси

`i18` котормо куралы камтылган `i18n.site` [кирүү белгисин конфигурациялоо үчүн `i18` документине кайрылыңыз](/i18/use) .

## Орнотуу

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Демо Долбоор

Келгиле, демо долбоор менен баштайлы жана кантип колдонууну үйрөнөлү `i18n.site`

Адегенде демо репозиторийди клондойбуз жана буйрукту төмөнкүдөй аткарабыз:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Материктик Кытайдагы колдонуучулар:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker` менен жергиликтүү алдын ала кароону жеңилдетүү үчүн коддун базалык клонунун каталогунун аты `md` болушу керек `demo.i18n.site`

### Которуу

Биринчиден, `md` киргизиңиз жана `i18n.site` иштетиңиз, ал `en` `zh` !

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Иштегенден кийин котормо жана кэш файлдары түзүлөт, аларды `md` `git add . ` репозиторийге кошууну унутпаңыз.

### Жергиликтүү Алдын Ала Көрүү

`docker` [orbstack](https://orbstack.dev) `MAC` `docker`

Андан кийин, `docker` киргизиңиз жана `./up.sh` иштетиңиз, андан кийин локалдык түрдө көрүү [https://127.0.0.1](https://127.0.0.1) кириңиз.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Пост Мазмуну

`i18n.site` [Бир беттик колдонмо](https://developer.mozilla.org/docs/Glossary/SPA) архитектурасын кабыл алат жана веб-сайтка кирүү бети жана веб-сайттын мазмуну өз алдынча жайгаштырылат.

Жогорудагы котормону иштеткенден кийин, `md/out/dev` `htm` жана `v` каталогдору түзүлөт.

Бул жерде, `dev` анын `.i18n/htm/dev.yml` файлынын негизинде курулганын көрсөтөт.

Мазмуну : `dev`

Каталогдун астында `htm` -сайтка кирүү бети жайгашкан.

`v` версия номери менен веб-сайттын мазмунун камтыйт.

Жергиликтүү алдын ала көрүү версия номерине карабастан бардык файлдарды `out/dev/v/0.1.0`

Расмий чыгаруу үчүн, өзгөртүлгөн файлдар жаңы версиянын номер каталогуна көчүрүлөт.

#### Конфигурация Файлын Көрсөтүү Үчүн -c Колдонуңуз

Ар кандай конфигурация файлдары `out` астында тиешелүү каталогдорду түзөт.

`out/ol` , `.i18n/htm/ol.yml`

`dev.yml` жана `ol.yml` демейки конфигурациялар.

`dev` - иштеп чыгуу чөйрөсүн билдирген `development` аббревиатурасы, жергиликтүү алдын ала көрүү үчүн колдонулат жана ошондой эле демейки конфигурация файлы болуп саналат.
`ol` - бул онлайн чөйрөнү билдирген `online` аббревиатурасы, расмий релиз үчүн колдонулат жана ошондой эле жарыялоодо демейки конфигурация файлы болуп саналат `npm` буйрук сабынын параметрин колдонуу менен `-n` .

`--htm_conf` ошондой эле башка конфигурация файлдарын түзө аласыз.

мисалы:
```
i18n.site --htm_conf yourConfig --save
```

Бул `--save` жаңыртуу версиясынын номери көрсөтүлөт.

#### <a rel=id href="#npm" id="npm"></a> Мазмунду npmjs.com сайтына жарыялоо

[npmjs.com](//npmjs.com) жарыялоо сунушталган демейки чечим болуп саналат ( [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login &

Орнотуу `nodejs` кирүү үчүн `npm login` колдонуңуз.

`v: //unpkg.com/i18n.site` `md/.i18n/htm/ol.yml` `i18n.site` `npm`

Жөн гана бош эмес пакеттин аталышын колдонуңуз [npmjs.com](//npmjs.com)

`npm` топтомунун негизинде жарыялоодо **`//unpkg.com/`** кэш убактысы `i18n.site` бул префикс жолунун астында `/.v` жаңы чыгарылыштарды өз `v:` көрүү үчүн атайын оптималдаштырылган.

Которуу жана жарыялоо үчүн `md` `i18n.site --npm` же `i18n.site -n` иштетиңиз.

Жарыялоо үчүн үзгүлтүксүз интеграция `~/.npmrc` колдонсоңуз, аны орнотуунун кереги жок `nodejs`

Эгер сиз пакеттин атын `v:` in `ol.yml` менен өзгөртсөңүз, анда **адегенде `.i18n/v/ol` өчүрүп, андан кийин аны жарыялоону унутпаңыз** .

##### npm Тарабынан Жарыяланган Прокси Сервер

Эгер материктик Кытайдагы колдонуучулар тармак көйгөйлөрүнө туш болуп, пакетти `npm` албаса, прокси серверди конфигурациялоо үчүн `https_proxy` чөйрө өзгөрмөсүн орното алышат.

Сиздин прокси сервер порту `7890`

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Өз Алдынча Жайгаштырылган Мазмун

Эгер сиз мазмунду өз алдынча жайгаштыргыңыз келсе, адегенде `v: //unpkg.com/i18n.site` түзөтүп `md/.i18n/htm/ol.yml` URL префиксине, мисалы, `v: //i18n-v.xxx.com` !

`md` киргизип, иштетиңиз

```
i18n.site --htm_conf ol --save
```

же аббревиатура

```
i18n.site -c ol -s
```

Андан кийин, `md/out/ol/v` мазмунду `v:` менен орнотулган URL префикс жолуна конфигурациялаңыз.

Акырында, **`/.v` `1s` аяктаган жолдун кэш убактысын конфигурациялаңыз** , антпесе жаңы чыккан мазмунга дароо кирүү мүмкүн эмес.

Керексиз суроо-талаптарды азайтуу үчүн башка жолдор үчүн кэш убактысын бир жылга же андан көп убакытка коюуга болот.

##### s3 Үчүн Хост Мазмуну

Өзүңүздүн + колдонуудан тышкары `CDN` мазмунду өз алдынча жайгаштыруу үчүн, дагы бир жалпы вариантты колдонуу керек `S3`

`S3` `S3` аласыз [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`/.v` менен аяктаган жолдун кэш убактысы `1s` болушу үчүн конфигурациялоону унутпаңыз `CDN`

### Сайтты Жарыялоо

Веб-сайтты каалаган жерге жайгаштырууга болот [github page](https://pages.github.com) жана [cloudflare page](https://pages.cloudflare.com) жакшы тандоо.

Веб-сайт [бир беттик колдонмонун](https://developer.mozilla.org/docs/Glossary/SPA) архитектурасын кабыл алгандыктан, камтылбаган URL жолун `. ` `index.html` кайра жазууну унутпаңыз.

Вебсайтка кирүү барагы бир жолу гана жайгаштырылышы керек жана кийинки мазмун жаңыртуулары үчүн веб-сайтка кирүү барагын кайра жайгаштыруунун кереги жок.

#### github Баракчасына Жайгаштыруу

Алгач [уюмду түзүү үчүн бул github басыңыз](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Анда бул уюмдун алдында кампа түзүңүз (Сураныч `i18n-demo.github.io` `i18n-demo` дегенди сиз түзгөн уюмдун аталышы менен алмаштырыңыз):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Мурунку макаладагы мазмунду жарыялоодо, ал түзүлдү `out/ol/htm` Сураныч, бул каталогго кирип, иштетиңиз :

```
ln -s index.html 404.html
```


Анткени `github page` URL жолун кайра жазууну колдобойт, андыктан анын ордуна `404.html` колдонулат.

Андан кийин `htm` төмөнкү команданы иштетиңиз ( `i18n-demo/i18n-demo.github.io.git` кампаңыздын дареги менен алмаштырууну унутпаңыз) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Кодду түрткөндөн кийин, `github page` күтүңүз (төмөндө көрсөтүлгөндөй), андан кийин ага кире аласыз.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Демо баракчаны көрүү үчүн:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### cloudflare Барагында Жайгаштыруу

[cloudflare page](//pages.cloudflare.com) менен салыштырганда `github page` ал жолду кайра жазууну камсыз кылат жана материктик Кытайга көбүрөөк ыңгайлуу жана аны колдонуу сунушталат.

`cloudflare page` Жайгаштыруу адатта жогорудагы `github page` жайгаштырууга негизделет.

Долбоорду түзүңүз жана жогорудагы `i18n-demo.github.io` байлаңыз.

Процесс төмөнкү сүрөттө көрсөтүлгөн:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Сураныч, `i18n-demo` уюмга уруксат берүү үчүн басыңыз `Add Account`

Эгер сиз башка уюмдун кампасын байлап алган болсоңуз, жаңы уюм көрсөтүлгөнгө чейин ага эки жолу уруксат берүү үчүн эки жолу басыңыз `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

Андан кийин `i18n-demo.github.io` тандаңыз, андан кийин `Begin setup` баскычын басыңыз жана кийинки кадамдар үчүн демейки маанилерди колдонуңуз.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Биринчи жолу байланыштыргандан кийин, ага кирүү үчүн бир нече мүнөт күтүшүңүз керек.

Жайгаштыргандан кийин, сиз жеке домен атын байлай аласыз.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Ыңгайлаштырылган домен атын байлагандан кийин, төмөндө көрсөтүлгөндөй, бир беттик тиркеменин жолду кайра жазуу жолун конфигурациялоо үчүн домендик атка өтүңүз:

<img alt="" src="https://p.3ti.site/1721119320.avif">

`i18n.site` сүрөттөгү эрежелер төмөндөгүдөй.

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

Андан тышкары, төмөндө көрсөтүлгөндөй кэш эрежелерин конфигурациялаңыз жана кэштин узактыгын бир айга коюңуз.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Сураныч, жогорудагы сүрөттө экинчи кадамга дал келген домендик аталышты сиз байлаган домен атына өзгөртүңүз.

#### Материк Кытайда Веб-Сайтты Жайгаштырууну Оптималдаштыруу

Эгер сиз материктик Кытайдын тармактык чөйрөсүндө жеткиликтүүлүктүн жакшыраак иштешине ээ болгуңуз келсе, алгач [домен атын каттаңыз](//beian.aliyun.com) .

`out/ol/htm` кийин `CDN` материктик Кытайдагы булут сатуучулардын объект сактагычын колдонуңуз +

[Baidu Smart Cloud сыяктуу бир беттик тиркемелерге ыңгайлашуу жолун кайра жазуу үчүн сиз кырдуу эсептөөнү колдоно аласыз `CDN`](//cloud.baidu.com/product/cdn.html) Аны төмөнкүдөй конфигурациялоого болот:

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

`MX` жана `CNAME` жазуулар бирге болушу мүмкүн `A` , эгер сиз бир эле учурда домендик аталыштагы электрондук каттарды алгыңыз келсе, [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` иштешиңиз керек.

Кошумчалай кетсек, материктик Кытайдагы булут сатуучуларынын чет элдик трафик төлөмдөрү салыштырмалуу кымбат болгондуктан, эгер сиз чыгымдарды оптималдаштырууну кааласаңыз, ага жетүү үчүн [Huawei DNS акысыз географиялык резолюциясын](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) жана [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ыңгайлаштырылган домен атын (төмөндө көрсөтүлгөндөй) колдонсоңуз болот трафиктин диверсиясы──Материк Кытайдагы трафик Baidu Cloud `CDN` эл аралык трафик cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Бул жайгаштырууну оптималдаштыруу чечимдери татаалыраак жана келечекте өзүнчө бөлүмдөрдө киргизилет.

#### Жалпы Домендик Аталышты Кайра Багыттоо

Эгер сиз веб-сайтты негизги веб-сайтыңыз катары түзүү үчүн `i18n.site` , адатта пан-домен багытын конфигурациялашыңыз керек, башкача айтканда, кирүү мүмкүнчүлүгүн `*.xxx.com` `xxx.com` анын ичинде `www.xxx.com` . .

Бул талапты Alibaba Cloud'тун `EdgeScript` ( [англисче документ](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Кытай документи](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) жардамы менен аткарууга болот `CDN`

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) домен атын кошуп, `*.xxx.com` атын Alibaba Cloud `CDN` `CNAME` га багыттаңыз.

<img alt="" src="https://p.3ti.site/1721122000.avif">

Мисалы, жогорудагы сүрөттө `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx Менен Жайгаштыруу

Сураныч `server` окшош конфигурацияны кошуңуз nginx мында `/root/i18n/md/out/ol/htm` аны өзүңүздүн `out/ol/htm` проектиңиздин жолуна өзгөртүңүз:

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Каталог Структурасы

#### Коомдук

Вебсайттын статикалык файлдары, мисалы `favicon.ico` `robots.txt` ж.б.

Бул жерде сөлөкөт файлдары менен түзүлүшү мүмкүн [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` астында `i18n.site` конфигурация файлдары, [котормо](/i18n.site/conf) кэши ж.б.

#### en

Конфигурация файлындагы `fromTo` `en` `.i18n/conf.yml` туура келген булак тил каталогу

```yaml
i18n:
  fromTo:
    en: zh
```

Котормо конфигурациясын караңыз [i18](/i18/use)

