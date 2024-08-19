# Sıkça Sorulan Sorular

## Çeviride satır eklemek veya çıkarmak, çeviride karışıklığa neden olabilir

**Çevirideki satır sayısının orijinal metinle birebir eşleşmesi gerektiğini** unutmayın.

Yani çeviriyi manuel olarak ayarlarken **çeviriye satır eklemeyin veya çıkarmayın**, aksi takdirde çeviri ile orijinal metin arasındaki eşleme ilişkisi karışır.

Eğer yanlışlıkla satır eklediğinizde veya çıkardığınızda karışıklık yaşarsanız, lütfen çeviriyi değişiklikten önceki haline geri yükleyin, `i18` komutunu yeniden çalıştırın ve doğru eşlemeyi yeniden önbelleğe alın.

Çeviri ve orijinal metin arasındaki eşleme belirteçlerle bağlıdır. [i18n.site/token](//i18n.site/token) yeni bir belirteç oluşturun, `.i18h/hash` dosyasını silin ve karışık eşlemeyi temizlemek için yeniden çeviri yapın (ancak bu, çeviride yapılan tüm manuel ayarlamaları kaybedersiniz).

## `YAML`: Bağlantı `HTML`'nin `Markdown` olarak dönüştürülmesini nasıl önleyebilirim?

`YAML` değerleri, çeviri sırasında `Markdown` olarak değerlendirilir.

Bazen `HTML` → `Markdown` dönüşümü istediğiniz gibi olmayabilir, örneğin `<a href="/">Home</a>` gibi bir bağlantı `[Home](/)` olarak dönüştürülür.

`a` etiketine `href` dışında herhangi bir özellik ekleyerek, örneğin `<a class="A" href="/">Home</a>`, bu dönüşümü önleyebilirsiniz.

## `./i18n/hash` altındaki dosya çakışması

Çakışan dosyaları silin ve `i18` komutunu yeniden çalıştırın.