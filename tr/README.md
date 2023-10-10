<h1 style="justify-content:space-between">3Ti.Site · Sınır Tanımayan Düşünmek<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Statik bir site oluşturucu olan 3Ti.Site, Markdown&#39;ı [yüzden fazla farklı dile](https://github.com/i18n-site/node/blob/main/lang/src/index.js) otomatik olarak çevirebilir.

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Bazı insanlar, tüm tarayıcıların çeviri işlevlerine sahip olması nedeniyle web sitesini uluslararası hale getirmenin gereksiz olup olmadığını sorabilir.

**Çok dilli site içi tam metin arama ve arama motoru optimizasyonunu ancak statik çeviri üreten web sitelerinin destekleyebileceğini** söylemek isterim.

## Giriiş

İncil · Yaratılış :

> Dillerin bir olduğu eski çağlarda insanlık, insanoğlunun gücünü ilan eden, Tanrı'nın hakimiyetine açılan bir kapı olan göklere uzanan bir kule inşa etti.
>
> Tanrı şöyle ilan etti: "İnsanlar ortak bir dille tek bir kabile olarak birleşiyorlar ve bu kule yalnızca bir giriş. Artık arzularına ulaşıyorlar ve artık korku olmayacak."
>
> Böylece Tanrı inmiş, insanları farklı köşelere dağıtmış, farklı diller kullanmıştır.
>
> O andan itibaren insanların iletişimi zorlaştı, anlaşmazlıklar bitmedi ve artık gökyüzüne dokunan bir kule kalmadı.

Bilim kurgu romanı &quot;Üç Beden&quot; (Çince telaffuzu: `3Ti` ), elektromanyetik dalgalar aracılığıyla iletişim kuran, dil engeli olmayan ve teknolojik açıdan zengin bir uzaylı uygarlığını kurguluyor.

Dünya insanlarının üç bedenli insanlar gibi olmasını, dile bağlı kalmadan iletişim kurmasını ve tüm insanlığı yeniden birleştirmesini sağlayacak bir araç yaratmayı umuyorum.

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
