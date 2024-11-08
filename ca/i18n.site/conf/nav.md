# Navegació Personalitzada

Prenem el lloc de demostració com a [i18n-demo.github.io](//i18n-demo.github.io) per explicar com personalitzar la navegació.

![](https://p.3ti.site/1731036697.avif)

Els fitxers corresponents a les àrees numerades de la figura anterior són els següents:

1. Esquerra [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Dret [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) és un llenguatge de plantilla que genera `HTML` .

[➔ Feu clic aquí per aprendre la gramàtica de pug](https://pugjs.org)

La cadena de format `${I18N.sponsor}` s'utilitza al fitxer per implementar la internacionalització, i el seu contingut es substituirà pel text [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) al directori de l'idioma font.

**No escriviu `css` i `js` en `pug`** , en cas contrari hi haurà un error.

Els estils s'escriuen en `css` i la interacció s'aconsegueix creant components web.

Aquí, el fitxer corresponent a l'estil de la barra de navegació és : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)