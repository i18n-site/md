# Footer

Tseem coj qhov project demo ua piv txwv, lub footer ntawm lub vev xaib `.i18n/htm/foot.pug` txhais hauv phau ntawv qhia `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) yog hom lus uas tsim `HTML` .

[➔ Nyem qhov no kom paub cov qauv sau ntawv ntawm pug](https://pugjs.org)

**Tsis txhob sau `css` thiab `js` hauv `foot.pug`**

Thov xa mus rau cov hauv qab no, cov style yog sau rau hauv qhov sib thooj `.css` thiab kev sib cuam tshuam yog ua tiav los ntawm kev tsim lub vev xaib.

## Footer Style

Hauv qhov project demo `md/.i18n/htm` Muaj 3 `css` cov ntaub ntawv hauv qab no.

* `foot.css` :
* `import.css` `i18n.site` style rau tag nrho : xaib
* `conf.css` :

### Icon Font

/ footer icon [yog](https://www.iconfont.cn/?lang=zh) tsim `F` [ntawm](https://www.iconfont.cn/?lang=en-us) iconfont.cn

Thov tsim koj tus kheej icon font raws li xav tau thiab hloov : kev teeb tsa hauv qab no hauv `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Cheebtsam

`foot.pug` Tsis tuaj yeem sau `js` hauv nws yog tias yuav tsum muaj kev sib cuam tshuam, thov kho cov nplooj ntawv web.

Koj tuaj yeem txhais [lub vev xaib](https://www.freecodecamp.org/news/build-your-first-web-component/) nyob `foot.pug` hauv `md/.i18n/htm/index.js`

Nws yog ib qho yooj yim los tsim cov khoom hauv lub vev xaib, zoo li cov cim kev cai `<x-img>`

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

## Multilingual Footer

`.i18n/htm/foot.pug` Cov cai hauv nws yog raws li hauv qab no :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Siv `${I18N.xxx}` zoo ib yam li txoj kev sau ntawv no, ua ke nrog `i18n.yml` , koj tuaj yeem ua tiav ntau hom lus thoob ntiaj teb ntawm footer.

`MarkDown` `class="a"` :
 [: `YAML` tiv thaiv `HTML` ntawm qhov txuas ntawm kev hloov mus rau `Markdown`](/i18/qa#H2) .