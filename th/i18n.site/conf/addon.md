# ปลั๊กอิน

ปลั๊กอินสามารถกำหนดค่าได้ใน `.i18n/conf.yml` เช่น:

```yml
addon:
  - i18n.addon/toc
```

## ปลั๊กอินอย่างเป็นทางการ

* `i18n.addon/toc` : ดัชนีไดเร็กทอรี
  สร้างดัชนีไดเร็กทอรี `json` ตาม `TOC` ซึ่งเปิดใช้งานตามค่าเริ่มต้น

* `i18n.addon/mouse` : เอฟเฟกต์เมาส์

## แบบแผนชื่อไฟล์

ปลั๊กอินมีทั้งหมด `npm` แพ็คเกจ

แพ็คเกจที่สอดคล้องกับ `i18n.addon/toc` ด้านบนคือ [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

ปลั๊กอินจะใช้เวอร์ชันล่าสุดเป็นค่าเริ่มต้นและตรวจสอบการอัปเดตทุกสัปดาห์

หากคุณต้องการแก้ไขเวอร์ชันคุณสามารถเขียน `i18n.addon/toc@0.1.3` ได้

บรรทัดคำสั่งการแปล `i18n.site` จะติดตั้งไฟล์ข้อตกลงของแพ็คเกจปลั๊กอิน จากนั้นจึงดำเนินการ

ชื่อไฟล์ที่ตกลงกันมีดังนี้

### htmIndex.js

`htmIndex.js` จะถูกฉีดไปที่ส่วนท้ายของ `.i18n/htm/index.js`

โดยที่ `__CONF__` จะถูกแทนที่ด้วยชื่อของการกำหนดค่าปัจจุบัน (เช่น `dev` หรือ `ol` )

### afterTran.js

มันจะถูกเรียกหลังจากการแปลเสร็จสิ้น และพารามิเตอร์ที่ส่งเข้ามามีดังนี้

* `lang_li` : รายการภาษา ภาษาแรกคือภาษาต้นฉบับ
* `changed` : ไฟล์ที่ถูกแก้ไข
* `root` : ไดเรกทอรีรากของโครงการ

ค่าที่ส่งคืนจะเป็นพจนานุกรมเช่น

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` คือรายการไฟล์เอาต์พุต `path` คือพาธของไฟล์ และ `txt` คือเนื้อหาไฟล์

## ฟังก์ชั่นในตัว

รันไทม์ `js` ในตัวขึ้นอยู่กับการพัฒนารองของ [boa](https://github.com/boa-dev/boa) และฟังก์ชันในตัวมีดังนี้ :

* `wPath(path, txt)` : เขียนลงไฟล์
* `rTxt(path)` : อ่านไฟล์ข้อความ
* `rBin(path)` : อ่านไฟล์ไบนารี
* `rDir(dirpath)` : อ่านไดเร็กทอรี ค่าที่ส่งคืนคืออาร์เรย์ : รายการไดเร็กทอรี รายการไฟล์

## คู่มือการพัฒนา

การพัฒนาปลั๊กอินสามารถอ้างอิงได้ [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)