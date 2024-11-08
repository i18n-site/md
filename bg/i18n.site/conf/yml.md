# .i18n/conf.yml

Конфигурационният файл за `i18n.site` е `.i18n/conf.yml` и съдържанието е както следва :

```yaml
i18n:
  fromTo:
    en:
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
    use: Blog
addon:
  - i18n.addon/toc
```

Сред тях конфигурационен елемент `upload` до `ext:` означава, че само `.md` ще бъдат качени при публикуване.

## Горна Навигация Нав

`nav:` опции за конфигурация, съответстващи на навигационното меню в горната част на началната страница.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Сред тях `i18n: home` съответства на `home: Home` в `en/i18n.yml` (където `en` е изходният език на превода на проекта).

`en/i18n.yml` съдържание е текстът, показан в менюто за навигация, който ще бъде преведен според `fromTo` в конфигурацията, например преведен на `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

След като преводът приключи, можете да промените стойността на превод `yml` , но не добавяйте или изтривайте ключа на превод `yml` .

### `use: Toc` Шаблон За Единичен Документ С Контур

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` означава рендиране с помощта на шаблон `Toc` , което е рендиране на единичен шаблон `Markdown` .

`TOC` е съкращението на `Table of Contents` Когато този шаблон бъде изобразен, очертанията на този `Markdown` файл ще бъдат показани в страничната лента.

`url:` представлява пътя на файла от `Markdown` ( `/` съответства на основната директория `/README.md` , това име на файл изисква префикс с главни букви и суфикс с малки букви).

### `use: Md` Шаблон За Единичен Документ Без Контур

Шаблонът `Md` и шаблонът `Toc` са еднакви и двата се използват за изобразяване на един файл `Markdown` . Но шаблонът `Md` не показва очертанията в страничната лента.

Можете да промените `use: Toc` в горната конфигурация на `use: Md` , да изпълните `i18n.site` в директорията `md` отново и след това да посетите URL адреса за преглед на разработката, за да наблюдавате промените на началната страница.

### `use: Blog` Шаблони За Блогове

Шаблонът на блога показва списък със статии (заглавия и резюмета) по реда на времето на публикуване.

[→ Щракнете тук, за да научите за конкретната конфигурация](/i18n.site/conf/blog)

### `use: Doc` Шаблони На Файлови Документи

В конфигурационния файл:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Показва използването на `Doc` за изобразяване на шаблон.

Шаблонът `Doc` поддържа интегриране на множество `MarkDown` за генериране на очертания на документи за един или множество проекти.

#### Множество Проекти И Множество Файлове

Конфигурацията на `.i18n/conf.yml` в `i18n:doc` е режим на изобразяване на множество проекти и много файлове.

Тук `menu: NB demo1,demo2` означава използване на шаблон `NB` за изобразяване на падащото меню.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , което е съкращението на `Name Breif` , означава, че падащото меню може да показва името и слогана на проекта.

`NB` е последван от параметъра `demo1,demo2` който му е предаден.

Забележка : ** Не трябва да има интервали ** преди и след запетая `,` в `demo1,demo2` .

Съответният индексен файл на директория за горните параметри е:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Един Проект Множество Файлове

Ако имате само един проект, можете да го конфигурирате по следния начин.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Един проект с множество файлове не поддържа конфигуриране на `url` като основен път `/`
> Ако __conf.yml → nav:__ Не е конфигуриран коренен път, при достъп до началната страница на уебсайта, той ще бъде автоматично пренаписан на първия URL под конфигурацията `nav:` .
> Този дизайн е за по-добро разграничаване на проектни документи, блогове и друго съдържание чрез директории.
> Препоръчително е да използвате един файл и една страница като начална страница.

> [!TIP]
> Ако `url` не е написано, `url` по подразбиране е със стойност `i18n` Това правило влиза в сила и за други шаблони.

#### TOC Индекс На Съдържанието

Ако шаблон `use: Doc` е активиран в конфигурацията, моля, активирайте плъгин `i18n.addon/toc` в `.i18n/conf.yml` Конфигурацията е както следва :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` автоматично ще инсталира и изпълни този плъгин, ще прочете `TOC` индексния файл на директорията и ще генерира `json` контура на директорията.

Ако това е един проект с множество файлове, основната директория `TOC` е директорията, съответстваща на `url:` в директорията на изходния език. Например, ако изходният език е китайски: файлът, съответстващ на `url: flashduty` е `zh/flashduty/TOC` .

Ако има множество проекти и множество файлове, няма нужда да конфигурирате `url:` Основната директория на `TOC` е директорията, съответстваща на стойността на `i18n` .

##### Подробно Описание На Съдържанието

`en/blog/TOC` е следното :

```
README.md

news/README.md
  news/begin.md
```

##### Използвайте Отстъп, За Да Посочите Нивата

`README.md` в първия ред от `en/blog/TOC` по-горе съответства на `i18n.site` на снимката по-долу, което е името на проекта.

Следващите два реда са както е показано на екранната снимка по-долу.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` съответства на `News` ,
`news/begin.md` съответства на `Our Product is Online !`

Файловете `TOC` са с отстъп, за да покажат йерархичната връзка на контура, поддържат отстъп на много нива и коментари на редове, започващи с `# ` .

##### Нивото Родител Пише Само Заглавието, Но Не И Съдържанието.

Когато има няколко нива на отстъп, родителското ниво записва само заглавието, но не и съдържанието. В противен случай типографията ще бъде объркана.

##### Проект README.md

Съдържанието може да бъде написано в елемент `README.md` , като например `en/demo2/README.md` .

Имайте предвид, че съдържанието на този файл не показва очертание на съдържанието, така че се препоръчва да ограничите дължината и да напишете кратко въведение.

###### Слоган На Проекта

Можете да видите, че `Deme Two` има мотото на проекта под падащото меню и името на проекта в каталога `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Това съответства на първия ред от `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Съдържанието след първото двоеточие `:` от заглавието на първо ниво на проект `README.md` ще се счита за слоган на проекта.

Потребители от Китай, Япония и Корея, моля, обърнете внимание, че трябва да използвате двоеточие `:` с половин ширина вместо двоеточие с пълна ширина.

##### Как Да Преместите TOC На Едро?

`TOC` файла трябва да бъдат поставени в директорията на изходния език.

Например, ако изходният език е китайски, тогава `TOC` по-горе е `zh/blog/TOC` .

Ако изходният език е променен, трябва групово да преместите `TOC` файла на определен език в проекта на друг език.

Можете да се обърнете към следните команди:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Моля, променете `en/` и `zh/` в горната команда към кода на вашия език.

### Зареждане По Подразбиране Без Конфигурационен Път

За определен път, до който се осъществява достъп, ако префиксът на пътя не е конфигуриран в `nav:` , файлът `MarkDown` , съответстващ на пътя, ще бъде зареден по подразбиране и изобразен с помощта на шаблона `Md` .

Например, ако се осъществи достъп до `/test` и `nav:` е конфигуриран без префикса на този път и текущият език на сърфиране е английски (код `en` ), `/en/test.md` ще бъде зареден по подразбиране и изобразен с помощта на шаблон `Md` .

Ако `/en/test.md` този файл не съществува, ще се покаже страницата по подразбиране `404` .

<img src="//p.3ti.site/1721184299.avif" style="width:360px">