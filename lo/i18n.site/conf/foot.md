# ສ່ວນທ້າຍ

ຍັງເອົາໂຄງການສາທິດເປັນຕົວຢ່າງ, footer ຂອງເວັບໄຊທ໌ `.i18n/htm/foot.pug` ກໍານົດຢູ່ໃນໄດເລກະທໍລີ `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) ເປັນພາສາແມ່ແບບທີ່ສ້າງ `HTML` .

[➔ ຄລິກທີ່ນີ້ເພື່ອຮຽນຮູ້ໄວຍາກອນຂອງ pug](https://pugjs.org)

**ຢ່າຂຽນ `css` ແລະ `js` `foot.pug`** , ຖ້າບໍ່ດັ່ງນັ້ນຈະມີຂໍ້ຜິດພາດ.

ກະລຸນາອ້າງອີງຕໍ່ໄປນີ້, ຮູບແບບແມ່ນຂຽນຢູ່ໃນທີ່ສອດຄ້ອງກັນ `.css` ແລະການໂຕ້ຕອບແມ່ນບັນລຸໄດ້ໂດຍການສ້າງອົງປະກອບເວັບ.

## ຮູບແບບສ່ວນທ້າຍ

ໃນໂຄງການສາທິດ `md/.i18n/htm` ມີ 3 `css` ໄຟລ໌ຂ້າງລຸ່ມນີ້.

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` : ຄອນສ່ວນທ້າຍ ແລະຕົວອັກສອນ

### ໄອຄອນຟອນ

ໄອ / [ສ່ວນ](https://www.iconfont.cn/?lang=en-us) ທ້າຍແມ່ນ `F` ຂຶ້ນ [ໂດຍ](https://www.iconfont.cn/?lang=zh) iconfont.cn

ກະລຸນາສ້າງຕົວອັກສອນໄອຄອນຂອງທ່ານເອງຕາມຄວາມຕ້ອງການ ແລະປ່ຽນ : ຕັ້ງຄ່າຕໍ່ໄປນີ້ໃນ `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## ອົງປະກອບເວັບ

`foot.pug` ບໍ່ສາມາດຂຽນ `js` ໃນມັນໄດ້.

ທ່ານສາມາດກໍານົດ [ອົງປະກອບເວັບ](https://www.freecodecamp.org/news/build-your-first-web-component/) ໃນ `md/.i18n/htm/index.js` ແລະຈາກນັ້ນໃຊ້ອົງປະກອບໃນ `foot.pug` .

ມັນງ່າຍທີ່ຈະສ້າງອົງປະກອບເວັບ, ເຊັ່ນແທັກແບບກຳນົດເອງ `<x-img>`

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

## ສ່ວນທ້າຍຫຼາຍພາສາ

`.i18n/htm/foot.pug` :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`i18n.yml` ນໍາໃຊ້ `${I18N.xxx}`

`class="a"` ໃສ່ລິ້ງເພື່ອຫຼີກເວັ້ນການປ່ຽນເປັນ `MarkDown` , ເບິ່ງ :
 [: `YAML` ປ້ອງກັນ `HTML` ການເຊື່ອມຕໍ່ຈາກການປ່ຽນເປັນ `Markdown`](/i18/qa#H2) .