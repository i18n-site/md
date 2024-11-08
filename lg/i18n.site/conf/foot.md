# Ekiwandiiko Ekikoleddwa Ku Mutindo

Nga tukyatwala pulojekiti ya demo ng’ekyokulabirako, `.i18n/htm/foot.pug` mu `md` dayirekita annyonnyola wansi w’omukutu.

![](https://p.3ti.site/1721286077.avif)

## Omusono Gw’okuwanirira Wansi

Waliwo fayiro ssatu `css` wansi wa `md/.i18n/htm` mu pulojekiti ya demo.

* `foot.css` : Omulembe gwa wansi
* `import.css` : `i18n.site` ku mukutu gwonna
* `conf.css` : Ebifaananyi eby'oku wansi n'empandiika

### Fonti Y'akabonero

Akabonero ka footer kakolebwa nga tukola efonti eyitibwa `F` iconfont.cn ( [Enkyusa y'Olungereza](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Nsaba okole efonti yo ey'akabonero nga bwe kyetaagisa era okyuse ensengeka eno wammanga mu `conf.css` :

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

Nsaba tojuliza butereevu fayiro ya font ya iconfont.cn kubanga tesobola kutikkibwa ku safari browser.

## Ebitundu By’omukutu

Tosobola kuwandiika `js` mu `foot.pug` Singa enkolagana yeetaagibwa, nsaba olongoose ekitundu ky'omukutu.

[Ekitundu ky'omukutu](https://www.freecodecamp.org/news/build-your-first-web-component/) kiyinza okunnyonnyolwa mu `md/.i18n/htm/index.js` n'oluvannyuma ne kikozesebwa mu `foot.pug` .

Kyangu okukola ebitundu by'omukutu, gamba nga custom `<x-img>` .

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

## Wansi W’ennimi Nnyingi

Code eri mu `.i18n/htm/foot.pug` eri bweti :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Wano `${I18N.C}` akwatagana ne `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Nga okozesa `${I18N.xxx}` efaananako n’enkola eno ey’okuwandiika, ng’ogasseeko `i18n.yml` , osobola okutuuka ku kuyingiza ennimi nnyingi ez’ensi yonna ez’ekiwandiiko.

Okwongera `class="a"` ku link kwe kulemesa link okukyusibwa okudda mu `MarkDown` Laba :
 [➔ `YAML` : y'okuziyiza link `HTML` okukyusibwa okudda mu `Markdown`](/i18/qa#H2) .