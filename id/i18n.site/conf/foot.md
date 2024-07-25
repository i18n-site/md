# Catatan Kaki

Masih mengambil proyek demo sebagai contoh, footer situs web `.i18n/htm/foot.pug` di direktori `md` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) adalah bahasa templat yang menghasilkan `HTML` .

[➔ Klik di sini untuk mempelajari tata bahasa pug](https://pugjs.org)

**Jangan menulis `css` dan `js` di `foot.pug`** , jika tidak maka akan terjadi kesalahan.

Silakan lihat yang berikut ini, gayanya ditulis dalam `.css` dan interaksinya dicapai dengan membuat komponen web.

## Gaya Catatan Kaki

Dalam proyek demo `md/.i18n/htm` Ada 3 `css` file di bawah ini.

* `foot.css` : Gaya catatan kaki
* `import.css` : #Gaya `i18n.site` untuk seluruh situs
* `conf.css` : Ikon dan font catatan kaki

### Font Ikon

Ikon footer dihasilkan oleh iconfont.cn ( [Versi bahasa Inggris](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) membuat font bernama `F`

Silakan buat font ikon Anda sendiri sesuai kebutuhan dan ganti : berikut di `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Komponen Web

`foot.pug` tidak dapat menulis `js` di dalamnya. Jika diperlukan interaksi, harap sesuaikan komponen halaman web.

Anda dapat mendefinisikan [komponen web](https://www.freecodecamp.org/news/build-your-first-web-component/) di `md/.i18n/htm/index.js` dan kemudian menggunakan komponen di `foot.pug` .

Sangat mudah untuk membuat komponen web, seperti tag khusus `<x-img>`

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

## Catatan Kaki Multibahasa

`.i18n/htm/foot.pug` Kode di dalamnya adalah sebagai berikut :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Di sini `${I18N.C}` Yang sesuai ada di `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Menggunakan `${I18N.xxx}` mirip dengan metode penulisan ini, dikombinasikan dengan `i18n.yml` , Anda dapat mencapai internasionalisasi footer multi-bahasa.

Tambahkan `class="a"` ke tautan untuk menghindari tautan dikonversi ke `MarkDown` , lihat :
 [: `YAML` mencegah `HTML` tautan diubah menjadi `Markdown`](/i18/qa#H2) .