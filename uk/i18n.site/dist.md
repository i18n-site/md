# Розгортання Та Онлайн

`i18n.site` приймає [односторінкову архітектуру програми](https://developer.mozilla.org/docs/Glossary/SPA) , а сторінка входу на веб-сайт і вміст веб-сайту розгортаються незалежно.

Після виконання наведеного вище перекладу каталоги `htm` і `v` будуть створені в каталозі `md/out/dev` .

Тут `dev` означає, що він створений на основі файлу конфігурації `.i18n/htm/dev.yml` .

`dev` каталог :

Каталог `htm` – це сторінка входу на сайт.

Каталог `v` містить вміст веб-сайту з номерами версій.

Локальний попередній перегляд не зважає на номер версії та копіює всі файли до каталогу `out/dev/v/0.1.0` .

Для офіційного випуску змінені файли буде скопійовано до каталогу з новим номером версії.

## Вкажіть Файл Конфігурації З `-c`

Різні конфігураційні файли створять відповідні каталоги в каталозі `out` .

Наприклад, `.i18n/htm/main.yml` створить каталог `out/main` .

`dev.yml` і `main.yml` є конфігураціями за замовчуванням.

`dev` — це абревіатура `development` , що вказує на середовище розробки, що використовується для локального попереднього перегляду, а також є файлом конфігурації за замовчуванням.
`ol` — це абревіатура `online` , що вказує на онлайн-середовище, яке використовується для офіційного випуску. Це також файл конфігурації за замовчуванням, коли для випуску використовуються параметри командного рядка `-n` по `npm` .

Ви також можете створити інші файли конфігурації, вказавши назву файлу конфігурації в командному рядку `--htm_conf`

наприклад:
```
i18n.site --htm_conf dist --save
```

Тут `--save` означає номер версії випуску оновлення.

## <a rel=id href="#npm" id="npm"></a> Публікуйте вміст на npmjs.com

Публікація вмісту [в](/i18n.site/feature#ha) [npmjs.com](//npmjs.com)

### npm & Повідомлення

Встановити `nodejs` , увійти за допомогою `npm login` .

Відредагуйте `md/.i18n/htm/main.yml` і змініть значення [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` як власне ім'я пакета `npm` [npmjs.com](//npmjs.com) будь-яке незайняте ім'я пакета.

Потім змініть `md/.i18n/htm/main.package.json`

Запустіть `i18n.site --npm` або `i18n.site -n` у каталозі `md` , щоб перекласти та опублікувати.

Якщо ви використовуєте середовище безперервної інтеграції для публікації, немає необхідності встановлювати `nodejs` Просто скопіюйте в середовище дозволи для входу та публікації `~/.npmrc` .

Якщо ви змінюєте назву пакета `v:` з `main.yml` , **будь ласка, спочатку видаліть `.i18n/v/main`** , а потім опублікуйте його.

#### Проксі-Сервер, Опублікований npm

Якщо користувачі в материковому Китаї стикаються з проблемами мережі та не можуть опублікувати `npm` пакетів, вони можуть встановити змінну середовища `https_proxy` щоб налаштувати проксі-сервер.

Припускаючи, що порт вашого проксі-сервера дорівнює `7890` , ви можете написати:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Самостійний Вміст

Якщо ви хочете самостійно розмістити вміст, спочатку відредагуйте `md/.i18n/htm/main.yml` і змініть `v: //unpkg.com/i18n.site` на префікс URL-адреси, наприклад `v: //i18n-v.xxx.com` .

Введіть каталог `md` і запустіть

```
i18n.site --htm_conf ol --save
```

або абревіатура

```
i18n.site -c ol -s
```

Потім налаштуйте вміст у каталозі `md/out/main/v` на шлях префікса URL-адреси, встановлений у `v:` .

Нарешті, **налаштуйте час кешу шляху, що закінчується на `/.v` до `1s`** , інакше до нещодавно випущеного вмісту буде неможливо отримати доступ негайно.

Час кешу для інших шляхів можна встановити на один рік або більше, щоб зменшити непотрібні запити.

## Розмістити Вміст На s3

Для самостійного розміщення вмісту, крім використання власного сервера, ще `CDN` поширеним варіантом є використання `S3` +

Ви можете використовувати [rclone](https://rclone.org) увійти на сервер `S3` , потім переглянути та змінити наступний сценарій та скопіювати лише додаткові зміни до `S3` для кожного випуску.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Не забувайте налаштувати `CDN` , щоб час кешу шляху, що закінчується на `/.v` становив `1s` , інакше доступ до нещодавно випущеного вмісту буде неможливим негайно.

## Опублікувати Веб-Сайт

Веб-сайт можна розгорнути будь-де [github page](https://pages.github.com) і [cloudflare page](https://pages.cloudflare.com) є хорошим вибором.

Оскільки на веб-сайті використовується [односторінкова архітектура програми](https://developer.mozilla.org/docs/Glossary/SPA) , не забудьте переписати URL-шляхи, які не містять `. ` до `index.html` .

Сторінку входу веб-сайту потрібно розгортати лише один раз, і немає необхідності повторно розгортати сторінку входу веб-сайту для наступних оновлень вмісту.

### Розгорнути На Сторінці github

Спершу [клацніть тут github наприклад](https://github.com/account/organizations/new?plan=free) `i18n-demo` назву організації.

Потім створіть склад `i18n-demo.github.io` у цій організації (замініть `i18n-demo` назвою організації, яку ви створили):

![](https://p.3ti.site/1721098657.avif)

Під час публікації вмісту в попередній статті було згенеровано `out/main/htm` , будь ласка, увійдіть у цей каталог і запустіть :

```
ln -s index.html 404.html
```


Оскільки `github page` не підтримує перезапис шляху URL-адреси, замість нього використовується `404.html` .

Потім запустіть наступну команду в каталозі `htm` (не забудьте замінити `i18n-demo/i18n-demo.github.io.git` своєю власною адресою складу) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Після введення коду дочекайтеся успішного виконання розгортання `github page` (як показано нижче), перш ніж ви зможете отримати до нього доступ.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Демо-сторінку див.:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Розгорнути На Сторінці cloudflare

[cloudflare page](//pages.cloudflare.com) Порівняно з `github page` , він забезпечує переписування шляхів і є більш дружнім до материкового Китаю та є більш доступним для використання.

Розгортання `cloudflare page` зазвичай базується на розгортанні `github page` вище.

Створіть проект і прив’яжіть склад `i18n-demo.github.io` вище.

Процес показаний на малюнку нижче:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Натисніть `Add Account` щоб надати доступ організації `i18n-demo` .

Якщо ви прив’язали склад іншої організації, можливо, вам доведеться двічі клацнути `Add Account` , щоб двічі авторизуватися, перш ніж відобразиться нова організація.

![](https://p.3ti.site/1721118306.avif)

Далі виберіть склад `i18n-demo.github.io` , потім натисніть `Begin setup` і використовуйте значення за замовчуванням для наступних кроків.

![](https://p.3ti.site/1721118490.avif)

Після першого прив’язування вам потрібно зачекати кілька хвилин, перш ніж ви зможете отримати до нього доступ.

Після розгортання ви можете прив’язати власне доменне ім’я.

![](https://p.3ti.site/1721119459.avif)

Після прив’язки настроюваного доменного імені перейдіть до доменного імені, щоб налаштувати перезапис шляху односторінкової програми, як показано нижче:

![](https://p.3ti.site/1721119320.avif)

Правила на наведеному вище зображенні такі, будь ласка, замініть `i18n.site` у першому рядку нижче на доменне ім’я, яке ви зв’язали.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Крім того, налаштуйте правила кешу, як показано нижче, і встановіть тривалість кешу на один місяць.

![](https://p.3ti.site/1721125111.avif)

Будь ласка, змініть доменне ім’я, яке відповідає на другому кроці на зображенні вище на доменне ім’я, яке ви зв’язали.

### Оптимізація Розгортання Веб-Сайту В Китаї

Якщо ви хочете отримати кращу доступність у мережевому середовищі материкового Китаю, спершу [зареєструйте доменне ім’я](//beian.aliyun.com) .

Потім скористайтеся сховищем об’єктів хмарних постачальників у материковому Китаї + Розгорніть наступний вміст `CDN` `out/main/htm`

Ви можете використовувати периферійні обчислення, щоб переписати шлях для адаптації до односторінкових програм. Наприклад, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) можна налаштувати так:

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
  // Ви можете встановити заголовок відповіді для налагодження виводу, наприклад out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Оскільки запис `MX` і запис `CNAME` не можуть співіснувати, якщо ви хочете отримувати електронні листи з доменними іменами одночасно, вам потрібно співпрацювати зі сценарієм [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) до рівня `CNAME` із записом `A` .

Крім того, оскільки плата за закордонний трафік постачальників хмарних технологій у материковому Китаї є відносно високою, якщо ви хочете оптимізувати витрати, ви можете скористатися [DNS географічною роздільною здатністю Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) і спеціальним доменним іменем [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (як показано нижче). перенаправлення трафіку──Маршрутизація трафіку в материковому Китаї Baidu Cloud `CDN` , міжнародний трафік йде cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ці рішення для оптимізації розгортання складніші, і в майбутньому вони будуть представлені в окремих розділах.

### Загальне Переспрямування Доменного Імені

Якщо ви використовуєте `i18n.site` для створення веб-сайту як основного веб-сайту, зазвичай вам потрібно налаштувати пандоменне переспрямування, тобто переспрямувати доступ до `*.xxx.com` (включаючи `www.xxx.com` ) на `xxx.com` .

Цю вимогу можна виконати за допомогою Alibaba Cloud `CDN` `EdgeScript` ( [документ англійською мовою](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [документ китайською мовою](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Додайте доменне ім’я в [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) і вкажіть доменне ім’я `*.xxx.com` `CNAME` у Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Наприклад, конфігурація переспрямування пандоменного імені `*.i18n.site` на зображенні вище виглядає так:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Розгорнути За Допомогою nginx

Будь ласка, додайте конфігурацію, подібну до наступної в абзаці `server` nginx Будь ласка, змініть `/root/i18n/md/out/main/htm` на шлях вашого власного проекту `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## На Основі `github action` Безперервної Інтеграції

Ви можете звернутися до наступного, щоб налаштувати свій `github action` :

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Як можна побачити в конфігурації, цей робочий процес запускається під час натискання на гілку `main` і гілку `dist` .

Робочий процес використовуватиме файл конфігурації, який відповідає назві гілки, щоб опублікувати документ. Тут `.i18n/htm/main.yml` і `.i18n/htm/dist.yml` буде використано як конфігурацію публікації відповідно.

Ми рекомендуємо наступні найкращі практики для процесу випуску документів:

Коли зміни надсилаються до гілки `main` , документ запускається для створення та розгортання на станції попереднього перегляду (станція попереднього перегляду доступна [github page](//pages.github.com) ).

Після підтвердження того, що документ правильний на сайті попереднього перегляду, код буде об’єднано та передано до гілки `dist` , а офіційна збірка та розгортання вийдуть в Інтернет.

Звичайно, реалізація описаного вище процесу вимагає написання додаткових конфігурацій.

Ви можете звернутися до фактичного проекту для сценарію робочого процесу [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` і `secrets.NPM_TOKEN` у конфігурації вимагають налаштування секретних змінних у базі коду.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` — це маркер публікації пакета `npm` у конфігурації. Відвідайте [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## Структура Каталогу

### `public`

Статичні файли веб-сайту, наприклад `favicon.ico` , `robots.txt` тощо.

Файли значків тут можна створити за допомогою [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

У каталозі `.i18n` знаходяться файли конфігурації, кеш перекладу тощо з `i18n.site` Додаткову інформацію див. у наступному розділі [«Конфігурація»](/i18n.site/conf) .

### `en`

Каталог вихідної мови, що відповідає файлу конфігурації `en` з `fromTo` на `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Будь ласка, зверніться до конфігурації перекладу [i18](/i18/use)