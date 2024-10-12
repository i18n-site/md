# Ase Hɔ Asɛm

Yɛda so ara fa demo adwuma no sɛ nhwɛso no, `.i18n/htm/foot.pug` wɔ `md` directory no mu kyerɛkyerɛ wɛbsaet no ase.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) yɛ template kasa a ɛma `HTML` 's.

[➔ Klik ha na sua kasa mmara a ɛwɔ pug](https://pugjs.org)

**Nkyerɛw `css` ne `js` wɔ `foot.pug` mu** , anyɛ saa a mfomso bi bɛba.

Yɛsrɛ wo hwɛ nea edidi so yi, wɔakyerɛw ɔkwan a wɔfa so yɛ no wɔ `.css` a ɛne no hyia no mu, na nkitahodi no nam wɛb afã horow a wɔyɛ so na ɛba.

## Footer Style

Fael `css` abiɛsa na ɛwɔ `md/.i18n/htm` ase wɔ demo adwuma no mu.

* `foot.css` : Ase hɔ asɛm
* `import.css` : `i18n.site` style ma sait no nyinaa
* `conf.css` : Ase hɔ agyiraehyɛde ne nkyerɛwde

### Ahyɛnsode Font

Wɔnam font a wɔato din `F` iconfont.cn ( [Borɔfo nkyerɛase](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) so na ɛyɛ footer icon no.

Yɛsrɛ wo yɛ w'ankasa icon font sɛnea ɛho hia na fa nhyehyɛe a edidi so yi si ananmu wɔ `conf.css` :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Wɛbsaet No Afã Horow

Worentumi nkyerɛw `js` wɔ `foot.pug` Sɛ nkitahodi ho hia a, yɛsrɛ wo yɛ wɛb fã no sɛnea wopɛ.

Wobetumi akyerɛkyerɛ [wɛb fã bi](https://www.freecodecamp.org/news/build-your-first-web-component/) mu wɔ `md/.i18n/htm/index.js` mu na afei wɔde adi dwuma wɔ `foot.pug` mu.

Ɛnyɛ den sɛ wobɛbɔ wɛb afã horow, te sɛ custom `<x-img>` .

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

Kood a ɛwɔ `.i18n/htm/foot.pug` mu no te sɛ nea edidi so yi :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Ɛha yi `${I18N.C}` ne `en/i18n.yml` hyia :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Sɛ wode `${I18N.xxx}` a ɛte sɛ saa akyerɛw kwan yi di dwuma, a wode `i18n.yml` ka ho a, wubetumi anya kasa horow pii amanaman ntam nkitahodi a ɛwɔ ase hɔ no mu.

Sɛ wode `class="a"` ka link no ho a, ɛyɛ sɛ wobɛsiw link no kwan sɛ wɔbɛdan akɔ `MarkDown` Hwɛ :
 [➔ `YAML` Sɛnea wobɛsiw link `HTML` : kwan sɛ wɔbɛdan no `Markdown`](/i18/qa#H2) .