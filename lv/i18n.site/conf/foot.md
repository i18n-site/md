# Kājene

Joprojām par piemēru ņemot demonstrācijas projektu, vietnes kājene `.i18n/htm/foot.pug` definēta `md` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) veidnes valoda, kas ģenerē `HTML` .

[➔ Noklikšķiniet šeit, lai uzzinātu gramatiku pug](https://pugjs.org)

**Nerakstiet `css` `js` `foot.pug`** , pretējā gadījumā būs kļūdas.

Lūdzu, skatiet tālāk, stils ir rakstīts atbilstošajā `.css` un mijiedarbība tiek panākta, izveidojot tīmekļa komponentus.

## Kājenes Stils

`md/.i18n/htm` projektā ir 3 `css` faili.

* : `foot.css`
* `import.css` : `i18n.site` visai vietnei
* `conf.css` ikonas un :

### Ikonas Fonts

Kājenes ikonu ģenerē iconfont.cn ( [versija angļu valodā](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)), izveidojot fontu ar nosaukumu `F`

Lūdzu, pēc vajadzības izveidojiet savu ikonas fontu un aizstājiet : norādīto konfigurāciju `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Tīmekļa Komponenti

Tajā `foot.pug` ierakstīt `js` Ja ir nepieciešama mijiedarbība, lūdzu, pielāgojiet tīmekļa lapas komponentu.

Jūs varat definēt [tīmekļa komponentu](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` pēc tam izmantot komponentu `foot.pug` .

Ir viegli izveidot tīmekļa komponentus, piemēram, pielāgotus tagus `<x-img>`

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

## Daudzvalodu Kājene

Kods tajā : šāds `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Atbilstošais : `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Izmantojot `${I18N.xxx}` līdzīgu šai rakstīšanas metodei kopā ar `i18n.yml` , jūs varat panākt kājenes internacionalizāciju vairākās valodās.

`class="a"` saitei, lai izvairītos no saites konvertēšanas uz `MarkDown` , skatiet :
 [: `YAML` novērst saites `HTML` konvertēšanu uz `Markdown`](/i18/qa#H2) .