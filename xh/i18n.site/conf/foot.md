# Umbhalo Osemazantsi Olungiselelwe Wena

Usathatha iprojekthi yedemo njengomzekelo, `.i18n/htm/foot.pug` kwi- `md` directory ichaza i-footer yewebhusayithi.

![](https://p.3ti.site/1721286077.avif)

## Isimbo Sasezantsi

Kukho iifayile ezintathu `css` phantsi kwe `md/.i18n/htm` kwiprojekthi yedemo.

* `foot.css` :
* `import.css` : `i18n.site` kwindawo yonke
* `conf.css` : icon kunye neefonti

### Ifonti Ye Icon

I icon esezantsi iveliswa ngokwenza ifonti enegama iconfont.cn `F` [uguqulelo lwesiNgesi](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Nceda wenze eyakho ifonti ye icon njengoko kufuneka kwaye ubuyisele uqwalaselo olulandelayo ku `conf.css` :

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

Nceda ungabhekiseli ngokuthe ngqo kwifayile yefonti ye iconfont.cn kuba ayinakulayishwa kwisikhangeli se safari.

## Amacandelo Ewebhu

Awukwazi ukubhala `js` ku `foot.pug` Ukuba unxibelelwano luyafuneka, nceda wenze icandelo lewebhu.

[Icandelo lewebhu](https://www.freecodecamp.org/news/build-your-first-web-component/) linokuchazwa kwi `md/.i18n/htm/index.js` kwaye lisetyenziswe kwi `foot.pug` .

Kulula ukwenza amacandelo ewebhu, afana `<x-img>` zesiko0.

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

## Umbhalo Osemazantsi Weelwimi Ezininzi

Ikhowudi ku `.i18n/htm/foot.pug` ihamba ngolu hlobo lulandelayo :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Apha `${I18N.C}` uhambelana no `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ukusebenzisa `${I18N.xxx}` efana nale ndlela yokubhala, idityaniswe no `i18n.yml` , unokufikelela kwiilwimi ezininzi zamazwe ngamazwe kwi-footer.

Ukongeza `class="a"` kwikhonkco kukuthintela ikhonkco ukuba iguqulwe kwi `MarkDown` Bona :
 [: `YAML` Indlela yokuthintela ikhonkco `HTML` ekuguqulweni kwe- `Markdown`](/i18/qa#H2) .