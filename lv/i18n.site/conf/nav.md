# Pielāgota Navigācija

Ņemsim par piemēru demonstrācijas vietni [i18n-demo.github.io](//i18n-demo.github.io) lai izskaidrotu, kā pielāgot navigāciju.

![](https://p.3ti.site/1731036697.avif)

Faili, kas atbilst numurētajiem apgabaliem iepriekšējā attēlā, ir šādi:

1. Pa kreisi [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Pa labi [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) ir veidņu valoda, kas ģenerē `HTML` .

[➔ Noklikšķiniet šeit, lai uzzinātu gramatiku pug](https://pugjs.org)

Formāta virkne `${I18N.sponsor}` tiek izmantota failā, lai īstenotu internacionalizāciju, un tās saturs tiks aizstāts ar atbilstošo [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) avota valodas direktorijā.

**Nerakstiet `css` un `js` `pug`** , pretējā gadījumā radīsies kļūda.

Stili tiek ierakstīti `css` , un mijiedarbība tiek panākta, izveidojot tīmekļa komponentus.

Šeit fails, kas atbilst navigācijas joslas stilam [, ir i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) :