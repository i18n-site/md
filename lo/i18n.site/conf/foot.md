# ສ່ວນທ້າຍ

ຍັງເອົາໂຄງການຕົວຢ່າງເປັນຕົວຢ່າງ, `.i18n/htm/foot.pug` ໃນ `md` directory ກໍານົດ footer ຂອງເວັບໄຊທ໌.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) ເປັນພາສາແມ່ແບບທີ່ສ້າງ `HTML` 's.

[➔ ຄລິກທີ່ນີ້ເພື່ອຮຽນຮູ້ໄວຍາກອນຂອງ pug](https://pugjs.org)

**ຢ່າຂຽນ `css` ແລະ `js` ໃນ `foot.pug`** , ຖ້າບໍ່ດັ່ງນັ້ນມັນຈະມີຂໍ້ຜິດພາດ.

ກະລຸນາອ້າງອີງຕໍ່ໄປນີ້, ຮູບແບບຖືກຂຽນເຂົ້າໄປໃນ `.css` ທີ່ສອດຄ້ອງກັນ, ແລະການໂຕ້ຕອບແມ່ນບັນລຸໄດ້ໂດຍການສ້າງອົງປະກອບເວັບ.

## ຮູບແບບສ່ວນທ້າຍ

ມີສາມໄຟລ໌ `css` ພາຍໃຕ້ `md/.i18n/htm` ໃນໂຄງການສາທິດ.

* `foot.css` :
* `import.css` : 1 ຮູບແບບ `i18n.site` ສໍາລັບເວັບໄຊທ໌ທັງຫມົດ
* `conf.css` : ໄອຄອນສ່ວນທ້າຍ ແລະຕົວອັກສອນ

### ໄອຄອນຟອນ

ໄອຄອນສ່ວນທ້າຍແມ່ນສ້າງຂຶ້ນໂດຍການສ້າງຕົວອັກສອນທີ່ມີຊື່ວ່າ `F` iconfont.cn ( [ສະບັບພາສາອັງກິດ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

ກະລຸນາສ້າງຕົວອັກສອນ icon ຂອງທ່ານເອງຕາມຄວາມຕ້ອງການແລະທົດແທນການຕັ້ງຄ່າດັ່ງຕໍ່ໄປນີ້ໃນ `conf.css` :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## ອົງປະກອບເວັບ

ທ່ານບໍ່ສາມາດຂຽນ `js` ໃນ `foot.pug` ຖ້າຕ້ອງການການໂຕ້ຕອບ, ກະລຸນາປັບແຕ່ງອົງປະກອບເວັບ.

[ອົງປະກອບເວັບ](https://www.freecodecamp.org/news/build-your-first-web-component/) ສາມາດຖືກກໍານົດໃນ `md/.i18n/htm/index.js` ແລະຫຼັງຈາກນັ້ນໃຊ້ໃນ `foot.pug` .

ມັນງ່າຍທີ່ຈະສ້າງອົງປະກອບເວັບ, ເຊັ່ນ: `<x-img>` .

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

ລະຫັດໃນ `.i18n/htm/foot.pug` ມີດັ່ງນີ້ :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

ທີ່ນີ້ `${I18N.C}` ກົງກັບ `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

ການນໍາໃຊ້ `${I18N.xxx}` ທີ່ຄ້າຍຄືກັນກັບວິທີການຂຽນນີ້, ລວມກັບ `i18n.yml` , ທ່ານສາມາດບັນລຸໄດ້ຫຼາຍພາສາສາກົນຂອງ footer ໄດ້.

ການເພີ່ມ `class="a"` ເຂົ້າໃນການເຊື່ອມຕໍ່ແມ່ນເພື່ອປ້ອງກັນການເຊື່ອມຕໍ່ຈາກການປ່ຽນເປັນ `MarkDown` ເບິ່ງ :
 [`HTML` `YAML` : `Markdown`](/i18/qa#H2)