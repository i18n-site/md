# Moslashtirilgan Altbilgi

Hali ham demo loyihasini misol sifatida oladigan bo'lsak, `md` katalogidagi `.i18n/htm/foot.pug` veb-saytning pastki qismini belgilaydi.

![](https://p.3ti.site/1721286077.avif)

## Altbilgi Uslubi

Namoyish loyihasida `md/.i18n/htm` dan kichik uchta `css` fayl mavjud.

* `foot.css` :
* `import.css` : sayt uchun `i18n.site` uslub
* `conf.css` :

### Ikonka Shrifti

Altbilgi belgisi iconfont.cn nomli shrift yaratish orqali hosil bo'ladi `F` [inglizcha versiya](https://www.iconfont.cn/?lang=en-us) / [shínín](https://www.iconfont.cn/?lang=zh) ).

Iltimos, kerak bo'lganda o'zingizning belgi shriftingizni yarating va quyidagi konfiguratsiyani `conf.css` ga almashtiring :

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

Iltimos, iconfont.cn shrift fayliga toʻgʻridan-toʻgʻri murojaat qilmang, chunki uni Safari brauzeriga yuklab boʻlmaydi.

## Veb Komponentlari

`foot.pug` dan `js` yozib bo‘lmaydi. Agar o‘zaro aloqa talab etilsa, veb-komponentni sozlang.

[Veb-komponent](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` da aniqlanishi va keyin `foot.pug` da ishlatilishi mumkin.

Maxsus `<x-img>` kabi veb komponentlarini yaratish oson.

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

## Ko'p Tilli Altbilgi

`.i18n/htm/foot.pug` dagi kod quyidagicha :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Bu erda `${I18N.C}` `en/i18n.yml` ga to'g'ri keladi :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`i18n.yml` bilan birlashtirilgan ushbu yozish usuliga o'xshash `${I18N.xxx}` foydalanib, siz kolontiterni ko'p tilli xalqarolashtirishga erishishingiz mumkin.

Havolaga `class="a"` qo'shish havolani `MarkDown` ga o'tkazishning oldini olishdir. Qarang :
 [: `YAML` `HTML` havolani `Markdown` ga aylantirishni qanday oldini olish mumkin](/i18/qa#H2) .