<h1 style="justify-content:space-between">I18N.SITE · Sınır tanımayan dil<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

Çok dilli bir statik site oluşturucu olan I18N.SITE, Markdown&#39;ı [yüzden fazla farklı dile](https://github.com/i18n-site/node/blob/main/lang/src/index.js) otomatik olarak çevirebilir.

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Bazı insanlar, artık tarayıcıların yerleşik çeviri işlevlerine sahip olduğuna göre, web sitesini uluslararası hale getirmenin gereksiz olup olmadığını sormak isteyebilir.

**Çok dilli site içi tam metin arama ve arama motoru optimizasyonunu ancak sitenin tamamını uluslararası hale getirerek destekleyebileceğimizi** söylemek istiyorum.

## Öğretici

## Fonksiyon Girişi

### Markdown Formatını Koru

### Çeviriyi Değiştir

Çeviriyi değiştirdikten sonra önbelleği güncellemek için `./i18n.sh` dosyasını yeniden çalıştırmanız gerekir.

### Çeviri Notları

Çeviri yorumlarının \``` sonrasındaki dili ` ```rust` gibi belirtmesi gerekir.

Şu anda pas, c, cpp, java, js, kahve, python ve bash için yorum çevirisini desteklemektedir.

Daha fazla dilde yorumlara çeviri desteği eklemek için [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) dosyasını düzenleyin.

### Proxy'yi Yapılandır

Aşağıdaki ortam değişkenlerinin ayarlanması, Google Translate API çağrılarının proxy üzerinden geçmesine olanak tanır.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Değişken Gömme

```
test: 测试变量<br 0>嵌入
```

### Önbelleği Boşalt

```bash
rm -rf .i18n/.cache
```
