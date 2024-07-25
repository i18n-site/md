# Fundi I Faqes

Ende duke marrë si shembull projektin demo, fundi i faqes në internet `.i18n/htm/foot.pug` përcaktuar në drejtorinë `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) një gjuhë shabllon që gjeneron `HTML` .

[➔ Klikoni këtu për të mësuar gramatikën e pug](https://pugjs.org)

**Mos shkruani `css` `foot.pug` `js`** , përndryshe do të ketë gabime.

Ju lutemi referojuni sa më poshtë, stili është shkruar në `.css` dhe ndërveprimi arrihet duke krijuar komponentë ueb.

## Stili I Fundvitit

Në projektin `md/.i18n/htm` ka 3 `css` skedarë më poshtë.

* Stili : fundit `foot.css`
* : `i18n.site` për të gjithë faqen `import.css`
* Ikonat dhe shkronjat : fundvitit `conf.css`

### Fontin E Ikonës

Ikona / `F` [është](https://www.iconfont.cn/?lang=zh) krijuar [nga](https://www.iconfont.cn/?lang=en-us) iconfont.cn

Ju lutemi krijoni fontin tuaj të ikonës sipas nevojës dhe zëvendësoni : e mëposhtëm në `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Komponentët E Uebit

`foot.pug` mund të shkruajë `js` në të Nëse kërkohet ndërveprim, ju lutemi personalizoni komponentin e faqes në internet.

Ju mund të përcaktoni [një komponent në internet](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` më pas të përdorni komponentin në `foot.pug` .

Është e lehtë të krijosh komponentë ueb, si etiketat e personalizuara `<x-img>`

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

Kodi në të : si më poshtë `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Këtu : ajo përkatëse në `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`${I18N.xxx}` përdorur të ngjashme me këtë metodë shkrimi, e kombinuar me `i18n.yml` , ju mund të arrini ndërkombëtarizimin shumë-gjuhësh të footer-it.

`class="a"` në lidhje për të shmangur konvertimin e lidhjes në `MarkDown` , shihni :
 [: `YAML` të parandaloni konvertimin `HTML` të lidhjes në `Markdown`](/i18/qa#H2) .