# ส่วนท้าย

ยังคงใช้โครงการสาธิตเป็นตัวอย่าง ส่วนท้ายของเว็บไซต์ `.i18n/htm/foot.pug` กำหนดไว้ในไดเร็กทอรี `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) เป็นภาษาเทมเพลตที่สร้าง `HTML`

[➔ คลิกที่นี่เพื่อเรียนรู้ไวยากรณ์ของ pug](https://pugjs.org)

**อย่าเขียน `css` และ `js` ใน `foot.pug`** มิฉะนั้นจะเกิดข้อผิดพลาด

โปรดดูข้อมูลต่อไปนี้ สไตล์ถูกเขียนด้วย `.css` และการโต้ตอบทำได้โดยการสร้างส่วนประกอบของเว็บ

## สไตล์ส่วนท้าย

ในโครงการสาธิต `md/.i18n/htm` มี 3 `css` ไฟล์ด้านล่าง

* `foot.css` :
* `import.css` : `i18n.site` รูปแบบเริ่มต้นสำหรับทั้งไซต์
* `conf.css` :

### แบบอักษรของไอคอน

ไอคอนส่วนท้ายสร้างขึ้นโดย iconfont.cn ( [เวอร์ชันภาษาอังกฤษ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) สร้างแบบอักษรชื่อ `F`

โปรดสร้างแบบอักษรไอคอนของคุณเองตามต้องการและแทนที่ : กำหนดค่าต่อไปนี้ใน `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## ส่วนประกอบของเว็บ

`foot.pug` ไม่สามารถเขียน `js` ลงไปได้ หากจำเป็นต้องมีการโต้ตอบ โปรดปรับแต่งส่วนประกอบของหน้าเว็บ

คุณสามารถกำหนด [ส่วนประกอบของเว็บ](https://www.freecodecamp.org/news/build-your-first-web-component/) ใน `md/.i18n/htm/index.js` จากนั้นใช้ส่วนประกอบใน `foot.pug`

การสร้างส่วนประกอบของเว็บ เช่น แท็กที่กำหนดเอง เป็นเรื่องง่าย `<x-img>`

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

โค้ดในนั้น : ดังนี้ `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

ที่นี่ `${I18N.C}` อันที่ตรงกันอยู่ใน `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

การใช้ `${I18N.xxx}` คล้ายกับวิธีการเขียนนี้ รวมกับ `i18n.yml` คุณสามารถทำให้ส่วนท้ายเป็นสากลได้หลายภาษา

เพิ่ม `class="a"` ลงในลิงก์เพื่อหลีกเลี่ยงไม่ให้ลิงก์ถูกแปลงเป็น `MarkDown` โปรดดูที่ :
 [: `YAML` ป้องกันไม่ให้ `HTML` ของลิงค์ถูกแปลงเป็น `Markdown`](/i18/qa#H2) .