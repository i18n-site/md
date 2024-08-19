# Alt Bilgi

Yine de gösteri projesi örneğine bakacak olursak, `md` dizinindeki `.i18n/htm/foot.pug` dosyası, web sitesinin alt bilgisini tanımlar.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) `HTML` oluşturan bir şablon dilidir.

[➔ pug dilbilgisi öğrenmek için buraya tıklayın](https://pugjs.org)

**`foot.pug` dosyasında `css` ve `js` yazmayın**, aksi takdirde hata alırsınız.

Lütfen aşağıdaki bilgileri inceleyin, stillerini ilgili `.css` dosyalarına yazın ve etkileşimleri web bileşenleri ile sağlayın.

## Alt Bilgi Stili

Gösteri projesinde `md/.i18n/htm` dizini altında üç adet `css` dosyası bulunmaktadır.

* `foot.css`: Alt bilgi stili
* `import.css`: `i18n.site` için tüm site genelindeki varsayılan stiller
* `conf.css`: Alt bilgi simgeleri ve yazı tipleri

### Simge Yazı Tipi

Alt bilgi simgesi, `F` adlı yazıtipi, iconfont.cn ( [İngilizce sürümü](https://www.iconfont.cn/?lang=en-us) / [Çince sürümü](https://www.iconfont.cn/?lang=zh) ) üzerinden oluşturulmuştur.

Lütfen kendi simge yazı tipinizi oluşturun ve `conf.css` dosyasındaki aşağıdaki yapılandırmaları değiştirin:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Bileşenleri

`foot.pug` dosyasında `js` yazamazsınız. Eğer etkileşim gerekiyorsa, lütfen bir web bileşeni tanımlayın.

`md/.i18n/htm/index.js` dosyasında bir [web bileşeni](https://www.freecodecamp.org/news/build-your-first-web-component/) tanımlayabilir ve ardından `foot.pug` dosyasında bu bileşeni kullanabilirsiniz.

Örneğin, özel bir `<x-img>` etiketi oluşturmak çok basittir.

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

## Çok Dilli Alt Bilgi

`.i18n/htm/foot.pug` dosyasında aşağıdaki kod bulunmaktadır:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Burada `${I18N.C}` `en/i18n.yml` dosyasındaki:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`${I18N.xxx}` gibi yazım tarzını kullanarak ve `i18n.yml` dosyası ile birleştirerek, alt bilginin çok dilli hale getirilmesini sağlayabilirsiniz.

Bağlantıya `class="a"` eklenmesi, bağlantının `MarkDown` dönüştürülmesini önlemek içindir. Bkz :
 [➔ `YAML` : Bağlantı `HTML` `Markdown` dönüştürülmesi nasıl önlenir](/i18/qa#H2) ?