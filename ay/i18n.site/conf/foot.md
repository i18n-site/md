# Ukax Mä Juk’a Pachanakanwa

Wali proyecto demostración ukax mä uñacht’äwiwa, `.i18n/htm/foot.pug` directorio `md` ukanx sitio web ukan ch’akhanakap qhanañchi.

![](https://p.3ti.site/1721286077.avif)

## Chaki Ch’akhanaka Estilo

Kimsa `css` archivonakax `md/.i18n/htm` ukjat juk’ampiruw proyecto demostración ukanx utji.

* `foot.css` :
* `import.css` : 1Taqi sitio ukan estilo `i18n.site`
* `conf.css` :

### Icono Ukax Mä Font Ukhamawa

Uka chimpuxa `F` iconfont.cn ( [inglés arun versión](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) sutimp uñt’atawa.

Ukhamaraki, juma pachpaw icono letra lurañama kunjamatix wakiski ukhamarjama ukat aka configuración ukarux `conf.css` :

```
@font-face {
  font-family: "F";
  src: url(//p.3ti.site/ico1.woff2) format("woff2");
}

#Ft>b>a.site {
  background: url("//p.3ti.site/i18n.svg") 0 0 / cover;
  display: block;
  height: 24px;
  opacity: 0.8;
  width: 115px;
  flex-shrink: 0;
}
```

Janiw chiqak iconfont.cn ukan letra archivo ukar uñt’ayañakiti kunatix janiw safari ukan navegador ukarux apkatatäkaspati.

## Web Ukan Componentes Ukanaka

Janiw `js` `foot.pug` Ukax mayacht’asiñax wakisispa ukhax componente web ukarux uñt’ayañamawa.

[Mä componente web ukax](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` ukan uñt’ayatarakispawa ukatx `foot.pug` ukan apnaqatarakiwa.

Web componentes ukanakax lurañax jasakiwa, kunjamakitix `<x-img>` personalizadas0 .

```js
customElements.define(
  'x-img',
  class extends HTMLElement {
    constructor() {
      super();
      var img = document.createElement('img');
      img.src = '//p.3ti.site/i18n.svg';
      img.style = "height:99px;width:99px;";
      this.append(img);
    }
  }
)
```

## Walja Arunak Uñt’ayaña

`.i18n/htm/foot.pug` ukanx codigox akhamawa :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Aka `${I18N.C}` ukax `en/i18n.yml` ukar uñtasitawa :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Aka qillqañ thakhimp uñtasit `${I18N.xxx}` apnaqasa, `i18n.yml` ukamp chikt’ata, ukax walja arut internacionalización de la pie ukaruw purispa.

`class="a"` ukax link ukaruw yapxatasi, ukax link ukax `MarkDown` ¡Uñxatt’añataki :
 [➔ `YAML` : Kunjamatsa `HTML` link ukax `Markdown` ukar jaqukipata](/i18/qa#H2) .