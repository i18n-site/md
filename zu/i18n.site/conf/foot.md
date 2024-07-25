# Unyaweni

Ngisathatha iphrojekthi yedemo njengesibonelo, unyaweni wewebhusayithi `.i18n/htm/foot.pug` kuhlu lwemibhalo `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) iwulimi lwesifanekiso olukhiqiza `HTML` .

[➔ Chofoza lapha ukuze ufunde uhlelo lolimi lwe- pug](https://pugjs.org)

**Ungabhali `css` kanye `js` `foot.pug`** , kungenjalo kuzoba namaphutha.

Sicela ubhekisele kokulandelayo, isitayela sibhalwe ngendlela ehambisanayo `.css` futhi ukusebenzisana kufinyelelwa ngokudala izingxenye zewebhu.

## Isitayela Saphansi

Kuphrojekthi yedemo `md/.i18n/htm` angu-3 `css` ngezansi.

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` :

### Ifonti Yesithonjana

Isithonjana saphansi sakhiwe ngu- iconfont.cn ( [Inguqulo yesiNgisi](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) ngokudala ifonti ebizwa ngokuthi `F`

Sicela udale eyakho ifonti yesithonjana njengoba kudingeka bese ubuyisela : okulandelayo ku- `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Izingxenye Zewebhu

`foot.pug` ayikwazi ukubhala `js` kuyo. Uma ukusebenzisana kuyadingeka, sicela wenze ngokwezifiso ingxenye yekhasi lewebhu.

Ungachaza [ingxenye yewebhu](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

Kulula ukwakha izingxenye zewebhu, njengamathegi angokwezifiso `<x-img>`

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

Ikhodi ekuyo imi : `.i18n/htm/foot.pug`

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

Ngokusebenzisa `${I18N.xxx}` efana nale ndlela yokubhala, ehlanganiswe ne- `i18n.yml` , ungafinyelela ukwaziswa kwamazwe ngamazwe ngezilimi eziningi.

`class="a"` kusixhumanisi ukuze ugweme ukuthi isixhumanisi siguqulelwe ku- `MarkDown` , bheka :
 [: Ungavimba `YAML` `HTML` yesixhumanisi ukuthi ingaguqulelwa ku- `Markdown`](/i18/qa#H2) .