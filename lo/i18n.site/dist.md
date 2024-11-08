# ການນໍາໃຊ້ແລະອອນໄລນ໌

`i18n.site` ຮັບຮອງເອົາສະຖາປັດຕະຍະກໍາ [ຄໍາຮ້ອງສະຫມັກຫນ້າດຽວ](https://developer.mozilla.org/docs/Glossary/SPA) , ແລະຫນ້າເຂົ້າເວັບໄຊທ໌ແລະເນື້ອຫາເວັບໄຊທ໌ໄດ້ຖືກນໍາໄປໃຊ້ເປັນເອກະລາດ.

ຫຼັງຈາກແລ່ນການແປຂ້າງເທິງ, ໄດເລກະທໍລີ `htm` ແລະ `v` ຈະຖືກສ້າງພາຍໃຕ້ `md/out/dev` ໄດເລກະທໍລີ.

ທີ່ນີ້, `dev` ຫມາຍຄວາມວ່າມັນຖືກສ້າງຂຶ້ນໂດຍອີງໃສ່ `.i18n/htm/dev.yml` ໄຟລ໌ການຕັ້ງຄ່າ.

`dev` ໄດເລກະທໍລີ :

`htm` ໄດເລກະທໍລີແມ່ນຫນ້າເຂົ້າເວັບໄຊທ໌.

`v` ໄດເລກະທໍລີມີເນື້ອຫາເວັບໄຊທ໌ທີ່ມີຕົວເລກຮຸ່ນ.

ການເບິ່ງຕົວຢ່າງໃນທ້ອງຖິ່ນບໍ່ສົນໃຈກັບຕົວເລກເວີຊັນແລະຈະຄັດລອກໄຟລ໌ທັງຫມົດໄປທີ່ `out/dev/v/0.1.0` ໄດເລກະທໍລີ.

ສໍາລັບການເປີດຕົວຢ່າງເປັນທາງການ, ໄຟລ໌ທີ່ປ່ຽນແປງຈະຖືກຄັດລອກໄປທີ່ໄດເລກະທໍລີຕົວເລກຮຸ່ນໃຫມ່.

## ລະບຸໄຟລ໌ການຕັ້ງຄ່າດ້ວຍ `-c`

ໄຟລ໌ການຕັ້ງຄ່າທີ່ແຕກຕ່າງກັນຈະສ້າງໄດເລກະທໍລີທີ່ສອດຄ້ອງກັນຢູ່ໃນ `out` ໄດເລກະທໍລີ.

ຕົວຢ່າງ, `.i18n/htm/main.yml` ຈະສ້າງ `out/main` directory.

`dev.yml` ແລະ `main.yml` ແມ່ນການຕັ້ງຄ່າເລີ່ມຕົ້ນ.

`dev` ແມ່ນຕົວຫຍໍ້ຂອງ `development` , ຊີ້ບອກສະພາບແວດລ້ອມການພັດທະນາ, ໃຊ້ສໍາລັບການເບິ່ງຕົວຢ່າງທ້ອງຖິ່ນ, ແລະຍັງເປັນໄຟລ໌ການຕັ້ງຄ່າເລີ່ມຕົ້ນ.
`ol` ແມ່ນຕົວຫຍໍ້ຂອງ `online` , ຊີ້ໃຫ້ເຫັນສະພາບແວດລ້ອມອອນໄລນ໌, ເຊິ່ງຖືກນໍາໃຊ້ສໍາລັບການເປີດຕົວຢ່າງເປັນທາງການ, ມັນຍັງເປັນໄຟລ໌ການຕັ້ງຄ່າເລີ່ມຕົ້ນໃນເວລາທີ່ໃຊ້ຕົວກໍານົດການເສັ້ນຄໍາສັ່ງ `-n` ຫາ `npm` .

ນອກນັ້ນທ່ານຍັງສາມາດສ້າງໄຟລ໌ການຕັ້ງຄ່າອື່ນໃຊ້ `--htm_conf` ໃນເສັ້ນຄໍາສັ່ງເພື່ອລະບຸຊື່ໄຟລ໌ການຕັ້ງຄ່າທີ່ຈະໃຊ້:

ຕົວຢ່າງ:
```
i18n.site --htm_conf dist --save
```

ທີ່ນີ້ `--save` ເປັນຕົວແທນຂອງຕົວເລກສະບັບປັບປຸງ.

## <a rel=id href="#npm" id="npm"></a> ເຜີຍແຜ່ເນື້ອຫາໃສ່ npmjs.com

[ການ](/i18n.site/feature#ha) ເຜີຍແຜ່ເນື້ອຫາເປັນ [npmjs.com](//npmjs.com)

### npm ເຂົ້າສູ່ລະບົບ & ປະກາດ

ຕິດຕັ້ງ `nodejs` , ເຂົ້າສູ່ລະບົບດ້ວຍ `npm login` .

ແກ້ໄຂ `md/.i18n/htm/main.yml` ແລະປ່ຽນຄ່າ [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` [npmjs.com](//npmjs.com) ຊື່ແພັກເກັດ `npm` ຂອງເຈົ້າເອງ.

ຫຼັງຈາກນັ້ນ, ແກ້ໄຂ `md/.i18n/htm/main.package.json`

ແລ່ນ `i18n.site --npm` ຫຼື `i18n.site -n` ໃນໄດເຣັກທໍຣີ `md` ເພື່ອແປ ແລະເຜີຍແຜ່.

ຖ້າທ່ານໃຊ້ສະພາບແວດລ້ອມການເຊື່ອມໂຍງຢ່າງຕໍ່ເນື່ອງເພື່ອເຜີຍແຜ່, ບໍ່ຈໍາເປັນຕ້ອງຕິດຕັ້ງ `nodejs` ພຽງແຕ່ຄັດລອກການອະນຸຍາດທີ່ເຂົ້າສູ່ລະບົບແລະເຜີຍແຜ່ `~/.npmrc` ກັບສະພາບແວດລ້ອມ.

ຖ້າຫາກວ່າທ່ານປັບປຸງແກ້ໄຂຊື່ຊຸດ `v:` ໃນ `main.yml` , ກະລຸນາ **ແນ່ໃຈວ່າການລົບ `.i18n/v/main` ຄັ້ງທໍາອິດ** ແລະຫຼັງຈາກນັ້ນເຜີຍແຜ່ມັນ.

#### ເຊີບເວີພຣັອກຊີຕີພິມໂດຍ npm

ຖ້າຜູ້ໃຊ້ໃນປະເທດຈີນແຜ່ນດິນໃຫຍ່ພົບບັນຫາເຄືອຂ່າຍແລະບໍ່ສາມາດເຜີຍແຜ່ `npm` ແພັກເກັດ, ພວກເຂົາສາມາດຕັ້ງຄ່າຕົວແປສະພາບແວດລ້ອມ `https_proxy` ເພື່ອກໍາຫນົດຄ່າພຣັອກຊີເຊີບເວີ.

ສົມມຸດວ່າພອດເຊີບເວີພຣັອກຊີຂອງທ່ານແມ່ນ `7890` , ທ່ານສາມາດຂຽນ:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## ເນື້ອຫາທີ່ເປັນເຈົ້າພາບຂອງຕົນເອງ

ຖ້າທ່ານຕ້ອງການໂຮດເນື້ອຫາດ້ວຍຕົນເອງ, ທໍາອິດແກ້ໄຂ `md/.i18n/htm/main.yml` ແລະປ່ຽນ `v: //unpkg.com/i18n.site` ກັບຄໍານໍາຫນ້າ URL ຂອງທ່ານ, ເຊັ່ນ: `v: //i18n-v.xxx.com` .

ໃສ່ `md` directory ແລະດໍາເນີນການ

```
i18n.site --htm_conf ol --save
```

ຫຼືຕົວຫຍໍ້

```
i18n.site -c ol -s
```

ຫຼັງຈາກນັ້ນ, ຕັ້ງຄ່າເນື້ອຫາໃນ `md/out/main/v` ໄດເລກະທໍລີກັບເສັ້ນທາງ URL ຄໍານໍາຫນ້າທີ່ກໍານົດໄວ້ໃນ `v:` .

ສຸດທ້າຍ, **ກໍານົດເວລາ cache ຂອງເສັ້ນທາງທີ່ສິ້ນສຸດລົງດ້ວຍ `/.v` ຫາ `1s`** , ຖ້າບໍ່ດັ່ງນັ້ນ, ເນື້ອຫາທີ່ອອກໃຫມ່ບໍ່ສາມາດເຂົ້າເຖິງໄດ້ທັນທີ.

ເວລາແຄດສໍາລັບເສັ້ນທາງອື່ນສາມາດຖືກກໍານົດເປັນຫນຶ່ງປີຫຼືຫຼາຍກວ່ານັ້ນເພື່ອຫຼຸດຜ່ອນການຮ້ອງຂໍທີ່ບໍ່ຈໍາເປັນ.

## ໂຮດເນື້ອຫາໃຫ້ກັບ s3

ຕໍ່ກັບເນື້ອຫາຂອງຕົນເອງ, ນອກເຫນືອຈາກການ `CDN` ເຄື່ອງແມ່ຂ່າຍຂອງທ່ານເອງ, ທາງເລືອກອື່ນທີ່ໃຊ້ທົ່ວໄປແມ່ນການໃຊ້ `S3` + .

ທ່ານສາມາດນໍາໃຊ້ [rclone](https://rclone.org) ເພື່ອເຂົ້າສູ່ລະບົບກັບ `S3` ເຄື່ອງແມ່ຂ່າຍ, ຫຼັງຈາກນັ້ນເບິ່ງແລະປັບປຸງແກ້ໄຂ script ດັ່ງຕໍ່ໄປນີ້, ແລະພຽງແຕ່ສໍາເນົາການປ່ຽນແປງທີ່ເພີ່ມຂຶ້ນເປັນ `S3` ສໍາລັບການອອກແຕ່ລະຄົນ.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

ຈື່ໄວ້ວ່າຈະ configure `CDN` ເພື່ອໃຫ້ເວລາ cache ຂອງເສັ້ນທາງທີ່ລົງທ້າຍດ້ວຍ `/.v` ແມ່ນ `1s` , ຖ້າບໍ່ດັ່ງນັ້ນ, ເນື້ອຫາທີ່ອອກໃຫມ່ບໍ່ສາມາດເຂົ້າເຖິງໄດ້ທັນທີ.

## ເຜີຍແຜ່ເວັບໄຊທ໌

ເວັບໄຊທ໌ສາມາດໄດ້ຮັບການນໍາໃຊ້ໄດ້ທຸກບ່ອນ [github page](https://pages.github.com) ແລະ [cloudflare page](https://pages.cloudflare.com) ແມ່ນທາງເລືອກທີ່ດີ.

ເນື່ອງຈາກວ່າເວັບໄຊທ໌ໃຊ້ສະຖາປັດຕະຍະກໍາ [ຄໍາຮ້ອງສະຫມັກຫນ້າດຽວ](https://developer.mozilla.org/docs/Glossary/SPA) , ຈື່ຈໍາທີ່ຈະຂຽນຄືນເສັ້ນທາງ URL ທີ່ບໍ່ມີ `. ` ຫາ `index.html` .

ຫນ້າເຂົ້າເວັບໄຊທ໌ພຽງແຕ່ຕ້ອງຖືກນໍາໄປໃຊ້ຄັ້ງດຽວ, ແລະບໍ່ຈໍາເປັນຕ້ອງໃຊ້ຫນ້າເວັບໄຊທ໌ໃຫມ່ສໍາລັບການປັບປຸງເນື້ອຫາຕໍ່ໄປ.

### ນຳໃຊ້ໃນໜ້າ github

ທໍາອິດ [ຄລິກທີ່ນີ້ github ເພື່ອສ້າງອົງການຈັດຕັ້ງ](https://github.com/account/organizations/new?plan=free) `i18n-demo`

ຈາກນັ້ນສ້າງສາງ `i18n-demo.github.io` ພາຍໃຕ້ອົງກອນນີ້ (ກະລຸນາແທນທີ່ `i18n-demo` ດ້ວຍຊື່ອົງກອນທີ່ທ່ານສ້າງ):

![](https://p.3ti.site/1721098657.avif)

ໃນເວລາທີ່ການພິມເຜີຍແຜ່ເນື້ອໃນໃນບົດຄວາມທີ່ຜ່ານມາ, ກະລຸນາໃສ່ລະບົບນີ້ແລະດໍາເນີນການ `out/main/htm` :

```
ln -s index.html 404.html
```


ເນື່ອງຈາກວ່າ `github page` ບໍ່ສະຫນັບສະຫນູນການປ່ຽນເສັ້ນທາງ URL, `404.html` ຖືກນໍາໃຊ້ແທນ.

ຫຼັງຈາກນັ້ນ, ດໍາເນີນການຄໍາສັ່ງຕໍ່ໄປນີ້ຢູ່ໃນ `htm` ໄດເລກະທໍລີ (ຈື່ຈໍາທີ່ຈະທົດແທນ `i18n-demo/i18n-demo.github.io.git` ດ້ວຍທີ່ຢູ່ສາງຂອງເຈົ້າເອງ) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

ຫຼັງຈາກການຊຸກຍູ້ລະຫັດ, ລໍຖ້າການນໍາໃຊ້ `github page` ເພື່ອດໍາເນີນການຢ່າງສໍາເລັດຜົນ (ຕາມຮູບຂ້າງລຸ່ມນີ້) ກ່ອນທີ່ທ່ານຈະສາມາດເຂົ້າເຖິງມັນໄດ້.

<img src="//p.3ti.site/1721116586.avif" width="350px">

ສໍາລັບຫນ້າຕົວຢ່າງກະລຸນາເບິ່ງ:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### ນຳໃຊ້ໃນໜ້າ cloudflare

[cloudflare page](//pages.cloudflare.com) ເມື່ອປຽບທຽບກັບ `github page` , ມັນສະຫນອງການຂຽນຄືນໃຫມ່ແລະເປັນມິດກັບຈີນແຜ່ນດິນໃຫຍ່ແລະຖືກແນະນໍາໃຫ້ໃຊ້.

ການນຳໃຊ້ `cloudflare page` ປົກກະຕິແລ້ວແມ່ນອີງໃສ່ການນຳໃຊ້ `github page` ຂ້າງເທິງ.

ສ້າງໂຄງການແລະຜູກມັດສາງ `i18n-demo.github.io` ຂ້າງເທິງ.

ຂະບວນການແມ່ນສະແດງຢູ່ໃນຮູບຂ້າງລຸ່ມນີ້:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

ກະລຸນາຄລິກທີ່ `Add Account` ເພື່ອອະນຸຍາດໃຫ້ເຂົ້າເຖິງອົງກອນ `i18n-demo` .

ຖ້າທ່ານໄດ້ຜູກມັດສາງຂອງອົງການຈັດຕັ້ງອື່ນ, ທ່ານອາດຈະຕ້ອງກົດ `Add Account` ສອງຄັ້ງເພື່ອອະນຸຍາດສອງຄັ້ງກ່ອນທີ່ອົງການຈັດຕັ້ງໃຫມ່ຈະຖືກສະແດງ.

![](https://p.3ti.site/1721118306.avif)

ຕໍ່ໄປ, ເລືອກ warehouse `i18n-demo.github.io` , ຈາກນັ້ນຄລິກ `Begin setup` , ແລະໃຊ້ຄ່າເລີ່ມຕົ້ນສໍາລັບຂັ້ນຕອນຕໍ່ໄປ.

![](https://p.3ti.site/1721118490.avif)

ຫຼັງຈາກການຜູກມັດຄັ້ງທໍາອິດ, ທ່ານຈໍາເປັນຕ້ອງລໍຖ້າສອງສາມນາທີກ່ອນທີ່ທ່ານຈະສາມາດເຂົ້າເຖິງມັນໄດ້.

ຫຼັງຈາກການນໍາໃຊ້, ທ່ານສາມາດຜູກມັດຊື່ໂດເມນທີ່ກໍານົດເອງ.

![](https://p.3ti.site/1721119459.avif)

ຫຼັງຈາກການຜູກມັດຊື່ໂດເມນທີ່ກໍານົດເອງ, ກະລຸນາໄປທີ່ຊື່ໂດເມນເພື່ອກໍານົດເສັ້ນທາງການຂຽນຄືນໃຫມ່ຂອງຄໍາຮ້ອງສະຫມັກຫນ້າດຽວ, ດັ່ງທີ່ສະແດງໃຫ້ເຫັນຂ້າງລຸ່ມນີ້:

![](https://p.3ti.site/1721119320.avif)

ກົດລະບຽບໃນຮູບຂ້າງເທິງນີ້ແມ່ນດັ່ງຕໍ່ໄປນີ້: ກະລຸນາທົດແທນ `i18n.site` ໃນແຖວທໍາອິດຂ້າງລຸ່ມນີ້ທີ່ມີຊື່ໂດເມນທີ່ທ່ານຜູກມັດ.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

ນອກຈາກນັ້ນ, ກະລຸນາຕັ້ງຄ່າກົດລະບຽບ cache, ດັ່ງທີ່ສະແດງຂ້າງລຸ່ມນີ້, ແລະກໍານົດໄລຍະເວລາ cache ເປັນຫນຶ່ງເດືອນ.

![](https://p.3ti.site/1721125111.avif)

ກະລຸນາປ່ຽນຊື່ໂດເມນທີ່ກົງກັນໃນຂັ້ນຕອນທີສອງໃນຮູບຂ້າງເທິງໄປຫາຊື່ໂດເມນທີ່ທ່ານຜູກມັດ.

### ປັບການນຳໃຊ້ເວັບໄຊໃຫ້ດີທີ່ສຸດໃນຈີນແຜ່ນດິນໃຫຍ່

ຖ້າທ່ານຕ້ອງການທີ່ຈະໄດ້ຮັບການປະຕິບັດການເຂົ້າເຖິງທີ່ດີກວ່າໃນສະພາບແວດລ້ອມເຄືອຂ່າຍຂອງຈີນແຜ່ນດິນໃຫຍ່, ກະລຸນາ [ລົງທະບຽນຊື່ໂດເມນ](//beian.aliyun.com) ກ່ອນ.

ຫຼັງຈາກ `CDN` , ການນໍາໃຊ້ການເກັບຮັກສາວັດຖຸ `out/main/htm` ຜູ້ຂາຍຟັງໃນຈີນແຜ່ນດິນໃຫຍ່ +

ທ່ານສາມາດນໍາໃຊ້ການຄິດໄລ່ຂອບເພື່ອຂຽນຄືນໃຫມ່ເສັ້ນທາງເພື່ອປັບຕົວກັບຄໍາຮ້ອງສະຫມັກຫນ້າດຽວ, ສໍາລັບການຍົກຕົວຢ່າງ, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) ສາມາດໄດ້ຮັບການຕັ້ງຄ່າດັ່ງນີ້:

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // ສ່ວນຫົວການຕອບສະໜອງສາມາດຖືກຕັ້ງໃຫ້ດີບັ໊ກອອກໄດ້, ເຊັ່ນວ່າ out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

ເນື່ອງຈາກວ່າບັນທຶກ `MX` ແລະບັນທຶກ `CNAME` ບໍ່ສາມາດຢູ່ຮ່ວມກັນໄດ້, ຖ້າທ່ານຕ້ອງການທີ່ຈະໄດ້ຮັບອີເມວຊື່ໂດເມນໃນເວລາດຽວກັນ, ທ່ານຈໍາເປັນຕ້ອງຮ່ວມມືກັບ [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) ໃນລະດັບ `CNAME` ເຂົ້າໄປໃນບັນທຶກ `A` .

ນອກຈາກນັ້ນ, ເນື່ອງຈາກວ່າຄ່າໃຊ້ຈ່າຍໃນການຈະລາຈອນຕ່າງປະເທດຂອງຜູ້ຂາຍ cloud ໃນຈີນແຜ່ນດິນໃຫຍ່ແມ່ນຂ້ອນຂ້າງແພງ, ຖ້າທ່ານຕ້ອງການເພີ່ມປະສິດທິພາບຄ່າໃຊ້ຈ່າຍ, ທ່ານສາມາດນໍາໃຊ້ການແກ້ໄຂທາງພູມສາດຂອງ [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) [Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) traffic diversion── ເສັ້ນທາງການສັນຈອນໃນແຜ່ນດິນໃຫຍ່ຂອງຈີນ Baidu Cloud `CDN` , ການຈະລາຈອນສາກົນໄປ cloudflare .

![](https://p.3ti.site/1721119788.avif)

ການແກ້ໄຂການເພີ່ມປະສິດທິພາບຂອງການນໍາໃຊ້ເຫຼົ່ານີ້ແມ່ນສັບສົນຫຼາຍແລະຈະຖືກນໍາສະເຫນີໃນບົດແຍກຕ່າງຫາກໃນອະນາຄົດ.

### ການປ່ຽນເສັ້ນທາງຊື່ໂດເມນທົ່ວໄປ

ຖ້າທ່ານໃຊ້ `i18n.site` ເພື່ອສ້າງເວັບໄຊທ໌ເປັນເວັບໄຊທ໌ຕົ້ນຕໍຂອງທ່ານ, ປົກກະຕິແລ້ວທ່ານຕ້ອງການກໍານົດການປ່ຽນເສັ້ນທາງໂດເມນ, ນັ້ນແມ່ນ, ການປ່ຽນເສັ້ນທາງໄປຫາ `*.xxx.com` (ລວມທັງ `www.xxx.com` ) ຫາ `xxx.com` .

ຂໍ້ກໍານົດນີ້ສາມາດບັນລຸໄດ້ໂດຍການຊ່ວຍເຫຼືອຂອງ Alibaba Cloud `CDN` `EdgeScript` ( [ເອກະສານພາສາອັງກິດ](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [ເອກະສານຈີນ](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

`CNAME` `CDN` ໂດເມນ `*.xxx.com` [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list)

![](https://p.3ti.site/1721122000.avif)

ຕົວຢ່າງ, ການຕັ້ງຄ່າການປ່ຽນເສັ້ນທາງຊື່ໂດເມນຂອງ `*.i18n.site` ໃນຮູບຂ້າງເທິງແມ່ນດັ່ງຕໍ່ໄປນີ້:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### ນຳໃຊ້ກັບ nginx

ກະລຸນາເພີ່ມການຕັ້ງຄ່າທີ່ຄ້າຍຄືກັບຕໍ່ໄປ `/root/i18n/md/out/main/htm` ໃນ `server` ວັກຂອງ nginx `out/main/htm`

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## ອີງໃສ່ `github action` ການເຊື່ອມໂຍງຢ່າງຕໍ່ເນື່ອງ

ທ່ານສາມາດເບິ່ງດັ່ງຕໍ່ໄປນີ້ເພື່ອ configure `github action` ຂອງທ່ານ:

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

ດັ່ງທີ່ເຫັນໄດ້ໃນການຕັ້ງຄ່າ, ຂັ້ນຕອນການເຮັດວຽກນີ້ຈະຖືກກະຕຸ້ນເມື່ອຍູ້ໄປຫາສາຂາ `main` ແລະສາຂາ `dist` .

ຂັ້ນຕອນການເຮັດວຽກຈະໃຊ້ໄຟລ໌ການຕັ້ງຄ່າທີ່ສອດຄ້ອງກັບຊື່ສາຂາເພື່ອເຜີຍແຜ່ເອກະສານນີ້, `.i18n/htm/main.yml` ແລະ `.i18n/htm/dist.yml` ຈະຖືກໃຊ້ເປັນການຕັ້ງຄ່າການເຜີຍແຜ່ຕາມລໍາດັບ.

ພວກເຮົາແນະນໍາການປະຕິບັດທີ່ດີທີ່ສຸດຕໍ່ໄປນີ້ສໍາລັບຂະບວນການປ່ອຍເອກະສານ:

ເມື່ອການປ່ຽນແປງຖືກຊຸກດັນໃຫ້ສາຂາ `main` , ເອກະສານຈະຖືກກະຕຸ້ນໃຫ້ໄດ້ຮັບການສ້າງແລະນໍາໃຊ້ກັບສະຖານີສະແດງຕົວຢ່າງ (ສະຖານີຕົວຢ່າງແມ່ນມີຢູ່ [github page](//pages.github.com) ).

ຫຼັງຈາກຢືນຢັນວ່າເອກະສານຖືກຕ້ອງຢູ່ໃນເວັບໄຊທ໌ສະແດງຕົວຢ່າງ, ລະຫັດຈະຖືກລວມເຂົ້າກັບສາຂາ `dist` , ແລະການກໍ່ສ້າງແລະການນໍາໃຊ້ຢ່າງເປັນທາງການຈະໄປອອນໄລນ໌.

ແນ່ນອນ, ການປະຕິບັດຂະບວນການຂ້າງເທິງນີ້ຮຽກຮ້ອງໃຫ້ມີການຂຽນການຕັ້ງຄ່າເພີ່ມເຕີມ.

ທ່ານສາມາດອ້າງອີງເຖິງໂຄງການຕົວຈິງ [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` ແລະ `secrets.NPM_TOKEN` ໃນການຕັ້ງຄ່າຕ້ອງການໃຫ້ທ່ານປັບຄ່າຕົວແປລັບໃນຖານລະຫັດ.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` ແມ່ນ token ເຜີຍແຜ່ຂອງຊຸດ `npm` ໃນການຕັ້ງຄ່າເຂົ້າເບິ່ງ [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## ໂຄງສ້າງໄດເລກະທໍລີ

### `public`

ໄຟລ໌ຄົງທີ່ຂອງເວັບໄຊທ໌ເຊັ່ນ `favicon.ico` , `robots.txt` , ແລະອື່ນໆ.

ໄຟລ໌ໄອຄອນຢູ່ບ່ອນນີ້ສາມາດສ້າງໄດ້ດ້ວຍ [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

ພາຍໃຕ້ `.i18n` directory ແມ່ນໄຟລ໌ການຕັ້ງຄ່າ, cache ການແປພາສາ, ແລະອື່ນໆຂອງ `i18n.site` ເບິ່ງບົດຕໍ່ໄປ ["ການຕັ້ງຄ່າ"](/i18n.site/conf) ສໍາລັບລາຍລະອຽດ.

### `en`

ໄດເລກະທໍລີພາສາຕົ້ນສະບັບ, ທີ່ສອດຄ້ອງກັນກັບໄຟລ໌ການຕັ້ງຄ່າ `en` ຂອງ `fromTo` ໃນ `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

ກະລຸນາເບິ່ງການຕັ້ງຄ່າຂອງການແປພາສາ [i18](/i18/use)