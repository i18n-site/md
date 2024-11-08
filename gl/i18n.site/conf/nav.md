# Navegación Personalizada

Tomemos o sitio de [i18n-demo.github.io](//i18n-demo.github.io) como exemplo para explicar como personalizar a navegación.

![](https://p.3ti.site/1731036697.avif)

Os ficheiros correspondentes ás áreas numeradas da figura anterior son os seguintes:

1. Esquerda [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Dereito [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) é unha linguaxe de modelo que xera `HTML` .

[➔ Fai clic aquí para aprender a gramática de pug](https://pugjs.org)

A cadea de formato `${I18N.sponsor}` úsase no ficheiro para implementar a internacionalización e o seu contido substituirase polo texto correspondente en [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml)

**Non escriba `css` e `js` en `pug`** , se non, producirase un erro.

Os estilos escríbense en `css` e a interacción conséguese creando compoñentes web.

Aquí, o ficheiro correspondente ao estilo da barra de navegación é : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)