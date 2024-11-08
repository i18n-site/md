# Арнайы Навигация

Навигацияны қалай реттеуге болатынын түсіндіру үшін мысал ретінде демо-сайтты алайық [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

Жоғарыдағы суреттегі нөмірленген аймақтарға сәйкес файлдар келесідей:

1. Сол жақ [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Оң [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) — `HTML` генерациялайтын үлгі тілі.

[➔ Грамматиканы білу үшін осы жерді басыңыз pug](https://pugjs.org)

`${I18N.sponsor}` пішім жолы файлда интернационалдандыруды жүзеге асыру үшін пайдаланылады және оның мазмұны бастапқы тіл каталогындағы сәйкес [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) ауыстырылады.

**`pug` ішінде `css` және `js` деп жазбаңыз** , әйтпесе қате болады.

Стильдер `css` -ге жазылады және өзара әрекеттесу веб-компоненттерді жасау арқылы жүзеге асырылады.

Мұнда шарлау жолының стиліне сәйкес файл : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)