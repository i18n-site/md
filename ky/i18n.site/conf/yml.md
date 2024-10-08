# .i18n/conf.yml

`i18n.site` үчүн профиль `.i18n/conf.yml` болуп саналат.

[`i18`](/i18) , `ignore:` жана `i18n:` орнотууларынан тышкары, конфигурация файлы төмөнкүдөй:

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

Алардын ичинен `upload` `ext:` чейинки конфигурация пункту жарыялоодо `.md` гана жүктөлөт дегенди билдирет.

## Жогорку Навигация Навигациясы

`nav:` конфигурация параметрлери, башкы беттин жогору жагындагы навигация менюсуна туура келет.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Алардын ичинен `i18n: home` `en/i18n.yml` `home: Home` туура келет.

`en/i18n.yml` бир нече тилге которулат, мисалы `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Котормо аяктагандан кийин, котормонун маанисин өзгөртө аласыз `yml` , бирок котормо `yml` ачкычын кошуп же жок кылбаңыз.

### `use: Toc` , Бир Файл Үлгүсү (Контур Менен)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` `Toc` шаблонду колдонуу менен көрсөтүүнү билдирет, ал жалгыз `Markdown` шаблонду көрсөтүүдө.

`TOC` - `Table of Contents` аббревиатурасы. Бул шаблон жасалганда, бул `Markdown` файлдын контуру каптал тилкесинде көрсөтүлөт.

`url:` `Markdown` файл жолун билдирет ( `/` түпкү каталогуна `/README.md` туура келет, бул файлдын аталышы чоң жана кичине суффиксти талап кылат).

### `use: Md` , Бир Файл Үлгүсү (Контур Жок)

`Md` үлгүсү менен `Toc` үлгүсү бирдей жана экөө тең бир `Markdown` файлды көрсөтүү үчүн колдонулат. Бирок `Md` шаблон каптал тилкесинде контурду көрсөтпөйт.

Жогорудагы конфигурациядагы `use: Toc` `use: Md` өзгөртүп, `md` каталогунда `i18n.site` кайра иштетип, андан кийин башкы бетте өзгөрүүлөрдү көрүү үчүн иштеп чыгууну алдын ала көрүү URL дарегине баш багыңыз.

### Конфигурация Жолу Жок Демейки Жүктөө

Эгерде белгилүү бир жолго кирсе жана анын жол префикси `nav:` конфигурацияланбаса, жолго туура келген `MarkDown` файл демейки боюнча жүктөлөт жана `Md` шаблону аркылуу көрсөтүлөт.

Мисалы, эгер `/test` кирсе, жана `nav:` бул жолсуз конфигурацияланса жана барак тили англисче (код `en` ) болсо, `/en/test.md` демейки боюнча жүктөлөт жана `Md` үлгүсү аркылуу көрсөтүлөт.

Эгерде `/en/test.md` бул файл жок болсо, демейки `404` барак көрсөтүлөт.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Көп Файл Үлгүсү

Конфигурация файлында:

```
  - i18n: blog
    use: Doc
```

Калыптарды көрсөтүү үчүн `Doc` колдонууну көрсөтөт.

`Doc` үлгүсү бир же бир нече долбоорлор үчүн документ схемаларын түзүү үчүн бир нече `MarkDown` бириктирүүнү колдойт.

#### Бир Долбоор (Бир Нече Файл)

Жогорудагы `blog` бир нерсе режими `Doc` болуп саналат.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url Бош Болгондо, Ал Демейки i18n Маанисине Келет

Эгерде `url` жазылбаса, `url` демейки `i18n` маанисине келет. Бул эреже башка калыптар үчүн да күчүнө кирет.

Жогорудагы жазуу ыкмасы `url: blog` барабар жана анын тиешелүү файлы `en/blog/TOC` .

#### Бир Нече Долбоорлор

`.i18n/conf.yml` `i18n:doc` конфигурациясы көп долбоор режими.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Бул жерде, `menu: NB demo1,demo2` , ачылуучу менюну көрсөтүү үчүн `NB` шаблонду колдонууну билдирет.

`NB` , `Name Breif` аббревиатурасы, ачылуучу менюда долбоордун атын жана урааны көрсөтүлө тургандыгын билдирет.

`NB` кийин ага берилген `demo1,demo2` параметр келет.
`demo1,demo2` : ** `,` **

Жогорудагы параметрлер үчүн, тиешелүү каталогдун индекси файлы болуп саналат:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Мазмунунун Индекси

`i18n.site` `json` каталогдун конфигурациясын түзүү үчүн `TOC` калыптын конфигурациясына туура келген `doc` каталогдун индексинин файлын окуу үчүн демо кампада `js` плагинди `.i18n/hook/after.tran/TOC.js` аткарат.

Эгер сиз `doc` шаблонду колдонсоңуз, сизде бул плагин болушу керек.

Эгер сиз `i18n.site` долбоорун бош папкадан инициализацияласаңыз, демо-долбоор `.i18n` каталогуңузга көчүрүүнү унутпаңыз.

`Doc` үлгүсү түзүлгөн `json` негизинде мазмундун контурун көрсөтөт.

##### Толук Мазмунду Түшүндүрүү

`en/blog/TOC` төмөнкүдөй :

```
README.md

news/README.md
  news/begin.md
```

##### Деңгээлдерди Көрсөтүү Үчүн Чегинүүнү Колдонуңуз

Жогорудагы `en/blog/TOC` биринчи катарындагы `README.md` төмөнкү сүрөттөгү `i18n.site` туура келет, бул долбоордун аталышы.

Кийинки эки сап төмөндөгү скриншотто көрсөтүлгөндөй.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` туура келет,
`news/begin.md` `Our Product is Online !` туура келет

`TOC` файлдары контурдун иерархиялык байланышын көрсөтүү үчүн чегинген, көп деңгээлдеги чегинүүнү жана `#` менен башталган сап комментарийлерин колдойт.

##### Ата-Энелик Деңгээл Мазмунду Эмес, Аталышты Гана Жазат.

Чектөөнүн бир нече деңгээли болгондо, аталык деңгээл мазмунду эмес, аталышты гана жазат. Болбосо, типография бузулуп калат.

##### Project README.md

Мазмун `en/demo2/README.md` сыяктуу `README.md` пунктуна жазылышы мүмкүн.

Бул файлдын мазмуну мазмундун контурун көрсөтпөгөндүгүн эске алыңыз, андыктан узундугун чектеп, кыска киришүү жазуу сунушталат.

###### Долбоордун Урааны

Сиз `Deme Two` ылдыйда ачылуучу менюну жана каталогдун долбоорунун аталышын : астынан көрө аласыз `Your Project slogan`

![](https://p.3ti.site/1721276842.avif)

Бул `en/demo2/README.md` биринчи катарга туура келет :

```
# Demo Two : Your Project slogan
```

Долбоордун `README.md` биринчи даражасынын аталышынын биринчи кош чекити `:` кийинки мазмуну долбоордун урааны катары каралат.

Кытайдан, Япониядан жана Кореядан келген колдонуучулар, сиз толук туурасы эки чекиттин ордуна `:` жарым туурасын колдонушуңуз керектигин эске алыңыз.

##### TOC Кантип Жапырт Көчүрүү Керек?

`TOC` файл баштапкы тилдин каталогуна жайгаштырылышы керек.

Мисалы, эгер баштапкы тил кытай тили болсо, анда жогорудагы `TOC` `zh/blog/TOC` болуп саналат.

Эгерде баштапкы тил өзгөртүлсө, сиз долбоордогу белгилүү бир тилдин `TOC` файлдарын башка тилге көчүрүүңүз керек.

Сиз төмөнкү буйруктарга кайрыла аласыз:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Сураныч, жогорудагы буйруктагы `en/` жана `zh/` тил кодуңузга өзгөртүңүз.