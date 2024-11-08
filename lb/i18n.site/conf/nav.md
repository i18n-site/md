# Benotzerdefinéiert Navigatioun

Loosst eis den Demo Site als [i18n-demo.github.io](//i18n-demo.github.io) huelen fir ze erklären wéi Dir d'Navigatioun personaliséiere kënnt.

![](https://p.3ti.site/1731036697.avif)

D'Dateien entspriechend den nummeréierte Beräicher an der uewe genannter Figur sinn wéi follegt:

1. lénks [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Richteg [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) ass eng Template Sprooch déi `HTML` generéiert.

[➔ Klickt hei fir d'Grammatik vun pug](https://pugjs.org)

D'Formatstring `${I18N.sponsor}` gëtt an der Datei benotzt fir d'Internationaliséierung ëmzesetzen, a säin Inhalt gëtt duerch den entspriechende Text am [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) ersat.

**Schreift net `css` an `js` an `pug`** , soss gëtt et e Feeler.

Stiler ginn an `css` geschriwwe, an Interaktioun gëtt erreecht andeems Dir Webkomponenten erstallt.

Hei ass de Fichier deen dem Stil vun der Navigatiounsbar entsprécht : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)