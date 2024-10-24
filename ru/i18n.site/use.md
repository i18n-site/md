# Установить &

## Установить

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Токен Конфигурации

`i18n.site` имеет встроенный инструмент перевода `i18` [Нажмите здесь, чтобы перейти к документу `i18` для настройки токена доступа](/i18/use) .

## Демо-Проект

Начнем с демонстрационного проекта, чтобы научиться использовать `i18n.site` .

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

Имя каталога клона базы кода `demo.i18n.site` должно быть `md` чтобы облегчить локальный предварительный просмотр с помощью `docker` .

### Переводить

Сначала войдите в каталог `md` и запустите `i18n.site` , который преобразует `en` в `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

После запуска будут созданы файлы перевода и кэша. Не забудьте добавить их в репозиторий в `git add . ` `md` .

### Локальный Предварительный Просмотр

Установите и запустите `docker` ( `MAC` пользователь рекомендует использовать [orbstack](https://orbstack.dev) в качестве среды выполнения для `docker` ).

Затем войдите в каталог `docker` и запустите `./up.sh` , а затем посетите [https://127.0.0.1](https://127.0.0.1) для локального предварительного просмотра.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Опубликовать Контент

`i18n.site` использует [одностраничную архитектуру приложения](https://developer.mozilla.org/docs/Glossary/SPA) , а входная страница и содержимое веб-сайта развертываются независимо.

После запуска вышеуказанного перевода каталоги `htm` и `v` будут созданы в каталоге `md/out/dev` .

Здесь `dev` означает, что он построен на основе файла конфигурации `.i18n/htm/dev.yml` .

`dev` каталог :

Каталог `htm` — это входная страница веб-сайта.

Каталог `v` содержит содержимое веб-сайта с номерами версий.

Локальный предварительный просмотр не учитывает номер версии и скопирует все файлы в каталог `out/dev/v/0.1.0` .

Для официального выпуска измененные файлы будут скопированы в каталог с новым номером версии.

#### Укажите Файл Конфигурации С `-c`

Различные файлы конфигурации создадут соответствующие каталоги в каталоге `out` .

Например, `.i18n/htm/ol.yml` создаст каталог `out/ol` .

`dev.yml` и `ol.yml` — конфигурации по умолчанию.

`dev` — это сокращение от `development` , обозначающее среду разработки, используемое для локального предварительного просмотра, а также файл конфигурации по умолчанию.
`ol` — это сокращение от `online` , обозначающее онлайн-среду, которая используется для официального выпуска. Это также файл конфигурации по умолчанию при использовании параметров командной строки `-n` по `npm` для выпуска.

Вы также можете создать другие файлы конфигурации. Используйте `--htm_conf` в командной строке, чтобы указать имя файла конфигурации, который будет использоваться:

например:
```
i18n.site --htm_conf yourConfig --save
```

Здесь `--save` представляет номер версии выпуска обновления.

#### <a rel=id href="#npm" id="npm"></a> Публикация контента на npmjs.com

Публикация контента в [npmjs.com](//npmjs.com) является рекомендуемым решением по умолчанию (см. [раздел Высокая доступность внешнего интерфейса](/i18n.site/feature#ha) ).

##### npm login & Выпускать

Установите `nodejs` , войдите с `npm login` .

Отредактируйте `md/.i18n/htm/ol.yml` и измените значение [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) `YOUR_NPM_PACKAGE` в качестве собственного имени пакета `npm` Подойдет любое незанятое имя пакета [npmjs.com](//npmjs.com)

Затем измените `md/.i18n/htm/ol.package.json`

Запустите `i18n.site --npm` или `i18n.site -n` в каталоге `md` , чтобы перевести и опубликовать.

Если вы используете среду непрерывной интеграции для публикации, нет необходимости устанавливать `nodejs` , просто скопируйте разрешение на вход и публикацию `~/.npmrc` в среду.

Если вы измените имя пакета `v:` в `ol.yml` , **сначала удалите `.i18n/v/ol`** , а затем опубликуйте его.

##### Прокси-Сервер, Опубликованный npm

Если пользователи в материковом Китае сталкиваются с проблемами сети и не могут опубликовать `npm` пакетов, они могут установить переменную среды `https_proxy` для настройки прокси-сервера.

Предполагая, что порт вашего прокси-сервера равен `7890` , вы можете написать:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Самостоятельный Контент

Если вы хотите размещать контент самостоятельно, сначала отредактируйте `md/.i18n/htm/ol.yml` и измените `v: //unpkg.com/i18n.site` на префикс URL-адреса, например `v: //i18n-v.xxx.com` .

Войдите в каталог `md` и запустите

```
i18n.site --htm_conf ol --save
```

или аббревиатура

```
i18n.site -c ol -s
```

Затем настройте содержимое каталога `md/out/ol/v` на путь префикса URL, установленный в `v:` .

Наконец, **настройте время кэширования пути `1s` заканчивающегося на `/.v`** , иначе к недавно выпущенному содержимому будет невозможно получить немедленный доступ.

Время кэширования для других путей может быть установлено на один год или более, чтобы уменьшить количество ненужных запросов.

##### Размещайте Контент На s3

Для самостоятельного размещения контента, помимо использования собственного сервера, еще одним распространенным вариантом является использование `S3` + `CDN` .

Вы можете использовать [rclone](https://rclone.org) для входа на сервер `S3` , затем обратиться к следующему сценарию и изменить его и скопировать только дополнительные изменения в `S3` для каждого выпуска.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Не забудьте настроить `CDN` , чтобы время кэширования пути, заканчивающегося на `/.v` было равно `1s` , иначе к недавно выпущенному содержимому будет невозможно получить немедленный доступ.

### Опубликовать Веб-Сайт

Веб-сайт можно развернуть где угодно. Хороший выбор — [github page](https://pages.github.com) и [cloudflare page](https://pages.cloudflare.com) .

Поскольку веб-сайт использует архитектуру [одностраничного приложения](https://developer.mozilla.org/docs/Glossary/SPA) , не забудьте переписать пути URL-адресов, которые не содержат `. ` до `index.html` .

Страницу входа на веб-сайт необходимо развернуть только один раз, и нет необходимости повторно развертывать страницу входа на веб-сайт для последующих обновлений содержимого.

#### Развертывание На Странице github

Сначала [нажмите здесь github чтобы создать организацию](https://github.com/account/organizations/new?plan=free) . В качестве примера можно привести следующее имя организации: `i18n-demo` .

Затем создайте склад `i18n-demo.github.io` в этой организации (замените `i18n-demo` на название созданной вами организации):

![](https://p.3ti.site/1721098657.avif)

При публикации содержимого предыдущей статьи было создано `out/ol/htm` Пожалуйста, войдите в этот каталог и запустите :

```
ln -s index.html 404.html
```


Поскольку значение `github page` не поддерживает перезапись пути URL-адреса, вместо него используется значение `404.html` .

Затем выполните следующую команду в каталоге `htm` (не забудьте заменить `i18n-demo/i18n-demo.github.io.git` адресом вашего склада) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

После отправки кода подождите, пока развертывание `github page` завершится успешно (как показано ниже), прежде чем вы сможете получить к нему доступ.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Демо-страницу см.:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Развертывание На Странице cloudflare

[cloudflare page](//pages.cloudflare.com) По сравнению с `github page` он обеспечивает перезапись пути, более дружественен к материковому Китаю и более доступен.

Развертывание `cloudflare page` обычно основано на развертывании `github page` описанном выше.

Создайте проект и привяжите склад `i18n-demo.github.io` выше.

Процесс показан на рисунке ниже:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Нажмите `Add Account` чтобы предоставить доступ к организации `i18n-demo` .

Если вы привязали склад другой организации, возможно, вам придется дважды нажать `Add Account` для авторизации, прежде чем отобразится новая организация.

![](https://p.3ti.site/1721118306.avif)

Далее выберите склад `i18n-demo.github.io` , затем нажмите `Begin setup` и используйте значения по умолчанию для последующих шагов.

![](https://p.3ti.site/1721118490.avif)

После первой привязки вам нужно подождать несколько минут, прежде чем вы сможете получить к нему доступ.

После развертывания вы можете привязать собственное доменное имя.

![](https://p.3ti.site/1721119459.avif)

После привязки имени собственного домена перейдите к имени домена, чтобы настроить перезапись пути одностраничного приложения, как показано ниже:

![](https://p.3ti.site/1721119320.avif)

Правила на рисунке выше следующие. Замените `i18n.site` в первой строке ниже на имя домена, которое вы привязали.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Кроме того, настройте правила кэширования, как показано ниже, и установите продолжительность кэширования на один месяц.

![](https://p.3ti.site/1721125111.avif)

Пожалуйста, измените соответствие доменного имени на втором шаге на рисунке выше на доменное имя, которое вы связали.

#### Оптимизация Развертывания Веб-Сайта В Материковом Китае

Если вы хотите улучшить доступность в сетевой среде материкового Китая, сначала [зарегистрируйте доменное имя](//beian.aliyun.com) .

Затем воспользуйтесь объектным хранилищем поставщиков облачных `CDN` + следующий контент `out/ol/htm` .

Вы можете использовать периферийные вычисления, чтобы переписать путь для адаптации к одностраничным приложениям. Например, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) можно настроить следующим образом:

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

Поскольку запись `MX` и запись `CNAME` не могут сосуществовать, если вы хотите одновременно получать электронные письма о доменных именах, вам необходимо использовать сценарий [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) для уровня `CNAME` в записи `A` .

Кроме того, поскольку плата за зарубежный трафик поставщиков облачных услуг в материковом Китае относительно высока, если вы хотите оптимизировать затраты, вы можете использовать [бесплатное географическое разрешение Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) и собственное доменное имя [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (как показано ниже). перенаправление трафика ──Трафик в материковом Китае Baidu Cloud `CDN` , международный трафик идет cloudflare .

![](https://p.3ti.site/1721119788.avif)

Эти решения по оптимизации развертывания более сложны и в будущем будут представлены в отдельных главах.

#### Общее Перенаправление Доменного Имени

Если вы используете `i18n.site` для создания веб-сайта в качестве основного веб-сайта, вам обычно необходимо настроить перенаправление пандомена, то есть перенаправить доступ с `*.xxx.com` (включая `www.xxx.com` ) на `xxx.com` .

Это требование можно выполнить с помощью Alibaba Cloud `CDN` `EdgeScript` ( [документ на английском языке](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Документ на китайском языке](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ).

Добавьте доменное имя в [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) и укажите доменное имя `*.xxx.com` `CNAME` в Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Например, конфигурация перенаправления пан-доменного имени `*.i18n.site` на рисунке выше выглядит следующим образом:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Развертывание С Помощью nginx

Добавьте конфигурацию, подобную следующей, в абзаце `server` nginx Измените `/root/i18n/md/out/ol/htm` на путь к вашему собственному проекту `out/ol/htm` :

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

#### `public`

Статические файлы веб-сайта, такие как `favicon.ico` , `robots.txt` и т. д.

Файлы значков здесь могут быть созданы с расширением [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

В каталоге `.i18n` находятся файлы конфигурации, кэш переводов и т. д. `i18n.site` Подробности см. в следующей главе [«Конфигурация»](/i18n.site/conf) .

#### `en`

Каталог исходного языка, соответствующий файлу конфигурации `en` из `fromTo` в `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Пожалуйста, обратитесь к конфигурации перевода [i18](/i18/use)