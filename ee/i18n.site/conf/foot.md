# Afɔti

Esi míegatsɔ demo dɔa abe kpɔɖeŋu ene la, `.i18n/htm/foot.pug` le `md` ƒe nyatakakadzraɖoƒea ɖe nyatakakadzraɖoƒea ƒe afɔti gɔme.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) nye template gbegbɔgblɔ si naa `HTML` 's.

[➔ Zi afisia dzi be nàsrɔ̃ gbeŋutise si le pug](https://pugjs.org)

**Mègaŋlɔ `css` kple `js` ɖe `foot.pug` me o** , ne menye nenema o la, vodada aɖe anɔ anyi.

Taflatse kpɔ nusiwo gbɔna, woŋlɔ atsyã la ɖe `.css` si sɔ me, eye wowɔa kadodoa to web ƒe akpawo wɔwɔ me.

## Afɔti Ƒe Atsyã

Fail etɔ̃ `css` le `md/.i18n/htm` te le demo dɔa me.

* `foot.css` :
* `import.css` : `i18n.site` si woɖo ɖi na nyatakakadzraɖoƒe bliboa
* `conf.css` : Afɔti ƒe dzesiwo kple ŋɔŋlɔdzesiwo

### Icon Ƒe Nuŋɔŋlɔ

Wowɔa afɔti ƒe dzesi to ŋɔŋlɔdzesi si ŋkɔe nye `F` iconfont.cn ( [Eŋlisigbe me tɔ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) wɔwɔ me.

Taflatse wɔ wò ŋutɔ wò dzesi ƒe nuŋɔŋlɔ abe alesi wòhiã ene eye nàɖɔli ɖoɖo si gbɔna la le `conf.css` me :

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

Taflatse mègayɔ iconfont.cn ƒe ŋɔŋlɔdzesiwo ƒe faɛl tẽ o elabena womateŋu atsɔe ade safari browser la dzi o.

## Nyatakakadzraɖoƒe Ƒe Akpa Aɖewo

Màte ŋu aŋlɔ `js` le `foot.pug` me o. Ne ehiã be nàwɔ nu aduadu la, taflatse trɔ asi le web ƒe akpaa ŋu.

Woateŋu aɖe [web ƒe akpa aɖe](https://www.freecodecamp.org/news/build-your-first-web-component/) gɔme le `md/.i18n/htm/index.js` me eye emegbe woazãe le `foot.pug` me.

Ele bɔbɔe be woawɔ web ƒe akpa aɖewo, abe custom `<x-img>` .

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

## Gbegbɔgblɔ Geɖe Ƒe Afɔti

Kɔda si le `.i18n/htm/foot.pug` me la le ale :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Le afisia la, `${I18N.C}` sɔ kple `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ne èzã `${I18N.xxx}` si sɔ kple nuŋɔŋlɔmɔnu sia, tsɔ kpe ɖe `i18n.yml` ŋu la, àte ŋu akpɔ afɔti la ƒe dukɔwo dome gbegbɔgblɔ geɖe.

`class="a"` tsɔtsɔ kpe ɖe kadodoa ŋu nye be woaxe mɔ na kadodoa be woagatrɔ ɖe `MarkDown` Kpɔ :
 [➔ `YAML` : woawɔ axe mɔ na kadodo `HTML` be woagatrɔ wòazu `Markdown` o](/i18/qa#H2) .