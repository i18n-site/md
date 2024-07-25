# Ase Hɔ Asɛm

Yɛda so ara fa demo adwuma no sɛ nhwɛso no, `.i18n/htm/foot.pug` wɛbsaet no ase wɔ `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

yɛ kasa a wɔde yɛ nsusuwso a ɛma `HTML` [`pug`](https://pugjs.org)

[➔ Klik ha na sua kasa mmara a ɛwɔ pug](https://pugjs.org)

**Mma nkyerɛw `css` ne `js` wɔ `foot.pug`**

Yɛsrɛ wo hwɛ nea edidi so yi, wɔakyerɛw ɔkwan a wɔfa so yɛ no wɔ `.css` na nkitahodi no nam wɛb afã horow a wɔyɛ so na ɛba.

## Footer Kwan a Wɔfa So Yɛ Ade

Wɔ demo project no mu `md/.i18n/htm` `css` fael 3 na ɛwɔ aseɛ ha.

* `foot.css` :
* : `i18n.site` ma sait no nyinaa `import.css`
* `conf.css` :

### Icon Font a Wɔde Kyerɛw

Wɔnam iconfont.cn ( [Twi version](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) a wɔyɛ font a wɔato din `F`

Yɛsrɛ wo yɛ w'ankasa icon font sɛnea ɛho hia na fa nhyehyɛe a edidi so : si ananmu wɔ `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Wɛbsaet No Afã Horow

`foot.pug` ntumi nkyerɛw `js` wɔ mu.Sɛ nkitahodi ho hia a, yɛsrɛ wo sesa wɛb krataafa no fã no.

Wubetumi akyerɛkyerɛ [wɛb fã bi](https://www.freecodecamp.org/news/build-your-first-web-component/) mu `foot.pug` `md/.i18n/htm/index.js`

Ɛnyɛ den sɛ wobɛbɔ wɛb afã horow, te sɛ custom tags `<x-img>`

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

## Kasa Ahorow Pii Ase Hɔ Asɛm

`.i18n/htm/foot.pug` Kood a ɛwɔ mu no te sɛ nea edidi so yi :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Ɛha : Nea ɛne no hyia no wɔ `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Sɛ wode `${I18N.xxx}` a ɛte sɛ saa akyerɛw kwan yi di dwuma, a wode `i18n.yml` ka ho a, wubetumi anya kasa horow pii amanaman ntam nkitahodi a ɛwɔ ase hɔ no mu.

`class="a"` ka link no ho na woakwati sɛ wɔbɛdan link no akɔ `MarkDown` , hwɛ :
 [: `YAML` wobɛsiw `HTML` a ɛwɔ link no mu no kwan sɛ wɔbɛdane no `Markdown`](/i18/qa#H2) .