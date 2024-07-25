# Altbilgi

Hali ham demo loyihasini misol sifatida olib, veb-saytning pastki qismi `md` `.i18n/htm/foot.pug` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) `HTML` yaratadigan shablon tilidir.

[➔ Grammatikani oʻrganish uchun shu yerni bosing pug](https://pugjs.org)

**`foot.pug` `css` va `js` yozmang** , aks holda xatolar bo'ladi.

Iltimos, quyidagilarga murojaat qiling, uslub mos keladigan `.css` da yozilgan va o'zaro ta'sir veb-komponentlarni yaratish orqali amalga oshiriladi.

## Altbilgi Uslubi

Demo `md/.i18n/htm` 3 `css` fayl mavjud.

* `foot.css` :
* `import.css` Butun sayt uchun `i18n.site` :
* `conf.css` :

### Ikonka Shrifti

Altbilgi belgisi iconfont.cn [nomli](https://www.iconfont.cn/?lang=en-us) / yaratish [orqali](https://www.iconfont.cn/?lang=zh) `F`

Iltimos, kerak bo'lganda o'zingizning belgi shriftingizni yarating va : konfiguratsiyani o'zgartiring `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Veb Komponentlari

Unga `js` ni yozib `foot.pug` .

`md/.i18n/htm/index.js` da [veb-komponentni](https://www.freecodecamp.org/news/build-your-first-web-component/) belgilashingiz va keyin `foot.pug` dagi komponentdan foydalanishingiz mumkin.

Maxsus teglar kabi veb komponentlarini yaratish oson `<x-img>`

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

Undagi kod : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: yerda `en/i18n.yml` tegishli `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ushbu yozish usuliga o'xshash `${I18N.xxx}` `i18n.yml` foydalanib, siz kolontiterni ko'p tilli xalqarolashtirishga erishishingiz mumkin.

Havola `MarkDown` ga aylantirilmasligi : havolaga qo'shing `class="a"`
 [: Havola `HTML` ni `Markdown` ga aylantirilishini `YAML` oldini olish mumkin](/i18/qa#H2) .