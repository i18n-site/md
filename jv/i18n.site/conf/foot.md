# Kaki Sing Disesuaikan

Isih njupuk proyek demo minangka conto, `.i18n/htm/foot.pug` ing direktori `md` nemtokake footer situs web.

![](https://p.3ti.site/1721286077.avif)

## Gaya Footer

Ana telung file `css` ing sangisore `md/.i18n/htm` ing proyek demo.

* `foot.css` : gaya footer
* `import.css` : `i18n.site` kanggo kabeh situs
* `conf.css` : Ikon footer lan font

### Font Lambang

Ikon footer digawe kanthi nggawe font `F` iconfont.cn [versi Inggris](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Gawe font lambang sampeyan dhewe yen perlu lan ganti konfigurasi ing ngisor iki nganggo `conf.css` :

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

Aja langsung ngrujuk file font iconfont.cn amarga ora bisa dimuat ing browser safari.

## Komponen Web

Sampeyan ora bisa nulis `js` ing `foot.pug` Yen interaksi dibutuhake, mangga ngatur komponen web.

[Komponen web](https://www.freecodecamp.org/news/build-your-first-web-component/) bisa ditetepake ing `md/.i18n/htm/index.js` banjur digunakake ing `foot.pug` .

Iku gampang kanggo nggawe komponen web, kayata custom `<x-img>` .

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

## Footer Multibasa

Kode ing `.i18n/htm/foot.pug` kaya ing ngisor iki :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Ing kene `${I18N.C}` cocog karo `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Nggunakake `${I18N.xxx}` padha karo cara nulis iki, digabungake karo `i18n.yml` , sampeyan bisa entuk multi-basa internasionalisasi footer.

Nambahake `class="a"` menyang link kanggo nyegah link kasebut diowahi dadi `MarkDown` Waca :
 [➔ `YAML` : Carane nyegah link `HTML` diowahi dadi `Markdown`](/i18/qa#H2) .