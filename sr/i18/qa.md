# Фак

## Додавање Или Брисање Редова Превода, Што Доводи До Забуне У Преводу

> [!WARN]
> Запамтите, **број редова у преводу мора одговарати редовима у оригиналном тексту** .
> Односно, када ручно прилагођавате превод, **немојте додавати или брисати редове превода** , иначе ће однос мапирања између превода и оригиналног текста бити поремећен.

Ако случајно додате или избришете линију, што изазива забуну, вратите превод на верзију пре измене, поново покрените `i18` превод и поново кеширајте исправно мапирање.

Пресликавање између превода и оригиналног текста је везано за токен Креирајте нови токен у [i18n.site/token](//i18n.site/token) избришите `.i18h/hash` и поново преведите да бисте избрисали збуњујуће мапирање (али то ће довести до губитка свих ручних подешавања превода).

## `YAML` Како Избећи Претварање Везе `HTML` У `Markdown` :

Вредност `YAML` се третира као `MarkDown` за превод.

Понекад конверзија из `HTML` → `MarkDown` није оно што желимо, као што је `<a href="/">Home</a>` претварање у `[Home](/)` .

Додавање било ког атрибута осим `href` у ознаку `a` , као што је `<a class="A" href="/">Home</a>` , може избећи ову конверзију.

## `./i18n/hash` Сукоба Датотека Испод

Избришите конфликтне датотеке и поново покрените `i18` превод.