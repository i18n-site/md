# Жайгаштыруу Жана Онлайн

`i18n.site` [бир беттик колдонмо](https://developer.mozilla.org/docs/Glossary/SPA) архитектурасын кабыл алат жана веб-сайтка кирүү бети жана веб-сайттын мазмуну өз алдынча жайгаштырылат.

Жогорудагы котормону иштеткенден кийин `md/out/dev` каталогунун астында `htm` жана `v` каталогдор түзүлөт.

Бул жерде `dev` `.i18n/htm/dev.yml` конфигурация файлынын негизинде курулганын билдирет.

`dev` каталог :

`htm` каталогу веб-сайтка кире турган бет.

`v` каталогу версия номерлери менен веб-сайттын мазмунун камтыйт.

Жергиликтүү алдын ала көрүү версиянын номерине маани бербейт жана бардык файлдарды `out/dev/v/0.1.0` каталогуна көчүрөт.

Расмий чыгаруу үчүн, өзгөртүлгөн файлдар жаңы версиянын номер каталогуна көчүрүлөт.

## `-c` Менен Конфигурация Файлын Көрсөтүңүз

Ар кандай конфигурация файлдары `out` каталогунда тиешелүү каталогдорду түзөт.

Мисалы, `.i18n/htm/main.yml` `out/main` каталогун түзөт.

`dev.yml` жана `main.yml` демейки конфигурациялар.

`dev` `development` аббревиатурасы, иштеп чыгуу чөйрөсүн көрсөтүп, жергиликтүү алдын ала көрүү үчүн колдонулат жана ошондой эле демейки конфигурация файлы болуп саналат.
`ol` `npm` бул `online` дин кыскартылышы, ал расмий релиз үчүн колдонулган онлайн чөйрөнү `-n` .

Башка конфигурация файлдарын түзө аласыз, колдонуу үчүн конфигурация файлынын атын көрсөтүү үчүн буйрук сабында `--htm_conf` колдонуңуз:

мисалы:
```
i18n.site --htm_conf dist --save
```

Бул жерде `--save` жаңыртуу чыгаруу версиясынын номерин билдирет.

## <a rel=id href="#npm" id="npm"></a> Мазмунду npmjs.com сайтына жарыялоо

Мазмунду [npmjs.com](//npmjs.com) сунушталган демейки чечим болуп саналат ( [Front-end High Availability](/i18n.site/feature#ha) ).

### npm Кирүү & Пост

`nodejs` орнотуп, `npm login` менен кириңиз.

`md/.i18n/htm/main.yml` түзөтүңүз [npmjs.com](//npmjs.com) [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` өзүңүздүн `npm` пакеттин аталышын өзгөртүңүз.

Андан кийин `md/.i18n/htm/main.package.json` өзгөртүңүз

Которуу жана жарыялоо үчүн `md` каталогунда `i18n.site --npm` же `i18n.site -n` иштетиңиз.

Жарыялоо үчүн үзгүлтүксүз интеграция чөйрөсүн колдонсоңуз, `nodejs` орнотуунун кереги жок. Жөн гана кирген жана жарыялоо уруксаттарын `~/.npmrc` чөйрөгө көчүрүңүз.

Эгерде сиз `main.yml` `v:` пакеттин атын өзгөртсөңүз, **адегенде `.i18n/v/main` өчүрүп, анан аны жарыялоону унутпаңыз** .

#### npm Тарабынан Жарыяланган Прокси Сервер

Эгер материктик Кытайдагы колдонуучулар тармак көйгөйлөрүнө туш болуп, `npm` пакетти жарыялай албаса, алар прокси серверди конфигурациялоо үчүн `https_proxy` өзгөрмө чөйрөсүн орното алышат.

Прокси сервериңиздин порту `7890` деп ойлосоңуз, төмөнкүлөрдү жазсаңыз болот:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Өз Алдынча Жайгаштырылган Мазмун

Эгер сиз мазмунду өз алдынча жайгаштыргыңыз келсе, адегенде `md/.i18n/htm/main.yml` түзөтүп, `v: //unpkg.com/i18n.site` URL префиксине өзгөртүңүз, мисалы `v: //i18n-v.xxx.com` .

`md` каталогун киргизип, иштетиңиз

```
i18n.site --htm_conf ol --save
```

же аббревиатура

```
i18n.site -c ol -s
```

Андан кийин, `md/out/main/v` каталогундагы мазмунду `v:` коюлган URL префикс жолуна конфигурациялаңыз.

Акырында, **`/.v` `1s` чейин аяктаган жолдун кэш убактысын конфигурациялаңыз** , антпесе жаңы чыккан мазмунга дароо кирүү мүмкүн эмес.

Керексиз суроо-талаптарды азайтуу үчүн башка жолдор үчүн кэш убактысын бир жылга же андан көп убакытка коюуга болот.

## s3 Үчүн Хост Мазмуну

Өзүңүздүн сервериңизди колдонуудан тышкары, мазмунду өз алдынча жайгаштыруу үчүн `S3` + колдонуңуз `CDN`

Сиз `S3` серверине кирүү үчүн [rclone](https://rclone.org) болот, андан кийин төмөнкү скриптке кайрылыңыз жана өзгөртсөңүз болот жана ар бир чыгарылыш үчүн кошумча өзгөртүүлөрдү `S3` гана көчүрүңүз.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

`/.v` менен аяктаган жолдун кэш убактысы `1s` болушу үчүн `CDN` конфигурациялоону унутпаңыз, антпесе жаңы чыккан мазмунга дароо кирүүгө болбойт.

## Сайтты Жарыялоо

Веб-сайтты каалаган жерге жайгаштырууга болот [github page](https://pages.github.com) жана [cloudflare page](https://pages.cloudflare.com) жакшы тандоо.

Вебсайт [бир беттик колдонмо](https://developer.mozilla.org/docs/Glossary/SPA) архитектурасын колдонгондуктан, `. ` `index.html` чейин камтылбаган URL жолдорун кайра жазууну унутпаңыз.

Вебсайтка кирүү бети бир гана жолу жайгаштырылышы керек жана кийинки мазмун жаңыртуулары үчүн веб-сайтка кирүү барагын кайра жайгаштыруунун кереги жок.

### github Баракчасына Жайгаштыруу

[Уюмду түзүү үчүн биринчи github жерди басыңыз](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Андан кийин бул уюмдун алдында кампа `i18n-demo.github.io` түзүңүз ( `i18n-demo` сиз түзгөн уюмдун аталышы менен алмаштырыңыз):

![](https://p.3ti.site/1721098657.avif)

Мурунку макаладагы мазмунду жарыялоодо, `out/main/htm` түзүлдү. Сураныч, бул каталогго кирип, иштетиңиз :

```
ln -s index.html 404.html
```


`github page` URL жолун кайра жазууну колдоого албагандыктан, анын ордуна `404.html` колдонулат.

Андан кийин `htm` каталогунда төмөнкү буйрукту иштетиңиз ( `i18n-demo/i18n-demo.github.io.git` өзүңүздүн кампа дарегиңиз менен алмаштырууну унутпаңыз) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Кодду түрткөндөн кийин, ага кирүүдөн мурун `github page` жайгаштырылышы ийгиликтүү иштешин күтүңүз (төмөндө көрсөтүлгөндөй).

<img src="//p.3ti.site/1721116586.avif" width="350px">

Демо баракчаны көрүү үчүн:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### cloudflare Барагында Жайгаштыруу

[cloudflare page](//pages.cloudflare.com) менен салыштырганда, ал `github page` кайра жазууну камсыз кылат жана материктик Кытайга ыңгайлуу жана аны колдонуу сунушталат.

`cloudflare page` жайгаштыруу, адатта, жогорудагы `github page` жайгаштырууга негизделген.

Долбоорду түзүп, жогорудагы `i18n-demo.github.io` кампасын байлаңыз.

Процесс төмөнкү сүрөттө көрсөтүлгөн:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

`i18n-demo` уюмга кирүү мүмкүнчүлүгүн берүү үчүн `Add Account` баскычын басыңыз.

Эгер сиз башка уюмдун кампасын байлап алган болсоңуз, жаңы уюм көрсөтүлө электе эки жолу авторизациялоо үчүн `Add Account` баскычын чыкылдатыңыз.

![](https://p.3ti.site/1721118306.avif)

Андан кийин, кампа `i18n-demo.github.io` тандаңыз, андан кийин `Begin setup` чыкылдатыңыз жана кийинки кадамдар үчүн демейки маанилерди колдонуңуз.

![](https://p.3ti.site/1721118490.avif)

Биринчи жолу байланыштыргандан кийин, ага кирүү үчүн бир нече мүнөт күтүшүңүз керек.

Жайгаштыргандан кийин, сиз жеке домен атын байлай аласыз.

![](https://p.3ti.site/1721119459.avif)

Ыңгайлаштырылган домен атын байлагандан кийин, төмөндө көрсөтүлгөндөй, бир беттик тиркеменин жолду кайра жазуу жолун конфигурациялоо үчүн домендик атка өтүңүз:

![](https://p.3ti.site/1721119320.avif)

Жогорудагы сүрөттөгү эрежелер төмөндөгүдөй. Сураныч, төмөнкү биринчи саптагы `i18n.site` сиз байлаган домендик ат менен алмаштырыңыз.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Андан тышкары, төмөндө көрсөтүлгөндөй кэш эрежелерин конфигурациялаңыз жана кэштин узактыгын бир айга коюңуз.

![](https://p.3ti.site/1721125111.avif)

Сураныч, жогорудагы сүрөттө экинчи кадамга дал келген домендик аталышты сиз байлаган домен атына өзгөртүңүз.

### Материк Кытайда Веб-Сайтты Жайгаштырууну Оптималдаштыруу

Эгер сиз материктик Кытайдын тармактык чөйрөсүндө жеткиликтүүлүктүн жакшыраак иштешине ээ болгуңуз келсе, алгач [домен атын каттаңыз](//beian.aliyun.com) .

Андан кийин, материктик + булут сатуучулардын объект сактагычын колдонуңуз `CDN` Төмөнкү мазмунду жайгаштырыңыз `out/main/htm` .

Бир беттик тиркемелерге ыңгайлашуу жолун кайра жазуу үчүн сиз кырдуу эсептөөнү колдонсоңуз болот, мисалы, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) төмөнкүдөй конфигурацияланышы мүмкүн:

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
  // Жооптун аталыштарын мүчүлүштүктөрдү оңдоого коюуга болот, мисалы out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Рекорд `MX` жана рекорд `CNAME` бирге жашай албагандыктан, эгер сиз бир эле учурда домендик аталыштагы электрондук каттарды алууну кааласаңыз, скрипт [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` деңгээлге `A` рекордуна чейин иштешиңиз керек.

Кошумчалай кетсек, материктик Кытайдагы булут сатуучуларынын чет элдик трафик төлөмдөрү салыштырмалуу кымбат болгондуктан, эгер сиз чыгымдарды оптималдаштырууну кааласаңыз, ага жетүү үчүн [Huawei DNS акысыз географиялык резолюциясын](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) жана [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ыңгайлаштырылган домен атын (төмөндө көрсөтүлгөндөй) колдонсоңуз болот трафиктин диверсиясы──Материк Кытайдагы трафик маршруту Baidu Cloud `CDN` , эл аралык трафик cloudflare .

![](https://p.3ti.site/1721119788.avif)

Бул жайгаштырууну оптималдаштыруу чечимдери татаалыраак жана келечекте өзүнчө бөлүмдөрдө киргизилет.

### Жалпы Домендик Аталышты Кайра Багыттоо

Эгер сиз веб-сайтты өзүңүздүн негизги веб-сайтыңыз катары түзүү үчүн `i18n.site` колдонсоңуз, адатта пан-доменди кайра багыттоону конфигурациялашыңыз керек, башкача айтканда, `*.xxx.com` (анын ичинде `www.xxx.com` ) кирүү мүмкүнчүлүгүн `xxx.com` багыттоо керек.

Бул талапты Alibaba Cloud `CDN` `EdgeScript` ( [англис документи](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Кытай документи](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) жардамы менен ишке ашырууга болот.

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) домен атын кошуңуз жана Alibaba Cloud `CDN` доменинин аталышын `*.xxx.com` `CNAME` багыттаңыз.

![](https://p.3ti.site/1721122000.avif)

Мисалы, жогорудагы сүрөттө `*.i18n.site` болгон пан-домен атын кайра багыттоо конфигурациясы төмөнкүдөй:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### nginx Менен Жайгаштыруу

Сураныч, `server` `out/main/htm` төмөнкүгө окшош `/root/i18n/md/out/main/htm` кошуңуз nginx

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## `github action` Үзгүлтүксүз Интеграцияга Негизделген

`github action` конфигурациялоо үчүн төмөнкүгө кайрылсаңыз болот:

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

Конфигурациядан көрүнүп тургандай, бул иш процесси `main` жана `dist` бутагына түрткөндө иштетилет.

Документти жарыялоо үчүн жумуш процесси филиалдын аталышына ылайыктуу конфигурация файлын колдонот, бул жерде `.i18n/htm/main.yml` жана `.i18n/htm/dist.yml` жарыялоо конфигурациясы катары колдонулат.

Документти чыгаруу процесси үчүн төмөнкү мыкты тажрыйбаларды сунуштайбыз:

Өзгөртүүлөр `main` тармагына түртүлгөндө, документ түзүлүүгө жана алдын ала көрүү станциясына жайылтылат (алдын ала көрүү станциясы жеткиликтүү [github page](//pages.github.com) ).

Документтин алдын ала көрүү сайтында туура экендигин ырастагандан кийин, код бириктирилип, `dist` тармагына түртүлөт жана расмий куруу жана жайылтуу онлайн режимине өтөт.

Албетте, жогорудагы процессти ишке ашыруу көбүрөөк конфигурацияларды жазууну талап кылат.

Иш агымынын сценарийин түзүү үчүн сиз иш жүзүндөгү долбоорго кайрылсаңыз болот [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

Конфигурациядагы `secrets.I18N_SITE_TOKEN` жана `secrets.NPM_TOKEN` код базасында жашыруун өзгөрмөлөрдү конфигурациялоону талап кылат.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` алуу [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` конфигурациядагы `npm` пакеттин жарыялоо белгиси болуп саналат [npmjs.com](//npmjs.com) жарыялоо уруксаттары менен токен түзүңүз (төмөндө көрсөтүлгөндөй).

![](//p.3ti.site/1730969906.avif)


## Каталог Структурасы

### `public`

Вебсайттын статикалык файлдары, мисалы `favicon.ico` , `robots.txt` , ж.б.

Бул жерде сөлөкөт файлдары менен түзүлүшү мүмкүн [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

`.i18n` каталогунун астында `i18n.site` конфигурация файлдары, котормо кэши ж.б. бар. Чоо-жайын билүү үчүн кийинки ["Конфигурация"](/i18n.site/conf) бөлүмүн караңыз.

### `en`

`.i18n/conf.yml` конфигурация файлынын `fromTo` ичинен `en` туура келген булак тил каталогу

```yaml
i18n:
  fromTo:
    en: zh
```

Котормо конфигурациясын караңыз [i18](/i18/use)