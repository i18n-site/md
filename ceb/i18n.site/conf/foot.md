# Footer

Gikuha gihapon ang demo nga proyekto isip usa ka pananglitan, ang footer sa website `.i18n/htm/foot.pug` sa `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) mao ang usa ka template nga pinulongan nga makamugna `HTML` .

[➔ I-klik dinhi aron makat-on sa gramatika sa pug](https://pugjs.org)

**Ayaw isulat `css` ug `js` `foot.pug`** , kung dili adunay mga sayup.

Palihug tan-awa ang mosunod, ang estilo gisulat sa katugbang nga `.css` ug ang interaksyon makab-ot pinaagi sa paghimo sa mga sangkap sa web.

## Estilo Sa Footer

Sa proyekto sa demo `md/.i18n/htm` Adunay 3 `css` nga mga file sa ubos.

* Estilo `foot.css` :
* `import.css` : `i18n.site`
* Mga icon ug : `conf.css`

### Icon Nga Font

`F` footer [nga](https://www.iconfont.cn/?lang=en-us) icon gimugna [pinaagi](https://www.iconfont.cn/?lang=zh) / iconfont.cn

Palihug paghimo og imong kaugalingong icon nga font kon gikinahanglan ug ilisan : mosunod nga configuration sa `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Mga Sangkap Sa Web

`foot.pug` dili makasulat `js` niini.

Mahimo nimong ipasabut [ang usa ka sangkap sa web](https://www.freecodecamp.org/news/build-your-first-web-component/) sa `md/.i18n/htm/index.js` ug dayon gamiton ang sangkap sa `foot.pug` .

Sayon ang paghimo sa mga sangkap sa web, sama sa naandan nga mga tag `<x-img>`

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

## Multilingual Nga Footer

Ang code niini mao : mosunod `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Ania ang katumbas : `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Gamit ang `${I18N.xxx}` susama niining paagi sa pagsulat, inubanan sa `i18n.yml` , makab-ot nimo ang multi-language nga internasyonalisasyon sa footer.

`MarkDown` `class="a"` :
 [: `YAML` pagpugong `HTML` sa link nga makabig sa `Markdown`](/i18/qa#H2) .