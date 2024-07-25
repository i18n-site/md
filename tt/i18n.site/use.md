# Урнаштырыгыз &

## Конфигурация Билгесе

`i18` Тәрҗемә коралы урнаштырылган, зинһар `i18n.site` [монда басыгыз, керү токенын конфигурацияләү өчен `i18` документка мөрәҗәгать итегез](/i18/use) .

## Урнаштыру

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Демо Проекты

Демо проектыннан башлыйк һәм кулланырга өйрәник `i18n.site`

Без башта демо складны клонлаштырабыз һәм боерыкны түбәндәгечә эшлибез:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Кытай материкларында кулланучылар:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Код базасы клонының каталог исеме `docker` белән җирле алдан карау өчен `md` булырга тиеш `demo.i18n.site`

### Тәрҗемә Итү

Башта, `md` кертегез һәм `i18n.site` эшләгез, ул `en` тәрҗемә итәчәк `zh`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Йөгергәннән соң, `git add . ` һәм кэш файллары барлыкка киләчәк `md`

### Җирле Алдан Карау

Урнаштырыгыз һәм башлап `docker` ( `MAC` `docker` эш вакыты итеп кулланырга киңәш итәләр) [orbstack](https://orbstack.dev)

Аннары, `docker` керегез һәм `./up.sh` эшләгез, аннары керегез [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Эчтәлек Урнаштыру

[Бер битле кушымта](https://developer.mozilla.org/docs/Glossary/SPA) архитектурасын кабул итә `i18n.site` һәм вебсайтка керү бите һәм сайт эчтәлеге мөстәкыйль урнаштырылган.

Aboveгарыдагы тәрҗемәне эшләгәннән соң, `htm` һәм `v` каталоглар каталогта барлыкка киләчәк `md/out/dev`

Монда, аның `.i18n/htm/dev.yml` файлына нигезләнеп төзелгәнен күрсәтә `dev`

Эчтәлек : `dev`

Белешмәлек астында сайтка керү бите бар `htm`

Белешмәлектә версия номеры булган сайт эчтәлеге бар `v`

Localирле алдан карау версия номерына карамастан барлык файлларны каталогка күчерәчәк `out/dev/v/0.1.0`

Рәсми чыгару өчен үзгәртелгән файллар яңа версия номер каталогына күчереләчәк.

#### Конфигурация Файлын Күрсәтү Өчен -c Кулланыгыз

Төрле конфигурация файллары каталог астында тиешле каталоглар ясыйлар `out`

Мәсәлән, `out/ol` каталог булдырачак `.i18n/htm/ol.yml`

һәм `ol.yml` - килешенгән конфигурацияләр `dev.yml`

`dev` үсешнең мохитен күрсәтүче `development` кыскартуы, җирле алдан карау өчен кулланыла, һәм шулай ук ​​килешү конфигурациясе файлы.
`ol` он-лайн мохитне күрсәтүче `online` кыскартуы, рәсми чыгару өчен кулланыла, һәм шулай ук ​​бастырылган конфигурация файлы `npm` `-n` командование параметрын кулланып.

Сез шулай ук ​​конфигурация файлларын булдыра аласыз, конфигурация файлының исемен күрсәтү өчен `--htm_conf`

Мәсәлән:
```
i18n.site --htm_conf yourConfig --save
```

Монда яңарту версиясе номерын күрсәтә `--save`

#### <a rel=id href="#npm" id="npm"></a> Эчтәлекне npmjs.com сайтына бастырыгыз

Эчтәлекне бастыру - тәкъдим ителгән килешү чишелеше (карагыз [Front-end High Availability](/i18n.site/feature#ha) ) [npmjs.com](//npmjs.com)

##### Чыгару npm login &

Урнаштырыгыз `nodejs` Керү өчен `npm login` кулланыгыз.

Редакцияләгез `md/.i18n/htm/ol.yml` `i18n.site` `v: //unpkg.com/i18n.site` үзгәртегез `npm` пакет исеме.

Эшсез пакет исемен кулланыгыз [npmjs.com](//npmjs.com) вебсайтның домен исемен куллану - яхшы сайлау.

`npm` нигезләнеп бастырганда, `v:` кыйммәтенең префиксы `i18n.site` `/.v` **`//unpkg.com/`** .

Тәрҗемә итү һәм бастыру өчен каталогта `i18n.site --npm` яки `i18n.site -n` эшләгез `md`

Әгәр дә сез бастыру өчен өзлексез интеграция мохитен куллансагыз, аны урнаштырырга кирәкми `nodejs` Кергән һәм бастырылган `~/.npmrc` әйләнә-тирәгә күчерегез.

Пакет исемен `ol.yml` кертсәгез `v:` **зинһар, башта `.i18n/v/ol` бетерегез** , аннары бастырыгыз!

##### Прокси Сервер npm Тарафыннан Бастырылган

Әгәр Кытай материкларында кулланучылар челтәр проблемаларына очраса һәм `npm` бастыра алмасалар, прокси серверын конфигурацияләү өчен әйләнә-тирә `https_proxy` куя алалар.

Сезнең прокси сервер портыгыз дип уйлап `7890` сез яза аласыз:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Selfз-Үзеңне Урнаштырган Эчтәлек

Әгәр дә сез эчтәлекне урнаштырырга телисез икән, башта `md/.i18n/htm/ol.yml` һәм `v: //unpkg.com/i18n.site` `v: //i18n-v.xxx.com` URL префиксына үзгәртегез.

Белешмәлекне кертегез һәм эшләгез `md`

```
i18n.site --htm_conf ol --save
```

яки кыскарту

```
i18n.site -c ol -s
```

Аннары, эчтәлекне `md/out/ol/v` каталогындагы URL префикс юлына конфигурацияләгез `v:`

Ниһаять, **`/.v` `1s` тәмамланган юлның кэш вакытын конфигурацияләгез** , югыйсә яңа чыккан эчтәлеккә шунда ук кереп булмый.

Башка юллар өчен кэш вакыты кирәк булмаган үтенечләрне киметү өчен бер ел яки аннан да күбрәк вакытка куелырга мөмкин.

##### s3 Өчен Эчтәлек

Selfз `CDN` үзеңне кабул итү өчен, үз серверыңны кулланудан тыш, тагын бер киң таралган вариант + куллану `S3`

Сез [rclone](https://rclone.org) `S3` куллана аласыз, аннары түбәндәге сценарийга мөрәҗәгать итегез һәм үзгәртегез, һәм сез бастырган саен `S3` торган үзгәрешләрне күчерегез.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Конфигурацияләргә онытмагыз `CDN` Шулай итеп `/.v` белән тәмамланган юлның кэш вакыты `1s` була, югыйсә сез яңа чыккан эчтәлеккә шунда ук керә алмассыз.

### Сайтны Бастыру

Вебсайтны теләсә кайда урнаштырырга мөмкин [github page](https://pages.github.com) һәм [cloudflare page](https://pages.cloudflare.com) яхшы сайлау!

Вебсайт [бер битле кушымта](https://developer.mozilla.org/docs/Glossary/SPA) архитектурасын үзләштергәнгә, URL юлын `index.html` язарга онытмагыз `. `

Вебсайтка керү бите бер тапкыр гына урнаштырылырга тиеш, һәм алдагы эчтәлекне яңарту өчен вебсайтка керү битен яңадан кулланырга кирәкми.

#### github Битендә Урнаштырыгыз

Башта [монда басыгыз, оешма булдыру github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Аннары бу оешма астында склад булдырыгыз `i18n-demo.github.io` зинһар, `i18n-demo` сез ясаган оешма исеме белән алыштырыгыз):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Алдагы мәкаләдә эчтәлекне бастырганда, ул ясалган `out/ol/htm` Зинһар, бу каталогка керегез һәм эшләгез :

```
ln -s index.html 404.html
```


`github page` URL юлын яңадан язуны хупламый, шуңа күрә аның урынына `404.html` кулланыла!

Аннары түбәндәге боерыкны `htm` эшләгез ( `i18n-demo/i18n-demo.github.io.git` склад адресы белән алыштырырга онытмагыз) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

`github page` бастырганнан соң, урнаштыруны көтегез (аста күрсәтелгәнчә), аннары сез аңа керә аласыз!

<img src="//p.3ti.site/1721116586.avif" width="350px">

Демо бите өчен карагыз:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Болыт Утлары Битендә Урнаштырыгыз

[cloudflare page](//pages.cloudflare.com) `github page` ул юлны яңадан язуны тәэмин итә һәм Кытайның материкларына дусрак һәм куллану мөмкинлеге бар!

Урнаштыру гадәттә өстә `github page` урнаштыруга нигезләнә `cloudflare page`

Проект төзегез һәм югарыдагы складны бәйләгез `i18n-demo.github.io`

Процесс түбәндәге рәсемдә күрсәтелгән:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Зинһар, `i18n-demo` оешмага рөхсәт бирү өчен басыгыз `Add Account`

Әгәр дә сез бүтән оешманың складын бәйләгән булсагыз, яңа оешма күрсәтелгәнче ике тапкыр рөхсәт итәр өчен сезгә ике тапкыр басыгыз `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

Киләсе складны сайлагыз `i18n-demo.github.io` аннары `Begin setup` басыгыз, һәм алдагы адымнар өчен килешенгән кыйммәтләрне кулланыгыз.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Беренче тапкыр бәйләгәннән соң, аңа керер алдыннан берничә минут көтәргә кирәк.

Урнаштырганнан соң, сез махсус домен исемен бәйли аласыз.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Гадәттәге домен исемен бәйләгәннән соң, зинһар, домен исеменә керегез, бер битле кушымтаны юлны яңадан язу өчен, аста күрсәтелгәнчә:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Aboveгарыдагы рәсемдәге кагыйдәләр түбәндәгечә `i18n.site` домен исеме белән бәйләнгән беренче юлда.

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

Моннан тыш, зинһар, кэш кагыйдәләрен конфигурацияләгез, аста күрсәтелгәнчә, һәм кэш озынлыгын бер айга куегыз.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Зинһар, югарыдагы рәсемнең икенче адымында туры килгән домен исемен сез бәйләгән домен исеменә үзгәртегез.

#### Кытай Материкларында Вебсайт Урнаштыруны Оптимальләштерү

Әгәр дә сез Кытай материкларының челтәр мохитендә яхшырак мөмкинлек алырга телисез икән, зинһар, башта [домен исемен теркәгез](//beian.aliyun.com) .

`out/ol/htm` `CDN` Кытайның материкларында болыт сатучыларның объект саклагычын кулланыгыз +

Сез [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) кебек бер битле кушымталарга җайлашу юлын яңадан язу өчен кырлы исәпләү куллана аласыз, аны шулай конфигурацияләргә мөмкин:

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

`MX` язмалар һәм `CNAME` язмалар бергә яши алмый, бер үк вакытта домен исеме электрон почталарын алырга теләсәгез, [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) скрипты белән хезмәттәшлек итәргә кирәк `A` рекорд `CNAME`

Моннан тыш, Кытайның материкларында болыт сатучыларның чит илдәге трафик түләүләре чагыштырмача кыйммәт, чөнки чыгымнарны оптимальләштерергә теләсәгез, [Huawei DNS бушлай географик резолюциясе](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) һәм [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) махсус домен исемен куллана аласыз трафикны юнәлтү - Кытай материкларында трафик Baidu Cloud `CDN` халыкара трафик cloudflare бара.

<img alt="" src="https://p.3ti.site/1721119788.avif">

Бу урнаштыру оптимизация чишелешләре катлаулырак һәм киләчәктә аерым бүлекләрдә кертеләчәк.

#### Генераль Домен Исемен Юнәлтү

Әгәр сез вебсайтны төп вебсайт итеп ясау өчен `i18n.site` , гадәттә пан-доменга юнәлтүне конфигурацияләргә кирәк, ягъни `*.xxx.com` (шул исәптән `www.xxx.com` ) рөхсәтен юнәлтү `xxx.com`

Бу таләп Алибаба Болыт ярдәмендә `EdgeScript` ( [Инглиз документы](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Кытай документы](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ярдәмендә ирешеп була `CDN`

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) домен исемен өстәгез һәм `*.xxx.com` исемен Alibaba Cloud `CDN` ' `CNAME` күрсәтегез.

<img alt="" src="https://p.3ti.site/1721122000.avif">

Мәсәлән, пан-домен исемен юнәлтү конфигурациясе `*.i18n.site` рәсемдә:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx Белән Урнаштырыгыз

Зинһар, `server` охшаган конфигурацияне өстәгез nginx монда `/root/i18n/md/out/ol/htm` зинһар, аны үз проектыгыз юлына үзгәртегез `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Белешмәлек Структурасы

#### Җәмәгать

Вебсайтның статик файллары, мәсәлән `favicon.ico` `robots.txt` Һ.б.

Мондагы иконка файллары белән ясалырга мөмкин [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` астында `i18n.site` конфигурация файллары, тәрҗемә кэшы һ.б. [детальләр](/i18n.site/conf) өчен киләсе бүлекне карагыз.

#### en

Конфигурация файлындагы `fromTo` `en` `.i18n/conf.yml` туры килгән чыганак тел каталогы

```yaml
i18n:
  fromTo:
    en: zh
```

Зинһар, тәрҗемә конфигурациясенә мөрәҗәгать итегез [i18](/i18/use)

