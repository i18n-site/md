# การประชุมรูปแบบ MarkDown

## จุดยึด

Traditional `MarkDown` Anchors ถูกสร้างขึ้นตามเนื้อหาข้อความ ในกรณีของหลายภาษา วิธีแก้ไขนี้ไม่สามารถทำได้

`i18n.site` วิธีแก้ปัญหาจุดยึดที่ตกลงกันไว้คือการแทรกข้อความที่คล้ายกับ `<a rel=id href="#xxx" id="xxx"></a>` ใน `MarkDown` เพื่อสร้างจุดยึดตำแหน่งด้วยตนเอง

`<a rel=id href="#xxx" id="xxx"></a>` ในที่นี้ `rel=id` กำหนดรูปแบบหน้าของจุดยึด โปรดแทนที่ `xxx` ด้วยตัวย่อภาษาอังกฤษของจุดยึดจริงของคุณ

โดยปกติแล้ว Anchor จะถูกเพิ่มเข้าไปในชื่อ เช่น:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

เอฟเฟกต์การแสดงผลมีดังนี้:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` ใน `MarkDown`

`pug` `HTML` สามารถฝังอยู่ในโค้ดได้

เนื้อหาภายในองค์ประกอบ `<pre>`

เมื่อรวมสองจุดนี้เข้าด้วยกัน คุณสามารถเขียน `HTML` in `MarkDown` เพื่อให้ได้เอฟเฟ็กต์การแสดงผลต่างๆ ได้อย่างง่ายดาย

คุณสามารถอ้างอิงการใช้งานได้ใน [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) มีโค้ดดังต่อไปนี้ :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

โปรดทราบว่า `<style>` ถูกกำหนดไว้ใน `<pre>` ด้านบนด้วย
