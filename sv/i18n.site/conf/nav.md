# Anpassad Navigering

Låt oss ta [i18n-demo.github.io](//i18n-demo.github.io) som ett exempel för att förklara hur man anpassar navigeringen.

![](https://p.3ti.site/1731036697.avif)

Filerna som motsvarar de numrerade områdena i ovanstående figur är följande:

1. Vänster [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Höger [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) är ett mallspråk som genererar `HTML` :or.

[➔ Klicka här för att lära dig grammatiken för pug](https://pugjs.org)

Formatsträngen `${I18N.sponsor}` används i filen för att implementera internationalisering, och dess innehåll kommer att ersättas med motsvarande text i källspråkskatalogen [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml)

**Skriv inte `css` och `js` i `pug`** , annars blir det ett fel.

Stilar skrivs in i `css` , och interaktion uppnås genom att skapa webbkomponenter.

[i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) är filen som motsvarar stilen på navigeringsfältet :