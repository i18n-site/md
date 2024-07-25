# ສົນທິສັນຍາຮູບແບບ MarkDown

## ຈຸດສະມໍ

ແບບດັ້ງເດີມ `MarkDown`

`i18n.site` ການແກ້ໄຂສະມໍທີ່ຕົກລົງກັນແມ່ນການໃສ່ຂໍ້ຄວາມທີ່ຄ້າຍຄືກັນກັບ `<a rel=id href="#xxx" id="xxx"></a>` ໃນ `MarkDown` ເພື່ອສ້າງສະມໍດ້ວຍຕົນເອງ.

`<a rel=id href="#xxx" id="xxx"></a>` , ທີ່ນີ້ `rel=id` ກຳນົດຮູບແບບໜ້າຂອງຈຸດສະມໍ, ກະລຸນາແທນທີ່ `xxx` ດ້ວຍຕົວຫຍໍ້ພາສາອັງກິດຂອງສະມໍ.

Anchors ປົກກະຕິແລ້ວຈະຖືກເພີ່ມໃສ່ຫົວຂໍ້, ເຊັ່ນ:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ຜົນ​ກະ​ທົບ​ການ​ສະ​ແດງ​ແມ່ນ​ດັ່ງ​ຕໍ່​ໄປ​ນີ້​:

<img src="//p.3ti.site/1721381136.avif" width="350">

## ຂຽນ `HTML` ໃນ `MarkDown`

`pug` `HTML` ສາມາດຝັງຢູ່ໃນລະຫັດ.

ເນື້ອໃນພາຍໃນອົງປະກອບ `<pre>`

ສົມທົບສອງຈຸດນີ້, ທ່ານສາມາດຂຽນ `HTML` ໃນ `MarkDown` ໄດ້ຢ່າງງ່າຍດາຍເພື່ອບັນລຸຜົນກະທົບການສະແດງຕ່າງໆ.

ທ່ານສາມາດອ້າງອີງເຖິງການປະຕິບັດໃນ [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) ລະຫັດແມ່ນດັ່ງຕໍ່ໄປນີ້ :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

ໃຫ້ສັງເກດວ່າ `<style>` ຍັງຖືກກໍານົດຢູ່ໃນ `<pre>`
