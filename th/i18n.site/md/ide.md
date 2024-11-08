# คำแนะนำบรรณาธิการ

ทุกคนมีโปรแกรมแก้ไขที่ชื่นชอบเป็นของตัวเอง ที่นี่เราแบ่งปันแนวทางปฏิบัติที่ดีที่สุด `Markdown` ข้อของเรา

เราใช้ [vscode](https://code.visualstudio.com/) เพื่อเขียน `MarkDown` และติดตั้งปลั๊กอิน [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) เพื่อดูตัวอย่างแบบเรียลไทม์ขณะเขียน

ดังที่แสดงด้านล่าง คลิกขวาในตัวแก้ไขเพื่อเปิดหน้าต่างแสดงตัวอย่าง

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

ป้อน `code xxx.md` ในบรรทัดคำสั่งเพื่อเรียก `vscode` เพื่อเปิดไฟล์ `Markdown`

ใช้ [PicList](https://github.com/Kuingsmile/PicList) เพื่ออัพโหลดรูปภาพ อย่าลืมตั้งค่าปุ่มลัดสำหรับการอัพโหลด และอัพโหลดภาพหน้าจอได้ในคลิกเดียว

รองรับการคัดลอกชื่อไฟล์เป็นรูปแบบ `Markdown` โดยอัตโนมัติหลังจากอัปโหลด ซึ่งช่วยเพิ่มประสิทธิภาพได้อย่างมาก

ในเวลาเดียวกัน คุณสามารถอ้างถึงการกำหนดค่าต่อไปนี้ แก้ไขไฟล์ และกำหนดค่าไฟล์ที่อัปโหลดให้บีบอัดเป็น `avif` โดยอัตโนมัติเพื่อลดขนาดรูปภาพ

```json
"buildIn": {
  "compress": {
    "quality": 99,
    "isConvert": true,
    "convertFormat": "avif",
    "isReSize": false,
    "reSizeWidth": 0,
    "reSizeHeight": 0,
    "skipReSizeOfSmallImg": false,
    "isReSizeByPercent": false,
    "reSizePercent": 50,
    "isRotate": false,
    "rotateDegree": 0,
    "isRemoveExif": true,
    "isFlip": false,
    "isFlop": false,
    "formatConvertObj": {}
  },
  … …
```