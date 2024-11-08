# Անհատականացված Նավարկություն

Եկեք որպես օրինակ վերցնենք ցուցադրական կայքը [i18n-demo.github.io](//i18n-demo.github.io) բացատրելու համար, թե ինչպես հարմարեցնել նավիգացիան:

![](https://p.3ti.site/1731036697.avif)

Վերոնշյալ նկարի համարակալված տարածքներին համապատասխանող ֆայլերը հետևյալն են.

1. Ձախ [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Աջ [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) կաղապարի լեզու է, որը առաջացնում է `HTML` -եր:

[➔ Սեղմեք այստեղ՝ քերականությունը սովորելու համար pug](https://pugjs.org)

Ֆայլում `${I18N.sponsor}` ձևաչափն օգտագործվում է միջազգայնացման իրականացման համար, և դրա բովանդակությունը կփոխարինվի համապատասխան տեքստով [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) լեզվի գրացուցակում:

**Մի գրեք `css` և `js` `pug` -ում** , հակառակ դեպքում սխալ կլինի:

Ոճերը գրվում են `css` , և փոխազդեցությունը ձեռք է բերվում վեբ բաղադրիչներ ստեղծելով:

Այստեղ նավիգացիոն գծի ոճին համապատասխանող ֆայլը : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)