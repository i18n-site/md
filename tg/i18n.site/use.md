# Насб Кунед &

## Токени Конфигуратсия

`i18n.site` Асбоби тарҷумаи `i18` дарунсохт аст, лутфан [ин ҷоро клик кунед, то ба ҳуҷҷати `i18` барои танзим кардани аломати дастрасӣ муроҷиат кунед](/i18/use) .

## Насб Кунед

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Лоиҳаи Намоишӣ

Биёед бо лоиҳаи намоишӣ оғоз кунем ва чӣ тавр истифода бурдани `i18n.site`

Мо аввал анбори намоиширо клон мекунем ва фармонро ба таври зерин иҷро мекунем:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Истифодабарандагон дар қитъаи Чин метавонанд:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Номи директорияи клони асосии код бояд `md` бошад `demo.i18n.site` то пешнамоиши маҳаллӣ бо `docker` .

### Тарҷума Кунед

Аввалан, `md` ворид кунед ва `i18n.site` иҷро кунед, ки `en` ба `zh` !

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Пас аз кор кардан, файлҳои тарҷума ва кэш тавлид мешаванд, лутфан онҳоро ба репозиторий `git add . ` дар феҳристи `md`

### Пешнамоиши Маҳаллӣ

`MAC` кунед ва `docker` [orbstack](https://orbstack.dev) `docker`

Пас, `docker` ворид кунед ва `./up.sh` иҷро кунед ва сипас ба таври маҳаллӣ дидан [https://127.0.0.1](https://127.0.0.1) .

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Мазмуни Интишор

`i18n.site` Меъмории [як саҳифаи барномаро](https://developer.mozilla.org/docs/Glossary/SPA) қабул мекунад ва саҳифаи вуруди вебсайт ва мундариҷаи вебсайт мустақилона ҷойгир карда мешаванд.

Пас аз иҷро кардани тарҷумаи дар боло зикршуда, директорияҳои `htm` ва `v` дар директорияи `md/out/dev`

Дар ин ҷо `dev` нишон медиҳад, ки он дар асоси файли `.i18n/htm/dev.yml` сохта шудааст.

`dev` :

`htm` зери директория саҳифаи даромадгоҳи вебсайт ҷойгир аст.

`v` мундариҷаи вебсайтро бо рақами версия дорад.

Пешнамоиши маҳаллӣ новобаста аз рақами версия ҳама файлҳоро ба директорияи `out/dev/v/0.1.0`

Барои нашри расмӣ, файлҳои тағирёфта ба феҳристи рақами версияи нав нусхабардорӣ карда мешаванд.

#### Барои Муайян Кардани Файли Конфигуратсия -c -Ро Истифода Баред

Файлҳои конфигуратсияи гуногун дар зери директорияи `out`

`out/ol` , `.i18n/htm/ol.yml`

`dev.yml` ва `ol.yml` конфигуратсияҳои пешфарз мебошанд.

`dev` ихтисораи `development` аст, ки муҳити таҳияро ифода мекунад, барои пешнамоиши маҳаллӣ истифода мешавад ва инчунин файли конфигуратсияи пешфарз аст.
`ol` ихтисораи `online` аст, ки муҳити онлайнро ифода мекунад, барои нашри расмӣ истифода мешавад ва инчунин файли конфигуратсияи пешфарз ҳангоми интишори `npm` бо истифода аз параметри сатри фармон `-n` .

Шумо инчунин метавонед файлҳои дигари конфигуратсияро барои муайян кардани номи файли конфигуратсия `--htm_conf` баред.

барои намуна:
```
i18n.site --htm_conf yourConfig --save
```

Дар ин `--save` рақами версияи навсозӣ нишон дода шудааст.

#### <a rel=id href="#npm" id="npm"></a> Мундариҷаро дар npmjs.com нашр кунед

Интишори [мундариҷа](/i18n.site/feature#ha) барои [npmjs.com](//npmjs.com)

##### Озод npm login &

Насб кунед `nodejs` барои ворид шудан `npm login` истифода баред.

Таҳрир кунед `md/.i18n/htm/ol.yml` `i18n.site` дар `v: //unpkg.com/i18n.site` ба худ иваз кунед `npm` номи баста.

Танҳо номи бастаи бебандро истифода баред [npmjs.com](//npmjs.com) ки номи домени вебсайтро интихоб кунед.

`i18n.site` `v:` `/.v` **`//unpkg.com/`** `npm`

`i18n.site --npm` ё `i18n.site -n` дар `md` иҷро кунед, то тарҷума ва нашр кунед.

Агар шумо барои интишор муҳити пайвастаи ҳамгироӣ истифода баред, лозим нест, ки онро насб кунед `nodejs` танҳо иҷозати воридшуда ва нашршударо `~/.npmrc` ба муҳити атроф нусхабардорӣ кунед!

Агар шумо номи бастаро дар `v:` дар `ol.yml` тағир диҳед, лутфан **аввал `.i18n/v/ol` нест кунед** ва сипас онро нашр кунед.

##### Сервери Прокси Аз Ҷониби npm Нашр Шудааст

Агар корбарон дар қитъаи Чин ба мушкилоти шабака дучор шаванд ва `https_proxy` бастаи `npm`

Фарз мекунем, ки порти прокси сервери шумо `7890` шумо метавонед нависед:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Мазмуни Худидоракунӣ

Агар шумо хоҳед, ки мундариҷаро худаш ҷойгир кунед, аввал таҳрир `md/.i18n/htm/ol.yml` ва `v: //unpkg.com/i18n.site` ба префикси URL-и худ иваз кунед, ба монанди `v: //i18n-v.xxx.com` .

`md` ворид кунед ва иҷро кунед

```
i18n.site --htm_conf ol --save
```

ё ихтисорот

```
i18n.site -c ol -s
```

Сипас, мундариҷаро дар директорияи `md/out/ol/v` ба роҳи префикси дар `v:` муқарраршуда танзим кунед.

Ниҳоят, **вақти кэши бо `1s` `/.v` анҷомёфтаро танзим кунед** , вагарна ба мундариҷаи тозанашршуда фавран дастрасӣ пайдо кардан мумкин нест.

Барои кам кардани дархостҳои нолозим вақти кэш барои дигар роҳҳо метавонад як сол ё бештар аз он муқаррар карда шавад.

##### Мазмуни Мизбон Ба s3

Барои худидоракунии мундариҷа, ба ғайр аз истифодаи сервери худ, `CDN` варианти маъмули `S3` +

Шумо метавонед `S3` истифода баред [rclone](https://rclone.org) ба скрипти зер муроҷиат кунед ва онро тағир диҳед ва ҳар дафъае, ки шумо интишор мекунед, танҳо тағиротро ба `S3` нусхабардорӣ кунед.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Фаромӯш `1s` `/.v` ки конфигуратсия кунед `CDN`

### Вебсайтро Нашр Кунед

Вебсайтро [github page](https://pages.github.com) ҳама ҷо ҷойгир кардан мумкин аст ва [cloudflare page](https://pages.cloudflare.com) интихоби хуб аст.

Азбаски вебсайт меъмории [замимаи яксаҳифаро](https://developer.mozilla.org/docs/Glossary/SPA) қабул мекунад, дар хотир доред, ки роҳи URL-ро, ки дорои `index.html` нест `. ` аз нав нависед.

Саҳифаи вуруди вебсайт бояд танҳо як маротиба ҷойгир карда шавад ва барои навсозиҳои минбаъдаи мундариҷа дубора ҷойгир кардани саҳифаи вуруди вебсайт лозим нест.

#### Дар Саҳифаи github Ҷойгир Кунед

[Барои сохтани созмон аввал ин ҷо клик github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Пас дар зери ин созмон анбор эҷод кунед `i18n-demo.github.io` Лутфан `i18n-demo` бо номи созмоне, ки шумо сохтаед, иваз кунед):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Ҳангоми нашри мундариҷа дар мақолаи қаблӣ, он тавлид шудааст `out/ol/htm` лутфан ин феҳристро ворид кунед ва иҷро кунед :

```
ln -s index.html 404.html
```


Зеро `github page` азнавнависии роҳи URL-ро пуштибонӣ намекунад, бинобар ин ба ҷои он `404.html` истифода мешавад.

Пас фармони зеринро дар `htm` иҷро кунед (дар хотир доред, ки `i18n-demo/i18n-demo.github.io.git` бо суроғаи анбори худ иваз кунед) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Пас аз пахш кардани код, интизор шавед, ки ҷойгиркунии `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Барои саҳифаи намоишӣ лутфан нигаред:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Дар Саҳифаи cloudflare Ҷойгир Кунед

Дар муқоиса [cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` одатан ба ҷойгиркунии `github page` дар боло асос ёфтааст.

Лоиҳа эҷод кунед ва анбори болоро бибандед `i18n-demo.github.io`

Раванд дар расми зерин нишон дода шудааст:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Лутфан, клик кунед `Add Account` то дастрасӣ ба `i18n-demo` диҳед.

Агар шумо анбори ташкилоти дигарро баста бошед, ба шумо лозим меояд `Add Account` ки ду маротиба клик кунед, то ки ташкилоти нав намоиш дода шавад.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Баъдан Анбор `i18n-demo.github.io` интихоб кунед, пас `Begin setup` клик кунед ва барои қадамҳои минбаъда арзишҳои пешфарзро истифода баред.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Пас аз бастани бори аввал, шумо бояд чанд дақиқа интизор шавед, то дастрас шавед.

Пас аз ҷойгиркунӣ, шумо метавонед номи домени фармоиширо пайваст кунед.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Пас аз бастани номи домени фармоишӣ, лутфан ба номи домен гузаред, то роҳи азнавнависии замимаи яксаҳифаро танзим кунед, тавре ки дар зер нишон дода шудааст:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Қоидаҳои `i18n.site` боло овардашуда чунинанд.

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

Илова бар ин, лутфан қоидаҳои кэшро тавре ки дар зер нишон дода шудааст, танзим кунед ва давомнокии кэшро то як моҳ муқаррар кунед.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Лутфан номи доменеро, ки дар қадами дуюми расми боло мувофиқ аст, ба номи домени пайвасткардаатон иваз кунед.

#### Оптимизатсияи Ҷойгиркунии Вебсайт Дар Материкии Чин

Агар шумо хоҳед, ки дар муҳити шабакавии материкии Чин иҷрои беҳтари дастрасӣ ба даст оред, лутфан аввал [номи доменро сабти ном кунед](//beian.aliyun.com) .

Пас, захираи объекти фурӯшандагони абрро дар `out/ol/htm` Чин истифода `CDN` +

Шумо метавонед компютери канориро барои аз нав навиштани роҳ барои мутобиқ шудан ба замимаҳои яксаҳифа истифода баред, ба монанди [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) Онро чунин танзим кардан мумкин аст:

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

Барои он `MX` сабтҳо ва `CNAME` сабтҳо якҷоя вуҷуд дошта бошанд, агар шумо хоҳед, ки дар як вақт мактубҳои номҳои доменӣ гиред, шумо бояд бо скрипт барои ҳамвор кардани `CNAME` `A` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Илова бар ин, азбаски пардохти трафики фурӯшандагони абрӣ дар хориҷа дар Чин нисбатан гарон аст, агар шумо хоҳед, ки хароҷотро оптимизатсия кунед, барои ноил шудан ба [ҳалли ройгони ҷуғрофии Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ва номи домени [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (тавре ки дар зер нишон дода шудааст) истифода баред диверсификатсияи трафик──Трафик дар материкии Чин Baidu Cloud `CDN` трафики байналмилалӣ меравад cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Ин қарорҳои оптимизатсияи густариш мураккабтаранд ва дар оянда дар бобҳои алоҳида муаррифӣ хоҳанд шуд.

#### Бозгашти Номи Домейнҳои Умумӣ

Агар шумо барои тавлиди вебсайт ҳамчун вебсайти асосии худ `i18n.site` баред, одатан ба шумо лозим аст, ки масири пан-доменро танзим кунед, яъне масири `*.xxx.com` (аз ҷумла `www.xxx.com` ) ба `xxx.com` .

Ин талаботро метавон бо ёрии Alibaba Cloud `EdgeScript` ( [ҳуҷҷати инглисӣ](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Ҳуҷҷати Чин](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) иҷро кард `CDN`

Номи домейнро дар [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) илова кунед ва `*.xxx.com` доменро ба `CNAME` Alibaba Cloud `CDN` ишора кунед.

<img alt="" src="https://p.3ti.site/1721122000.avif">

Масалан, конфигуратсияи масири номи пандомени `*.i18n.site` дар расми боло чунин аст:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Бо nginx Ҷойгир Кунед

Лутфан конфигуратсияи шабеҳро дар `server` илова кунед nginx ки дар он `/root/i18n/md/out/ol/htm` лутфан онро ба роҳи лоиҳаи худ `out/ol/htm` иваз кунед:

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Сохтори Директория

#### Оммавй

Файлҳои статикии вебсайт, ба монанди `favicon.ico` `robots.txt` , ва ғайра.

Файлҳои нишонаҳоро дар ин ҷо метавон бо [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

Дар зери феҳрист файлҳои конфигуратсияи `i18n.site` , кэши тарҷума ва ғайра мавҷуданд `.i18n` Барои тафсилот ба боби навбатии ["Танзимот"](/i18n.site/conf) нигаред.

#### T

Феҳристи забони манбаъ, ки `.i18n/conf.yml` `fromTo` `en` дар файли конфигуратсия мувофиқ аст

```yaml
i18n:
  fromTo:
    en: zh
```

Лутфан ба конфигуратсияи тарҷума муроҷиат кунед [i18](/i18/use)

