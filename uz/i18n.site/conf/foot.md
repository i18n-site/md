# Altbilgi

Hali ham demo loyihasini misol sifatida oladigan bo'lsak, `md` katalogidagi `.i18n/htm/foot.pug` veb-saytning pastki qismini belgilaydi.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) `HTML` ni hosil qiluvchi shablon tilidir.

[➔ Grammatikani oʻrganish uchun shu yerni bosing pug](https://pugjs.org)

**`foot.pug` ga `css` va `js` yozmang** , aks holda xato bo'ladi.

Iltimos, quyidagilarga murojaat qiling, uslub mos keladigan `.css` ga yoziladi va o'zaro ta'sir veb komponentlarini yaratish orqali amalga oshiriladi.

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
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

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