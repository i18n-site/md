# Customized Footer

Tseem coj qhov project demo ua piv txwv, `.i18n/htm/foot.pug` hauv `md` phau ntawv teev npe txhais cov footer ntawm lub vev xaib.

![](https://p.3ti.site/1721286077.avif)

## Footer Style

Muaj peb `css` cov ntaub ntawv hauv qab `md/.i18n/htm` hauv qhov project demo.

* `foot.css` : nqa
* `import.css` : `i18n.site` style rau tag nrho lub xaib
* `conf.css` : Cov cim hauv qab thiab fonts

### Icon Font

Lub cim footer yog tsim los ntawm kev tsim cov ntawv sau npe iconfont.cn ( `F` [version](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Thov tsim koj tus kheej icon font raws li xav tau thiab hloov cov kev teeb tsa hauv qab no hauv `conf.css` :

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

Thov tsis txhob xa ncaj qha rau cov ntaub ntawv font ntawm iconfont.cn vim nws tsis tuaj yeem thauj khoom ntawm qhov browser safari.

## Web Cheebtsam

Koj tsis tuaj yeem sau `js` hauv `foot.pug` Yog xav tau kev sib cuam tshuam, thov kho lub vev xaib.

[Ib lub vev xaib](https://www.freecodecamp.org/news/build-your-first-web-component/) tuaj yeem txhais hauv `md/.i18n/htm/index.js` thiab tom qab ntawd siv hauv `foot.pug` .

Nws yog ib qho yooj yim los tsim cov khoom hauv lub vev xaib, xws li kev cai `<x-img>` .

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

Cov cai hauv `.i18n/htm/foot.pug` yog raws li hauv qab no :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Ntawm no `${I18N.C}` sib raug rau `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Siv `${I18N.xxx}` zoo ib yam li txoj kev sau ntawv no, ua ke nrog `i18n.yml` , koj tuaj yeem ua tiav ntau hom lus thoob ntiaj teb ntawm footer.

Ntxiv `class="a"` rau qhov txuas yog txhawm rau tiv thaiv qhov txuas ntawm kev hloov mus rau `MarkDown` Saib :
 [`HTML` `YAML` : `Markdown`](/i18/qa#H2)