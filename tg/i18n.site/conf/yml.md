# .i18n/conf.yml

Профил барои `i18n.site` `.i18n/conf.yml` аст.

Ба истиснои танзимоти [`i18`](/i18) , `ignore:` ва `i18n:` , файли конфигуратсия чунин аст:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
addon:
  - i18n.addon/toc
```

Дар байни онҳо, `upload` то `ext:` адад конфигуратсия маънои онро дорад, ки ҳангоми нашр танҳо `.md` бор карда мешавад.

## Навигарии Болоӣ

`nav:` имконоти конфигуратсия, ки ба менюи паймоиш дар болои саҳифаи хонагӣ мувофиқ аст.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Дар байни онҳо, `i18n: home` ба `home: Home` дар `en/i18n.yml` мувофиқат мекунад.

`en/i18n.yml` ба забонҳои гуногун тарҷума карда мешавад, ба монанди `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Пас аз анҷоми тарҷума, шумо метавонед арзиши тарҷумаи `yml` тағир диҳед, аммо калиди тарҷумаи `yml` -ро илова ё нест накунед.

### `use: Toc` , Қолаби Як Файл (Бо Контур)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` маънои намоиш додани истифодаи қолаби `Toc` мебошад, ки як қолаби ягонаи `Markdown` ро пешкаш мекунад.

`TOC` ихтисораи `Table of Contents` аст. Вақте ки ин қолаб дода мешавад, контури ин `Markdown` файл дар панели паҳлӯ намоиш дода мешавад.

`url:` роҳи файли `Markdown` ро ифода мекунад ( `/` ба директорияи решавӣ `/README.md` мувофиқат мекунад, ин номи файл префикси калон ва суффикси хурдро талаб мекунад).

### `use: Md` , Қолаби Файли Ягона (На Нақша)

Шаблони `Md` ва қолаби `Toc` якхелаанд ва ҳарду барои намоиш додани файли ягонаи `Markdown` истифода мешаванд. Аммо қолаби `Md` контурро дар панели паҳлӯ нишон намедиҳад.

Шумо метавонед `use: Toc` дар конфигуратсияи дар боло овардашуда ба `use: Md` тағир диҳед, `i18n.site` дар директорияи `md` дубора иҷро кунед ва сипас ба URL-и пешнамоиши рушд дидан кунед, то тағиротро дар сафҳаи асосӣ мушоҳида кунед.

### Боркунии Пешфарз Бе Роҳи Конфигуратсия

Агар ба як роҳи муайян дастрасӣ дошта бошад ва префикси роҳи он дар `nav:` танзим нашуда бошад, файли `MarkDown` ба роҳ мувофиқ бо нобаёнӣ бор карда мешавад ва бо истифода аз қолаби `Md` намоиш дода мешавад.

Масалан, агар ба `/test` дастрасӣ дошта бошад ва `nav:` бе ин роҳ танзим шуда бошад ва забони саҳифа англисӣ бошад (код `en` ), `/en/test.md` бо нобаёнӣ бор карда мешавад ва бо истифода аз қолаби `Md` намоиш дода мешавад.

Агар `/en/test.md` ин файл мавҷуд набошад, саҳифаи пешфарз `404` намоиш дода мешавад.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Қолаби Бисёрфайл

Дар файли конфигуратсия:

```
  - i18n: blog
    use: Doc
```

Истифодаи `Doc` барои намоиши қолаб нишон медиҳад.

Шаблон `Doc` якҷоя кардани якчанд `MarkDown` барои тавлиди контурҳои ҳуҷҷат барои лоиҳаҳои як ё якчанд лоиҳа дастгирӣ мекунад.

#### Лоиҳаи Ягона (Файлҳои Сершумор)

`blog` дар боло ҳолати ягонаи `Doc` мебошад.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Вақте Ки url Холӣ Аст, Он Ба Арзиши i18n Муқаррар Карда Мешавад

Агар `url` навишта нашуда бошад, `url` ба арзиши `i18n` муқаррар карда мешавад. Ин қоида барои дигар қолабҳо низ эътибор пайдо мекунад.

Усули навиштани боло ба `url: blog` баробар аст ва файли мувофиқи он `en/blog/TOC` аст.

#### Бисёр Лоиҳаҳо

Конфигуратсияи `i18n:doc` аз `.i18n/conf.yml` ҳолати бисёрсоҳавӣ мебошад.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Дар ин ҷо, `menu: NB demo1,demo2` маънои истифодаи қолаби `NB` барои намоиш додани менюи афтанда дорад.

`NB` , ки ихтисораи `Name Breif` аст, маънои онро дорад, ки менюи афтанда метавонад ном ва шиори лоиҳаро нишон диҳад.

`NB` пас аз параметри `demo1,demo2` , ки ба он дода шудааст.
Эзоҳ : ** Пеш ва пас аз вергул `,` дар `demo1,demo2` набояд фосилаи ** мавҷуд бошад.

Барои параметрҳои дар боло зикршуда, файли индекси директорияи мувофиқ ин аст:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Индекси Ҷадвали Мундариҷаи TOC

`i18n.site` `js` плагини `.i18n/hook/after.tran/TOC.js` -ро дар анбори намоишӣ иҷро мекунад, то файли `doc` индекси феҳристиро, ки ба конфигуратсияи `TOC` шаблон мувофиқ аст, барои тавлиди `json` директория таҳия кунад.

Агар шумо қолаби `doc` истифода баред, шумо бояд ин плагинро дошта бошед.

Агар шумо лоиҳаи `i18n.site` аз ҷузвдони холӣ оғоз кунед, фаромӯш накунед, ки лоиҳаи намоишии `.i18n` ба феҳристи худ нусхабардорӣ кунед.

Шаблони `Doc` ҷадвали мундариҷаро дар асоси `json` тавлидшуда медиҳад.

##### Тавсифи Муфассали Мундариҷа

`en/blog/TOC` он чунин аст :

```
README.md

news/README.md
  news/begin.md
```

##### Барои Нишон Додани Сатҳҳо Абзорро Истифода Баред

`README.md` дар сатри якуми `en/blog/TOC` дар боло ба `i18n.site` дар расми зер мувофиқат мекунад, ки номи лоиҳа аст.

Ду сатри навбатӣ тавре ки дар скриншот дар зер нишон дода шудаанд.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` ба `News` мувофиқат мекунад,
`news/begin.md` ба `Our Product is Online !` мувофиқат мекунад

Файлҳои `TOC` барои нишон додани робитаи иерархивии контур, пуштибонии қафомонии бисёрсатҳӣ ва шарҳҳои сатрӣ аз `#` сар карда мешаванд.

##### Сатҳи Волидайн Танҳо Унвонро Менависад, На Мундариҷа.

Ҳангоме ки сатҳҳои сершумор вуҷуд доранд, сатҳи волидайн танҳо унвонро менависад, на мундариҷа. Дар акси ҳол, матбаа вайрон мешавад.

##### Лоиҳаи README.md

Мундариҷаро дар банди `README.md` , ба мисли `en/demo2/README.md` навиштан мумкин аст.

Дар хотир доред, ки мундариҷаи ин файл ҷадвали мундариҷаро нишон намедиҳад, аз ин рӯ тавсия дода мешавад, ки дарозиро маҳдуд кунед ва сарсухани кӯтоҳ нависед.

###### Шиори Лоиҳа

Шумо мебинед `Your Project slogan` ки `Deme Two` дар зери менюи афтанда ва номи контури лоиҳа : дорад.

![](https://p.3ti.site/1721276842.avif)

Ин ба сатри якуми `en/demo2/README.md` рост меояд :

```
# Demo Two : Your Project slogan
```

Мундариҷае, ки пас аз ду нуқтаи аввали `:` унвони дараҷаи якуми лоиҳаи `README.md` навишта шудааст, шиори лоиҳа ҳисобида мешавад.

Истифодабарандагон аз Чин, Ҷопон ва Корея, лутфан қайд кунед, ки шумо бояд ба ҷои ду нуқтаи пурраи паҳнои `:` истифода баред.

##### Чӣ Тавр TOC-Ро Ба Таври Оммавӣ Интиқол Додан Мумкин Аст?

`TOC` файлҳо бояд дар феҳристи забони сарчашма ҷойгир карда шаванд.

Масалан, агар забони аслӣ чинӣ бошад, пас `TOC` дар боло `zh/blog/TOC` аст.

Агар забони манбаъ тағир дода шавад, шумо бояд файлҳои `TOC` -и забони муайянро дар лоиҳа ба забони дигар интиқол диҳед.

Шумо метавонед ба фармонҳои зерин муроҷиат кунед:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Лутфан `en/` ва `zh/` дар фармони боло ба рамзи забони худ тағир диҳед.