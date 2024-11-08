# Na Nse Ya Lokasa

Encore kozua projet ya démonstration lokola exemple, `.i18n/htm/foot.pug` na répertoire `md` e définir footer ya site internet.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) ezali monoko ya modèle oyo ebimisaka `HTML` 's.

[➔ Finá awa mpo na koyeba gramere ya pug](https://pugjs.org)

**Kokoma `css` na `js` na `foot.pug` te** , soki te libunga ekozala.

Svp tala oyo elandi, style ekomami na `.css` oyo ekokani, mpe interaction ezuami na kosala ba composants web.

## Style Ya Footer

Ezali na ba fichiers `css` misato na se ya `md/.i18n/htm` na projet ya démonstration.

* `foot.css` Motindo : nse ya lokasa
* `import.css` : 1Style `i18n.site` pona site mobimba
* `conf.css` : Icônes ya footer na ba fonts

### Elembo Ya Elembo

Elembo ya nse ya lokasa esalemi na kosala fonte oyo ezali na nkombo `F` iconfont.cn ( [version ya Lingelesi](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Svp sala fonte ya icône na yo moko ndenge esengeli pe remplacer configuration oyo elandi na `conf.css` :

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

Svp bo référencer directement te na fichier ya fonte ya iconfont.cn po ekoki ko charger te na navigateur ya safari.

## Ba Composants Ya Web

Okoki kokoma `js` na `foot.pug` te. Soki interaction esengeli, svp personnaliser composant web.

[Composante web](https://www.freecodecamp.org/news/build-your-first-web-component/) ekoki kolimbolama na `md/.i18n/htm/index.js` mpe na sima kosalelama na `foot.pug` .

Ezali pete kosala ba composants web, lokola `<x-img>` personnalisés0 .

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

Code na `.i18n/htm/foot.pug` ezali boye :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Awa `${I18N.C}` ekokani na `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Na kosalelaka `${I18N.xxx}` oyo ekokani na lolenge oyo ya kokoma, esangani na `i18n.yml` , okoki kosala internationalisation multi-langue ya footer.

Kobakisa `class="a"` na lien ezali kopekisa lien ebongwana na `MarkDown` Tala :
 [➔ `YAML` Ndenge : kopekisa lien `HTML` ebongwana na `Markdown`](/i18/qa#H2) .