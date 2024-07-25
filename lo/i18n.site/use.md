# ຕິດຕັ້ງ &

## ໂທເຄັນການຕັ້ງຄ່າ

`i18n.site` ເຄື່ອງມືການແປ `i18` ໄດ້ຖືກຝັງໄວ້, ກະລຸນາ [ຄລິກທີ່ນີ້ເພື່ອອ້າງອີງເຖິງເອກະສານ `i18` ເພື່ອຕັ້ງຄ່າ token ການເຂົ້າເຖິງ](/i18/use) .

## ຕິດຕັ້ງ

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## ໂຄງການສາທິດ

ເລີ່ມຕົ້ນດ້ວຍໂຄງການສາທິດ ແລະຮຽນຮູ້ວິທີໃຊ້ `i18n.site`

ພວກເຮົາທໍາອິດ clone the demo repository ແລະດໍາເນີນການຄໍາສັ່ງດັ່ງຕໍ່ໄປນີ້:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

ຜູ້​ໃຊ້​ໃນ​ຈີນ​ແຜ່ນ​ດິນ​ໃຫຍ່​ສາ​ມາດ​:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` ຊື່ໄດເລກະທໍລີຂອງໂຄລນຖານລະຫັດຕ້ອງເປັນ `md` ເພື່ອຄວາມສະດວກໃນການສະແດງຕົວຢ່າງຂອງທ້ອງຖິ່ນດ້ວຍ `docker` .

### ແປ

ທຳອິດ, ໃຫ້ໃສ່ໄດ `zh` `en` `i18n.site` `md`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

`git add . ` ຈາກແລ່ນ, ການແປ ແລະໄຟລ໌ cache ຈະຖືກສ້າງຂື້ນ `md`

### ຕົວຢ່າງທ້ອງຖິ່ນ

ຕິດຕັ້ງແລະເລີ່ມຕົ້ນ `docker` ( `MAC` ແນະນໍາໃຫ້ໃຊ້ [orbstack](https://orbstack.dev) ເປັນ runtime ຂອງ `docker` ).

ຈາກ​ນັ້ນ, ເຂົ້າ​ໄປ [https://127.0.0.1](https://127.0.0.1) `./up.sh` ​ບົບ `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### ໂພດເນື້ອໃນ

`i18n.site`[​](https://developer.mozilla.org/docs/Glossary/SPA)

ຫຼັງ​ຈາກ​ແລ່ນ​ການ​ແປ​ພາ​ສາ​ຂ້າງ​ເທິງ​ນີ້​, `htm` ແລະ `v` directory ຈະ​ຖືກ​ສ້າງ​ຕັ້ງ​ຂຶ້ນ​ໃນ​ລະ​ບົບ `md/out/dev`

ທີ່ນີ້, `dev` ຊີ້ໃຫ້ເຫັນວ່າມັນຖືກສ້າງຂຶ້ນໂດຍອີງໃສ່ໄຟລ໌ `.i18n/htm/dev.yml` .

`dev` ພາຍໃຕ້ເນື້ອໃນ :

`htm` ພາຍໃຕ້ໄດເລກະທໍລີແມ່ນຫນ້າເຂົ້າເວັບໄຊທ໌.

`v`

ການເບິ່ງຕົວຢ່າງໃນທ້ອງຖິ່ນຈະສຳເນົາໄຟລ໌ທັງໝົດໄປໃສ່ໄດເລກະທໍລີ `out/dev/v/0.1.0`

ສໍາລັບການເປີດຕົວຢ່າງເປັນທາງການ, ໄຟລ໌ທີ່ປ່ຽນແປງຈະຖືກຄັດລອກໄປທີ່ໄດເລກະທໍລີຕົວເລກຮຸ່ນໃຫມ່.

#### ໃຊ້ -c ເພື່ອລະບຸໄຟລ໌ການຕັ້ງຄ່າ

ໄຟລ໌ການຕັ້ງຄ່າທີ່ແຕກຕ່າງກັນຈະສ້າງໄດເລກະທໍລີທີ່ສອດຄ້ອງກັນພາຍໃຕ້ໄດເລກະທໍລີ `out`

ຕົວຢ່າງ, `.i18n/htm/ol.yml` ຈະສ້າງ `out/ol` directory.

`dev.yml` ແລະ `ol.yml` ແມ່ນການຕັ້ງຄ່າເລີ່ມຕົ້ນ.

`dev` ແມ່ນຕົວຫຍໍ້ຂອງ `development` , ເຊິ່ງເປັນຕົວແທນຂອງສະພາບແວດລ້ອມການພັດທະນາ, ຖືກນໍາໃຊ້ສໍາລັບການສະແດງຕົວຢ່າງທ້ອງຖິ່ນ, ແລະຍັງເປັນໄຟລ໌ການຕັ້ງຄ່າເລີ່ມຕົ້ນ.
`ol` ແມ່ນຕົວຫຍໍ້ຂອງ `online` , ເຊິ່ງເປັນຕົວແທນຂອງສະພາບແວດລ້ອມອອນໄລນ໌, ຖືກນໍາໃຊ້ສໍາລັບການເປີດຕົວຢ່າງເປັນທາງການ, ແລະຍັງເປັນໄຟລ໌ການຕັ້ງຄ່າເລີ່ມຕົ້ນໃນເວລາທີ່ເຜີຍແຜ່ໄປ `npm` ໃຊ້ພາລາມິເຕີເສັ້ນຄໍາສັ່ງ `-n` .

ນອກນັ້ນທ່ານຍັງສາມາດສ້າງໄຟລ໌ການຕັ້ງຄ່າອື່ນໃຊ້ `--htm_conf`

ຍົກ​ຕົວ​ຢ່າງ:
```
i18n.site --htm_conf yourConfig --save
```

ທີ່ນີ້ `--save`

#### <a rel=id href="#npm" id="npm"></a> ເຜີຍແຜ່ເນື້ອຫາໃສ່ npmjs.com

ການເຜີຍແຜ່ເນື້ອ [ຫາ](/i18n.site/feature#ha) ເປັນ [npmjs.com](//npmjs.com)

##### npm login &

ຕິດຕັ້ງ `nodejs` ໃຊ້ `npm login` ເພື່ອເຂົ້າສູ່ລະບົບ.

ແກ້ໄຂ `md/.i18n/htm/ol.yml` ປ່ຽນ `i18n.site` ໃນ `v: //unpkg.com/i18n.site` ເປັນຂອງຕົນເອງ `npm` ຊື່ຊຸດ.

ພຽງ​ແຕ່​ນໍາ​ໃຊ້​ຊື່​ຊຸດ unoccupied ສຸດ [npmjs.com](//npmjs.com)

ເມື່ອການ `i18n.site` ແຜ່ `/.v` ອີງ **`//unpkg.com/`** ແພັກ `v:` `npm`

ແລ່ນ `i18n.site --npm` ຫຼື `i18n.site -n` ໃນໄດເລກະທໍລີ `md`

ຖ້າທ່ານໃຊ້ສະພາບແວດ `~/.npmrc` ການເຊື່ອມໂຍງຢ່າງຕໍ່ເນື່ອງເພື່ອເຜີຍແຜ່, ບໍ່ຈໍາເປັນຕ້ອງຕິດຕັ້ງມັນ `nodejs`

ຖ້າທ່ານ **`.i18n/v/ol`** ແປງຊື່ແພັກເກັດໃນ `v:` ໃນ `ol.yml`

##### ເຊີບເວີພຣັອກຊີຕີພິມໂດຍ npm

ຖ້າຜູ້ໃຊ້ໃນປະເທດຈີນແຜ່ນດິນໃຫຍ່ພົບບັນຫາເຄືອຂ່າຍແລະບໍ່ສາມາດເຜີຍແຜ່ແພັກ `https_proxy` `npm`

ສົມມຸດວ່າພອດເຊີບເວີຂອງເຈົ້າແມ່ນ `7890` ເຈົ້າສາມາດຂຽນໄດ້ວ່າ:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### ເນື້ອຫາທີ່ເປັນເຈົ້າພາບຂອງຕົນເອງ

ຖ້າທ່ານຕ້ອງການໂຮດເນື້ອຫາດ້ວຍຕົນເອງ, ທໍາອິດ, ແກ້ໄຂ `md/.i18n/htm/ol.yml` ແລະປ່ຽນ `v: //unpkg.com/i18n.site` ກັບຄໍານໍາຫນ້າ URL ຂອງທ່ານ, ເຊັ່ນ `v: //i18n-v.xxx.com` .

ເຂົ້າ​ໄປ​ໃນ `md` ​ບົບ​ແລະ​ດໍາ​ເນີນ​ການ

```
i18n.site --htm_conf ol --save
```

ຫຼືຕົວຫຍໍ້

```
i18n.site -c ol -s
```

ຫຼັງຈາກນັ້ນ, ຕັ້ງຄ່າເນື້ອຫາໃນໄດເລກະທໍ `v:` `md/out/ol/v`

ສຸດທ້າຍ, **`1s` ນົດເວລາ cache ຂອງເສັ້ນທາງທີ່ສິ້ນສຸດໃນ `/.v`**

ເວລາແຄດສໍາລັບເສັ້ນທາງອື່ນສາມາດຖືກກໍານົດເປັນຫນຶ່ງປີຫຼືຫຼາຍກວ່ານັ້ນເພື່ອຫຼຸດຜ່ອນການຮ້ອງຂໍທີ່ບໍ່ຈໍາເປັນ.

##### ໂຮດເນື້ອຫາໃຫ້ກັບ s3

ເພື່ອ + ເຈົ້າພາບເນື້ອຫາຂອງຕົນເອງ, ນອກເຫນືອຈາກການໃຊ້ເຄື່ອງແມ່ຂ່າຍຂອງທ່ານເອງ, `CDN` ເລືອກອື່ນແມ່ນໃຊ້ `S3`

ທ່ານ​ສາ​ມາດ​ນໍາ​ໃຊ້ [rclone](https://rclone.org) ເຂົ້າ​ສູ່​ລະ​ບົບ `S3` ເຊີບ​ເວີ, ຫຼັງ​ຈາກ​ນັ້ນ​ເບິ່ງ​ແລະ​ປັບ​ປຸງ​ສະ​ຄິບ​ຂ້າງ​ລຸ່ມ​ນີ້​, ແລະ​ພຽງ​ແຕ່​ສໍາ​ເນົາ​ການ​ປ່ຽນ​ແປງ​ເພີ່ມ​ຂຶ້ນ​ເປັນ `S3` ທຸກ​ຄັ້ງ​ທີ່​ທ່ານ​ເຜີຍ​ແຜ່​.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

ຈືຂໍ້ມູນການ configure `CDN` ດັ່ງນັ້ນເວລາ cache ຂອງເສັ້ນທາງທີ່ລົງທ້າຍດ້ວຍ `/.v` ແມ່ນ `1s` , ຖ້າບໍ່ດັ່ງນັ້ນທ່ານຈະບໍ່ສາມາດເຂົ້າເຖິງເນື້ອຫາທີ່ອອກໃຫມ່ໄດ້ທັນທີ.

### ເຜີຍແຜ່ເວັບໄຊທ໌

ເວັບ​ໄຊ​ທ​໌​ສາ​ມາດ​ໄດ້​ຮັບ​ການ​ນໍາ​ໃຊ້​ໄດ້​ທຸກ​ບ່ອນ [github page](https://pages.github.com) ແລະ [cloudflare page](https://pages.cloudflare.com) ແມ່ນ​ທາງ​ເລືອກ​ທີ່​ດີ​.

ເນື່ອງຈາກວ່າເວັບໄຊທ໌ໄດ້ຮັບຮອງເອົາສະຖາປັດຕະຍະກໍາຂອງ [ຄໍາຮ້ອງສະຫມັກຫນ້າດຽວ](https://developer.mozilla.org/docs/Glossary/SPA) , ຈື່ຈໍາທີ່ຈະຂຽນຄືນເສັ້ນທາງ URL ທີ່ບໍ່ມີຢູ່ `index.html` `. `

ຫນ້າເຂົ້າເວັບໄຊທ໌ພຽງແຕ່ຕ້ອງຖືກນໍາໄປໃຊ້ຄັ້ງດຽວ, ແລະບໍ່ຈໍາເປັນຕ້ອງໃຊ້ຫນ້າເວັບໄຊທ໌ໃຫມ່ສໍາລັບການປັບປຸງເນື້ອຫາຕໍ່ໄປ.

#### ນຳໃຊ້ໃນໜ້າ github

ທໍາອິດ [ຄລິກທີ່ນີ້ github ເພື່ອສ້າງອົງ](https://github.com/account/organizations/new?plan=free) ການຈັດຕັ້ງ `i18n-demo`

ຫຼັງຈາກນັ້ນ, ສ້າງ `i18n-demo` ພາຍໃຕ້ອົງການຈັດຕັ້ງນີ້ `i18n-demo.github.io`

<img alt="" src="https://p.3ti.site/1721098657.avif">

ໃນ​ເວ​ລາ​ທີ່​ການ​ພິມ​ເຜີຍ​ແຜ່​ເນື້ອ​ໃນ​ໃນ​ບົດ​ຄວາມ​ທີ່​ຜ່ານ​ມາ​, ມັນ​ໄດ້​ຖືກ​ສ້າງ : `out/ol/htm`

```
ln -s index.html 404.html
```


ເນື່ອງຈາກ `404.html` `github page`

ຫຼັງຈາກນັ້ນ, ດໍາເນີນການຄໍາສັ່ງຕໍ່ໄປ `i18n-demo/i18n-demo.github.io.git` ຢູ່ໃນໄດ `htm` ກະທໍລີ :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

ຫຼັງ​ຈາກ​ການ​ຊຸກ​ຍູ້​ລະ​ຫັດ​, ລໍ​ຖ້າ​ສໍາ​ລັບ​ການ​ນໍາ​ໃຊ້​ຂອງ `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

ສໍາລັບຫນ້າຕົວຢ່າງກະລຸນາເບິ່ງ:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### ນຳໃຊ້ໃນໜ້າ cloudflare

[cloudflare page](//pages.cloudflare.com) ເມື່ອປຽບທຽບກັບ `github page`

`cloudflare page` ການນຳໃຊ້ແມ່ນປົກກະຕິແລ້ວແມ່ນອີງໃສ່ການນຳໃຊ້ `github page` ຂ້າງເທິງ.

ສ້າງໂຄງການແລະຜູກມັດສາງຂ້າງເທິງ `i18n-demo.github.io`

ຂະບວນການແມ່ນສະແດງຢູ່ໃນຮູບຂ້າງລຸ່ມນີ້:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

ກະລຸ `i18n-demo` ກົດ `Add Account`

ຖ້າເຈົ້າໄດ້ຜູກມັດສາງຂອງອົງກອນອື່ນ, ເຈົ້າອາດຈະຕ້ອງຄລິກ `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

ຕໍ່ໄປເລືອກ `i18n-demo.github.io` Warehouse, ຈາກນັ້ນຄລິກ `Begin setup` , ແລະໃຊ້ຄ່າເລີ່ມຕົ້ນສຳລັບຂັ້ນຕອນຕໍ່ໄປ.

<img alt="" src="https://p.3ti.site/1721118490.avif">

ຫຼັງຈາກການຜູກມັດຄັ້ງທໍາອິດ, ທ່ານຈໍາເປັນຕ້ອງລໍຖ້າສອງສາມນາທີກ່ອນທີ່ທ່ານຈະສາມາດເຂົ້າເຖິງມັນໄດ້.

ຫຼັງ​ຈາກ​ການ​ນໍາ​ໃຊ້​, ທ່ານ​ສາ​ມາດ​ຜູກ​ມັດ​ຊື່​ໂດ​ເມນ​ທີ່​ກໍາ​ນົດ​ເອງ​.

<img alt="" src="https://p.3ti.site/1721119459.avif">

ຫຼັງ​ຈາກ​ການ​ຜູກ​ມັດ​ຊື່​ໂດ​ເມນ​ທີ່​ກໍາ​ນົດ​ເອງ​, ກະ​ລຸ​ນາ​ໄປ​ທີ່​ຊື່​ໂດ​ເມນ​ເພື່ອ​ກໍາ​ນົດ​ເສັ້ນ​ທາງ​ການ​ຂຽນ​ຄືນ​ໃຫມ່​ຂອງ​ຄໍາ​ຮ້ອງ​ສະ​ຫມັກ​ຫນ້າ​ດຽວ​, ດັ່ງ​ທີ່​ສະ​ແດງ​ໃຫ້​ເຫັນ​ຂ້າງ​ລຸ່ມ​ນີ້​:

<img alt="" src="https://p.3ti.site/1721119320.avif">

ກົດ​ລະ​ບຽບ​ໃນ​ຮູບ​ຂ້າງ​ເທິງ​ນີ້​ແມ່ນ​ດັ່ງ​ຕໍ່​ໄປ​ນີ້​: ກະ​ລຸ​ນາ​ທົດ​ແທນ​ການ `i18n.site`

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

ນອກຈາກນັ້ນ, ກະລຸນາຕັ້ງຄ່າກົດລະບຽບ cache, ດັ່ງທີ່ສະແດງຂ້າງລຸ່ມນີ້, ແລະກໍານົດໄລຍະເວລາ cache ເປັນຫນຶ່ງເດືອນ.

<img alt="" src="https://p.3ti.site/1721125111.avif">

ກະລຸນາປ່ຽນຊື່ໂດເມນທີ່ກົງກັນໃນຂັ້ນຕອນທີສອງໃນຮູບຂ້າງເທິງໄປຫາຊື່ໂດເມນທີ່ທ່ານຜູກມັດ.

#### ປັບ​ການ​ນຳ​ໃຊ້​ເວັບ​ໄຊ​ໃຫ້​ດີ​ທີ່​ສຸດ​ໃນ​ຈີນ​ແຜ່ນດິນ​ໃຫຍ່

ຖ້າທ່ານຕ້ອງການທີ່ຈະໄດ້ຮັບການປະຕິບັດການເຂົ້າເຖິງທີ່ດີກວ່າໃນສະພາບແວດລ້ອມເຄືອຂ່າຍຂອງຈີນແຜ່ນດິນໃຫຍ່, ກະລຸນາ [ລົງທະບຽນຊື່ໂດເມນ](//beian.aliyun.com) ກ່ອນ.

ຫຼັງ​ຈາກ `out/ol/htm` ​, ການ​ນໍາ​ໃຊ້​ການ​ເກັບ​ຮັກ​ສາ​ວັດ​ຖຸ​ຂອງ​ຜູ້​ຂາຍ​ຟັງ​ໃນ `CDN` ​ແຜ່ນ​ດິນ​ໃຫຍ່ +

ທ່ານ​ສາ​ມາດ​ນໍາ​ໃຊ້​ການ​ຄິດ​ໄລ່​ຂອບ​ໃນ​ການ​ຂຽນ​ຄືນ​ໃຫມ່​ເສັ້ນ​ທາງ​ເພື່ອ​ປັບ​ເຂົ້າ​ກັບ​ຄໍາ​ຮ້ອງ​ສະ​ຫມັກ​ຫນ້າ​ດຽວ​, ເຊັ່ນ​: [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
}
r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})
})
```
<img alt="" src="https://p.3ti.site/1721121273.avif">

ເນື່ອງຈາກວ່າ `MX` ບັນທຶກແລະ `CNAME` ບັນທຶກບໍ່ສາມາດຢູ່ຮ່ວມກັນໄດ້, ຖ້າທ່ານຕ້ອງການຮັບອີເມວຊື່ໂດເມນໃນເວລາດຽວກັນ, ທ່ານຈໍາເປັນຕ້ອງຮ່ວມມືກັບ `CNAME` `A` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

ນອກຈາກນັ້ນ, ເນື່ອງຈາກວ່າຄ່າໃຊ້ຈ່າຍໃນການຈະລາຈອນຕ່າງປະເທດຂອງຜູ້ຂາຍ cloud ໃນຈີນແຜ່ນດິນໃຫຍ່ແມ່ນຂ້ອນຂ້າງແພງ, ຖ້າທ່ານຕ້ອງການເພີ່ມປະສິດທິພາບຄ່າໃຊ້ຈ່າຍ, ທ່ານສາມາດນໍາໃຊ້ການແກ້ໄຂທາງພູມ [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) [ຂອງ Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ການຫັນປ່ຽນການຈະລາຈອນ──ການຈະລາຈອນໃນແຜ່ນດິນໃຫຍ່ຈີນ Baidu Cloud `CDN` ການຈະລາຈອນລະຫວ່າງປະເທດໄປ cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

ການແກ້ໄຂການເພີ່ມປະສິດທິພາບຂອງການນໍາໃຊ້ເຫຼົ່ານີ້ແມ່ນສັບສົນຫຼາຍແລະຈະຖືກນໍາສະເຫນີໃນບົດແຍກຕ່າງຫາກໃນອະນາຄົດ.

#### ການປ່ຽນເສັ້ນທາງຊື່ໂດເມນທົ່ວໄປ

`xxx.com` `*.xxx.com` `www.xxx.com` `i18n.site`

ຂໍ້​ກໍາ​ນົດ​ນີ້​ສາ​ມາດ​ບັນ​ລຸ​ໄດ້​ໂດຍ​ການ​ຊ່ວຍ​ເຫຼືອ​ຂອງ Alibaba `CDN` `EdgeScript` ( [ເອກະສານພາສາອັງກິດ](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [ເອກະສານຈີນ](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

ເພີ່ມຊື່ໂດເມນໃນ [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ແລະຊີ້ `*.xxx.com` ໂດເມນໃຫ້ Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

ຕົວຢ່າງ, ການຕັ້ງຄ່າການປ່ຽນເສັ້ນທາງຊື່ໂດເມນຂອງ `*.i18n.site` ໃນຮູບຂ້າງເທິງແມ່ນດັ່ງຕໍ່ໄປນີ້:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### ນຳໃຊ້ກັບ nginx

ກະລຸ `/root/i18n/md/out/ol/htm` ເພີ່ມການຕັ້ງຄ່າທີ່ຄ້າຍ `out/ol/htm` ກັບຕໍ່ໄປນີ້ໃນ `server` nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### ໂຄງສ້າງໄດເລກະທໍລີ

#### ສາທາລະນະ

ໄຟລ໌ຄົງທີ່ຂອງເວັບໄຊທ໌ເຊັ່ນ `favicon.ico` `robots.txt` , ແລະອື່ນໆ.

ໄຟລ໌ໄອຄອນຢູ່ບ່ອນນີ້ສາມາດສ້າງໄດ້ດ້ວຍ [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` ພາຍໃຕ້ໄດເລກະທໍລີແມ່ນໄຟລ໌ການຕັ້ງຄ່າຂອງ `i18n.site` , ແຄດການແປພາສາ, ແລະອື່ນໆ. ເບິ່ງບົດຕໍ່ໄປ ["ການຕັ້ງຄ່າ"](/i18n.site/conf) ສໍາລັບລາຍລະອຽດ.

#### en

ໄດເລກະທໍລີພາສາຕົ້ນສະບັບ, ທີ່ສອດຄ້ອງກັນ `.i18n/conf.yml` `fromTo` `en` ໃນໄຟລ໌ການຕັ້ງຄ່າ

```yaml
i18n:
  fromTo:
    en: zh
```

ກະ​ລຸ​ນາ​ເບິ່ງ​ການ​ຕັ້ງ​ຄ່າ​ຂອງ​ການ​ແປ​ພາ​ສາ [i18](/i18/use)

