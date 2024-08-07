# .i18n/conf.yml

Конфигурациската датотека е `.i18n/conf.yml` `i18n.site`

Освен поставките `ignore:` и `i18n:` на [`i18`](/i18) конфигурациската датотека е како што следува:

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
```

Меѓу нив, ставката `.md` `ext:` конфигурација на `upload`

## Врвна Навигација

`nav:` за конфигурација, што одговараат на менито за навигација на врвот на почетната страница.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Меѓу нив `i18n: home` одговара на `en/i18n.yml`中`home: Home` .

ќе `en/i18n.yml` преведено на повеќе јазици, како што е `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Откако ќе заврши преводот, можете да `yml` менувате вредноста на `yml`

### `use: Toc` Шаблон За Една Датотека (Со Преглед)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` значи користење на рендерирање `Toc` , што е рендерирање на еден шаблон `Markdown` .

`TOC` е кратенката од `Table of Contents` `Markdown`

`url:` `Markdown` `/` `/README.md`

### `use: Md` Шаблон За Една Датотека (Без Преглед)

Шаблонот е ист како `Toc` , `Md` двата се користат за прикажување на една датотека `Markdown` . Сепак `Md` шаблонот не го прикажува прегледот во страничната лента.

Можете да ја `use: Toc` во горната конфигурација во `use: Md` , да стартувате `i18n.site` во директориумот `md` , а потоа да ја посетите URL-то за преглед на развојот за да ги набљудувате промените на почетната страница.

### Стандардно Вчитување Без Патека За Конфигурација

Ако префиксот на патеката на одредена патека до која се пристапува не е конфигуриран во `nav:` датотеката `MarkDown` што одговара на патеката ќе биде стандардно вчитана и прикажана со помош на шаблонот `Md` .

На пример, ако го посетите `/test` и `nav:` е конфигуриран без оваа патека, а јазикот на страницата е англискиот (шифра `en` ), шаблонот ќе биде вчитан `/en/test.md` и изречен со користење `Md` стандардно.

`/en/test.md` оваа датотека не постои, ќе се прикаже стандардната `404` страница.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` Шаблон Со Повеќе Датотеки

Во конфигурациската датотека:

```
  - i18n: blog
    use: Doc
```

Покажува користење на `Doc`

`Doc` поддржува интегрирање на повеќе `MarkDown` за генерирање на контури на документи за единечни или повеќе проекти.

#### Еден Проект (Повеќе Датотеки)

Во горенаведеното `blog` режимот на еден проект на `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Кога URL-То Е Празно, Стандардно Е Вредноста На i18n

Ако не пишувате `url` `url` на вредноста на `i18n` .

Горенаведениот метод за пишување е еквивалентен на имање `url: blog` а нејзината соодветна датотека е `en/blog/TOC` .

#### Повеќе Проекти

Конфигурацијата во `.i18n/conf.yml` е режим `i18n:doc` повеќе проекти.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Овде, `menu: NB demo1,demo2` значи користење на `NB` за прикажување на паѓачкото мени.

`NB` е кратенката од `Name Breif` , што покажува дека паѓачкото мени може да ги прикаже името и слоганот на проектот.

`NB` го следи параметарот `demo1,demo2` што му е предаден.
Забележете дека не треба `demo1,demo2` има празни места ** пред и по запирката `,` во : **

За горенаведените параметри, соодветната датотека со индекс на директориуми е:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Индекс На Содржина На TOC

`i18n.site` `js` `.i18n/hook/after.tran/TOC.js` `doc` `TOC` `json`

Ако користите `doc` , мора да го имате овој приклучок.

Ако го иницијализирате `i18n.site` од празна папка, не заборавајте да го копирате `.i18n` во демо-проектот во вашиот директориум.

`Doc` ќе ја прикаже табелата со содржини врз основа на генерираниот `json` .

##### Детално Објаснување За Содржината

Содржината е : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Користете Вовлекување За Да Ги Означите Нивоата

`README.md` `en/blog/TOC` `i18n.site`

Следните две линии се како што е прикажано на екранот подолу.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` одговара на `News` ,
`news/begin.md` одговара на `Our Product is Online !`

`TOC`

##### Родителското Ниво Го Пишува Само Насловот, А Не Содржината.

Кога има повеќе нивоа на вовлекување, родителското ниво го пишува само насловот, а не и содржината. Во спротивно, типографијата ќе биде збркана.

##### Проект README.md 

на `README.md` , на пример, можете да пишувате содржина во `en/demo2/README.md` .

Имајте предвид дека содржината на оваа датотека не прикажува преглед на табелата со содржини, па затоа се препорачува да се ограничи должината и да се напише краток вовед.

###### Слоган На Проектот

Како што можете да видите `Deme Two` под опаѓачкото мени и каталог името на проектот, постои неговиот слоган `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: одговара на првата линија `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`:` `README.md`

Корисници од Кина, Јапонија и Кореја, имајте предвид дека мора да користите дебело црево со пола ширина `:`

##### Како Да Го Преместите TOC На Големо?

Датотеката треба да се стави во директориумот на изворниот јазик `TOC`

На пример, ако изворниот јазик е кинески, тогаш горе е `zh/blog/TOC` `TOC`

Ако изворниот јазик е изменет, треба сериски да ги преместите `TOC` на одреден јазик во проектот на друг јазик.

Можете да се повикате на следните команди:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Изменете ги `en/` и `zh/` во горната команда во вашиот јазичен код.


