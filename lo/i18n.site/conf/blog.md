# ແມ່ແບບບລັອກ

`i18n/conf.yml` ອອກຈາກ `use: Blog` ຫມາຍເຖິງການໃຊ້ແມ່ແບບ blog ສໍາລັບການສະແດງຜົນ.

ໄຟລ໌ `markdown` ຂອງການຕອບ blog ຕ້ອງການກໍານົດຂໍ້ມູນ meta.

ຂໍ້ມູນເມຕາຕ້ອງຢູ່ຈຸດເລີ່ມຕົ້ນຂອງໄຟລ໌, ເລີ່ມຕົ້ນດ້ວຍ `---` ແລະລົງທ້າຍດ້ວຍ `---` ຮູບແບບຂອງຂໍ້ມູນການຕັ້ງຄ່າຢູ່ກາງແມ່ນ `YAML` .

ການຕັ້ງຄ່າຂອງໄຟລ໌ demo ເປັນດັ່ງຕໍ່ໄປນີ້:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` ຊີ້ໃຫ້ເຫັນບົດສະຫຼຸບເນື້ອຫາ, ເຊິ່ງຈະສະແດງຢູ່ໃນຫນ້າດັດສະນີຂອງ blog.

ດ້ວຍຄວາມຊ່ອຍເຫລືອຂອງ `YMAL` ' | ` syntax, ທ່ານສາມາດຂຽນບົດສະຫຼຸບຫຼາຍແຖວ.

ການຕັ້ງຄ່າຂອງຕົ້ນໄມ້ໄດເລກະທໍລີຢູ່ເບື້ອງຂວາຂອງ blog ຍັງເປັນ `TOC` ໄຟລ໌ (ເບິ່ງບົດທີ່ຜ່ານ `TOC` ).

ບົດຄວາມທີ່ບໍ່ມີຂໍ້ມູນ meta ຈະບໍ່ປາກົດຢູ່ໃນຫນ້າທໍາອິດຂອງ blog, ແຕ່ສາມາດປາກົດຢູ່ໃນຕົ້ນໄມ້ໄດເລກະທໍລີເບື້ອງຂວາ.

## ຂໍ້ມູນຜູ້ຂຽນ

ຂໍ້ມູນຜູ້ຂຽນສາມາດຂຽນໄວ້ໃນຂໍ້ມູນ meta ຂອງບົດຄວາມ, ເຊັ່ນ:

```yml
author: marlowe
```

ຫຼັງຈາກນັ້ນ, ແກ້ໄຂ `author.yml` ໃນໄດເລກະທໍລີພາສາຕົ້ນສະບັບແລະເພີ່ມຂໍ້ມູນຜູ້ຂຽນ, ເຊັ່ນ :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` ແລະ `title` ທັງຫມົດແມ່ນທາງເລືອກ. ຖ້າ `name` ບໍ່ໄດ້ຕັ້ງ, ຊື່ທີ່ສໍາຄັນ (ທີ່ນີ້ `marlowe` ) ຈະຖືກໃຊ້ເປັນ `name` .

ເບິ່ງໂຄງການສາທິດ [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ແລະ [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## ປັກໝຸດບົດຄວາມ

ຖ້າທ່ານຕ້ອງການປັກໝຸດບົດຄວາມຢູ່ເທິງສຸດ, ກະລຸນາແລ່ນ `i18n.site` ແລະແກ້ໄຂ `xxx.yml` ໄຟລ໌ຂ້າງລຸ່ມ `.i18n/data/blog` , ແລະປ່ຽນເວລາເປັນຕົວເລກລົບ (ຕົວເລກລົບຫຼາຍຕົວຈະຖືກຈັດຮຽງຈາກໃຫຍ່ຫານ້ອຍສຸດ).