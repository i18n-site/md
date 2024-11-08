# i18n.site MarkDown Yozuv Konventsiyasi

## Langar Nuqtasi

An'anaviy `MarkDown` ta langar nuqtalari matn mazmuni asosida yaratilgan. Ko'p tilli bo'lsa, bu yechim amalga oshirilmaydi.

`i18n.site` bilan kelishilgan langar nuqtasi yechimi joylashishni aniqlash langar nuqtasini qo'lda yaratish uchun `MarkDown` `<a rel=id href="#xxx" id="xxx"></a>` ga o'xshash matnni kiritishdir.

`<a rel=id href="#xxx" id="xxx"></a>` , bu erda `rel=id` bog'lanish nuqtasining sahifa uslubini belgilaydi, iltimos, `xxx` haqiqiy ingliz qisqartmangiz bilan almashtiring.

Sarlavhaga odatda langarlar qo'shiladi, masalan:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Displey effekti quyidagicha:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` Dan `HTML` Yozing

`pug` kodiga `HTML` kiritilishi mumkin.

`<pre>` elementdagi kontent tarjima qilinmaydi.

Ushbu ikki nuqtani birlashtirib, turli xil displey effektlariga erishish uchun `MarkDown` dan `HTML` osongina yozishingiz mumkin.

[Malumot uchun bu yerni bosing i18n.site Bosh sahifada HTML til kodlari ro'yxati yozilgan](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) va kod quyidagicha: :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

E'tibor bering, `<style>` yuqorida `<pre>` da aniqlangan.