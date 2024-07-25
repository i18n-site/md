# Na Nse Ya Lokasa

Encore kozua projet ya démonstration lokola exemple, footer ya site internet `.i18n/htm/foot.pug` définir na répertoire `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) monoko ya modèle oyo ebimisaka `HTML` .

[➔ Finá awa mpo na koyeba gramere ya pug](https://pugjs.org)

**Kokoma `css` na `js` na `foot.pug`**

Svp tala oyo elandi, style ekomami na `.css` pe interaction ezuami na ko créer ba composants web.

## Style Ya Footer

Na projet ya `md/.i18n/htm` Ezali na 3 `css` fichiers na se.

* `foot.css` :
* `import.css` : `i18n.site` pona site mobimba
* `conf.css` :

### Elembo Ya Elembo

Icône ya footer esalemi na iconfont.cn ( [version anglaise](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) kosala fonte oyo ezali na kombo `F`

Svp sala fonte ya icône na yo moko ndenge esengeli pe remplacer : oyo elandi na `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Ba Composants Ya Web

`foot.pug` `js`

Okoki kolimbola [eteni ya web](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

Ezali pete kosala ba composants web, lokola ba balises personnalisées `<x-img>`

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

## Maloba Na Nse Ya Lokasa Ya Minoko Mingi

Kode : ezali na kati ezali boye `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`${I18N.C}` oyo ekokani na yango ezali na `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Kosalela `${I18N.xxx}` oyo ekokani na lolenge oyo ya kokoma, esangani na `i18n.yml` , okoki kozua internationalisation multi-langue ya footer.

Bakisa `class="a"` lien po lien ebongwana na `MarkDown` , tala :
 [: `YAML` okoki kopekisa `HTML` ya lien ebongwana na `Markdown`](/i18/qa#H2) .