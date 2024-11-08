# Navigare Personalizată

Să luăm site-ul [i18n-demo.github.io](//i18n-demo.github.io) ca exemplu pentru a explica cum să personalizați navigarea.

![](https://p.3ti.site/1731036697.avif)

Fișierele corespunzătoare zonelor numerotate din figura de mai sus sunt următoarele:

1. Stânga [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Corect [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) este un limbaj șablon care generează `HTML` .

[➔ Faceți clic aici pentru a afla gramatica lui pug](https://pugjs.org)

Șirul de format `${I18N.sponsor}` este utilizat în fișier pentru a implementa internaționalizarea, iar conținutul acestuia va fi înlocuit cu textul [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) în directorul limbii sursă.

**Nu scrieți `css` și `js` în `pug`** , altfel va apărea o eroare.

Stilurile sunt scrise în `css` , iar interacțiunea se realizează prin crearea de componente web.

Aici, fișierul corespunzător stilului barei de navigare este : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)