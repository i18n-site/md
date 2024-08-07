# Установить &

## Токен Конфигурации

`i18n.site` Инструмент перевода `i18` встроен. [Нажмите здесь, чтобы перейти к документу `i18` и настроить токен доступа](/i18/use) .

## Установить

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Демо-Проект

Давайте начнем с демо-проекта и научимся использовать `i18n.site`

Сначала мы клонируем демо-репозиторий и запускаем команду следующим образом:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Пользователи в материковом Китае могут:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` Имя каталога клона базы кода должно быть `md` , чтобы облегчить локальный предварительный просмотр с помощью `docker` !

### Переводить

Сначала войдите в каталог `md` и запустите `i18n.site` , который преобразует `en` в `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

После запуска будут созданы файлы перевода и кэша. Не забудьте добавить их в репозиторий `git add . ` в каталоге `md`

### Локальный Предварительный Просмотр

Установите и запустите `docker` ( `MAC` рекомендуют использовать [orbstack](https://orbstack.dev) в качестве среды выполнения `docker` ).

Затем войдите в каталог `docker` и запустите `./up.sh` , а затем посетите [https://127.0.0.1](https://127.0.0.1) для локального предварительного просмотра.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Опубликовать Контент

`i18n.site` Принимает [одностраничную архитектуру приложения](https://developer.mozilla.org/docs/Glossary/SPA) , а входная страница и содержимое веб-сайта развертываются независимо.

После выполнения вышеуказанного перевода в каталоге `md/out/dev` будут созданы каталоги `htm` и `v` .

Здесь `dev` указывает, что он создан на основе файла `.i18n/htm/dev.yml` .

`dev` Под содержанием :

`htm` Под каталогом находится входная страница сайта.

`v` Каталог содержит содержимое сайта с номером версии.

Локальный предварительный просмотр скопирует все файлы в каталог `out/dev/v/0.1.0` независимо от номера версии.

Для официального выпуска измененные файлы будут скопированы в каталог с новым номером версии.

#### Используйте -C, Чтобы Указать Файл Конфигурации

Различные файлы конфигурации создают соответствующие каталоги в каталоге `out`

Например, `.i18n/htm/ol.yml` создаст каталог `out/ol` .

`dev.yml` и `ol.yml` — конфигурации по умолчанию.

`dev` — это сокращение от `development` , обозначающее среду разработки, используемое для локального предварительного просмотра, а также файл конфигурации по умолчанию.
`ol` — это аббревиатура `online` , которая обозначает онлайн-среду, используется для официального выпуска, а также является файлом конфигурации по умолчанию при публикации `npm` с использованием параметра командной строки `-n` .

Вы также можете создать другие файлы конфигурации. Используйте `--htm_conf` в командной строке, чтобы указать имя файла конфигурации:

например:
```
i18n.site --htm_conf yourConfig --save
```

Здесь `--save` указывает номер версии обновления.

#### <a rel=id href="#npm" id="npm"></a> Публикация контента на npmjs.com

Публикация контента в [npmjs.com](//npmjs.com) является рекомендуемым решением по умолчанию (см. [раздел Высокая доступность внешнего интерфейса](/i18n.site/feature#ha) ).

##### npm login & Выпускать

Установите `nodejs` используйте `npm login` для входа.

Измените `md/.i18n/htm/ol.yml` измените `i18n.site` в `v: //unpkg.com/i18n.site` на свой собственный `npm` имя пакета.

Просто используйте незанятое имя пакета [npmjs.com](//npmjs.com) Использование доменного имени веб-сайта в качестве имени пакета является хорошим выбором.

При публикации на основе пакета `npm` **обязательно используйте префикс `//unpkg.com/`** к значению `v:` . Время кэширования `i18n.site` по этому пути префикса `/.v` специально оптимизировано для обеспечения своевременного просмотра новых выпусков.

Запустите `i18n.site --npm` или `i18n.site -n` в каталоге `md` , чтобы перевести и опубликовать.

Если для публикации вы используете среду непрерывной интеграции, устанавливать ее не нужно `nodejs` Просто скопируйте разрешение для входа и публикации `~/.npmrc` в среду.

Если вы измените имя пакета в `v:` in `ol.yml` , **сначала удалите `.i18n/v/ol`** , а затем опубликуйте его.

##### Прокси-Сервер, Опубликованный npm

Если пользователи в материковом Китае сталкиваются с проблемами сети и не могут опубликовать пакет `npm` , они могут установить переменную среды `https_proxy` для настройки прокси-сервера.

Предполагая, что порт вашего прокси-сервера `7890` вы можете написать:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Самостоятельный Контент

Если вы хотите разместить контент самостоятельно, сначала отредактируйте `md/.i18n/htm/ol.yml` и замените `v: //unpkg.com/i18n.site` на префикс URL-адреса, например `v: //i18n-v.xxx.com` .

Войдите в каталог `md` и запустите.

```
i18n.site --htm_conf ol --save
```

или аббревиатура

```
i18n.site -c ol -s
```

Затем настройте содержимое каталога `md/out/ol/v` на путь префикса URL, установленный в `v:` .

Наконец, **настройте время кэширования пути, заканчивающегося на `/.v` на `1s`** , иначе немедленный доступ к вновь выпущенному контенту будет невозможен.

Время кэширования для других путей может быть установлено на один год или более, чтобы уменьшить количество ненужных запросов.

##### Размещайте Контент На s3

Для самостоятельного размещения контента, помимо использования собственного сервера, еще одним распространенным вариантом является использование `S3` + `CDN`

Вы можете использовать сервер [rclone](https://rclone.org) Login `S3` , затем обратиться к приведенному ниже сценарию и изменить его и копировать только инкрементальные изменения в `S3` каждый раз при публикации.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Не забудьте настроить `CDN` чтобы время кэширования пути, заканчивающегося на `/.v` было `1s` , иначе вы не сможете немедленно получить доступ к недавно выпущенному контенту.

### Опубликовать Веб-Сайт

Веб-сайт можно развернуть где угодно. Хороший выбор [github page](https://pages.github.com) и [cloudflare page](https://pages.cloudflare.com) .

Поскольку веб-сайт использует архитектуру [одностраничного приложения](https://developer.mozilla.org/docs/Glossary/SPA) , не забудьте переписать URL-путь, который не содержит `. ` на `index.html` .

Страницу входа на веб-сайт необходимо развернуть только один раз, и нет необходимости повторно развертывать страницу входа на веб-сайт для последующих обновлений содержимого.

#### Развертывание На Странице github

Сначала [нажмите здесь github чтобы создать организацию](https://github.com/account/organizations/new?plan=free) . В качестве примера можно привести следующее название организации `i18n-demo`

Затем создайте склад под этой `i18n-demo.github.io` (замените `i18n-demo` на название созданной вами организации):

<img alt="" src="https://p.3ti.site/1721098657.avif">

При публикации содержимого предыдущей статьи оно было создано `out/ol/htm` Пожалуйста, войдите в этот каталог и запустите :

```
ln -s index.html 404.html
```


Поскольку `github page` не поддерживает перезапись URL-пути, вместо него используется `404.html` .

Затем выполните следующую команду в каталоге `htm` (не забудьте заменить `i18n-demo/i18n-demo.github.io.git` на свой собственный адрес склада) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

После отправки кода дождитесь успешного выполнения развертывания `github page` (как показано ниже), а затем вы сможете получить к нему доступ.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Демо-страницу см.:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Развертывание На Странице cloudflare

[cloudflare page](//pages.cloudflare.com) По сравнению с `github page` он обеспечивает перезапись пути, более дружественен к материковому Китаю и более доступен.

`cloudflare page` Развертывание обычно основано на развертывании, `github page` выше.

Создайте проект и привяжите указанный выше склад `i18n-demo.github.io`

Процесс показан на рисунке ниже:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Пожалуйста, нажмите `Add Account` , чтобы предоставить доступ к `i18n-demo` .

Если вы привязали склад другой организации, возможно, вам придется дважды нажать `Add Account` , чтобы авторизовать его, прежде чем отобразится новая организация.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Далее выберите `i18n-demo.github.io` Склад, затем нажмите `Begin setup` и используйте значения по умолчанию для последующих шагов.

<img alt="" src="https://p.3ti.site/1721118490.avif">

После первой привязки вам нужно подождать несколько минут, прежде чем вы сможете получить к нему доступ.

После развертывания вы можете привязать собственное доменное имя.

<img alt="" src="https://p.3ti.site/1721119459.avif">

После привязки имени собственного домена перейдите к имени домена, чтобы настроить перезапись пути одностраничного приложения, как показано ниже:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Правила на рисунке выше следующие: Замените `i18n.site` в первой строке ниже на привязанное к вам доменное имя.

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

Кроме того, настройте правила кэширования, как показано ниже, и установите продолжительность кэширования на один месяц.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Пожалуйста, измените соответствие доменного имени на втором шаге на рисунке выше на доменное имя, которое вы связали.

#### Оптимизация Развертывания Веб-Сайта В Материковом Китае

Если вы хотите улучшить доступность в сетевой среде материкового Китая, сначала [зарегистрируйте доменное имя](//beian.aliyun.com) .

Затем воспользуйтесь объектным хранилищем поставщиков облачных услуг в материковом `CDN` + Разверните `out/ol/htm` контент!

Вы можете использовать периферийные вычисления, чтобы переписать путь для адаптации к одностраничным приложениям, таким как [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Его можно настроить следующим образом:

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

Поскольку записи `MX` и `CNAME` записи не могут сосуществовать, если вы хотите одновременно получать электронные письма с доменными именами, вам необходимо использовать сценарий [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) , чтобы свести `CNAME` в `A` record.

Кроме того, поскольку плата за зарубежный трафик поставщиков облачных услуг в материковом Китае относительно высока, если вы хотите оптимизировать затраты, вы можете использовать [бесплатное географическое разрешение Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) и собственное доменное имя [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (как показано ниже). перенаправление трафика ──Маршрутизация трафика в материковом Китае Baidu Cloud `CDN` международный трафик идет cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Эти решения по оптимизации развертывания более сложны и в будущем будут представлены в отдельных главах.

#### Общее Перенаправление Доменного Имени

Если вы используете `i18n.site` для создания веб-сайта в качестве основного веб-сайта, вам обычно необходимо настроить перенаправление всего домена, то есть перенаправить доступ к `*.xxx.com` (включая `www.xxx.com` ) на `xxx.com` .

Это требование может быть достигнуто с помощью `EdgeScript` Alibaba Cloud `CDN` ( [документ на английском языке](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [документ на китайском языке](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Добавьте доменное имя в [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) и укажите `*.xxx.com` домена в `CNAME` в Alibaba Cloud `CDN` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Например, конфигурация перенаправления доменных имен `*.i18n.site` на рисунке выше выглядит следующим образом:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Развертывание С Помощью nginx

Добавьте конфигурацию, подобную следующей, в `server` nginx где `/root/i18n/md/out/ol/htm` измените ее на путь к вашему собственному проекту `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Структура Каталогов

#### Общественный

Статические файлы сайта, такие как `favicon.ico` `robots.txt` и т. д.

Файлы значков здесь могут быть созданы с расширением [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` В этом каталоге находятся файлы конфигурации `i18n.site` , кэш переводов и т. д. Подробности см. в следующей главе [«Конфигурация»](/i18n.site/conf) .

#### Ru

Каталог исходного языка, `.i18n/conf.yml` `fromTo` `en` в файле конфигурации.

```yaml
i18n:
  fromTo:
    en: zh
```

Пожалуйста, обратитесь к конфигурации перевода [i18](/i18/use)

