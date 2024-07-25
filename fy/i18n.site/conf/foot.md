# Footer

Noch altyd it demo-projekt as foarbyld, de foettekst fan 'e webside `.i18n/htm/foot.pug` definieare yn' e `md` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) is in sjabloantaal dy't `HTML` genereart.

[➔ Klik hjir om de grammatika fan te learen pug](https://pugjs.org)

**Skriuw `css` en `js` net `foot.pug`** , oars sille der flaters wêze.

Ferwize asjebleaft nei it folgjende, de styl is skreaun yn 'e oerienkommende `.css` En de ynteraksje wurdt berikt troch it meitsjen fan webkomponinten.

## Footer Styl

Yn it `md/.i18n/htm` binne d'r 3 `css` bestannen hjirûnder.

* `foot.css` : style
* `import.css` `i18n.site` foar : heule side
* `conf.css` Footer : ikoanen en lettertypen

### Byldkaike Lettertype

It footer-ikoan wurdt generearre iconfont.cn ( [Ingelske ferzje](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) it meitsjen fan in lettertype mei de namme `F`

Meitsje asjebleaft jo eigen ikoanlettertype as nedich en ferfange : folgjende konfiguraasje yn `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Komponinten

`foot.pug` `js`

Jo kinne [in webkomponint](https://www.freecodecamp.org/news/build-your-first-web-component/) definiearje yn `md/.i18n/htm/index.js` dan it komponint brûke yn `foot.pug` .

It is maklik om webkomponinten te meitsjen, lykas oanpaste tags `<x-img>`

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

## Meartalige Fuottekst

De koade dêryn is : folget `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hjir : de korrespondearjende yn `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Mei `${I18N.xxx}` fan fergelykber mei dizze skriuwmetoade, kombinearre mei `i18n.yml` , kinne jo meartalige ynternasjonalisaasje fan 'e footer berikke.

Foegje `class="a"` oan de keppeling om foar te kommen dat de keppeling wurdt omsetten nei `MarkDown` , sjoch :
 [: `YAML` kinne jo foarkomme dat `HTML` fan 'e keppeling wurdt konvertearre nei `Markdown`](/i18/qa#H2)