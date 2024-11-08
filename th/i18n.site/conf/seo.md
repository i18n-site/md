# การเพิ่มประสิทธิภาพกลไกค้นหา (SEO)

## หลักการ

`i18n.site` ใช้สถาปัตยกรรมหน้าเดียวที่ไม่รีเฟรช เพื่ออำนวยความสะดวกในการจัดทำดัชนีการค้นหา จะมีการสร้างหน้าคงที่แยกต่างหากและ `sitemap.xml` เพื่อให้โปรแกรมรวบรวมข้อมูลรวบรวมข้อมูล

เมื่อโปรแกรมรวบรวมข้อมูลของเครื่องมือค้นหาใช้ `User-Agent` ของคำขอเข้าถึง คำขอจะถูกเปลี่ยนเส้นทางไปยังเพจสแตติกผ่าน `302`

บนเพจแบบคงที่ ให้ใช้ `link` เพื่อระบุลิงก์ไปยังเวอร์ชันภาษาต่างๆ ของเพจนี้ เช่น :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## การกำหนดค่า nginx ในเครื่อง

นำไฟล์การกำหนดค่า `.i18n/htm/main.yml` ในโครงการสาธิตเป็นตัวอย่าง

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

ก่อนอื่น โปรดแก้ไขค่า `host:` ด้านบนเป็นชื่อโดเมนของคุณ เช่น `xxx.com`

จากนั้น `i18n.site -n` หน้าสแตติกจะถูกสร้างขึ้นในไดเร็กทอรี `out/main/htm`

แน่นอน คุณยังสามารถเปิดใช้งานไฟล์การกำหนดค่าอื่นๆ ได้ เช่น ก่อนอื่นให้อ้างอิงถึงการกำหนดค่า `main` เพื่อสร้าง `.i18n/htm/dist.package.json` และ `.i18n/htm/dist.yml`

จากนั้นรัน `i18n.site -n -c dist` เพื่อให้เพจสแตติกถูกสร้างขึ้นเป็น `out/dist/htm`

`nginx` สามารถตั้งค่าได้โดยอ้างอิงจากการกำหนดค่าด้านล่าง

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# อย่าแคชสคริปต์ผู้ปฏิบัติงานเซิร์ฟเวอร์นานเกินไป
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# ตั้งเวลาแคชให้นานขึ้นสำหรับทรัพยากรคงที่อื่นๆ
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# ตั้งค่าไฟล์สแตติกที่โปรแกรมรวบรวมข้อมูลใช้เป็นรายการหน้าแรก
location = / {
  # หาก $botLang ไม่ว่างเปล่า แสดงว่าเข้าถึงและเปลี่ยนเส้นทางของโปรแกรมรวบรวมข้อมูลตามเส้นทางภาษาที่ตั้งไว้
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# การกำหนดค่าแอปพลิเคชันหน้าเดียว
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## กำหนดค่าพื้นที่เก็บข้อมูลอ็อบเจ็กต์สำหรับการอัปโหลดไฟล์แบบคงที่

ไฟล์แบบคงที่สามารถสร้างได้ในเครื่อง แต่แนวทางทั่วไปคือการอัปโหลดไฟล์เหล่านั้นไปยังที่เก็บข้อมูลอ็อบเจ็กต์

แก้ไข `out` ที่กำหนดค่าด้านบนเป็น :

```
out:
  - s3
```

จากนั้นแก้ไข `~/.config/i18n.site.yml` และเพิ่มการกำหนดค่าต่อไปนี้ :

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

ในการกำหนดค่า โปรดเปลี่ยน `i18n.site` เป็นค่า `host:` in `.i18n/htm/main.yml` สามารถกำหนดค่าที่เก็บอ็อบเจ็กต์หลายรายการภายใต้ `s3` และฟิลด์ `region` เป็นทางเลือก (ที่เก็บอ็อบเจ็กต์จำนวนมากไม่จำเป็นต้องตั้งค่าฟิลด์นี้)

จากนั้นรัน `i18n.site -n` เพื่อเผยแพร่โครงการอีกครั้ง

หากคุณได้แก้ไข `~/.config/i18n.site.yml` และต้องการอัปโหลดอีกครั้ง โปรดใช้คำสั่งต่อไปนี้ในไดเร็กทอรีรากของโปรเจ็กต์เพื่อล้างแคชการอัปโหลด :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## การกำหนดค่าคลาวด์แฟลร์

ชื่อโดเมนโฮสต์ถึง [cloudflare](//www.cloudflare.com)

### กฎการแปลง

เพิ่มกฎการแปลงตามที่แสดงด้านล่าง:

![](//p.3ti.site/1725436822.avif)

รหัสกฎมีดังนี้ โปรดแก้ไขรหัส "i18n.site" เป็นชื่อโดเมนของคุณ:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### กฎการแคช

เพิ่มกฎแคชดังนี้:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### กฎการเปลี่ยนเส้นทาง

ตั้งกฎการเปลี่ยนเส้นทางดังต่อไปนี้ โปรดแก้ไขโค้ด "i18n.site" เป็นชื่อโดเมนของคุณ

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

`URL redirect` เลือกการเปลี่ยนเส้นทางแบบไดนามิก โปรดแก้ไข `/en` ในเส้นทางการเปลี่ยนเส้นทาง `concat("/en",http.request.uri.path,".htm")` เป็นภาษาเริ่มต้นที่คุณต้องการให้เครื่องมือค้นหารวมไว้

## การกำหนดค่าคลาวด์อัจฉริยะของ Baidu

หากคุณต้องการให้บริการไปยังจีนแผ่นดินใหญ่ คุณสามารถใช้ [Baidu Smart Cloud](//cloud.baidu.com) ได้

ข้อมูลจะถูกอัปโหลดไปยัง Baidu Object Storage และเชื่อมโยงกับ Baidu Content Distribution Network

จากนั้นสร้างสคริปต์ใน [บริการ EdgeJS edge](//console.bce.baidu.com/cdn/#/cdn/ejs/list) ดังนี้

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
  // ส่วนหัวการตอบกลับสามารถตั้งค่าเป็นเอาต์พุตการดีบัก เช่น out.XXX = 'MSG';
})
```

คลิก `Debug` จากนั้นคลิกเผยแพร่ไปยังเครือข่ายทั้งหมด

![](//p.3ti.site/1725437754.avif)

## การใช้งานขั้นสูง: กระจายการรับส่งข้อมูลตามความละเอียดของภูมิภาค

หากคุณต้องการให้บริการในจีนแผ่นดินใหญ่และต้องการรับส่งข้อมูลระหว่างประเทศฟรี `cloudflare` รายการ คุณสามารถใช้ `DNS` กับความละเอียดระดับภูมิภาคได้

ตัวอย่างเช่น [Huawei Cloud DNS](https://www.huaweicloud.com) ให้การวิเคราะห์ระดับภูมิภาคฟรี โดยการรับส่งข้อมูลในจีนแผ่นดินใหญ่สามารถผ่าน Baidu Smart Cloud ได้ และการรับส่งข้อมูลระหว่างประเทศสามารถผ่าน `cloudflare` ได้

มีข้อผิดพลาดมากมายในการกำหนดค่า `cloudflare` ต่อไปนี้เป็นประเด็นที่ควรทราบ :

### ชื่อโดเมนโฮสต์อยู่ใน `DNS` อื่น วิธีใช้ `cloudflare`

ขั้นแรกผูกชื่อโดเมนที่ต้องการกับ `cloudflare` จากนั้นใช้ `SSL/TLS` → ชื่อโดเมนที่กำหนดเองเพื่อเชื่อมโยงชื่อโดเมนหลักกับชื่อโดเมนนี้

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` ไม่สามารถเข้าถึงได้ผ่านชื่อโดเมนที่กำหนดเอง

เนื่องจาก `cloudflare` เก็บข้อมูลอ็อบเจ็กต์ในตัว `R2` ไม่สามารถเข้าถึงได้ด้วยชื่อโดเมนที่กำหนดเอง จึงจำเป็นต้องใช้ที่เก็บข้อมูลอ็อบเจ็กต์ของบริษัทอื่นเพื่อวางไฟล์แบบคงที่

ที่นี่เราใช้ [backblaze.com](https://www.backblaze.com) เป็นตัวอย่างเพื่อสาธิตวิธีการผูกวัตถุบุคคลที่สามที่จะเก็บไว้ที่ `cloudflare`

สร้างบัคเก็ตที่ `backblaze.com` อัพโหลดไฟล์ คลิกเพื่อเรียกดูไฟล์ และรับชื่อโดเมน `Friendly URL` ซึ่งก็คือ `f003.backblazeb2.com` ที่นี่

![](//p.3ti.site/1725440783.avif)

เปลี่ยนชื่อโดเมนจาก `CNAME` เป็น `f003.backblazeb2.com` ที่ `cloudflare` และเปิดใช้งานพรอกซี

![](//p.3ti.site/1725440896.avif)

แก้ไข `cloudflare` จาก `SSL` → โหมดการเข้ารหัส ตั้งเป็น `Full`

![](//p.3ti.site/1725438572.avif)

เพิ่มกฎการแปลงตามที่แสดงด้านล่าง วางไว้ก่อน (กฎแรกมีลำดับความสำคัญต่ำสุด):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` เลือกไดนามิกและแก้ไข `your_bucketname` ใน `concat("/file/your_bucketname",http.request.uri.path)` เป็นชื่อบัคเก็ตของคุณ

นอกจากนี้ ในกฎการแปลง `cloudflare` ด้านบน `index.html` เปลี่ยนเป็น `file/your_bucketname/index.html` และการกำหนดค่าอื่นๆ ยังคงเหมือนเดิม

![](//p.3ti.site/1725441384.avif)