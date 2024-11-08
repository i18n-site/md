# Navigacion I Personalizuar

Le të marrim faqen [i18n-demo.github.io](//i18n-demo.github.io) si shembull për të shpjeguar se si të personalizoni navigimin.

![](https://p.3ti.site/1731036697.avif)

Skedarët që korrespondojnë me zonat e numëruara në figurën e mësipërme janë si më poshtë:

1. Majtas [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. E drejta [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) është një gjuhë shabllon që gjeneron `HTML` .

[➔ Klikoni këtu për të mësuar gramatikën e pug](https://pugjs.org)

Vargu i formatit `${I18N.sponsor}` përdoret në skedar për të zbatuar ndërkombëtarizimin dhe përmbajtja e tij do të zëvendësohet me tekstin [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) në direktorinë e gjuhës burimore.

**Mos shkruani `css` dhe `js` në `pug`** , përndryshe do të ketë një gabim.

Stilet shkruhen në `css` , dhe ndërveprimi arrihet duke krijuar komponentë ueb.

Këtu, skedari që korrespondon me stilin e shiritit të navigimit është : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)