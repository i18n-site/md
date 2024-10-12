# Alt Bilgi

Yine demo projesini örnek olarak alırsak, `md` dizinindeki `.i18n/htm/foot.pug` , web sitesinin altbilgisini tanımlar.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) `HTML` üreten bir şablon dilidir.

[➔ ! gramerini öğrenmek için buraya tıklayın pug](https://pugjs.org)

**`foot.pug` `css` ve `js` yazmayın** yoksa hata olur.

Lütfen aşağıya bakın, stil karşılık gelen `.css` yazılır ve etkileşim, web bileşenleri oluşturularak sağlanır.

## Altbilgi Stili

Demo projesinde `md/.i18n/htm` altında üç adet `css` dosyası bulunmaktadır.

* `foot.css` : Altbilgi stili
* `import.css` : 1Tüm site için `i18n.site` stil
* `conf.css` : Altbilgi simgeleri ve yazı tipleri

### Simge Yazı Tipi

Altbilgi simgesi, `F` iconfont.cn ( [İngilizce sürümü](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) adlı bir yazı tipi oluşturularak oluşturulur.

Lütfen gerektiği gibi kendi simge yazı tipinizi oluşturun ve aşağıdaki yapılandırmayı `conf.css` :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Bileşenleri

`foot.pug` `js` yazamazsınız. Etkileşim gerekiyorsa lütfen web bileşenini özelleştirin.

[Bir web bileşeni](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` tanımlanabilir ve daha sonra `foot.pug` kullanılabilir.

Özel `<x-img>` gibi web bileşenlerini oluşturmak kolaydır.

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

## Çok Dilli Altbilgi

`.i18n/htm/foot.pug` kod aşağıdaki gibidir :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Burada `${I18N.C}` `en/i18n.yml` karşılık gelir :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Bu yazma yöntemine benzer `${I18N.xxx}` `i18n.yml` ile birleştirerek altbilginin çok dilli uluslararası hale getirilmesini sağlayabilirsiniz.

Bağlantıya `class="a"` eklenmesi, bağlantının `MarkDown` dönüştürülmesini önlemek içindir. Bkz :
 [➔ `YAML` : Bağlantı `HTML` `Markdown` dönüştürülmesi nasıl önlenir](/i18/qa#H2) ?