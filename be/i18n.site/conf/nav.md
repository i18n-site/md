# Індывідуальныя Навігацыі

Давайце возьмем дэма [i18n-demo.github.io](//i18n-demo.github.io) сайт у якасці прыкладу, каб растлумачыць, як наладзіць навігацыю.

![](https://p.3ti.site/1731036697.avif)

Файлы, якія адпавядаюць пранумараваным абласцям на малюнку вышэй, наступныя:

1. Злева [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Справа [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) - гэта мова шаблонаў, якая стварае `HTML` .

[➔ Націсніце тут, каб вывучыць граматыку pug](https://pugjs.org)

Радок фармату `${I18N.sponsor}` выкарыстоўваецца ў файле для рэалізацыі інтэрнацыяналізацыі, і яго змест будзе заменены адпаведным [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) у каталогу зыходнай мовы.

**Не пішыце `css` і `js` у `pug`** , інакш будзе памылка.

Стылі запісваюцца ў `css` , а ўзаемадзеянне дасягаецца шляхам стварэння вэб-кампанентаў.

Тут файл, які адпавядае стылю панэлі навігацыі [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) - :