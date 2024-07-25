# Pansi

Potengera projekiti yachiwonetsero monga chitsanzo, tsamba lawebusayiti `.i18n/htm/foot.pug` mu bukhu la `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) ndi chilankhulo cha template chomwe chimapanga `HTML` .

[➔ Dinani apa kuti muphunzire galamala ya pug](https://pugjs.org)

**Osalemba `css` ndi `js` `foot.pug`** , apo ayi padzakhala zolakwika.

Chonde onani zotsatirazi, kalembedwe kalembedwe kofanana `.css` Ndipo kuyanjana kumatheka popanga zigawo za intaneti.

## Mtundu Wapansi

Mu `md/.i18n/htm` pali mafayilo 3 `css` pansipa.

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` :

### Chizindikiro Cha Zilembo

Chizindikiro chapansi chimapangidwa ndi iconfont.cn ( [Chingerezi](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) kupanga font yotchedwa `F`

Chonde pangani mawonekedwe anu azithunzi momwe mukufunikira ndikusinthira masinthidwe : mu `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Zida Zapaintaneti

`foot.pug` simungathe kulemba `js` mmenemo.

Mutha kufotokozera [gawo la intaneti](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

Ndikosavuta kupanga zida zapaintaneti, monga ma tag okhazikika `<x-img>`

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

`${I18N.xxx}` ntchito njira yolembera iyi, yophatikizidwa ndi `i18n.yml` , mutha kukwaniritsa zinenero zambiri zapamunsi.

`class="a"` ku ulalo kuti ulalowu usasinthidwe kukhala `MarkDown` , onani :
 [: `YAML` mungaletsere `HTML` ya ulalo kuti isasinthidwe kukhala `Markdown`](/i18/qa#H2) .