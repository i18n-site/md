# Catatan Kaki

Masih mengambil proyek demo sebagai contoh, `.i18n/htm/foot.pug` di direktori `md` mendefinisikan footer situs web.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) adalah bahasa templat yang menghasilkan `HTML` .

[➔ Klik di sini untuk mempelajari tata bahasa pug](https://pugjs.org)

**Jangan menulis `css` dan `js` di `foot.pug`** , jika tidak maka akan terjadi kesalahan.

Silakan merujuk ke yang berikut ini, gaya ditulis ke dalam `.css` yang sesuai, dan interaksi dicapai dengan membuat komponen web.

## Gaya Catatan Kaki

Ada tiga file `css` di bawah `md/.i18n/htm` dalam proyek demo.

* `foot.css` : Gaya catatan kaki
* `import.css` : `i18n.site` untuk keseluruhan situs
* `conf.css` : Ikon dan font catatan kaki

### Font Ikon

Ikon footer dihasilkan dengan membuat font bernama `F` iconfont.cn ( [Versi bahasa Inggris](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Silakan buat font ikon Anda sendiri sesuai kebutuhan dan ganti konfigurasi berikut di `conf.css` :

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

Mohon jangan langsung mereferensikan file font iconfont.cn karena tidak dapat dimuat di browser safari.

## Komponen Web

Anda tidak dapat menulis `js` dalam `foot.pug` Jika diperlukan interaksi, harap sesuaikan komponen web.

[Komponen web](https://www.freecodecamp.org/news/build-your-first-web-component/) dapat didefinisikan dalam `md/.i18n/htm/index.js` dan kemudian digunakan dalam `foot.pug` .

Sangat mudah untuk membuat komponen web, seperti `<x-img>` khusus0 .

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

Kode di `.i18n/htm/foot.pug` adalah sebagai berikut :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Di sini `${I18N.C}` sama dengan `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Menggunakan `${I18N.xxx}` yang mirip dengan metode penulisan ini, dikombinasikan dengan `i18n.yml` , Anda dapat mencapai internasionalisasi footer multi-bahasa.

Menambahkan `class="a"` pada tautan bertujuan untuk mencegah tautan diubah menjadi `MarkDown` Lihat :
 [➔ `YAML` : Bagaimana mencegah tautan `HTML` diubah menjadi `Markdown`](/i18/qa#H2) .