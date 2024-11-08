# ติดตั้ง &

## ติดตั้ง

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## โทเค็นการกำหนดค่า

`i18n.site` มีเครื่องมือแปลในตัว `i18` โปรด [คลิกที่นี่เพื่อดูเอกสาร `i18` รายการเพื่อกำหนดค่าโทเค็นการเข้าถึง](/i18/use)

## โครงการสาธิต

เริ่มต้นด้วยโครงการสาธิตเพื่อเรียนรู้วิธีใช้ `i18n.site`

ก่อนอื่นเราจะโคลนพื้นที่เก็บข้อมูลสาธิตและรันคำสั่งดังต่อไปนี้:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

ผู้ใช้ในจีนแผ่นดินใหญ่สามารถ:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

ชื่อไดเร็กทอรีของโคลนฐานรหัส `demo.i18n.site` ต้องเป็น `md` เพื่ออำนวยความสะดวกในการดูตัวอย่างในเครื่องด้วย `docker`

### แปล

ขั้นแรก ป้อนไดเร็กทอรี `md` และรัน `i18n.site` ซึ่งจะแปล `en` เป็น `zh`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

หลังจากรันแล้ว ไฟล์การแปลและแคชจะถูกสร้างขึ้น โปรดอย่าลืมเพิ่มไฟล์เหล่านี้ไปยังที่เก็บใน `git add . ` `md`

### การแสดงตัวอย่างในท้องถิ่น

ติดตั้งและเริ่ม `docker` (ผู้ใช้ `MAC` แนะนำให้ใช้ [orbstack](https://orbstack.dev) เป็นรันไทม์สำหรับ `docker` )

จากนั้นป้อนไดเร็กทอรี `docker` และรัน `./up.sh` จากนั้นไปที่ [https://127.0.0.1](https://127.0.0.1) เพื่อดูตัวอย่างในเครื่อง

<img src="//p.3ti.site/1721104238.avif" style="width:360px">