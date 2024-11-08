# การนำทางที่กำหนดเอง

มาดูไซต์สาธิต [i18n-demo.github.io](//i18n-demo.github.io) เป็นตัวอย่างเพื่ออธิบายวิธีปรับแต่งการนำทาง

![](https://p.3ti.site/1731036697.avif)

ไฟล์ที่สอดคล้องกับพื้นที่หมายเลขในรูปด้านบนมีดังนี้:

1. ซ้าย [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. ขวา [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) เป็นภาษาเทมเพลตที่สร้าง `HTML`

[➔ คลิกที่นี่เพื่อเรียนรู้ไวยากรณ์ของ pug](https://pugjs.org)

สตริงรูปแบบ `${I18N.sponsor}` ถูกใช้ในไฟล์เพื่อดำเนินการให้เป็นสากล และเนื้อหาจะถูกแทนที่ด้วยข้อความที่เกี่ยวข้องใน [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) ในไดเร็กทอรีภาษาต้นฉบับ

**อย่าเขียน `css` และ `js` ใน `pug`** มิฉะนั้นจะเกิดข้อผิดพลาด

สไตล์ถูกเขียนเป็น `css` และการโต้ตอบทำได้โดยการสร้างส่วนประกอบของเว็บ

ไฟล์ที่ตรงกับสไตล์ของแถบ [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) คือ :