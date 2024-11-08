# .i18n/conf.yml

ໄຟລ໌ການຕັ້ງຄ່າສໍາລັບ `i18n.site` ແມ່ນ `.i18n/conf.yml` ແລະເນື້ອຫາມີດັ່ງນີ້ :

```yaml
i18n:
  fromTo:
    en:
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Blog
addon:
  - i18n.addon/toc
```

ໃນບັນດາພວກເຂົາ, `upload` ຫາ `ext:` ລາຍການການຕັ້ງຄ່າຫມາຍຄວາມວ່າພຽງແຕ່ `.md` ຈະຖືກອັບໂຫລດເມື່ອເຜີຍແຜ່.

## ທາງເທີງ navigation nav

`nav:` ທາງເລືອກການຕັ້ງຄ່າ, ທີ່ສອດຄ້ອງກັນກັບເມນູນໍາທາງຢູ່ດ້ານເທິງຂອງຫນ້າທໍາອິດ.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

ໃນບັນດາພວກເຂົາ, `i18n: home` ເທົ່າກັບ `home: Home` ໃນ `en/i18n.yml` (ບ່ອນທີ່ `en` ເປັນພາສາຕົ້ນສະບັບຂອງການແປພາສາໂຄງການ).

`en/i18n.yml` ເນື້ອໃນແມ່ນຂໍ້ຄວາມທີ່ສະແດງຢູ່ໃນເມນູນໍາທາງ, ເຊິ່ງຈະຖືກແປຕາມ `fromTo` ໃນການຕັ້ງຄ່າ, ຕົວຢ່າງ, ແປເປັນ `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

ຫຼັງຈາກການແປພາສາສໍາເລັດສົມບູນ, ທ່ານສາມາດປັບປຸງແກ້ໄຂຄ່າຂອງການແປພາສາ `yml` , ແຕ່ບໍ່ໄດ້ເພີ່ມຫຼືລຶບກະແຈຂອງການແປພາສາ `yml` .

### 0 ແມ່ແບບເອກະສານ `use: Toc` ກັບໂຄງຮ່າງ

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` ຫມາຍຄວາມວ່າການສະແດງໂດຍໃຊ້ `Toc` ແມ່ແບບ, ເຊິ່ງກໍາລັງສະແດງ `Markdown` ແມ່ແບບດຽວ.

`TOC` ແມ່ນຕົວຫຍໍ້ຂອງ `Table of Contents` ເມື່ອແມ່ແບບນີ້ຖືກສະແດງ, ໂຄງຮ່າງຂອງໄຟລ໌ `Markdown` ນີ້ຈະຖືກສະແດງຢູ່ໃນແຖບດ້ານຂ້າງ.

`url:` ເປັນຕົວແທນຂອງເສັ້ນທາງໄຟລ໌ຂອງ `Markdown` ( `/` ກົງກັບລະບົບຮາກ `/README.md` , ຊື່ໄຟລ໌ນີ້ຕ້ອງການຄໍານໍາຫນ້າຂອງຕົວພິມໃຫຍ່ແລະຕົວພິມນ້ອຍ).

### 0 ແມ່ແບບເອກະສານ `use: Md` ໂດຍບໍ່ມີໂຄງຮ່າງ

ແມ່ແບບ `Md` ແລະແມ່ແບບ `Toc` ແມ່ນຄືກັນ ແລະທັງສອງຖືກໃຊ້ເພື່ອສະແດງໄຟລ໌ `Markdown` ອັນດຽວ. ແຕ່ແມ່ແບບ `Md` ບໍ່ສະແດງໂຄງຮ່າງໃນແຖບດ້ານຂ້າງ.

ທ່ານສາມາດດັດແປງ `use: Toc` ໃນການຕັ້ງຄ່າຂ້າງເທິງເປັນ `use: Md` , ດໍາເນີນການ `i18n.site` ໃນ `md` ໄດເລກະທໍລີອີກເທື່ອຫນຶ່ງ, ແລະຫຼັງຈາກນັ້ນໄປຢ້ຽມຢາມ URL ຕົວຢ່າງການພັດທະນາເພື່ອສັງເກດການປ່ຽນແປງໃນຫນ້າທໍາອິດ.

### `use: Blog` Blog Templates

ແມ່ແບບຂອງ blog ສະແດງລາຍການບົດຄວາມ (ຫົວຂໍ້ແລະບົດຄັດຫຍໍ້) ຕາມລໍາດັບເວລາພິມ.

[→ ຄລິກທີ່ນີ້ເພື່ອຮຽນຮູ້ກ່ຽວກັບການຕັ້ງຄ່າສະເພາະ](/i18n.site/conf/blog)

### `use: Doc` ແມ່ແບບເອກະສານຫຼາຍໄຟລ໌

ໃນໄຟລ໌ການຕັ້ງຄ່າ:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

ຊີ້ໃຫ້ເຫັນການນໍາໃຊ້ `Doc` ສໍາລັບການສະແດງແມ່ແບບ.

`Doc` ແມ່ແບບສະຫນັບສະຫນູນການລວມຕົວຫຼາຍ `MarkDown` ເພື່ອສ້າງໂຄງຮ່າງເອກະສານສໍາລັບໂຄງການດຽວຫຼືຫຼາຍໂຄງການ.

#### ຫຼາຍໂຄງການແລະຫຼາຍໄຟລ໌

ການຕັ້ງຄ່າຂອງ `.i18n/conf.yml` ໃນ `i18n:doc` ແມ່ນຮູບແບບການສະແດງໄຟລ໌ຫຼາຍໂຄງການ.

ທີ່ນີ້, `menu: NB demo1,demo2` , ຫມາຍເຖິງການໃຊ້ `NB` ແມ່ແບບເພື່ອສະແດງເມນູເລື່ອນລົງ.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , ເຊິ່ງເປັນຕົວຫຍໍ້ຂອງ `Name Breif` , ຫມາຍຄວາມວ່າເມນູເລື່ອນລົງສາມາດສະແດງຊື່ແລະຄໍາຂວັນຂອງໂຄງການ.

`NB` ແມ່ນປະຕິບັດຕາມໂດຍພາລາມິເຕີ `demo1,demo2` ທີ່ຜ່ານໄປຫາມັນ.

`,` `demo1,demo2` : ** **

ໄຟລ໌ດັດຊະນີໄດເລກະທໍລີທີ່ສອດຄ້ອງກັນສໍາລັບພາລາມິເຕີຂ້າງເທິງນີ້ແມ່ນ:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### ໂຄງການດຽວຫຼາຍໄຟລ໌

ຖ້າທ່ານມີພຽງແຕ່ໂຄງການຫນຶ່ງ, ທ່ານສາມາດ configure ມັນດັ່ງຕໍ່ໄປນີ້.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> ໂຄງການດຽວທີ່ມີຫຼາຍໄຟລ໌ບໍ່ສະຫນັບສະຫນູນການຕັ້ງຄ່າ `url` ເປັນເສັ້ນທາງຮາກ `/`
> nav:__ __conf.yml `nav:`
> ການອອກແບບນີ້ແມ່ນເພື່ອຈໍາແນກເອກະສານໂຄງການ, ບລັອກແລະເນື້ອຫາອື່ນໆທີ່ດີຂຶ້ນໂດຍຜ່ານໄດເລກະທໍລີ.
> ແນະນໍາໃຫ້ໃຊ້ໄຟລ໌ດຽວແລະຫນ້າດຽວເປັນຫນ້າທໍາອິດ.

> [!TIP]
> ຖ້າ `url` ບໍ່ໄດ້ຖືກຂຽນ, `url` ຄ່າເລີ່ມຕົ້ນເປັນຄ່າຂອງ `i18n` ກົດລະບຽບນີ້ຍັງມີຜົນສໍາລັບແມ່ແບບອື່ນໆ.

#### ດັດຊະນີຕາຕະລາງເນື້ອໃນ TOC

ຖ້າ template `use: Doc` ຖືກເປີດໃຊ້ໃນການຕັ້ງຄ່າ, ກະລຸນາເປີດໃຊ້ plug-in `i18n.addon/toc` in `.i18n/conf.yml` ການຕັ້ງຄ່າແມ່ນດັ່ງຕໍ່ໄປນີ້ :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` ອັດຕະໂນມັດຈະຕິດຕັ້ງແລະດໍາເນີນການ plug-in ນີ້, ອ່ານ `TOC` ໄຟລ໌ດັດສະນີໄດເລກະທໍລີ, ແລະສ້າງ `json` ໂຄງຮ່າງໄດເລກະທໍລີ.

ຖ້າມັນເປັນໂຄງການດຽວທີ່ມີຫຼາຍໄຟລ໌, ໄດເລກະທໍລີຮາກ `TOC` ແມ່ນໄດເລກະທໍລີທີ່ສອດຄ້ອງກັບ `url:` ໃນໄດເລກະທໍລີພາສາຕົ້ນສະບັບ, ຕົວຢ່າງ, ຖ້າພາສາຕົ້ນສະບັບເປັນພາສາຈີນ: ໄຟລ໌ທີ່ກົງກັນກັບ `url: flashduty` ແມ່ນ `zh/flashduty/TOC` .

ຖ້າມັນເປັນຫຼາຍໂຄງການແລະຫຼາຍໄຟລ໌, ບໍ່ຈໍາເປັນຕ້ອງ configure `url:` ໄດເລກະທໍລີຮາກຂອງ `TOC` ແມ່ນໄດເລກະທໍລີທີ່ສອດຄ້ອງກັບຄ່າຂອງ `i18n` .

##### ຄໍາອະທິບາຍເນື້ອໃນລະອຽດ

`en/blog/TOC` ເນື້ອໃນດັ່ງຕໍ່ໄປນີ້ :

```
README.md

news/README.md
  news/begin.md
```

##### ໃຊ້ການຫຍໍ້ໜ້າເພື່ອຊີ້ບອກລະດັບ

`README.md` ໃນແຖວທໍາອິດຂອງ `en/blog/TOC` ຂ້າງເທິງນີ້ເທົ່າກັບ `i18n.site` ໃນຮູບຂ້າງລຸ່ມນີ້, ເຊິ່ງເປັນຊື່ໂຄງການ.

ສອງແຖວຕໍ່ໄປແມ່ນດັ່ງທີ່ສະແດງຢູ່ໃນຫນ້າຈໍຂ້າງລຸ່ມນີ້.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` ເທົ່າກັບ `News` ,
`news/begin.md` ເທົ່າກັບ `Our Product is Online !`

`TOC` ໄຟລ໌ຖືກຫຍໍ້ໜ້າເພື່ອຊີ້ບອກຄວາມສຳພັນແບບລຳດັບຂອງໂຄງຮ່າງ, ຮອງຮັບການຫຍໍ້ໜ້າຫຼາຍລະດັບ, ແລະຄຳເຫັນແຖວເລີ່ມຕົ້ນດ້ວຍ `# ` .

##### ລະດັບພໍ່ແມ່ພຽງແຕ່ຂຽນຫົວຂໍ້, ບໍ່ແມ່ນເນື້ອໃນ.

ເມື່ອມີການຫຍໍ້ໜ້າຫຼາຍລະດັບ, ລະດັບພໍ່ແມ່ພຽງແຕ່ຂຽນຫົວຂໍ້ ແລະບໍ່ແມ່ນເນື້ອຫາ. ຖ້າບໍ່ດັ່ງນັ້ນ, typography ຈະ messed.

##### ໂຄງການ README.md

ເນື້ອໃນສາມາດຂຽນໄດ້ໃນລາຍການ `README.md` ເຊັ່ນ: `en/demo2/README.md` .

ຈື່ໄວ້ວ່າເນື້ອໃນຂອງໄຟລ໌ນີ້ບໍ່ໄດ້ສະແດງຕາຕະລາງເນື້ອໃນ, ດັ່ງນັ້ນ, ແນະນໍາໃຫ້ຈໍາກັດຄວາມຍາວແລະຂຽນບົດແນະນໍາສັ້ນ.

###### ຄຳຂວັນຂອງໂຄງການ

ທ່ານສາມາດເບິ່ງວ່າ `Deme Two` ມີ tagline ໂຄງການ `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

ອັນນີ້ກົງກັບແຖວທຳອິດຂອງ `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

ເນື້ອໃນຫຼັງຈາກຈໍ້າສອງເມັດທໍາອິດ `:` ຂອງຫົວຂໍ້ລະດັບທໍາອິດຂອງໂຄງການ `README.md` ຈະຖືກຖືວ່າເປັນຄໍາຂວັນຂອງໂຄງການ.

ຜູ້ໃຊ້ຈາກປະເທດຈີນ, ຍີ່ປຸ່ນແລະເກົາຫຼີ, ກະລຸນາສັງເກດວ່າທ່ານຄວນໃຊ້ຈໍ້າສອງເມັດເຄິ່ງຄວາມກວ້າງ `:` ແທນທີ່ຈະເປັນຈໍ້າສອງເມັດເຕັມຄວາມກວ້າງ.

##### ວິທີການຍ້າຍ TOC ຈໍານວນຫລາຍ?

`TOC` ໄຟລ໌ຈໍາເປັນຕ້ອງຖືກຈັດໃສ່ໃນໄດເລກະທໍລີຂອງພາສາຕົ້ນສະບັບ.

ຕົວຢ່າງ, ຖ້າພາສາຕົ້ນສະບັບເປັນພາສາຈີນ, ຫຼັງຈາກນັ້ນ `TOC` ຂ້າງເທິງແມ່ນ `zh/blog/TOC` .

ຖ້າພາສາຕົ້ນສະບັບຖືກດັດແກ້, ທ່ານຈໍາເປັນຕ້ອງຍ້າຍໄຟລ໌ `TOC` ຂອງພາສາທີ່ແນ່ນອນໃນໂຄງການໄປຫາພາສາອື່ນ.

ທ່ານສາມາດອ້າງອີງເຖິງຄໍາສັ່ງຕໍ່ໄປນີ້:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

ກະລຸນາແກ້ໄຂ `en/` ແລະ `zh/` ໃນຄໍາສັ່ງຂ້າງເທິງໃສ່ລະຫັດພາສາຂອງທ່ານ.

### ການໂຫຼດເລີ່ມຕົ້ນໂດຍບໍ່ມີເສັ້ນທາງການຕັ້ງຄ່າ

ສໍາລັບເສັ້ນທາງສະເພາະໃດຫນຶ່ງທີ່ກໍາລັງເຂົ້າເຖິງ, ຖ້າຄໍານໍາຫນ້າເສັ້ນທາງບໍ່ໄດ້ຖືກຕັ້ງຄ່າໃນ `nav:` , `MarkDown` ໄຟລ໌ທີ່ສອດຄ້ອງກັນກັບເສັ້ນທາງຈະຖືກໂຫລດໂດຍຄ່າເລີ່ມຕົ້ນແລະສະແດງໂດຍໃຊ້ `Md` ແມ່ແບບ.

ຕົວຢ່າງ, ຖ້າ `/test` ຖືກເຂົ້າເຖິງແລະ `nav:` ຖືກຕັ້ງຄ່າໂດຍບໍ່ມີຄໍານໍາຫນ້າຂອງເສັ້ນທາງນີ້, ແລະພາສາທີ່ຄົ້ນຫາໃນປະຈຸບັນແມ່ນພາສາອັງກິດ (ລະຫັດ `en` ), `/en/test.md` ຈະຖືກໂຫລດໂດຍຄ່າເລີ່ມຕົ້ນແລະສະແດງໂດຍໃຊ້ແມ່ແບບ `Md` .

ຖ້າ `/en/test.md` ໄຟລ໌ນີ້ບໍ່ມີ, ເລີ່ມຕົ້ນ `404` ຫນ້າຈະຖືກສະແດງ.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">