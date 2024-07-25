# Altbilgi

Yine demo projesini örnek alarak, web sitesinin altbilgisi `md` dizininde `.i18n/htm/foot.pug` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) `HTML` üreten bir şablon dilidir.

[➔ pug gramerini öğrenmek için buraya tıklayın.](https://pugjs.org)

**`css` ve `js` `foot.pug`** , aksi takdirde hatalar olur.

Lütfen aşağıya bakın, stil ilgili `.css` de yazılmıştır ve etkileşim, web bileşenleri oluşturularak sağlanır.

## Altbilgi Stili

Demo `md/.i18n/htm` aşağıda 3 `css` dosya bulunmaktadır.

* : stili `foot.css`
* `import.css` Tüm site için : `i18n.site` stil
* Altbilgi simgeleri ve : tipleri `conf.css`

### Simge Yazı Tipi

Altbilgi simgesi iconfont.cn ( [İngilizce sürümü](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) `F`

Lütfen gerektiği gibi kendi simge yazı tipinizi oluşturun ve : yapılandırmayı `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Bileşenleri

`foot.pug` içine `js` yazılamaz. Etkileşim gerekiyorsa lütfen web sayfası bileşenini özelleştirin.

[Bir web bileşenini](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` 'de tanımlayabilir ve ardından bileşeni `foot.pug` de kullanabilirsiniz.

Özel etiketler gibi web bileşenleri oluşturmak kolaydır `<x-img>`

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

`.i18n/htm/foot.pug` İçindeki kod aşağıdaki gibidir :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Burada `${I18N.C}` İlgili olan `en/i18n.yml` da :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Bu yazma yöntemine benzer bir `${I18N.xxx}` `i18n.yml` kullanarak altbilginin çok dilli uluslararası hale getirilmesini sağlayabilirsiniz.

Bağlantının `MarkDown` biçimine dönüştürülmesini önlemek için bağlantıya `class="a"` ekleyin, bkz :
 [: Bağlantının `HTML` inin `Markdown` a dönüştürülmesi `YAML` önlenir](/i18/qa#H2) ?