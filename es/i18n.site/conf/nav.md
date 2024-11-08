# Navegación Personalizada

[i18n-demo.github.io](//i18n-demo.github.io) Tomemos el sitio de demostración como ejemplo para explicar cómo personalizar la navegación!

![](https://p.3ti.site/1731036697.avif)

Los archivos correspondientes a las áreas numeradas en la figura anterior son los siguientes:

1. Izquierda [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Derecha [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) es un lenguaje de plantilla que genera `HTML` .

[➔ Haga clic aquí para aprender la gramática de pug](https://pugjs.org)

La cadena de formato `${I18N.sponsor}` se utiliza en el archivo para implementar la internacionalización y su contenido se reemplazará con el texto [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) en el directorio del idioma de origen.

**No escriba `css` y `js` en `pug`** , de lo contrario habrá un error.

Los estilos se escriben en `css` y la interacción se logra mediante la creación de componentes web.

Aquí, el archivo correspondiente al estilo de la barra de navegación es : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)