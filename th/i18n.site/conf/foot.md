# ส่วนท้ายที่กำหนดเอง

ยังคงใช้โครงการสาธิตเป็นตัวอย่าง `.i18n/htm/foot.pug` ในไดเรกทอรี `md` กำหนดส่วนท้ายของเว็บไซต์

![](https://p.3ti.site/1721286077.avif)

## สไตล์ส่วนท้าย

มีไฟล์ `css` สามไฟล์ที่ต่ำกว่า `md/.i18n/htm` ในโครงการสาธิต

* `foot.css` : สไตล์ส่วนท้าย
* `import.css` : 1 รูปแบบ `i18n.site` สำหรับทั้งไซต์
* `conf.css` : ไอคอนและแบบอักษรส่วนท้าย

### แบบอักษรของไอคอน

ไอคอนส่วนท้ายถูกสร้างขึ้นโดยการสร้างแบบอักษรชื่อ `F` iconfont.cn ( [เวอร์ชันภาษาอังกฤษ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh))

โปรดสร้างแบบอักษรไอคอนของคุณเองตามต้องการและแทนที่การกำหนดค่าต่อไปนี้ใน `conf.css` :

```
@font-face {
  font-family: "F";
  src: url(//p.3ti.site/ico1.woff2) format("woff2");
}

#Ft>b>a.site {
  background: url("//p.3ti.site/i18n.svg") 0 0 / cover;
  display: block;
  height: 24px;
  opacity: 0.8;
  width: 115px;
  flex-shrink: 0;
}
```

โปรดอย่าอ้างอิงไฟล์ฟอนต์ของ iconfont.cn โดยตรง เนื่องจากไม่สามารถโหลดบนเบราว์เซอร์ซาฟารีได้

## ส่วนประกอบของเว็บ

คุณไม่สามารถเขียน `js` ใน `foot.pug` ได้ หากจำเป็นต้องมีการโต้ตอบ โปรดปรับแต่งองค์ประกอบเว็บ

[คอมโพเนนต์ของเว็บ](https://www.freecodecamp.org/news/build-your-first-web-component/) สามารถกำหนดเป็น `md/.i18n/htm/index.js` แล้วใช้ใน `foot.pug` ได้

การสร้างส่วนประกอบของเว็บ เช่น `<x-img>` ที่กำหนดเอง0 เป็นเรื่องง่าย

```js
customElements.define(
  'x-img',
  class extends HTMLElement {
    constructor() {
      super();
      var img = document.createElement('img');
      img.src = '//p.3ti.site/i18n.svg';
      img.style = "height:99px;width:99px;";
      this.append(img);
    }
  }
)
```

## ส่วนท้ายหลายภาษา

รหัสใน `.i18n/htm/foot.pug` มีดังนี้ :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

ที่นี่ `${I18N.C}` สอดคล้องกับ `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

การใช้ `${I18N.xxx}` คล้ายกับวิธีการเขียนนี้ รวมกับ `i18n.yml` คุณสามารถทำให้ส่วนท้ายเป็นสากลได้หลายภาษา

การเพิ่ม `class="a"` ให้กับลิงก์เป็นการป้องกันไม่ให้ลิงก์ถูกแปลงเป็น `MarkDown` ดู :
 [➔ `YAML` : วิธีป้องกันไม่ให้ลิงค์ `HTML` ถูกแปลงเป็น `Markdown`](/i18/qa#H2)