# Инсталирајте &

## Токен За Конфигурација

`i18n.site` `i18` [`i18`](/i18/use)

## Инсталирајте

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Демо Проект

Да почнеме со демо проект и да научиме како да го користиме `i18n.site`

Прво го клонираме демо складиштето и ја извршуваме командата на следниов начин:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Корисниците во Кина можат:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Името на директориумот на основниот клон на кодот мора да биде `md` за да се олесни локалниот преглед со `docker` `demo.i18n.site`

### Преведи

Прво, `en` `i18n.site` `zh` `md`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

По извршувањето, ќе се генерираат датотеките за превод и кеш, Ве молиме не заборавајте да ги додадете во складиштето `git add . ` во `md` .

### Локален Преглед

Инсталирајте и `docker` ( `MAC` препорачуваат користење [orbstack](https://orbstack.dev) како време на траење од `docker` ).

Потоа [https://127.0.0.1](https://127.0.0.1) внесете `./up.sh` директориумот `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Објавувајте Содржина

`i18n.site` архитектура [на апликација на една страница](https://developer.mozilla.org/docs/Glossary/SPA) , а влезната страница и содржината на веб-локацијата се распоредуваат независно.

По извршувањето на горенаведениот превод, директориумите `htm` и `v` ќе се генерираат во директориумот `md/out/dev`

Овде `dev` означува дека е изграден врз основа на датотеката `.i18n/htm/dev.yml` .

Под : `dev`

Под директориумот `htm` влезната страница на веб-страницата.

`v` ја содржи содржината на веб-локацијата со број на верзијата.

Локалниот преглед ќе ги копира сите датотеки во директориумот `out/dev/v/0.1.0`

За официјално објавување, променетите датотеки ќе бидат копирани во директориумот со броеви на новата верзија.

#### Користете -c За Да Ја Наведете Конфигурациската Датотека

Различни конфигурациски датотеки ќе создадат соодветни директориуми под директориумот `out`

На пример `.i18n/htm/ol.yml` ќе создаде `out/ol` директориум.

`dev.yml` и `ol.yml` се стандардните конфигурации.

`dev` `development`
`ol` `online` `-n` `npm`

Можете исто така да креирате други конфигурациски датотеки Користете го `--htm_conf`

на пример:
```
i18n.site --htm_conf yourConfig --save
```

`--save` го означува бројот на верзијата на ажурирањето.

#### <a rel=id href="#npm" id="npm"></a> Објавувајте содржина на npmjs.com

Објавувањето [содржина](/i18n.site/feature#ha) на [npmjs.com](//npmjs.com)

##### npm login &

Инсталирај `nodejs` користете `npm login` за да се најавите.

Уреди `md/.i18n/htm/ol.yml` сменете го `i18n.site` во `v: //unpkg.com/i18n.site` во ваше `npm` име на пакетот.

Само користете го незафатеното име на пакетот [npmjs.com](//npmjs.com)

Кога `i18n.site` врз основа на `npm` `/.v` **не заборавајте да користите `//unpkg.com/`** како префикс на вредноста `v:` .

Стартувај `i18n.site --npm` или `i18n.site -n` во `md` за да го преведеш и објавиш.

Ако користите континуирана интеграциска средина за објавување, нема потреба да ја `nodejs` Само копирајте ја најавената и објавената дозвола `~/.npmrc` во околината.

Ако го измените името на пакетот во `v:` `ol.yml` , **не заборавајте прво да го избришете `.i18n/v/ol` ,** а потоа да го објавите.

##### Прокси-Сервер Објавен Од npm

Ако корисниците во Кина наидат на проблеми со мрежата и не можат да `npm` објават пакетот, тие можат да ја постават променливата на околината `https_proxy` за да го конфигурираат прокси-серверот.

Претпоставувајќи дека вашата порта за прокси-сервер е `7890` можете да напишете:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Само-Домаќина Содржина

Ако сакате сами да ја хостирате содржината, прво уредете `md/.i18n/htm/ol.yml` и сменете го `v: //unpkg.com/i18n.site` во префиксот на URL-то, како што е `v: //i18n-v.xxx.com` .

Внесете го директориумот `md`

```
i18n.site --htm_conf ol --save
```

или кратенка

```
i18n.site -c ol -s
```

Потоа, конфигурирајте ја содржината во `md/out/ol/v` на патеката на префиксот URL поставена во `v:` .

Конечно, **конфигурирајте го времето на кешот на патеката `/.v` завршува на `1s`** , во спротивно не може веднаш да се пристапи до новообјавената содржина.

Времето на кешот за други патеки може да се постави на една година или повеќе за да се намалат непотребните барања.

##### Домаќин На Содржината На s3

За само-домаќин `CDN` содржината, покрај користењето на вашиот сопствен сервер, друга вообичаена опција е да користите + `S3`

Можете да `S3` користите `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Запомнете да го конфигурирате `CDN` така што времето за кеширање на патеката што завршува на `/.v` е `1s` , во спротивно нема да можете веднаш да пристапите до новообјавената содржина.

### Објави Веб-Страница

Веб-страницата може да се распореди насекаде [github page](https://pages.github.com) и [cloudflare page](https://pages.cloudflare.com) се добри избори.

Бидејќи веб-локацијата ја прифаќа архитектурата на [апликација од една страница](https://developer.mozilla.org/docs/Glossary/SPA) , не заборавајте да ја преработите патеката за URL што не `. ` до `index.html` .

Страницата за влез на веб-локација треба да се распореди само еднаш, и нема потреба повторно да се распореди страницата за влез на веб-локација за последователни ажурирања на содржината.

#### Распоредете На Страницата github

Прво [кликнете github за да креирате организација](https://github.com/account/organizations/new?plan=free) Следното име на организацијата е `i18n-demo`

Потоа креирајте складиште под оваа `i18n-demo.github.io` (Ве молиме заменете го `i18n-demo` со името на организацијата што сте го создале):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Кога ја објавувате содржината во претходната статија, таа е генерирана `out/ol/htm` Ве молиме внесете го овој директориум и стартувајте :

```
ln -s index.html 404.html
```


Бидејќи `github page` не поддржува препишување на патеката на URL-то, па наместо тоа се користи `404.html` .

Потоа извршете `i18n-demo/i18n-demo.github.io.git` следнава команда во `htm` :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Откако ќе го притиснете кодот, почекајте успешно да се изврши распоредувањето на `github page` (како што е прикажано подолу), а потоа можете да му пристапите.

<img src="//p.3ti.site/1721116586.avif" width="350px">

За демо-страница погледнете:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Распоредете На Страницата cloudflare

Во споредба [cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` обично се заснова на распоредувањето на `github page` погоре.

Направете проект и поврзете го горенаведеното `i18n-demo.github.io`

Процесот е прикажан на сликата подолу:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`Add Account` молиме кликнете за да дозволите пристап до `i18n-demo` организацијата.

Ако сте го врзале складиштето на друга организација, можеби ќе треба да `Add Account` двапати за да го овластите двапати пред да се прикаже новата организација.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Следно `i18n-demo.github.io` изберете Warehouse, потоа кликнете `Begin setup` и користете ги стандардните вредности за следните чекори.

<img alt="" src="https://p.3ti.site/1721118490.avif">

По првото врзување, треба да почекате неколку минути пред да можете да му пристапите.

По распоредувањето, можете да поврзете сопствено име на домен.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Откако ќе го поврзете приспособеното име на домен, одете до името на доменот за да го конфигурирате препишувањето на патеката на апликацијата на една страница, како што е прикажано подолу:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Правилата на сликата погоре се како што следува `i18n.site`

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

Дополнително, ве молиме конфигурирајте ги правилата за кешот, како што е прикажано подолу, и поставете го времетраењето на кешот на еден месец.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Променете го името на доменот што се совпаѓа во вториот чекор на сликата погоре во името на доменот што го врзавте.

#### Оптимизирање На Распоредувањето На Веб-Страниците Во Кина

Ако сакате да добиете подобри перформанси за пристапност во мрежното опкружување на континентална Кина, прво [регистрирајте име на домен](//beian.aliyun.com) .

Потоа, користете `out/ol/htm` складирањето `CDN` објектите на продавачите на облак во Кина +

Можете да го користите edge computing за да ја преработите патеката за прилагодување на апликациите на една страница, како што е [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

`CNAME` `MX` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` `A`

Дополнително, бидејќи трошоците за прекуокеански сообраќај на продавачите на облак во Кина се релативно скапи, ако сакате да ги оптимизирате трошоците, можете да ја користите [бесплатната географска резолуција на Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) и приспособеното име на доменот на [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (како што е прикажано подолу). пренасочување на сообраќајот──Сообраќај во континентална Кина Baidu Cloud `CDN` меѓународниот сообраќај оди cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Овие решенија за оптимизација на распоредувањето се посложени и ќе бидат воведени во посебни поглавја во иднина.

#### Пренасочување На Генеричко Име На Домен

`*.xxx.com` `www.xxx.com` `i18n.site` `xxx.com`

Ова барање може да се постигне со помош на Alibaba `CDN` `EdgeScript` ( [англиски документ](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [кинески документ](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Додадете име на домен во [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) и посочете го `*.xxx.com` на доменот на `CNAME` на Alibaba Cloud `CDN` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

На пример, конфигурацијата за пренасочување `*.i18n.site` пан-доменот на сликата погоре е како што следува:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Распоредете Со nginx

Ве молиме додадете конфигурација слична на следнава во `server` nginx каде што `/root/i18n/md/out/ol/htm` ве молиме сменете ја на патеката на вашиот сопствен проект `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Структура На Директориумот

#### Јавен

Статични датотеки на веб-локацијата, како што се `favicon.ico` `robots.txt` , итн.

Датотеките со икони овде може да се генерираат со [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

Под `.i18n` се конфигурациските датотеки на `i18n.site` , кешот за превод итн [.](/i18n.site/conf)

#### Mk

Директориум на изворниот јазик, што одговара `.i18n/conf.yml` `fromTo` `en` во конфигурациската датотека

```yaml
i18n:
  fromTo:
    en: zh
```

Ве молиме погледнете ја конфигурацијата на преводот [i18](/i18/use)

