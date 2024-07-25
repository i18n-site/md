# Pengaki

Masih mengambil projek demo sebagai contoh, pengaki tapak web `.i18n/htm/foot.pug` dalam direktori `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) ialah bahasa templat yang menjana `HTML` .

[➔ Klik di sini untuk mempelajari tatabahasa pug](https://pugjs.org)

**Jangan tulis `css` dan `js` dalam `foot.pug`** , jika tidak akan terdapat ralat.

Sila rujuk perkara berikut, gaya ditulis dalam `.css` dan interaksi dicapai dengan mencipta komponen web.

## Gaya Pengaki

Dalam projek demo `md/.i18n/htm` Terdapat 3 `css` fail di bawah.

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` : pengaki dan fon

### Fon Ikon

Ikon pengaki dijana oleh iconfont.cn ( [versi Inggeris](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) mencipta fon bernama `F`

Sila buat fon ikon anda sendiri mengikut keperluan dan gantikan : berikut dalam `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Komponen Web

`foot.pug` tidak boleh menulis `js` di dalamnya. Jika interaksi diperlukan, sila sesuaikan komponen halaman web.

Anda boleh mentakrifkan [komponen web](https://www.freecodecamp.org/news/build-your-first-web-component/) dalam `md/.i18n/htm/index.js` dan kemudian gunakan komponen dalam `foot.pug` .

Mudah untuk membuat komponen web, seperti teg tersuai `<x-img>`

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

## Pengaki Berbilang Bahasa

Kod di dalamnya : seperti berikut `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Menggunakan `${I18N.xxx}` sama dengan kaedah penulisan ini, digabungkan dengan `i18n.yml` , anda boleh mencapai pengantarabangsaan berbilang bahasa pengaki.

Tambahkan `class="a"` pada pautan untuk mengelakkan pautan ditukar kepada `MarkDown` , lihat :
 [: `YAML` untuk menghalang `HTML` pautan daripada ditukar kepada `Markdown`](/i18/qa#H2) .