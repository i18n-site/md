# Footer

Ndichiri kutora iyo demo purojekiti semuenzaniso, `.i18n/htm/foot.pug` mune `md` dhairekitori inotsanangura iyo yepasi pewebhusaiti.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) mutauro wetemplate unoburitsa `HTML` 's.

[➔ Dzvanya apa kuti udzidze girama ye pug](https://pugjs.org)

**Usanyora `css` uye `js` `foot.pug`** , kana zvisina kudaro pachava nekukanganisa.

Ndapota tarisai kune zvinotevera, maitiro anonyorwa mune inoenderana `.css` , uye kupindirana kunowanikwa nekugadzira zvikamu zvewebhu.

## Footer Style

Kune matatu `css` mafaera pasi `md/.i18n/htm` mune demo chirongwa.

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` :

### Icon Font

Iyo yepasi icon inogadzirwa nekugadzira font inonzi iconfont.cn `F` [Chirungu vhezheni](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Ndokumbira ugadzire yako icon font sezvinodiwa uye tsiva iyo inotevera gadziriso `conf.css` :

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

Ndokumbira usataure zvakananga iyo font faira ye iconfont.cn nekuti haigone kurodha pasafari browser.

## Webhu Zvikamu

Iwe haugone kunyora `js` mu0 `foot.pug` Kana kupindirana kuchidikanwa, ndapota gadzirisa chikamu chewebhu.

[Chikamu chewebhu](https://www.freecodecamp.org/news/build-your-first-web-component/) chinogona kutsanangurwa `md/.i18n/htm/index.js` uye chozoshandiswa `foot.pug` .

Zviri nyore kugadzira zvinhu zvewebhu, senge tsika `<x-img>` .

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

Kodhi `.i18n/htm/foot.pug` ndeiyi inotevera :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Pano `${I18N.C}` inoenderana `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Uchishandisa `${I18N.xxx}` yakafanana neiyi nzira yekunyora, yakasanganiswa `i18n.yml` , unogona kuwana mitauro yakawanda yepasi rose yepasi.

Kuwedzera `class="a"` kune chinongedzo ndiko kudzivirira chinongedzo kubva `MarkDown` Ona :
 [`HTML` `YAML` : `Markdown`](/i18/qa#H2)