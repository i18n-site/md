# Fundi I Faqes

Ende duke marrë si shembull projektin demo, `.i18n/htm/foot.pug` në drejtorinë `md` përcakton fundin e faqes në internet.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) është një gjuhë shabllon që gjeneron `HTML` .

[➔ Klikoni këtu për të mësuar gramatikën e pug](https://pugjs.org)

**Mos shkruani `css` dhe `js` në `foot.pug`** , përndryshe do të ketë një gabim.

Ju lutemi referojuni sa më poshtë, stili shkruhet në `.css` përkatëse dhe ndërveprimi arrihet duke krijuar komponentë ueb.

## Stili I Fundvitit

Ka tre skedarë `css` nën `md/.i18n/htm` në projektin demo.

* `foot.css` :
* `import.css` : `i18n.site` për të gjithë faqen
* `conf.css` Ikonat dhe shkronjat e :

### Fontin E Ikonës

Ikona `F` iconfont.cn [versioni anglisht](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Ju lutemi krijoni fontin tuaj të ikonës sipas nevojës dhe zëvendësoni konfigurimin e mëposhtëm në `conf.css` :

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

Ju lutemi, mos i referoni drejtpërdrejt skedarit të fontit të iconfont.cn sepse ai nuk mund të ngarkohet në shfletuesin safari.

## Komponentët E Uebit

Nuk mund të shkruani `js` në `foot.pug` Nëse kërkohet ndërveprim, ju lutemi personalizoni komponentin e uebit.

[Një komponent ueb](https://www.freecodecamp.org/news/build-your-first-web-component/) mund të përcaktohet në `md/.i18n/htm/index.js` dhe më pas të përdoret në `foot.pug` .

Është e lehtë të krijosh komponentë ueb, të tillë si `<x-img>` me porosi0 .

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

## Fundi Shumëgjuhësh

Kodi në `.i18n/htm/foot.pug` është si më poshtë :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Këtu `${I18N.C}` korrespondon me `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Duke përdorur `${I18N.xxx}` të ngjashme me këtë metodë të shkrimit, të kombinuar me `i18n.yml` , mund të arrini ndërkombëtarizimin shumë-gjuhësh të footer-it.

Shtimi i `class="a"` në lidhje është për të parandaluar konvertimin e lidhjes në `MarkDown` Shihni :
 [➔ `YAML` Si të : konvertimin e lidhjes `HTML` në `Markdown`](/i18/qa#H2) .