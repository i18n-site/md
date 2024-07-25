# Footer

Ndichiri kutora demo purojekiti semuenzaniso, iyo yepasi pewebhusaiti `.i18n/htm/foot.pug` `md` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) mutauro wetemplate unogadzira `HTML` .

[➔ Dzvanya apa kuti udzidze girama ye pug](https://pugjs.org)

**Usanyore `css` uye `js` `foot.pug`** , zvikasadaro pachave nezvikanganiso.

Ndokumbira utarise kune zvinotevera, chimiro chakanyorwa mune inoenderana `.css` uye kupindirana kunowanikwa nekugadzira webhu zvikamu.

## Footer Style

Muchirongwa `md/.i18n/htm` Pane 3 `css` mafaera pazasi.

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` :

### Icon Font

[Iyo](https://www.iconfont.cn/?lang=en-us) / `F` inogadzirwa [ne](https://www.iconfont.cn/?lang=zh) iconfont.cn

Ndokumbirawo ugadzire yako icon font sezvinodiwa uye tsiva : inotevera gadziriso mu `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Webhu Zvikamu

`foot.pug` haikwanise kunyora `js` mairi.

Iwe unogona kutsanangura [chikamu chewebhu](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

Zviri nyore kugadzira zvinhu zvewebhu, sema tags etsika `<x-img>`

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

`.i18n/htm/foot.pug` :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`en/i18n.yml` `${I18N.C}` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Uchishandisa `${I18N.xxx}` neiyi nzira yekunyora, yakasanganiswa ne `i18n.yml` , unogona kuwana mitauro yakawanda yepasirese yepasi.

`class="a"` kune chinongedzo kudzivirira chinongedzo ichishandurwa kuita `MarkDown` , ona :
 [: `YAML` yekudzivirira sei `HTML` yekubatanidza kubva pakushandurwa kuita `Markdown`](/i18/qa#H2) .