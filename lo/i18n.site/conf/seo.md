# ການເພີ່ມປະສິດທິພາບຂອງເຄື່ອງຈັກຊອກຫາ (SEO)

## ຫຼັກການ

`i18n.site` ຮັບຮອງເອົາສະຖາປັດຕະຍະກໍາຫນ້າດຽວທີ່ບໍ່ໂຫຼດຫນ້າຈໍຄືນເພື່ອອໍານວຍຄວາມສະດວກໃນການຄົ້ນຫາດັດສະນີ, ຫນ້າສະຖິດແຍກຕ່າງຫາກແລະ `sitemap.xml` ຈະຖືກສ້າງຂື້ນສໍາລັບຕົວກວາດເວັບເພື່ອລວບລວມຂໍ້ມູນ.

ເມື່ອ `User-Agent` ຂອງຄໍາຮ້ອງຂໍການເຂົ້າເຖິງຖືກນໍາໃຊ້ໂດຍຕົວກວາດເວັບຂອງເຄື່ອງຈັກຊອກຫາ, ຄໍາຮ້ອງຂໍຈະຖືກໂອນໄປຫາຫນ້າ static ຜ່ານ `302` .

ໃນໜ້າສະຖິດ, ໃຊ້ `link` ເພື່ອຊີ້ບອກລິ້ງໄປຫາສະບັບພາສາຕ່າງໆຂອງໜ້ານີ້, ເຊັ່ນ :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## ການຕັ້ງຄ່າ nginx ທ້ອງຖິ່ນ

ເອົາໄຟລ໌ການຕັ້ງຄ່າ `.i18n/htm/main.yml` ໃນໂຄງການສາທິດເປັນຕົວຢ່າງ

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

ກະລຸນາແກ້ໄຂຄ່າຂອງ `host:` ຂ້າງເທິງໃຫ້ກັບຊື່ໂດເມນຂອງທ່ານ, ເຊັ່ນ: `xxx.com` .

ຫຼັງຈາກນັ້ນ, `i18n.site -n` , ຫນ້າຄົງທີ່ຈະຖືກສ້າງຂື້ນໃນ `out/main/htm` ໄດເລກະທໍລີ.

ແນ່ນອນ, ທ່ານຍັງສາມາດເປີດໃຊ້ໄຟລ໌ການຕັ້ງຄ່າອື່ນໆ, ເຊັ່ນ: ທໍາອິດອ້າງອີງເຖິງການຕັ້ງຄ່າຂອງ `main` ເພື່ອສ້າງ `.i18n/htm/dist.package.json` ແລະ `.i18n/htm/dist.yml` .

ຫຼັງຈາກນັ້ນ, ດໍາເນີນການ `i18n.site -n -c dist` ເພື່ອໃຫ້ຫນ້າຄົງທີ່ຈະຖືກສ້າງເປັນ `out/dist/htm` .

`nginx` ສາມາດຖືກກໍານົດໂດຍການອ້າງອີງເຖິງການຕັ້ງຄ່າຂ້າງລຸ່ມນີ້.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# ຢ່າ cache script worker server ດົນເກີນໄປ
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# ກໍານົດເວລາແຄດທີ່ຍາວກວ່າສໍາລັບຊັບພະຍາກອນຄົງທີ່ອື່ນໆ
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# ກຳນົດໄຟລ໌ສະຖິດໃດທີ່ຕົວກວາດເວັບໃຊ້ເປັນໜ້າຫຼັກ
location = / {
  # ຖ້າ $botLang ແມ່ນບໍ່ຫວ່າງ, ມັນຫມາຍເຖິງການເຂົ້າເຖິງຕົວກວາດເວັບແລະການປ່ຽນເສັ້ນທາງຕາມເສັ້ນທາງພາສາທີ່ກໍານົດໄວ້
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# ການຕັ້ງຄ່າຄໍາຮ້ອງສະຫມັກຫນ້າດຽວ
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## ຕັ້ງຄ່າການເກັບຮັກສາວັດຖຸສໍາລັບການອັບໂຫລດໄຟລ໌ຄົງທີ່

ໄຟລ໌ຄົງທີ່ສາມາດຖືກສ້າງຂື້ນຢູ່ໃນທ້ອງຖິ່ນ, ແຕ່ວິທີການທົ່ວໄປກວ່າແມ່ນການອັບໂຫລດພວກມັນໃສ່ບ່ອນເກັບມ້ຽນວັດຖຸ.

ປັບປຸງແກ້ໄຂ `out` configured ຂ້າງເທິງນີ້ເປັນ :

```
out:
  - s3
```

ຫຼັງຈາກນັ້ນ, ແກ້ໄຂ `~/.config/i18n.site.yml` ແລະເພີ່ມການຕັ້ງຄ່າຕໍ່ໄປນີ້ :

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

ໃນການຕັ້ງຄ່າ, ກະລຸນາປ່ຽນ `i18n.site` ເປັນຄ່າຂອງ `host:` ໃນ `.i18n/htm/main.yml` , ຮ້ານຄ້າວັດຖຸຫຼາຍອັນສາມາດຕັ້ງຄ່າໄດ້ພາຍໃຕ້ `s3` , ແລະຊ່ອງຂໍ້ມູນ `region` ແມ່ນທາງເລືອກ (ຫຼາຍບ່ອນເກັບວັດຖຸບໍ່ຈໍາເປັນຕ້ອງຕັ້ງຊ່ອງຂໍ້ມູນນີ້).

ຈາກນັ້ນແລ່ນ `i18n.site -n` ເພື່ອເຜີຍແຜ່ໂຄງການຄືນໃໝ່.

ຖ້າຫາກວ່າທ່ານໄດ້ແກ້ໄຂ `~/.config/i18n.site.yml` ແລະຕ້ອງການທີ່ຈະອັບໂຫຼດໃຫມ່, ກະລຸນາໃຊ້ຄໍາສັ່ງດັ່ງຕໍ່ໄປນີ້ໃນລະບົບຮາກຂອງໂຄງການເພື່ອລຶບຖານຄວາມຈໍາການອັບໂຫລດ :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## ການຕັ້ງຄ່າ cloudflare

ຊື່ໂດເມນເປັນເຈົ້າພາບ [cloudflare](//www.cloudflare.com)

### ກົດລະບຽບການແປງ

ເພີ່ມກົດລະບຽບການແປງດັ່ງທີ່ສະແດງຂ້າງລຸ່ມນີ້:

![](//p.3ti.site/1725436822.avif)

ລະຫັດກົດລະບຽບມີດັ່ງນີ້, ກະລຸນາແກ້ໄຂລະຫັດ "i18n.site" ກັບຊື່ໂດເມນຂອງທ່ານ:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### ກົດລະບຽບການເກັບຂໍ້ມູນ

ເພີ່ມກົດລະບຽບ cache ດັ່ງຕໍ່ໄປນີ້:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### ປ່ຽນເສັ້ນທາງ

ກໍານົດກົດລະບຽບການປ່ຽນເສັ້ນທາງດັ່ງຕໍ່ໄປນີ້, ກະລຸນາແກ້ໄຂລະຫັດ "i18n.site" ກັບຊື່ໂດເມນຂອງທ່ານ

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

`URL redirect` ເລືອກການປ່ຽນເສັ້ນທາງແບບເຄື່ອນໄຫວ, ກະລຸນາແກ້ໄຂ `/en` ໃນເສັ້ນທາງການປ່ຽນເສັ້ນທາງ `concat("/en",http.request.uri.path,".htm")` ເປັນພາສາເລີ່ມຕົ້ນທີ່ທ່ານຕ້ອງການໃຫ້ເຄື່ອງຈັກຊອກຫາລວມ.

## Baidu Intelligent Cloud Configuration

ຖ້າທ່ານຕ້ອງການໃຫ້ບໍລິການກັບຈີນແຜ່ນດິນໃຫຍ່, ທ່ານສາມາດນໍາໃຊ້ [Baidu Smart Cloud](//cloud.baidu.com) .

ຂໍ້ມູນຖືກອັບໂຫຼດໃສ່ Baidu Object Storage ແລະຜູກມັດກັບເຄືອຂ່າຍການແຈກຢາຍເນື້ອຫາຂອງ Baidu.

ຫຼັງຈາກນັ້ນ, ສ້າງ script ໃນ [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) ດັ່ງຕໍ່ໄປນີ້

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

ຄລິກທີ່ `Debug` , ຈາກນັ້ນຄລິກ ເຜີຍແຜ່ໄປຍັງເຄືອຂ່າຍທັງໝົດ.

![](//p.3ti.site/1725437754.avif)

## ການນໍາໃຊ້ຂັ້ນສູງ: ແຈກຢາຍການຈະລາຈອນໂດຍອີງໃສ່ການແກ້ໄຂພາກພື້ນ

ຖ້າທ່ານຕ້ອງການໃຫ້ບໍລິການໃນປະເທດຈີນແຜ່ນດິນໃຫຍ່ແລະຍັງຕ້ອງການ `cloudflare` ການຈະລາຈອນລະຫວ່າງປະເທດໂດຍບໍ່ເສຍຄ່າ, ທ່ານສາມາດນໍາໃຊ້ `DNS` ທີ່ມີຄວາມລະອຽດລະດັບພາກພື້ນ.

ຕົວຢ່າງ, [Huawei Cloud DNS](https://www.huaweicloud.com) ໃຫ້ການວິເຄາະພາກພື້ນໂດຍບໍ່ເສຍຄ່າ, ເຊິ່ງການຈະລາຈອນຂອງຈີນແຜ່ນດິນໃຫຍ່ສາມາດຜ່ານ Baidu Smart Cloud, ແລະການຈະລາຈອນສາກົນສາມາດຜ່ານ `cloudflare` .

ມີຂຸມຫຼາຍໃນການຕັ້ງຄ່າຂອງ `cloudflare` ນີ້ແມ່ນບາງຈຸດທີ່ຄວນສັງເກດ :

### ຊື່ໂດເມນແມ່ນໂຮດຢູ່ໃນ `DNS` ອື່ນໆ, ວິທີການໃຊ້ `cloudflare`

ທໍາອິດໃຫ້ຜູກມັດຊື່ໂດເມນທີ່ຕົນເອງມັກເປັນ `cloudflare` , ແລະຈາກນັ້ນໃຊ້ `SSL/TLS` → ຊື່ໂດເມນທີ່ກຳນົດເອງເພື່ອເຊື່ອມໂຍງຊື່ໂດເມນຕົ້ນຕໍກັບຊື່ໂດເມນນີ້.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` ບໍ່ສາມາດເຂົ້າເຖິງໄດ້ໂດຍຜ່ານຊື່ໂດເມນທີ່ກໍາຫນົດເອງ

ເນື່ອງຈາກວ່າການເກັບຮັກສາວັດຖຸທີ່ `cloudflare` ຂຶ້ນໃນ `R2` ບໍ່ສາມາດເຂົ້າເຖິງໄດ້ໂດຍຊື່ໂດເມນທີ່ກໍາຫນົດເອງ, ການເກັບຮັກສາວັດຖຸພາກສ່ວນທີສາມຈໍາເປັນຕ້ອງຖືກນໍາໃຊ້ເພື່ອວາງໄຟລ໌ຄົງທີ່.

ໃນທີ່ `cloudflare` ພວກເຮົາເອົາ [backblaze.com](https://www.backblaze.com)

ສ້າງ bucket ຢູ່ທີ່ `backblaze.com` , ອັບໂຫລດໄຟລ໌ໃດໆ, ຄລິກເພື່ອທ່ອງໄຟລ໌, ແລະໄດ້ຮັບຊື່ໂດເມນຂອງ `Friendly URL` , ຊຶ່ງເປັນ `f003.backblazeb2.com` ຢູ່ທີ່ນີ້.

![](//p.3ti.site/1725440783.avif)

ປ່ຽນຊື່ໂດເມນຈາກ `CNAME` ຫາ `f003.backblazeb2.com` ຢູ່ `cloudflare` ແລະເປີດໃຊ້ຕົວແທນ.

![](//p.3ti.site/1725440896.avif)

ແກ້ໄຂ `cloudflare` ຈາກ `SSL` → ໂໝດການເຂົ້າລະຫັດ, ຕັ້ງເປັນ `Full`

![](//p.3ti.site/1725438572.avif)

ເພີ່ມກົດລະບຽບການແປງດັ່ງທີ່ສະແດງຂ້າງລຸ່ມນີ້, ໃສ່ມັນກ່ອນ (ອັນທໍາອິດມີຄວາມສໍາຄັນຕ່ໍາສຸດ):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` ເລືອກໄດນາມິກແລະດັດແປງ `your_bucketname` ໃນ `concat("/file/your_bucketname",http.request.uri.path)` ກັບຊື່ bucket ຂອງທ່ານ.

ນອກຈາກນັ້ນ, ໃນກົດລະບຽບການແປງ `cloudflare` ຂ້າງເທິງ, `index.html` ຖືກປ່ຽນເປັນ `file/your_bucketname/index.html` , ແລະການຕັ້ງຄ່າອື່ນໆຍັງຄົງຄືກັນ.

![](//p.3ti.site/1725441384.avif)