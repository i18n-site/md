# Zosintha Mwamakonda

Ndikutengabe pulojekiti yachiwonetsero monga chitsanzo, `.i18n/htm/foot.pug` mu bukhu la `md` imatanthauzira zapansi pa tsambalo.

![](https://p.3ti.site/1721286077.avif)

## Mtundu Wapansi

Pali mafayilo atatu `css` pansi pa `md/.i18n/htm` mu polojekiti yowonetsera.

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` :

### Chizindikiro Cha Zilembo

Chizindikiro chapansipa chimapangidwa ndikupanga font yotchedwa iconfont.cn `F` [mtundu wachingerezi](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Chonde pangani mawonekedwe anu azithunzi momwe mukufunikira ndikusinthira masinthidwe awa mu `conf.css` :

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

Chonde musatchule mwachindunji fayilo ya iconfont.cn chifukwa siyingakweze pa msakatuli wa safari.

## Zida Zapaintaneti

Simungathe kulemba `js` mu `foot.pug` Ngati kuyanjana kuli kofunika, chonde sinthani gawo la intaneti.

[Chigawo cha intaneti](https://www.freecodecamp.org/news/build-your-first-web-component/) chikhoza kufotokozedwa mu `md/.i18n/htm/index.js` ndiyeno kugwiritsidwa ntchito mu `foot.pug` .

Ndikosavuta kupanga zida zapaintaneti, monga `<x-img>` .

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

## Zilankhulo Zambiri

Khodi mu `.i18n/htm/foot.pug` ndi motere :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Apa `${I18N.C}` ikufanana ndi `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Pogwiritsa ntchito `${I18N.xxx}` yofanana ndi njira yolemberayi, yophatikizidwa ndi `i18n.yml` , mutha kukwaniritsa zinenero zambiri zapadziko lonse lapansi.

Kuwonjezera `class="a"` ku chiyanjano ndikuletsa chiyanjano kuti chisatembenuzidwe ku `MarkDown` Onani :
 [`HTML` `YAML` : `Markdown`](/i18/qa#H2)