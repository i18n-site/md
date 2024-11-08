# Unyaweni Owenziwe Ngendlela Oyifisayo

Ngisathatha iphrojekthi yedemo njengesibonelo, `.i18n/htm/foot.pug` ohlwini lwemibhalo `md` uchaza unyaweni wewebhusayithi.

![](https://p.3ti.site/1721286077.avif)

## Isitayela Saphansi

Kunamafayela amathathu `css` ngaphansi kuka `md/.i18n/htm` kuphrojekthi yedemo.

* `foot.css` :
* `import.css` : `i18n.site` sesayithi lonke
* `conf.css` :

### Ifonti Yesithonjana

Isithonjana saphansi sikhiqizwa ngokudala ifonti ebizwa `F` iconfont.cn [inguqulo yesiNgisi](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Sicela uzenzele eyakho ifonti yesithonjana njengoba kudingeka bese ubuyisela ukucushwa okulandelayo kokuthi `conf.css` :

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

Sicela ungabhekiseli ngokuqondile kufayela lefonti le-iconfont.cn ngoba alikwazi ukulayishwa kusiphequluli se-safari.

## Izingxenye Zewebhu

Awukwazi ukubhala `js` koku `foot.pug` Uma ukuxhumana kuyadingeka, sicela wenze ingxenye yewebhu ngokwezifiso.

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

Ngokusebenzisa `${I18N.xxx}` ofana nale ndlela yokubhala, ehlanganiswe no `i18n.yml` , ungakwazi ukuzuza ukwaziswa kwamazwe ngamazwe ngezilimi eziningi kwangaphansi.

Ukwengeza `class="a"` kusixhumanisi ukuvimbela isixhumanisi ukuthi singaguqulelwa ku `MarkDown` Bona :
 [➔ `YAML` : Ungavimba kanjani isixhumanisi `HTML` ukuthi siguqulwe sibe ngu `Markdown`](/i18/qa#H2) .