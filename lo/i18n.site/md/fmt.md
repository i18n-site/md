# i18n.site MarkDown ສົນທິສັນຍາການຂຽນ

## ຈຸດສະມໍ

ຈຸດສະມໍແບບດັ້ງເດີມ `MarkDown` ແມ່ນສ້າງຂຶ້ນໂດຍອີງໃສ່ເນື້ອໃນຂໍ້ຄວາມໃນກໍລະນີຂອງຫຼາຍພາສາ, ການແກ້ໄຂນີ້ແມ່ນບໍ່ເປັນໄປໄດ້.

ການແກ້ໄຂຈຸດສະມໍທີ່ຕົກລົງກັບ `i18n.site` ແມ່ນການໃສ່ຂໍ້ຄວາມທີ່ຄ້າຍຄືກັບ `<a rel=id href="#xxx" id="xxx"></a>` ໃນ `MarkDown` ເພື່ອສ້າງຈຸດສະມໍດ້ວຍຕົນເອງ.

`<a rel=id href="#xxx" id="xxx"></a>` , ທີ່ນີ້ `rel=id` ກຳນົດຮູບແບບໜ້າຂອງຈຸດສະມໍ, ກະລຸນາປ່ຽນແທນ `xxx` ດ້ວຍຕົວຫຍໍ້ພາສາອັງກິດຂອງສະມໍ.

Anchors ປົກກະຕິແລ້ວຈະຖືກເພີ່ມໃສ່ຫົວຂໍ້, ເຊັ່ນ:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ຜົນກະທົບການສະແດງແມ່ນດັ່ງຕໍ່ໄປນີ້:

<img src="//p.3ti.site/1721381136.avif" width="350">

## ຂຽນ `HTML` ໃນ `MarkDown`

`HTML` ສາມາດຖືກຝັງຢູ່ໃນ `pug` ລະຫັດ.

ເນື້ອຫາໃນ `<pre>` ອົງປະກອບຈະບໍ່ຖືກແປ.

ສົມທົບສອງຈຸດນີ້, ທ່ານສາມາດຂຽນ `HTML` ໃນ `MarkDown` ໄດ້ຢ່າງງ່າຍດາຍເພື່ອບັນລຸຜົນກະທົບການສະແດງຕ່າງໆ.

ຄລິກທີ່ : [ເພື່ອອ້າງ HTML i18n.site](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md)

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

ໃຫ້ສັງເກດວ່າ `<style>` ຍັງຖືກກໍານົດໄວ້ໃນ `<pre>` ຂ້າງເທິງ.