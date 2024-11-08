# Орнотуу Жана Колдонуу

## windows Биринчи git bash Орнотот

windows , [биринчи `git bash` жүктөп алуу жана орнотуу үчүн бул жерди басыңыз](https://git-scm.com/download/win) .

`git bash` ичинде кийинки операцияларды аткарыңыз.

## Орнотуу

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Котормо Белгисин Конфигурациялоо

Токенди көчүрүү үчүн [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` түзүңүз, ага көчүрүлгөн мазмунду чаптаңыз, мазмуну төмөнкүдөй:

```
token: YOUR_API_TOKEN
```

Мындан [i18n.site/payBill](//i18n.site/payBill) , сиз төлөм кредиттик картасын байлашыңыз керек (Эч кандай толтуруунун кереги жок, веб-сайт колдонууга жараша төлөмдөрдү автоматтык түрдө кармап турат, [бааны башкы баракчадан караңыз](/#price) ).

## Колдонуу

### Демо Долбоор

`i18` котормосунун конфигурациясын билүү үчүн демо долбоорго кайрылыңыз [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Кытайдагы колдонуучулар клондой алышат [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Клондоодон кийин, каталогду киргизип, котормону аяктоо үчүн `i18` иштетиңиз.

### Каталог Структурасы

Калып кампасынын каталогунун түзүлүшү төмөнкүдөй

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` каталогундагы которулган демо файлдар бир гана мисал жана аларды жок кылууга болот.

### Котормосун Иштетүү

Каталогду киргизип, которуу үчүн `i18` иштетиңиз.

Котормодон тышкары, программа `.i18n/data` папкасын да жаратат, аны репозиторийге кошуңуз.

Жаңы файлды которгондон кийин, бул каталогдо жаңы маалымат файлы түзүлөт `git add . ` .

## Конфигурация Файлы

`.i18n/conf.yml` `i18` буйрук сабынын котормо куралынын конфигурация файлы

мазмуну төмөнкүдөй:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Котормо &

Конфигурация файлында `fromTo` багынуучусу:

`en` баштапкы тил, `zh ja ko de fr` котормонун максаттуу тили.

Тил коду караңыз [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Мисалы, эгер сиз кытайчаны англис тилине которгуңуз келсе, бул сапты `zh: en` кайра жазыңыз.

Бардык колдоого алынган тилдерге которууну кааласаңыз, `:` кийин бош калтырыңыз. мисалы

```
i18n:
  fromTo:
    en:
```

Ар кандай подкаталогдор үчүн ар кандай `fromTo` конфигурациялай аласыз / Демонстрация төмөнкүчө жазылган :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Бул конфигурация таблицасында каталог `blog` котормонун баштапкы тили `zh` , ал эми каталог `blog/your_file_name.md` котормонун баштапкы тили `ja` .

### Көп Тилдүү Сүрөттөр/Шилтемелер

`replace:` жана `MarkDown` сүрөттөрдөгү жана шилтемелердеги URL даректери (жана кыстарылган `HTML` `src` жана `href` атрибуттары) бул префикс менен `.i18n/conf.yml` конфигурацияланганда, URL'деги баштапкы тил коду котормонун тил коду менен алмаштырылат ( [тил код тизмеси](/i18/LANG_CODE) ).

Мисалы, сиздин конфигурацияңыз төмөнкүдөй:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` - сөздүк, ачкыч - алмаштырыла турган URL префикси, ал эми мааниси - алмаштыруу эрежеси.

Жогорудагы `ko de uk>ru zh-TW>zh >en` эрежесин алмаштыруунун мааниси `ko de` өз тилинин кодунун сүрөтүн колдонот, `zh-TW` жана `zh` `zh` сүрөтүн, `uk` `ru` сүрөтүн колдонот жана башка тилдер (мисалы `ja` ) сүрөттү колдонот демейки боюнча `en` .

Мисалы, французча ( `fr` ) `MarkDown` булак файлы төмөнкүдөй :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Которулган жана түзүлгөн англис ( `en` ) файлы төмөнкүдөй :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Бул жерде баштапкы тилдин кодундагы `/en/` котормо тилдеги `/zh/` алмаштырылат.

Эскертүү : URL дарегинде алмаштырылган тексттин тил кодунун алдында жана андан кийин `/` болушу керек.

> [!TIP]
> Эгерде `- /` `url:` конфигурацияланса, салыштырмалуу жолдор гана дал келет, бирок `//` менен башталган URL'дер дал келбейт.
>
> Эгер домендик аталыштын кээ бир шилтемелери алмаштырылгысы келсе, кээ бирлери алмаштырылгысы келбесе, аларды айырмалоо үчүн `[x](//x.com/en/)` жана `[x](https://x.com/en/)` сыяктуу ар кандай префикстерди колдонсоңуз болот.

### Файлды Этибарга Алба

Демейки боюнча, баштапкы тил каталогундагы `.md` жана `.yml` менен башталган бардык файлдар которулат.

Эгер сиз кээ бир файлдарды этибарга албай, аларды которбоону кааласаңыз (мисалы, бүтө элек долбоорлор), аны `ignore` талаасы менен конфигурациялай аласыз.

`ignore` [globset](https://docs.rs/globset/latest/globset/#syntax) `.gitignore` файл менен колдонот.

Мисалы, жогорудагы конфигурация файлындагы `_* ` `_` менен башталган файлдар которулбайт дегенди билдирет.

## Котормо Эрежелери

### Котормо Редакторлору Саптарды Кошуп Же Жок Кылбашы Керек

Котормо түзөтүүгө болот. Түпнуска текстти өзгөртүңүз жана аны кайра машина менен которуңуз, котормого кол менен киргизилген өзгөртүүлөр кайра жазылбайт (эгерде түпнуска тексттин бул абзацы өзгөртүлбөсө).

> [!WARN]
> Котормонун саптары менен түпнуска тексттин ортосунда бирден кат алышуу болушу керек. Башкача айтканда, котормону түзүүдө саптарды кошуп же жок кылбаңыз. Болбосо, котормонун түзөтүү кэшинде башаламандыкка алып келет.

Эгер бир нерсе туура эмес болуп калса, [чечүү жолдорун FAQ бөлүмүнө караңыз.](/i18/qa#H1)

### `YAML` Котормо

Буйрук сабы куралы `.yml` менен аяктаган бардык файлдарды баштапкы тилдин файл каталогунан таап, аларды которот.

* Файлдын аталышынын суффикси `.yml` болушу керек экенин эске алыңыз ( `.yaml` эмес).

Курал сөздүк ачкычтарын эмес, сөздүк баалуулуктарын `.yml` которот.

Мисалы `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` деп которулат

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` котормосун кол менен да өзгөртүүгө болот (бирок котормодогу баскычтарды же саптарды кошуп же жок кылбаңыз).

`YAML` котормонун негизинде ар кандай программалоо тилдери үчүн эл аралык чечимдерди оңой түзө аласыз.

## Өркүндөтүлгөн Колдонуу

### Котормочу Подкаталог

`.i18n/conf.yml` түзүлсө (ар бир жолу демо долбоордун шаблонунан баштоонун кереги жок), `i18` жакшы иштейт.

Буйрук сабы куралы бардык подкаталогдордон `.i18n/conf.yml` конфигурацияны таап, аларды которот.

[monorepo](//monorepo.tools) колдонгон долбоорлор тил файлдарын подкаталогдорго бөлө алат.

![](https://p.3ti.site/1719910016.avif)

### Ыңгайлаштырылган Орнотуу Каталогу

Ал демейки боюнча `/usr/local/bin` орнотулат.

Эгерде `/usr/local/bin` жазууга уруксаты жок болсо, ал `~/.bin` орнотулат.

`TO` чөйрө өзгөрмөсүн орнотуу орнотуу каталогун аныктай алат, мисалы :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```