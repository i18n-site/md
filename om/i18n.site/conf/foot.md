# Jala Jalaa

Ammas pirojektii demoo akka fakkeenyaatti fudhachuun, `.i18n/htm/foot.pug` galmee `md` keessaa jala marsariitii ibsa.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) afaan unkaa `HTML` 's maddisiisudha.

[➔ Seerluga afaan oromoo baruuf as tuquun pug](https://pugjs.org)

**`foot.pug` keessatti `css` fi `js` hin barreessiin** , yoo kana hin taane dogongorri ni jiraata.

Maaloo kanneen armaan gadii ilaali, akkaataan gara `.css` walgitutti barreeffama, walqunnamtiin immoo qaamolee weeb uumuudhaan galma ga'a.

## Akkaataa Jala Jalaa

Pirojektii demoo keessatti faayiloota `css` sadii `md/.i18n/htm` jala jiru.

* `foot.css` : Jalqaba
* `import.css` : `i18n.site` durtii guutummaa saayitii
* `conf.css` : Mallattoolee fi qubeewwan jala jalaa

### Qubee Mallattoo

Mallattoon jalaa kan uumamu qubee maqaa `F` iconfont.cn ( [Afaan Ingiliffaa](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) jedhu uumuudhaani.

Mee akka barbaachisummaa isaatti qubee mallattoo mataa keetii uumi qindeessaa armaan gadii `conf.css` keessatti bakka buusi :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Qaamolee Weebii

`foot.pug` keessaa `js` barreessuu hin dandeessu.Yoo walqunnamtiin barbaachise, maaloo qaama weebii dhuunfachiisi.

[Qaamni weebii](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` keessatti ibsamuu danda'a sana booda `foot.pug` keessatti fayyadamuu danda'a.

Qaamolee weeb uumuun salphaadha, kan akka mallattoolee `<x-img>` .

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

Koodiin `.i18n/htm/foot.pug` keessa jiru akka armaan gadiitti :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Asitti `${I18N.C}` `en/i18n.yml` wajjin walsima :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`${I18N.xxx}` mala barreessuu kanaan walfakkaatu fayyadamuun, `i18n.yml` waliin walitti makamuun, afaanota hedduu idil-addunyaa ta'uu jala jalaa galmaan gahuu dandeessa.

Link irratti `class="a"` dabaluunis linkiin gara `MarkDown` akka hin jijjiiramneef.Ilaali :
 [➔ `YAML` Akkaataa link `HTML` gara `Markdown` akka hin jijjiiramne ittisuu :](/i18/qa#H2) !