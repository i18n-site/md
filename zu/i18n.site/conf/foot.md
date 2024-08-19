# Unyaweni

Ngisathatha iphrojekthi yedemo njengesibonelo, `.i18n/htm/foot.pug` ohlwini lwemibhalo `md` uchaza unyaweni wewebhusayithi.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) uwulimi lwesifanekiso okhiqiza `HTML` 's.

[➔ Chofoza lapha ukuze ufunde uhlelo lolimi lwe- pug](https://pugjs.org)

**Ungabhali `css` no- `js` ku `foot.pug`** , kungenjalo kuzoba nephutha.

Sicela ubhekisele kokulandelayo, isitayela sibhalwe ku `.css` ohambisanayo, futhi ukusebenzisana kufinyelelwa ngokudala izingxenye zewebhu.

## Isitayela Saphansi

Kunamafayela amathathu angu `css` ngaphansi `md/.i18n/htm` kuphrojekthi yedemo.

* `foot.css` :
* `import.css` : 1Isitayela `i18n.site` sesayithi lonke
* `conf.css` :

### Ifonti Yesithonjana

Isithonjana saphansi sikhiqizwa ngokudala ifonti `F` iconfont.cn [inguqulo yesiNgisi](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Sicela uzenzele eyakho ifonti yesithonjana njengoba kudingeka bese ubuyisela ukucushwa okulandelayo kokuthi `conf.css` :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Izingxenye Zewebhu

Awukwazi ukubhala `js` koku- `foot.pug` Uma ukuxhumana kuyadingeka, sicela wenze ingxenye yewebhu ngokwezifiso.

[Ingxenye yewebhu](https://www.freecodecamp.org/news/build-your-first-web-component/) ingachazwa ku `md/.i18n/htm/index.js` bese isetshenziswa ku `foot.pug` .

Kulula ukwakha izingxenye zewebhu, ezifana `<x-img>` angokwezifiso0 .

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

## Unyaweni Wezilimi Eziningi

Ikhodi ku `.i18n/htm/foot.pug` imi kanje :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Lapha `${I18N.C}` uhambisana no `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Usebenzisa `${I18N.xxx}` ofana nale ndlela yokubhala, ehlanganiswe no `i18n.yml` , ungafinyelela ukwaziswa kwamazwe ngamazwe kwezilimi eziningi kwangaphansi.

Ukwengeza `class="a"` kusixhumanisi ukuvimbela isixhumanisi ukuthi singaguqulelwa ku `MarkDown` Bona :
 [➔ `YAML` : Ungavimba kanjani isixhumanisi `HTML` ukuthi siguqulwe sibe ngu `Markdown`](/i18/qa#H2) .