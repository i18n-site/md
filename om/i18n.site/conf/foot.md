# Jala Jalaa

Ammas pirojektii demoo akka fakkeenyaatti fudhachuun, jalaan marsariitichaa `.i18n/htm/foot.pug` `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) unkaa kan `HTML` maddisiisudha.

[➔ Seerluga afaan oromoo baruuf as tuquun pug](https://pugjs.org)

**`css` fi `js` `foot.pug` hin barreessinaa** , yoo kana hin taane dogongorri ni jiraata.

Maaloo kanneen armaan gadii ilaali, akkaataan `.css` walqunnamtiin immoo qaamolee weeb uumuudhaan galma ga'a.

## Akkaataa Jala Jalaa

Pirojektii demo `md/.i18n/htm` `css` faayiloota 3 armaan gaditti argamu.

* : Footer `foot.css`
* Guutummaa marsariitii kanaaf `i18n.site` : `import.css`
* Mallattoolee fi qubeewwan : `conf.css`

### Qubee Mallattoo

Mallattoon jalaa kan uumamu iconfont.cn ( [Afaan Ingiliffaa](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) qubee maqaa `F`

Mee akka barbaachisummaa isaatti qubee mallattoo mataa keetii uumiitii qindeessaa : gadii kana `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Qaamolee Weebii

`foot.pug` `js`

[Qaama weeb](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` hiikuu dandeessa sana booda qaama `foot.pug` keessatti fayyadamuu dandeessa.

Qaamolee weebii uumuun salphaadha, akka mallattoolee amala `<x-img>`

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

## Jalqaba Afaanota Hedduu

Koodiin isa keessa : akka armaan gadiitti `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`${I18N.C}` Kan walgitu `en/i18n.yml` keessa jira :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`${I18N.xxx}` `i18n.yml`

Link gara `MarkDown` tti akka : jijjiiramneef link irratti dabali `class="a"`
 [: `YAML` `HTML` `Markdown`](/i18/qa#H2)