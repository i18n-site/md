# Инсталиране и Разполагане

## Конфигурация на Токен

`i18n.site` включва вградения инструмент за превод `i18`. Моля, [натиснете тук](/i18/use), за да се обърнете към документацията на `i18`, за да конфигурирате маркера за достъп.

## Инсталиране

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Демонстрационен проект

Нека започнем с демонстрационния проект, за да научим как да използваме `i18n.site`.

Първо клонираме демонстрационното хранилище с командата:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Потребителите в Китай могат:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Името на директорията за клонирания код на `demo.i18n.site` трябва да бъде `md`, за да улесним локалния преглед с `docker`.

### Превод

Първо влезте в директорията `md` и стартирайте `i18n.site`, което ще преведе `en` на `zh`.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

След стартиране ще бъдат генерирани преводни и кешови файлове. Не забравяйте да добавите ги към хранилището с `git add .` в директорията `md`.

### Локален Преглед

Инсталирайте и стартирайте `docker` ( `MAC` потребител препоръчва използването на [orbstack](https://orbstack.dev) като време за изпълнение за `docker` ).

След това влезте в директорията `docker` и стартирайте `./up.sh`, след което посетете [https://127.0.0.1](https://127.0.0.1) за локален преглед.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Публикуване на Съдържание

`i18n.site` приема архитектура [на едностранично приложение](https://developer.mozilla.org/docs/Glossary/SPA) , а страницата за вход на уебсайта и съдържанието на уебсайта се разполагат независимо.

След превода ще бъдат генерирани директориите `htm` и `v` в директорията `md/out/dev`.

Тук `dev` означава, че е изграден въз основа на конфигурационния файл `.i18n/htm/dev.yml`.

В директорията `dev`:

Директорията `htm` съдържа входната страница на уебсайта.

Директорията `v` съдържа съдържанието на уебсайта с версии.

При локален преглед файловете се копират в директорията `out/dev/v/0.1.0`.

При официално публикуване променените файлове ще бъдат копирани в нова версия.

#### Използвайте -C, За Да Посочите Конфигурационния Файл

Различни конфигурационни файлове ще създадат съответните директории в директорията `out`.

Например, `.i18n/htm/ol.yml` ще създаде директорията `out/ol`.

`dev.yml` и `ol.yml` са конфигурациите по подразбиране.

`dev` е съкращение на `development`, което означава среда за разработка, използвана за локален преглед и е конфигурацията по подразбиране.
`ol` е съкращение на `online`, което означава онлайн среда, използвана за официално публикуване и е конфигурацията по подразбиране при използване на параметъра `-n` за публикуване в `npm`.

Можете също да създадете други конфигурационни файлове и да използвате параметъра `--htm_conf`, за да посочите името на конфигурационния файл:

например:
```
i18n.site --htm_conf yourConfig --save
```

Тук `--save` означава актуализиране на версията.

#### <a rel=id href="#npm" id="npm"></a> Публикуване на Съдържание в npmjs.com

Публикуването на съдържание в [npmjs.com](//npmjs.com) е препоръчителният метод по подразбиране (вижте [Висока Достъпност на Предния Край](/i18n.site/feature#ha)).

##### npm login & Публикуване

Инсталирайте `nodejs` и използвайте `npm login`, за да се логнете.

Редактирайте файла `md/.i18n/htm/ol.yml` и променете `i18n.site` в `v: //unpkg.com/i18n.site` на вашето собствено име на `npm` пакет.

Използвайте незаето име на пакет на [npmjs.com](//npmjs.com), като например името на вашия сайт.

Когато публикувате на базата на `npm` пакет, **уверете се, че използвате префикса `//unpkg.com/` за стойността на `v:`**. `i18n.site` е оптимизирал времето на кеша за пътищата `/.v` под този префикс, за да осигури своевременно преглеждане на новите версии.

В директорията `md` стартирайте `i18n.site --npm` или `i18n.site -n`, за да преведете и публикувате.

Ако използвате среда за непрекъсната интеграция за публикуване, не е необходимо да инсталирате `nodejs`. Просто копирайте файла `~/.npmrc` с разрешения за влизане и публикуване в средата.

Ако промените името на пакета от `v:` в `ol.yml` , моля, **не забравяйте първо да изтриете `.i18n/v/ol`** и след това да го публикувате.

##### Прокси Сървър за Публикуване на npm

Потребителите в Китай, които срещат мрежови проблеми при публикуване на `npm` пакет, могат да конфигурират променливата `https_proxy` за използване на прокси сървър.

Ако портът на вашия прокси сървър е `7890`, можете да конфигурирате така:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Самостоятелно Хостване на Съдържание

Ако искате да хоствате съдържанието самостоятелно, първо редактирайте файла `md/.i18n/htm/ol.yml` и променете `v: //unpkg.com/i18n.site` на вашия URL префикс, например `v: //i18n-v.yourdomain.com`.

Влезте в директорията `md` и стартирайте:

```
i18n.site --htm_conf ol --save
```

или в кратка форма:

```
i18n.site -c ol -s
```

След това конфигурирайте съдържанието в директорията `md/out/ol/v` към URL префикса, зададен в `v:`.

И накрая, **конфигурирайте времето на кеша за пътищата, завършващи на `/.v`, на `1s`**. В противен случай новоиздаденото съдържание няма да бъде достъпно веднага.

Времето на кеша за други пътища може да бъде зададено на една година или повече, за да се намалят ненужните заявки.

##### Хостване на Съдържание в S3

Самостоятелното хостване на съдържание може да се осъществи не само чрез вашия собствен сървър, но и чрез използването на `S3` и `CDN`.

Можете да използвате [rclone](https://rclone.org) за влизане в сървъра `S3` и да модифицирате следния скрипт, за да копирате само постепенните промени в `S3` при всяко публикуване.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Не забравяйте да конфигурирате `CDN`, за да зададете времето на кеша за пътищата, завършващи на `/.v`, на `1s`, за да осигурите своевременно преглеждане на новоиздаденото съдържание.

### Публикуване на Уебсайт

Уебсайтът може да бъде публикуван на различни платформи като [GitHub Pages](https://pages.github.com) и [Cloudflare Pages](https://pages.cloudflare.com).

Тъй като уебсайтът използва архитектура [на едностранично приложение](https://developer.mozilla.org/docs/Glossary/SPA) , не забравяйте да пренапишете URL пътища, които не съдържат `. ` до `index.html` .

Входната страница на уебсайта трябва да бъде публикувана само веднъж и няма нужда да се repubликува при последващи актуализации на съдържанието.

#### Публикуване на GitHub Pages

Първо [създайте организация в GitHub](https://github.com/account/organizations/new?plan=free). Нека приемем, че името на организацията е `i18n-demo`.

След това създайте хранилището `i18n-demo.github.io` под тази организация (заместете `i18n-demo` с името на вашата организация):

![](https://p.3ti.site/1721098657.avif)

След като сте публикували съдържанието, ще бъде генерирана директорията `out/ol/htm`. Влезте в тази директория и стартирайте:

```
ln -s index.html 404.html
```


Тъй като `github page` не поддържа пренаписване на URL пътя, вместо това се използва `404.html` .

След това в директорията `htm` стартирайте следната команда (заместете `i18n-demo/i18n-demo.github.io.git` с вашия адрес на хранилище):

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

След като натиснете кода, изчакайте внедряването на `github page` да се изпълни успешно (както е показано по-долу), преди да имате достъп до него.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Демонстрационната страница може да бъде видяна на:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Публикуване на Cloudflare Pages

[cloudflare page](//pages.cloudflare.com) предлага пренаписване на пътя и е по-удобен за континентален Китай, в сравнение с `github page` и е по-лесен за използване.

Разгръщането на `cloudflare page` обикновено се основава на разгръщането на `github page` по-горе.

Създайте проект и обвържете хранилището `i18n-demo.github.io`.

Процесът е показан на фигурата по-долу:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Натиснете `Add Account`, за да предоставите достъп на организацията `i18n-demo`.

Ако сте обвързали хранилища на други организации, може да се наложи да натиснете два пъти `Add Account`, за да упълномощите два пъти, преди да се покаже новата организация.

![](https://p.3ti.site/1721118306.avif)

Изберете хранилището `i18n-demo.github.io` и натиснете `Begin setup`. За следващите стъпки използвайте стойностите по подразбиране.

![](https://p.3ti.site/1721118490.avif)

След първото свързване трябва да изчакате няколко минути, преди да можете да го посетите.

След внедряването можете да свържете потребителско име на домейн.

![](https://p.3ti.site/1721119459.avif)

След обвързване на потребителското име на домейн, моля, конфигурирайте пренаписването на URL пътията за едностраничното приложение, както е показано по-долу:

![](https://p.3ti.site/1721119320.avif)

Правилата на горната фигура са както следва, заменете `i18n.site` в първия ред по-долу с името на домейна, което сте обвързали.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Освен това, моля, конфигурирайте правилата за кеша, както е показано по-долу, и задайте продължителността на кеша на един месец.

![](https://p.3ti.site/1721125111.avif)

Моля, променете името на домейна, съответстващо във втората стъпка на фигурата по-горе, на името на домейна, което сте обвързали.

#### Оптимизация на Разгръщането на Уебсайта в Китай

Ако искате да получите по-добра достъпност на уебсайта в Китай, моля, първо [регистрирайте име на домейн](//beian.aliyun.com).

След това използвайте обектното хранилище на облачни доставчици в Китай и `CDN`, за да публикувате съдържанието в директорията `out/ol/htm`.

Можете да използвате edge computing за пренаписване на URL пътията, за да се адаптирате към едностранични приложения. Например, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) може да бъде конфигуриран по следния начин:

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
![](https://p.3ti.site/1721121273.avif)

Тъй като записите `MX` и `CNAME` не могат да съществуват едновременно, ако искате да получавате имейли на домейна, трябва да използвате скрипта [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten), за да преобразувате `CNAME` в `A` записи.

Освен това, тъй като таксите за задграничен трафик на облачните доставчици в континентален Китай са сравнително скъпи, ако искате да оптимизирате разходите, можете да използвате [DNS географска разделителна способност на Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) и персонализираното име на домейн [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (както е показано по-долу), за да постигнете това отклоняване на трафика ── трафик в континентален Китай минава през Baidu Cloud `CDN`, а международният трафик минава през Cloudflare.

![](https://p.3ti.site/1721119788.avif)

Тези оптимизационни решения са сравнително сложни и ще бъдат разгледани по-подробно в отделни глави в бъдеще.

#### Пренасочване на泛домейн

Ако използвате `i18n.site` за създаване на вашия основен уебсайт, обикновено ще трябва да конфигурирате пренасочване на泛домейна, което означава да насочите достъпа до `*.xxx.com` (включително `www.xxx.com`) към `xxx.com`.

Това изискване може да бъде изпълнено с помощта на Alibaba Cloud `CDN` `EdgeScript` ( [английски документ](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [китайски документ](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Добавете името на домейна в [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) и насочете името на домейна `*.xxx.com` до `CNAME` в Alibaba Cloud `CDN`.

![](https://p.3ti.site/1721122000.avif)

Например, конфигурацията за пренасочване на泛домейна `*.i18n.site` е както следва:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Конфигуриране с nginx

Моля, добавете подобна конфигурация в секцията `server` на nginx, като промените `/root/i18n/md/out/ol/htm` на пътя към вашия проект `out/ol/htm`:

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Структура на директорията

#### `public`

Статични файлове на уебсайта, като `favicon.ico`, `robots.txt` и други.

Иконите могат да бъдат генерирани с [realfavicongenerator.net](https://realfavicongenerator.net).

#### `.i18n`

В директорията `.i18n` се намират конфигурационните файлове, кешът за преводи и други за `i18n.site`. За повече информация вижте следващата глава [„Конфигурация“](/i18n.site/conf).

#### `en`

Директория на изходния език, съответстваща на `en` в конфигурационния файл `fromTo` в `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Конфигурацията за превод може да бъде разгледана [тук](/i18/use).