# I18N.SITE · ภาษาไร้พรมแดน<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE เครื่องมือสร้างเว็บไซต์แบบคงที่ที่รองรับการแปลอัตโนมัติเป็น [ภาษาต่างๆ 100 ภาษา](https://github.com/i18n-site/node/blob/main/lang/src/index.js)

<img src="https://i-01.eu.org/2023/09/O0Tee_m.webp" alt="" />

บางคนอาจอยากถามว่าตอนนี้เบราว์เซอร์มีฟังก์ชั่นการแปลในตัวแล้ว ไม่จำเป็นต้องทำให้เว็บไซต์เป็นสากลหรือไม่?

ฉันอยากจะบอกว่า **เฉพาะการทำให้ไซต์ทั้งหมดเป็นสากลเท่านั้นที่เราสามารถรองรับการค้นหาข้อความแบบเต็มในไซต์หลายภาษาและการเพิ่มประสิทธิภาพกลไกค้นหา**

## บทช่วยสอน

## บทนำฟังก์ชั่น

### เก็บรูปแบบ Markdown ไว้

### แก้ไขการแปล

หลังจากแก้ไขการแปล คุณจะต้องรัน `./i18n.sh` อีกครั้งเพื่ออัปเดตแคช

### หมายเหตุการแปล

ความคิดเห็นเกี่ยวกับคำแปลต้องระบุภาษาที่ตามหลัง \``` เช่น ` ```rust`

ปัจจุบันรองรับการแปลความคิดเห็นสำหรับrust, c, cpp, java, js, coffee, python และ bash

แก้ไข [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) เพื่อเพิ่มการสนับสนุนการแปลความคิดเห็นในภาษาต่างๆ มากขึ้น

### กำหนดค่าพร็อกซี

การตั้งค่าตัวแปรสภาพแวดล้อมต่อไปนี้ทำให้การเรียก Google Translate API ผ่านพร็อกซีได้

```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
export https_proxy=http://127.0.0.1:7890
```

### การฝังตัวแปร

```
test: 测试变量<br 0>嵌入
```

### ล้างแคช

```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
rm -rf .i18n/.cache
```
