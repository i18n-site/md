# Прилагођена Навигација

Узмимо демо сајт као пример да објаснимо како да прилагодимо навигацију [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

Датотеке које одговарају нумерисаним областима на горњој слици су следеће:

1. Лево [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Десно [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) је језик шаблона који генерише `HTML` .

[➔ Кликните овде да научите граматику pug](https://pugjs.org)

Низ формата `${I18N.sponsor}` се користи у датотеци за имплементацију интернационализације, а њен садржај ће бити замењен [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) текстом у директоријуму изворног језика.

**Немојте писати `css` и `js` у `pug`** , иначе ће доћи до грешке.

Стилови су уписани у `css` , а интеракција се постиже креирањем веб компоненти.

Овде је датотека која одговара стилу траке за [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) :