# Nahiangay Nga Footer

Gikuha gihapon ang demo nga proyekto isip usa ka pananglitan, ang `.i18n/htm/foot.pug` sa `md` nga direktoryo naghubit sa footer sa website.

![](https://p.3ti.site/1721286077.avif)

## Estilo Sa Footer

Adunay tulo ka `css` nga mga file ubos sa `md/.i18n/htm` sa demo nga proyekto.

* `foot.css` : Estilo sa footer
* `import.css` : `i18n.site` nga estilo para sa tibuok site
* `conf.css` : Mga icon ug font sa footer

### Icon Nga Font

Ang footer icon namugna pinaagi sa paghimo ug font `F` iconfont.cn [English version](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Palihug paghimo og imong kaugalingon nga icon nga font kung gikinahanglan ug ilisan ang mosunod nga configuration sa `conf.css` :

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

Palihug ayaw direkta nga i-refer ang font file sa iconfont.cn tungod kay dili kini makarga sa safari browser.

## Mga Sangkap Sa Web

Dili ka makasulat og `js` sa `foot.pug` Kung gikinahanglan ang interaksyon, palihog i-customize ang web component.

[Ang usa ka sangkap sa web](https://www.freecodecamp.org/news/build-your-first-web-component/) mahimong mahubit sa `md/.i18n/htm/index.js` ug dayon gamiton sa `foot.pug` .

Sayon ang paghimo sa mga sangkap sa web, sama sa naandan `<x-img>` .

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

Ang code sa `.i18n/htm/foot.pug` mao ang mosunod :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Dinhi `${I18N.C}` katumbas sa `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Gamit `${I18N.xxx}` nga susama niining paagi sa pagsulat, inubanan sa `i18n.yml` , mahimo nimong makab-ot ang multi-language internationalization sa footer.

Ang pagdugang og `class="a"` sa link mao ang pagpugong sa link nga makabig ngadto sa `MarkDown` Tan-awa :
 [`HTML` `YAML` : `Markdown`](/i18/qa#H2)