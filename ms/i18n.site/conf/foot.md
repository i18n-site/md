# Pengaki

Masih mengambil projek demo sebagai contoh, `.i18n/htm/foot.pug` dalam direktori `md` mentakrifkan pengaki tapak web.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) ialah bahasa templat yang menjana `HTML` 's.

[➔ Klik di sini untuk mempelajari tatabahasa pug](https://pugjs.org)

**Jangan tulis `css` dan `js` dalam `foot.pug`** , jika tidak akan berlaku ralat.

Sila rujuk perkara berikut, gaya ditulis ke dalam `.css` yang sepadan, dan interaksi dicapai dengan mencipta komponen web.

## Gaya Pengaki

Terdapat tiga `css` fail di bawah `md/.i18n/htm` dalam projek demo.

* `foot.css` : gaya pengaki
* `import.css` : `i18n.site` untuk keseluruhan tapak
* `conf.css` : ikon pengaki dan fon

### Fon Ikon

Ikon pengaki dijana dengan mencipta fon bernama `F` iconfont.cn ( [versi Inggeris](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Sila buat fon ikon anda sendiri mengikut keperluan dan gantikan konfigurasi berikut dalam `conf.css` :

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

Sila jangan rujuk terus fail fon iconfont.cn kerana ia tidak boleh dimuatkan pada pelayar safari.

## Komponen Web

Anda tidak boleh menulis `js` dalam `foot.pug` Jika interaksi diperlukan, sila sesuaikan komponen web.

[Komponen web](https://www.freecodecamp.org/news/build-your-first-web-component/) boleh ditakrifkan dalam `md/.i18n/htm/index.js` dan kemudian digunakan dalam `foot.pug` .

Mudah untuk membuat komponen web, seperti `<x-img>` tersuai0 .

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

Kod dalam `.i18n/htm/foot.pug` adalah seperti berikut :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Di sini `${I18N.C}` sepadan dengan `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Menggunakan `${I18N.xxx}` yang serupa dengan kaedah penulisan ini, digabungkan dengan `i18n.yml` , anda boleh mencapai pengantarabangsaan berbilang bahasa pengaki.

Menambah `class="a"` pada pautan adalah untuk mengelakkan pautan daripada ditukar kepada `MarkDown` Lihat :
 [➔ `YAML` : Bagaimana untuk mengelakkan pautan `HTML` daripada ditukar kepada `Markdown`](/i18/qa#H2) .