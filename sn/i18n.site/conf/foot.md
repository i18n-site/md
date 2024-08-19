# Footer

Ndichiri kutora iyo demo purojekiti semuenzaniso, `.i18n/htm/foot.pug` mune `md` dhairekitori inotsanangura iyo yepasi pewebhusaiti.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) mutauro wetemplate unoburitsa `HTML` 's.

[➔ Dzvanya pano kuti udzidze girama ye pug](https://pugjs.org)

**Usanyora `css` uye `js` `foot.pug`** , kana zvisina kudaro pachava nekukanganisa.

Ndapota tarisai kune zvinotevera, maitiro anonyorwa mune inoenderana `.css` , uye kupindirana kunowanikwa nekugadzira zvikamu zvewebhu.

## Footer Style

Kune matatu `css` mafaera pasi `md/.i18n/htm` mune demo chirongwa.

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` :

### Icon Font

Iyo yepasi icon inogadzirwa nekugadzira font `F` iconfont.cn [Chirungu vhezheni](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Ndokumbira ugadzire yako icon font sezvinodiwa uye tsiva iyo inotevera gadziriso `conf.css` :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

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

Uchishandisa `${I18N.xxx}` yakafanana neiyi nzira yekunyora, yakasanganiswa `i18n.yml` , unogona kuwana mitauro yakawanda yepasirese yepasi.

Kuwedzera `class="a"` kune chinongedzo ndiko kudzivirira chinongedzo kubva `MarkDown` Ona :
 [`HTML` `YAML` : `Markdown`](/i18/qa#H2)