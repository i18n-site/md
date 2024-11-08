# Footer

Noch altyd it demo-projekt as foarbyld, `.i18n/htm/foot.pug` yn 'e `md` -map definiearret de foettekst fan' e webside.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) is in sjabloantaal dy't `HTML` 's genereart.

[➔ Klik hjir om de grammatika fan te learen pug](https://pugjs.org)

**Skriuw gjin `css` en `js` yn `foot.pug`** , oars komt der in flater.

Ferwize asjebleaft nei it folgjende, de styl is skreaun yn 'e oerienkommende `.css` , en de ynteraksje wurdt berikt troch it meitsjen fan webkomponinten.

## Footer Styl

D'r binne trije `css` -bestannen ûnder `md/.i18n/htm` yn it demoprojekt.

* `foot.css` : Footer style
* `import.css` : `i18n.site` styl foar de hiele side
* `conf.css` : Footer-ikoanen en lettertypen

### Byldkaike Lettertype

It footer `F` iconfont.cn [Ingelske ferzje](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Meitsje asjebleaft jo eigen ikoanlettertype as nedich en ferfange de folgjende konfiguraasje yn `conf.css` :

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

Ferwize asjebleaft net direkt nei it lettertypetriem fan iconfont.cn, om't it net yn 'e safariblêder laden wurde kin.

## Web Komponinten

Jo kinne net skriuwe `js` yn `foot.pug` As ynteraksje nedich is, oanpasse asjebleaft de webkomponint.

[In webkomponint](https://www.freecodecamp.org/news/build-your-first-web-component/) kin wurde definieare yn `md/.i18n/htm/index.js` en dan brûkt yn `foot.pug` .

It is maklik om webkomponinten te meitsjen, lykas oanpaste `<x-img>` .

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

De koade yn `.i18n/htm/foot.pug` is as folget :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hjir komt `${I18N.C}` oerien mei `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Mei `${I18N.xxx}` fergelykber mei dizze skriuwmetoade, kombinearre mei `i18n.yml` , kinne jo meartalige ynternasjonalisearring fan 'e fuottekst berikke.

It tafoegjen fan `class="a"` oan de keppeling is om foar te kommen dat de keppeling wurdt omsetten nei `MarkDown` Sjoch :
 [: `YAML` Hoe kinne jo foarkomme dat keppeling `HTML` wurdt omsetten nei `Markdown`](/i18/qa#H2) .