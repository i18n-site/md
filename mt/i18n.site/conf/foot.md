# Footer

Għadu nieħdu l-proġett demo bħala eżempju, il-footer tal-websajt `.i18n/htm/foot.pug` definit fid-direttorju `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) lingwa mudell li tiġġenera `HTML` .

[➔ Ikklikkja hawn biex titgħallem il-grammatika ta' pug](https://pugjs.org)

**Tiktebx `css` u `js` `foot.pug`** , inkella jkun hemm żbalji.

Jekk jogħġbok irreferi għal dan li ġej, l-istil huwa miktub fil-korrispondenti `.css` u l-interazzjoni tinkiseb billi jinħolqu komponenti tal-web.

## Stil Footer

Fil-proġett `md/.i18n/htm` Hemm 3 `css` fajls hawn taħt.

* `foot.css` Stil ta : qiegħ il-paġna
* : `i18n.site` għas-sit `import.css`
* Ikoni : fonts `conf.css`

### Font Tal-Ikona

`F` -ikona [tal](https://www.iconfont.cn/?lang=en-us) / footer hija ġġenerata [minn](https://www.iconfont.cn/?lang=zh) iconfont.cn

Jekk jogħġbok oħloq it-tipa tal-ikona tiegħek kif meħtieġ u ibdel : konfigurazzjoni li ġejja f' `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Komponenti Tal-Web

ma `foot.pug` tikteb `js` fiha. Jekk tkun meħtieġa l-interazzjoni, jekk jogħġbok ippersonalizza l-komponent tal-paġna tal-web.

Tista' tiddefinixxi [komponent tal-web](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` u mbagħad tuża l-komponent f' `foot.pug` .

Huwa faċli li toħloq komponenti tal-web, bħal tikketti tad-dwana `<x-img>`

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

## Footer Multilingwi

`.i18n/htm/foot.pug` Il-kodiċi fih huwa kif ġej :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hawn `${I18N.C}` Il-korrispondenti jinsab f' `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Billi tuża `${I18N.xxx}` simili għal dan il-metodu ta' kitba, flimkien ma `i18n.yml` , tista' tikseb internazzjonalizzazzjoni multilingwi tal-footer.

`class="a"` mal-link biex tevita li l-link tiġi kkonvertita għal `MarkDown` , ara :
 [: `YAML` tipprevjeni `HTML` tal-link jiġi kkonvertit għal `Markdown`](/i18/qa#H2) .