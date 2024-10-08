# Верзија На Проектот

Земете го демо-проектот како пример:

`en/demo2/v` е тековниот број на верзијата на проектот, кој ќе се прикаже десно од името на проектот во прегледот на страничната лента.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Овде `en/` е јазичниот код што одговара на изворниот јазик на преводот конфигуриран од `.i18n/conf.yml` .

Ако вашиот изворен јазик не е англискиот, тогаш датотеката `v` треба да се стави во проектниот директориум на вашиот изворен јазик.

Можноста за прелистување историски верзии на документи е во развој.

Се препорачува да се менува бројот на верзијата на документот само кога се објавуваат големи ажурирања (како `v1` , `v2` ) за да се избегне премногу броеви на верзии кои предизвикуваат неред на страниците индексирани од пребарувачите.

## Користете Празни `v` Датотеки За Да Ги Поделите Индексите На Датотеките На Различни Проекти

Во демо-проектот, покрај `en/demo2/v` , можете да видите и дека има празни `v` датотеки во директориумите `en/blog` и `en/demo1` .

Празна `v` нема да се прикаже во прегледот на страничната лента, но се додека има `v` датотека, ќе се генерира независен индекс за датотеките во директориумот и поддиректориумите.

Со разделување на индексите на различни проекти, можете да избегнете бавен пристап предизвикан од вчитување на индексот на сите датотеки на целата локација одеднаш.

На пример, индексната датотека што одговара на `blog` во демо-проектот е [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :